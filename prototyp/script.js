// declaration de list de comptonse
let list = ["C1","C2", "C4", "C4", "C4","C9",];
//  declaration de objt : entree = comptonse + reptition
let comptus = {};
// boucle de compter le numbr de reptition 
for(let i = 0; i<list.length; i++){
    let code=list[i];
        if(comptus[code] == undefined){
            comptus[code] =1;
        }else{ comptus[code] ++;
            
        }
    
}
// affich de objet
console.log( comptus);
