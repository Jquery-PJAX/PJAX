<?php
function make_link($link_text, $div, $href, $url, $loads=''){
    echo"<a href='?$url' onclick='return false;' onmousedown='swapContent(\"$href\", \"$url\", $div, \"$loads\")'>$link_text</a>

";
}
