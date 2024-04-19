let apiKey = "pub_40262c128bb3476afb761921e8f4c9224c6a5"
let searchString = "pizza"
var url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${searchString}`;

async function fetchData() {
    let data = await fetch(url);
    let json = await data.json();
    return json;
}

window.onload = async function() {
    const data = await fetchData();
    console.log(data);
}
