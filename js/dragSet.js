/**
 * Created by hanzo on 2017/12/15.
 */
var mx = 0,my = 0;
var dx = 0,dy = 0;      //�Ի������꣨ͬ�ϣ�
var isDraging = false;
var pickBox;  //���x��y�����꣨�����left��top��
    $('.camera').mousedown(function(e){
        e = e || window.event;
        mx = e.pageX;     //���ʱ���X����
        my = e.pageY;     //���ʱ���Y����
        dx = parseInt($(this).css("left"));
        dy = parseInt($(this).css("top"));
        console.log(dx+","+dy);
        isDraging = true;      //��ǶԻ�����϶�
        pickBox = $(this);
    });
    $(document).mousemove(function(e){
        var e = e || window.event;
        var x = e.pageX;      //�ƶ�ʱ���X����
        var y = e.pageY;      //�ƶ�ʱ���Y����
        if(isDraging){        //�ж϶Ի����ܷ��϶�
            var moveX = dx + x - mx;      //�ƶ���Ի����µ�leftֵ
            var moveY = dy + y - my;      //�ƶ���Ի����µ�topֵ
            //�����϶���Χ
            var pageW = $(window).width();
            var pageH = $(window).height();
            var dialogW = pickBox.width();
            var dialogH = pickBox.height();
            var maxX = pageW - dialogW;       //X����϶����ֵ
            var maxY = pageH - dialogH;       //Y����϶����ֵ
            moveX = Math.min(Math.max(0,moveX),maxX);     //X����϶���Χ
            moveY = Math.min(Math.max(0,moveY),maxY);     //Y����϶���Χ
            //�������öԻ����left��top
            pickBox.css({"left":moveX + 'px',"top":moveY + 'px'});
        }       });

    //����뿪
    $('.camera').mouseup(function(){
        isDraging = false;
    });
$('.whItem').mousedown(function(e){
    e = e || window.event;
    mx = e.pageX;     //���ʱ���X����
    my = e.pageY;     //���ʱ���Y����
    dx = parseInt($(this).css("left"));
    dy = parseInt($(this).css("top"));
    console.log(dx+","+dy);
    isDraging = true;      //��ǶԻ�����϶�
    pickBox = $(this);
});
$(document).mousemove(function(e){
    var e = e || window.event;
    var x = e.pageX;      //�ƶ�ʱ���X����
    var y = e.pageY;      //�ƶ�ʱ���Y����
    if(isDraging){        //�ж϶Ի����ܷ��϶�
        var moveX = dx + x - mx;      //�ƶ���Ի����µ�leftֵ
        var moveY = dy + y - my;      //�ƶ���Ի����µ�topֵ
        //�����϶���Χ
        var pageW = $(window).width();
        var pageH = $(window).height();
        var dialogW = pickBox.width();
        var dialogH = pickBox.height();
        var maxX = pageW - dialogW;       //X����϶����ֵ
        var maxY = pageH - dialogH;       //Y����϶����ֵ
        moveX = Math.min(Math.max(0,moveX),maxX);     //X����϶���Χ
        moveY = Math.min(Math.max(0,moveY),maxY);     //Y����϶���Χ
        //�������öԻ����left��top
        pickBox.css({"left":moveX + 'px',"top":moveY + 'px'});
    }       });

//����뿪
$('.whItem').mouseup(function(){
    isDraging = false;
});