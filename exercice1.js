let monDiv= document.createElement('div');
monDiv.innerHTML= "Ce div a été ajouté en utilisant javascript";
document.getElementById('viewport').appendChild(monDiv);
monDiv.style.backgroundColor = "red";
monDiv.style.height = '100px';
monDiv.style.width = '100px';

let sup = document.getElementById("aSupprimer");
sup.remove("aSupprimer");





