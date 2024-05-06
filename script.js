let apiKey = "pub_40262c128bb3476afb761921e8f4c9224c6a5"

containerColoumn = document.getElementById("Container-Coloumn");


let funNews = document.getElementById("fun-news");

console.log(containerColoumn);

async function fetchData(searchString) {
    let url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${searchString}`;
    let data = await fetch(url);
    let json = await data.json();
    return json;
}
// när fönstret laddas
window.onload = async function() {
    let foodNews = await fetchData("food");
    console.log(foodNews);
    displayFoodNews(foodNews);
    const sportNews = await fetchData("sport");
    displaySportNews(sportNews)
}

function displayFoodNews(data) {
    let newsContainer = document.getElementById("NewsArticles-StyleScrollHorizontal");
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

function displaySportNews(data) {
    let sportNews = document.getElementById("sport-news");
    let index = 0;
    for (let i = 0; i < data.results.length; i++) {
        let articleDiv = document.createElement("div");
        articleDiv.innerHTML = data.results[index].title;
        sportNews.appendChild(articleDiv);
        index++;
    }
}