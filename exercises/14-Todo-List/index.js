const liList = [];
let listToShow = null;
const removeValue = event => {
    console.log(event);
    liList.splice(+event.target.id, 1);
    writeInHtml();
};
const writeInHtml = () => {
    listToShow = liList.map((li, index) => `<li><span class="trash"><i class="fa fa-trash" id=${index}></i></span>${li}</li>`);
    document.querySelector("#myList").innerHTML = listToShow.join(" ");
    document.querySelectorAll(".trash").forEach(item => {
        item.addEventListener("click", removeValue);
    });
};
const keyUpFunc = event => {
    if (event.keyCode === 13) {
        liList.push(event.target.value);
        writeInHtml();
        document.querySelector("#addToDo").value = "";
    }
};
document.querySelector("#addToDo").addEventListener("keyup", keyUpFunc);

