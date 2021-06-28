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
        $("body").addClass("hidden_create_fund_popup");
        $("body").addClass("hidden_edit_fund_popup");
        $("body").addClass("hidden_delete_fund_popup");
        $("body").addClass("hidden_create_new_valuation_popup");

    });
    $(".add-action").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden-popup");

    });
    $(".monitor_contact_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hiddden_contact_detail_popup");
    });
    $(".monitor_cost_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_costs_summary_popup");
    });
    $(".monitor_initial_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_initial_report_popup");
    });
    $(".monitor_valuation_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_valuation1_popup");
    });
    $(".close-party_detail").on("click", function () {
        $("body").addClass("hide_section");
        $("body").addClass("hiddden_contact_detail_popup");
        $("body").addClass("hidden_costs_summary_popup");
        $("body").addClass("hidden_initial_report_popup");
        $("body").addClass("hidden_valuation1_popup");
    });
    $(".upload_doc_btn").on("click", function () {
        console.log("upload btn clicked")
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_uploaddoc_popup");
    });
    $(".close_upload_btn").on("click", function () {
        $("body").addClass("hide_section");
        $("body").addClass("hidden_uploaddoc_popup");
    });
    $(".save_btn").on("click", function () {
        $("body").addClass("hide_section");
        $("body").addClass("hidden_uploaddoc_popup");
        $("body").addClass("hidden_create_fund_popup");
        $("body").addClass("hidden_edit_fund_popup");
        $("body").addClass("hidden_delete_fund_popup");
        $("body").addClass("hidden_create_new_valuation_popup");
    });
    $(".create_funder_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_create_fund_popup");
    });
    $(".edit_funder_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_edit_fund_popup");
    });
    $(".delete_funder_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_delete_fund_popup");
    });
    $(".add_valuation_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_create_new_valuation_popup");
    })
});