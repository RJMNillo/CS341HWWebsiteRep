//Reggie Jan Marc Nillo
//Client side Handling
$(document).ready(function() 
{
    console.log("Loaded.");
    $("#submit").click(CheckSubmission);

    //Create button listeners for month
    $("#M1button").click(GetMonth);
    $("#M2button").click(GetMonth);
    $("#M3button").click(GetMonth);
    $("#M4button").click(GetMonth);
    $("#M5button").click(GetMonth);
    $("#M6button").click(GetMonth);
    $("#M7button").click(GetMonth);
    $("#M8button").click(GetMonth);
    $("#M9button").click(GetMonth);
    $("#M10button").click(GetMonth);
    $("#M11button").click(GetMonth);
    $("#M12button").click(GetMonth);
});

CheckSubmission = function()
{
    var source = $("#Notes").val().toLowerCase();
    var target = "vegan";

    //Alert the submitter if they are vegan (or just saying that)
    if (source.includes(target)) 
    {
        alert("Our cheesecakes contain dairy products.");
    }
    else 
    {
        //Get variables so that we can write them down as strings
        //https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value
        //I checked them by name
        //Also this helped me go through a list of the radio buttons
        var ToppingC = document.getElementsByName('Topping');
        var Topping = "Default";
        for(var e = 0; e < ToppingC.length;e++) 
        {
            if (ToppingC[e].checked) 
            {
                Topping = ToppingC[e].value;
                break;
            }
        }
        var QSelector = $("#Quantity").val();
        var Notes = $("#Notes").val();
        
        //We can now safely empty the form, as we have everything we need.
        $("#CHOF").empty();
        //Replace our top h3 text with a thank you
        $("#Main").text("Thank you for your order! \n")
        //Then add in the results as <p>
        var Results1 = $("<p></p>").text("You have ordered " + QSelector + " " + Topping + " cheese cake(s)");
        var ResultsNotes = $("<p></p>").text("Notes: " + Notes);
        $("#CHOF").append(Results1, ResultsNotes);
        
        
    }
}

GetMonth = function()
{
    var MonthName = $(this).html();
    setMonth(MonthName);
}

setMonth = function(MonName)
{
    $("#MonthMenu").html(MonName);
}
