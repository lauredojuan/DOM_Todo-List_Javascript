let liList = ["Eat", "Drink", "Sleep"];
let sList = liList.map(function(li) {
    return '<li><span><i class="fa fa-trash"></i></span>' + li + "</li>";
});
function keyupfunct(event) {
    if (event.keyCode === 13) {
        liList.push(event.target.value);
        sList = liList.map(function(li) {
            return '<li><span><i class="fa fa-trash"></i></span>' + li + "</li>";
        });
        document.querySelector("#ulElem").innerHTML = sList.join(" ");
        document.querySelector("#addToDo").value = "";
    }
}
console.log(sList);
document.querySelector("#ulElem").innerHTML = sList.join(" ");
document.querySelector("#addToDo").addEventListener("keyup", keyupfunct);
document.querySelector("li").addEventListener("click", keyupfunct);
// liList.map(function(li) {
//  document.querySelector("#ulElem").innerHTML = li;
// });
