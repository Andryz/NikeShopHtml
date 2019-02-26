
// MENU
var MenuModule = (function () {
$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
	});

	// Показывает и скрывает меню
	$('.hamburger').on('click', function(e){
		$('.header__category__list').slideToggle();
	});
	
	// Cкрывает меню при нажатии на кнопку
	$('.nav-btn').on('click', function(e){
		$('.header__category__list').slideToggle();
		$('.hamburger').toggleClass('open');
	});

});
}());



// SLIDER
var SliderModule = (function () {
	$(document).ready(function(e){
		var sliderObject ={
			nameOne: 'САЙТ ШКОЛЫ ОНЛАЙН ОБУЧЕНИЯ',
			nameTwo: 'САЙТ СТУДИИ ITLOFT',
			nameThree: 'САЙТ КОМПАНИИ LOFT BLOG',
			nameFour: 'САЙТ ШКОЛЫ ATMA YOGA',
			image1: 'assets/img/images_png/portfolio.png',
			image2: 'assets/img/images_png/portfolio-2.png',
			image3: 'assets/img/images_png/portfolio-3.png',
			image4: 'assets/img/images_png/portfolio-4.png',
			technologies1: 'HTML, CSS, JAVASCRIPT',
			technologies2: 'HTML, CSS, SVG',
			technologies3: 'HTML, CSS, PARALAX',
			technologies4: 'HTML, CSS, JAVASCRIPT, PHP',
			sliderLink1: '.slider__list__link_one',
			sliderLink2: '.slider__list__link_two',
			sliderLink3: '.slider__list__link_tree',
			sliderLink4: '.slider__list__link_four'
		};
		var item = ['nameOne','nameTwo','nameThree','nameFour'];
		var itemImg = ['image1','image2','image3','image4'];
		var itemTechnologies = ['technologies1','technologies2','technologies3','technologies4'];
		var itemLink =['sliderLink1','sliderLink2','sliderLink3','sliderLink4'];
		var sliderTitle = $('.slider__detail__title');
		var sliderImg = $('.slider__portfolio__img_item');
		var sliderTechnologies = $('.slider__detail__technologies');
		var i = 0;
		$(sliderObject[itemLink[i]]).css({'background': '#48cdb9','color': '#48cdb9'});

		$('.slider__arrow_right').on('click', function(){
			setTimeout(function(){
				sliderTitle.removeClass('bounceInDown'); 	//Удаляем класс с анимацией на текст
				sliderImg.removeClass('bounceInUp'); 	//Удаляем класс с анимацией на картинку
			}, 1000);
			$(sliderObject[itemLink[i]]).css({'background': '#fff','color': '#fff'});//Каждой ссылке элемента списка присваиваем класс со сменой фона 
	 		i++; //увеличиваем значение на +1
	 		if(i > item.length-1){
	 			i = 0;
	 		}  
	 		$(sliderObject[itemLink[i]]).css({'background': '#48cdb9','color': '#48cdb9'}); //Каждой ссылке элемента списка присваиваем класс со сменой фона
			sliderImg.attr('src', sliderObject[itemImg[i]]); 	//Изменяем путь к картинке
			sliderTitle.text(sliderObject[item[i]]); 	//выбираем текущий обьект в массиве
			sliderTechnologies.text(sliderObject[itemTechnologies[i]]); //выбираем текущий обьект в массиве
			sliderTitle.addClass('bounceInDown'); 	//Добавляем классом анимацию на текст
			sliderImg.addClass('bounceInUp'); 	//Добавляем классом анимацию на картинку
		});

		$('.slider__arrow_left').on('click', function(){
			$(sliderObject[itemLink[i]]).css({'background': '#fff','color': '#fff'});//Каждой ссылке элемента списка присваиваем класс со сменой фона 
			i--;
			if(i < 0){
	 			i = item.length-1;
	 		}
			setTimeout(function(){
				sliderTitle.removeClass('bounceInDown'); 	//Удаляем класс с анимацией на текст
				sliderImg.removeClass('bounceInUp'); 	//Удаляем класс с анимацией на картинку
			}, 1000);
			$(sliderObject[itemLink[i]]).css({'background': '#48cdb9','color': '#48cdb9'}); //Каждой ссылке элемента списка присваиваем класс со сменой фона
			sliderImg.attr('src', sliderObject[itemImg[i]]); 	//Изменяем путь к картинке
			sliderTitle.text(sliderObject[item[i]]); 	//выбираем текущий обьект в массиве
			sliderTechnologies.text(sliderObject[itemTechnologies[i]]); //выбираем текущий обьект в массиве
			sliderTitle.addClass('bounceInDown'); 	//Добавляем классом анимацию на текст
			sliderImg.addClass('bounceInUp'); 	//Добавляем классом анимацию на картинку
		});
		

		// $('.slider__list__btn_one').on('click', function(){	
		// 	setTimeout(function(){
		// 		sliderTitle.removeClass('bounceInDown'); 	//Удаляем класс с анимацией на текст
		// 		sliderImg.removeClass('bounceInUp'); 	//Удаляем класс с анимацией на картинку
		// 	}, 1000);
	 // 		 	i = 0;
	 // 		$(sliderObject[itemLink[i]]).css({'background': '#48cdb9','color': '#48cdb9'}); //Каждой ссылке элемента списка присваиваем класс со сменой фона
		// 	sliderImg.attr('src', sliderObject[itemImg[i]]); 	//Изменяем путь к картинке
		// 	sliderTitle.text(sliderObject[item[i]]); 	//выбираем текущий обьект в массиве
		// 	sliderTechnologies.text(sliderObject[itemTechnologies[i]]); //выбираем текущий обьект в массиве
		// 	sliderTitle.addClass('bounceInDown'); 	//Добавляем классом анимацию на текст
		// 	sliderImg.addClass('bounceInUp'); 	//Добавляем классом анимацию на картинку
		// });

		// $('.slider__list__btn_two').on('click', function(){	
		// 	setTimeout(function(){
		// 		sliderTitle.removeClass('bounceInDown'); 	//Удаляем класс с анимацией на текст
		// 		sliderImg.removeClass('bounceInUp'); 	//Удаляем класс с анимацией на картинку
		// 	}, 1000);
	 // 		 	i = 1;
	 // 		$(sliderObject[itemLink[i]]).css({'background': '#48cdb9','color': '#48cdb9'}); //Каждой ссылке элемента списка присваиваем класс со сменой фона
		// 	sliderImg.attr('src', sliderObject[itemImg[i]]); 	//Изменяем путь к картинке
		// 	sliderTitle.text(sliderObject[item[i]]); 	//выбираем текущий обьект в массиве
		// 	sliderTechnologies.text(sliderObject[itemTechnologies[i]]); //выбираем текущий обьект в массиве
		// 	sliderTitle.addClass('bounceInDown'); 	//Добавляем классом анимацию на текст
		// 	sliderImg.addClass('bounceInUp'); 	//Добавляем классом анимацию на картинку
		// });

		// $('.slider__list__btn_three').on('click', function(){	
		// 	setTimeout(function(){
		// 		sliderTitle.removeClass('bounceInDown'); 	//Удаляем класс с анимацией на текст
		// 		sliderImg.removeClass('bounceInUp'); 	//Удаляем класс с анимацией на картинку
		// 	}, 1000);
	 // 		 	i = 2;
	 // 		$(sliderObject[itemLink[i]]).css({'background': '#48cdb9','color': '#48cdb9'}); //Каждой ссылке элемента списка присваиваем класс со сменой фона
		// 	sliderImg.attr('src', sliderObject[itemImg[i]]); 	//Изменяем путь к картинке
		// 	sliderTitle.text(sliderObject[item[i]]); 	//выбираем текущий обьект в массиве
		// 	sliderTechnologies.text(sliderObject[itemTechnologies[i]]); //выбираем текущий обьект в массиве
		// 	sliderTitle.addClass('bounceInDown'); 	//Добавляем классом анимацию на текст
		// 	sliderImg.addClass('bounceInUp'); 	//Добавляем классом анимацию на картинку
		// });

		// $('.slider__list__btn_four').on('click', function(){	
		// 	setTimeout(function(){
		// 		sliderTitle.removeClass('bounceInDown'); 	//Удаляем класс с анимацией на текст
		// 		sliderImg.removeClass('bounceInUp'); 	//Удаляем класс с анимацией на картинку
		// 	}, 1000);
	 // 		 	i = 3; 
	 // 		$(sliderObject[itemLink[i]]).css({'background': '#48cdb9','color': '#48cdb9'}); //Каждой ссылке элемента списка присваиваем класс со сменой фона
		// 	sliderImg.attr('src', sliderObject[itemImg[i]]); 	//Изменяем путь к картинке
		// 	sliderTitle.text(sliderObject[item[i]]); 	//выбираем текущий обьект в массиве
		// 	sliderTechnologies.text(sliderObject[itemTechnologies[i]]); //выбираем текущий обьект в массиве
		// 	sliderTitle.addClass('bounceInDown'); 	//Добавляем классом анимацию на текст
		// 	sliderImg.addClass('bounceInUp'); 	//Добавляем классом анимацию на картинку
		// });

	});
}());
var SidebarModule = (function () {
	$(document).ready(function(){
			// Показывает и скрывает сайдбар в блоге,
			// при мощи дополнительного класа который мы добавляем и убираем
		$('.list-article').on('click', function(e){
			$('.list-article').toggleClass('open-sidebar');
		});
	});

		//Фиксация при скроле на выбранном элементе

	$(window).scroll(function() {  			    //Берем высоту нашего header
		if ($(this).scrollTop() > headerBlog.height()){    
		$('.list-article').addClass("list-article__sticky");    // если мы проскролили больше чем высота header
		$('.page-articles').addClass("page-articles_scroll");	// то тогда меняем стили
		}
		else{
		$('.list-article').removeClass("list-article__sticky");
		$('.page-articles').removeClass("page-articles_scroll");
		}

	});

		var headerBlog = $('.page-header-blog');
		var git = $('.article_git');
		var conemu = $('.article_conemu');

		$(window).scroll(function() {

			if ($(this).scrollTop() > headerBlog.height()){
				$('.list-article__name_git').addClass("list-article__name__link_scroll");
			}
			else{
				$('.list-article__name_git').removeClass("list-article__name__link_scroll");
			}

		});

		$(window).scroll(function() {

			if ($(this).scrollTop() > headerBlog.height()+git.height()){
				$('.list-article__name_conemu').addClass("list-article__name__link_scroll");
			 	$('.list-article__name_git').removeClass("list-article__name__link_scroll");
			}
			else{
				$('.list-article__name_conemu').removeClass("list-article__name__link_scroll");
			}

		});

		$(window).scroll(function() {

			if ($(this).scrollTop() > headerBlog.height()+git.height()+conemu.height()){
				$('.list-article__name_gulp').addClass("list-article__name__link_scroll");
				$('.list-article__name_conemu').removeClass("list-article__name__link_scroll");
			}
			else{
				$('.list-article__name_gulp').removeClass("list-article__name__link_scroll");
			}

		});

	}());

	var FlipperModule = (function () {
		$(document).ready(function(){
			$('.authorize').on('click', function(e){
				$('.flipper').toggleClass("rotate-authorize");
			});

			$('.authorize-btn__item_home').on('click', function(e){
				$('.flipper').toggleClass("rotate-authorize");
			});
		});	
	}());
// // VALIDATION
// var ValidationModule = (function () {
// 	$(function() {

// 	    $("#form-validation").validate({

// 	        rules: {
// 	 			form_name: {
// 	                required: true
// 	            },
// 	            form_email: {
// 	                required: true,
// 	                email: true
// 	            }
// 	        },
// 	        messages: {
// 	            form_name: {
// 	                required: "Поле Имя обязательное для заполнения"
// 	            },
// 	            form_email: {
// 	                required: "Поле E-mail обязательное для заполнения",
// 	                email: "Введите пожалуйста корректный e-mail"
// 	            }
// 	        },
// 	        focusCleanup: true,  //При фокусе очищает цвет ошибки
// 	        focusInvalid: false,
// 	        submitHandler: function() {
// 	        	$("form").submit(function() { //Change
// 					var th = $(this);
// 					$.ajax({
// 						type: "POST",
// 						url: "/assets/php/mail.php", //Change
// 						data: th.serialize()
// 					}).done(function() {
// 						alert("Thank you!");
// 						setTimeout(function() {
// 							// Done Functions
// 							th.trigger("reset");
// 						}, 1000);
// 					});
// 					return false;
// 				});
// 	        }
// 	    });

// 	});
// }());
// // Mail forma
// var MailModule = (function () {

	$(document).ready(function() {

		//E-mail Ajax Send
		$("form").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "/assets/php/mail.php", //Change
				data: th.serialize()
			}).done(function() {
				alert("Thank you!");
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
				}, 1000);
			});
			return false;
		});

	});
// }());
// MAP
function initMap() {
	// Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 50.5097738, lng: 30.5000318},
		scrollwheel: false,
		zoom: 16
    });
	}

// // Плавный скролл по якорям
var ScrollAnchorModule = (function () {
	$(document).ready(function() {
		$('a[href^=".anchor-"]').on('click', function(){
		var el = $(this).attr('href');
		$('body').animate({
		scrollTop: $(el).offset().top}, 1500);
		return false;
		});
	});
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1lbnUuanMiLCJzbGlkZXIuanMiLCJTaWRlYmFyLmpzIiwidmFsaWRhdGlvbi5qcyIsIm1haWxGb3JtLmpzIiwibWFwLmpzIiwic2Nyb2xsQW5jaG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIiLCIvLyBNRU5VXHJcbnZhciBNZW51TW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHQkKCcuaGFtYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuXHR9KTtcclxuXHJcblx0Ly8g0J/QvtC60LDQt9GL0LLQsNC10YIg0Lgg0YHQutGA0YvQstCw0LXRgiDQvNC10L3RjlxyXG5cdCQoJy5oYW1idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdCQoJy5oZWFkZXJfX2NhdGVnb3J5X19saXN0Jykuc2xpZGVUb2dnbGUoKTtcclxuXHR9KTtcclxuXHRcclxuXHQvLyBD0LrRgNGL0LLQsNC10YIg0LzQtdC90Y4g0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDXHJcblx0JCgnLm5hdi1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdCQoJy5oZWFkZXJfX2NhdGVnb3J5X19saXN0Jykuc2xpZGVUb2dnbGUoKTtcclxuXHRcdCQoJy5oYW1idXJnZXInKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG5cdH0pO1xyXG5cclxufSk7XHJcbn0oKSk7XHJcblxyXG5cclxuIiwiLy8gU0xJREVSXHJcbnZhciBTbGlkZXJNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xyXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKGUpe1xyXG5cdFx0dmFyIHNsaWRlck9iamVjdCA9e1xyXG5cdFx0XHRuYW1lT25lOiAn0KHQkNCZ0KIg0KjQmtCe0JvQqyDQntCd0JvQkNCZ0J0g0J7QkdCj0KfQldCd0JjQrycsXHJcblx0XHRcdG5hbWVUd286ICfQodCQ0JnQoiDQodCi0KPQlNCY0JggSVRMT0ZUJyxcclxuXHRcdFx0bmFtZVRocmVlOiAn0KHQkNCZ0KIg0JrQntCc0J/QkNCd0JjQmCBMT0ZUIEJMT0cnLFxyXG5cdFx0XHRuYW1lRm91cjogJ9Ch0JDQmdCiINCo0JrQntCb0KsgQVRNQSBZT0dBJyxcclxuXHRcdFx0aW1hZ2UxOiAnYXNzZXRzL2ltZy9pbWFnZXNfcG5nL3BvcnRmb2xpby5wbmcnLFxyXG5cdFx0XHRpbWFnZTI6ICdhc3NldHMvaW1nL2ltYWdlc19wbmcvcG9ydGZvbGlvLTIucG5nJyxcclxuXHRcdFx0aW1hZ2UzOiAnYXNzZXRzL2ltZy9pbWFnZXNfcG5nL3BvcnRmb2xpby0zLnBuZycsXHJcblx0XHRcdGltYWdlNDogJ2Fzc2V0cy9pbWcvaW1hZ2VzX3BuZy9wb3J0Zm9saW8tNC5wbmcnLFxyXG5cdFx0XHR0ZWNobm9sb2dpZXMxOiAnSFRNTCwgQ1NTLCBKQVZBU0NSSVBUJyxcclxuXHRcdFx0dGVjaG5vbG9naWVzMjogJ0hUTUwsIENTUywgU1ZHJyxcclxuXHRcdFx0dGVjaG5vbG9naWVzMzogJ0hUTUwsIENTUywgUEFSQUxBWCcsXHJcblx0XHRcdHRlY2hub2xvZ2llczQ6ICdIVE1MLCBDU1MsIEpBVkFTQ1JJUFQsIFBIUCcsXHJcblx0XHRcdHNsaWRlckxpbmsxOiAnLnNsaWRlcl9fbGlzdF9fbGlua19vbmUnLFxyXG5cdFx0XHRzbGlkZXJMaW5rMjogJy5zbGlkZXJfX2xpc3RfX2xpbmtfdHdvJyxcclxuXHRcdFx0c2xpZGVyTGluazM6ICcuc2xpZGVyX19saXN0X19saW5rX3RyZWUnLFxyXG5cdFx0XHRzbGlkZXJMaW5rNDogJy5zbGlkZXJfX2xpc3RfX2xpbmtfZm91cidcclxuXHRcdH07XHJcblx0XHR2YXIgaXRlbSA9IFsnbmFtZU9uZScsJ25hbWVUd28nLCduYW1lVGhyZWUnLCduYW1lRm91ciddO1xyXG5cdFx0dmFyIGl0ZW1JbWcgPSBbJ2ltYWdlMScsJ2ltYWdlMicsJ2ltYWdlMycsJ2ltYWdlNCddO1xyXG5cdFx0dmFyIGl0ZW1UZWNobm9sb2dpZXMgPSBbJ3RlY2hub2xvZ2llczEnLCd0ZWNobm9sb2dpZXMyJywndGVjaG5vbG9naWVzMycsJ3RlY2hub2xvZ2llczQnXTtcclxuXHRcdHZhciBpdGVtTGluayA9WydzbGlkZXJMaW5rMScsJ3NsaWRlckxpbmsyJywnc2xpZGVyTGluazMnLCdzbGlkZXJMaW5rNCddO1xyXG5cdFx0dmFyIHNsaWRlclRpdGxlID0gJCgnLnNsaWRlcl9fZGV0YWlsX190aXRsZScpO1xyXG5cdFx0dmFyIHNsaWRlckltZyA9ICQoJy5zbGlkZXJfX3BvcnRmb2xpb19faW1nX2l0ZW0nKTtcclxuXHRcdHZhciBzbGlkZXJUZWNobm9sb2dpZXMgPSAkKCcuc2xpZGVyX19kZXRhaWxfX3RlY2hub2xvZ2llcycpO1xyXG5cdFx0dmFyIGkgPSAwO1xyXG5cdFx0JChzbGlkZXJPYmplY3RbaXRlbUxpbmtbaV1dKS5jc3MoeydiYWNrZ3JvdW5kJzogJyM0OGNkYjknLCdjb2xvcic6ICcjNDhjZGI5J30pO1xyXG5cclxuXHRcdCQoJy5zbGlkZXJfX2Fycm93X3JpZ2h0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHNsaWRlclRpdGxlLnJlbW92ZUNsYXNzKCdib3VuY2VJbkRvd24nKTsgXHQvL9Cj0LTQsNC70Y/QtdC8INC60LvQsNGB0YEg0YEg0LDQvdC40LzQsNGG0LjQtdC5INC90LAg0YLQtdC60YHRglxyXG5cdFx0XHRcdHNsaWRlckltZy5yZW1vdmVDbGFzcygnYm91bmNlSW5VcCcpOyBcdC8v0KPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgSDRgSDQsNC90LjQvNCw0YbQuNC10Lkg0L3QsCDQutCw0YDRgtC40L3QutGDXHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHQkKHNsaWRlck9iamVjdFtpdGVtTGlua1tpXV0pLmNzcyh7J2JhY2tncm91bmQnOiAnI2ZmZicsJ2NvbG9yJzogJyNmZmYnfSk7Ly/QmtCw0LbQtNC+0Lkg0YHRgdGL0LvQutC1INGN0LvQtdC80LXQvdGC0LAg0YHQv9C40YHQutCwINC/0YDQuNGB0LLQsNC40LLQsNC10Lwg0LrQu9Cw0YHRgSDRgdC+INGB0LzQtdC90L7QuSDRhNC+0L3QsCBcclxuXHQgXHRcdGkrKzsgLy/Rg9Cy0LXQu9C40YfQuNCy0LDQtdC8INC30L3QsNGH0LXQvdC40LUg0L3QsCArMVxyXG5cdCBcdFx0aWYoaSA+IGl0ZW0ubGVuZ3RoLTEpe1xyXG5cdCBcdFx0XHRpID0gMDtcclxuXHQgXHRcdH0gIFxyXG5cdCBcdFx0JChzbGlkZXJPYmplY3RbaXRlbUxpbmtbaV1dKS5jc3MoeydiYWNrZ3JvdW5kJzogJyM0OGNkYjknLCdjb2xvcic6ICcjNDhjZGI5J30pOyAvL9Ca0LDQttC00L7QuSDRgdGB0YvQu9C60LUg0Y3Qu9C10LzQtdC90YLQsCDRgdC/0LjRgdC60LAg0L/RgNC40YHQstCw0LjQstCw0LXQvCDQutC70LDRgdGBINGB0L4g0YHQvNC10L3QvtC5INGE0L7QvdCwXHJcblx0XHRcdHNsaWRlckltZy5hdHRyKCdzcmMnLCBzbGlkZXJPYmplY3RbaXRlbUltZ1tpXV0pOyBcdC8v0JjQt9C80LXQvdGP0LXQvCDQv9GD0YLRjCDQuiDQutCw0YDRgtC40L3QutC1XHJcblx0XHRcdHNsaWRlclRpdGxlLnRleHQoc2xpZGVyT2JqZWN0W2l0ZW1baV1dKTsgXHQvL9Cy0YvQsdC40YDQsNC10Lwg0YLQtdC60YPRidC40Lkg0L7QsdGM0LXQutGCINCyINC80LDRgdGB0LjQstC1XHJcblx0XHRcdHNsaWRlclRlY2hub2xvZ2llcy50ZXh0KHNsaWRlck9iamVjdFtpdGVtVGVjaG5vbG9naWVzW2ldXSk7IC8v0LLRi9Cx0LjRgNCw0LXQvCDRgtC10LrRg9GJ0LjQuSDQvtCx0YzQtdC60YIg0LIg0LzQsNGB0YHQuNCy0LVcclxuXHRcdFx0c2xpZGVyVGl0bGUuYWRkQ2xhc3MoJ2JvdW5jZUluRG93bicpOyBcdC8v0JTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YHQvtC8INCw0L3QuNC80LDRhtC40Y4g0L3QsCDRgtC10LrRgdGCXHJcblx0XHRcdHNsaWRlckltZy5hZGRDbGFzcygnYm91bmNlSW5VcCcpOyBcdC8v0JTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YHQvtC8INCw0L3QuNC80LDRhtC40Y4g0L3QsCDQutCw0YDRgtC40L3QutGDXHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCcuc2xpZGVyX19hcnJvd19sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdFx0JChzbGlkZXJPYmplY3RbaXRlbUxpbmtbaV1dKS5jc3MoeydiYWNrZ3JvdW5kJzogJyNmZmYnLCdjb2xvcic6ICcjZmZmJ30pOy8v0JrQsNC20LTQvtC5INGB0YHRi9C70LrQtSDRjdC70LXQvNC10L3RgtCwINGB0L/QuNGB0LrQsCDQv9GA0LjRgdCy0LDQuNCy0LDQtdC8INC60LvQsNGB0YEg0YHQviDRgdC80LXQvdC+0Lkg0YTQvtC90LAgXHJcblx0XHRcdGktLTtcclxuXHRcdFx0aWYoaSA8IDApe1xyXG5cdCBcdFx0XHRpID0gaXRlbS5sZW5ndGgtMTtcclxuXHQgXHRcdH1cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHNsaWRlclRpdGxlLnJlbW92ZUNsYXNzKCdib3VuY2VJbkRvd24nKTsgXHQvL9Cj0LTQsNC70Y/QtdC8INC60LvQsNGB0YEg0YEg0LDQvdC40LzQsNGG0LjQtdC5INC90LAg0YLQtdC60YHRglxyXG5cdFx0XHRcdHNsaWRlckltZy5yZW1vdmVDbGFzcygnYm91bmNlSW5VcCcpOyBcdC8v0KPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgSDRgSDQsNC90LjQvNCw0YbQuNC10Lkg0L3QsCDQutCw0YDRgtC40L3QutGDXHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHQkKHNsaWRlck9iamVjdFtpdGVtTGlua1tpXV0pLmNzcyh7J2JhY2tncm91bmQnOiAnIzQ4Y2RiOScsJ2NvbG9yJzogJyM0OGNkYjknfSk7IC8v0JrQsNC20LTQvtC5INGB0YHRi9C70LrQtSDRjdC70LXQvNC10L3RgtCwINGB0L/QuNGB0LrQsCDQv9GA0LjRgdCy0LDQuNCy0LDQtdC8INC60LvQsNGB0YEg0YHQviDRgdC80LXQvdC+0Lkg0YTQvtC90LBcclxuXHRcdFx0c2xpZGVySW1nLmF0dHIoJ3NyYycsIHNsaWRlck9iamVjdFtpdGVtSW1nW2ldXSk7IFx0Ly/QmNC30LzQtdC90Y/QtdC8INC/0YPRgtGMINC6INC60LDRgNGC0LjQvdC60LVcclxuXHRcdFx0c2xpZGVyVGl0bGUudGV4dChzbGlkZXJPYmplY3RbaXRlbVtpXV0pOyBcdC8v0LLRi9Cx0LjRgNCw0LXQvCDRgtC10LrRg9GJ0LjQuSDQvtCx0YzQtdC60YIg0LIg0LzQsNGB0YHQuNCy0LVcclxuXHRcdFx0c2xpZGVyVGVjaG5vbG9naWVzLnRleHQoc2xpZGVyT2JqZWN0W2l0ZW1UZWNobm9sb2dpZXNbaV1dKTsgLy/QstGL0LHQuNGA0LDQtdC8INGC0LXQutGD0YnQuNC5INC+0LHRjNC10LrRgiDQsiDQvNCw0YHRgdC40LLQtVxyXG5cdFx0XHRzbGlkZXJUaXRsZS5hZGRDbGFzcygnYm91bmNlSW5Eb3duJyk7IFx0Ly/QlNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgdC+0Lwg0LDQvdC40LzQsNGG0LjRjiDQvdCwINGC0LXQutGB0YJcclxuXHRcdFx0c2xpZGVySW1nLmFkZENsYXNzKCdib3VuY2VJblVwJyk7IFx0Ly/QlNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgdC+0Lwg0LDQvdC40LzQsNGG0LjRjiDQvdCwINC60LDRgNGC0LjQvdC60YNcclxuXHRcdH0pO1xyXG5cdFx0XHJcblxyXG5cdFx0Ly8gJCgnLnNsaWRlcl9fbGlzdF9fYnRuX29uZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHRcclxuXHRcdC8vIFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0Ly8gXHRcdHNsaWRlclRpdGxlLnJlbW92ZUNsYXNzKCdib3VuY2VJbkRvd24nKTsgXHQvL9Cj0LTQsNC70Y/QtdC8INC60LvQsNGB0YEg0YEg0LDQvdC40LzQsNGG0LjQtdC5INC90LAg0YLQtdC60YHRglxyXG5cdFx0Ly8gXHRcdHNsaWRlckltZy5yZW1vdmVDbGFzcygnYm91bmNlSW5VcCcpOyBcdC8v0KPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgSDRgSDQsNC90LjQvNCw0YbQuNC10Lkg0L3QsCDQutCw0YDRgtC40L3QutGDXHJcblx0XHQvLyBcdH0sIDEwMDApO1xyXG5cdCAvLyBcdFx0IFx0aSA9IDA7XHJcblx0IC8vIFx0XHQkKHNsaWRlck9iamVjdFtpdGVtTGlua1tpXV0pLmNzcyh7J2JhY2tncm91bmQnOiAnIzQ4Y2RiOScsJ2NvbG9yJzogJyM0OGNkYjknfSk7IC8v0JrQsNC20LTQvtC5INGB0YHRi9C70LrQtSDRjdC70LXQvNC10L3RgtCwINGB0L/QuNGB0LrQsCDQv9GA0LjRgdCy0LDQuNCy0LDQtdC8INC60LvQsNGB0YEg0YHQviDRgdC80LXQvdC+0Lkg0YTQvtC90LBcclxuXHRcdC8vIFx0c2xpZGVySW1nLmF0dHIoJ3NyYycsIHNsaWRlck9iamVjdFtpdGVtSW1nW2ldXSk7IFx0Ly/QmNC30LzQtdC90Y/QtdC8INC/0YPRgtGMINC6INC60LDRgNGC0LjQvdC60LVcclxuXHRcdC8vIFx0c2xpZGVyVGl0bGUudGV4dChzbGlkZXJPYmplY3RbaXRlbVtpXV0pOyBcdC8v0LLRi9Cx0LjRgNCw0LXQvCDRgtC10LrRg9GJ0LjQuSDQvtCx0YzQtdC60YIg0LIg0LzQsNGB0YHQuNCy0LVcclxuXHRcdC8vIFx0c2xpZGVyVGVjaG5vbG9naWVzLnRleHQoc2xpZGVyT2JqZWN0W2l0ZW1UZWNobm9sb2dpZXNbaV1dKTsgLy/QstGL0LHQuNGA0LDQtdC8INGC0LXQutGD0YnQuNC5INC+0LHRjNC10LrRgiDQsiDQvNCw0YHRgdC40LLQtVxyXG5cdFx0Ly8gXHRzbGlkZXJUaXRsZS5hZGRDbGFzcygnYm91bmNlSW5Eb3duJyk7IFx0Ly/QlNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgdC+0Lwg0LDQvdC40LzQsNGG0LjRjiDQvdCwINGC0LXQutGB0YJcclxuXHRcdC8vIFx0c2xpZGVySW1nLmFkZENsYXNzKCdib3VuY2VJblVwJyk7IFx0Ly/QlNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgdC+0Lwg0LDQvdC40LzQsNGG0LjRjiDQvdCwINC60LDRgNGC0LjQvdC60YNcclxuXHRcdC8vIH0pO1xyXG5cclxuXHRcdC8vICQoJy5zbGlkZXJfX2xpc3RfX2J0bl90d28nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1x0XHJcblx0XHQvLyBcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdC8vIFx0XHRzbGlkZXJUaXRsZS5yZW1vdmVDbGFzcygnYm91bmNlSW5Eb3duJyk7IFx0Ly/Qo9C00LDQu9GP0LXQvCDQutC70LDRgdGBINGBINCw0L3QuNC80LDRhtC40LXQuSDQvdCwINGC0LXQutGB0YJcclxuXHRcdC8vIFx0XHRzbGlkZXJJbWcucmVtb3ZlQ2xhc3MoJ2JvdW5jZUluVXAnKTsgXHQvL9Cj0LTQsNC70Y/QtdC8INC60LvQsNGB0YEg0YEg0LDQvdC40LzQsNGG0LjQtdC5INC90LAg0LrQsNGA0YLQuNC90LrRg1xyXG5cdFx0Ly8gXHR9LCAxMDAwKTtcclxuXHQgLy8gXHRcdCBcdGkgPSAxO1xyXG5cdCAvLyBcdFx0JChzbGlkZXJPYmplY3RbaXRlbUxpbmtbaV1dKS5jc3MoeydiYWNrZ3JvdW5kJzogJyM0OGNkYjknLCdjb2xvcic6ICcjNDhjZGI5J30pOyAvL9Ca0LDQttC00L7QuSDRgdGB0YvQu9C60LUg0Y3Qu9C10LzQtdC90YLQsCDRgdC/0LjRgdC60LAg0L/RgNC40YHQstCw0LjQstCw0LXQvCDQutC70LDRgdGBINGB0L4g0YHQvNC10L3QvtC5INGE0L7QvdCwXHJcblx0XHQvLyBcdHNsaWRlckltZy5hdHRyKCdzcmMnLCBzbGlkZXJPYmplY3RbaXRlbUltZ1tpXV0pOyBcdC8v0JjQt9C80LXQvdGP0LXQvCDQv9GD0YLRjCDQuiDQutCw0YDRgtC40L3QutC1XHJcblx0XHQvLyBcdHNsaWRlclRpdGxlLnRleHQoc2xpZGVyT2JqZWN0W2l0ZW1baV1dKTsgXHQvL9Cy0YvQsdC40YDQsNC10Lwg0YLQtdC60YPRidC40Lkg0L7QsdGM0LXQutGCINCyINC80LDRgdGB0LjQstC1XHJcblx0XHQvLyBcdHNsaWRlclRlY2hub2xvZ2llcy50ZXh0KHNsaWRlck9iamVjdFtpdGVtVGVjaG5vbG9naWVzW2ldXSk7IC8v0LLRi9Cx0LjRgNCw0LXQvCDRgtC10LrRg9GJ0LjQuSDQvtCx0YzQtdC60YIg0LIg0LzQsNGB0YHQuNCy0LVcclxuXHRcdC8vIFx0c2xpZGVyVGl0bGUuYWRkQ2xhc3MoJ2JvdW5jZUluRG93bicpOyBcdC8v0JTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YHQvtC8INCw0L3QuNC80LDRhtC40Y4g0L3QsCDRgtC10LrRgdGCXHJcblx0XHQvLyBcdHNsaWRlckltZy5hZGRDbGFzcygnYm91bmNlSW5VcCcpOyBcdC8v0JTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YHQvtC8INCw0L3QuNC80LDRhtC40Y4g0L3QsCDQutCw0YDRgtC40L3QutGDXHJcblx0XHQvLyB9KTtcclxuXHJcblx0XHQvLyAkKCcuc2xpZGVyX19saXN0X19idG5fdGhyZWUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1x0XHJcblx0XHQvLyBcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdC8vIFx0XHRzbGlkZXJUaXRsZS5yZW1vdmVDbGFzcygnYm91bmNlSW5Eb3duJyk7IFx0Ly/Qo9C00LDQu9GP0LXQvCDQutC70LDRgdGBINGBINCw0L3QuNC80LDRhtC40LXQuSDQvdCwINGC0LXQutGB0YJcclxuXHRcdC8vIFx0XHRzbGlkZXJJbWcucmVtb3ZlQ2xhc3MoJ2JvdW5jZUluVXAnKTsgXHQvL9Cj0LTQsNC70Y/QtdC8INC60LvQsNGB0YEg0YEg0LDQvdC40LzQsNGG0LjQtdC5INC90LAg0LrQsNGA0YLQuNC90LrRg1xyXG5cdFx0Ly8gXHR9LCAxMDAwKTtcclxuXHQgLy8gXHRcdCBcdGkgPSAyO1xyXG5cdCAvLyBcdFx0JChzbGlkZXJPYmplY3RbaXRlbUxpbmtbaV1dKS5jc3MoeydiYWNrZ3JvdW5kJzogJyM0OGNkYjknLCdjb2xvcic6ICcjNDhjZGI5J30pOyAvL9Ca0LDQttC00L7QuSDRgdGB0YvQu9C60LUg0Y3Qu9C10LzQtdC90YLQsCDRgdC/0LjRgdC60LAg0L/RgNC40YHQstCw0LjQstCw0LXQvCDQutC70LDRgdGBINGB0L4g0YHQvNC10L3QvtC5INGE0L7QvdCwXHJcblx0XHQvLyBcdHNsaWRlckltZy5hdHRyKCdzcmMnLCBzbGlkZXJPYmplY3RbaXRlbUltZ1tpXV0pOyBcdC8v0JjQt9C80LXQvdGP0LXQvCDQv9GD0YLRjCDQuiDQutCw0YDRgtC40L3QutC1XHJcblx0XHQvLyBcdHNsaWRlclRpdGxlLnRleHQoc2xpZGVyT2JqZWN0W2l0ZW1baV1dKTsgXHQvL9Cy0YvQsdC40YDQsNC10Lwg0YLQtdC60YPRidC40Lkg0L7QsdGM0LXQutGCINCyINC80LDRgdGB0LjQstC1XHJcblx0XHQvLyBcdHNsaWRlclRlY2hub2xvZ2llcy50ZXh0KHNsaWRlck9iamVjdFtpdGVtVGVjaG5vbG9naWVzW2ldXSk7IC8v0LLRi9Cx0LjRgNCw0LXQvCDRgtC10LrRg9GJ0LjQuSDQvtCx0YzQtdC60YIg0LIg0LzQsNGB0YHQuNCy0LVcclxuXHRcdC8vIFx0c2xpZGVyVGl0bGUuYWRkQ2xhc3MoJ2JvdW5jZUluRG93bicpOyBcdC8v0JTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YHQvtC8INCw0L3QuNC80LDRhtC40Y4g0L3QsCDRgtC10LrRgdGCXHJcblx0XHQvLyBcdHNsaWRlckltZy5hZGRDbGFzcygnYm91bmNlSW5VcCcpOyBcdC8v0JTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YHQvtC8INCw0L3QuNC80LDRhtC40Y4g0L3QsCDQutCw0YDRgtC40L3QutGDXHJcblx0XHQvLyB9KTtcclxuXHJcblx0XHQvLyAkKCcuc2xpZGVyX19saXN0X19idG5fZm91cicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHRcclxuXHRcdC8vIFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0Ly8gXHRcdHNsaWRlclRpdGxlLnJlbW92ZUNsYXNzKCdib3VuY2VJbkRvd24nKTsgXHQvL9Cj0LTQsNC70Y/QtdC8INC60LvQsNGB0YEg0YEg0LDQvdC40LzQsNGG0LjQtdC5INC90LAg0YLQtdC60YHRglxyXG5cdFx0Ly8gXHRcdHNsaWRlckltZy5yZW1vdmVDbGFzcygnYm91bmNlSW5VcCcpOyBcdC8v0KPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgSDRgSDQsNC90LjQvNCw0YbQuNC10Lkg0L3QsCDQutCw0YDRgtC40L3QutGDXHJcblx0XHQvLyBcdH0sIDEwMDApO1xyXG5cdCAvLyBcdFx0IFx0aSA9IDM7IFxyXG5cdCAvLyBcdFx0JChzbGlkZXJPYmplY3RbaXRlbUxpbmtbaV1dKS5jc3MoeydiYWNrZ3JvdW5kJzogJyM0OGNkYjknLCdjb2xvcic6ICcjNDhjZGI5J30pOyAvL9Ca0LDQttC00L7QuSDRgdGB0YvQu9C60LUg0Y3Qu9C10LzQtdC90YLQsCDRgdC/0LjRgdC60LAg0L/RgNC40YHQstCw0LjQstCw0LXQvCDQutC70LDRgdGBINGB0L4g0YHQvNC10L3QvtC5INGE0L7QvdCwXHJcblx0XHQvLyBcdHNsaWRlckltZy5hdHRyKCdzcmMnLCBzbGlkZXJPYmplY3RbaXRlbUltZ1tpXV0pOyBcdC8v0JjQt9C80LXQvdGP0LXQvCDQv9GD0YLRjCDQuiDQutCw0YDRgtC40L3QutC1XHJcblx0XHQvLyBcdHNsaWRlclRpdGxlLnRleHQoc2xpZGVyT2JqZWN0W2l0ZW1baV1dKTsgXHQvL9Cy0YvQsdC40YDQsNC10Lwg0YLQtdC60YPRidC40Lkg0L7QsdGM0LXQutGCINCyINC80LDRgdGB0LjQstC1XHJcblx0XHQvLyBcdHNsaWRlclRlY2hub2xvZ2llcy50ZXh0KHNsaWRlck9iamVjdFtpdGVtVGVjaG5vbG9naWVzW2ldXSk7IC8v0LLRi9Cx0LjRgNCw0LXQvCDRgtC10LrRg9GJ0LjQuSDQvtCx0YzQtdC60YIg0LIg0LzQsNGB0YHQuNCy0LVcclxuXHRcdC8vIFx0c2xpZGVyVGl0bGUuYWRkQ2xhc3MoJ2JvdW5jZUluRG93bicpOyBcdC8v0JTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YHQvtC8INCw0L3QuNC80LDRhtC40Y4g0L3QsCDRgtC10LrRgdGCXHJcblx0XHQvLyBcdHNsaWRlckltZy5hZGRDbGFzcygnYm91bmNlSW5VcCcpOyBcdC8v0JTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YHQvtC8INCw0L3QuNC80LDRhtC40Y4g0L3QsCDQutCw0YDRgtC40L3QutGDXHJcblx0XHQvLyB9KTtcclxuXHJcblx0fSk7XHJcbn0oKSk7IiwidmFyIFNpZGViYXJNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xyXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0XHRcdC8vINCf0L7QutCw0LfRi9Cy0LDQtdGCINC4INGB0LrRgNGL0LLQsNC10YIg0YHQsNC50LTQsdCw0YAg0LIg0LHQu9C+0LPQtSxcclxuXHRcdFx0Ly8g0L/RgNC4INC80L7RidC4INC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0LPQviDQutC70LDRgdCwINC60L7RgtC+0YDRi9C5INC80Ysg0LTQvtCx0LDQstC70Y/QtdC8INC4INGD0LHQuNGA0LDQtdC8XHJcblx0XHQkKCcubGlzdC1hcnRpY2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdCQoJy5saXN0LWFydGljbGUnKS50b2dnbGVDbGFzcygnb3Blbi1zaWRlYmFyJyk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0XHQvL9Ck0LjQutGB0LDRhtC40Y8g0L/RgNC4INGB0LrRgNC+0LvQtSDQvdCwINCy0YvQsdGA0LDQvdC90L7QvCDRjdC70LXQvNC10L3RgtC1XHJcblxyXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7ICBcdFx0XHQgICAgLy/QkdC10YDQtdC8INCy0YvRgdC+0YLRgyDQvdCw0YjQtdCz0L4gaGVhZGVyXHJcblx0XHRpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IGhlYWRlckJsb2cuaGVpZ2h0KCkpeyAgICBcclxuXHRcdCQoJy5saXN0LWFydGljbGUnKS5hZGRDbGFzcyhcImxpc3QtYXJ0aWNsZV9fc3RpY2t5XCIpOyAgICAvLyDQtdGB0LvQuCDQvNGLINC/0YDQvtGB0LrRgNC+0LvQuNC70Lgg0LHQvtC70YzRiNC1INGH0LXQvCDQstGL0YHQvtGC0LAgaGVhZGVyXHJcblx0XHQkKCcucGFnZS1hcnRpY2xlcycpLmFkZENsYXNzKFwicGFnZS1hcnRpY2xlc19zY3JvbGxcIik7XHQvLyDRgtC+INGC0L7Qs9C00LAg0LzQtdC90Y/QtdC8INGB0YLQuNC70LhcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHQkKCcubGlzdC1hcnRpY2xlJykucmVtb3ZlQ2xhc3MoXCJsaXN0LWFydGljbGVfX3N0aWNreVwiKTtcclxuXHRcdCQoJy5wYWdlLWFydGljbGVzJykucmVtb3ZlQ2xhc3MoXCJwYWdlLWFydGljbGVzX3Njcm9sbFwiKTtcclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdFx0dmFyIGhlYWRlckJsb2cgPSAkKCcucGFnZS1oZWFkZXItYmxvZycpO1xyXG5cdFx0dmFyIGdpdCA9ICQoJy5hcnRpY2xlX2dpdCcpO1xyXG5cdFx0dmFyIGNvbmVtdSA9ICQoJy5hcnRpY2xlX2NvbmVtdScpO1xyXG5cclxuXHRcdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IGhlYWRlckJsb2cuaGVpZ2h0KCkpe1xyXG5cdFx0XHRcdCQoJy5saXN0LWFydGljbGVfX25hbWVfZ2l0JykuYWRkQ2xhc3MoXCJsaXN0LWFydGljbGVfX25hbWVfX2xpbmtfc2Nyb2xsXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0JCgnLmxpc3QtYXJ0aWNsZV9fbmFtZV9naXQnKS5yZW1vdmVDbGFzcyhcImxpc3QtYXJ0aWNsZV9fbmFtZV9fbGlua19zY3JvbGxcIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0aWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiBoZWFkZXJCbG9nLmhlaWdodCgpK2dpdC5oZWlnaHQoKSl7XHJcblx0XHRcdFx0JCgnLmxpc3QtYXJ0aWNsZV9fbmFtZV9jb25lbXUnKS5hZGRDbGFzcyhcImxpc3QtYXJ0aWNsZV9fbmFtZV9fbGlua19zY3JvbGxcIik7XHJcblx0XHRcdCBcdCQoJy5saXN0LWFydGljbGVfX25hbWVfZ2l0JykucmVtb3ZlQ2xhc3MoXCJsaXN0LWFydGljbGVfX25hbWVfX2xpbmtfc2Nyb2xsXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0JCgnLmxpc3QtYXJ0aWNsZV9fbmFtZV9jb25lbXUnKS5yZW1vdmVDbGFzcyhcImxpc3QtYXJ0aWNsZV9fbmFtZV9fbGlua19zY3JvbGxcIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0aWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiBoZWFkZXJCbG9nLmhlaWdodCgpK2dpdC5oZWlnaHQoKStjb25lbXUuaGVpZ2h0KCkpe1xyXG5cdFx0XHRcdCQoJy5saXN0LWFydGljbGVfX25hbWVfZ3VscCcpLmFkZENsYXNzKFwibGlzdC1hcnRpY2xlX19uYW1lX19saW5rX3Njcm9sbFwiKTtcclxuXHRcdFx0XHQkKCcubGlzdC1hcnRpY2xlX19uYW1lX2NvbmVtdScpLnJlbW92ZUNsYXNzKFwibGlzdC1hcnRpY2xlX19uYW1lX19saW5rX3Njcm9sbFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdCQoJy5saXN0LWFydGljbGVfX25hbWVfZ3VscCcpLnJlbW92ZUNsYXNzKFwibGlzdC1hcnRpY2xlX19uYW1lX19saW5rX3Njcm9sbFwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KCkpO1xyXG5cclxuXHR2YXIgRmxpcHBlck1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XHJcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cdFx0XHQkKCcuYXV0aG9yaXplJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0JCgnLmZsaXBwZXInKS50b2dnbGVDbGFzcyhcInJvdGF0ZS1hdXRob3JpemVcIik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JCgnLmF1dGhvcml6ZS1idG5fX2l0ZW1faG9tZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdCQoJy5mbGlwcGVyJykudG9nZ2xlQ2xhc3MoXCJyb3RhdGUtYXV0aG9yaXplXCIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1x0XHJcblx0fSgpKTsiLCIvLyAvLyBWQUxJREFUSU9OXHJcbi8vIHZhciBWYWxpZGF0aW9uTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuLy8gXHQkKGZ1bmN0aW9uKCkge1xyXG5cclxuLy8gXHQgICAgJChcIiNmb3JtLXZhbGlkYXRpb25cIikudmFsaWRhdGUoe1xyXG5cclxuLy8gXHQgICAgICAgIHJ1bGVzOiB7XHJcbi8vIFx0IFx0XHRcdGZvcm1fbmFtZToge1xyXG4vLyBcdCAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4vLyBcdCAgICAgICAgICAgIH0sXHJcbi8vIFx0ICAgICAgICAgICAgZm9ybV9lbWFpbDoge1xyXG4vLyBcdCAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuLy8gXHQgICAgICAgICAgICAgICAgZW1haWw6IHRydWVcclxuLy8gXHQgICAgICAgICAgICB9XHJcbi8vIFx0ICAgICAgICB9LFxyXG4vLyBcdCAgICAgICAgbWVzc2FnZXM6IHtcclxuLy8gXHQgICAgICAgICAgICBmb3JtX25hbWU6IHtcclxuLy8gXHQgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwi0J/QvtC70LUg0JjQvNGPINC+0LHRj9C30LDRgtC10LvRjNC90L7QtSDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y9cIlxyXG4vLyBcdCAgICAgICAgICAgIH0sXHJcbi8vIFx0ICAgICAgICAgICAgZm9ybV9lbWFpbDoge1xyXG4vLyBcdCAgICAgICAgICAgICAgICByZXF1aXJlZDogXCLQn9C+0LvQtSBFLW1haWwg0L7QsdGP0LfQsNGC0LXQu9GM0L3QvtC1INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRj1wiLFxyXG4vLyBcdCAgICAgICAgICAgICAgICBlbWFpbDogXCLQktCy0LXQtNC40YLQtSDQv9C+0LbQsNC70YPQudGB0YLQsCDQutC+0YDRgNC10LrRgtC90YvQuSBlLW1haWxcIlxyXG4vLyBcdCAgICAgICAgICAgIH1cclxuLy8gXHQgICAgICAgIH0sXHJcbi8vIFx0ICAgICAgICBmb2N1c0NsZWFudXA6IHRydWUsICAvL9Cf0YDQuCDRhNC+0LrRg9GB0LUg0L7Rh9C40YnQsNC10YIg0YbQstC10YIg0L7RiNC40LHQutC4XHJcbi8vIFx0ICAgICAgICBmb2N1c0ludmFsaWQ6IGZhbHNlLFxyXG4vLyBcdCAgICAgICAgc3VibWl0SGFuZGxlcjogZnVuY3Rpb24oKSB7XHJcbi8vIFx0ICAgICAgICBcdCQoXCJmb3JtXCIpLnN1Ym1pdChmdW5jdGlvbigpIHsgLy9DaGFuZ2VcclxuLy8gXHRcdFx0XHRcdHZhciB0aCA9ICQodGhpcyk7XHJcbi8vIFx0XHRcdFx0XHQkLmFqYXgoe1xyXG4vLyBcdFx0XHRcdFx0XHR0eXBlOiBcIlBPU1RcIixcclxuLy8gXHRcdFx0XHRcdFx0dXJsOiBcIi9hc3NldHMvcGhwL21haWwucGhwXCIsIC8vQ2hhbmdlXHJcbi8vIFx0XHRcdFx0XHRcdGRhdGE6IHRoLnNlcmlhbGl6ZSgpXHJcbi8vIFx0XHRcdFx0XHR9KS5kb25lKGZ1bmN0aW9uKCkge1xyXG4vLyBcdFx0XHRcdFx0XHRhbGVydChcIlRoYW5rIHlvdSFcIik7XHJcbi8vIFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbi8vIFx0XHRcdFx0XHRcdFx0Ly8gRG9uZSBGdW5jdGlvbnNcclxuLy8gXHRcdFx0XHRcdFx0XHR0aC50cmlnZ2VyKFwicmVzZXRcIik7XHJcbi8vIFx0XHRcdFx0XHRcdH0sIDEwMDApO1xyXG4vLyBcdFx0XHRcdFx0fSk7XHJcbi8vIFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcbi8vIFx0XHRcdFx0fSk7XHJcbi8vIFx0ICAgICAgICB9XHJcbi8vIFx0ICAgIH0pO1xyXG5cclxuLy8gXHR9KTtcclxuLy8gfSgpKTsiLCIvLyAvLyBNYWlsIGZvcm1hXHJcbi8vIHZhciBNYWlsTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0Ly9FLW1haWwgQWpheCBTZW5kXHJcblx0XHQkKFwiZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oKSB7IC8vQ2hhbmdlXHJcblx0XHRcdHZhciB0aCA9ICQodGhpcyk7XHJcblx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0dHlwZTogXCJQT1NUXCIsXHJcblx0XHRcdFx0dXJsOiBcIi9hc3NldHMvcGhwL21haWwucGhwXCIsIC8vQ2hhbmdlXHJcblx0XHRcdFx0ZGF0YTogdGguc2VyaWFsaXplKClcclxuXHRcdFx0fSkuZG9uZShmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRhbGVydChcIlRoYW5rIHlvdSFcIik7XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdC8vIERvbmUgRnVuY3Rpb25zXHJcblx0XHRcdFx0XHR0aC50cmlnZ2VyKFwicmVzZXRcIik7XHJcblx0XHRcdFx0fSwgMTAwMCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcbi8vIH0oKSk7IiwiLy8gTUFQXHJcbmZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcblx0Ly8gQ3JlYXRlIGEgbWFwIG9iamVjdCBhbmQgc3BlY2lmeSB0aGUgRE9NIGVsZW1lbnQgZm9yIGRpc3BsYXkuXHJcbiAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuXHRcdGNlbnRlcjoge2xhdDogNTAuNTA5NzczOCwgbG5nOiAzMC41MDAwMzE4fSxcclxuXHRcdHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuXHRcdHpvb206IDE2XHJcbiAgICB9KTtcclxuXHR9IiwiXHJcbi8vIC8vINCf0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQuyDQv9C+INGP0LrQvtGA0Y/QvFxyXG52YXIgU2Nyb2xsQW5jaG9yTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdCQoJ2FbaHJlZl49XCIuYW5jaG9yLVwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgZWwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdCQoJ2JvZHknKS5hbmltYXRlKHtcclxuXHRcdHNjcm9sbFRvcDogJChlbCkub2Zmc2V0KCkudG9wfSwgMTUwMCk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufSgpKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
