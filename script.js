function singUp() {
    let users
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"))
    } else {
        users = []
    }

    let user = {
        email: document.querySelector(".email").value,
        password: document.querySelector(".password").value,
        name: document.querySelector(".name").value,
        surname: document.querySelector(".surname").value,
        age: document.querySelector(".age").value,
    }
    if (chechData(user)) {
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
        window.location.href = 'page1.html'
    }


    console.log(user)
}

function chechData(user) {
    if (!validaleEmail(user.email)) {
        alert("Incorrect email!")
        return false
    } else if (user.name.length < 1 || user.surname.length < 1 || user.password.length < 1 || user.age.length < 1) {
        alert('Complete all data!')
        return false
    } else {
        return true
    }
}

const validaleEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function fnLogin() {
    let userArr = JSON.parse(localStorage.getItem('users'))
    let pOneEmail = document.querySelector('.pOneEmail').value
    let pOnePassword = document.querySelector('.pOnePassword').value

    for (let i = 0; i <= userArr.length - 1; i++) {
        if (pOneEmail === userArr[i].email && pOnePassword === userArr[i].password) {
            document.location.href = './page3.html'
            localStorage.setItem('userName', JSON.stringify(userArr[i]))
        }
    }
}

let pThreeName = document.querySelector('.pThreeName')
let pThreeSurname = document.querySelector('.pThreeSurname')
let pThreeAge = document.querySelector('.pThreeAge')
let pThreeArr = JSON.parse(localStorage.getItem('userName'))

if (localStorage.getItem('userName')) {
    pThreeName.textContent = pThreeName.textContent + ": " + pThreeArr.name
    pThreeSurname.textContent = pThreeSurname.textContent + ": " + pThreeArr.surname
    pThreeAge.textContent = pThreeAge.textContent + ": " +  pThreeArr.age
}

function detAcc(e) {
    e.preventDefault();

  var items = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < items.length; i++) {

    let object = JSON.parse(items[i]);
       if(object.request_id == userArr[i].email){
         console.log(items) 
         delete items[i] 
         console.log(items)
       }     
    }

    user = JSON.stringify(users);
    console.log(user);
    localStorage.setItem('users', user);
}