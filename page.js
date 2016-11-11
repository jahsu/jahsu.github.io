$(function() {
      if ($('.slides-container').length) { 
        $('.slideshow').superslides({
          hashchange: false,
          pagination:false,
          play: 6000
        });
      }
    });