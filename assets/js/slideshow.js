var slideIndex = 0;
carousel();

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

    var currentSelectedIndexes = [0, 2]
    var remainingIndexes = [1, 3]

    for (var i = 0; i < remainingIndexes.length; i++) {
        slides[remainingIndexes[i]].style.opacity = 0

      }

      var currentBoxIndex = 0

    setInterval(function() {

        var newGuyIndex = randomRemove(remainingIndexes)
        var oldGuyIndex = randomRemove(currentSelectedIndexes)
        remainingIndexes.push(oldGuyIndex)
        currentSelectedIndexes.push(newGuyIndex)

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

        currentBoxIndex = currentBoxIndex==0 ? 1 : 0

      // for (var i = 0; i < remainingIndexes.length; i++) {
      //   slides[remainingIndexes[i]].style.opacity = 0

      // }
      // // current = (current != slides.length - 1) ? current + 1 : 0;
      // for (var i = 0; i < currentSelectedIndexes.length; i++) {
      //   slides[currentSelectedIndexes[i]].style.opacity = 1
      // }

    }, 4000);
}