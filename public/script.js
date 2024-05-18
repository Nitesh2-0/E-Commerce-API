let products = [
  {
    url: "https://images.unsplash.com/photo-1474169482634-9d0381a70510?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 9999,
    productName: "Taj",
    quantity: 1,
    purchaseCount: 1500,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1675586677399-2dbd468cad2f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 799,
    productName: "Banana",
    quantity: 1,
    purchaseCount: 2000,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 599,
    productName: "Apple",
    quantity: 1,
    purchaseCount: 1200,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1609424572698-04d9d2e04954?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 499,
    productName: "Orange",
    quantity: 1,
    purchaseCount: 1500,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1628007299415-a6db64a43787?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 899,
    productName: "Grapes",
    quantity: 1,
    purchaseCount: 1800,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1496843916299-590492c751f4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 699,
    productName: "Pineapple",
    quantity: 1,
    purchaseCount: 2500,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1622208489373-1fe93e2c6720?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 899,
    productName: "Watermelon",
    quantity: 1,
    purchaseCount: 3000,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1552265129-14577cfb8a05?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 399,
    productName: "Peach",
    quantity: 1,
    purchaseCount: 1700,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 599,
    productName: "Strawberry",
    quantity: 1,
    purchaseCount: 1300,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 499,
    productName: "Kiwi",
    quantity: 1,
    purchaseCount: 1400,
    isAvailable: true
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const profileBtn = document.getElementById("profile-btn");
  const profileDropdown = document.getElementById("profile-dropdown");
  const logoutBtn = document.getElementById("logout-btn");
  const shopingBag = document.getElementById('shopingCart');
  const main = document.querySelector(".main");
  const mostFrequentSearch = document.querySelector('.mostFrequent');
  const productAvilable = document.getElementById("productAvilable");
  const addOption = document.getElementById('addOption');

  let isProfileVisible = false;
  let isAvilableProductRaperVisible = false;
  const avilableProductRaper = document.querySelector('.avilableProductRaper');

  profileBtn.addEventListener('click', toggleProfileDropdown);
  logoutBtn.addEventListener("click", () => console.log("Logged out"));
  shopingBag.addEventListener('click', toggleAvilableProductRaper);

  function toggleProfileDropdown(event) {
    isProfileVisible = !isProfileVisible;
    profileDropdown.style.display = isProfileVisible ? 'block' : 'none';
  }

  function toggleAvilableProductRaper() {
    
    isAvilableProductRaperVisible = !isAvilableProductRaperVisible;
    const leftValue = isAvilableProductRaperVisible ? "0%" : "-100%";
    const widthValue = window.innerWidth <= 640 ? '100%' : '40%';
    avilableProductRaper.style.left = leftValue;
    avilableProductRaper.style.width = widthValue;
  }

  const parentElement = document.querySelector('.main');

  if (parentElement) {
    parentElement.addEventListener("click", function (event) {
      if (event.target.classList.contains('addBtn')) {
        handlingAddToCartBtn(event);
      }
    });
  }

  function handlingAddToCartBtn(event) {
    const button = event.target;
    const product = button.closest('.cartFrame');
    if (product) {
      const item = {
        productName: product.querySelector('.contsPname').textContent,
        price: parseInt(product.querySelector('.price').textContent.slice(1).trim()),
        productImg: product.querySelector('img').src
      };
      productAvilable.textContent = parseInt(productAvilable.textContent) + 1;
      console.log(item);
    }
  }

  function designCart(url, price, purchesCount, isAvailable, pName) {
    const cartFrame = document.createElement("div");
    cartFrame.className = "cartFrame";

    const img = document.createElement("img");
    img.src = url;
    img.className = "img";

    const priceAndAddToCartRapped = document.createElement("div");
    priceAndAddToCartRapped.className = "container1";

    const priceElement = document.createElement("p");
    priceElement.className = "price";
    priceElement.innerHTML = `₹ ${price}`;

    const addToCartBtn = document.createElement("button");
    addToCartBtn.className = "addBtn";
    addToCartBtn.innerHTML = "Add To Cart";

    const soldItemAndReadyToDeliverRapped = document.createElement("div");
    soldItemAndReadyToDeliverRapped.className = "container2";

    const soldItemTillNow = document.createElement("p");
    soldItemTillNow.className = "soldItem";
    soldItemTillNow.innerHTML = `<i class="ri-eye-fill"></i> ${purchesCount}`;

    const readyForDeliveryToday = document.createElement("p");
    readyForDeliveryToday.className = "deliveringToday";
    readyForDeliveryToday.innerHTML = `Available: ${isAvailable ? 'Yes' : 'No'}`;

    const productName = document.createElement('p');
    productName.className = 'container2 contsPname';
    productName.textContent = pName;

    cartFrame.appendChild(img);
    cartFrame.appendChild(productName);
    priceAndAddToCartRapped.appendChild(priceElement);
    priceAndAddToCartRapped.appendChild(addToCartBtn);
    soldItemAndReadyToDeliverRapped.appendChild(soldItemTillNow);
    soldItemAndReadyToDeliverRapped.appendChild(readyForDeliveryToday);
    cartFrame.appendChild(priceAndAddToCartRapped);
    cartFrame.appendChild(soldItemAndReadyToDeliverRapped);
    main.appendChild(cartFrame);
  }

  function addInputOption(optionValue) {
    const option = document.createElement('option');
    option.value = optionValue.trim();
    option.textContent = optionValue.trim();
    addOption.appendChild(option);
  }

  products.forEach(product => {
    designCart(product.url, product.mrp, product.purchaseCount, product.isAvailable, product.productName);
    addInputOption(product.productName);
    mostFrequentSearch.innerHTML += `<a href="#" class="optionTag decoration-0 bg-gray-700 px-2 py-1 rounded"><p class="text-white font-awesome text-xs font-semibold">${product.productName.toUpperCase().trim()}</p></a>`;
  });

  var swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
      delay: 3000, // Set the autoplay delay in milliseconds
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

});

function showingAllSelectedProduct(url, price, productName, quantity) {
  const avilableProductRaper = document.querySelector('.avilableProductRaper');
  const product = `
      <div class="relative">
        <div class="w-full bg-slate-700 p-4 rounded-md flex flex-wrap justify-between items-center gap-10 top-2 md:mt-3">
          <div class="productInfo flex-grow">
            <h3 class="text-white font-semibold">Product Name: ${productName}</h3>
  
            <div class="flex items-center gap-3 mt-2">
              <button class="ri-add-line text-white border border-green-400 px-4 py-2 rounded-full cursor-pointer"></button>
              <p class="w-16 bg-slate-800 rounded text-white text-center">${quantity}</p>
              <button class="ri-subtract-line text-white border border-red-400 px-4 py-2 rounded-full cursor-pointer"></button>
            </div>
            <p class="text-green-400 mt-2"><span class="text-white">MRP of One Piece:</span> ₹ ${price}</p>
          </div>
          <div class="img-container">
            <img src="${url}" alt="" class="w-48 h-24 rounded">
          </div>
        </div>
      </div>
    `;

  avilableProductRaper.innerHTML += product;
}

for (let i = 0; i < 10; i++) {
  showingAllSelectedProduct(products[0].url, products[0].mrp, products[0].productName, products[0].quantity);  
}

function appendTotalAmountSection(price, quantity) {
  const avilableProductRaper = document.querySelector('.avilableProductRaper');
  const totalAmountSection = `
      <div class="bottom-0 left-0 w-full text-white bg-gray-800 p-4 mt-4">
        <h1 class="text-center mb-2">Total Amount : <span class="totalAmount">₹ ${price * quantity}</span></h1>
        <div class="w-full h-0.5 bg-gray-500 mb-2"></div>
        <button class="bg-green-800 text-white rounded-md w-full py-2 payNow">
          Make Payment Here <i class="ri-corner-right-up-line ml-1"></i>
        </button>
      </div>
    `;

  avilableProductRaper.innerHTML += totalAmountSection;
}

appendTotalAmountSection(products[0].mrp, products[0].quantity);
