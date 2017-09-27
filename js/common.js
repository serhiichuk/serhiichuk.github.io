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

    //E-mail Ajax Send
    $("form").submit(function() { //Change

        var th = $(this);
        console.log(th.serialize());
        $.ajax({
            type: "GET",
            url: "./js/mail.php", //Change
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
})
