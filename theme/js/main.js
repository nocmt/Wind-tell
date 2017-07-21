/**
 * Created by root on 17-7-19.
 */
$(document).ready(function () {

    var InfText = $("#author-inf-text");
    $("#author-btn").on('click', function () {
        $("#author-bag").animate({
            height: 'toggle'
        });
        if (InfText.text() === "赞助作者（微信）") {
            InfText.text("一语道不尽，缄默宁无言");
            $("#weixin").fadeToggle(300);
        } else {
            InfText.text("赞助作者（微信）");
            $("#weixin").fadeToggle(1500);
        }
    });
    //返回顶部
    $("#btn-top").on('click', function () {
        var speed = 300;//滑动的速度
        $("body,html").animate({scrollTop: 0}, speed);
        return false;
    });

    //到达固定高度显示工具条
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $("#btn-top").fadeIn();
        } else {
            $("#btn-top").fadeOut();
        }
    });

    //PC端菜单显示
    $("#open-classify").on('click', function () {
        $("#video-s").animate({
            height: 'hide'
        });
        $("#classify-s").animate({
            height: 'toggle'
        });
    });

    $("#open-video").on('click', function () {
        $("#classify-s").animate({
            height: 'hide'
        });
        $("#video-s").animate({
            height: 'toggle'
        });
    });

    //移动端菜单显示
    $("#bars-btn").on('click', function () {
        $(".mobile-sidebar").animate({
            height: 'toggle'
        });
    });
    $("#msc-btn").on('click', function () {
        $("#msc").animate({
            height: 'toggle'
        });
    });
    $("#msv-btn").on('click', function () {
        $("#msv").animate({
            height: 'toggle'
        });
    });
    //获取浏览器宽度
    var _width = $(window).width();
    $(window).resize(function () {
        console.log("别拉拉扯扯的，你看看都多少次了！");
        if (_width >= 980) {
            $("#mobile-sidebar").hide();
        }
        if (_width < 980) {
            $("#classify-s, #video-s").hide();
        }
    });

});