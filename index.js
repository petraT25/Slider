$(document).ready(function(){
  
  $('.left-arrow').click(previous);
  $('.right-arrow').click(next);
 
  function previous(){
    let $currentSlide1 = $(".grid1 img:first");
    let width1 = $currentSlide1.outerWidth();
    let $previousSlide1 = $(".grid1 img:last")
    
    $previousSlide1.css({"marginLeft": -width1})
    $currentSlide1.before($previousSlide1);
    $previousSlide1.animate({"marginLeft": 0}, 1000);

    let $currentSlide2 = $(".grid2 img:first");
    let width2 = $currentSlide2.outerWidth();
    let $previousSlide2 = $(".grid2 img:last")
    
    $previousSlide2.css({"marginLeft": -width2})
    $currentSlide2.before($previousSlide2);
    $previousSlide2.animate({"marginLeft": 0}, 1000);
  }

  function next(){
    let $currentSlide1 = $(".grid1 img:first");
    let width1 = $currentSlide1.outerWidth();

    $currentSlide1.animate({"marginLeft": -width1}, 1000, function(){
      let $lastSlide1 = $(".grid1 img:last")
      $lastSlide1.after($currentSlide1);
      $currentSlide1.css({"marginLeft": 0})
    });


    let $currentSlide2 = $(".grid2 img:first");
    let width2= $currentSlide2.outerWidth();
  
    $currentSlide2.animate({"marginLeft": -width2}, 1000, function(){
      let $lastSlide2 = $(".grid2 img:last");
      $lastSlide2.after($currentSlide2);
      $currentSlide2.css({"marginLeft": 0})
    });
  }
}
);