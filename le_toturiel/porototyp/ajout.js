function button() {
    let name_1 = document.getElementById("name").value.trim();
    let last_1 = document.getElementById("last").value.trim();
    let prix_1 = document.getElementById("prix").value.trim();
    let years_1 = document.getElementById("years").value.trim();
    let clicke_1 = document.querySelector('input[name="clicke"]:checked');
    let here = clicke_1 ? clicke_1.value : "nothing added";
  
    if (name_1 && last_1 && prix_1 && years_1 && here !== "nothing added") {
      let collector = JSON.parse(localStorage.getItem("trakl")) || [];
  
      let new_lebrary = {
        name: name_1,
        last: last_1,
        years: years_1,
        prix: prix_1,
        possibility: here,
      };
  
      collector.push(new_lebrary);
      localStorage.setItem("trakl", JSON.stringify(collector));
  
      let div_result = document.getElementById("result");
      if (div_result) {
        div_result.innerHTML += `
          <b>First name:</b> ${new_lebrary.name} <br>
          <b>Last name:</b> ${new_lebrary.last} <br>
          <b>Years:</b> ${new_lebrary.years} <br>
          <b>Prix:</b> ${new_lebrary.prix} <br>
          <b>Possibility:</b> ${new_lebrary.possibility} <br><br>
        `;
      }
  
      showCatalog(document.getElementById("res") ? document.getElementById("res").value : "");
  
      Cancel_function();
    } else {
      alert("⚠️ Please fill all fields!");
    }
  }
  function Cancel_function()
  {
    name_1 = document.getElementById("name").value = "" ;
    last_1 = document.getElementById("last").value = ""  ;
    prix_1 = document.getElementById("prix").value = "" ;
    years_1 = document.getElementById("years").value = "" ;
    clicke_1 = document.querySelector('input[name="clicke"]:checked') ;
    if(choice) choice.checked = false ; 
   
  }