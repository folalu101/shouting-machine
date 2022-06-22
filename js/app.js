$(document).ready(function() {
    $("#form-machine").submit(function(event) {
        const fullname1 = $("#fullname-1").val().toUppercase();
        const email1 = $("#email-1").val().toUppercase();
        const address1 = $("#address-1").val().toUppercase();
        const phone1 = $("#phone-1").val().toUppercase();
        const dob1 = $("#dob-1").val().toUppercase();

        $(".fullname-1").text(fullname1);
        $(".email-1").text(email1);
        $(".address-1").text(address1);
        $(".phone-1").text(phone1);
        $(".dob-1").text(dob1);

        $("#postcard").show();

        event.preventDefault();





    });

});

