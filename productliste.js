const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("a").href = `produkt.html?ProductId=${product.id}`;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  if (product.discount) {
    console.log("hej");
    copy.querySelector(".sale span").textContent = product.discount + "%";
  } else {
    copy.querySelector(".sale").remove();
  }

  copy.querySelector(".subtle .span_1").textContent = product.articletype;
  copy.querySelector(".subtle .span_2").textContent = product.brandname;
  copy.querySelector(".img").textContent = product.image;
  copy.querySelector(".product_price span").textContent = product.price;
  document.querySelector("main").appendChild(copy);
}
