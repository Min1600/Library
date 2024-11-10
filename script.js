//const data = require('./data.json');
const book = document.getElementById("book")
const author = document.getElementById("author")
const category = document.getElementById("category")
const titleSearch = document.getElementById("searchBook")
const authorSearch = document.getElementById("searchAuthor")
const categorySearch = document.getElementById("searchCategory")
const content = document.getElementById("bookData")
const TitleSearchBtn = document.getElementById("titlesearchbtn")
const AuthorSearchBtn = document.getElementById("authorsearchbtn")
const categorySearchBtn = document.getElementById("categorysearchbtn")
const dropDown = document.getElementById("searchCategory")

window.onload = () => { 
    if (!localStorage.getItem('Library')) {
    localStorage.setItem('Library', JSON.stringify(data.Library));
  }
  createOption()
}

function addBook(){
const books = JSON.parse(localStorage.getItem('Library')) || [];
const newBook = 
{
    "Book": book.value,
    "Author": author.value,
    "Category": category.value
}

books.push(newBook)
localStorage.setItem('Library', JSON.stringify(books));
}

function search(match, type){
content.textContent = ""
const books = JSON.parse(localStorage.getItem('Library')) || [];
const lowerCaseMatch = match.toLowerCase();

let filteredBooks =  books.filter((item) => item[type].toLowerCase().startsWith(lowerCaseMatch ))
filteredBooks.forEach((item) => appendData(item))
}

function searchCategory(match, type){
  content.textContent = ""
  const books = JSON.parse(localStorage.getItem('Library')) || [];

  let filteredBooks =  books.filter((item) => item[type] === match)
filteredBooks.forEach((item) => appendData(item))
}

function appendData(data){
  const titleData = document.createElement("h2")
  const authorData = document.createElement("p")
  const categoryData = document.createElement("p")
  const deleteBtn = document.createElement("button")

  titleData.textContent = data.Book
  authorData.textContent = data.Author
  categoryData.textContent =  data.Category
  deleteBtn.textContent = "Delete"

  deleteBtn.onclick = function () {
    deleteData(data);
  }

  content.appendChild(titleData)
  content.appendChild(authorData)
  content.appendChild(categoryData)
  content.appendChild(deleteBtn)
}

function createOption(){
  const books = JSON.parse(localStorage.getItem('Library')) || [];

  books.forEach((item) => {
    let newOption = document.createElement("option")
    newOption.textContent = item["Category"]
    dropDown.appendChild(newOption)
  })
}

function deleteData(match){
  let confirmation = confirm("Are you sure you want to delete?")
  const library = JSON.parse(localStorage.getItem('Library')) || [];

  if(confirmation){
  library.splice([library.indexOf(match)], 1)
  localStorage.setItem("Library", JSON.stringify(library))

  content.textContent = ""
}else{
    return
  }
}

TitleSearchBtn.addEventListener("click", () => search(titleSearch.value, "Book"))
AuthorSearchBtn.addEventListener("click", () => search(authorSearch.value, "Author"))
categorySearchBtn.addEventListener("click", () => searchCategory(categorySearch.value, "Category"))






















const data = {
    "Library": [
      {
        "Book": "apple",
        "Author": "Stephen King",
        "Category": "test cat 1"
      },
      {
        "Book": "bear",
        "Author": "Victor Hugo:",
        "Category": "test cat 2"
      },
      {
        "Book": "cat",
        "Author": "Christopher Paolini:",
        "Category": "test cat 3"
      },
      {
        "Book": "dog",
        "Author": "William Shakespeare",
        "Category": "test cat 4"
      },
      {
        "Book": "gear",
        "Author": "Agatha Christie:",
        "Category": "test cat 5"
      },
      {
        "Book": "hat",
        "Author": "Barbara Cartland:",
        "Category": "test cat 6"
      },
      {
        "Book": "ilenium",
        "Author": "Danielle Steel:",
        "Category": "test cat 7"
      },
      {
        "Book": "jeans",
        "Author": "Judy Blume:",
        "Category": "test cat 8"
      },
      {
        "Book": "kick",
        "Author": "Nicola Yoon:",
        "Category": "test cat 9"
      },
      {
        "Book": "lame",
        "Author": "Marie Lu",
        "Category": "test cat 10"
      },
      {
        "Book": "lost",
        "Author": "Cynthia Voigt",
        "Category": "test cat 11"
      },
      {
        "Book": "Monday",
        "Author": "Suzanne Collins",
        "Category": "test cat 12"
      },
      {
        "Book": "no",
        "Author": "Elizabeth Acevedo:",
        "Category": "test cat 13"
      },
      {
        "Book": "opposite",
        "Author": "Karen M. McManus",
        "Category": "test cat 14"
      },
      {
        "Book": "polar",
        "Author": "Carl Jung",
        "Category": "test cat 15"
      },
      {
        "Book": "zebra",
        "Author": "New Author",
        "Category": "new category"
      }
    ]
  }


