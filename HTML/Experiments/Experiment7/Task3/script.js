const products=[
  {name:"laptop", category:"electronics"},
  { name: "Headphones", category: "electronics" },
  { name: "Smartphone", category: "electronics" },
  { name: "T-Shirt", category: "clothing" },
  { name: "Jeans", category: "clothing" },
  { name: "Jacket", category: "clothing" },
  { name: "Book - JavaScript", category: "books" },
  { name: "Book - Python", category: "books" },
  { name: "Shoes", category: "clothing" },
  { name: "USB Cable", category: "electronics" }
];

const list = document.getElementById("list");
const allBtn = document.getElementById("allBtn");
const elecBtn = document.getElementById("elecBtn");
const clothBtn = document.getElementById("clothBtn");
const searchInput = document.getElementById("search");

function display(items) {
  list.innerHTML = ""; // Clear previous items
  
  items.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name} (${p.category})`;
    list.appendChild(li);
  });
}

// Show ALL initially
display(products);

// Filter Buttons
allBtn.addEventListener("click", () => display(products));

elecBtn.addEventListener("click", () => {
  const filtered = products.filter(p => p.category === "electronics");
  display(filtered);
});

clothBtn.addEventListener("click", () => {
  const filtered = products.filter(p => p.category === "clothing");
  display(filtered);
})