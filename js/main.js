


const menuToggle = document.querySelector('.header__mobile-toggle');


menuToggle.addEventListener("click",showMenu);

const menuList = document.querySelector('.header__menu-list');


function showMenu  ()
{
menuToggle.classList.toggle('header__mobile-toggle--active');

if (menuToggle.classList.contains("header__mobile-toggle--active"))
{

	menuList.classList.add('header__menu-list--active');
}
else
{

	menuList.classList.remove('header__menu-list--active');
}
}

// кнопка скрола верх
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


// анимации

	const animationItems = document.querySelectorAll('.animation');

	function ItemPosition(e)  {
		return e.getBoundingClientRect();	
	}

	window.addEventListener('scroll', scrollAnimation);


function scrollAnimation() {


	for (let index = 0; index < animationItems.length; index++) {
		const currentItem = animationItems[index];

		console.log(document.scrollingElement.scrollTop);
		console.log(document.body.scrollTop );

		if (document.body.scrollTop || document.scrollingElement.scrollTop >=  ItemPosition(currentItem).top + ItemPosition(currentItem).height * 5  ) 

		{
			console.log();
			
			currentItem.classList.add('animation__active');
			currentItem.classList.remove('animation');
		} 
	}
}
