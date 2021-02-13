let imageUrl = "https://picsum.photos/id/" + getImageID() + "/400/300"

function getImageID() {
    return localStorage.getItem("imageID");
}

fetch(baseUrlString)
    .then(function (response) {
        return response.json();
    }).then(function (myJson) {
        const data = myJson;
      
        createCharacterImage(data)
    });

printWantedImage = () => {
    let wantedImg = document.querySelector(".wantedImg")
    let bigImage = document.createElement("img")
    wantedImg.appendChild(bigImage)
    bigImage.setAttribute("src", )
}
