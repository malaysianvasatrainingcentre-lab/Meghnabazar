
const whatsappNumber = "8801883385222";

const products = [
  {
    name: "হলুদের গুঁড়া",
    icon: "🟡",
    description: "মানসম্মত হলুদের গুঁড়া",
    price: "দাম জানতে যোগাযোগ করুন"
  },
  {
    name: "মরিচের গুঁড়া",
    icon: "🌶️",
    description: "বাছাই করা মরিচের গুঁড়া",
    price: "দাম জানতে যোগাযোগ করুন"
  },
  {
    name: "ধনিয়ার গুঁড়া",
    icon: "🌿",
    description: "সুগন্ধি ধনিয়ার গুঁড়া",
    price: "দাম জানতে যোগাযোগ করুন"
  },
  {
    name: "মিশ্র মসলা",
    icon: "🧂",
    description: "রান্নার জন্য মানসম্মত মসলা",
    price: "দাম জানতে যোগাযোগ করুন"
  }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const message = encodeURIComponent(
    `আমি ${product.name} অর্ডার করতে চাই।`
  );

  productList.innerHTML += `
    <div class="product-card">
      <div class="product-icon">${product.icon}</div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>${product.price}</strong></p>
      <a class="btn"
         href="https://wa.me/${whatsappNumber}?text=${message}"
         target="_blank">
         অর্ডার করুন
      </a>
    </div>
  `;
});

document.getElementById("contact-button").href =
  `https://wa.me/${whatsappNumber}`;
