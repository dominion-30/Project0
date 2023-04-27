// get a single product

// fetch("https://fakestoreapi.com/products/1")
// .then(res=>res.json())
// .then(json=>{let product = `<div>
// <h3>${json.title}</h3>
// <p>${json.category}</p>
// <div><img src="${json.image}"></div>
// <p><strong>Price:${json.price}</strong></p>


// </div>`;
// document.getElementById("showProduct").innerHTML = product;
// });


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>displayProducts(json))


async function displayProducts(products){
    products.forEach(product => { const item = `<div class="container">
    <div class="title">
    <h3>${product.title}</h3>
    </div>
    <p><strong>${product.category}</strong></p>
    
    <a href="product.html?id=${product.id}"><img src="${product.image}"></a>
    <p><strong>Price:${product.price}</strong></p>
    </div>`;

    document.getElementById("showProducts").insertAdjacentHTML("beforeend", item);
        
    });


}


