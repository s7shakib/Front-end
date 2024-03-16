
// This is an external JavaScript page for this website 

// This function is for button and it will open and close another external page 
document.write(document.lastModified.toLocaleString());

var child;
    function start(){

      // it will open and close another external page 

        document.getElementById("openW").addEventListener("click", open_window, false);
        document.getElementById("closeW").addEventListener("click", close_window, false);


}
    function open_window(){


      // This line of code will find the page's link, in this case it will open this external javascript page 

            child = window.open("java1.js","","menubar=yes, toolbar=yes, height=400, width=300");
            
            document.getElementById("closeW").disabled=false;
}

// This function will close window or page 
    function close_window () 

    {
      if (child.closed)

      // If the page is already closed it will display this message

         alert("The Window has already been closed!");
      
       else

       child.close();

    }



        window.addEventListener("load", start, false);


 // This is a global variable for the slide show images and it is also the index number.
let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  // This function is for slideshow images 

  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}

      // This for loop will keep track of images count or its index number. 
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
  }


/*
// The actual code for this function is in index2.html page 
// This function is for random images set 
  var iconimages;
  var picture = ["image/image1", "image/img2", "image/img3"];

  // This fucntion  is used for to pick a random image from an array
  
  function pickimg () {
      
      var index = Math.floor(Math.random() * 3);
      iconimages.setAttribute( "src",picture[index] + ".jpg");
      
      
  }
  
  
  function start() 
  
  {
      // this part will past the actual image where it belongs 
      iconimages = document.getElementById("pic");
      iconimages.addEventListener("click", pickimg, false);
      
      
  }
  
  window.addEventListener("load", start, false);
*/


// 

// The actual code for this is post in index2.html page 

// This code is been used for local storage and it will ask the user its name and it say its name in welcome
/*
var userName = localStorage.getItem("username");
if(!userName){
    userName = prompt("Please enter username");
    // this part will store user's name 
    localStorage.setItem("username", userName);
   
} 
document.getElementById("getName").innerHTML = localStorage.getItem("username");
*/
