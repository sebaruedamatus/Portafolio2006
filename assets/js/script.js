$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var elito = this.hash;

      $("html, body").animate({
        scrollTop: $(elito).offset().top
      }, 800, function(){
        window.location.hash = elito;
      });
    }
  });

  $('[data-toggle="popover"]').popover();

});
