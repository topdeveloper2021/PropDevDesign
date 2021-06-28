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
        $("body").addClass("hidden_category_popup");
        $("body").addClass("hidden_uploadfile_popup");
        $("body").addClass("hidden_insurance_popup");
        $("body").addClass("hidden_choose_utility_popup");
        $("body").addClass("hidden_utility_file_upload");
        $("body").addClass("hidden_ldi_provider_popup");
        $("body").addClass("hidden_plot_management_popup");
        $("body").addClass("hidden_section_agreement_popup");

    });
    $(".add-action").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden-popup");
    });
    $(".add_category").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_category_popup");
    })
    $(".save_btn").on("click", function () {
        $("body").addClass("hide_section");
        $("body").addClass("hidden_category_popup");
        $("body").addClass("hidden_uploadfile_popup");
        $("body").addClass("hidden_insurance_popup");
        $("body").addClass("hidden_choose_utility_popup");
        $("body").addClass("hidden_utility_file_upload");
        $("body").addClass("hidden_ldi_provider_popup");
        $("body").addClass("hidden_plot_management_popup");
        $("body").addClass("hidden_section_agreement_popup");

    });
    $(".add_new_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_uploadfile_popup");
    });
    $(".architecture_table").find('tr >td:not(:first-child)').on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_uploadfile_popup");
    });
    $(".add_insurance_policy").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_insurance_popup");
    });
    $(".add_utility_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_choose_utility_popup");
    });
    $(".utility_upload_btn").on("click", function () {
        console.log("click");
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_utility_file_upload");
    });
    $(".plot_management_btn").on("click", function () {
        console.log("click");
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_plot_management_popup");
    });
    $(".ldi_provider_btn").on("click", function () {
        console.log("click");
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_ldi_provider_popup");
    });
    $(".section_agreement_btn").on("click", function () {
        console.log("click");
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_section_agreement_popup");
    });
    $(".architecture_btn").on("click", function () {
       document.location="../Frontend/development-development-management-architecture.htm"
    });
});