const apiKey = "W3A2R7BdhwjwlraJJo931BbcK7kv5tVwiDw5qbYvR3Bi7l0z9q8asF1M";
const apiURL = "https://api.pexels.com/v1/search?query=Nature";
const photoURL = "https://api.pexels.com/v1/search?query=tigers";
const row = document.querySelector(".album .row");
const btnLoad = document.getElementById("loadImages");
const btnSecond = document.getElementById("loadSecondaryImages");

function createCard(photo) {
  const col = document.createElement("div");
  col.classList.add("col-md-4");

  col.innerHTML = `
        <div class="card mb-4 shadow-sm">
      <img src="${photo.src.medium}" 
           class="bd-placeholder-img card-img-top clickable-img" 
           data-id="${photo.id}" alt="${photo.alt}">
      <div class="card-body">
        <h5 class="card-title clickable-title" data-id="${photo.id}">${
    photo.alt || "Untitled"
  }</h5>
        <p class="card-text">Foto di <strong>${photo.photographer}</strong></p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-danger hide-btn">Hide</button>
          </div>
          <small class="text-muted">${photo.id}</small>
        </div>
      </div>
    </div>
    `;

    // btn hide
    col.querySelector(".clickable-img").addEventListener("click", () =>)
}
