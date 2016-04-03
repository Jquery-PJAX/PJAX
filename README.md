# PJAX
A full blown PJAX function built for PJAX driven architecture presentations

Supports every language with the language specific folders once converted from the php folder.

#What is being passed into the function?

href - the base URL for requesting the feed to come from

url_data - variables the server needs to run to use the target, and display the page also

target - what id is the return going to

loads - the things that run after the variables are the HTML is updated

#instalation
dependencies:
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>

call for a url:
swapContent(href, url_data, target, loads)
