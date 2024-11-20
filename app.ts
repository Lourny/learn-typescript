let message: string = "hello world";

//create finding element
let heading = document.createElement("h1");
heading.textContent = message;

//apeend child to dom
document.body.appendChild(heading);

interface Product {
  id: number;
  name: string;
  price: number;
}

function getProduct(id: number): Product {
  {
    return {
      id: id,
      name: `the text for id = ${id}`,
      price: 99.56,
    };
  }
}
