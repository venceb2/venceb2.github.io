$(document).ready(function() {
    $('.tab-item a').click(function(e) {
        e.preventDefault();
        var tabId = $(this).attr('href');

        $('.tab-item').removeClass('active');
        $(this).parent().addClass('active');

        $('.tab-pane').removeClass('active');
        $(tabId).addClass('active');
    });
    ////////////////////////////////////////////////////////////////
    $(".image-container").click(function() {
        $(".modal").css("display", "block");
        $(".modal-image").attr("src", $(this).find(".image").attr("src"));
        $(".modal-title").text($(this).find(".image-title").text());
        $(".modal-description").html($(this).find(".image-description").html());
        $(".modal-url").attr("href", $(this).find(".image-url").text());
        
      });
      
      $(".close-button").click(function() {
        $(".modal").css("display", "none");
      });

      $(window).click(function(event) {
        if ($(event.target).hasClass("modal")) {
          $(".modal").css("display", "none");
        }
      });
      //////////////////////////////////////////////////////////////
      $('.menu').click(function(){
        $('.navbar').css("display", "flex");
    });
    $('.nav-link').click(function(){
      $('.navbar').css("display", "none");
    });
    $(window).click(function(event) {
      if ($(event.target).hasClass("navbar")) {
        $(".navbar").css("display", "none");
      }
      if ($(window).innerWidth() < 650){
        if ($(event.target).hasClass("navbar")) {
          $(".navbar").css("display", "none");
        }
      }
      // else{
      //   $(".navbar").css("display", "flex");
      // }
      
    });
      /////////////////////////////////////////////////////////////////
      
      $(window).on('scroll', function() {
        var $container = $('.tab-content');
        if (isPartiallyInViewport($container[0])) {
          $('.image-container').css({
            'transform': 'translateY(0)',
            'opacity': 1
          });
        }
      });
      
      function isPartiallyInViewport(element) {
        var rect = element.getBoundingClientRect();
        return rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0;
      }

      /////////////////////////////////////////////////////////////////
      
      $(window).on('scroll', function() {
        var $container = $('.about');
        if (isPartiallyInViewport($container[0])) {
          $('.about-wrap').css({
            'transform': 'translateY(0)',
            'opacity': 1
          });
        }
      });
      
      function isPartiallyInViewport(element) {
        var rect = element.getBoundingClientRect();
        return rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0;
      }
      /////////////////////////////////////////////////////////////////
      
      $(window).on('scroll', function() {
        var $container = $('.contact');
        if (isPartiallyInViewport($container[0])) {
          $('.contact-wrap').css({
            'transform': 'translateY(0)',
            'opacity': 1
          });
        }
      });
      
      function isPartiallyInViewport(element) {
        var rect = element.getBoundingClientRect();
        return rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0;
      }
      /////////////////////////////////////////////////////////////////
      setInterval(function() {
        var visibleWord = $(".cd-words-wrapper .visible");
        var hiddenWord = $(".cd-words-wrapper .hidden");
        visibleWord.removeClass("visible").addClass("hidden").css("transform", "rotateX(180deg)");
        hiddenWord.removeClass("hidden").addClass("visible").css("transform", "rotateX(0deg)");
      }, 4000);

      
    
      
      
      
      
    
});
