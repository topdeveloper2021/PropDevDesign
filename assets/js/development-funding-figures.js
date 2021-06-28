$(document).ready(function () {
    $('span.sidebar-normal').on("click", function () {
        //show popups
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
        $("body").addClass("hide_section");
        $("body").addClass("hidden-popup");
        $("body").addClass("hidden_add_lease");
        $("body").addClass("hidden_precedents_detail_popup");
        $("body").addClass("hidden_option_popup");
        $("body").addClass("hidden_create_fund_popup");
        $("body").addClass("hidden_edit_fund_popup");
        $("body").addClass("hidden_delete_fund_popup");
        $("body").addClass("hidden_create_valuation_popup");
        $("body").addClass("hidden_edit_valuation_popup");
        $("body").addClass("hidden_delete_valuation_popup");
        $("body").addClass("hidden_create_party_popup");
        $("body").addClass("hidden_edit_party_popup");
        $("body").addClass("hidden_delete_party_popup");
        $("body").addClass("hidden_new_facility_popup");

    });
    $(".open-popup").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden-popup");
    });
    $(".add-action").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden-popup");
    });
    $(".bank_detail_icon").on("click", function () {
        console.log("click")
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_bank_valuation");
    });
    $("#select_option_btn").on("click", function () {
        console.log("click")
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_option_popup");
    });
    $(".save_btn").on("click", function () {
        console.log("click")
        $("body").addClass("hide_section");
        $("body").addClass("hidden_option_popup");
        $("body").addClass("hidden_bank_valuation");
        $("body").addClass("hidden_precedents_detail_popup");
        $("body").addClass("hidden_create_fund_popup");
        $("body").addClass("hidden_edit_fund_popup");
        $("body").addClass("hidden_delete_fund_popup");
        $("body").addClass("hidden_create_valuation_popup");
        $("body").addClass("hidden_edit_valuation_popup");
        $("body").addClass("hidden_delete_valuation_popup");
        $("body").addClass("hidden_create_party_popup");
        $("body").addClass("hidden_edit_party_popup");
        $("body").addClass("hidden_delete_party_popup");
        $("body").addClass("hidden_new_facility_popup");
    });
    $(".new_facility_btn").on("click", function () {
        $("body").removeClass("hidden_new_facility_popup");
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
    $(".create_valuation_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_create_valuation_popup");
    });
    $(".edit_valuation_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_edit_valuation_popup");
    });
    $(".delete_valuation_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_delete_valuation_popup");
    });

    $(".create_party_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_create_party_popup");
    });
    $(".edit_party_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_edit_party_popup");
    });
    $(".delete_party_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_delete_party_popup");
    });
    $(".close-valuation").on("click", function () {
        console.log("click")
        $("body").addClass("hide_section");
        $("body").addClass("hidden_bank_valuation");
    });
    $(".overview_close").on("click", function () {
        $("#overview_description").hide();
    });
    $(".partner_close").on("click", function () {
        $("#partner_description").hide();
    });
    $(".valuation_close1").on("click", function () {
        $("#valuation_description1").hide();
    });
    $(".valuation_close2").on("click", function () {
        $("#valuation_description2").hide();
    });
    $(".venture_close1").on("click", function () {
        $("#venture_description1").hide();
    });
    $(".venture_close2").on("click", function () {
        $("#venture_description2").hide();
    });
    $(".management_close").on("click", function () {
        $("#management_description").hide();
    });
    $(".party_detail_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_party_popup");

    });
    $(".close-party_detail").on("click", function () {
        $("body").addClass("hide_section");
        $("body").addClass("hidden_party_popup");
        $("body").addClass("hidden_DMA_popup");
        $("body").addClass("hidden_contact_popup");
        $("body").addClass("hidden_facility_popup");
        $("body").addClass("hidden_convenants_popup");
        $("body").addClass("hidden_precedents_popup");
    });
    $(".dma_popup_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_DMA_popup");

    });
    $(".contact_detail_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_contact_popup");

    });
    $(".facility_detail_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_facility_popup");

    });
    $(".banking_convenants_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_convenants_popup");

    });
    $(".conditions_precedents_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_precedents_popup");

    });
    $(".view-popup").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_precedents_detail_popup");

    });
})