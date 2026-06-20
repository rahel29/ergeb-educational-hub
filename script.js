/* DARK MODE */
const darkBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    if (darkBtn) darkBtn.innerText = "Light Mode";
}

if (darkBtn) {
    darkBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkBtn.innerText = "Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkBtn.innerText = "Dark Mode";
        }
    });
}

/* LIVE SEARCH */
const searchInput = document.getElementById("searchInput");
const yearFilter = document.getElementById("yearFilter");

function filterExams() {
    let searchText = searchInput.value.toLowerCase();
    let selectedYear = yearFilter.value;
    let cards = document.querySelectorAll(".exam-card");

    cards.forEach(function(card) {
        let text = card.innerText.toLowerCase();
        let year = card.getAttribute("data-year");
        let matchesSearch = text.includes(searchText);
        let matchesYear = selectedYear === "all" || selectedYear === year;

        if (matchesSearch && matchesYear) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

/* EVENTS */
if (searchInput) searchInput.addEventListener("keyup", filterExams);
if (yearFilter) yearFilter.addEventListener("change", filterExams);

/* UPLOAD EXAM */
function uploadExam() {
    const fileInput = document.getElementById("examUpload");
    const message = document.getElementById("uploadMessage");

    if (fileInput && fileInput.files.length > 0) {
        let fileName = fileInput.files[0].name;
        message.innerHTML = "Exam Uploaded Successfully: " + fileName;
        message.style.color = "green";
    } else if (message) {
        message.innerHTML = "Please select a file.";
        message.style.color = "red";
    }
}