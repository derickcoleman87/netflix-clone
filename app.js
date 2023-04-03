let token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODNjNzgwYTI2OTJmMDY2ZTFmNDRmZDE0MDk0OWZjMyIsInN1YiI6IjY0MjgwODM3OGRlMGFlMDBkNWYyZTQ3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zfuZxZ3HeVCWihkkBfM8sAgPJWT_ujyJh1pjy4XUGoM";

fetch("https://api.themoviedb.org/3/list/1", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    // let movies = data.items;
    // let rowTitle=data.name;
    let { name: rowTitle, items: movies } = data;
    let row = document.createElement("div");
    row.className("row");
    let title = document.createElement("h3");
    title.textContent = rowTitle;
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    for (let i = 0; i < movies.length, i++; ) {
      let movie = movie[i];
      let image = document.createElement("img");
      image.src - movie.poster_path;
    }

    // <div class="row">
    //     <h4>Released in the Past Year</h4>
    //     <div class="images-container">
    //       <img src="./movie-images/glass-onion.jfif" alt="Glass Onion" />
    //       <img src="./movie-images/strange-world.jfif" alt="Strange World" />
    //       <img src="./movie-images/up.jfif" alt="Up" />
    //       <img src="./movie-images/zombieland.jfif" alt="Zombieland" />
    //       <img src="./movie-images/glass-onion.jfif" alt="Glass Onion" />
    //       <img src="./movie-images/up.jfif" alt="Up" />
    //       <img src="./movie-images/encanto.jfif" alt="Encanto" />
    //       <img src="./movie-images/zombieland.jfif" alt="Zombieland" />
    //     </div>
    //   </div>
    console.log(data);
  });
