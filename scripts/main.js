const container = document.querySelector("#container");
var btn = document.querySelector("#add");
btn.addEventListener("click", addItems);

function addItems() {
  let text = document.getElementById("text").value;
  if(text === ""){    document.getElementById("text").focus();
    return;
  } // prevent adding the empty string
  let item = document.createElement("p");
  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("value", text);
  let label = document.createElement("label");
  label.textContent = ` ${text}`;
  let del = document.createElement("span");
  del.style.color = "red";
  del.innerHTML = " &#10007";
  label.appendChild(del);
  item.appendChild(check);
  item.appendChild(label);
  container.appendChild(item);
  document.getElementById("text").value = "";
  document.getElementById("text").focus();

  del.addEventListener("click", deleteItem);

  function deleteItem(e) {    this.parentElement.parentElement.remove();
    }

  check.addEventListener("change", changeColor);
 /* function changeColor() {
label.setAttribute("style", "color: green; text-decoration: line-through");
  }*/
  function changeColor() {
    if(check.checked){
      label.setAttribute("style", "color: green; text-decoration: line-through");
    } else {
      label.removeAttribute("style", "color: green; text-decoration: line-through");
    }
  }

  };
