function fullWidthResize()
{
    $('.full-width').each(function ()
    {
        $(this).width($(window).width());
        $(this).css("margin-left", '0px'); //以便下一步获取的x值不会被上一次调整的位置带来的left值影响。
        $(this).css("margin-left", '-' + $(this).offset().left + 'px');
    });
}

window.addEventListener("resize", function ()
{
    fullWidthResize();
});
fullWidthResize(); //页面加载时运行一次