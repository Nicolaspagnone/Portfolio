const d = document,
$btnUp = d.querySelector("#btn-up")



d.addEventListener("DOMContentLoaded",e=>{



})


d.addEventListener("scroll",e=>{

    btnUp()

})


function btnUp() {

    let $scrollY = window.scrollY

    if ($scrollY >= 600) {

        $btnUp.classList.remove("hidden")
        
    }else{

        $btnUp.classList.add("hidden")
 
    }
    
}