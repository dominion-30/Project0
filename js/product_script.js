
let currentURL = window.location.href;
let urlSearch = new URL(currentURL);

let productID = urlSearch.searchParams.get("id");

fetch(`https://fakestoreapi.com/products/${productID}`)
            .then(res=>res.json())
            .then(json=>{let product = `<div class="container">
            <h3>${json.title}</h3>
            <p>${json.category}</p>
            <div> <img src="${json.image}"></div>
            <p><strong>Price:${json.price}</strong></p>
            <p>${json.description}</p>
            <button><a href="/">Add to Chart</a></button>

          
            </div>`
            
            ;

            document.getElementById("showProduct").innerHTML = product;
        
        });
