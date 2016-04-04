<?php
$link_text = 'displayed text';//where the visual text goes
$div = 'targetedID';//targeted div
$href = 'base.html';//where the data is going
$url = 'variable1=1&variable2=2';//data being transmitted
$loads = 'dialog();';//what runs when the new content is loaded

make_link($link_text, $div, $href, $url, $loads);
