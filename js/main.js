$(function(){
  // ヘッダー固定スクロール固定or非常時
  var $win = $(window),
      $header = $('header'),
      headerHeight = $header.outerHeight(),
      startPos = 0;

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > startPos && value > headerHeight ) {
      $header.css('top', '-' + headerHeight + 'px');
    } else {
      $header.css('top', '0');
    }
    startPos = value;
  });


  // ヘッドグローバルナビメニュー
  $('.dropdwn li').hover(function(){
    $("ul:not(:animated)", this).slideDown();
}, function(){
    $("ul.dropdwn_menu",this).slideUp();
});



$(document).ready(function() {
  $(".menu-trigger").click(function () {
    $(this).toggleClass("active");
    $(this).next().toggleClass("onanimation");
    $('ul li').hide();
    $('ul li').each(function(i) {
      $(this).delay(80 * i).fadeIn(500);
    });
  });
});


// スマホグローバルメニュードロワー
  $('.burger-btn').click(function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-sp').toggleClass('open');
    $('body').toggleClass('noscroll');
  });

  // ページ内遷移の時にドロワーを閉じる指示
  // リストのulに対してバーガートグルを指定
  // 1200はwidth⇒この数字の以下の時に適応
  $(function(){$('.nav-sp-list a').on('click', function(){
    if (window.innerWidth <= 1200) {
      $('.burger-btn').click();
    }
  });});
});



// 現在時刻を表示
function set2fig(num) {
  // 桁数が1桁だったら先頭に0を加えて2桁に調整する
  var ret;
  if( num < 10 ) { ret = "0" + num; }
  else { ret = num; }
  return ret;
}
function showClock2() {
  var nowTime = new Date();
  var nowHour = set2fig( nowTime.getHours() );
  var nowMin  = set2fig( nowTime.getMinutes() );
  var nowSec  = set2fig( nowTime.getSeconds() );
  var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
  document.getElementById("RealtimeClockArea2").innerHTML = msg;
}
setInterval('showClock2()',1000);



// 今日の日付を表示する
window.onload = function(){
  var dateObj = new Date();
  var y = dateObj.getFullYear();
  var m = dateObj.getMonth() + 1;
  var d = dateObj.getDate();
  var yb = "日月火水木金土".charAt(dateObj.getDay());
  document.getElementById("currentDate").innerHTML = y+"年"+m+"月"+d+"日("+yb+")";
  }



