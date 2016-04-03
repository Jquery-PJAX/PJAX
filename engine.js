var pjax_e=0;
function swapContent(href, url_data, target, loads) {
    $.ajax({
        type: 'GET',
        cache: false,
        url: href+'?' + url_data,  //add a variable to the URL that will carry the value in your i counter through to the PHP page so it know's if this is new or additional data
        success: function (data) { // this param name was confusing, I have changed it to the "normal" name to make it clear that it contains the data returned from the request
            //load more data to "target" value div
            target.innerHTML = (data); // as above, data holds the result of the request, so all the data returned from your results.php file are in this param but please see below
        }
        .done(function( msg ) {
          //runs functions required for new view processing
          loads
        });
          .fail(function() {
            //error processing
            pjax_e++;
            if (pjas_e<10){
                target.innerHTML = "error"+pjax_e;
            } else{
                target.innerHTML = "we are currently experiencing a server error, please retry";
            }
          })
            .always(function() {
              //url goes in here
              window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", urlPath);
            });
    })
}
