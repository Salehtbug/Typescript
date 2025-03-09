// Task 1
// interface Person {
//     name: string;
//     age: number;
// }

// function checkAge(person: Person): void {
//     if (person.age > 18) {
//         console.log("Adult");
//     } else {
//         console.log("Minor");
//     }
// }

// const person1: Person = { name: "John", age: 5 };
// checkAge(person1); 


// Task 2

// interface Teacher {
//     name: string;
//     subjects: string[];
// }

// function printSubjects(teacher: Teacher): void {
//     console.log(`${teacher.name} teaches the following subjects:`);
//     teacher.subjects.forEach(subject => {
//         console.log(subject);
//     });
// }
// const teacher1: Teacher = { name: "Mr. Ayman", subjects: ["C#", ".Net", "Java"] };
// printSubjects(teacher1);


// Task 3 

// interface Product {
//     name: string;
//     price: number;
//     quantity: number;
// }

// let products: Product[] = [
//     { name: "Dell", price: 1000, quantity: 6 },
//     { name: "Lenovo", price: 500, quantity: 3 },
//     { name: "Dell Gamming", price: 300, quantity: 10 }
// ];

// for (let i = 0; i < products.length; i++) {
//     if (products[i].quantity > 5) {
//         products[i].price -= products[i].price * 0.15; 
//         console.log(products[i].price)
//     }
// }

// Task 4 

interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

let products: Product[] = [];
function displayProducts(): void {
    const productsList = document.getElementById('products-list');
    if (productsList) {
        productsList.innerHTML = ''; 
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>quantity: ${product.quantity}</p>
            `;
            productsList.appendChild(productCard);
        });
    }
}

document.getElementById('product-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = (document.getElementById('name') as any).value;
    const description = (document.getElementById('description') as any).value;
    const price = parseFloat((document.getElementById('price') as any).value);
    const quantity = parseInt((document.getElementById('quantity') as any).value);

    const newProduct: Product = { name, description, price, quantity };

    products.push(newProduct);
    displayProducts();
    (document.getElementById('product-form') as any).reset();
});


displayProducts();
