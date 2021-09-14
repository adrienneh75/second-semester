//fetch data
fetch("https://kea-alt-del.dk/t7/api/seasons")
.then(res=> res.json())
.then(gotData);

function gotData(data)
{
    console.log(data);
    data.forEach(showSeasons)
}



//loop through
function showSeasons(seasons){
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

    const topParent = document.querySelector("#seasons");
    const elemParent = topParent.querySelector("img");
    elemParent.appendChild(copy);

}

//grab template, clone, grab parent, append

