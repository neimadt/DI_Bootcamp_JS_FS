// OPEN AND CLOSE CART
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const Closecart = document.querySelector("#cart-close");

cartIcon.addEventListener("click",() => {
    cart.classList.add("active");
});

Closecart.addEventListener("click", () =>{
    cart.classList.remove("active");
});

// start cart
if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded',start);
}else{
    start();
}

// ================start==============

function start(){
    addEvents();
}

// ================rerender==============
function update(){
    addEvents();
    updateTotal();
}

// ================ Add events==============
function addEvents(){
//   Remove items from carts

let cartRemove_btns = document.querySelectorAll(".cart-remove");
console.log(cartRemove_btns);
cartRemove_btns.forEach((btn) => { 
    btn.addEventListener("click", handle_removeCartItem);
});

//change item quantity
let cartQantity_inputs = document.querySelectorAll(".cart-quantity");
cartQantity_inputs.forEach(input => {
    input.addEventListener("change", handle_changeItemQuantity);
});
// Add item to cart
let addCart_btns = document.querySelectorAll(".add-cart");
addCart_btns.forEach((btn) =>{
    btn.addEventListener("click", handle_addCartItem);
});

//BUY ORDER
const buy_btn = document.querySelector(".btn-buy");
buy_btn.addEventListener("click", handle_buyOrder);
}

// ================ Handle events functions ==============
let itemsAdded = []

function handle_addCartItem(){
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = product.querySelector(".product-img").src;
    console.log(title, price, imgSrc);
 let newToAdd = {
    title,
    price,
    imgSrc,
 };

 //item already exit
 if(itemsAdded.find((el) => el.title == newToAdd.title)){
    alert("This Item Already Exist!");
    return;
 }else{
    itemsAdded.push(newToAdd);
 }

// Add product to cart
 let cartBoxElement = CartBoxComponent(title, price, imgSrc);
 let newNode = document.createElement("div");
 newNode.innerHTML = cartBoxElement;
 const cartContent = cart.querySelector(".cart-content");
 cartContent.appendChild(newNode);

 update();
}

function handle_removeCartItem(){
    this.parentElement.remove();
    itemsAdded = itemsAdded.filter(el=> el.title != 
        this.parentElement.querySelector('.cart-product-title').innerHTML
    );
    update();
}

function handle_changeItemQuantity(){
    if(isNaN(this.value) || this.value < 1){
         this.value = 1;
    }
    this.value = Math.floor(this.value);

    update();
}

function handle_buyOrder(){
    if(itemsAdded.length <= 0){
        alert("There is no Order to Place Yet! \n Please make an Order first.");
        return;
    }
    const cartContent = cart.querySelector(".cart-content");
    cartContent.innerHTML = '';
    alert("Your Order is palced Successfully");
    itemsAdded = [];

    update();
}
// ================ Update & rerender functions ==============
function updateTotal(){
    let cartBoxes = document.querySelectorAll('.cart-box');
    const totalElement = cart.querySelector('.total-price');
    let total = 0;
    cartBoxes.forEach(cartBox =>{
        let priceElement = cartBox.querySelector('.cart-price');
        let price = parseFloat(priceElement.innerHTML.replace("$", ""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
    });

    // 2 digits after the decimal point
    total = total.toFixed(2);
    // or
    // total = Math.round(total * 100) / 100;

    totalElement.innerHTML = "$" + total;
}

///////HTML COMPONMENT///////

function CartBoxComponent(title, price, imgSrc){
    return `
    <div class="cart-box">
    <img src=${imgSrc} alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
    </div>
</div>
<!-- REMOVE CART -->
<i class="bx bxs-trash-alt cart-remove"></i>
</div>`;
}

//====== newsletter button =====================
function myfunction(){
    alert("Successfully signed in");
}


const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const firstNameInput = document.getElementById('first_name');

  // Send value to server
  console.log(firstNameInput.value);

  // 👇️ clear input field
  firstNameInput.value = '';
});