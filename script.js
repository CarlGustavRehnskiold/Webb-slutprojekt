document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
  });
      
// let apiKey = "5addb6294bc045f6aefdfc95ac2af42c";
// containerColoumn = document.getElementById("Container-Coloumn");

// console.log(containerColoumn);

// async function fetchData(searchString) {
//     let url = `https://newsapi.org/v2/everything?apikey=${apiKey}&q=${searchString}`;
//     let data = await fetch(url);
//     let json = await data.json();
//     return json;
// }
// // när fönstret laddas
// window.onload = async function() {
//     let foodNews = await fetchData("food");
//     console.log(foodNews);
//     displayFoodNews(foodNews);
//     const sportNews = await fetchData("sport");
//     displaySportNews(sportNews)
// }

// function displayFoodNews(data) {
//     let newsContainer = document.getElementById("NewsArticles-StyleScrollHorizontal");
//     let index = 0;
//     console.log(newsContainer);
//     for (let i = 0; i < data.results.length; i++) {
//         let articleDiv = document.createElement("div");
//         articleDiv.innerHTML = data.results[index].title;
//         articleDiv.classList.add("News-Article-Scroll");
//         newsContainer.appendChild(articleDiv);
//         index++;
//     }

// }

// function displaySportNews(data) {
//     let sportNews = document.getElementById("sport-news");
//     let index = 0;
//     for (let i = 0; i < data.results.length; i++) {
//         let articleDiv = document.createElement("div");
//         articleDiv.innerHTML = data.results[index].title;
//         sportNews.appendChild(articleDiv);
//         index++;
//     }
// }
// function displayFunNews(data) {
//     let funNews = document.getElementById("fun-news");
//     let index = 0;
//     for (let i = 0; i < data.results.length; i++) {
//         let articleDiv = document.createElement("div");
//         articleDiv.innerHTML = data.results[index].title;
//         funNews.appendChild(articleDiv);
//         index++;
//     }
// }