$(function() {
    $('form input[type=submit]').click(sendForm);
})


function sendForm (e){
    e.preventDefalt();
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
    .done(function() {
        $('form')[0].reset();
        $('#form-result').html('<p>Thank you!</p>');
    })
    .fail(function(xhr, status, error){
        $('#form-result').html(`<p>Sorry, there is an error</p>`);
    });    
}