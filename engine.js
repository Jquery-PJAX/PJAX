function swapContent(href, url_data, target, loads,DontPushState) {
    var pjax_e = 0;
    return recurse()

    function recurse() {
        return $.ajax({
                type: 'GET',
                cache: false,
                url: href+'?'+url_data
            })
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
