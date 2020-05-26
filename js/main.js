(function(){

var article2=document.getElementsByClassName("main-images");

makeImgsection(3,article2);

function makeImgsection(number,article){
    var articles="";
    for(i=0;i<number;i++){
    articles+='<section class="main-images"><img src="images/homepagecover.jpg" alt="travel1"><section class="rictangle"> <a href="#">Coding course</a><span  id="icon1"></span></section></section>';
    }
    var main=document.getElementById("articles");
    console.log(main);
    main.innerHTML=articles;
    
    
};

})();