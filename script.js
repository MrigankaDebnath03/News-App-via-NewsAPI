let currentQuery = "Headlines";
let currentPage = 1;
const fetchNews = async (page, q) => {
  console.log(`Fetching News for ${q}, page number ${page}`);

  var url =
    "https://newsapi.org/v2/everything?" +
    "q=" +
    q +
    "&from=2024-05-30" +
    "&pageSize=20&" +
    "language=en&" +
    "page=" +
    page +
    "&sortBy=popularity&" +
    "apiKey=a7c6ef5a5ad64d9399d25b795afba09f";

  var req = new Request(url);

  let a = await fetch(req);
  if (!a.ok) throw new Error(`HTTP error! Status: ${a.status}`);
  let response = await a.json();
  // console.log(JSON.stringify(response));

  // console.log(response);

  let str = "";
  resultCount.innerHTML = response.totalResults;

  for (let item of response.articles) {
    str =
      str +
      `<div class="card my-4 mx-2" style="width: 18rem">
          <img src="${item.urlToImage}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">
              ${item.description}
            </p>
            <a href="${item.url}" target="_blank" class="btn btn-primary">Read More</a>
          </div>
        </div>`;
  }
  document.querySelector(".content").innerHTML = str;
};

fetchNews(1, currentQuery);

search.addEventListener("click", (e) => {
  e.preventDefault();
  let query = searchInput.value;
  let currentQuery = query;
  fetchNews(1, query);
});

previous.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage > 1) {
    currentPage = currentPage - 1;
    fetchNews(currentPage, currentQuery);
  }
});

next.addEventListener("click", (e) => {
  e.preventDefault();
  currentPage = currentPage + 1;
  fetchNews(currentPage, currentQuery);
});

Home.addEventListener("click", (e) => {
  e.preventDefault();
  fetchNews(1, "Headlines");
});

WorldNews.addEventListener("click", (e) => {
  e.preventDefault();
  fetchNews(1, "World News");
});

India.addEventListener("click", (e) => {
  e.preventDefault();
  fetchNews(1, "India");
});

Politics.addEventListener("click", (e) => {
  e.preventDefault();
  fetchNews(1, "Politics");
});

Sports.addEventListener("click", (e) => {
  e.preventDefault();
  fetchNews(1, "Sports");
});
