// ======= Data Storage =======
let landlords = JSON.parse(localStorage.getItem("landlords")) || [];
let tenants = JSON.parse(localStorage.getItem("tenants")) || [];
let rents = JSON.parse(localStorage.getItem("rents")) || [];
let apartments = JSON.parse(localStorage.getItem("apartments")) || [];

// ======= Save to localStorage =======
function saveData() {
  localStorage.setItem("landlords", JSON.stringify(landlords));
  localStorage.setItem("tenants", JSON.stringify(tenants));
  localStorage.setItem("rents", JSON.stringify(rents));
  localStorage.setItem("apartments", JSON.stringify(apartments));
}

// ======= Render Functions =======

// Landlords Table
function renderLandlords() {
  const tbody = document.querySelector("#landlordTable tbody");
  tbody.innerHTML = "";
  landlords.forEach((l, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${l.name}</td>
      <td>${l.mobile}</td>
      <td>${l.apartmentNo}</td>
      <td>${l.address}</td>
      <td>${l.rent}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Tenants Table
function renderTenants() {
  const tbody = document.querySelector("#tenantTable tbody");
  tbody.innerHTML = "";
  tenants.forEach((t, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${t.name}</td>
      <td>${t.mobile}</td>
      <td>${t.gender}</td>
      <td>${t.apartmentNo || "-"}</td>
      <td>${t.availability}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Rents Table
function renderRents() {
  const tbody = document.querySelector("#rentTable tbody");
  tbody.innerHTML = "";
  rents.forEach((r, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${r.name}</td>
      <td>${r.mobile}</td>
      <td>${r.apartmentNo}</td>
      <td>${r.amount}</td>
      <td>${r.months}</td>
      <td>${r.date}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Apartments List
function renderApartments() {
  const list = document.querySelector("#apartmentList");
  list.innerHTML = "";
  apartments.forEach((a, i) => {
    const li = document.createElement("li");
    li.textContent = `${a.number} | ${a.rooms} rooms | ${a.address} | Rent: ${a.rent} | ${a.occupied ? "Occupied" : "Available"}`;
    list.appendChild(li);
  });
}

// ======= Forms Handling =======

// Landlord Form
document.getElementById("landlordForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  landlords.push({
    name: fd.get("name"),
    mobile: fd.get("mobile"),
    apartmentNo: fd.get("apartmentNo"), // fixed to match HTML
    address: fd.get("address"),
    rent: fd.get("rent")
  });
  saveData();
  renderLandlords();
  e.target.reset();
});

// Tenant Form
document.getElementById("tenantForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  tenants.push({
    name: fd.get("name"),
    mobile: fd.get("mobile"),
    gender: fd.get("gender"),
    availability: fd.get("availability"),
    apartmentNo: fd.get("apartmentNo")
  });
  saveData();
  renderTenants();
  e.target.reset();
});

// Rent Form
document.getElementById("rentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  rents.push({
    name: fd.get("name"),
    mobile: fd.get("mobile"),
    apartmentNo: fd.get("apartmentNo"),
    amount: fd.get("amount"),
    months: fd.get("months"),
    date: fd.get("date")
  });
  saveData();
  renderRents();
  e.target.reset();
});

// Apartment Form
document.getElementById("apartmentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  apartments.push({
    number: fd.get("number"),
    rooms: fd.get("rooms"),
    address: fd.get("address"),
    rent: fd.get("rent"),
    occupied: false
  });
  saveData();
  renderApartments();
  e.target.reset();
});

// ======= Initial Render =======
renderLandlords();
renderTenants();
renderRents();
renderApartments();

