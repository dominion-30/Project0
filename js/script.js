fetch("https://fakestoreapi.com/products/1")
.then(res=>res.json())
.then(json=>{let product = `<div>
<h3>${json.title}</h3>
<p>${json.category}</p>
<div><img src="${json.image}"></div>
<p><strong>Price:${json.price}</strong></p>


</div>`;
document.getElementById("showProduct").innerHTML = product;
});



