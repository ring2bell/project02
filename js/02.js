$(function () {
    let winH = $(window).innerHeight();
    let winW = $(window).innerWidth();
    let vidH = $(".content_ img").innerHeight();
    let vidW = $(".content_ img").innerWidth();
    setInterval(videoResizeFn,100);
    $(Window).resize(function () {
        videoResizeFn()
    })
    function videoResizeFn() {
        //리사이징 되는 원도우와 비디오의 크기를 가져와서 재할당
        winH = $(window).innerHeight();
        winW = $(window).innerWidth();
        vidH = $(".content_ img").innerHeight();
        vidW = $(".content_ img").innerWidth();

        //1. 비디오박스의 높이=창높이
        $(".content_").css({ width: 100 + "%", height: winH })


        //2. 비디오 가로와 세로를 창크기 보다 작으면 박스와 같거나 크게 설정 
        if (winH > vidH) {
            $(".content_ img").css({ width: "auto", height: winH })
        }
        if (winW > vidW) {
            $(".content_ img").css({ width: winW, height: "auto" })
        }

        // 정렬
        $(".content_ img").css({ marginTop: (winH - vidH) / 2, marginLeft: (winW - vidW) / 2, })
    }


})