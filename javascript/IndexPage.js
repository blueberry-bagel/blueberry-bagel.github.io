


/***********************slide 1*********************/
/***********************slide 2*********************/





/***** Scroll counter */


// calculate page height (keeping element position in mind):
/* var offset = $(".image-wheel").offset().top;
var pageHeight = $(document).height() - offset - $(window).height(); */


var pageHeight = $(".image-wheel").height();

// calculate how many pixels user should scroll until html changes:
var count = $(".image-wheel").height() / 2;

/* var count = document.getElementsByClassName("image-wheel")[0];
        divide = pageHeight / count; */

$(document).scroll(function(e){
		console.log(e);
    var scrollPosition = $(window).scrollTop(),
    		relevantToHeight = scrollPosition*count/pageHeight ;

    // (magic if statement here that determines when html should change)
        $(".counter").html(count - Math.round(relevantToHeight));
});








/***** change image */



var imageArray = [
    'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/220px-Homer_Simpson_2006.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png',
    'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'
   ];


let currentIndex = 0;
const imageElement = document.getElementById('stack2_image')
imageElement.src = imageArray[currentIndex];

function changeImage() {
    imageElement.src = imageArray[currentIndex];
    currentIndex = (currentIndex + 1) % imageArray.length;
}

window.addEventListener('scroll', () => {
    // Throttle the event to prevent excessive image changes
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
        changeImage();
    }, 200); // Adjust the delay as needed
});

document.getElementById("image-wheel").addEventListener("mousedown", function (event) {
    /*event.preventDefault();*/
    event.stopPropagation();
}, false);










/***********************slide 3*********************/
/***********************slide 4*********************/