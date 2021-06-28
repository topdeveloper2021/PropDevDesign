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
        $("body").addClass("hidden_electric_management_popup");
        $("body").addClass("hidden_gas_management_popup");
        $("body").addClass("hidden_water_management_popup");
        $("body").addClass("hidden_customer_care_popup");
        $("body").addClass("hidden_utility_file_upload");
        $("body").addClass("hidden_specification_popup");
        $("body").addClass("hidden_shareholder");
        $("body").addClass("hidden_director");
    });
    $(".save_btn").on("click", function () {
        $("body").addClass("hide_section");
        $("body").addClass("hidden_electric_management_popup");
        $("body").addClass("hidden_gas_management_popup");
        $("body").addClass("hidden_water_management_popup");
        $("body").addClass("hidden_customer_care_popup");
        $("body").addClass("hidden_utility_file_upload");
        $("body").addClass("hidden_specification_popup");
        $("body").addClass("hidden_shareholder");
        $("body").addClass("hidden_director");
    });
    $(".add-action").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden-popup");
    });
    $(".sales_agent_detail_btn").on("click", function () {
        document.location="../Frontend/development-sales-agent-details.htm";
    });
    $(".sales_completion_detail_btn").on("click", function () {
        document.location="../Frontend/development-sales-completion-details.htm";
    });
    $(".pricing_detail").find('tr >td:not(:first-child)').on("click", function () {
        document.location="../Frontend/development-sales-detail-schedule.htm";
    });
    $(".electric_management_table").find('tr >td:not(:first-child)').on("click", function () {
        console.log("row clicked");
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_electric_management_popup");
    });
    $(".gas_management_table").find('tr >td:not(:first-child)').on("click", function () {
        console.log("row clicked");
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_gas_management_popup");
    });
    $(".water_management_table").find('tr >td:not(:first-child)').on("click", function () {
        console.log("row clicked");
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_water_management_popup");
    });
    $(".customer_care_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_customer_care_popup");
    });
    $(".customer_care_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_specification_popup");
    });
    $(".land_purchase_detail_btn").on("click", function () {
        document.location="../Frontend/development-sales-purchaser-details.htm"
    });
    $("#build_cert").find("td.orange_color").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_utility_file_upload");
    });
    $(".specification_popup_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_specification_popup");
    });
    $(".sales_shareholder_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_shareholder");
    });
    $(".sales_director_btn").on("click", function () {
        $("body").removeClass("hide_section");
        $("body").removeClass("hidden_director");
    });
})