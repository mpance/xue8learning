$(document).ready(function() {

	// properly size the video iframe
	$(".modal-iframe").css('width', $(window).width()*0.8 + 'px')
	$(".modal-iframe").css('height', $(window).height()*0.8 + 'px')

	var player = new Vimeo.Player($(".modal-iframe"))

	$(".intro-play").click(function() {
		$(".modal-background").fadeIn(300)
		$(".modal").fadeIn(300)
		player.play()
	})

	$(".modal-close").click(function() {
		player.pause()
		$(".modal").slideUp(300)
		$(".modal-background").fadeOut(300)
	})

	$(".navbar-logo").click(function() {
		window.scrollTo(0, 0)
	})

	$(".navbar-icon").click(function() {
		if ($(".navbar-links-mobile").is(":visible")) {
			$(".navbar-links-mobile").slideUp()
		} else {
			$(".navbar-links-mobile").slideDown()
		}
	})

	$(".navbar-links-mobile a").click(function() {
		$(".navbar-links-mobile").slideUp()
	})

	$("#coding-camp-learn-more").click(function() {
		$("#coding-camp-learn-more").hide()
		$(".coding-camp").slideDown()
	})

	$('.pricing-switch-option').click(function() {
		$('.pricing-switch-option').removeClass('pricing-switch-selected')
		$(this).addClass('pricing-switch-selected')

		if ($(this).hasClass('pricing-switch-private')) {
			$('.pricing-private').show()
			$('.pricing-group').hide()
		} else {
			$('.pricing-private').hide()
			$('.pricing-group').show()
		}
	})

	$('.question').click(function() {
		if($(this).hasClass('question-active')) {
			$(this).removeClass('question-active')
			$('#' + $(this).attr('id') + '.answer').slideUp()
		} else {
			$(this).addClass('question-active')
			$('#' + $(this).attr('id') + '.answer').slideDown()
		}
	})

	// Facebook pixel logging
	$("#schedule-trial-nav-desktop").click(function() {
		fbq('track', 'Lead', {
		  content_name: 'schedule_trial_from_nav_desktop',
		  content_category: 'schedule_trial'
		 })
	})

	$("#schedule-trial-nav-mobile").click(function() {
		fbq('track', 'Lead', {
		  content_name: 'schedule_trial_from_nav_mobile',
		  content_category: 'schedule_trial'
		 })
	})

	$("#schedule-trial-hero").click(function() {
		fbq('track', 'Lead', {
		  content_name: 'schedule_trial_from_hero',
		  content_category: 'schedule_trial'
		 })
	})

	$("#schedule-trial-hero-gift").click(function() {
		fbq('track', 'ViewContent', {
		  content_name: 'schedule_trial_from_hero_gift',
		  content_category: 'schedule_trial'
		 })
	})

	$("#schedule-trial-howitworks-gift").click(function() {
		fbq('track', 'ViewContent', {
		  content_name: 'schedule_trial_from_howitworks_gift',
		  content_category: 'schedule_trial'
		 })
	})

	$("#button-signup-3-month-2x-private").click(function() {
		fbq('track', 'InitiateCheckout', {
		  content_name: 'payment-3-month-2x-private',
		  content_category: 'payment'
		 })
	})

	$("#button-signup-3-month-1x-private").click(function() {
		fbq('track', 'InitiateCheckout', {
		  content_name: 'payment-3-month-1x-private',
		  content_category: 'payment'
		 })
	})

	$("#button-signup-6-month-2x-private").click(function() {
		fbq('track', 'InitiateCheckout', {
		  content_name: 'payment-6-month-2x-private',
		  content_category: 'payment'
		 })
	})

	$("#button-signup-6-month-1x-private").click(function() {
		fbq('track', 'InitiateCheckout', {
		  content_name: 'payment-6-month-1x-private',
		  content_category: 'payment'
		 })
	})

	$("#button-signup-3-month-1x-group").click(function() {
		fbq('track', 'InitiateCheckout', {
		  content_name: 'payment-3-month-1x-group',
		  content_category: 'payment'
		 })
	})

	$("#button-signup-6-month-1x-group").click(function() {
		fbq('track', 'InitiateCheckout', {
		  content_name: 'payment-6-month-1x-group',
		  content_category: 'payment'
		 })
	})

	$("#button-signup-camp").click(function() {
		fbq('track', 'InitiateCheckout', {
		  content_name: 'payment-camp',
		  content_category: 'payment'
		 })
	})

	$("#send-gift").click(function() {
		sendGift()
	})

	$("#gift-email").keypress(function(e) {
		if (e.which == 13) {
			sendGift()
    		return false
  		}
  	})

	function sendGift() {
		var name = $("#gift-name").val()
		var email = $("#gift-email").val()

		$.post("https://api.junilearning.com/api_gift/send_gift", { name: name, email: email })
		.done(function(data) {
			$("#gift-form-error").html('')
			$("#gift-form-success").fadeIn().delay(3000).fadeOut()
			$("#gift-email").val('')
		})
		.fail(function(err) {
			if (err.responseJSON) {
				$("#gift-form-error").html(err.responseJSON.errorMessage)
			} else {
				$("#gift-form-error").html("Sorry, we could not send your gift. Please contact hello@learnwithjuni.com.")
			}
		})
	}

})