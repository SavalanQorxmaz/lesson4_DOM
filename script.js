
const addRemoveListItem = () => {

    
const input = document.querySelector("#input");
const listInput = document.querySelector("#list-input");
const add = document.querySelector("#add");


let count = 1;

add.addEventListener("click",() => {
    if(input.value.trim() == ""){
        alert("setir bos olmaz")
    }

    else{


        listInput.innerHTML += `<li id = "li${count}">${input.value} <span id = "span${count}">X</span></li>`;
        input.value = "";
        count++;
    }
})

document.addEventListener("click",(e) => {
    
    if(e.target.id.slice(0,4) =="span"){
        console.log(e.target.id)
        console.log(document.getElementById(`li${e.target.id.slice(4)}`))
        document.getElementById(`li${e.target.id.slice(4)}`).remove()
    }

})
}

addRemoveListItem()