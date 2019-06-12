let currentBrand,
  currentnModel,
  currentLamp,
  seatColor = "color3",
  colorDirection = "CERTUS_ciemnoszary-bialy",
  seatPrice,
  hidenBrand,
  assystSsak = false,
  curentDoctorTab = 0,
  modelNameString,
  modelTypeString,
  assystType,
  assystChoice,
  doctorTab1Type,
  doctorTab1Product,
  doctorTab1Price,
  doctorTab2Type,
  doctorTab2Product,
  doctorTab2Price,
  doctorTab3Type,
  doctorTab3Product,
  doctorTab3Price,
  doctorTab4Type,
  doctorTab4Product,
  doctorTab4Price,
  doctorTab5Type,
  doctorTab5Product,
  doctorTab5Price;


const certusSeatPrice = "29000",
      eximaSeatPrice = "22500";
      modelNEO = "29000",
      modelMAX = "22500",
      modelSTANDART = "29000",
      checkSign = "icon-icon_check";


const certus_neo = {
    panel_lekarza: "<img src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_lekarza_certus_neo.png\" alt=\"\">",
    panel_asysty: "<img src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_asysty_exima_neo.png\" alt=\"\">",
    panel_asysty_numbers: "<img src=\"/wp-content/themes/makromed/konfigurator/img/assyst-step2@2x.png\">"
  },

  certus_max = {
    panel_lekarza: "<img src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_lekarza_certus_max.png\" alt=\"\">",
    panel_asysty: "<img src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_asysty_certus_max.png\" alt=\"\">",
    panel_asysty_numbers: "<img src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_asysty_certus_max_numbers@2x.png\">"
  },

  certus_standard = {
    panel_lekarza: "<img src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_lekarza_certus_standard.png\" alt=\"\">",
    panel_asysty: "<img src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_asysty_certus_standard.png\" alt=\"\">",
    panel_asysty_numbers: "<img src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_asysty_certus_standard_numbers@2x.png\">"
  },

  exima_neo = {
    panel_lekarza: "<img src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_lekarza_exima_neo.png\" alt=\"\">",
    panel_asysty: "<img src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_asysty_exima_neo.png\" alt=\"\">",
    panel_asysty_numbers: "<img src=\"/wp-content/themes/makromed/konfigurator/img/assyst-step2@2x.png\">"
  },

  exima_max = {
    panel_lekarza: "<img src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_lekarza_exima_max.png\" alt=\"\">",
    panel_asysty: "<img src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_asysty_exima_max.png\" alt=\"\">",
    panel_asysty_numbers: "<img src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_asysty_exima_max_numbers@2x.png\" alt=\"\">"
  },
  exima_x1g = {
    panel_lekarza: "<img class=\"small-panel\" src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_lekarza_exima_standard_x1g@2x.png\" alt=\"\">",
    panel_asysty: "<img class=\"small-panel\" src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_asysty_exima_standard_x1g.png\" alt=\"\">",
    panel_asysty_numbers: "<img src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_asysty_exima_standard_x1g@2x.png\" alt=\"\">"
  },

  exima_x1d = {
    panel_lekarza: "<img class=\"small-panel\" src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_lekarza_exima_standard_x1d@2x.png\" alt=\"\">",
    panel_asysty: "<img class=\"small-panel\" src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_asysty_exima_standard_x1d.png\" alt=\"\">",
    panel_asysty_numbers: "<img class=\"small-panel\" src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_asysty_exima_standard_x1d@2x.png\" alt=\"\">"
  };





$(document).ready(function () {

  $('.nav-tabs > li').click(function (event) {
    event.preventDefault();

    var active_tab_selector = $('.nav-tabs > li.active').attr('id');
    var actived_nav = $('.nav-tabs > li.active');
    actived_nav.removeClass('active');

    $(this).addClass('active');
    $(active_tab_selector).removeClass('active');
    $(active_tab_selector).addClass('hide');
    var target_tab_selector = $(this).attr('id');
    $(target_tab_selector).removeClass('hide');
    $(target_tab_selector).addClass('active');
    var getTabId = $(this).text().toLowerCase();
    changeCurrentCongig(getTabId);
  });


  // Popup 

  $(".see-360").click(function () {
    let seatId = $(this).attr('id');
    $(".pop-up#" + seatId).css("display", "flex");
    if (seatId === "seat-certus") {
      inject_orbitvu('CERTUS_ciemnoszary-ciemnoszary-1283136100', '/wp-content/themes/makromed/konfigurator/orbitvu12_basic//orbitvuer12.swf', '/wp-content/themes/makromed/konfigurator/orbitvu12_basic//expressInstall.swf', {
        ovus_folder: "/seat-360/CERTUS_ciemnoszary-ciemnoszary/",
        content2: "yes",
        width: "650",
        height: "650"
      });
    } else if (seatId === "seat-exima") {
      inject_orbitvu('Exima_niebieski-1658327094', '/wp-content/themes/makromed/konfigurator/orbitvu12_basic//orbitvuer12.swf', '/wp-content/themes/makromed/konfigurator/orbitvu12_basic//expressInstall.swf', {
        ovus_folder: "/seat-360/Exima_niebieski/",
        content2: "yes",
        width: "650",
        height: "650"
      });
    }

  });



  //CLOSE POP UP

  $(".close-pop-up").click(function () {
    $(".pop-up").css("display", "none");
  });






  $(".seat-model").click(function () {
    console.log('click');
    $(".seat-model > span").removeClass(checkSign);

    var signPlace = $(this).children("span").hasClass("certus-seat");
    $(".current-config-right").empty();
    $(currentBrand).hide();
    $(".block-colorified-seats").hide();
    if (signPlace) {
      currentBrand = ".certus";
      
      $(".current-config-right").append("<img src=\"/wp-content/themes/makromed/konfigurator/img/certus-logo.png\" alt=\"\" class=\"logo-img\" style=\"width:77px\">");
      $(".certus-seat").parent("button").empty().append("WYBRANO<span class=\"choose-seat-sign icon-icon_check certus-seat\"></span>");
      $(".brand-exima-wrapper .choose-button-place button").empty().append("WYBIERAM<span class=\"choose-seat-sign exima-seat\"></span>");
      $(".certus-seat").addClass(checkSign);
      // $(".brand-choose-sidebar .brand-summary")


    } else {
      currentBrand = ".exima";

      $(".exima-seat").addClass(checkSign);
      $(".current-config-right").append("<img src=\"/wp-content/themes/makromed/konfigurator/img/exima-logo@2x.png\" alt=\"\" class=\"logo-img\" style=\"width:77px\">");
      $(".exima-seat").parent("button").empty().append("WYBRANO<span class=\"choose-seat-sign icon-icon_check exima-seat\"></span>");
      $(".brand-certus-wrapper .choose-button-place button").empty().append("WYBIERAM<span class=\"choose-seat-sign certus-seat\"></span>");
    }



    $(".step-1-button").addClass("nextStepActive");
  });


















  $("#tab2 .model-type").click(function () {
    $("#tab2 .model-type > span").removeClass(checkSign);
    $(".doctor-panel-img").empty();
    $(".assyst-content-wrapper img").remove();
    $(".assyst-step2-content img").remove();

    // $(".choose-color").css("display","none")
    $(".lacquer-type-wrapper").css("display","none");

    let objChild = $(this).children("span");
    $(currentBrand + "-brand-color.block-colorified-seats").hide();
    $(".see-360-color").hide();
    $(".model-color-place").empty();

    seatPrice = $(this).attr("data-price");

    if (objChild.hasClass("certus-neo")) {
      $(".certus-neo").addClass(checkSign);
      $(".doctor-panel-img").append(certus_neo.panel_lekarza);
      $(".assyst-content-wrapper").append(certus_neo.panel_asysty);
      $(".assyst-step2-content").append(certus_neo.panel_asysty_numbers);
      $(".lacquer-type-wrapper").css("opacity", "1");
      $(".lacquer-type-wrapper").css("pointer-events", "all");
      $(".certus-neo").parent("button").empty().append("WYBRANO<span class=\"choose-seat-sign icon-icon_check certus-neo\"></span>");
      $(".certus-max").parent("button").empty().append("WYBIERAM<span class=\"choose-seat-sign certus-max\"></span>");
      $(".certus-standart").parent("button").empty().append("WYBIERAM<span class=\"choose-seat-sign certus-standart\"></span>");

      $(currentBrand + "-brand-color.block-colorified-seats").show();
      $(".model-color-place").hide();

      currentnModel = ".certus-neo";


      $(".choose-color").css("display","flex");
      $(".lacquer-type-wrapper").css("display","flex");

      $('.see-360-color').show()


      

    } else if (objChild.hasClass("certus-max")) {
      $(".certus-max").addClass(checkSign);
      $(".doctor-panel-img").append(certus_max.panel_lekarza);
      $(".assyst-content-wrapper").append(certus_max.panel_asysty);
      $(".assyst-step2-content").append(certus_max.panel_asysty_numbers);
      $(".lacquer-type-wrapper").css("opacity", "1");
      $(".lacquer-type-wrapper").css("pointer-events", "all");
      $(".certus-max").parent("button").empty().append("WYBRANO <span class=\"choose-seat-sign icon-icon_check certus-max\"></span>");
      $(".certus-neo").parent("button").empty().append("WYBIERAM <span class=\"choose-seat-sign certus-neo\"></span>");
      $(".certus-standart").parent("button").empty().append("WYBIERAM<span class=\"choose-seat-sign certus-standart\"></span>");


      $(".model-color-place").show();
      $(".model-color-place").append("<img style=\'width:400px\' src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_komplet_certus_max@2x.png\">");

      currentnModel = ".certus-max";

    } else if (objChild.hasClass("certus-standart")) {
      $(".certus-standart").addClass(checkSign);
      $(".doctor-panel-img").append(certus_standard.panel_lekarza);
      $(".assyst-content-wrapper").append(certus_standard.panel_asysty);
      $(".assyst-step2-content").append(certus_standard.panel_asysty_numbers);
      $(".attention-block-wrapper").css("display", "block");
      $(".certus-standart").parent("button").empty().append("WYBRANO <span class=\"choose-seat-sign icon-icon_check certus-standart\"></span>");
      $(".certus-neo").parent("button").empty().append("WYBIERAM <span class=\"choose-seat-sign certus-neo\"></span>");
      $(".certus-max").parent("button").empty().append("WYBIERAM <span class=\"choose-seat-sign certus-max\"></span>");



      $(".model-color-place").show();
      $(".model-color-place").append("<img style=\'width:400px\' src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_komplet_certus_standard@2x.png\">");

      currentnModel = ".certus-standart";



    } else if (objChild.hasClass("exima-neo")) {
      $(".exima-neo").addClass("icon-icon_check");
      $(".doctor-panel-img").append(exima_neo.panel_lekarza);
      $(".assyst-content-wrapper").append(exima_neo.panel_asysty);
      $(".assyst-step2-content").append(exima_neo.panel_asysty_numbers);
      $(".exima-neo").parent("button").empty().append("WYBRANO <span class=\"choose-seat-sign icon-icon_check exima-neo\"></span>");
      $(".exima-max").parent("button").empty().append("WYBIERAM <span class=\"choose-seat-sign exima-max\"></span>");
      $(".exima-x1g").parent("button").empty().append("WYBIERAM <span class=\"choose-seat-sign exima-x1g\"></span>");
      $(".exima-x1d").parent("button").empty().append("WYBIERAM <span class=\"choose-seat-sign exima-x1d\"></span>");


      $(currentBrand + "-brand-color.block-colorified-seats").show();
      $(".model-color-place").hide();

      $(".choose-color").css("display","flex");
      $(".lacquer-type-wrapper").css("display","flex");
      currentnModel = ".exima-neo";
      $(".see-360-color").show();


    } else if (objChild.hasClass("exima-max")) {
      $(".exima-max").addClass("icon-icon_check");
      $(".doctor-panel-img").append(exima_max.panel_lekarza);
      $(".assyst-content-wrapper").append(exima_max.panel_asysty);
      $(".assyst-step2-content").append(exima_max.panel_asysty_numbers);
      $(".exima-max").parent("button").empty().append("WYBRANO <span class=\"choose-seat-sign icon-icon_check exima-max\"></span>");
      $(".exima-neo").parent("button").empty().append("WYBIERAM <span class=\"choose-seat-sign exima-neo\"></span>");
      $(".exima-x1g").parent("button").empty().append("WYBIERAM <span class=\"choose-seat-sign exima-x1g\"></span>");
      $(".exima-x1d").parent("button").empty().append("WYBIERAM <span class=\"choose-seat-sign exima-x1d\"></span>");


      

      $(".model-color-place").show();
      $(".model-color-place").append("<img style=\'width:400px\' src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_komplet_exima_max@2x.png\">");

      currentnModel = ".exima-max";

    } else if (objChild.hasClass("exima-x1g")) {
      $(".exima-x1g").addClass("icon-icon_check");
      $(".doctor-panel-img").append(exima_x1g.panel_lekarza);
      $(".assyst-content-wrapper").append(exima_x1g.panel_asysty);
      $(".assyst-step2-content").append(exima_x1g.panel_asysty_numbers);
      $(".exima-x1g").parent("button").empty().append("WYBRANO <span class=\"choose-seat-sign icon-icon_check exima-x1g\"></span>");
      $(".exima-neo").parent("button").empty().append("WYBIERAM <span class=\"choose-seat-sign exima-neo\"></span>");
      $(".exima-max").parent("button").empty().append("WYBIERAM <span class=\"choose-seat-sign exima-max\"></span>");
      $(".exima-x1d").parent("button").empty().append("WYBIERAM <span class=\"choose-seat-sign exima-x1d\"></span>");


      $(".model-color-place").show();
      $(".model-color-place").append("<img class=\"small-panel\" style=\'width:400px\' src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_komplet_exima_standard_x1g@2x.png\">");

      currentnModel = ".exima-x1g";

    } else if (objChild.hasClass("exima-x1d")) {
      $(".exima-x1d").addClass("icon-icon_check");
      $(".doctor-panel-img").append(exima_x1d.panel_lekarza);
      $(".assyst-content-wrapper").append(exima_x1d.panel_asysty);
      $(".assyst-step2-content").append(exima_x1d.panel_asysty_numbers);
      $(".exima-x1d").parent("button").empty().append("WYBRANO <span class=\"choose-seat-sign icon-icon_check exima-x1d\"></span>");
      $(".exima-neo").parent("button").empty().append("WYBIERAM <span class=\"choose-seat-sign exima-neo\"></span>");
      $(".exima-x1g").parent("button").empty().append("WYBIERAM <span class=\"choose-seat-sign exima-x1g\"></span>");
      $(".exima-max").parent("button").empty().append("WYBIERAM <span class=\"choose-seat-sign exima-max\"></span>");


      $(".model-color-place").show();
      $(".model-color-place").append("<img class=\"small-panel\" style=\'width:400px\' src=\"/wp-content/themes/makromed/konfigurator/img/img_panel_komplet_exima_standard_x1d@2x.png\">");


      currentnModel = ".exima-x1d";

    }


    if (currentnModel !== ".certus-neo" || currentnModel !== ".exima-neo") {
      $(".lacquer-type-wrapper").css("opacity", ".5");
      $(".lacquer-type-wrapper").css("pointer-events", "none");
      $('.color-attantion').css("display", "flex")
    }

    a("#tab2", "#tab2 .price-summary span");


      a("body", ".price-numbers-up", ".price-number");

    $(".step-2-button").addClass("nextStepActive");

  });






$("#tab5 button.tab1-card-button").click(function(){
  
});



















  $(".step-back-button").click(function () {
    var active_tab_selector = $('.nav-tabs > li.active').attr('id');
    var actived_nav = $('.nav-tabs > li.active');
    var nextTab = $(".sidebar-li-list.active").prev();
    nextTab.addClass("visitedTab");
    actived_nav.removeClass('active');
    $(nextTab).addClass('active');
    $(active_tab_selector).removeClass('active');
    $(active_tab_selector).addClass('hide');
    var target_tab_selector = $(nextTab).attr('id');
    $(target_tab_selector).removeClass('hide');
    $(target_tab_selector).addClass('active');
    let getTabId = $(".sidebar-li-list.active").text();

    changeCurrentCongig(getTabId);
  });








  $(".button-to-go").click(function () {
    if ($(this).hasClass("nextStepActive")) {
      var active_tab_selector = $('.nav-tabs > li.active').attr('id');
      var actived_nav = $('.nav-tabs > li.active');
      var nextTab = $(".sidebar-li-list.active").next();
      nextTab.addClass("visitedTab");
      actived_nav.removeClass('active');
      $(nextTab).addClass('active');
      $(active_tab_selector).removeClass('active');
      $(active_tab_selector).addClass('hide');
      var target_tab_selector = $(nextTab).attr('id');
      $(target_tab_selector + " .model-card-cover" + currentBrand).show();
      $(target_tab_selector + " " + currentBrand).css("display", "flex");
      $(target_tab_selector).removeClass('hide');
      $(target_tab_selector).addClass('active');

      let getTabId = $(".sidebar-li-list.active").text();
      changeCurrentCongig(getTabId);
    }
  });






  $(".choose-the-color").click(function () {
    $('.choose-the-color').children("span").removeClass("icon-icon_check");
    $(".choose-the-color.color-seat").removeClass('color-active');
    $("#" + $(this).attr("id")).children("span").addClass("icon-icon_check");
    $('.choose-the-color.color-seat#' + $(this).attr("id")).children("span").addClass("icon-icon_check");
    $('.choose-the-color.color-seat#' + $(this).attr("id")).addClass('color-active');
    $(".step-3-button").addClass("nextStepActive");


    $(".color-img").hide();
    seatColor = $(this).attr("id");


    if ($("img#" + seatColor).hasClass("hide-me")) {
      $("img#" + seatColor).hide();
      $("img#" + seatColor + ".with-tapicerka").show();

    } else {
      $("img#" + seatColor + ".with-tapicerka").hide();
      $("img#" + seatColor).show();

    }

    $("label.color-white").prev().prop("checked", true);

    if(currentBrand === ".certus"){
      colorDirection = $(this).attr("data-direct-certus")
      
    } else if (currentBrand === ".exima"){
      colorDirection = $(this).attr("data-direct-exima");
      console.log(colorDirection)
    }

    if (currentnModel === ".certus-neo" || currentnModel === ".exima-neo") {
      if ($(this).hasClass("no-such-color")) {
        $(".lacquer-type-wrapper").css("opacity", ".5");
        $(".lacquer-type-wrapper").css("pointer-events", "none");
        $('.color-attantion').css("display", "flex")
      } else {
        $(".lacquer-type-wrapper").css("opacity", "1");
        $(".lacquer-type-wrapper").css("pointer-events", "all");
        $('.color-attantion').hide();
      }
    }

    

  });





  $(".color-color").click(function () {
    if (currentBrand === ".certus") {
      $("img#" + seatColor).hide();
      
      

      if (seatColor.length === 8 || seatColor.length === 9) {

      } else {
        seatColor += "_w"
      }
      $("img#" + seatColor).show();
    }

  });

  $(".color-white").click(function () {
    $("img#" + seatColor).hide();
    
    
    if (seatColor.length === 8) {
      seatColor = seatColor.substr("_w", 6);
    } else if (seatColor.length === 9) {
      seatColor = seatColor.substr("_w", 7);
    }

    $("img#" + seatColor).show();
  });











  //COLOR POP-UP
  $(".see-360-color").click(function () {
    
    $("#color-pop-up.pop-up").css("display", "flex");

      
      inject_orbitvu('pop-up-color', '/wp-content/themes/makromed/konfigurator/orbitvu12_basic//orbitvuer12.swf', '/wp-content/themes/makromed/konfigurator/orbitvu12_basic//expressInstall.swf', {
        ovus_folder: "/seat-360/" + colorDirection + "/",
        content2: "yes",
        width: "650",
        height: "650"
      });

  });

  $(".doctor-panel1").click(function () {
    $(".doctor-panel-title").hide();
    $(".doctor-panel-top").hide();
    $(".doctor-panel-row").hide();
    $(".start-here-img").hide();
    $(".doctor-tab-1").show();
    $(".doctor-choice-icon1").addClass("icon-icon_loading");
    curentDoctorTab = 1;
  });

  $(".tab1-cancel").click(function () {
    $(".doctor-tab-1").hide();
    $(".doctor-tab-2").hide();
    $(".doctor-panel-title").show();
    $(".doctor-panel-top").show();
    $(".doctor-panel-row").show();
  });


  var panel_lekarza_tab1 = {
    "type": "Strzykawko-dmuchawkę",
    "brand": ""
  };


  $(".tab1-card-button").click(function () {
    $(".tab1-card-button").children('span').removeClass("icon-icon_check");
    $(this).children("span").addClass("icon-icon_check");
    panel_lekarza_tab1.name = $(this).parent().children(".tab1-card-title").text();
    $("p.brand-price.doctor-panel-choice.choice1").text(panel_lekarza_tab1.type);
    a("body", ".price-number");
      a("#tab5", "#tab5 .price-summary span");
    doctorTab1Product = $(this).parent().children(".tab1-card-title").text();
    doctorTab1Price = $(this).attr('data-price')
  });

  $(".tab1-accept").click(function () {
    $(".doctor-tab-1").hide();
    $(".doctor-tab-2").hide();
    $(".doctor-panel-title").show();
    $(".doctor-panel-top").show();
    $(".doctor-panel-row").show();
    let w = curentDoctorTab.toString();
    $(".doctor-choice-icon" + w + " .choosen-brand-sign").removeClass("icon-icon_loading");
    $(".doctor-choice-icon" + w).addClass("icon-icon_check");
    $(".doctor-panel-title").show();
    $(".panel-card-cover.d-panel1 .panel-span").addClass(checkSign);
    $(".d-panel1 .panel-card-title").text("Wybrano");
    $(".panel-result-1").text("Strzykawko-dmuchawka")


  });



  $(".dt2").click(function () {
    $(".doctor-panel-top").hide();
    $(".doctor-panel-row").hide();
    $(".doctor-panel-title").hide();
    $(".start-here-img").hide();
    $(".doctor-tab-2").show();
  });

  $(".dt3").click(function () {
    $(".doctor-panel-top").hide();
    $(".doctor-panel-row").hide();
    $(".doctor-panel-title").hide();
    $(".start-here-img").hide();
    $(".doctor-tab-3").show();
  });

  $(".dt4").click(function () {
    $(".doctor-panel-top").hide();
    $(".doctor-panel-row").hide();
    $(".doctor-panel-title").hide();
    $(".start-here-img").hide();
    $(".doctor-tab-4").show();
  });



  $(".doctor-panel2").click(function () {
    $(".doctor-choice-icon2").addClass("icon-icon_loading");
    curentDoctorTab = 2;
  });

  $(".doctor-panel3").click(function () {
    $(".doctor-choice-icon3").addClass("icon-icon_loading");
    curentDoctorTab = 3;
  });


  $(".doctor-panel4").click(function () {
    $(".doctor-choice-icon4").addClass("icon-icon_loading");
    curentDoctorTab = 4;
  });


  $(".doctor-panel5").click(function () {
    $(".doctor-choice-icon5").addClass("icon-icon_loading");
    curentDoctorTab = 5;
  });



  $("#Mikrosilnik .checkbox-card label").click(function () {
    modelTypeString = "Mikrosilnik";
    modelNameString = $(this).parent().find("label").text();

  });

  $("#Skaler .checkbox-card label").click(function () {
    modelTypeString = "Skaler";
    modelNameString = $(this).parent().find("label").text();


  });

  $("#Turbina .checkbox-card label").click(function () {
    modelTypeString = "Turbina";
    modelNameString = $(this).parent().find("label").text();

  });

  $("#Piaskarka .checkbox-card label").click(function () {
    modelTypeString = "Piaskarka";
    modelNameString = $(this).parent().find("label").text();

  });

  $("#Lampa-pol .checkbox-card label").click(function () {
    modelTypeString = "Lampa polimeryzacyjna";
    modelNameString = $(this).parent().find("label").text();

  });


  // 7855

  $("button.tab2-accept").click(function () {
    $(".doctor-tab-" + curentDoctorTab).hide();
    $("#type-katnica").hide();
    $(".mikrosilnik-elektric").hide();
    $(".tab2-button-place button").removeClass("button-blue");
    $(".main-panel-wrapper").hide();
    $(".doctor-panel-title").show();
    $(".doctor-panel-top").show();
    $(".doctor-panel-row").show();
    let w = curentDoctorTab.toString();
    $(".doctor-choice-icon" + w + " .choosen-brand-sign").removeClass("icon-icon_loading");
    $(".doctor-choice-icon" + w).addClass("icon-icon_check");
    $(".d-panel" + w + " .panel-span").addClass(checkSign);
    $(".d-panel" + w + " .panel-card-title").text("Wybrano");
    $(".p-doctor-model-" + w).text(modelNameString);
    $(".p-doctor-type-" + w).text(modelTypeString);
    $(".panel-result-" + w).text(modelTypeString);
    $(".tab2-accept").hide();
    $(".katnica-wrapper").hide();
    $(".mikro-light-choose").hide();
    $(".mikrosilnik").hide();
    $(".pneumatic-light-on").hide();
    $(".pneumatic-light-off,.turbina-attention-icon").hide();

    if (curentDoctorTab === 2) {
      doctorTab2Product = $("input[name='tab2-value']:checked").next().text() + $("input[name='tab2-katnica-value']:checked").next().text() ;
      doctorTab2Price = $("input[name='tab" + curentDoctorTab + "-value']:checked").next().attr("data-price");
      
    } else if (curentDoctorTab === 3) {
      doctorTab3Product = $("input[name='tab" + curentDoctorTab + "-value']:checked").next().text();
      doctorTab3Price = $("input[name='tab" + curentDoctorTab + "-value']:checked").next().attr("data-price");
    } else if (curentDoctorTab === 4) {
      doctorTab4Product = $("input[name='tab" + curentDoctorTab + "-value']:checked").next().text();
      doctorTab4Price = $("input[name='tab" + curentDoctorTab + "-value']:checked").next().attr("data-price");
    } else if (curentDoctorTab === 5) {
      doctorTab5Product = $("input[name='tab" + curentDoctorTab + "-value']:checked").next().text();
      doctorTab5Price = $("input[name='tab" + curentDoctorTab + "-value']:checked").next().attr("data-price");
    }


  });


// function calcPrice() {
//   var price = 0;
//   $('input:checked, button .icon-icon_check').each(function() {
//     if($(this).is('input')) {
//       var el = $(this);
//     } else {
//       var el = $(this).closest('button');
//     }

//     if($.isNumeric(el.attr('data-price'))) {  
//       price = price + parseFloat(el.attr('data-price'));
//       $(".price-number").text(price)
//     }
//   });

  
// }
//   $('input').on('change', function () {
//     calcPrice();
//   });
//   $('button').on('click', function () {
//     calcPrice();
// });



  $("button.tab2-cancel").click(function () {
    $(".tab2-button-place button").removeClass("button-blue");
    $(".doctor-tab-" + curentDoctorTab).hide();
    $("#type-katnica").hide();
    $(".mikrosilnik-elektric").hide();
    $(".main-panel-wrapper").hide();
    $(".doctor-panel-title").show();
    $(".doctor-panel-top").show();
    $(".doctor-panel-row").show();
    $(".tab2-accept").hide();
    $(".main-panel-wrapper").hide();
    $(".doctor-choice-icon" + curentDoctorTab).removeClass("icon-icon_loading");
    $(".katnica-wrapper").hide();
    $(".mikro-light-choose").hide();
    $(".mikrosilnik").hide();
    $(".pneumatic-light-on").hide();
    $(".pneumatic-light-off").hide();
  });



  $(".tab5-continue").click(function () {
    let w = curentDoctorTab.toString();
    $(".doctor-choice-icon" + w).addClass("icon-icon_check");

    $(".doctor-tab-5").hide();
    $(".doctor-panel-title").show();
    $(".doctor-panel-top").show();
    $(".doctor-panel-row").show();
  })

});

$(".doctor-panel5").click(function () {
  $(".doctor-panel-top").hide();
  $(".doctor-panel-title").hide();
  $(".start-here-img").hide();
  $(".doctor-panel-row").hide();
  $(".doctor-tab-5").show()
});




// Function to make separators " " in final price


//function for refresh our price lebels
// function refreshPriceInfo(kindOfProduct) {
//   $(".pr").text(kindOfProduct);
// }




$(".additional-product-tab1").click(function () {
  $(".kompressors-tab").hide();
  $(".seat-and-additional").css("display", "flex");
});

$(".additional-product-tab2").click(function () {
  $(".seat-and-additional").hide();
  $(".kompressors-tab").css("display", "flex");
});




$(".lamp-type").click(function () {
  $(".lamp-type > span").removeClass("icon-icon_check");
  let lamp = $(this).attr("id");
  $(".lamp-price span").remove();
  var objChild = $(this).children("span");
  $(objChild).addClass("icon-icon_check");
  $('.lamp-type#' + $(this).attr("id")).children("span").addClass("icon-icon_check");
  $(".step-2-button").addClass("nextStepActive");
  $(".step-4-button").addClass("nextStepActive");

  

  if (lamp === "lamp1") {
    $("button#lamp1").empty().append("WYBRANO <span class=\"choose-seat-sign icon-icon_check\"></span>");
    $("button#lamp2").empty().append("WYBIERAM <span class=\"choose-seat-sign\"></sp>");
    $("button#lamp3").empty().append("WYBIERAM <span class=\"choose-seat-sign\"></span>");
    $("button#lamp4").empty().append("WYBIERAM <span class=\"choose-seat-sign\"></span>");
  } else if (lamp === "lamp2") {
    $("button#lamp2").empty().append("WYBRANO <span class=\"choose-seat-sign icon-icon_check\"></span>");
    $("button#lamp1").empty().append("WYBIERAM <span class=\"choose-seat-sign \"></span>");
    $("button#lamp3").empty().append("WYBIERAM <span class=\"choose-seat-sign \"></span>");
    $("button#lamp4").empty().append("WYBIERAM <span class=\"choose-seat-sign \"></span>");
  } else if (lamp === "lamp3") {
    $("button#lamp3").empty().append("WYBRANO <span class=\"choose-seat-sign icon-icon_check\"></span>");
    $("button#lamp2").empty().append("WYBIERAM <span class=\"choose-seat-sign \"></span>");
    $("button#lamp1").empty().append("WYBIERAM <span class=\"choose-seat-sign \"></span>");
    $("button#lamp4").empty().append("WYBIERAM <span class=\"choose-seat-sign \"></span>");
  } else if (lamp === "lamp4") {
    $("button#lamp4").empty().append("WYBRANO <span class=\"choose-seat-sign icon-icon_check\"></span>");
    $("button#lamp2").empty().append("WYBIERAM <span class=\"choose-seat-sign\"></span>");
    $("button#lamp3").empty().append("WYBIERAM <span class=\"choose-seat-sign\"></span>");
    $("button#lamp1").empty().append("WYBIERAM <span class=\"choose-seat-sign\"></span>");
  }

  currentLamp = lamp;
});





$("#tab6 .tab2-accept").click(function () {
  $(".choose-assyst-product").hide();
  $(".assyst-step2-content").show();
});

$("#tab6 .assyst-place").click(function () {
  if($(".assyst-place .assyst-span").hasClass("icon-icon_check")){
    $(".assyst-place .assyst-span").removeClass("icon-icon_check");
  } else{
    $(".assyst-place .assyst-span").removeClass("icon-icon_check");
    $(".assyst-place .assyst-span").addClass('icon-icon_check');
  }
  
});


$(".panel-checkbox-div").click(function () {
  $(".checkbox-card").removeClass("checkbox-card-active");
  $(this).parent().parent().addClass("checkbox-card-active");
});




// DOCTOR PANEL MINI-TABS
$(".doctor-panel-choice").click(function () {
  //UNCHECK TAB INPUTS WHEN CLICK ANOTHER MINI-TAB
  if (!$(this).hasClass("button-blue")) {
    let tabParent = $(this).parent().parent().attr("class");
    let w = $("." + tabParent + " input").prop('checked', false);
  }

  $(".tab2-accept").hide();
  // $(tabParent + " > input ").val(false)
  let panelTabID = $(this).attr("id");
  $(".doctor-panel-choice").removeClass("button-blue");
  $(this).addClass("button-blue");
  $(".main-panel-wrapper").hide();
  $(".main-panel-wrapper." + panelTabID).show();
  $(".turbina-attention").hide();
  $(".checkbox-card").removeClass("card-active");
  $(".turbina-with-light, .turbina-without-light").hide();
  $(".turbina-light-choose button").removeClass("button-blue");
  $(".skaler-light-choose, .skaler-el-light, .skaler-el-no-light, .skaler-pn-no-light, .skaler-attention-icon").hide();
  $(".skaler-button-place button").removeClass("button-blue");
});


$(".tab2-button.turbina").click(function () {
  $(".tab2-button.turbina").removeClass("button-blue");
  $(this).addClass("button-blue")
});


//MIKROSILNIK ELEKTRYCZNY CZY PNEUMATYCZNY
$(".mikrosilnik-type-button").click(function () {
  $(".mikro-light-choose").hide();
  $(".pneumatic-light-off").hide();
  $(".pneumatic-light-on").hide();
  $(".katnica-wrapper").hide();
  $('.mikrosilnik').hide();
  $(".mikrosilnik-type-button").removeClass("button-blue");
  $(".mikro-light-choose .tab2-button-place button").removeClass('button-blue');
  $(this).addClass("button-blue");

  var mikro_id = $(this).attr("id");

  if (mikro_id === "mikro-el") {
    $('.mikrosilnik-elektric').show();
    $(".mikro-attention-icon").hide();
  } else if (mikro_id === "mikro-pn") {
    $('.mikro-light-choose').show()
  }
});


$(".mikro-light-choose .tab2-button-place button").click(function () {
  let mikroLight = $(this).attr("id");
  $(".mikro-light-choose .tab2-button-place button").removeClass('button-blue');
  $(this).addClass("button-blue");
  $(".mikro-attention-icon").hide();
  $("#type-katnica, #type-prostnica").hide();
  $(".katnica-choose").removeClass('button-blue');

  if (mikroLight === "pneum-light") {
    $(".pneumatic-light-off").hide();
    $(".pneumatic-light-on").show()
  } else if (mikroLight === "pneum-no-light") {
    $(".pneumatic-light-on").hide();
    $(".pneumatic-light-off").show()
  }
});

var whatTheLight = 0;

//MIKROSILNIK i KATNICA  Z PODSWIETLENIEM CZY BEZ
$(".mikrosilnik .panel-checkbox-div").click(function () {
  let checkMikroLight = $(this).attr("id");

  // CLEANING THE KATNICA/PROSTNICA SECTION
  $(".katnica-choose .tab2-button").removeClass("button-blue");
  $("#without-light").hide();
  $("#with-light").hide();


  $(".katnica-wrapper").show();
  if (checkMikroLight === 'light-on') {
    whatTheLight = 1;
  } else if (checkMikroLight === 'light-off') {
    whatTheLight = 0;
  }
});

$(".pneumatic-mikrosilnik .panel-checkbox-div").click(function () {
  let checkMikroLight = $(this).attr("id");


  // CLEANING THE KATNICA/PROSTNICA SECTION
  $(".katnica-choose .tab2-button").removeClass("button-blue");
  $("#without-light").hide();
  $("#with-light").hide();


  $(".katnica-wrapper").show();
  if (checkMikroLight === 'light-on') {
    whatTheLight = 1;
  } else if (checkMikroLight === 'light-off') {
    whatTheLight = 0;
  }
});


// KATNICA OR PROSTNICA
$(".katnica-choose .tab2-button").click(function () {

  // $(".tab2-bottom-accept").hide();
  $(".katnica-choose .tab2-button").removeClass("button-blue");
  $(this).addClass("button-blue");

  let katn_prostn = $(this).attr('id');


  var parent = $(this).closest('.katnica-wrapper');


  if (katn_prostn === "katnica") {
    parent.find("#type-katnica").show();
    parent.find("#type-prostnica").hide();

    if (whatTheLight === 0) {
      parent.find("#without-light").show();
    } else if (whatTheLight === 1) {
      parent.find("#type-prostnica").hide();
      parent.find("#type-katnica").show();
      parent.find("#with-light.choose-to-continue").css("display", "flex");
    }
  } else if (katn_prostn === "prostnica") {
    parent.find("#with-light").hide();
    parent.find("#without-light").hide();
    if (whatTheLight === 0) {
      parent.find("#type-katnica").hide();
      parent.find("#type-prostnica").show();
      parent.find(".prostnica-without-light").css("display", "flex")
    }
  }
});

$(".tab-mikrosilnik .choose-to-continue .checkbox-card label").click(function () {
  $(".tab2-accept").show();
});

$(".tab-turbina  .checkbox-card label").click(function () {
  $(".tab2-accept").show();
});

$(".tab-skaler  .checkbox-card label").click(function () {
  $(".tab2-accept").show();
});

$(".tab-piaskarka  .checkbox-card label").click(function () {
  $(".tab2-accept").show();
});

$(".tab-polimer  .checkbox-card label").click(function () {
  $(".tab2-accept").show();
});


// TURBINA CHOOSE LIGHT
$(".turbina-light-choose button").click(function () {
  $(".turbina-light-choose button").removeClass('blue-button');
  $(this).addClass('blue-button');
  // $(".tab2-bottom-accept").hide();
  let turbinaId = $(this).attr("id");
  $(".turbina-with-light input,  .turbina-without-light input").prop("checked", false);
  $(".turbina-with-light .checkbox-card,  .turbina-without-light .checkbox-card").removeClass("checkbox-card-active");
  $(".tab2-accept").hide();

  if (turbinaId === "turbina-light") {
    $(".turbina-with-light").css("display", "flex");
    $(".turbina-without-light").hide();
    // $(".turbina-attention-icon").show();
    $(".turbina-attention.light-off-turbina.turbina-att-2").hide();
  } else {
    $(".turbina-with-light").hide();
    $(".turbina-without-light").css("display", "flex");
    $(".turbina-attention-icon").hide();
    $(".turbina-attention.light-turbina.turbina-att-1").hide();
  }
});

// SKALER TYPE
$(".tab-skaler .tab2-button-place button").click(function () {
  $(".tab-skaler .tab2-button-place button").removeClass("button-blue");
  $(this).addClass("button-blue");
  let skalerType = $(this).attr("id");


  if (skalerType === "skaler-el") {
    $(".skaler-light-choose").show();
    $(".skaler-pn-no-light").hide();
    $(".skaler-attention-icon").hide();
  } else {
    $(".skaler-light-choose").hide();
    $(".skaler-pn-no-light").css("display", "flex");
    $(".skaler-el-light").hide();
    $(".skaler-el-no-light").hide();
    $(".skaler-light-choose button").removeClass("button-blue");
  }
});


$(".skaler-pn-no-light label").click(function () {
  $(".skaler-attention-icon").show();
});



// SKALER LIGHT TYPE
$(".skaler-light-choose button").click(function () {
  let skalerLightType = $(this).attr('id');

  $(".skaler-light-choose button").removeClass("button-blue");
  $(this).addClass("button-blue");

  if (skalerLightType === "skaler-light") {
    $(".skaler-el-no-light").hide();
    $(".skaler-el-light").css("display", "flex");
  } else {
    $(".skaler-el-light").hide();
    $(".skaler-el-no-light").css("display", "flex");
  }
});


$(".turbina-with-light .turbina--light label").click(function () {
  $(".turbina-attention.light-turbina.turbina-att-1").css("display", "flex");
  $(".turbina-attention-icon").show();
});

$(".turbina-without-light .turbina--no label").click(function () {
  $(".turbina-attention.light-off-turbina.turbina-att-2").css("display", "flex");
  $(".turbina-attention.light-turbina.turbina-att-1").hide();
});

//Change Current Config Text
changeCurrentCongig = (tabName) =;> {
  $(".current-configuration").text(tabName)
}


$(".assyst-type-buttons button").click(function () {
  $(".assyst-type-buttons button").removeClass("button-blue");
  $(this).addClass("button-blue");

  let assyst_tab_id = $(this).attr('id');
  assystType = $(this).text();

  $(".assyst1-wrapper").hide();
  $("#" + assyst_tab_id + ".assyst1-wrapper").show();
});

$("#assyst-ssak .tab2-button-place .tab2-button").click(function () {
  $("#assyst-ssak .tab2-button-place .tab2-button").removeClass("button-blue");
  $(this).addClass("button-blue");
});


//CHOOSE TABS IN TAB 7
$(".tab7-mikro-tab").click(function () {
  let mikroTab = $(this).attr("id");
  $(".additional-tab").hide();
  $("#" + mikroTab + ".additional-tab").css("display", "flex");
});




$(".additional-product-close.icon-icon_close_small").click(function () {
  $(this).parent().css("display", "none");
});


$(".final-seat.seat1 .dodatki-button .seat-final").click(function () {
  let inputValue = $(this).parent().prev().children('input').val();
  

  if (inputValue && inputValue > 0) {
    $(this).parent().prev().children('input').css("border", "1px solid #81828E");
    if ($(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').removeClass("icon-icon_check");
      $(".additional-product-summary.rogal-element").css("display", "none");
      $(this).parent().prev().children('input').val("0");
    } else if (!$(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').addClass("icon-icon_check");
      $(".additional-product-summary.rogal-element .additional-product-amount").text(inputValue + ' szt');
      $(".additional-product-summary.rogal-element").css("display", "flex");
      let a = $(this).attr("data-singe-price") * inputValue;
      $(this).attr("data-price", a)
    }
  } else {
    $(this).parent().prev().children('input').css("border", "1px solid #B62830");
  }
});




$(".final-seat.seat2 .seat-final").click(function () {
  let inputValue = $(this).parent().prev().children('input').val();


  if (inputValue && inputValue > 0) {
    $(this).parent().prev().children('input').css("border", "1px solid #81828E");
    if ($(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').removeClass("icon-icon_check");
      $(".additional-product-summary.siodlo-element").css("display", "none");
      $(this).parent().prev().children('input').val("0");
    } else if (!$(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').addClass("icon-icon_check");
      $(".additional-product-summary.siodlo-element .additional-product-amount").text(inputValue + ' szt');
      $(".additional-product-summary.siodlo-element").css("display", "flex");
      let a = $(this).attr("data-singe-price") * inputValue;
      $(this).attr("data-price", a)
    }
  } else {
    $(this).parent().prev().children('input').css("border", "1px solid #B62830");
  }
});


// VALIDATION OF ADDITIONAL PRODUCT TAB 7
$("button.komp1").click(function () {
  let inputValue = $(this).parent().prev().children('input').val();
  
  if (inputValue && inputValue > 0) {
    $(this).parent().prev().children('input').css("border", "1px solid #81828E");
    if ($(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').removeClass("icon-icon_check");
      $(".additional-product-summary.kompressor1").css("display", "none");
      $(this).parent().prev().children('input').val("0");
    } else if (!$(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').addClass("icon-icon_check");
      $(".additional-product-summary.kompressor1 .additional-product-amount").text(inputValue + ' szt');
      $(".additional-product-summary.kompressor1").css("display", "flex");
      let a = $(this).attr("data-singe-price") * inputValue;
      $(this).attr("data-price", a)

    }
  } else {
    $(this).parent().prev().children('input').css("border", "1px solid #B62830");
  }
});

// VALIDATION OF ADDITIONAL PRODUCT TAB 7
$("button.komp2").click(function () {
  let inputValue = $(this).parent().prev().children('input').val();

  if (inputValue && inputValue > 0) {
    $(this).parent().prev().children('input').css("border", "1px solid #81828E");
    if ($(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').removeClass("icon-icon_check");
      $(".additional-product-summary.kompressor2").css("display", "none");
      $(this).parent().prev().children('input').val("0");
    } else if (!$(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').addClass("icon-icon_check");
      $(".additional-product-summary.kompressor2 .additional-product-amount").text(inputValue + ' szt');
      $(".additional-product-summary.kompressor2").css("display", "flex");
      let a = $(this).attr("data-singe-price") * inputValue;
      $(this).attr("data-price", a)
    }
  } else {
    $(this).parent().prev().children('input').css("border", "1px solid #B62830");
  }
});



// CAMERA VALIDATION

$("button.cam1").click(function () {
  let inputValue = $(this).parent().prev().children('input').val();
  if (inputValue && inputValue > 0) {
    $(this).parent().prev().children('input').css("border", "1px solid #81828E");
    if ($(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').removeClass("icon-icon_check");
      $(".additional-product-summary.camera1").css("display", "none");
      $(this).parent().prev().children('input').val("0");
    } else if (!$(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').addClass("icon-icon_check");
      $(".additional-product-summary.camera1 .additional-product-amount").text(inputValue + ' szt');
      $(".additional-product-summary.camera1").css("display", "flex");
      let a = $(this).attr("data-singe-price") * inputValue;
      $(this).attr("data-price", a)
    }
  } else {
    $(this).parent().prev().children('input').css("border", "1px solid #B62830");
  }
});


$("button.cam2").click(function () {
  let inputValue = $(this).parent().prev().children('input').val();

  if (inputValue && inputValue > 0) {
    $(this).parent().prev().children('input').css("border", "1px solid #81828E");
    if ($(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').removeClass("icon-icon_check");
      $(".additional-product-summary.camera2r3").css("display", "none");
      $(this).parent().prev().children('input').val("0");
    } else if (!$(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').addClass("icon-icon_check");
      $(".additional-product-summary.camera2 .additional-product-amount").text(inputValue + ' szt');
      $(".additional-product-summary.camera2").css("display", "flex");
      let a = $(this).attr("data-singe-price") * inputValue;
      $(this).attr("data-price", a)
    }
  } else {
    $(this).parent().prev().children('input').css("border", "1px solid #B62830");
  }
});



$("button.pomp1").click(function () {
  let inputValue = $(this).parent().prev().children('input').val();
  if (inputValue && inputValue > 0) {
    $(this).parent().prev().children('input').css("border", "1px solid #81828E");
    if ($(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').removeClass("icon-icon_check");
      $(".additional-product-summary.pompa1").css("display", "none");
      $(this).parent().prev().children('input').val("0");
    } else if (!$(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').addClass("icon-icon_check");
      $(".additional-product-summary.pompa1 .additional-product-amount").text(inputValue + ' szt');
      $(".additional-product-summary.pompa1").css("display", "flex");
      let a = $(this).attr("data-singe-price") * inputValue;
      $(this).attr("data-price", a)
    }
  } else {
    $(this).parent().prev().children('input').css("border", "1px solid #B62830");
  }
});


$("button.pomp2").click(function () {
  let inputValue = $(this).parent().prev().children('input').val();

  if (inputValue && inputValue > 0) {
    $(this).parent().prev().children('input').css("border", "1px solid #81828E");
    if ($(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').removeClass("icon-icon_check");
      $(".additional-product-summary.pompa2").css("display", "none");
      $(this).parent().prev().children('input').val("0");
    } else if (!$(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').addClass("icon-icon_check");
      $(".additional-product-summary.pompa2 .additional-product-amount").text(inputValue + ' szt');
      $(".additional-product-summary.pompa2").css("display", "flex");
      let a = $(this).attr("data-singe-price") * inputValue;
      $(this).attr("data-price", a)
    }
  } else {
    $(this).parent().prev().children('input').css("border", "1px solid #B62830");
  }
});


$("button.pomp3").click(function () {
  let inputValue = $(this).parent().prev().children('input').val();
  if (inputValue && inputValue > 0) {
    $(this).parent().prev().children('input').css("border", "1px solid #81828E");
    if ($(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').removeClass("icon-icon_check");
      $(".additional-product-summary.pompa3").css("display", "none");
      $(this).parent().prev().children('input').val("0");
    } else if (!$(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').addClass("icon-icon_check");
      $(".additional-product-summary.pompa3 .additional-product-amount").text(inputValue + ' szt');
      $(".additional-product-summary.pompa3").css("display", "flex");
      let a = $(this).attr("data-singe-price") * inputValue;
      $(this).attr("data-price", a)
    }
  } else {
    $(this).parent().prev().children('input').css("border", "1px solid #B62830");
  }
});


$("button.pomp4").click(function () {
  let inputValue = $(this).parent().prev().children('input').val();

  if (inputValue && inputValue > 0) {
    $(this).parent().prev().children('input').css("border", "1px solid #81828E");
    if ($(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').removeClass("icon-icon_check");
      $(".additional-product-summary.pompa4").css("display", "none");
      $(this).parent().prev().children('input').val("0");
    } else if (!$(this).children('span').hasClass("icon-icon_check")) {
      $(this).children('span').addClass("icon-icon_check");
      $(".additional-product-summary.pompa4 .additional-product-amount").text(inputValue + ' szt');
      $(".additional-product-summary.pompa4").css("display", "flex");
      let a = $(this).attr("data-singe-price") * inputValue;
      $(this).attr("data-price", a)
    }
  } else {
    $(this).parent().prev().children('input').css("border", "1px solid #B62830");
  }
});



$(".tab2-button-place #tab-rekaw").click(function () {

  $(".tab2-accept").show();

});

$("#tab-rekaw").click(function () {
  console.log("123");
  modelTypeString = "Wolny rękaw";
  modelNameString = "pneumatyczny M4";
});



$(".assyst-next-step").click(function () {
  $(".assyst-step-1").hide();
  $(".assyst2").css("display", "flex");
  $(".assyst-content").hide();
});

currentAssystTab = 0;

$(".assyst-tab-1").click(function () {
  $(".assyst-step2-content").hide();
  $(".assyst-tab1").show();
  currentAssystTab = 1;
});

$(".assyst-tab-2").click(function () {
  $(".assyst-step2-content").hide();
  $(".assyst-tab2").show();
  currentAssystTab = 2;
});

$(".assyst-tab-3").click(function () {
  $(".assyst-step2-content").hide();
  $(".assyst-tab3").show();
  currentAssystTab = 3;

});

// turbina-attention-icon attention-p

$("#assyst-ssak .tab2-button-place button").click(function () {
  assystChoice = $(this).text();
  assystSsak = true;
});

$(".choose-assyst-product label").click(function () {
  assystChoice = $(this).text();
});

var assAss = false;

$(".assyst-accept").click(function () {
  $(".choose-assyst-product").hide();
  $(".assyst1-wrapper").hide();
  $(".assyst-step2-content").show();
  $(".assyst-type-buttons button").removeClass("button-blue");
  $(".assyst-card" + currentAssystTab + " span").addClass("icon-icon_check");
  $(".assyst-brand-" + currentAssystTab + "span").addClass("icon-icon_check");

  $(".assyst-card" + currentAssystTab + " .ssak-p").remove();

  if (assystChoice === "AS 2000 B2" || assystChoice === "AS 2000 M4") {
    $(".assyst-card1 .ssak-p").remove();
    $(".assyst-card2 .ssak-p").remove();
    $(".assyst-card1").prepend("<p class=\"ssak-p\">" + assystChoice + "</p>");
    $(".assyst-card2").prepend("<p class=\"ssak-p\">" + assystChoice + "</p>");

    $(".assyst-card1").prepend("<p class=\"ssak-p\">Instalacja Ssaka</p>");
    $(".assyst-card2").prepend("<p class=\"ssak-p\">Instalacja Ssaka</p>");

    $(".assyst-brand-1").next().addClass(checkSign);
    $(".assyst-brand-2").next().addClass(checkSign);

    $(".assyst-brand-1").text(assystChoice);
    $(".assyst-brand-2").text(assystChoice);

    $(".assyst-brand-1 span").addClass("icon-icon_check");
    $(".assyst-brand-2 span").addClass("icon-icon_check");
    $(".assyst-card1 span").addClass("icon-icon_check");
    $(".assyst-card2 span").addClass("icon-icon_check");
    assAss = true;
    
  } else {
    if (currentAssystTab === 1 || currentAssystTab === 2) {
      if(assAss){
        $(".assyst-card1 p.ssak-p").remove();
        $(".assyst-card2 p.ssak-p").remove();
  
        $(".assyst-brand-1").next().removeClass(checkSign);
        $(".assyst-brand-2").next().removeClass(checkSign);
        $(".assyst-brand-1").text(assystChoice);
        $(".assyst-brand-2").text(assystChoice);
        $(".assyst-brand-1 span").removeClass("icon-icon_check");
        $(".assyst-brand-2 span").removeClass("icon-icon_check");
        $(".assyst-card1 span").removeClass("icon-icon_check");
        $(".assyst-card2 span").removeClass("icon-icon_check");
        $(".assyst-brand-" + currentAssystTab).next().addClass(checkSign);
        $(".assyst-card" + currentAssystTab + " span").addClass("icon-icon_check");
        console.log("ZALUPA");
        assAss = false;
      }
    }


    
    $(".assyst-type-buttons").removeClass("button-blue");
    $(".assyst-card" + currentAssystTab).prepend("<p class=\"ssak-p\">" + assystChoice + "</p>");
    $(".assyst-brand-" + currentAssystTab).text(assystChoice);
    $(".assyst-brand-" + currentAssystTab).next().addClass(checkSign);
    $(".assyst-card" + currentAssystTab).prepend("<p class=\"ssak-p\">" + assystType + "</p>")
    // $(".assyst-tab-" + currentAssystTab).addClass("assyst-card-title");

  }
});


$(".assyst-cancel").click(function () {
  $(".choose-assyst-product").hide();
  $(".assyst1-wrapper").hide();
  $(".assyst-step2-content").show();
  $(".assyst-type-buttons button").removeClass("button-blue")
});


$(".tab5-cancel").click(function () {
  $(".attention-block-wrapper").hide();
});

$("#assyst-strykawko button.tab1-card-button").click(function () {
  assystChoice = $(this).parent().find(".tab1-card-title").text();
});


$(".assyst-type-buttons button").click(function () {
  $(".assyst-accept").hide();

});

$(".choose-assyst-product label").click(function () {
  $(".assyst-accept").show();
});

$(".choose-assyst-product .assyst1-wrapper button").click(function () {
  $(".assyst-accept").show();
});

$("#Piaskarka label").click(function () {
  var piaskarkaHasClass = $(this).hasClass("turn-szybko");
  if (piaskarkaHasClass) {
    $("#Piaskarka .turbina-attention").css("display", "flex");
  } else {
    $("#Piaskarka .turbina-attention").hide();
  }
});


$("#assyst-piaskarka label").click(function () {
  var piaskarkaHasClass = $(this).hasClass("turn-szybko");
  if (piaskarkaHasClass) {
    $("#assyst-piaskarka .turbina-attention").css("display", "flex");
  } else {
    $("#assyst-piaskarka .turbina-attention").hide();
  }
});




$(".pneumatic-light-off label").click(function () {
  $(".mikro-attention-icon").show();
});






truePanelName = (word) =;> {
  if (word === ".certus-neo") {
    return "CERTUS NEO";
  } else if (word === ".certus-max") {
    return "CERTUS MAX"
  } else if (word === ".certus-standart") {
    return "CERTUS STANDART"
  } else if (word === ".exima-neo") {
    return "EXIMA NEO"
  } else if (word === ".exima-max") {
    return "EXIMA MAX"
  } else if (word === ".exima-x1g") {
    return "EXIMA X1G"
  } else if (word === ".exima-x1d") {
    return "EXIMA X1D"
  }
}

trueColorName = (colorId) =;> {
  if (colorId === "color1" || colorId === "color1_w") {
    return "BORDOWY";
  } else if (colorId === "color2"  || colorId === "color2_w") {
    return "BRĄZOWY"; 
  } else if (colorId === "color3") {
    return "CIEMNO-SZARY"; 
  } else if (colorId === "color4"  || colorId === "color4_w") {
    return "JASNO-SZARY"; 
  } else if (colorId === "color5"  || colorId === "color5_w") {
    return "FIOLETOWY"; 
  } else if (colorId === "color6"  || colorId === "color6_w") {
    return "GRANATOWY"; 
  } else if (colorId === "color7"  || colorId === "color7_w") {
    return "NIEBIESKI"; 
  } else if (colorId === "color8") {
    return "MORSKI"; 
  } else if (colorId === "color9"  || colorId === "color9_w") {
    return "POMARAŃCZOWY";
  } else if (colorId === "color10" || colorId === "color10_w") {
    return "ŻÓŁTY";
  } else if (colorId === "color11") {
    return "ZIELONY";
  }
}

trueLampName = (lamp) =;> {
  if (lamp === "lamp1") {
    return "BEZCIENIOWA DIODOWA POLARIS";
  } else if (lamp === "lamp2") {
    return "BEZCIENIOWA DIODA POLARIS SENSOMATIC";
  } else if (lamp === "lamp3") {
    return "BEZCIENIOWA HALOGENOWA ISA";
  } else if (lamp === "lamp4") {
    return "BEZCIENIOWA DIODOWA IRIS Z WBUDOWANĄ KAMERĄ";
  }
}


printPdf = () =;> {
  window.print();
}

function a(t, a, e) {
  var price = 0;
  $(t + " input:checked," + t + " button .icon-icon_check").each(function () {
    if ($(this).is("input")) var t = $(this);
    else t = $(this).closest("button");
    $.isNumeric(t.attr("data-price")) && (price += parseFloat(t.attr("data-price")),
    $(a).text(numberWithCommas(price) + ""), $(e).text(numberWithCommas(price) + ""));

    if ($(this).next().hasClass("turn-szybko")) {

    }
  })
}

// $("#tab2 .model-card-cover button.model-button").on("click", function () {
  
// });

$("input").on("change", function () {
    a("body", ".price-number", ".price-numbers-up")
  });
  $("button").on("click", function () {
    a("body", ".price-numbers-up", ".price-number")
  });

  $("#tab5 input").on("change", function () {
    a("#tab5", "#tab5 .price-summary span")
  });

  $("#tab5 button").on("click", function () {
    a("#tab5", "#tab5 .price-summary span")
  });

  $("#tab6 input").on("change", function () {
    a("#tab6", "#tab6 .price-summary")
  });

  $("#tab6 button").on("click", function () {
    a("#tab6", "#tab6 .price-summary")
  });



  $("#tab4 button").on("click", function () {
    a("#tab4", "#tab4 .price-summary span")
  });

  $("#tab7 button").on("click", function () {
    a("#tab7", "#tab7 .price-summary span")
  });



  // $("button.step-2-button").click(function () {

  //   $(".product-summary-list").append("<div class=\"result\"><div class=\"product\">Panel</div><div class=\"version\">" + truePanelName(currentnModel) + "</div><div class=\"product-price\">" + seatPrice + " zl" + "</div>")
  // })
  
  // $("button.step-3-button").click(function () {
  //   $(".product-summary-list").append("<div class=\"result\"><div class=\"product\">Color unitu</div><div class=\"version\">" + trueColorName(seatColor) + "</div><div class=\"product-price\">" + '1000' + " zl" + "</div>")
  // })
  
  // $("button.step-4-button").click(function () {
  //   $(".product-summary-list").append("<div class=\"result\"><div class=\"product\">Lampa</div><div class=\"version\">" + trueLampName(currentLamp) + "</div><div class=\"product-price\">" + $("button#" + currentLamp).attr("data-price") + " zl" + "</div>")
  // })
  

qq = () =;> {
  $("#tab5 input:checked, #tab5  button .icon-icon_check, #tab6 .assyst2 input:checked, #tab6 .assyst2  button .icon-icon_check,#tab7  button .icon-icon_check").each(function () {
    $(this).is("input") ? 
    $("#result-table tbody").append("<tr  style=\"font-size:9px;\"><td style=\"line-height:30px; border-bottom:1px solid #E4E5ED;width:30%\">" + $(this).attr("data-type") +                  "</td><td style=\"line-height:30px; border-bottom:1px solid #E4E5ED;\">" + $(this).next().text() +                      "</td><td style=\"   line-height: 30px; border-bottom:1px solid #E4E5ED;text-align:end;\">" + numberWithCommas($(this).attr("data-price")) + "</td></tr>")
     :
    $("#result-table tbody").append("<tr  style=\"font-size:9px;\"><td style=\"line-height:30px; border-bottom:1px solid #E4E5ED;width:30%\">" + $(this).closest("button").attr("data-type")+ "</td><td style=\"line-height:30px; border-bottom:1px solid #E4E5ED;\">" + $(this).closest("button").attr("data-name") +"</td><td style=\"   line-height: 30px; border-bottom:1px solid #E4E5ED;text-align:end;\">" + numberWithCommas($(this).closest("button").attr("data-price")) + "</td></tr>");
  })
}


$(".tab7-summ .assyst-next-button").click(function(){
  $(".pdf-price b").text($("header .header-price .price-number").text());
  $("#result-table tbody").empty();
  $("#result-table tbody").append("<tr style=\"font-size:9px;\"><td style=\"line-height:30px;  border-bottom:1px solid #E4E5ED;width:30%\">Panel       </td><td style=\"line-height:30px; width:50%; border-bottom:1px solid #E4E5ED;\">" + truePanelName(currentnModel) +"</td><td style=\"line-height:30px;width:20%; border-bottom:1px solid #E4E5ED;text-align: end;\">" + numberWithCommas(seatPrice) + "</td></tr>");
  $("#result-table tbody").append("<tr style=\"font-size:9px;\"><td style=\"line-height:30px;  border-bottom:1px solid #E4E5ED;width:30%\">Color unitu </td><td style=\"line-height:30px; width:50%; border-bottom:1px solid #E4E5ED;\">" + trueColorName(seatColor) +    "</td><td style=\"line-height:30px;width:20%; border-bottom:1px solid #E4E5ED;text-align: end;\">" + numberWithCommas(1000) + "</td></tr>");
  $("#result-table tbody").append("<tr style=\"font-size:9px;\"><td style=\"line-height:30px;  border-bottom:1px solid #E4E5ED;width:30%\">Lampa       </td><td style=\"line-height:30px; width:50%; border-bottom:1px solid #E4E5ED;\">" + trueLampName(currentLamp) +   "</td><td style=\"line-height:30px;width:20%; border-bottom:1px solid #E4E5ED;text-align: end;\">" + numberWithCommas($("button#" + currentLamp).attr("data-price")) + "</td></tr>");
  qq()

});


$(".print-button-place").click(function(){
  var el = $(".for-prinr-section").html();
  let add = $(".footer-pdf").html();
  el = el.replace(/(\r\n|\n|\r)/gm," ");
  el += add;
  $("#textarea-for-print").text(el)

});


function numberWithCommas(t) {
  if(t !== undefined){
    var u = t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return u += " zł"
  }else{
    console.log(undefined)
  }
  
}