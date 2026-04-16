const container = document.getElementById("pokemon-container");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

// สุ่ม + เพิ่ม
addBtn.addEventListener("click", async function () {
  const randomId = Math.floor(Math.random() * 151) + 1;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const data = await res.json();

  const name = data.name;
  const img = data.sprites.front_default;

  const card = document.createElement("div");

  card.classList.add("card");

  card.innerHTML = `
  <p>${name}</p>
  <img src="${img}" />
`;

  container.appendChild(card);
});

// ลบตัวล่าสุด
removeBtn.addEventListener("click", function () {
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
});
