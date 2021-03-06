jQuery(document).ready(function($) {
  
//NAV LINKS
  $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
        }
      }
    });
  });


  $(".project").click(function(){
    $(".project-overlay").fadeIn(400);
    $(".main-nav, .main-nav-scrolled").fadeOut(400);
    $("body").addClass('no_scroll');
  });


  $(".close").click(function(){
    $("body").removeClass('no_scroll');
    $(".project-overlay").fadeOut(400);
    $(".main-nav, .main-nav-scrolled").fadeIn();
    
  });

  $(".project-overlay").click(function(){
    $("body").removeClass('no_scroll');
    $(".project-overlay").fadeOut(400);
    $(".main-nav, .main-nav-scrolled").fadeIn();
  });


  $("#resume-link").click(function(){
    $("#resume").fadeIn(400);
    $("#sidebar").fadeOut(400);
    $("#homepage").fadeOut(400);
  });

  $(".nav-about").click(function(){
    $("#resume").fadeOut(400);
    $("#sidebar").fadeIn(400);
    $("#homepage").fadeIn(400);
  });

  $(".nav-work").click(function(){
    $("#resume").fadeOut(400);
    $("#sidebar").fadeIn(400);
    $("#homepage").fadeIn(400);
  });

  $(".nav-contact").click(function(){
    $("#resume").fadeOut(400);
    $("#sidebar").fadeIn(400);
    $("#homepage").fadeIn(400);
  });

});

// PROJECT GRID

var project = $('.project:first').remove();

for(var i = 0; i < projects.length; i++){
  var tempProject = project.clone();
  tempProject.attr('data-id', projects[i].id);
  tempProject.find('img').attr('src', projects[i].thumbUrl);
  $('#recent-work').append(tempProject);
}



//PROJECT OVERLAY
$('.project').click(function(){

  var myid = $(this).attr('data-id');

  for(var i = 0; i < projects.length; i++){
    if (projects[i].id == myid){
      $('.project-details-wrap').find('ul').html("");        

      $('.project-details-wrap').find('img').attr('src', projects[i].imgUrl);
      $('.project-details-wrap').find('h2').html(projects[i].title);  
      $('.project-details-wrap').find('p').html(projects[i].description);  
      $('.project-details-wrap').find('a').attr('href',projects[i].url);  
      
      //This goes through the list of technologies and makes a list of them on the window. 
      for (var k = 0; k < projects[i].technologies.length; k++) {
        //with javascript create a NEW li element with the contents of "projects[i].technologies[k]"
        //append that li element to ul
        
        $('.project-details-wrap').find('ul').append("<li>"+projects[i].technologies[k]+"</li>");
      }
    }
  }
});