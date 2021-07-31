let ul = document.getElementById("list");
let li;

let addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

let removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

let removeAllButton = document.getElementById("remove-all");
removeAllButton.addEventListener("click", removeAllItem);

function addItem() {
  let input = document.getElementById("input");
  let item = input.value;
  ul = document.getElementById("list");
  let textNode = document.createTextNode(item);
  if (item === "") {
    let textBox = document.getElementById("input");
    textBox.value = textBox.value + "Enter Your todo ";
    setTimeout(function () {
      input.value = "";
    }, 500);
    return false;
  } else {
    li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.setAttribute("id", "check");
    let lable = document.createElement("label");
    lable.setAttribute("for", "item");
    ul.appendChild(lable);
    li.appendChild(checkBox);
    lable.appendChild(textNode);
    li.appendChild(lable);
    ul.insertBefore(li, ul.childNodes[0]);
    setTimeout(() => {
      li.className = "visual";
      input.value = "";
    }, 3);
  }
}
function removeItem() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    const element = li[index];
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index]);
    }
  }
}

function removeAllItem() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    ul.removeChild(li[index]);
  }
}
