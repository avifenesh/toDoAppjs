let ul = document.getElementById("list");
let li;
let itemNum = 0;
// create event for buttons
let addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

let removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

let removeAllButton = document.getElementById("remove-all");
removeAllButton.addEventListener("click", removeAllItem);

// adding items from local storage
function addElementFls(item) {
  let input = document.getElementById("input");
  ul = document.getElementById("list");
  let textNode = document.createTextNode(item);
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
  li.className = "visual";
  input.value = "";
}
//check if there is itens un the local storage and add them - for save todoes while refreshing
for (let i = 0; i < localStorage.length; i++) {
  addElementFls(localStorage.getItem(i + 1));
}

// get the value from the input text, if valid add new check box else return a message
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
    }, 500); // after 500 milisecondes clear the text from checkbox
    return false;
  } else {
    // create checkbox elemnt and set the values, then append it on top of the other checkbox elements
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
    }, 3); // for smoth felling
    localStorage.setItem(itemNum + 1, item);
    itemNum++;
  }
}
// look for all the checked items and clear them
function removeItem() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    const element = li[index];
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index]);
      localStorage.removeItem(itemNum - index + 1); //clear from local storage
    }
  }
}

// remove all the check box, no matter if checked or not
function removeAllItem() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    ul.removeChild(li[index]);
  }
  localStorage.clear();
}
