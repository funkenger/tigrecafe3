const imageData = window.imageData || {};

const menuItems = [
  {
    name: "Pão de queijo dourado",
    description: "Clássico mineiro com casquinha crocante e coração macio, servido quentinho.",
    price: 9.5,
    image: imageData.dish_01,
  },
  {
    name: "Cuscuz nordestino cremoso",
    description: "Cuscuz de milho com manteiga da terra e toque de ervas frescas.",
    price: 12.0,
    image: imageData.dish_02,
  },
  {
    name: "Bolinho de mandioca",
    description: "Bolinho leve de mandioca com queijo e ervas, assado na hora.",
    price: 14.0,
    image: imageData.dish_03,
  },
  {
    name: "Tapioca de coco",
    description: "Tapioca macia recheada com coco fresco e toque de melado.",
    price: 13.5,
    image: imageData.dish_04,
  },
  {
    name: "Queijo coalho na chapa",
    description: "Queijo coalho selado, servido com geleia de maracujá suave.",
    price: 16.0,
    image: imageData.dish_05,
  },
  {
    name: "Escondidinho de frango",
    description: "Purê de mandioca cremoso com frango desfiado e gratinado leve.",
    price: 24.0,
    image: imageData.dish_06,
  },
  {
    name: "Moqueca de banana",
    description: "Moqueca vegetariana com banana-da-terra, pimentões e leite de coco.",
    price: 26.0,
    image: imageData.dish_07,
  },
  {
    name: "Arroz de coco com legumes",
    description: "Arroz soltinho com leite de coco, legumes coloridos e castanhas.",
    price: 22.0,
    image: imageData.dish_08,
  },
  {
    name: "Filé de peixe grelhado",
    description: "Peixe do dia com limão, ervas e purê de abóbora.",
    price: 29.0,
    image: imageData.dish_09,
  },
  {
    name: "Bowl amazônico",
    description: "Mix de grãos, cubos de abóbora, folhas frescas e molho de tucupi leve.",
    price: 27.0,
    image: imageData.dish_10,
  },
  {
    name: "Feijoada leve",
    description: "Feijão preto com legumes, linguiça vegetal e arroz integral.",
    price: 28.0,
    image: imageData.dish_11,
  },
  {
    name: "Carne de panela tropical",
    description: "Carne cozida lentamente com legumes, toque de laranja e arroz branco.",
    price: 32.0,
    image: imageData.dish_12,
  },
  {
    name: "Bobó de palmito",
    description: "Palmito com creme de mandioca, coentro fresco e arroz.",
    price: 25.0,
    image: imageData.dish_13,
  },
  {
    name: "Panqueca de espinafre",
    description: "Panqueca verde recheada com ricota temperada e molho de tomate.",
    price: 21.0,
    image: imageData.dish_14,
  },
  {
    name: "Lasanha de abóbora",
    description: "Camadas de abóbora, molho branco suave e queijo gratinado.",
    price: 27.5,
    image: imageData.dish_15,
  },
  {
    name: "Caldo verde brasileiro",
    description: "Caldo de batata com couve, toque de alho e azeite.",
    price: 18.0,
    image: imageData.dish_16,
  },
  {
    name: "Sopa de milho cremoso",
    description: "Milho verde batido com leite e ervas, servido com croutons.",
    price: 17.0,
    image: imageData.dish_17,
  },
  {
    name: "Salada tropical",
    description: "Folhas frescas, manga, pepino e castanha-do-pará.",
    price: 19.0,
    image: imageData.dish_18,
  },
  {
    name: "Café coado especial",
    description: "Grãos brasileiros moídos na hora, aroma intenso e encorpado.",
    price: 7.0,
    image: imageData.dish_19,
  },
  {
    name: "Cappuccino de rapadura",
    description: "Espuma cremosa com toque de rapadura e canela.",
    price: 12.5,
    image: imageData.dish_20,
  },
  {
    name: "Chocolate quente",
    description: "Chocolate brasileiro cremoso com nibs de cacau.",
    price: 14.0,
    image: imageData.dish_21,
  },
  {
    name: "Suco de maracujá",
    description: "Suco natural gelado com maracujá fresco.",
    price: 10.0,
    image: imageData.dish_22,
  },
  {
    name: "Suco de acerola",
    description: "Refrescante e rico em vitamina C, feito na hora.",
    price: 10.0,
    image: imageData.dish_23,
  },
  {
    name: "Suco de manga",
    description: "Manga madura batida com água de coco.",
    price: 11.0,
    image: imageData.dish_24,
  },
  {
    name: "Limonada com hortelã",
    description: "Limonada brasileira com hortelã fresca e leve dulçor.",
    price: 9.0,
    image: imageData.dish_25,
  },
  {
    name: "Chá gelado de hibisco",
    description: "Chá artesanal de hibisco com frutas vermelhas.",
    price: 11.5,
    image: imageData.dish_26,
  },
  {
    name: "Açaí na tigela",
    description: "Açaí batido com banana, granola e mel.",
    price: 18.5,
    image: imageData.dish_27,
  },
  {
    name: "Vitamina de banana",
    description: "Banana madura batida com leite e aveia.",
    price: 12.0,
    image: imageData.dish_28,
  },
  {
    name: "Smoothie de morango",
    description: "Morango fresco, iogurte natural e toque de mel.",
    price: 13.0,
    image: imageData.dish_29,
  },
  {
    name: "Água de coco",
    description: "Água de coco natural servida bem gelada.",
    price: 8.5,
    image: imageData.dish_30,
  },
];

const menuGrid = document.getElementById("menu-grid");
const cartCount = document.getElementById("cart-count");
const cartButton = document.getElementById("cart-button");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const tableSelect = document.getElementById("table-select");
const placeOrder = document.getElementById("place-order");
const orderStatus = document.getElementById("order-status");
const reservationModal = document.getElementById("reservation-modal");
const openReservation = document.getElementById("open-reservation");
const confirmReservation = document.getElementById("confirm-reservation");
const reservationStatus = document.getElementById("reservation-status");
const reservationDate = document.getElementById("reservation-date");
const reservationTime = document.getElementById("reservation-time");
const scrollMenu = document.getElementById("scroll-menu");

const cart = new Map();

function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function renderMenu() {
  menuGrid.innerHTML = "";
  menuItems.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "menu-card";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <img src="${item.image}" alt="${item.name}" />
      <p>${item.description}</p>
      <div class="card-footer">
        <span class="price">${formatPrice(item.price)}</span>
        <button class="btn" data-index="${index}">Adicionar</button>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

function updateCart() {
  const totalItems = Array.from(cart.values()).reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalItems;
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const line = document.createElement("div");
    line.className = "cart-item";
    line.textContent = `${item.name} x${item.qty}`;
    const price = document.createElement("span");
    price.textContent = formatPrice(item.price * item.qty);
    line.appendChild(price);
    cartItems.appendChild(line);
    total += item.price * item.qty;
  });
  cartTotal.textContent = `Total: ${formatPrice(total)}`;
}

function openModal(modal) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

menuGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-index]");
  if (!button) return;
  const index = Number(button.dataset.index);
  const item = menuItems[index];
  if (cart.has(item.name)) {
    cart.get(item.name).qty += 1;
  } else {
    cart.set(item.name, { ...item, qty: 1 });
  }
  updateCart();
});

cartButton.addEventListener("click", () => {
  updateCart();
  orderStatus.textContent = "";
  openModal(cartModal);
});

openReservation.addEventListener("click", () => {
  reservationStatus.textContent = "";
  openModal(reservationModal);
});

scrollMenu.addEventListener("click", () => {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

placeOrder.addEventListener("click", () => {
  if (cart.size === 0) {
    orderStatus.textContent = "Adicione itens ao carrinho antes de finalizar.";
    return;
  }
  const table = tableSelect.value;
  orderStatus.textContent = `Pedido enviado para a mesa ${table}! Nossa equipe já vai preparar.`;
  cart.clear();
  updateCart();
});

confirmReservation.addEventListener("click", () => {
  if (!reservationDate.value || !reservationTime.value) {
    reservationStatus.textContent = "Preencha data e horário para reservar.";
    return;
  }
  const code = Math.floor(1000 + Math.random() * 9000);
  reservationStatus.textContent = `Reserva confirmada! Seu número é #${code}.`;
});

document.querySelectorAll(".close").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.close === "cart" ? cartModal : reservationModal;
    closeModal(target);
  });
});

window.addEventListener("click", (event) => {
  if (event.target === cartModal) {
    closeModal(cartModal);
  }
  if (event.target === reservationModal) {
    closeModal(reservationModal);
  }
});

function setupTableSelect() {
  for (let i = 1; i <= 15; i += 1) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `Mesa ${i}`;
    tableSelect.appendChild(option);
  }
}

function setupHeroImages() {
  const logo = document.getElementById("logo-image");
  const hero = document.getElementById("hero-image");
  if (logo && imageData.logo) {
    logo.src = imageData.logo;
  }
  if (hero && imageData.hero) {
    hero.src = imageData.hero;
  }
}

setupTableSelect();
setupHeroImages();
renderMenu();
updateCart();
