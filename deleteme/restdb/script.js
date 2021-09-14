const url= "https://keasecondsemester-6711.restdb.io/rest/tunes?max=2";

// the API KEY
const options = {
    headers: {
        "x-apikey": "6136704b43cedb6d1f97ed6d",
    },
};

fetch (url, options)
.then ((response) => {
    if (!response.ok) {
    throw Error(response.statusText);
    }
return response.json();
})

.then((data) => {
    //we have the data
    console.log(data);
    handleData(data);
})
.catch((e) => {
    //woops, something went wrong
    console.error("An error occured:", e.message);

});

function handleData(tunes) {

    tunes.forEach((Genre) => {
  
//1.make a template

////2.grab it
const template = document.querySelector("template").content;
 //3.clone it 
 const clone= template.cloneNode(true);
 //4. populate with data 
 clone.querySelecto("h2").textContent = tunes.Genre;
 clone.querySelector("h3".textContent) = tunes.Album;

 //5.append it

 const mainEl = document.querySelector ("main");
 mainEl.appendChild(clone);
});
}
