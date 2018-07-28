//1. create the array

 var animals = ["squid", "birds", "fish", "dogs"];

//2. create the button for each array

// Function for displaying movie data
function displayAnimal() {
  var animal = $(this).attr('data-name');
  console.log(animal);
  var queryURL = "https://giphy.com/" + animal + "85IQpi3x8S3M6wtM2iRvheLXHi11f1GM";
  
  // Creates AJAX call for the specific movie being 
  $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
    console.log(response);
  })
}

displayAnimal();
   
    $("button").on("click", function() {
      // Grabbing and storing the data-animal property value from the button
      var animal = $(this).attr("data-person");

      // Constructing a queryURL using the animal name
     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After data comes back from the request
        .then(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var animalDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var animalImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            animalImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the animalDiv
            animalDiv.append(p);
            animalDiv.append(animalImage); 
            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(animalDiv);
          }
        });
    });

    $("#submit").on("click", function() {
      event.preventDefault()
      console.log("submit")
    })
    
    $("submit").on("click", function() {
      // Grabbing and storing the data-animal property value from the button capture text into input box
      document.getElementById("gifs-appear-here").value; 
      //leverage animal array to create buttons
      (function submitBtn() {
          for (var i = 0; i < animal.length; i++) {
             var node = document.createElement("button");
             var t = document.createTextNode(listBrand[i]);
             btn.appendChild(t);
             document.body.appendChild(node("gifs-appear-here"));
          //lop through the array to display buttons
          $("button").on("click", function() {
            // Append the text to <li>
            // Grabbing and storing the data-animal property value from the button
            var animal = $(this).attr("data-person");
/*      function renderButtons() 
      {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < 10; i++) {

          // Then dynamicaly generating buttons for each movie in the array

          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          $("<button></buttton>").on("click", function() {
            // Grabbing and storing the data-animal property value from the button
            var animals = $(this).attr("data-animal");
      
            // Constructing a queryURL using the animal name
            var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";

      
            // Performing an AJAX request with the queryURL
            $.ajax({
              url: queryURL,
              method: "GET"
            })
              // After data comes back from the request
              .then(function(response) {
                console.log(queryURL);
      
                console.log(response);
                // storing the data from the AJAX request in the results variable
                var results = response.data;
      
                // Looping through each result item
                for (var i = 0; i < results.length; i++) {
      
                  // Creating and storing a div tag
                  var animalDiv = $("<div>");
      
                  // Creating a paragraph tag with the result item's rating
                  var p = $("<p>").text("Rating: " + results[i].rating);
      
                  // Creating and storing an image tag
                  var animalImage = $("<img>");
                  // Setting the src attribute of the image to a property pulled off the result item
                  animalImage.attr("src", results[i].images.fixed_height.url);
      
                  // Appending the paragraph and image tag to the animalDiv
                  animalDiv.append(p);
                  animalDiv.append(animalImage);
      
                  // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                  $("#gifs-appear-here").prepend(animalDiv);
                }
              });
          });
      

          var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("animals-btn");
          // Adding a data-attribute
          a.attr("data-name", animals[i]);
          // Providing the initial button text
          a.text(animals[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      //renderButtons();
      function renderButtons() 
      {
        this.get().f.render.buttonPin(el);


//3. add a new button

// This function handles events where a movie button is clicked
      $("#add-animal").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var newAnimal = $("#animal-input").val().trim();

        // Adding movie from the textbox to our array
        animals.push(newAnimal);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
        $("#animal-input").val("");

      });



//4. when user click on buttons gifys appear
$("#add-btn").on("click",function(event){

()}

//5. when user clicks on gify either stop or run animation








// var animals = ["trees", "birds", "fish", "food"];
// var res = str.split(" ");
// var results;
// console.log("test");

// // function nature()
// // {
// //     var animals = ["trees", "birds", "fish", "food"];
// //     var res = str.split("<div id="gifs-appear-here">");
// //     document.getElementById("topics").innerHTML = res;
// // };

// let animals
// $("button").on("click", function() {
//     // In this case, the "this" keyword refers to the button that was clicked
//     var animals = $(this).attr("data-person");

//     // Performing our AJAX GET request
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       // After the data comes back from the API
//       .then(function(response) {
//         // Storing an array of results in the results variable
//         var results = response.data;

//         // Looping over every result item
//         for (var i = 0; i < results.length; i++) {

//             // Creating a div with the class "item"
//             var gifDiv = $("<div class='item'>");

//             // Creating an image tag
//             var personImage = $("<img>");

//             // Giving the image tag an src attribute of a proprty pulled off the
//             // result item
//             personImage.attr("src", results[i].images.fixed_height.url);

//             // Appending the paragraph and personImage we created to the "gifDiv" div we created
//             gifDiv.append(p);
//             gifDiv.append(personImage);

//             // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
//             $("#gifs-appear-here").prepend(gifDiv);
//           }
//         }
//       );
//   });
</script>
*/