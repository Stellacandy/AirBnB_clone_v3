// JavaScript script that is executed only when DOM is loaded
// Uses JQuery

let checked_box = {};
$(document).ready(function () {
    $('input:checkbox').change(function () {
	if ($(this).is(':checked_box')) {
	    checked_box[$(this).data('id')] = $(this).data('name');
	}
	else {
	    delete checked_box[$(this).data('id')];
	}
	$('div.amenities h4').html(function () {
	    let amenities = [];
	    Object.keys(checked_box).forEach(function (key) {
		amenities.push(checked_box[key]);
	    });
	    if (amenities.length === 0) {
		return ('&nbsp');
	    }
	    return (amenities.join(', '));
	});
    });


const apiStatus = $('DIV#api_status');
<<<<<<< HEAD
$.ajax('http://127.0.0.1:5002/api/v1/status/').done(function (data) {
=======
$.ajax('http://0.0.0.0:5003/api/v1/status/').done(function (data) {
>>>>>>> 48b86e25299680a94f712e8bffff400a64bfc737
    if (data.status === 'OK') {
      apiStatus.addClass('available');
    } else {
      apiStatus.removeClass('available');
    }
  });
  });
