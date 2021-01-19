

$(function(){

	// ハンバーガーアイコンの開閉
  $(document).on('click','.menu',function(){
    $('.menu-line').toggleClass('active');
		$('.header-nav').fadeToggle();
		$('body').toggleClass('noscroll');
	});
	
  $(document).on('click','.nav-item',function(){
			if ( $('.menu-line').hasClass('active') ) { 
				$('.header-nav').fadeOut();
				$('.menu-line').toggleClass('active');
			}
	                $('body').removeClass('noscroll')
  });

	// ヘッダーの固定
  $( window ).on( 'load scroll', function() {
    if ( 486 < $( this ).scrollTop() ) { // 486px以上スクロールしたら
      $( '.header' ).addClass( 'fixed' );
    } else {
      $( '.header' ).removeClass( 'fixed' );
    }
  });
  
});


