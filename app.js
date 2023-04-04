let imgUrl = "https://image.tmdb.org/t/p/w500";

let token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODNjNzgwYTI2OTJmMDY2ZTFmNDRmZDE0MDk0OWZjMyIsInN1YiI6IjY0MjgwODM3OGRlMGFlMDBkNWYyZTQ3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zfuZxZ3HeVCWihkkBfM8sAgPJWT_ujyJh1pjy4XUGoM";

let options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

let promise1 = fetch("https://api.themoviedb.org/3/list/1", options);
let promise2 = fetch("https://api.themoviedb.org/3/list/2", options);
let promise3 = fetch("https://api.themoviedb.org/3/list/3", options);

Promise.all([promise1, promise2, promise3]).then((responses) => {
  let promise1 = responses[0].json();
  let promise2 = responses[1].json();
  let promise3 = responses[2].json();
  Promise.all([promise1, promise2, promise3]).then((allData) => {
    for (let i = 0; i < allData.length; i++) {
      let data = allData[i];
      let { name: rowTitle, items: movies } = data;

      let row = document.createElement("div");
      row.classList.add("row");

      let title = document.createElement("h3");
      title.textContent = rowTitle;

      let imageContainer = document.createElement("div");
      imageContainer.classList.add("images-container");

      for (let i = 0; i < 9; i++) {
        let movie = movies[i];
        let image = document.createElement("img");
        image.src = imgUrl + movie.poster_path;
        imageContainer.append(image);
      }

      row.append(title);
      row.append(imageContainer);

      document.querySelector("main").append(row);
    }
  });
});
