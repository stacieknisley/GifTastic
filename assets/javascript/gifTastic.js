// set document so everything is down loaded before game begins.
$(document).ready(function() {

  // the original buttons to start with
  var gifTopics = ["Drum","Violin","Guitar","Saxaphone","Piano","Banjo"];
  
  // button ID and then empty the button.
  $("#btnDiv").empty();


  // This is the for loop to go through the original buttons ("data-name") and call them
  // gifTopics in the loop. Then append by adding a button to the view in the button DIV using 
  // the ID #btnDiv.
  for (var i = 0; i < gifTopics.length; i++) {
    //variable to store
    var a = $("<button>");
    // Adding a data-attribute
    a.attr("data-name", gifTopics[i]);
    // Providing the initial button text
    a.text(gifTopics[i]);
    // Adding the button to the buttons-view div
    $("#btnDiv").append(a);
}

// This is adding a click event to the submitButton
$("#submitButton").click(function(event){
  event.preventDefault();

  // this is pushing data for the gifTopics, in this case the topic is Giphys demonstrating instruments.
  var instrument = $("#inst").val();
  $("#inst").val("");
  gifTopics.push (instrument);


  // this is emptying out the button DIV to prevent multiple buttons of the same gifTopic or
  // instrument.
  $("#btnDiv").empty();

  // this is a for loop to run through the buttons.
  for (var i = 0; i < gifTopics.length; i++) {
    //variable to store
    var a = $("<button>");
    // Adding a data-attribute
    a.attr("data-name", gifTopics[i]);
    // Providing the initial button text
    a.text(gifTopics[i]);
    // Adding the button to the buttons-view div
    $("#btnDiv").append(a);
  }
});


// this is an on Click event for the button to clear the GIFArea and
// then queryURL or call to the Giphy API and gather data 10 images max.
// then pull the data from the queryURL using the GET method and response
// and post the images on the web page in the browser.
$(document).on("click", "button", function () {

  $("#GIFArea").empty();

  var instData = $(this).attr("data-name");
  console.log (instData);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + instData + "&api_key=fq0AX58MelCuXjluMawLbu45ZSBrTruc&limit=10";
     console.log (queryURL)
  $.ajax({ query: queryURL,method:"GET"})
   .then(function (response) {
    console.log(response);
    // $("#GIFArea").html();

    
   });


});






    // click button and search for api gify images from queryURl, 
    // variable is x and the jquery $ is searching for data from the variable queryURL
    // $("button").on("click", function () {
    //     var x = $(this).data("search");
  
    //     // gif query asking for data from api gify using api.giphy website and my key with a limit of 10 gif images.
    //     // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=fq0AX58MelCuXjluMawLbu45ZSBrTruc&limit=10"
    //     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //      animal_data + "&api_key=dc6zaTOxFJmzC&limit=10";
    //     console.log(queryURL);
  
    //     // <!--make ajax request  call to the ajax URL and use the GET method-->
    //     $.ajax({ query: queryURL,method:"GET"})
    //       .then(function (response) {
    //         console.log(response);
  
    //         for (var i = 0; i < response.data.length; i++) {
    //           $("#GIFArea").prepend("<p>Rating: " + response.data[i].rating + " </p>");
    //           $("#GIFArea").prepend("<img src='" + response.data[i].images.downsized.url + "'>");
    //             }  

    
    //           });
    //             });

// --------------jquery code to allow users to add and submit more instruments -------
// add an ajax call to add another button to the button list by submitting information from the "form contronl" button
// in the place holder.

// When information or an instrument is entered into the  "form-control" button place holder the following function
// takes place, the variable "htmlString" or information is entered as text.
// $("#submitButton").click(function(){
//     var htmlString = $(".form-control").val().trim();
//     console.log(htmlString);
    
//     // then a button is created from the text that was entered
//     var button = $("<button>").text(htmlString).attr("data-search",htmlString);
//     $(".container").append(button);
    
// });



// create an on click event when the "Submit" button is clicked.
// the "Submit" button has a class label of "btn-primary" from bootstrap css.

// $("btn btn-primary").on("click",function(){

//     // variables defined for the onclick event. Used "y" because "x" and "i" were used above
//     // y is the data/instrument entered into the form-control button
//     var y = $(this).data(".form-control");


//     // queryURL, asking for the giphy images from the api giphy web site
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=8Jaon0lnqL45mbSJUDqgV8WgFfy2DQ8E&limit=10";
    
//     // <!--make ajax request call to the ajax URL and use the GET method for the additional instruments added by the user-->
//     $.ajax({ url: queryURL, method: "GET" })
//           .done(function (response) {
//             // console.log(response);
//             // this will add a rating and downsize the giphys selected from the api ajax call
//             for (var y = 0; y < response.data.length; y++) {
//               $("#GIFArea").prepend("<p>Rating: " + response.data[y].rating + " </p>");
//               $("#GIFArea").prepend("<img src='" + response.data[y].images.downsized.url + "'>");
                
//             }  

// });


//  // -------------jquery code to start and stop action of gify images

                  //  $(".gif").on("click", function() {
                        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//                         var state = $(this).attr("data-state");
//                         // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//                         // Then, set the image's data-state to animate
//                         // Else set src to the data-still value
//                         if (state === "still") {
//                           $(this).attr("src", $(this).attr("data-animate"));
//                           $(this).attr("data-state", "animate");
//                         } else {
//                           $(this).attr("src", $(this).attr("data-still"));
//                           $(this).attr("data-state", "still");
//                         }



// // --------having problems determining how to close out the  line below error in console.log ???
// });
});
