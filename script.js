const whatsappNumber = "6287773522999";

const categoryAssets = {
  coconut: "assets/generated/coconut-coir.png",
  spice: "assets/generated/indonesian-spices.png",
  agri: "assets/generated/agricultural-commodities.png"
};

const products = [
  {
    id: "01",
    name: "Coco Peat Block 5kg",
    category: "coconut",
    image: "assets/crops/coco-peat-block.jpg",
    copy: "Compressed coco peat block for horticulture, nursery, greenhouse, and growing media applications."
  },
  {
    id: "02",
    name: "Coco Peat Grow Bag",
    category: "coconut",
    image: "assets/crops/coco-grow-bag.jpg",
    copy: "Ready-to-use grow bag format for professional farming, hydroponic systems, and controlled cultivation."
  },
  {
    id: "03",
    name: "Coco Peat Disc",
    category: "coconut",
    image: "assets/crops/coco-disc.jpg",
    copy: "Compact coco peat disc for propagation, seedling trays, and efficient export packing."
  },
  {
    id: "04",
    name: "Coco Fiber",
    category: "coconut",
    image: "assets/crops/coco-fiber.jpg",
    copy: "Natural coir fiber for agricultural, industrial, and erosion-control use cases."
  },
  {
    id: "05",
    name: "Coconut Husk Chips",
    category: "coconut",
    image: "assets/crops/coconut-husk.jpg",
    copy: "Coconut husk chips for orchid media, potting blends, and professional substrate mixes."
  },
  {
    id: "06",
    name: "Charcoal Briquette",
    category: "coconut",
    image: "assets/crops/charcoal-briquette.jpg",
    copy: "Coconut charcoal briquette for BBQ, shisha, and private-label export requirements."
  },
  {
    id: "07",
    name: "Coconut Sugar",
    category: "coconut",
    image: "assets/crops/coconut-sugar.jpg",
    copy: "Natural coconut sugar with export-ready packing options for food manufacturers and distributors."
  },
  {
    id: "08",
    name: "Copra",
    category: "coconut",
    image: "assets/crops/copra.jpg",
    copy: "Selected copra and coconut derivative products sourced from trusted Indonesian producers."
  },
  {
    id: "09",
    name: "Nutmeg",
    category: "spice",
    image: "assets/crops/nutmeg.jpg",
    copy: "Indonesian nutmeg selected for aroma, flavor consistency, and international trading needs."
  },
  {
    id: "10",
    name: "Cinnamon",
    category: "spice",
    image: "assets/crops/cinnamon.jpg",
    copy: "Premium Indonesian cinnamon for wholesale buyers, distributors, and food processors."
  },
  {
    id: "11",
    name: "Cloves",
    category: "spice",
    image: "assets/crops/cloves.jpg",
    copy: "Whole cloves with strong aroma profile, suitable for spice traders and manufacturers."
  },
  {
    id: "12",
    name: "Ginger Powder",
    category: "spice",
    image: "assets/crops/ginger.jpg",
    copy: "Ginger powder and root supply options for ingredient buyers, spice blends, and food industry use."
  },
  {
    id: "13",
    name: "Turmeric Powder",
    category: "spice",
    image: "assets/crops/turmeric.jpg",
    copy: "Turmeric products prepared for bulk ingredient, spice blend, and food industry demand."
  },
  {
    id: "14",
    name: "Lemongrass Powder",
    category: "spice",
    image: "assets/crops/lemongrass.jpg",
    copy: "Selected lemongrass for culinary, tea, and ingredient applications."
  },
  {
    id: "15",
    name: "Black Pepper",
    category: "spice",
    image: "assets/crops/black-pepper.jpg",
    copy: "Black pepper sourced for consistent quality and export packing needs."
  },
  {
    id: "16",
    name: "Cardamom",
    category: "spice",
    image: "assets/crops/cardamom.jpg",
    copy: "Cardamom supply for spice importers and specialty ingredient distributors."
  },
  {
    id: "17",
    name: "Palm Sugar",
    category: "agri",
    image: "assets/crops/vanilla.jpg",
    copy: "Palm sugar for food ingredient buyers, distributors, and natural sweetener brands."
  },
  {
    id: "18",
    name: "Green Coffee Beans",
    category: "agri",
    image: "assets/crops/green-coffee.jpg",
    copy: "Green coffee beans for roasters, distributors, and commodity buyers."
  },
  {
    id: "19",
    name: "Cacao Beans",
    category: "agri",
    image: "assets/crops/black-tea.jpg",
    copy: "Selected cacao beans for chocolate makers, ingredient processors, and commodity traders."
  },
  {
    id: "20",
    name: "Cassava",
    category: "agri",
    image: "assets/crops/cassava.jpg",
    copy: "Cassava and related agricultural commodities for international procurement."
  },
  {
    id: "21",
    name: "Sweet Potato",
    category: "agri",
    image: "assets/crops/sweet-potato.jpg",
    copy: "Sweet potato products sourced for bulk and wholesale buyers."
  },
  {
    id: "22",
    name: "Shallots",
    category: "agri",
    image: "assets/crops/shallots.jpg",
    copy: "Selected shallots available for buyer-specific sourcing requests."
  }
];

const rows = document.querySelectorAll("[data-category-row]");
const modal = document.querySelector("#productModal");
const productSelect = document.querySelector("#productSelect");

function whatsappUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function createProductCard(product) {
  const article = document.createElement("article");
  article.className = "product-card";
  article.dataset.category = product.category;
  article.innerHTML = `
    <span class="product-number">${product.id}</span>
    <img src="${categoryAssets[product.category]}" alt="${product.name}" loading="lazy" />
    <h4>${product.name}</h4>
    <button class="detail-btn" type="button">View Details</button>
  `;
  article.querySelector("button").addEventListener("click", () => openProduct(product));
  return article;
}

function renderProducts(active = "all") {
  rows.forEach((row) => {
    const category = row.dataset.categoryRow;
    row.innerHTML = "";
    const visible = products.filter((product) => product.category === category && (active === "all" || product.category === active));
    visible.forEach((product) => row.appendChild(createProductCard(product)));

    if (category === "agri" && active === "all") {
      const request = document.createElement("article");
      request.className = "request-card";
      request.innerHTML = `
        <h3>Need Another Product?</h3>
        <p>Send your requirement and our team will review sourcing availability.</p>
        <a class="btn primary" href="#inquiry">Start Inquiry</a>
      `;
      row.appendChild(request);
    }

    row.closest(".product-section").hidden = visible.length === 0;
  });
}

function openProduct(product) {
  const message = `Hello PT Nusantara Ekspor Global, I would like to request quotation for ${product.name}. Please share MOQ, specification, packing, lead time, and export terms.`;
  modal.querySelector("img").src = categoryAssets[product.category];
  modal.querySelector("img").alt = product.name;
  modal.querySelector("h3").textContent = product.name;
  modal.querySelector(".modal-category").textContent = product.category === "agri" ? "Natural Commodity" : product.category;
  modal.querySelector(".modal-copy").textContent = product.copy;
  modal.querySelector(".modal-wa").href = whatsappUrl(message);
  modal.querySelector(".spec-list").innerHTML = `
    <div><dt>MOQ</dt><dd>Available on request</dd></div>
    <div><dt>Packing</dt><dd>Bulk, container, or buyer-specific discussion</dd></div>
    <div><dt>Documents</dt><dd>Commercial and export documents based on shipment needs</dd></div>
  `;
  modal.showModal();
}

function hydrateProductSelect() {
  if (!productSelect) return;
  productSelect.innerHTML = products.map((product) => `<option value="${product.name}">${product.name}</option>`).join("");
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

document.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

document.querySelector("#inquiryForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const product = productSelect.value;
  const quantity = document.querySelector("#quantityInput").value.trim() || "to be discussed";
  const destination = document.querySelector("#destinationInput").value.trim() || "to be confirmed";
  const message = `Hello PT Nusantara Ekspor Global, I would like to request a quotation.\n\nProduct: ${product}\nEstimated quantity: ${quantity}\nDestination: ${destination}\n\nPlease share MOQ, specification, packing options, lead time, and export terms.`;
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
});

hydrateProductSelect();
renderProducts();
