function fun() {
    let Flink = document.getElementById("ActLink");
    const slink = document.getElementById("slink");
    console.log(Flink.value);
}

const link = () => {
    const slink = document.getElementById("slink");
    let Flink = document.getElementById("ActLink");
    fetch(`https://api.shrtco.de/v2/shorten?url=${Flink.value}/very/long/link.html`)
    .then(response => response.json())
    .then(data => {
        // lat = data.location.lat;
        // lng = data.location.lng;
        // displayIpInfos(data);
        // displayMap();
        console.log(data);
        console.log(data.result.short_link);
        slink.innerHTML = data.result.short_link;
    })
}

// const getIpInfos = () => { //{ = ""
//     // fetch(https://geo.ipify.org/api/v2/country,city?apiKey=at_3hFk956YVWaxFoLkS3zWx2qxoxyTa&ipAddress=${ipAddress}`)
//     fetch(`https://geo.ipify.org/api/v1?apiKey=at_3hFk956YVWaxFoLkS3zWx2qxoxyTa&ipAddress=${ipinput.value}`)
//     .then(response => response.json())
//     .then(data => {
//         lat = data.location.lat;
//         lng = data.location.lng;
//         displayIpInfos(data);
//         displayMap();
//         console.log(fetch.toString);
//     })
// }