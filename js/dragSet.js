/**
 * Created by hanzo on 2017/12/15.
 */
var mx = 0,my = 0;
var dx = 0,dy = 0;      //对话框坐标（同上）
var isDraging = false;
var pickBox;  //鼠标x、y轴坐标（相对于left，top）
    $('.camera').mousedown(function(e){
        e = e || window.event;
        mx = e.pageX;     //点击时鼠标X坐标
        my = e.pageY;     //点击时鼠标Y坐标
        dx = parseInt($(this).css("left"));
        dy = parseInt($(this).css("top"));
        console.log(dx+","+dy);
        isDraging = true;      //标记对话框可拖动
        pickBox = $(this);
    });
    $(document).mousemove(function(e){
        var e = e || window.event;
        var x = e.pageX;      //移动时鼠标X坐标
        var y = e.pageY;      //移动时鼠标Y坐标
        if(isDraging){        //判断对话框能否拖动
            var moveX = dx + x - mx;      //移动后对话框新的left值
            var moveY = dy + y - my;      //移动后对话框新的top值
            //设置拖动范围
            var pageW = $(window).width();
            var pageH = $(window).height();
            var dialogW = pickBox.width();
            var dialogH = pickBox.height();
            var maxX = pageW - dialogW;       //X轴可拖动最大值
            var maxY = pageH - dialogH;       //Y轴可拖动最大值
            moveX = Math.min(Math.max(0,moveX),maxX);     //X轴可拖动范围
            moveY = Math.min(Math.max(0,moveY),maxY);     //Y轴可拖动范围
            //重新设置对话框的left、top
            pickBox.css({"left":moveX + 'px',"top":moveY + 'px'});
        }       });

    //鼠标离开
    $('.camera').mouseup(function(){
        isDraging = false;
    });
$('.whItem').mousedown(function(e){
    e = e || window.event;
    mx = e.pageX;     //点击时鼠标X坐标
    my = e.pageY;     //点击时鼠标Y坐标
    dx = parseInt($(this).css("left"));
    dy = parseInt($(this).css("top"));
    console.log(dx+","+dy);
    isDraging = true;      //标记对话框可拖动
    pickBox = $(this);
});
$(document).mousemove(function(e){
    var e = e || window.event;
    var x = e.pageX;      //移动时鼠标X坐标
    var y = e.pageY;      //移动时鼠标Y坐标
    if(isDraging){        //判断对话框能否拖动
        var moveX = dx + x - mx;      //移动后对话框新的left值
        var moveY = dy + y - my;      //移动后对话框新的top值
        //设置拖动范围
        var pageW = $(window).width();
        var pageH = $(window).height();
        var dialogW = pickBox.width();
        var dialogH = pickBox.height();
        var maxX = pageW - dialogW;       //X轴可拖动最大值
        var maxY = pageH - dialogH;       //Y轴可拖动最大值
        moveX = Math.min(Math.max(0,moveX),maxX);     //X轴可拖动范围
        moveY = Math.min(Math.max(0,moveY),maxY);     //Y轴可拖动范围
        //重新设置对话框的left、top
        pickBox.css({"left":moveX + 'px',"top":moveY + 'px'});
    }       });

//鼠标离开
$('.whItem').mouseup(function(){
    isDraging = false;
});