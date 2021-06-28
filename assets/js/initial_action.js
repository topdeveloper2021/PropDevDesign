$(document).ready(function () {
    $(".main-panel").removeClass("ps-container  ps-theme-default ps-active-y");
    $(window).scrollTop(0);
    var dest = localStorage.getItem('dest');
    console.log("dest==>", dest);
    //get active span
    if(dest!=null) {
        var str_index=dest.indexOf("#")
        var id_string=dest.substring(str_index)
        console.log("id_string", id_string)
        var active_nav=$(".sidebar-wrapper").find(`a[href="${dest}"]`).children("span").css("color", "#FF00E5");
        console.log("active nav==>",active_nav)
        $(".main-panel .nav").find(".active").removeClass("active");
        $(".sidebar .nav").find(".active").removeClass("active");
        var element = $(".nav-pills").find(`a[href="${dest}"]`).parent()
        element.addClass("active");
        $(".sidebar-wrapper").find(`a[href="${dest}"]`).click();
    }
    var popup_id=localStorage.getItem('popup_id');
    console.log("popup_id==>", popup_id)
    if(popup_id!=='null' && popup_id!=='undefined') {
        var active_nav=$(".sidebar-wrapper").find(`a[href="${dest}"]`).children("span").css("color", "#000C33");
        var popup_id_string="#"+String(popup_id);
        console.log("popup_id", popup_id_string);
        $(`${popup_id_string}`).css("color", "#FF00E5");
        var popup_class=$(`${popup_id_string}`).attr('class').split(' ')[1];
        var popup_class_string="."+String(popup_class);
        console.log("popup_class", popup_class_string)
        $(".tab-pane").find(`${popup_class_string}`).click();
        localStorage.removeItem('popup_id');
    }
    $(window).on("load", function () {
        $(".main-panel").removeClass("ps-container  ps-theme-default ps-active-y");
        $(window).scrollTop(0);
    })
    $(".tab-container a").on("click", function () {
        console.log("actived tabpane==>", $(this).attr("href"));
        var active_href = $(this).attr('href');
        var str = String(active_href);
        //set older active dark color
        var old_active=localStorage.getItem('dest');
        var active_nav=$(".sidebar").find(`a[href="${old_active}"]`).children("span").css("color", "#000C33");
        console.log("old_dest==>", old_active)
        localStorage.removeItem('dest');
        localStorage.setItem('dest', str);
        //set current active pink color
        var active_nav=$(".sidebar").find(`a[href="${str}"]`).first().children("span").css("color", "#FF00E5");
        var element = $(".sidebar .nav-pills").find(`a[href="${str}"]`).parent();
        element.addClass("active");
        var back_btn=$("body").hasClass("sidebar-overlay");
        console.log(back_btn)
        if(back_btn){
            $(".btn-back").click();
        }
     });

})