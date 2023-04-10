function newElement() {
  let li = document.createElement("li");

  li.addEventListener('dblclick', () => removeLi(li))
  li.addEventListener('click', () => renameLi(li))

  let inputVal = document.getElementById("my_Input").value;

  let text = document.createTextNode(inputVal);
  li.appendChild(text);

  if (inputVal == "") {
    alert("Non puoi inserire elementi vuoti");
  } else {
    document.getElementById("list_body").appendChild(li);
  }

  document.getElementById("my_Input").value = "";
}

// funzione che cancella l'elemento premuto due volte
function removeLi(selected) {
  console.log(selected);
  selected.parentNode.removeChild(selected);
}

function renameLi(selected) {
    let newText = prompt("sostituisci")
    if(newText == ''){
        alert("Non si puo mettere una riga vuota")
    }else{
        selected.innerHTML = newText;
    }
  }
