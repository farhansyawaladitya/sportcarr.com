const table=document.getElementById("tableData");
const card=document.getElementById("cardContainer");

cars.forEach(item=>{

table.innerHTML+=`

<tr>

<td>${item.ranking}</td>

<td>${item.nama}</td>

<td>${item.harga}</td>

<td>${item.kecepatan}</td>

<td>${item.hp}</td>

<td>${item.efisiensi}</td>

<td>${item.desain}</td>

<td>${item.skor}</td>

</tr>

`;

card.innerHTML+=`

<div class="card">

<img src="${item.gambar}" alt="${item.nama}">

<div class="card-content">

<h2>${item.nama}</h2>

<p><b>Ranking :</b> ${item.ranking}</p>

<p><b>Skor :</b> ${item.skor}</p>

<p><b>Harga :</b> ${item.harga}</p>

<p><b>Kecepatan :</b> ${item.kecepatan}</p>

<p><b>Horse Power :</b> ${item.hp}</p>

<p><b>Efisiensi :</b> ${item.efisiensi}</p>

<p><b>Desain :</b> ${item.desain}</p>

</div>

</div>

`;

});