
function remover(elem){
		elem.style.display = 'none';
		elem.remove();
	}

var breakpoint = 767;

if(window.innerWidth > breakpoint){
	const slides = document.querySelectorAll('.slide');
	const slider = document.querySelector('.slider');
	const  anterior = document.querySelector('#anterior');
	const  proximo = document.querySelector('#proximo');

	const auto = true;
	const intervalTime = 5000;

	let sliderInterval;

	const proximoSlide = function(){	
	const current = document.querySelector('.current');

	current.classList.remove('current');

	if(current.nextElementSibling){
		current.nextElementSibling.classList.add('current');
	}else{
		slides[0].classList.add('current');
	}

	setTimeout(function(){
		current.classList.remove('current');
	});
}

	const anteriorSlide = function() {	

	const current = document.querySelector('.current');
	current.classList.remove('current');

	if(current.previousElementSibling){
		current.previousElementSibling.classList.add('current');
	}else{
		slides[slides.length-1].classList.add('current');
	}

	setTimeout(function(){
		current.classList.remove('current');
	});
}

proximo.addEventListener('click', function(e){	
	proximoSlide();
});

anterior.addEventListener('click',function(e){	
	anteriorSlide();
});


if(auto){
	slideInterval = setInterval(proximoSlide, intervalTime);
}

} else {

	var elem = document.querySelector('.slider');
	var elem1 = document.querySelector('div.buttons');

	remover(elem);
	remover(elem1);

}

