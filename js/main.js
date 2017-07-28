/**
 * Created by Administrator on 16-9-30.
 */
$(function(){
    var banWb,banWba,set;
    //==监听窗口尺寸 并将window高的比宽赋给button盒子==
    $(window).resize(function(){
        dobarH();
        keyword();//keyword部分函数窗口监听
        midbanH();//监听middle banner img高度
        imgprudH();//监听产品img高度
    })
    dobarH();
    function dobarH(){
        var banW=$(window).width();
        var iH=600/1700;
        $(".butbarl").height(banW*iH);
        $(".butbr").height(banW*iH);
        $(".banner-bar").height(banW*iH);
        $(".imgbana").css({"height":banW*iH,"width":banW});
        banWb=banW;
        banWba=-banW;
    }
    //==banner轮播==
    $(".banner-bar").find("a").eq(0).css({"z-index":"6"});
    var i=0;
    var shu=0;
    $(".ban-butl").click(function(){
        clearInterval(set);
        i--;
        if(i<0){
            i=3;
        }
        $(".banner-bar").find("a").css({"z-index":0});
        $(".banner-bar").find("a").css({"left":0});
        $(".banner-bar").find("a").eq(shu).css({"z-index":4});
        $(".banner-bar").find("a").eq(shu).stop().animate({"left":banWb+"px"},500);
        $(".banner-bar").find("a").eq(i).css({"z-index":6});
        $(".banner-bar").find("a").eq(i).css({"left":banWba+"px"}).stop().animate({"left":0},500);
        shu=i;
        set=setInterval(go,4000);
    })
    $(".ban-butr").click(function(){
        clearInterval(set);
        i++;
        if(i>3){
            i=0;
        }
        $(".banner-bar").find("a").css({"z-index":0});
        $(".banner-bar").find("a").eq(shu).css({"z-index":4}).animate({"left":banWba+"px"},500).css({"left":0});
        $(".banner-bar").find("a").eq(i).css({"z-index":6});
        $(".banner-bar").find("a").eq(i).css({"left":banWb+"px"}).stop().animate({"left":0},500);
        shu=i;
        set=setInterval(go,4000);
    })
    function go(){
        i++;
        if(i>3){
            i=0;
        }
        $(".banner-bar").find("a").css({"z-index":0});
        $(".banner-bar").find("a").eq(shu).css({"z-index":4}).animate({"left":banWba+"px"},500).css({"left":0});
        $(".banner-bar").find("a").eq(i).css({"z-index":6});
        $(".banner-bar").find("a").eq(i).css({"left":banWb+"px"}).stop().animate({"left":0},500);
        shu=i;
    }
    var set=setInterval(go,4000);
    //keywords-tag位置
    keyword();
    function keyword(){
        var keyword = new Array();
        for (var key = 0; key < 4; key++) {
            keyword[key] = $(".keywords-tag").eq(key).width();
            var kw = -0.5 * keyword[key];
            $(".keywords-tag").eq(key).css({"margin-left": kw + "px"});
        }
    }
    //middle banner 高度监测
    midbanH();
    function midbanH(){
        var midW=$(window).width();
        var midH=(441/1280)*midW;
        $(".bannerbar").css({"height":midH+"px"});
    };

    //滚动监听
    window.onscroll=function(){
        //变量t就是滚动条滚动时，到顶部的距离
        var t=document.documentElement.scrollTop||document.body.scrollTop;
        var search=document.getElementById("search");
        if( t >=120) {     //当拖动到距离顶部120px处时，搜索栏到顶部
            search.style.position="fixed";
            search.style.top="0";
        }
        else{            //恢复正常
            search.style.position="fixed";
            search.style.top="110px";
        };
        if(t!=c){
            $(".nav-ph").css({"display": "none"});//滚动自动收起phone nav
            pd=true;
        }
        var c=t;
    }
    //menu 点击事件
    var pd=true;
    $(".dropmenu").click(function(){
        if(pd) {
            $(".nav-ph").css({"display": "block"});
            pd=false;
        }
        else {
            $(".nav-ph").css({"display": "none"});
            pd=true;
        }
    })

    //监听产品img高度
    imgprudH();
    function imgprudH(){
        var imgW=$(".new-bar").width();
        $(".imgdiv").children("img").css({"width":imgW+"px"});
        var imgH=$(".imgdiv").children("img").height();
        $(".imgdiv").css({"height":imgH+"px"});
    };
    //产品img mouseenter mouseleave事件
    $(".imgdiv").each(function(u){
        $(".imgdiv").eq(u).children("img").eq(0).css({"z-index":"4"});
        $(".imgdiv").eq(u).children("img").eq(1).css({"z-index":"3"});
        $(".imgdiv").eq(u).mouseenter(function(){
            $(".imgdiv").eq(u).children("img").eq(0).css({"display":"none","z-index":"3"});
            $(".imgdiv").eq(u).children("img").eq(1).css({"display":"block","z-index":"4"});
        })
        $(".imgdiv").eq(u).mouseleave(function(){
            $(".imgdiv").eq(u).children("img").eq(1).css({"display":"none","z-index":"3"});
            $(".imgdiv").eq(u).children("img").eq(0).css({"display":"block","z-index":"4"});
        })
    })



})
