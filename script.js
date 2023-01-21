


function addRemoveListItem() {


    const input = document.querySelector("#input");
    const listInput = document.querySelector("#list-input");
    const add = document.querySelector("#add");


    let count = 1;

    const addItem = () => {
        if (input.value.trim() == "") {
            alert("setir bos olmaz");
        }

        else {
            listInput.innerHTML += `<li id = "li${count}">${input.value} <span id = "span${count}">X</span></li>`;
            input.value = "";
            count++;
        }
    }

    add.addEventListener("click", addItem );

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
        addItem()
        }
      });

    document.addEventListener("click", (e) => {

        if (e.target.id.slice(0, 4) == "span") {
            console.log(e.target.id);
            console.log(document.getElementById(`li${e.target.id.slice(4)}`));
            document.getElementById(`li${e.target.id.slice(4)}`).remove();
        }

    });

   
}

addRemoveListItem()



// register form


const registerForm = () => {

  
    class User {
        constructor(firstname, lastname, password) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.password = password
        }
    }
    
    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const password = document.querySelector("#password");
    
    const register = document.querySelector("#register");
    
    const addUser = () => {
     
    
       if((firstname.value.trim() == "") && (lastname.value.trim() == "") && (password.value.trim() == "")){
        alert("xanalar bosh olmaz")
       } 
       else {
        const user = new User(firstname.value, lastname.value, password.value);

        console.log(user)
        firstname.value = "";
        lastname.value = "";
        password.value = "";
       }
    }
    
    register.addEventListener("click", addUser
    )
    
}

registerForm()
