let currentPage = 1;
const totalPages = 8;

const pageImg = document.getElementById("bookPage");
const viewer = document.getElementById("bookViewer");

function openBook() {
  currentPage = 1;
  pageImg.src = `assets/books/tracing/page${currentPage}.jpg`;
  viewer.style.display = "flex";
}

function closeBook() {
  viewer.style.display = "none";
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    pageImg.src = `assets/books/tracing/page${currentPage}.jpg`;
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    pageImg.src = `assets/books/tracing/page${currentPage}.jpg`;
  }
}
