$(function() {
    $('form input[type=submit]').click(sendForm);
})


function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/zakhar90@gmail.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        },
        dataType: "json"
    })
     .fail(function(e){
     $('#form-result').html(`<p>Sorry, there is an error: ${e}</p>`);
     });
}