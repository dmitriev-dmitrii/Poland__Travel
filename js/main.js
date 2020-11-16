


let menuToggle = document.querySelector('.header__mobile-toggle');


menuToggle.addEventListener("click",showMenu);

let menuList = document.querySelector('.header__menu-list');
let body = document.querySelector('.body');

function showMenu  ()
{
menuToggle.classList.toggle('header__mobile-toggle--active');

if (menuToggle.classList.contains("header__mobile-toggle--active"))
{
	body.style.cssText = 'overflow: hidden;';
	menuList.classList.add('header__menu-list--active');
}
else
{
	body.style.cssText = 'overflow: auto;';
	menuList.classList.remove('header__menu-list--active');
}
}


const goTopBtn = document.querySelector('.go-top-btn');

goTopBtn.onclick = function goTop ()
{
	document.body.scrollTop = 0;
	document.scrollingElement.scrollTop = 0;
}
window.onscroll = function () {
	if ( document.body.scrollTop > 500 || document.scrollingElement.scrollTop > 500 )
	{
		goTopBtn.style.display= 'block';
	}
	else
	{
		goTopBtn.style.display= 'none';
	}
}
