    var aniModle = $(".goods").html();
    var whPosition = {
        "wh1": [358, 254],
        "wh2": [358, 553],
        "wh3": [358, 720],
        "wh4": [765, 254],
        "wh5": [765, 553],
        "wh6": [765, 720],
        "wh7": [1188, 254],
        "wh8": [1188, 397],
        "wh9": [1188, 553],
        "wh10": [1596, 397],
        "wh11": [1627, 602],
        "wh13": [358, 553],
        "wh14": [765, 553]
    };
    var goodsNumber = 1;
    var setGoods = function (startWH,endWH,goodsSerial) {
        //setGoods函数，三个变量依次为：起始仓库，目标仓库，单据号
        var gn = "gn" + goodsNumber;
        var goodsAdd = $("<div>").addClass('goods').addClass(gn).appendTo($(".goodsAni"));
        goodsAdd.html(aniModle);
        $('.'+gn+' .goodsSerial').text('单据号：'+goodsSerial);
        console.log(goodsAdd.width());
        var whS = whPosition[startWH];
        var whE = whPosition[endWH];
        var startTop = whS[1] - 50;
        var startLeft = whS[0] - (goodsAdd.width() / 2);
        var endTop = whE[1] - 50;
        var endLeft = whE[0] - (goodsAdd.width() / 2);
        goodsAdd.css("top", startTop).css("left", startLeft).css("display", "block");
        goodsAdd.addClass('animated zoomIn');
        setTimeout(function () {
            goodsAdd.css("top", endTop).css("left", endLeft);
            goodsAdd.removeClass('animated zoomIn');
        }, 1000);
        setTimeout(function () {
            goodsAdd.addClass('animated zoomOut');
        }, 2000);
        setTimeout(function () {
            goodsAdd.removeClass('animated zoomOut').css("display", "none");
            goodsAdd.remove();
        }, 3000);
        goodsNumber++;
    };
    var goodsOut = function (startWH,goodsSerial) {
        //goodsOut出库函数，2个变量依次为：仓库，单据号
        var gn = "gnOut" + goodsNumber;
        var goodsAdd = $("<div>").addClass('goods').addClass(gn).appendTo($(".goodsAni"));
        goodsAdd.html(aniModle);
        $('.'+gn+' .goodsSerial').text('单据号：'+goodsSerial);
        console.log(goodsAdd.width());
        var whS = whPosition[startWH];
        var startTop = whS[1] - 50;
        var startLeft = whS[0] - (goodsAdd.width() / 2);
        goodsAdd.css("top", startTop).css("left", startLeft).css("display", "block");
        goodsAdd.addClass('animated zoomIn');
        setTimeout(function () {
            goodsAdd.css("top", startTop-80);
        }, 1000);
        setTimeout(function () {
            goodsAdd.removeClass('animated zoomIn');
            goodsAdd.addClass('animated zoomOut');
        }, 1500);
        setTimeout(function () {
            goodsAdd.removeClass('animated zoomOut').css("display", "none");
            goodsAdd.remove();
        }, 2000);
        goodsNumber++;
    };
    var goodsIn = function (startWH,goodsSerial) {
        //goodsIn入库函数，2个变量依次为：仓库，单据号
        var gn = "gnOut" + goodsNumber;
        var goodsAdd = $("<div>").addClass('goods').addClass(gn).appendTo($(".goodsAni"));
        goodsAdd.html(aniModle);
        $('.'+gn+' .goodsSerial').text('单据号：'+goodsSerial);
        console.log(goodsAdd.width());
        var whS = whPosition[startWH];
        var startTop = whS[1] - 50;
        var startLeft = whS[0] - (goodsAdd.width() / 2);
        goodsAdd.css("top", startTop-80).css("left", startLeft).css("display", "block");
        goodsAdd.addClass('animated zoomIn');
        setTimeout(function () {
            goodsAdd.css("top", startTop);
        }, 1000);
        setTimeout(function () {
            goodsAdd.removeClass('animated zoomIn');
            goodsAdd.addClass('animated zoomOut');
        }, 1500);
        setTimeout(function () {
            goodsAdd.removeClass('animated zoomOut').css("display", "none");
            goodsAdd.remove();
        }, 2000);
        goodsNumber++;
    };
