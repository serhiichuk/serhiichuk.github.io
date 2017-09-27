$(document).ready(function() {
	$(".jQuery_ID_1").css('width', '80%');
	$(".jQuery_ID_2").css('width', '45%');
	$(".jQuery_ID_3").css('width', '20%');
	$(".jQuery_ID_4").css('width', '10%');

	$('.portfolio-item').magnificPopup({
		type: 'image',
	  	mainClass: 'mfp-with-zoom', // this class is for CSS animation below

	  	zoom: {
	    	enabled: true, // By default it's false, so don't forget to enable it

	    	duration: 300, // duration of the effect, in milliseconds
	    	easing: 'ease-in-out', // CSS transition easing function

	    	// The "opener" function should return the element from which popup will be zoomed in
	    	// and to which popup will be scaled down
	    	// By defailt it looks for an image tag:
	    	opener: function(openerElement) {
	        // openerElement is the element on which popup was initialized, in this case its <a> tag
	        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
	        return openerElement.is('img') ? openerElement : openerElement.find('img');
	    }
	  }

	});

	(function( $ ){

		$(function() {

		  $('.rf').each(function(){
		    // Объявляем переменные (форма и кнопка отправки)
			var form = $(this),
		        btn = form.find('.btn_submit');

		    // Добавляем каждому проверяемому полю, указание что поле пустое
			form.find('.rfield').addClass('empty_field');

		    // Функция проверки полей формы
		    function checkInput(){
		      form.find('.rfield').each(function(){
		        if(($(this).val() != '') && ($(this).val() != 'Message...')){
		          // Если поле не пустое удаляем класс-указание
				$(this).removeClass('empty_field');
		        } else {
		          // Если поле пустое добавляем класс-указание
				$(this).addClass('empty_field');
		        }
		      });
		    }

		    // Функция подсветки незаполненных полей
		    function lightEmpty(){
		      form.find('.empty_field').css({'border-color':'#d8512d'});
		      // Через полсекунды удаляем подсветку
		      setTimeout(function(){
		        form.find('.empty_field').removeAttr('style');
		      },1000);
		    }

		    // Проверка в режиме реального времени
		    setInterval(function(){
		      // Запускаем функцию проверки полей на заполненность
			  checkInput();
		      // Считаем к-во незаполненных полей
		      var sizeEmpty = form.find('.empty_field').size();
		      // Вешаем условие-тригер на кнопку отправки формы
		      if(sizeEmpty > 0){
		        if(btn.hasClass('disabled')){
		          return false
		        } else {
		          btn.addClass('disabled')
		        }
		      } else {
		        btn.removeClass('disabled')
		      }
		    },500);

		    // Событие клика по кнопке отправить
		    btn.click(function(){
		      if($(this).hasClass('disabled')){
		        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
				lightEmpty();
		        return false
		      } else {
		        // Все хорошо, все заполнено, отправляем форму
		        form.submit(function () {
                    var th = $(this);
                    $.ajax({
                        type: "POST",
                        url: "js/mail.php", //Change
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
		      }
		    });
		  });
		});

	})( jQuery );
})
