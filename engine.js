function swapContent(href, url_data, target, loads,DontPushState) {
    var pjax_e = 0;
    return recurse()

    function recurse() {
        return $.ajax({
                type: 'GET',
                cache: false,
                url: href,
                data: url_data
            })
            .done(function(data) {
                var $data = $(data)
                var newContent=$data.filter(target)
                $(target).replaceWith(newContent);
                document.title=$data.filter("title").text();
                loads.call(target, href, url_data, data);
                if (!DontPushState)history.pushState(url_data, "", href);
            }).fail(function() {
                pjax_e++;
                if(pjax_e < 10) {
                    $(target).text("error " + pjax_e);
                    setTimeout(recurse, 500);
                }
                else {
                    $(target).html("we are currently experiencing a server error, <a href='javascript:location.reload()'>refresh!</a>");
                }
            });
    }
}
