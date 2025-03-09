// Task 1
// interface Person {
//     name: string;
//     age: number;
// }
var _a;
var products = [];
function displayProducts() {
    var productsList = document.getElementById('products-list');
    if (productsList) {
        productsList.innerHTML = '';
        products.forEach(function (product) {
            var productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = "\n                <h3>".concat(product.name, "</h3>\n                <p>").concat(product.description, "</p>\n                <p>Price: $").concat(product.price, "</p>\n                <p>quantity: ").concat(product.quantity, "</p>\n            ");
            productsList.appendChild(productCard);
        });
    }
}
(_a = document.getElementById('product-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var description = document.getElementById('description').value;
    var price = parseFloat(document.getElementById('price').value);
    var quantity = parseInt(document.getElementById('quantity').value);
    var newProduct = { name: name, description: description, price: price, quantity: quantity };
    products.push(newProduct);
    displayProducts();
    document.getElementById('product-form').reset();
});
displayProducts();
