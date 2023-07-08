expiration = new Date;
expiration.setMonth(expiration.getMonth()+6)
counter = eval(cookieVal("total_visited"))
counter++
document.cookie = "total_visited="+counter+";expires=" + expiration.toGMTString()
 
 
function cookieVal(cookieName) {
	thisCookie = document.cookie.split("; ")
	for (i=0; i<thisCookie.length; i++){
		if (cookieName == thisCookie[i].split("=")[0]){
			return thisCookie[i].split("=")[1]
		}
	}
	return 0;
}
 
document.getElementById('result').innerHTML = "<p>You visited this page <label style='font-size:16px;' class='text-info'>"+counter+"</label> times.</p>";

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// var prevScrollPos = window.pageYOffset;
// console.log(prevScrollPos);
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
  
//   if (prevScrollPos > currentScrollPos) {
// 	document.getElementById("navbar").style.top = "0";
// 	console.log("Prev: " + prevScrollPos);
// 	console.log("Curr: " + currentScrollPos);
//   } else {
// 	document.getElementById("navbar").style.top = "-50px";
// 	console.log("Prev: " + prevScrollPos);
// 	console.log("Curr: " + currentScrollPos);
//   }
//   prevScrollPos = currentScrollPos;
// }