var animals = ["trees", "birds", "fish", "food"];
var res = str.split(" ");
var results;

function nature(){
    var animals = ["trees", "birds", "fish", "food"];
    var res = str.split("<div id="gifs-appear-here">");
    document.getElementById("topics")
.innerHTML = res;
}

let animals
$("button").on("click", function() {
    // In this case, the "this" keyword refers to the button that was clicked
    var animals = $(this).attr("data-person");

    // Performing our AJAX GET request
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After the data comes back from the API
      .then(function(response) {
        // Storing an array of results in the results variable
        var results = response.data;

        // Looping over every result item
        for (var i = 0; i < results.length; i++) {

            // Creating a div with the class "item"
            var gifDiv = $("<div class='item'>");

            // Creating an image tag
            var personImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            personImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and personImage we created to the "gifDiv" div we created
            gifDiv.append(p);
            gifDiv.append(personImage);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#gifs-appear-here").prepend(gifDiv);
          }
        }
      );
  });
</script>
