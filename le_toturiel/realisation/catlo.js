let sortAsc = true;

let add_bokks = [
  {
    code : 1,
    name : "ahmade",
    titel: "one pecie",
    price : "200dh",
    years : 200,
    Possibility: "yes",
  },
  {
    code : 2,
    name : "salman",
    titel: "black clovar",
    price : "300dh",
    years : 2000,
    Possibility: "yes",
  }
];

localStorage.setItem("trakl", JSON.stringify(add_bokks));

function showCatalog(filter = "") {
    let container = document.getElementById("catalog-container");
    let data = JSON.parse(localStorage.getItem("trakl")) || [];
  
    
    let filtered = data.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      (item.titel && item.titel.toLowerCase().includes(filter.toLowerCase()))
    );

    filtered.sort((a, b) => {
        return sortAsc
            ? a.titel.localeCompare(b.titel)
            : b.titel.localeCompare(a.titel);
    });

    container.innerHTML = "";

    if (filtered.length === 0) {
      container.innerHTML = "<p>No books found.</p>";
      return;
    }
  
    filtered.forEach((book, index) => {
      let div = document.createElement("div");
      div.classList.add("book-card");
  
      div.innerHTML = `
       <p><b>code</b> ${book.code}</p> 
        <p><b>authore:</b> ${book.name}</p>
        <p><b>titel:</b> ${book.titel}</p>
        <p><b>Years:</b> ${book.years}</p>
        <p><b>Price:</b> ${book.price}</p>
        <p class="change"><b>Possibility:</b> ${book.Possibility}</p>
        <button class="delete-btn" onclick="deleteBook(${index})">🗑️ Delete</button>
        <button class="reservation-btn" onclick="Reservation(${index})">Reservation</button>
        <button class="cancel-btn" onclick="notReservation(${index})">Not Reservation</button>
      `;
      container.appendChild(div);
    });
}

document.getElementById("sortBtn").addEventListener("click", () => {
    sortAsc = !sortAsc;   
    showCatalog(document.getElementById("res").value);
});

function Reservation(index){
    let data = JSON.parse(localStorage.getItem("trakl")) || [];
    let reserved  = JSON.parse(localStorage.getItem("reservedBooks")) || [];

    reserved.push(data[index]);

    localStorage.setItem("reservedBooks", JSON.stringify(reserved));
    alert(`book "${data[index].titel}" reserved successfully!`);
}

function notReservation(index){
    let data = JSON.parse(localStorage.getItem("trakl")) || [];
    let cancel_reserved = JSON.parse(localStorage.getItem("cancle_reservedbooks")) || [];

    cancel_reserved.push(data[index]);

    localStorage.setItem("cancle_reservedbooks", JSON.stringify(cancel_reserved));
    alert(`book "${data[index].titel}" canceled reservation successfully`);
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
