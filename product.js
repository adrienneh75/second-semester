const url= "https://kea-alt-del.dk/t7/api/products/2801"
//fetch the data
fetch(url)
.then(res=>res.json())
.then(data => showProduct(data));

//populate the page 
 function showProduct(product){
     console.log(product);
     document.querySelector("h1") .textContent=product.productdisplayname
     document.querySelector()
//

document.querySelector("img.productimage").src='https://kea-alt-del.dk/t7/images/webp/640/1165.webp/1000/${product.id}.webp'
console.log(img.productimage)
document.querySelector("img.productimage").alt=productdisplayname

    }


