$(document).ready(function(){
    //�������
    $('.closeBt').click(function(){
        $(this).parent().fadeOut();
    });
    //�Զ�������
    $(".rwShowBox").mCustomScrollbar({
        axis:"y",
        theme:"minimal-dark"
    });
    //��ʼ�����ȵ�
    $('.rwDone').last().addClass("currentProcess");
    //Tab����
    $('.rwDetail.active').fadeIn();
    $('.rwTab').click(function(){
        if(!($(this).hasClass('active'))){
            var tabIndex = $(this).index();
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parent().parent().find('.rwDetail').removeClass('active').hide();
            $(this).parent().next().find('.rwDetail').eq(tabIndex).addClass('active').fadeIn();
        }
    });
    //ȫ����ť
    $('.fullScreenBt').on('click', function () {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    });
    //�Զ��嵥ѡ��ѡ��
    $('input').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue',
        increaseArea: '20%' // optional
    });
    //���Ϲ���������
    $(".mtOperate .mtBody").click(function(e){
        e.stopPropagation();
    });
    $('.mtOperate').click(function(e){
        var mtOperate = $(this);
        var mtBody = $(this).find(".mtBody");
        if(mtOperate.hasClass("active")){
            mtBody.fadeOut();
            mtOperate.removeClass("active");
        }else{
            console.log($('.mtOperate.active'));
            $('.mtOperate.active').find(".mtBody").fadeOut();
            $('.mtOperate.active').removeClass("active");
            mtOperate.addClass("active");
            mtBody.fadeIn();
            $(document).click(function(e){
                mtBody.fadeOut();
                mtOperate.removeClass("active");
            });
            e.stopPropagation();
        }
    });
    //����ѡ����
    $('#ds_1').datetimepicker({
        minView:"2",
        todayBtn:"linked",
        todayHighlight:"true",
        autoclose:"true",
        language:'zh-CN',
        format: 'yyyy-mm-dd'
    });
    $('#ds_2').datetimepicker({
        minView:"2",
        todayBtn:"linked",
        todayHighlight:"true",
        autoclose:"true",
        language:'zh-CN',
        format: 'yyyy-mm-dd'
    });
});