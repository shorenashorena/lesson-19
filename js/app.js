import { results } from "./results.js";

const removeBtn = document.querySelector("#remove-btn");

removeBtn.addEventListener("click", () => {
  removeBtn.remove();
});

const heroImg = document.createElement("img");
heroImg.src = "https://fastly.picsum.photos/id/534/1000/800.jpg?hmac=tFbU1nZ2RnQNroI_ToBhH-LFB8KNjyWoc3bVv5G9Wkw";
heroImg.classList.add("hero-img");
document.body.appendChild(heroImg);

const imagesList = document.querySelector("#images-list");

function renderResults() {
  const template = results
    .map((item, index) => {
      return `
        <div class="card" data-index="${index}">
          ${item.hasImage ? `<img src="${item.webImage.url}" alt="${item.title}" />` : ''}
          <h3>${item.title}</h3>
          <p>${item.principalOrFirstMaker}</p>
          <p class="long-title" style="display:none;">${item.longTitle}</p>
          <a href="${item.links.web}" target="_blank" rel="noopener noreferrer">View on Rijksmuseum</a>
          <div class="card-buttons">
            <button class="see-details-btn">See more details</button>
            <button class="remove-card-btn">Remove card</button>
          </div>
        </div>
      `;
    })
    .join("");

  imagesList.innerHTML = template;

  const seeDetailsButtons = imagesList.querySelectorAll(".see-details-btn");
  seeDetailsButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      const longTitle = card.querySelector(".long-title");
      longTitle.style.display = longTitle.style.display === "none" ? "block" : "none";
    });
  });

  const removeCardButtons = imagesList.querySelectorAll(".remove-card-btn");
  removeCardButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      card.remove();
    });
  });
}

renderResults();










