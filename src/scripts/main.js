console.log("we good")

const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
           */


document.addEventListener("scroll", function (event) {
    console.log("I hear ya")

    if ((window.scrollY * .33) > 50 ) {
        audrey.style.width = `${.33 * window.scrollY}px`
    } else { 
        audrey.style.width = "50px"
    }

    if ((window.scrollY * .25) > 100) {
        audrey.style.height = `${.25 * window.scrollY}px`
    } else {
        audrey.style.height = "100px"
    }


    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */



    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
})
console.log(window.scrollY)
console.log(audrey.style.width)