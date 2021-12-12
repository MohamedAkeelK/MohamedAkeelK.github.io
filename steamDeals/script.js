// let body = document.querySelector("body");
cardctr = document.querySelector(".card-ctr");

let stores = [];

let getData = () => {
  fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
    .then((response) => response.json())
    .then((data) => {
      addCard(data);
    });
};

let getStore = (num) => {
  fetch("https://www.cheapshark.com/api/1.0/stores")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        stores.push({ storeID: data[i].storeID, storeName: data[i].storeName });
      }
    });
};

getStore();

let addCard = (data) => {
  for (let i = 0; i < data.length; i++) {
    // getStore(data[i].storeID);
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${data[i].thumb}" width="300px" alt="" srcset="" />
        <div class="card-text">
          <h1>${data[i].title}</h1>
          <h2>Sale Price: $${data[i].salePrice}</h2>
          <h2>normal price: $${data[i].normalPrice}</h2>
          <h2>store:${matchStore(data[i].storeID)}</h2>
          <h2>Savings: ${data[i].savings.slice(0, 2)}%</h2>
        </div>
        `;
    cardctr.append(card);
  }
};

let matchStore = (num) => {
  console.log(num);
  for (let i = 0; i < stores.length; i++) {
    if ((num = stores[i].storeID)) {
      return " " + stores[i].storeName;
    }
  }
};

getData();
