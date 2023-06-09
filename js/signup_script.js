// fetch("https://fakestoreapi.com/users")
// .then(user=>user.json())
// .then(json=>console.log(json));


fetch("https://fakestoreapi.com/users")
.then(user=>user.json())
.then(json=>showUser(json));

async function showUser(users){
    users.forEach(user => { const person = `<div class="container">
    <h3><strong>User:${user.id}</strong></h3>
    <p>${user.username}</p>
    <p>${user.password}</p>
    <a href="login.html?username=${user.username}&password=${user.password}">Use Details</a>
    </div>
    `;



    document.getElementById("showUsers").insertAdjacentHTML("beforeend", person);
        
    });

}

