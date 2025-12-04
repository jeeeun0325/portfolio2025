

$('article').mouseenter(function(){
    let v=$(this).find('video').get(0)
    $(this).css({'width':'40%'})
    v.play()
    $(this).find('video').css({'display':'block'})
$(this).find('.txt p').fadeIn()
})
$('article').mouseleave(function(){
    let v=$(this).find('video').get(0)
    $(this).css({'width':'25%'})
    v.currentTime = 0
    $(this).find('video').css({'display':'none'})
    $(this).find('.txt p').fadeOut()

})

$('.desc a[href^="#"]').on('click', function(e) {
    e.preventDefault(); 
    
    let targetId = $(this).attr('href');
    
    if (targetId === '#' || $(targetId).length === 0) {
        return;
    }
    
    $('.product').removeClass('on')
    $(targetId).addClass('on'); 

    // 애니메이션 진행 중일 때 클릭 무시
    if ($('html, body').is(':animated')) {
        return; 
    }
    
    // targetTop 위치 계산
    let targetTop = $(targetId).offset().top; 

    $('html, body').animate({
        scrollTop: targetTop 
    }, 500);

});