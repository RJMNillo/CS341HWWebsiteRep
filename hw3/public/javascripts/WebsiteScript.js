//Reggie Jan Marc Nillo
//Client side Handling


function CheckSubmission()
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

function setMonth() 
{
    //I was trying to get this script to work, but it seems to get
    //The value out of a newly formed order form website...
    //Get the month from the button that was clicked
    //HW4: I tried to get this to work again, no luck
    var Month = $("#button").val();
    $("#MonthMenu").innerHTML = Month;
    //Handle the POST function, edited with orders.js
    //https://www.tutorialspoint.com/jquery/ajax-jquery-post.htm
    //https://codeforgeek.com/handle-get-post-request-express-4/
    //https://api.jquery.com/jQuery.post/
    //I tried linking to the html file, but that didn't work either
    $.post('/orders',Month, function(){});
}
