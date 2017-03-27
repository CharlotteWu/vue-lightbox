/**
 * Created by Administrator on 2017/3/27.
 */

//lightbox幻灯片
//responsive 



lightBox.prototype.scaleImg = function () {

};

lightBox.prototype.preClick = function () {

};

lightBox.prototype.nextClick = function () {

};

lightBox.prototype.preloadNeighboringImg = function () {

};

$(function () {
    //点击对应的图片进行放大
    $('.imgs').click(function () {
        //$('.mask').show();
        $('.boxShow').appendTo('body');
        lightBox.val["imgArr"] = [];
        $('.imgs').each(function () {
            $('.boxShow').append('<div><img src="'+ $(this).attr("src") +'"></div>');
        });
        //取得当前图片的集合
        //console.log(lightBox.val["imgArr"]);//当前的图片属性存储至一个数组中

    });

    //关闭按钮
    $('.close').click(function () {
        $('.boxShow').remove();
        $('.mask').hide();
    });

})
