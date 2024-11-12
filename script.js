
const orderFoodButton = document.getElementById('order-food');
const loadingMessage = document.getElementById('loading-message');
const orderCompleteDiv = document.getElementById('order-complete');
const orderIdDisplay = document.getElementById('order-id');
const orderedFoodImage = document.getElementById('ordered-food-image');


const burgerImageUrl = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60';
const nuggetsImageUrl = 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenNuggets.webp';
const saladImageUrl = 'https://media.istockphoto.com/id/528360281/photo/garden-salad-overhead-view.jpg?s=2048x2048&w=is&k=20&c=JVrkqPDy-2BzvlmcP9golTbQcPf3QGnfzWeKvcU2gVU=';
const friesImageUrl = 'https://www.kuchpakrahahai.in/wp-content/uploads/2023/05/Air-fried-french-fries.jpg';


function generateOrderID() {
  return `BK-${Math.floor(1000 + Math.random() * 9000)}`;
}


function placeOrder() {
  
  const selectedItems = Array.from(document.querySelectorAll('.food-options input:checked'));
  if (selectedItems.length === 0) {
    alert('Please select at least one food item.');
    return;
  }


  loadingMessage.hidden = false;
  orderCompleteDiv.hidden = true;

  
  new Promise((resolve) => {
    const preparationTime = Math.floor(Math.random() * 3) + 2; 
    setTimeout(() => {
      resolve(selectedItems);
    }, preparationTime * 1000);
  }).then((items) => {
    
    loadingMessage.hidden = true;
    orderCompleteDiv.hidden = false;

    
    const isBurgerOrdered = items.some(item => item.value === "burger");
    const isNuggetsOrdered = items.some(item => item.value === "nuggets");
    const isSaladOrdered = items.some(item => item.value === "salad");
    const isFriesOrdered = items.some(item => item.value === "fries");

    
    if (isBurgerOrdered) {
      orderedFoodImage.src = burgerImageUrl;
    } else if (isNuggetsOrdered) {
      orderedFoodImage.src = nuggetsImageUrl;
    } else if (isSaladOrdered) {
      orderedFoodImage.src = saladImageUrl;
    } else if (isFriesOrdered) {
      orderedFoodImage.src = friesImageUrl;
    } else {
      orderedFoodImage.src = items[0].dataset.img; 
    }
    orderedFoodImage.alt = items[0].value;

    orderIdDisplay.textContent = generateOrderID();
  });
}


orderFoodButton.addEventListener('click', placeOrder);
