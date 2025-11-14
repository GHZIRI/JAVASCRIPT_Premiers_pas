function button_add() {
    let name_1 = document.getElementById("name").value.trim();
    let last_1 = document.getElementById("last").value.trim();
    let prix_1 = document.getElementById("prix").value.trim();
    let years_1 = document.getElementById("years").value.trim();
    let code_1 = document.getElementById("code").value.trim();
    let clicke_1 = document.querySelector('input[name="clicke"]:checked');
    let here = clicke_1 ? clicke_1.value : "nothing added";
  
    if (name_1 && last_1 && prix_1 && years_1 && code_1 && here !== "nothing added") {
      let collector = JSON.parse(localStorage.getItem("trakl")) || [];
  
      let new_lebrary = {
        name: name_1,
        last: last_1,
        years: years_1,
        prix: prix_1,
        code : code_1,
        possibility: here,
      };
  
      collector.push(new_lebrary);
      localStorage.setItem("trakl", JSON.stringify(collector));
  
      let div_result = document.getElementById("result");
      if (div_result) {
        div_result.innerHTML += `
          <b>code:</b> ${new_lebrary.code}
          <b>author name:</b> ${new_lebrary.name} <br>
          <b>titel:</b> ${new_lebrary.last} <br>
          <b>Years:</b> ${new_lebrary.years} <br>
          <b>Price:</b> ${new_lebrary.prix} <br>
          
          <b>available:</b> ${new_lebrary.possibility} <br><br>
        `;
      }
  
      showCatalog(document.getElementById("res") ? document.getElementById("res").value : "");
  
 
    } else {
      alert("⚠️ Please fill all fields!");
    }
  }
  function Cancel_function()
  {
    code_1 = document.getElementById("code").value ="";
    name_1 = document.getElementById("name").value = "" ;
    last_1 = document.getElementById("last").value = ""  ;
    prix_1 = document.getElementById("prix").value = "" ;
    years_1 = document.getElementById("years").value = "" ;
    clicke_1 = document.querySelector('input[name="clicke"]:checked') ;
    if(choice) choice.checked = false ; 
   
  }