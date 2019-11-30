// JavaScript Document
$(document).ready(function() {

    "use strict";
    
    $(".quick-form").submit(function(e) {
        e.preventDefault();
        var name = $(".q3_nombre");
        var email = $(".q4_correoElectronico4");
        var phone = $(".q5_telefono");
        var msg = $(".q6_mensaje");
        var flag = false;
        if (name.val() == "") {
            name.closest(".form-control").addClass("error");
            name.focus();
            flag = false;
            return false;
        } else {
            name.closest(".form-control").removeClass("error").addClass("success");
        } if (email.val() == "") {
            email.closest(".form-control").addClass("error");
            email.focus();
            flag = false;
            return false;
        } else {
            email.closest(".form-control").removeClass("error").addClass("success");
        } if (phone.val() == "") {
            phone.closest(".control-group").addClass("error");
            phone.focus();
            flag = false;
            return false;
        } else {
            phone.closest(".control-group").removeClass("error").addClass("success");
        } if (msg.val() == "") {
            msg.closest(".form-control").addClass("error");
            msg.focus();
            flag = false;
            return false;
        } else {
            msg.closest(".form-control").removeClass("error").addClass("success");
            flag = true;
        }
        var dataString = "name=" + name.val() + "&email=" + email.val() + "&phone=" + phone.val() + "&msg=" + msg.val();
        $(".loading").fadeIn("slow").html("Cargando...");
        $.ajax({
            type: "POST",
            data: dataString,
            url: "https://submit.jotformz.com/submit/93273719146665/",
            cache: false,
            success: function (d) {
                $(".form-control").removeClass("success");
					if(d == 'success') // Message Sent? Show the 'Thank You' message and hide the form
						$('.loading').fadeIn('slow').html('<font color="#ffda44">Mail sent Successfully.</font>').delay(3000).fadeOut('slow');
					else
						$('.loading').fadeIn('slow').html('<font color="#ff5607">Mail not sent.</font>').delay(3000).fadeOut('slow');

								  }
        });
        return false;
    });
    $("#reset").on('click', function() {
        $(".form-control").removeClass("success").removeClass("error");
    });
})



