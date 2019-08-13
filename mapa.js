 // Creating the variables
        var titleBlue = document.querySelector('.title-blue');
        var titleRed = document.querySelector('.title-red');
        var titleGreen = document.querySelector('.title-green');
        var titleYellow = document.querySelector('.title-yellow');
        var titlePink = document.querySelector('.title-pink');
        var img ;
    // Assigning event listeners to the navigation buttons for hovering above them
       titleBlue.addEventListener("mouseover", offices);
       titleRed.addEventListener("mouseover", countrySide);
       titleGreen.addEventListener("mouseover", playground);
       titleYellow.addEventListener("mouseover", house);
       titlePink.addEventListener("mouseover", industries);
 // Assigning event listeners to the navigation buttons for leaving the hover above them
       titleBlue.addEventListener("mouseout", officesOut);
       titleRed.addEventListener("mouseout", countrySideOut);
       titleGreen.addEventListener("mouseout", playgroundOut);
       titleYellow.addEventListener("mouseout", houseOut);
       titlePink.addEventListener("mouseout", industriesOut);
       
       // Creating functions for changing the image when the user hovers over the navigation button

       function offices(){
           img = document.getElementById("map").src = "map-blue.png";
       }
       function countrySide(){
        img = document.getElementById("map").src = "map-red.png";
    }
    function playground(){
        img = document.getElementById("map").src = "map-green.png";
    }
    function house(){
        img = document.getElementById("map").src = "map-yellow.png";
    }
    function industries(){
        img = document.getElementById("map").src = "map-pink.png";
    }
     // Creating functions for changing the image when the user leaves the navigation button
     function officesOut(){
        img = document.getElementById("map").src = "map-original.png";
    }
    function countrySideOut(){
     img = document.getElementById("map").src = "map-original.png";
 }
 function playgroundOut(){
     img = document.getElementById("map").src = "map-original.png";
 }
 function houseOut(){
     img = document.getElementById("map").src = "map-original.png";
 }
 function industriesOut(){
     img = document.getElementById("map").src = "map-original.png";
 }