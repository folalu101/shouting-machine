$(document).ready(function() {
    $("#form-machine").submit(function(event) {
        const fullname1 = $("#fullname-1").val();
        const email1 = $("#email-1").val();
        const address1 = $("#address-1").val();
        const phone1 = $("#phone-1").val();
        const dob1 = $("#dob-1").val();

        $(".fullname-1").text(fullname1);
        $(".email-1").text(email1);
        $(".address-1").text(address1);
        $(".phone-1").text(phone1);
        $(".dob-1").text(dob1);

        $("#postcard").show();

        event.preventDefault();




    });

});

