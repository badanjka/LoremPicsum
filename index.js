let baseUrl = "https://picsum.photos/v2/list"
let wantedImg = document.querySelector(".wantedImg")
let form = document.querySelector(".hidden")
let wantBlur = document.querySelector(".wantBlur")
let wantGrayscale = document.querySelector(".wantGrayscale")
let button = document.querySelector(".button")
let height = document.querySelector(".height")
let width = document.querySelector(".width")
let mainImage = document.createElement("img")
let myRange = document.getElementById('myRange')
let myRangeWrapper = document.getElementById('myRangeWrapper')


wantBlur.addEventListener('click', () => {
    myRangeWrapper.classList.toggle('hidden')
})

fetch(baseUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        listOfImages(myJson)
        // console.log(myJson)
    });

const listOfImages = (showsData) => {
    // console.log(showsData)
    const data = showsData;
    // console.log(data)
    for (var i = 0; i < 5; i++) {
        const dataOfImage = showsData[i]
        // console.log(dataOfImage)
        printImage(dataOfImage)
    }
}

const printImage = (el) => {
    console.log(el)
    let images = document.querySelector(".images")
    let image = document.createElement("img")
    image.classList = "pic"
    images.appendChild(image)
    let imageId = el.id
    let imageUrl = "https://picsum.photos/id/" + imageId + "/240/221"
    image.setAttribute("src", imageUrl)

    image.addEventListener('click', () => {
        console.log(image);
        storeImageId(imageId)
        wantedImg.innerHTML = ""
        afterClick()
        form.classList = "notHidden"

    });

}

const storeImageId = (imageID) => {
    // console.log(imageID, "setovanje")
    localStorage.setItem("imageID", imageID)
}


function getImageID() {
    return localStorage.getItem("imageID");
}

const afterClick = () => {

    let imageUrl = "https://picsum.photos/id/" + getImageID() + "/750/530"
    let wantedImg = document.querySelector(".wantedImg")
    let bigImage = document.createElement("img")
    wantedImg.appendChild(bigImage)
    bigImage.setAttribute("src", imageUrl)
}

button.addEventListener("click", () => {
  
    console.log("marija")
    console.log("height is:" + height.value)
    console.log("width is:" + width.value)
    console.log("it's chcked:" + wantBlur.checked)
    console.log("it's chcked:" + wantGrayscale.checked)

    simpleGimp()

})
const simpleGimp = () => {
    let finalImg = document.querySelector(".finalImg")

    let grayscale = '';
    let blur = '';
    let upitnik = '';
    if (wantGrayscale.checked === true || wantBlur.checked === true) {
        upitnik = "?"
    }
    val = myRange.value
    if (wantGrayscale.checked === true) {
        grayscale = 'grayscale'
    }
    if (wantBlur.checked === true) {
        let and = ""
        if (wantGrayscale.checked === true) {
            and = "&"
        }

        blur = and + "blur" + "=" + val
    }


    let imageUrl = "https://picsum.photos/id/" + getImageID() + "/" + width.value + "/" + height.value + upitnik + grayscale + blur
    console.log(imageUrl)
    mainImage.classList = "final"
    mainImage.setAttribute("src", imageUrl)
    finalImg.appendChild(mainImage)

}