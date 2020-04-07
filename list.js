
//remove a list item
//grab the list, and apply function on click. add "on" to apply to new list items 
$("ul").on("click", "li", function(){ 
    $(this).css("text-decoration", "line-through"); //add style to item
        setTimeout(() => {
        $(this).remove(); //clears it
        }, 1000)
});

//add function to add button
$('#todoBtn').click(function(){
//take input and make it into a list item
    $('#list').append('<li>' + $('#newItem').val() + '</li>');
    $('#newItem').val("");    
  })








