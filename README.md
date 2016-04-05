# PJAX
A full blown PJAX function built for PJAX driven architecture presentations

Supports every language with the language specific folders once converted from the php folder.

##WHAT IS BEING PASSED INTO THE FUNCTION?

###href
the base URL for requesting the feed to come from<br>
example: (this.php, that.php)<br>

###url_data
variables the server needs to run to use the target, and display the page also <br>
example: (variable1=1&variable2=2)<br>

###target
what id is the return going to<br>
example: (<br>
thisID<br>
<div id='thisID'></div><br>
)

###loads
the things that run after the variables are the HTML is updated<br>
example: (thisFunction();)<br>

##INSTALATION
###DEPENDENCIES:
```<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>```

###CALL FOR ANY FUNCTION TO REPLACE DATA:
```swapContent(href, url_data, target, loads)```
