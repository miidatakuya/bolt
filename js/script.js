$(function() {
    $(".hum_toggle").on('click', function(){
        $('.menu_nav').toggleClass("is-active");
        /*.hum_toggleをクリックしたとき、.menu_navにis-active(cssの中の.menu_nav.is-active)というクラスを付けたりとったりする*/
    });
  });