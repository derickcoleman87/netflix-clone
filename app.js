let token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODNjNzgwYTI2OTJmMDY2ZTFmNDRmZDE0MDk0OWZjMyIsInN1YiI6IjY0MjgwODM3OGRlMGFlMDBkNWYyZTQ3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zfuZxZ3HeVCWihkkBfM8sAgPJWT_ujyJh1pjy4XUGoM";

fetch("https://api.themoviedb.org/3/movie/76341", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    //token not working
    Authorization: "Bearer ${token}",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
