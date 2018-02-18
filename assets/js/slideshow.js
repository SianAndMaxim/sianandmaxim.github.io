var slideIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
   carousel();
}, false);

function randomRemove(array) {
    var indexToRemove = Math.trunc(getRandomArbitrary(0, array.length))
    var removedVal = array[indexToRemove]
    array.splice(indexToRemove, 1)

    return removedVal
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function removeFromParent(el) {
  el.parentNode.removeChild(el);
}

function carousel() {
    // var i;
    // var slides = document.getElementsByClassName("slide");
    // for (i = 0; i < slides.length-1; i++) {
    //   slides[i].style.display = "none"; 
    // }


    // slideIndex++;
    // if (slideIndex > slides.length) {slideIndex = 1} 
    // slides[slideIndex-1].style.display = "block"; 
    // setTimeout(carousel, 2000); // Change image every 2 seconds



    var current = 0,
    slides = Array.from(document.getElementsByClassName("img-box"));
    boxes = document.getElementsByClassName("slide");

    var currentSelectedIndexes = [0, 1]
    var remainingIndexes = [2, 3, 4, 5, 6, 7]

    for (var i = 0; i < remainingIndexes.length; i++) {
        slides[remainingIndexes[i]].style.opacity = 0

      }

      var currentBoxIndex = 0

    setInterval(function() {

        const mq = window.matchMedia( "(min-width: 481px)" );

        var oldGuyIndex = -1;

        if (mq.matches) {
          oldGuyIndex = randomRemove(currentSelectedIndexes);
        } else {

          oldGuyIndex = currentSelectedIndexes[0];

          if (slides[oldGuyIndex].parentNode.innerHTML !== boxes[0].innerHTML) {
            oldGuyIndex = currentSelectedIndexes[1];
          } 
        }

        var newGuyIndex = remainingIndexes.pop()

        remainingIndexes.unshift(oldGuyIndex)
        currentSelectedIndexes.unshift(newGuyIndex)

        var newGuy = slides[newGuyIndex]
        var oldGuy = slides[oldGuyIndex]

        var boxInQuestion = oldGuy.parentNode
        boxInQuestion.appendChild(newGuy)

        setTimeout(function() {

          newGuy.style.opacity = 1
          newGuy.style.zIndex = 100
          oldGuy.style.opacity = 0
          newGuy.style.zIndex = -100
        }, 500);

      // for (var i = 0; i < remainingIndexes.length; i++) {
      //   slides[remainingIndexes[i]].style.opacity = 0

      // }
      // // current = (current != slides.length - 1) ? current + 1 : 0;
      // for (var i = 0; i < currentSelectedIndexes.length; i++) {
      //   slides[currentSelectedIndexes[i]].style.opacity = 1
      // }

    }, 4000);
}