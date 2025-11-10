function showCatalog(filter = "") {
    let container = document.getElementById("catalog-container");
    let data = JSON.parse(localStorage.getItem("trakl")) || [];
  
    
    let filtered = data.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.last.toLowerCase().includes(filter.toLowerCase())
    );
  
    container.innerHTML = "";
  
    if (filtered.length === 0) {
      container.innerHTML = "<p>No books found.</p>";
      return;
    }
  
    filtered.forEach((book, index) => {
      let div = document.createElement("div");
      div.classList.add("book-card");
  
      div.innerHTML = `
        <p><b>First name:</b> ${book.name}</p>
        <p><b>Last name:</b> ${book.last}</p>
        <p><b>Years:</b> ${book.years}</p>
        <p><b>Price:</b> ${book.prix}</p>
        <p><b>Possibility:</b> ${book.possibility}</p>
        <button class="delete-btn" onclick="deleteBook(${index})">🗑️ Delete</button>
      `;
      container.appendChild(div);
    });
  }
  
  function deleteBook(index) {
    let data = JSON.parse(localStorage.getItem("trakl")) || [];
    if (confirm("Are you sure you want to delete this book?")) {
      data.splice(index, 1);
      localStorage.setItem("trakl", JSON.stringify(data));
      showCatalog(document.getElementById("res").value);
    }
  }
  
  document.getElementById("res").addEventListener("keyup", (e) => {
    showCatalog(e.target.value);
  });
  
  showCatalog();