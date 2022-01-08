
let theme = localStorage.getItem('theme');

if (theme == null){
	setTheme("dark");
}
else{
	setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option: ', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if (mode == "dark"){
		document.getElementById('theme-style').href = "default.css";
		document.getElementById('swingImage1').src = "images/moonSwing.png";
		document.getElementById('swingImage2').src = "images/moonSwing.png";
	}
	else if (mode == "light"){
		document.getElementById('theme-style').href = "light.css";
		document.getElementById('swingImage1').src = "images/Suun.png";
		document.getElementById('swingImage2').src = "images/Suun.png";
	}
	// else if (mode == "green"){
	// 	document.getElementById('theme-style').href = "green.css";
	// }
	// else if (mode == "purple"){
	// 	document.getElementById('theme-style').href = "purple.css";
	// }
	localStorage.setItem('theme', mode);
}

var toggle = true;

function dropDown() {
	if (toggle) {
		document.getElementById('responsiveNavBar').style.display = "flex";
		document.getElementById('dropDown').style.marginBottom = "-11px";
		document.getElementById('arrow').className = "fas fa-caret-up";
		toggle = !toggle;
	}
	else if (!toggle) {
		document.getElementById('responsiveNavBar').style.display = "none";
		document.getElementById('arrow').className = "fas fa-caret-down";
		toggle = !toggle;
	}
}

function openModal(modalNumber, closeNumber) {
	var modal = document.getElementById(modalNumber);
	modal.style.display = "block";
	modal.style.animationName = 'fadeIn';

	var span = document.getElementsByClassName(closeNumber)[0];
	span.onclick = function() {
  	modal.style.animationName = 'fadeOut';
  	// set timeout to match the fadeout transition
  	setTimeout(() => { modal.style.display = "none"; }, 600);
	}

	window.onclick = function(event) {
  	if (event.target == modal) {
    	modal.style.animationName = 'fadeOut';
    	// set timeout to match the fadeout transition
    	setTimeout(() => { modal.style.display = "none"; }, 600);
  	}
	}
}


// Get the heading
var h1 = document.querySelector('.Check1');
var h2 = document.querySelector('.Check2');
var h3 = document.querySelector('.Check3');
var h4 = document.querySelector('.Check4');
var h5 = document.querySelector('.Check5');
var h6 = document.querySelector('.Check6');
var h7 = document.querySelector('.Check7');

// Get it's position in the viewport
var bounding1 = h1.getBoundingClientRect();
var bounding2 = h2.getBoundingClientRect();
var bounding3 = h3.getBoundingClientRect();
var bounding4 = h4.getBoundingClientRect();
var bounding5 = h5.getBoundingClientRect();
var bounding6 = h6.getBoundingClientRect();
var bounding7 = h7.getBoundingClientRect();

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight + 70 || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.onscroll = function() { 
  if (isInViewport(h1) || isInViewport(h2) || isInViewport(h3) || isInViewport(h4) ||
  		isInViewport(h5) || isInViewport(h6) || isInViewport(h7)) {
  	for (var i = 0; i < 7; i++) {
  		styleName = "Circle-" + i;
  		let animation = 90;
  		animation -= (i * 10);
  		// console.log(animation);
  		document.getElementById(styleName).style.stroke = "#3c9ee5";
  		document.getElementById(styleName).classList.remove(`CircleAnimation${animation}`);
    	void document.getElementById(styleName).offsetWidth;
    	document.getElementById(styleName).classList.add(`CircleAnimation${animation}`);
  	}
  }
  else {
  	for (var i = 0; i < 7; i++) {
  		styleName = "Circle-" + i;
  		let animation = 90;
  		animation -= (i * 10);
  		document.getElementById(styleName).classList.remove(`CircleAnimation${animation}`);
    	document.getElementById(styleName).style.stroke = "var(--CircleBorderColor)";
  	}
  }
}

