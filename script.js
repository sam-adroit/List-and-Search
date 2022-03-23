let addForm = document.getElementById("add-form");
let list = document.getElementById("list");
let del = document.getElementsByClassName("delete");
let search = document.getElementById("search");
let num = 0;

// console.log(del);

addForm.addEventListener("submit", addItem);
Array.from(del).forEach((delItem) => {
  delItem.addEventListener("click", deleteItem);
  num++;
});
search.addEventListener("keyup", searchItem);

function addItem(e) {
  e.preventDefault();
  num++;
  console.log(num);
  let input = document.getElementById("input").value;
  let li = document.createElement("li");
  li.innerHTML = `
                    <p>${input}</p>
                    <button class="delete" id="delete${num}">X</button>
                    `;
  li.className = "list-item";

  list.appendChild(li);
  list.lastElementChild.lastElementChild.addEventListener("click", deleteItem);
  document.getElementById("input").value = "";
}

function deleteItem(e) {
  let parentLi = document.getElementById(e.target.id).parentElement;
  let itemValue = parentLi.firstElementChild;

  if (
    confirm("Are you sure you want to delete " + itemValue.innerText + " ?")
  ) {
    parentLi.remove();
  }
}

function searchItem(e) {
  let searchVal = e.target.value.toLowerCase();
  let allListItem = document.getElementsByClassName("list-item");
  //   console.log(allListItem[0].firstElementChild.innerText);
  Array.from(allListItem).forEach((item) => {
    let listItem = item.firstElementChild.innerText.toLowerCase();
    if (listItem.indexOf(searchVal) == -1) {
      item.style.display = "none";
    } else {
      item.style.display = "flex";
    }
  });
}
