const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("ProductId");
console.log(id);

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => showSingleProduct(data));

function showSingleProduct(singleProduct) {
  console.log(singleProduct);
  document.querySelector("h2").textContent = singleProduct.productdisplayname;
  document.querySelector(".newProductId span").textContent = singleProduct.id;
  document.querySelector(".price span").textContent = singleProduct.price;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${singleProduct.id}.webp`;

  if (!singleProduct.soldout) {
    console.log("udsolgt");
    document.querySelector(".soldOut").remove();
  }
}
