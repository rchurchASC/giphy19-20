/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});
$("#search").click(function(){
    let userInput = $("#userInput").val();
    fetch("https://api.giphy.com/v1/gifs/search?q=" + userInput + "&rating=pg&api_key=dc6zaTOxFJmzC")
        .then(function(response){
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        });
        
});
