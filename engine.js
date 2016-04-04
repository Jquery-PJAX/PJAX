.preventDefault();

function swapContent(href, url_data, target, loads,DontPushState) {
    var pjax_e = 0;
    return recurse()

    function recurse() {
        return $.ajax({
                type: 'GET',
                cache: false,
                url: href+'?'+url_data
            })
            .success: function (data) { // this param name was confusing, I have changed it to the "normal" name to make it clear that it contains the data returned from the request
                //load more data to "target" value div
                target.innerHTML = (data); // as above, data holds the result of the request, so all the data returned from your results.php file are in this param but please see below
            }
            .done(function(data) {
                var $data = $(data)
                var newContent=$data.filter(target)
                $('#'+target).replaceWith(newContent);
                document.title=$data.filter("title").text();
                loads.call(target, href, url_data, data);
                if (!DontPushState)history.pushState(url_data, "", '?'+url_data);
            }).fail(function() {
                pjax_e++;
                if(pjax_e < 10) {
                    $(target).text("error " + pjax_e);
                    setTimeout(recurse, 500);
                }
                else {
                    window.location = '?'+url_data;
                }
            });
    }
}
