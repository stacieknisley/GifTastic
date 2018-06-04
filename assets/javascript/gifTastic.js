// set document so everything is down loaded before game begins.
$(document ).ready(function() {

    // click button and search for api gify images from queryURl, 
    // variable is x and the jquery $ is searching for data from the variable queryURL
    $("button").on("click", function () {
        var x = $(this).data("search");
  
        // gif query asking for data from api gify using api.giphy website and my key with a limit of 10 gif images.
        var queryURl = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=8Jaon0lnqL45mbSJUDqgV8WgFfy2DQ8E&limit=10"
        console.log(queryURL);
  
        // <!--make ajax request  call to the ajax URL and use the GET method-->
        $.ajax({ url: queryURL, method: "GET" })
          .done(function (response) {
            console.log(response);
  
            for (var i = 0; i < response.data.length; i++) {
              $("#GIFArea").prepend("<p>Rating: " + response.data[i].rating + " </p>");
              $("#GIFArea").prepend("<img src='" + response.data[i].images.downsized.url + "'>");
                }  

    
       
                });

// --------------jquery code to allow users to add and submit more instruments -------
// add an ajax call to add another button to the button list by submitting information from the "form contronl" button
// in the place holder.

// When information or an instrument is entered into the  "form-control" button place holder the following function
// takes place, the variable "htmlString" or information is entered as text.
$("form-control").click(function(){
    var htmlString = $(this) .html();
    $( this ).text (htmlString);
});


// create an on click event when the "Submit" button is clicked.
// the "Submit" button has a class label of "btn-primary" from bootstrap css.

$("btn btn-primary").on("click",function(){

    // variables defined for the onclick event. Used "y" because "x" and "i" were used above
    // y is the data/instrument entered into the form-control button
    var y = $(this).data("form-control");
    // queryURL, asking for the giphy images from the api giphy web site
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=8Jaon0lnqL45mbSJUDqgV8WgFfy2DQ8E&limit=10";
    
    // <!--make ajax request call to the ajax URL and use the GET method for the additional instruments added by the user-->
    $.ajax({ url: queryURL, method: "GET" })
          .done(function (response) {
            // console.log(response);
  
            for (var y = 0; y < response.data.length; y++) {
              $("#GIFArea").prepend("<p>Rating: " + response.data[y].rating + " </p>");
              $("#GIFArea").prepend("<img src='" + response.data[y].images.downsized.url + "'>");
                
            }  

});


 // -------------jquery code to start and stop action of gify images

                    $(".gif").on("click", function() {
                        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                        var state = $(this).attr("data-state");
                        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                        // Then, set the image's data-state to animate
                        // Else set src to the data-still value
                        if (state === "still") {
                          $(this).attr("src", $(this).attr("data-animate"));
                          $(this).attr("data-state", "animate");
                        } else {
                          $(this).attr("src", $(this).attr("data-still"));
                          $(this).attr("data-state", "still");
                        }



// --------having problems determining how to close out the  line below error in console.log ???
    }
