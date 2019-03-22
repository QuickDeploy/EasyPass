$(function () {
	//auto generate after loaded
	generate();

	$("#form-generate-submit").click(function (e) {
		generate();
	});
	$('#form-copy').mouseout(function () {
		$('#header-tooltip').html('');
	});

	var clipboard= new ClipboardJS('#form-copy');
	clipboard.on('success', function(e) {
		$('#header-tooltip').html('Copied !');
		e.clearSelection();
	});
});

var generate = function () {
	var length = $('#form-generate-length').val();
	var readable = $('#form-option-readable').prop("checked");
	length = parseInt(length) || 0;
	if (length < 1) {
		return true;
	}
	var digitArray = "0123456789";
	var lowerArray = "abcdefghijklmnopqrstuvwxyz";
	var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var specialArray = "+=-@#~,.[]()!%^*$";
	var tmpArray = "";
	if ($("#form-option-digit").prop("checked")) {
		tmpArray += digitArray;
	}
	if ($("#form-option-lower").prop("checked")) {
		tmpArray += lowerArray;
	}
	if ($("#form-option-upper").prop("checked")) {
		tmpArray += upperArray;
	}
	if ($("#form-option-special").prop("checked")) {
		tmpArray += specialArray;
	}
	if (tmpArray.length === 0) {
		tmpArray = "0123456789";
	}
	if (readable) {
		tmpArray = tmpArray.replace(/[OIlj\s]/g, '');
	}
	var result = "";
	for (var i = 0; i < length; i++) {
		result += tmpArray[Math.floor(Math.random() * tmpArray.length)];
	}
	$('#form-generate-result').val(result);
};