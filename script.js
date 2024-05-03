let apiKey = "pub_40262c128bb3476afb761921e8f4c9224c6a5"
var url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=war`;
let newsContainer = document.getElementById("NewsArticles-StyleScrollHorizontal");

async function fetchData() {
    let data = await fetch(url);
    let json = await data.json();
    return json;
}
// när fönstret laddas
window.onload = async function() {
    const data = await fetchData();
    console.log(data);
    displayData(data);
}

function displayData(data) {
    let index = 0;
    console.log(newsContainer);
    for (let i = 0; i < data.results.length; i++) {
        let articleDiv = document.createElement("div");
        articleDiv.innerHTML = data.results[index].title;
        articleDiv.classList.add("News-Article-Scroll");
        newsContainer.appendChild(articleDiv);
        index++;
    }

}
