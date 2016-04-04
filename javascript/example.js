$(document).on("click",".some",function(){
    swapContent("some.php",{foo:12,bar:32},"#main",function(){
        console.log(this,arguments)
    })
})
