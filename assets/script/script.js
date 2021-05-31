// This code refreshes the page when the user clicks on one of the
// items in the navbar, making the toggle menu closing
// again.

   $(".navbar-toggler").click(function(){
      $(".navbar-nav").show();
    });

    $(".nav-link").click(function(){
        $(".navbar-nav").hide();
        location.reload();
    });
    