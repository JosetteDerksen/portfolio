console.log('bladeren js');

carouselA = carousel('#carouselA') {
	var fotos = ['vid.png','vid1.png', 'vid2.png', 'vid3.png', 'vid4.png'];
	var fotoImg = document.querySelector('#foto');
	var huidigNrSpan = document.querySelector('#huidigeFotoNr');
	var thumbnailsUl = document.querySelector('#thumbnails');
	var laatsteNrSpan = document.querySelector('#laatsteFotoNr');
	var vooruitButton = document.querySelector('#vooruit');
	var achteruitButton = document.querySelector('#terug');
	var huidigFotoNr = 0 ; // initieel op 0
	toonThumbnails() ;
	toonHuidigeFoto();	


function toonHuidigeFoto() {
	console.log('bladeren ' + huidigFotoNr);
	fotoImg.src = '../Afbeeldingen/VID/' + fotos[huidigFotoNr];
	huidigNrSpan.textContent = huidigFotoNr ;
	laatsteNrSpan.textContent = fotos.length - 1;

	document.querySelectorAll('#thumbnails li').forEach( (thumbLi) => thumbLi.classList.remove('huidig'));
	document.querySelector(`#thumbnails li:nth-of-type(${huidigFotoNr+1})`).classList.add('huidig');
}

function toonThumbnails() {
	fotos.forEach( (foto) => {
		thumbnailsUl.innerHTML += `<li><img src="../Afbeeldingen/VID/ ${foto}"</li>` ;
	});
}

function bladerVooruit() {
	huidigFotoNr = huidigFotoNr + 1 ;
	if ( huidigFotoNr > fotos.length -1 ) { // voorbij het einde 
		huidigFotoNr = 0 ; // terug naar begin
	}
	toonHuidigeFoto();	
}

function bladerAchteruit() {
	huidigFotoNr = huidigFotoNr - 1 ;
	if ( huidigFotoNr < 1 ) { // voorbij het begin 
		huidigFotoNr = fotos.length -1 ; // terug naar einde
	}
	toonHuidigeFoto();
}

vooruitButton.addEventListener('click' , bladerVooruit );
achteruitButton.addEventListener('click' , bladerAchteruit );

}

//  Illustrator cursus
carouselB = carousel('#carouselB'){
var fotos = ['1.png','2.png', '3.png', '4.png', '5.png', '7.png', '8.png', '9.png', '10.png'];

// a. DOM elementen die een rol spelen in dit script
var fotoImg1 = document.querySelector('#foto1');
var huidigNrSpan1 = document.querySelector('#huidigeFotoNr1');
var thumbnailsUl1 = document.querySelector('#thumbnails1');
var laatsteNrSpan1 = document.querySelector('#laatsteFotoNr1');
var vooruitButton1 = document.querySelector('#vooruit1');
var achteruitButton1 = document.querySelector('#terug1');

var huidigFotoNr1 = 0 ; // initieel op 0
toonThumbnails1() ;
toonHuidigeFoto1();	

function toonHuidigeFoto1() {
	console.log('bladeren ' + huidigFotoNr1);
	fotoImg1.src = '../Afbeeldingen/Illustrator cursus/' + fotos[huidigFotoNr1];
	huidigNrSpan1.textContent = huidigFotoNr1 ;
	laatsteNrSpan1.textContent = fotos.length - 1;

	document.querySelectorAll('#thumbnails1 li').forEach( (thumbLi) => thumbLi.classList.remove('huidig1'));
	document.querySelector(`#thumbnails1 li:nth-of-type(${huidigFotoNr1+1})`).classList.add('huidig1');
}

function toonThumbnails1() {
	fotos.forEach( (foto) => {
		thumbnailsUl1.innerHTML += `<li><img src="../Afbeeldingen/Illustrator cursus/ ${foto}"</li>` ;
	});
}

function bladerVooruit1() {
	huidigFotoNr1 = huidigFotoNr1 + 1 ;
	if ( huidigFotoNr1 > fotos.length -1 ) { // voorbij het einde 
		huidigFotoNr1 = 0 ; // terug naar begin
	}
	toonHuidigeFoto1();	
}

function bladerAchteruit1() {
	huidigFotoNr1 = huidigFotoNr1 - 1 ;
	if ( huidigFotoNr1 < 1 ) { // voorbij het begin 
		huidigFotoNr1 = fotos.length -1 ; // terug naar einde
	}
	toonHuidigeFoto1();
}

// d. eventlisteners: voor de heen en weer knoppen die de bladerfuncties aanroepen
vooruitButton1.addEventListener('click' , bladerVooruit1 );
achteruitButton1.addEventListener('click' , bladerAchteruit1 );
}
