const apiKey = "W3A2R7BdhwjwlraJJo931BbcK7kv5tVwiDw5qbYvR3Bi7l0z9q8asF1M";
const apiURL = "https://api.pexels.com/v1/search?query=";
const photoURL = "hhttps://api.pexels.com/v1/photos/";
const row = document.querySelector(".album .row");
const btnLoad = document.getElementById("loadImages");
const btnSecond = document.getElementById("loadSecondaryImages");

// create card
function createCard(photo) {
  const col = document.createElement("div");
  col.classList.add("col-md-4");

  col.innerHTML = `
        <div class="card mb-4 shadow-sm">
      <img src="${photo.src.medium}" 
           class="bd-placeholder-img card-img-top clickImg" 
           data-id="${photo.id}" alt="${photo.alt}">
      <div class="card-body">
        <h5 class="card-title clickTitle" data-id="${photo.id}">${
    photo.alt || "Untitled"
  }</h5>
        <p class="card-text">Foto di <strong>${photo.photographer}</strong></p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-danger btnHide">Hide</button>
          </div>
          <small class="text-muted">${photo.id}</small>
        </div>
      </div>
    </div>
    `;

  // btn hide
  col.querySelector(".btnHide").addEventListener("click", () => {
    col.remove();
  });

  col
    .querySelector(".clickImg")
    .addEventListener("click", () => loadDetail(photo.id));
  col
    .querySelector(".clickTitle")
    .addEventListener("click", () => loadDetail(photo.id));

  return col;
}

// link img
async function loadImages(query) {
  try {
    const res = await fetch(`${apiURL}${query}`, {
      headers: { Authorization: apiKey },
    });
    const data = await res.json();
    row.innerHTML = "";
    data.photos.forEach((photo) => {
      row.appendChild(createCard(photo));
    });
  } catch (err) {
    console.error("Errore nel caricamento immagini:", err);
  }
}

// load img
btnLoad.addEventListener("click", (e) => {
  e.preventDefault();
  loadImages("ocean");
});

// load sec. img
btnSecond.addEventListener("click", (e) => {
  e.preventDefault();
  loadImages("universe");
});

// serch
document.getElementById("searchBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const query = document.getElementById("searchInput").value.trim();
  if (query) loadImages(query);
});

// img details
async function loadDetail(photoId) {
  try {
    const res = await fetch(`${photoURL}${photoId}`, {
      headers: { Authorization: apiKey },
    });
    const photo = await res.json();

    // save
    const prevContent = container.innerHTML;

    container.innerHTML = `
      <div class="col-12 text-center">
        <h2>${photo.alt || "Details img"}</h2>
        <img src="${photo.src.large}" class="img-fluid my-3"/>
        <p>Foto di: <a href="${photo.photographer_url}" target="_blank">${
      photo.photographer
    }</a></p>
        <button class="btn btn-secondary" id="backBtn">Torna indietro</button>
      </div>
    `;

    document.getElementById("backBtn").addEventListener("click", () => {
      container.innerHTML = prevContent;
    });
  } catch (err) {
    console.error("Errore nel caricamento dettaglio:", err);
  }
}
