function generateGrid() {
  const textarea = document.getElementById("imageUrls");
  const grid = document.getElementById("grid");
  grid.innerHTML = ""; // clear previous

  const urls = textarea.value.split("\n").map(line => line.trim()).filter(Boolean);

  urls.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    grid.appendChild(img);
  });
}
