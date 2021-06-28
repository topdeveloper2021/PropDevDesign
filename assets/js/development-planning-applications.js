$(document).ready(function () {
    $('span.sidebar-normal').on("click", function () {
        var popup_id = $(this).attr('id');
        console.log("popup_id==>", popup_id)
        localStorage.removeItem("popup_id");
        localStorage.setItem("popup_id", popup_id);
        $(".sidebar .nav").find(".active").removeClass("active");
        $(".main-panel .nav").find(".active").removeClass("active");
        // $(this).parent().addClass("active");
        console.log("act====>");
        var active_href = $(this).parent().attr('href');
        console.log("active_href====", active_href);
        var str = String(active_href);
        //set older active dark color
        var old_active = localStorage.getItem('dest');
        var active_nav = $(".sidebar-wrapper").find(`a[href="${old_active}"]`).children("span").css("color", "#000C33");
        console.log("old_dest==>", old_active)
        localStorage.removeItem('dest');
        localStorage.setItem('dest', str);
        //set current active pink color
        $(".sidebar-wrapper").find(`a[href="${old_active}"]`).children("span").css("color", "");
        var current_node = $(".sidebar-wrapper").find(".active").children("span").css("color", "#FF00E5");
        console.log("current node==>", current_node);
        //$(this).css("color", "");
        var element = $(".nav-pills").find(`a[href="${str}"]`).parent();
        element.addClass("active");
        $(".btn-back").click();
    });
    $(".close-popup").on("click", function () {
        $("body").addClass("hidden-popup");
        $("body").addClass("hide_section");
        $("body").addClass("hidden_obligation_popup");
        $("body").addClass("hidden_application_sub_popup");
        $("body").addClass("hidden_application_popup");
        $("body").addClass("hidden_submission_popup");
        $("body").addClass("hidden_planning_condition_popup");
    });
    $(".add-action").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden-popup");
    });
    $("#shareholder_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_obligation_popup");
    });
    $(".save_btn").on("click", function () {
        $("body").addClass("hide_section");
        $("body").addClass("hidden_obligation_popup");
        $("body").addClass("hidden_application_sub_popup");
        $("body").addClass("hidden_planning_condition_popup");

    });
    $(".app_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_application_popup");
    });
    $(".sub_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_submission_popup");
    });
    $(".app_sub_popup_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_application_sub_popup");
    });
    $("#planning_condition_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_planning_condition_popup");
    });



});