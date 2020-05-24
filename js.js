//check of click on li
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//click on span or X to delete To-Do
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
});

$("input[type='text'").keypress(function(event) {
    if (event.which == 13) {
        var Todo = $(this).val();
        //add new to do to the list
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + Todo + "</li>");
    }
})

$(".fa-plus").click(function() {
    $("input[type='text'").fadeToggle();
})