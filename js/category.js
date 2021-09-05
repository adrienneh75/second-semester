//fetch data
fetch("https://kea-alt-del.dk/t7/api/seasons")
.then(res=> res.json())
.then(gotData);

function gotData(data)
{
    console.log(data);
    data.forEach(showSeasons)
}
function showSeasons(seasons){
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
}

//loop through

//grab template, clone, grab parent, append

