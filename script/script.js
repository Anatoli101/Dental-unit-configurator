let currentBrand,
    currentnModel,
    currentLamp,
    seatColor = "color3",
    colorDirection = "CERTUS_ciemnoszary-bialy",
    seatPrice = 0,
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
        panel_lekarza: "<img src=\"/konfigurator/img/img_panel_lekarza_certus_neo.png\" alt=\"\">",
        panel_asysty: "<img src=\"/konfigurator/img/img_panel_asysty_exima_neo.png\" alt=\"\">",
        panel_asysty_numbers: "<img src=\"/konfigurator/img/assyst-step2@2x.png\">"
    },

    certus_max = {
        panel_lekarza: "<img src=\"/konfigurator/img/img_panel_lekarza_certus_max.png\" alt=\"\">",
        panel_asysty: "<img src=\"/konfigurator/img/img_panel_asysty_certus_max.png\" alt=\"\">",
        panel_asysty_numbers: "<img src=\"/konfigurator/img/img_panel_asysty_certus_max_numbers@2x.png\">"
    },

    certus_standard = {
        panel_lekarza: "<img src=\"/konfigurator/img/img_panel_lekarza_certus_standard.png\" alt=\"\">",
        panel_asysty: "<img src=\"/konfigurator/img/img_panel_asysty_certus_standard.png\" alt=\"\">",
        panel_asysty_numbers: "<img src=\"/konfigurator/img/img_panel_asysty_certus_standard_numbers@2x.png\">"
    },

    exima_neo = {
        panel_lekarza: "<img src=\"/konfigurator/img/img_panel_lekarza_exima_neo.png\" alt=\"\">",
        panel_asysty: "<img src=\"/konfigurator/img/img_panel_asysty_exima_neo.png\" alt=\"\">",
        panel_asysty_numbers: "<img src=\"/konfigurator/img/assyst-step2@2x.png\">"
    },

    exima_max = {
        panel_lekarza: "<img src=\"/konfigurator/img/img_panel_lekarza_exima_max.png\" alt=\"\">",
        panel_asysty: "<img src=\"/konfigurator/img/img_panel_asysty_exima_max.png\" alt=\"\">",
        panel_asysty_numbers: "<img src=\"/konfigurator/img/img_panel_asysty_exima_max_numbers@2x.png\" alt=\"\">"
    },
    exima_x1g = {
        panel_lekarza: "<img class=\"small-panel\" src=\"/konfigurator/img/img_panel_lekarza_exima_standard_x1g@2x.png\" alt=\"\">",
        panel_asysty: "<img class=\"small-panel\" src=\"/konfigurator/img/img_panel_asysty_exima_standard_x1g.png\" alt=\"\">",
        panel_asysty_numbers: "<img src=\"/konfigurator/img/img_panel_asysty_exima_standard_x1g@2x.png\" alt=\"\">"
    },

    exima_x1d = {
        panel_lekarza: "<img class=\"small-panel\" src=\"/konfigurator/img/img_panel_lekarza_exima_standard_x1d@2x.png\" alt=\"\">",
        panel_asysty: "<img class=\"small-panel\" src=\"/konfigurator/img/img_panel_asysty_exima_standard_x1d.png\" alt=\"\">",
        panel_asysty_numbers: "<img class=\"small-panel\" src=\"/konfigurator/img/img_panel_asysty_exima_standard_x1d@2x.png\" alt=\"\">"
    };


$(document).ready(function () {




    // Popup

    $(".see-360").click(function () {
        let seatId = $(this).attr('id');
        $(".pop-up#" + seatId).css("display", "flex");
        if (seatId === "seat-certus") {
            inject_orbitvu('CERTUS_ciemnoszary-ciemnoszary-1283136100', '/konfigurator/orbitvu12_basic//orbitvuer12.swf', '/konfigurator/orbitvu12_basic//expressInstall.swf', {
                ovus_folder: "/seat-360/CERTUS_ciemnoszary-ciemnoszary/",
                content2: "yes",
                width: "650",
                height: "650"
            });
        } else if (seatId === "seat-exima") {
            inject_orbitvu('Exima_niebieski-1658327094', '/konfigurator/orbitvu12_basic//orbitvuer12.swf', '/konfigurator/orbitvu12_basic//expressInstall.swf', {
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

    setCurrentProductNameCallback();

    // $(".step-back-button").click(function () {
    $(document).on('click touch', '.step-back-button',  function () {
        // confirmStep();
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
        // console.log($(this).parent().next('.next-step-button').find('button').attr('class'));

        // if($(this).parents('.tab-content').is("#tab2")) {
        //     console.log('button w drugi kroku');
        //     $(this).parent().next('.next-step-button').find('button').removeClass('nextStepActive');
        // }


        // changeCurrentCongig(getTabId);
        // setCurrentProductName('');
        setCurrentProductNameCallback()
    });
    // $(".button-to-go.nextStepActive").click(function () {
    $(document).on('click touch', '.nextStepActive', function() {

        var active_tab_selector = $('.nav-tabs > li.active').attr('id');
        var actived_nav = $('.nav-tabs > li.active');
        var nextTab = $(".sidebar-li-list.active").next();
        // console.log(nextTab);
        nextTab.addClass("visitedTab");
        actived_nav.removeClass('active');
        $(nextTab).addClass('active');
        $(active_tab_selector).removeClass('active');
        $(active_tab_selector).addClass('hide').addClass('visitedTab');
        var target_tab_selector = $(nextTab).attr('id');
        $(target_tab_selector + " .model-card-cover" + currentBrand).show();
        $(target_tab_selector + " " + currentBrand).css("display", "flex");
        $(target_tab_selector).removeClass('hide');
        $(target_tab_selector).addClass('active');

        // changeCurrentCongig(getTabId);
        confirmStep();
        setCurrentProductNameCallback();
        console.log('aktualnie obslugujesz model: '+dataBrand);
        console.log('aktualnie jestes w kroku: '+$(target_tab_selector).attr('id'));

    });
    // $('.nav-tabs > li').click(function (event) {
    $(document).on('click touch', '.nav-tabs > li', function (event) {
        // confirmStep();
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
        // changeCurrentCongig(getTabId);
    });




    function confirmStep() {
        // console.log('confirm step')
        // var currentPrice = parseInt(0 + attentionDoctorPanelCost);
        var currentPrice = parseInt(0);
        $.each($('.tab-content'), function() {
            // if($(this).hasClass('visitedTab') || $(this).hasClass('active')) {
            if($(this).hasClass('visitedTab')) {
                // console.log('JESTEM');
                if ($(".header-price .price-number").attr('data-total-price')) {
                    $.each($(this).find("[data-price]"), function () {
                        if ($(this).hasClass('selected')) {
                            console.log('ten koszt wynosi: '+$(this).closest('.tab-content').attr('id'));
                            if (!$(this).attr('data-price')) {
                                console.log('nie mam data-price');
                                currentPrice = currentPrice + 0;
                            }
                            else {
                                if ($(this).parents('.tab-content').is("#tab4")) {
                                    console.log('wszedlem tutaj');
                                    if ($(this).parents('.lamp-button-div').hasClass('available')) {
                                        if ($(this).attr('data-price')) {
                                            currentPrice = currentPrice + parseInt($(this).attr('data-price'));
                                        }
                                    }
                                }
                                else {
                                    currentPrice = currentPrice + parseInt($(this).attr('data-price'));
                                }
                            }
                        }
                    });
                //    tu
                }
            }
        })
        // var doctorPanel = parseInt($('#tab5 [data-doctor-panel-cost]').attr('data-doctor-panel-cost'));
        // console.log("OBECNA CENA: "+currentPrice);
        // console.log("CENA PANEL DOKTORA: "+doctorPanel);
        // currentPrice = currentPrice + doctorPanel;
        $(".header-price .price-number").attr('data-total-price', parseInt(currentPrice));
        $(".header-price .price-number .pr").text($(".header-price .price-number").attr('data-total-price'));
    }

    function priceLabel(_parentUnit, _unitLabel, _unitPrice) {
        if($(_parentUnit).hasClass('visitedTab') || $(_parentUnit).hasClass('active')) {
            // console.log('price-label')
            // console.log($(_parentUnit).attr('class'))
            $(_parentUnit).find(".brand-choose-sidebar .brand-summary-label").text(_unitLabel);
            $(_parentUnit).find(".brand-choose-sidebar .price-summary .pr").text(_unitPrice);
            // confirmStep()    //update ceny
        }
    }

    function setCurrentProductName(_brand) {
        if(_brand === 'exima') {
            _brand = 'Exima';
        }
        else if(_brand === 'certus') {
            _brand = 'Certus';
        }
        $("header .current-configuration").text(_brand);
    }

    function setCurrentProductNameCallback() {
        var current = '';
        $.each($('.sidebar-li-list'),function() {
            if($(this).hasClass('active')) {
                current = $(this).text();
            }
        });
        $.each($('.tab-content'),function() {
            if($(this).hasClass('active')) {
                if($(this).find('.selected').length > 0) {
                    $.each($(this).find('.selected'), function() {
                        console.log('cos jest');
                        if($(this).attr('data-brand')) {
                            setCurrentProductName($(this).attr('data-brand'));
                        }
                        else {
                            setCurrentProductName(current);
                        }
                    })
                }
                else {
                    setCurrentProductName(current);
                }
            }
        })
    }



    var dataBrand= '';
    var brand = '';

    var strzykawkoDmuchawka = 'Dmuchawka DCI';
    var strzykawkoDmuchawkaKategoria = 'Strzykawko-dmuchawka';
    var strzykawkoDmuchawkaCena = 0;
    var rekaw1 = '';
    var rekaw1Dodatkowa = '';
    var rekaw1Kategoria = '';
    var rekaw1Cena = 0;
    var rekaw2 = '';
    var rekaw2Dodatkowa = '';
    var rekaw2Kategoria = '';
    var rekaw2Cena = 0;
    var rekaw3 = '';
    var rekaw3Dodatkowa = '';
    var rekaw3Kategoria = '';
    var rekaw3Cena = 0;
    var rekaw4 = '';
    var rekaw4Dodatkowa = '';
    var rekaw4Kategoria = '';
    var rekaw4Cena = 0;
    var rekaw5 = '';
    var rekaw5Dodatkowa = '';
    var rekaw5Kategoria = '';
    var rekaw5Cena = 0;




    var doctorPanelCostTab = [strzykawkoDmuchawkaCena,rekaw1Cena,rekaw2Cena,rekaw3Cena,rekaw4Cena,rekaw5Cena];
    var doctorPanelLabels = [strzykawkoDmuchawka,rekaw1,rekaw1Dodatkowa,rekaw2,rekaw2Dodatkowa,rekaw3,rekaw3Dodatkowa,rekaw4,rekaw4Dodatkowa,rekaw5,rekaw5Dodatkowa];
    var doctorPanelCategories = [strzykawkoDmuchawkaKategoria,rekaw1Kategoria,rekaw2Kategoria,rekaw3Kategoria,rekaw4Kategoria,rekaw5Kategoria];


    var addedOptions = [];

    $(document).on('click touch',"#tab1 .seat-model",function () {
        $(currentBrand).hide();
        $(".block-colorified-seats").hide();
        dataBrand = $(this).attr('data-brand');
        setCurrentProductName(dataBrand);



        if(!$(this).hasClass('selected')) {
            console.log('ZMIANIAMWSZYSTKO');
            // $.each($("#tab2 [data-brand], #tab1 [data-brand]"),function() {
            $.each($(".tab-content [data-brand]"),function() {
                if($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                    $(this).find('.label-button').text("WYBIERAM");
                }
            });
            var valueOfAttribute = $(this).attr('data-brand');
            $.each($("#tab1 [data-brand="+valueOfAttribute+"]"),function() {
                if(valueOfAttribute === "certus") {
                    if($(this).attr('data-price')) {
                        $(this).attr('data-price',29000)
                    }
                }
                else if(valueOfAttribute === "exima") {
                    if($(this).attr('data-price')) {
                        $(this).attr('data-price',22500)
                    }
                }
            });
            $.each($('[data-brand='+valueOfAttribute+']'), function () {
                if (!$(this).hasClass('selected')) {
                    $(this).addClass('selected');
                    $(this).find('.label-button').text("WYBRANO");
                    if($(this).attr('data-price')) {
                        seatPrice = parseInt($(this).attr('data-price'));
                        // console.log(seatPrice);
                    }
                }
            });


            //step 4
            $.each($("#tab4 [data-type]"),function() {
                if($(this).attr('data-standard')) {
                    if(!$(this).hasClass('selected')) {
                        $(this).addClass('selected');
                    }
                }
                else {
                    if($(this).hasClass('selected')) {
                        $(this).removeClass('selected');
                    }
                }
            });
            resetDoctorPanel();
            resetAttentionBlock();


            if(valueOfAttribute === "certus") {
                currentBrand = ".certus";
                $(".current-config-right img").attr("src","/konfigurator/img/certus-logo.png").css("display","block");
                $("#tab2").find(".next-step-button button").removeClass('nextStepActive');
            }
            else if(valueOfAttribute === "exima") {
                currentBrand = ".exima";
                $(".current-config-right img").attr("src","/konfigurator/img/exima-logo@2x.png").css("display","block");
                $("#tab2").find(".next-step-button button").removeClass('nextStepActive');
            }




            var brand = $("#tab1 .brand-choose-sidebar").find('[data-brand=' + dataBrand + ']').find(".brand-name").text();
            // console.log(brand);
            priceLabel('#tab1',brand,seatPrice);
            priceLabel('#tab2',"",0);
            priceLabel('#tab3',"",0);
            priceLabel('#tab4',"",0);

            $(".step-1-button").addClass("nextStepActive");
        }
    });

    $(document).on('click touch','#tab2 .model-type',function () {
        $.each($("#tab1 [data-price]"),function() {
            $(this).attr('data-price','0');
        });

        // $(".doctor-panel-img").empty();
        // $(".assyst-content-wrapper img").remove();
        // $(".assyst-step2-content img").remove();
        $(".lacquer-type-wrapper").css("display","none");
        let objChild = $(this).children("span");
        $(currentBrand + "-brand-color.block-colorified-seats").hide();
        $(".see-360-color").hide();
        $(".model-color-place").empty();
        dataBrand = $(this).attr('data-brand');
        setCurrentProductName(dataBrand);
        brand = $("#tab2 .brand-choose-sidebar").find('[data-brand='+dataBrand+']').find(".brand-name").text();

        // seatPrice = $(this).attr("data-price");

        $.each($("#tab4 .lamp-button-div, #tab4 .product-list, #tab5 .doctor-tab-5 .attention-block-wrapper, #tab5 .doctor-tab-5 .attention-block-wrapper .data-brand, #tab5 .panel-card-cover.d-panel5, #tab5 .doctor-tab-5 .doctor-panel-choice, #tab6 .common, #tab5 .common"),function() {
            if($(this).hasClass(dataBrand)) {
                $(this).addClass('available');
            }
            else {
                $(this).removeClass('available');
            }
        });





        if(!$(this).hasClass('selected')) {

            $.each($("#tab2 [data-brand]"),function() {
                if($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                    $(this).find('.label-button').text("WYBIERAM");
                }
            });
            var valueOfAttribute = $(this).attr('data-brand');
            $.each($('#tab2 [data-brand='+valueOfAttribute+']'), function () {
                if (!$(this).hasClass('selected')) {
                    $(this).addClass('selected');
                    $(this).find('.label-button').text("WYBRANO");
                    if($(this).attr('data-price')) {
                        seatPrice = parseInt($(this).attr('data-price'));
                    }
                }
            });
            $.each($("#tab4 [data-type]"),function() {
                if($(this).attr('data-standard')) {
                    if(!$(this).hasClass('selected')) {
                        $(this).addClass('selected');
                    }
                }
                else {
                    if($(this).hasClass('selected')) {
                        $(this).removeClass('selected');
                    }
                }
            });

            if(valueOfAttribute === "certus-neo") {
                // $(".doctor-panel-img").append(certus_neo.panel_lekarza);
                // $(".assyst-content-wrapper").append(certus_neo.panel_asysty);
                // $(".assyst-step2-content").append(certus_neo.panel_asysty_numbers);
                $(".lacquer-type-wrapper").css("opacity", "1");
                $(".lacquer-type-wrapper").css("pointer-events", "all");
                $(currentBrand + "-brand-color.block-colorified-seats").show();
                $(".model-color-place").hide();
                currentnModel = ".certus-neo";
                $(".choose-color").css("display", "flex");
                $(".lacquer-type-wrapper").css("display", "flex");
                $('.see-360-color').show()
            }
            else if(valueOfAttribute === "certus-max") {
                // $(".doctor-panel-img").append(certus_max.panel_lekarza);
                // $(".assyst-content-wrapper").append(certus_max.panel_asysty);
                // $(".assyst-step2-content").append(certus_max.panel_asysty_numbers);
                $(".lacquer-type-wrapper").css("opacity", "1");
                $(".lacquer-type-wrapper").css("pointer-events", "all");
                $(".model-color-place").show();
                $(".model-color-place").append("<img style=\'width:400px\' src=\"/konfigurator/img/img_panel_komplet_certus_max@2x.png\">");
                currentnModel = ".certus-max";
            }
            else if(valueOfAttribute === "certus-standard") {
                // $(".doctor-panel-img").append(certus_standard.panel_lekarza);
                // $(".assyst-content-wrapper").append(certus_standard.panel_asysty);
                // $(".assyst-step2-content").append(certus_standard.panel_asysty_numbers);
                // $(".attention-block-wrapper").css("display", "block");
                $(".model-color-place").show();
                $(".model-color-place").append("<img style=\'width:400px\' src=\"/konfigurator/img/img_panel_komplet_certus_standard@2x.png\">");
                currentnModel = ".certus-standart";
            }
            else if(valueOfAttribute === "exima-neo") {
                // $(".doctor-panel-img").append(exima_neo.panel_lekarza);
                // $(".assyst-content-wrapper").append(exima_neo.panel_asysty);
                // $(".assyst-step2-content").append(exima_neo.panel_asysty_numbers);
                $(currentBrand + "-brand-color.block-colorified-seats").show();
                $(".model-color-place").hide();
                $(".choose-color").css("display", "flex");
                $(".lacquer-type-wrapper").css("display", "flex");
                currentnModel = ".exima-neo";
                $(".see-360-color").show();
            }
            else if(valueOfAttribute === "exima-max") {
                // $(".doctor-panel-img").append(exima_max.panel_lekarza);
                // $(".assyst-content-wrapper").append(exima_max.panel_asysty);
                // $(".assyst-step2-content").append(exima_max.panel_asysty_numbers);
                $(".model-color-place").show();
                $(".model-color-place").append("<img style=\'width:400px\' src=\"/konfigurator/img/img_panel_komplet_exima_max@2x.png\">");
                currentnModel = ".exima-max";
            }
            else if(valueOfAttribute === "exima-x1g") {
                // $(".doctor-panel-img").append(exima_x1g.panel_lekarza);
                // $(".assyst-content-wrapper").append(exima_x1g.panel_asysty);
                // $(".assyst-step2-content").append(exima_x1g.panel_asysty_numbers);
                $(".model-color-place").show();
                $(".model-color-place").append("<img class=\"small-panel\" style=\'width:400px\' src=\"/konfigurator/img/img_panel_komplet_exima_standard_x1g@2x.png\">");
                currentnModel = ".exima-x1g";
            }
            else if(valueOfAttribute === "exima-x1d") {
                // $(".doctor-panel-img").append(exima_x1d.panel_lekarza);
                // $(".assyst-content-wrapper").append(exima_x1d.panel_asysty);
                // $(".assyst-step2-content").append(exima_x1d.panel_asysty_numbers);
                $(".model-color-place").show();
                $(".model-color-place").append("<img class=\"small-panel\" style=\'width:400px\' src=\"/konfigurator/img/img_panel_komplet_exima_standard_x1d@2x.png\">");
                currentnModel = ".exima-x1d";
            }
        }

        // seatPrice = seatPrice + doctorPanel; //update ceny
        priceLabel('#tab2','',seatPrice);
        resetAssystPanelCost();
        resetAttentionBlock();

        $(".step-2-button").addClass("nextStepActive");

    });

    $(document).on('click touch', '#tab3 .choose-the-color', function() {

        // $('.choose-the-color').children("span").removeClass("icon-icon_check");
        $(".choose-the-color.color-seat").removeClass('color-active');
        // $("#" + $(this).attr("id")).children("span").addClass("icon-icon_check");
        // $('.choose-the-color.color-seat#' + $(this).attr("id")).children("span").addClass("icon-icon_check");
        $('.choose-the-color.color-seat#' + $(this).attr("id")).addClass('color-active');
        $(".step-3-button").addClass("nextStepActive");


        $(".color-img").hide();
        seatColor = $(this).attr("id");

        if(!$(this).hasClass('selected')) {
            $.each($("#tab3 [data-color]"), function () {
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
            });
            var valueOfAttribute = $(this).attr('data-color');
            $.each($('#tab3 [data-color=' + valueOfAttribute + ']'), function () {
                if (!$(this).hasClass('selected')) {
                    $(this).addClass('selected');
                    if($(this).attr('data-price')) {
                        seatPrice = parseInt($(this).attr('data-price'));
                    }
                }
            })
        }


        if ($("img#" + seatColor).hasClass("hide-me")) {
            $("img#" + seatColor).hide();
            $("img#" + seatColor + ".with-tapicerka").show();

        } else {
            $("img#" + seatColor + ".with-tapicerka").hide();
            $("img#" + seatColor).show();

        }

        $("label.color-white").prev().prop("checked", true);

        if (currentBrand === ".certus") {
            colorDirection = $(this).attr("data-direct-certus")

        } else if (currentBrand === ".exima") {
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

    $(document).on('click touch', '#tab4 .lamp-type',function () {
        // $(".lamp-type > span").removeClass("icon-icon_check");
        let lamp = $(this).attr("id");

        // $(".lamp-price span").remove();
        // var objChild = $(this).children("span");
        // $(objChild).addClass("icon-icon_check");
        // $('.lamp-type#' + $(this).attr("id")).children("span").addClass("icon-icon_check");
        $(".step-2-button").addClass("nextStepActive");
        $(".step-4-button").addClass("nextStepActive");
        // setCurrentProductName(dataBrand);

        // brand =
        // seatPrice = $(this).attr("data-price");
        // console.log(seatPrice);

        if(!$(this).hasClass('selected')) {
            $.each($("#tab4 [data-type]"),function() {
                if($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                    $(this).find('.label-button').text("WYBIERAM");
                }
            });
            var valueOfAttribute = $(this).attr('data-type');
            $.each($('#tab4 [data-type='+valueOfAttribute+']'), function () {
                if (!$(this).hasClass('selected')) {
                    $(this).addClass('selected');
                    $(this).find('.label-button').text("WYBRANO");
                    if($(this).parents('.lamp-button-div').hasClass('available')) {
                        if($(this).attr('data-price')) {
                            console.log('wbijam');
                            seatPrice = parseInt($(this).attr('data-price'));
                        }
                    }
                }
            });
            priceLabel('#tab4','',seatPrice);

            // if(valueOfAttribute === "lamp1") {
            //     $("button#lamp1").empty().append("WYBRANO <span class=\"choose-seat-sign icon-icon_check\"></span>");
            //     $("button#lamp2").empty().append("WYBIERAM <span class=\"choose-seat-sign\"></span>");
            //     $("button#lamp3").empty().append("WYBIERAM <span class=\"choose-seat-sign\"></span>");
            //     $("button#lamp4").empty().append("WYBIERAM <span class=\"choose-seat-sign\"></span>");
            // }
            // else if (valueOfAttribute === "lamp2") {
            //     $("button#lamp2").empty().append("WYBRANO <span class=\"choose-seat-sign icon-icon_check\"></span>");
            //     $("button#lamp1").empty().append("WYBIERAM <span class=\"choose-seat-sign \"></span>");
            //     $("button#lamp3").empty().append("WYBIERAM <span class=\"choose-seat-sign \"></span>");
            //     $("button#lamp4").empty().append("WYBIERAM <span class=\"choose-seat-sign \"></span>");
            // } else if (valueOfAttribute === "lamp3") {
            //     $("button#lamp3").empty().append("WYBRANO <span class=\"choose-seat-sign icon-icon_check\"></span>");
            //     $("button#lamp2").empty().append("WYBIERAM <span class=\"choose-seat-sign \"></span>");
            //     $("button#lamp1").empty().append("WYBIERAM <span class=\"choose-seat-sign \"></span>");
            //     $("button#lamp4").empty().append("WYBIERAM <span class=\"choose-seat-sign \"></span>");
            // } else if (valueOfAttribute === "lamp4") {
            //     $("button#lamp4").empty().append("WYBRANO <span class=\"choose-seat-sign icon-icon_check\"></span>");
            //     $("button#lamp2").empty().append("WYBIERAM <span class=\"choose-seat-sign\"></span>");
            //     $("button#lamp3").empty().append("WYBIERAM <span class=\"choose-seat-sign\"></span>");
            //     $("button#lamp1").empty().append("WYBIERAM <span class=\"choose-seat-sign\"></span>");
            // }
        }
        // currentLamp = lamp;
    });

    /*--------------------------------------step 5----------------------------------------*/
    function markAsProgress(_tab,_that,_active) {
        if(!_that.closest(_tab).find('.brand-choose-sidebar [data-label='+_active+'] .icon-icon_check').hasClass('active')) {
            if(!_that.closest(_tab).find('.brand-choose-sidebar [data-label='+_active+'] .icon-icon_loading').hasClass('active')) {
                _that.closest(_tab).find('.brand-choose-sidebar [data-label='+_active+'] .icon-icon_loading').addClass('active');
            }
        }
    }

    function markAsDone(_tab,_that,_active,_selected) {
        if(_that.closest(_tab).find('.brand-choose-sidebar [data-label='+_active+'] .icon-icon_loading').hasClass('active')) {
            _that.closest(_tab).find('.brand-choose-sidebar [data-label='+_active+'] .icon-icon_loading').removeClass('active');
        }
        if(!_that.closest(_tab).find('.brand-choose-sidebar [data-label='+_active+'] .icon-icon_check').hasClass('active')) {
            _that.closest(_tab).find('.brand-choose-sidebar [data-label='+_active+'] .icon-icon_check').addClass('active');
            _that.closest(_tab).find('.brand-choose-sidebar [data-label='+_active+'] .selected-equipment').text(_selected)
        }
    }

    $(document).on('click touch', '#tab5 .button-change', function() {
        $(".doctor-panel-top").hide();
        $(".doctor-panel-row").hide();
        $(".doctor-panel-title").hide();
        $(".start-here-img").hide();

        var active = '';
        var that = $(this);

        if($(this).attr('data-target') === 'doctor-tab-1') {
            active = 'doctor-tab-1';
            if(!$('.'+active).hasClass('active')) {
                $('.'+active).addClass('active');
                markAsProgress('#tab5',that,active);
            }
            curentDoctorTab = 1;
        }
        else if($(this).attr('data-target') === 'doctor-tab-2') {
            active = 'doctor-tab-2';
            if(!$('.'+active).hasClass('active')) {
                $('.'+active).addClass('active');
                markAsProgress('#tab5',that,active);

            }
            curentDoctorTab = 2;
        }
        else if($(this).attr('data-target') === 'doctor-tab-3') {
            active = 'doctor-tab-3';
            if(!$('.'+active).hasClass('active')) {
                $('.'+active).addClass('active');
                markAsProgress('#tab5',that,active);
                console.log("I logged")
            }
            curentDoctorTab = 3;
        }
        else if($(this).attr('data-target') === 'doctor-tab-4') {
            active = 'doctor-tab-4';
            if(!$('.'+active).hasClass('active')) {
                $('.'+active).addClass('active');
                markAsProgress('#tab5',that,active);
            }
            curentDoctorTab = 4;
        }
        else if($(this).attr('data-target') === 'doctor-tab-5') {
            active = 'doctor-tab-5';
            if(!$('.'+active).hasClass('active')) {
                $('.'+active).addClass('active');
                markAsProgress('#tab5',that,active);
            }
            curentDoctorTab = 5;
        }
    });

    function setDoctorPanelCost(_price) {
        $("#tab5 .brand-sidebar-wrapper .brand-price-summary .pr").text(parseInt(_price));
    }

    function getDoctorPanelCost() {
        return parseInt($("#tab5 .brand-sidebar-wrapper .brand-price-summary .pr").text());
    }
    /*--------------------------------------------------------------------------------*/
    function setDoctorDataAttrValue(_price) {
        $("#tab5 .brand-sidebar-wrapper .brand-price-summary .pr").attr('data-doctor-panel-cost',parseInt(_price));
    }

    function getDoctorDataAttrValue() {
        return parseInt($("#tab5 .brand-sidebar-wrapper .brand-price-summary .pr").attr('data-doctor-panel-cost'));
    }
    /*--------------------------------------------------------------------------------*/
    function getTotalPriceAttrValue() {
        if ($(".header-price .price-number").attr('data-total-price')) {
            return parseInt($(".header-price .price-number").attr('data-total-price'));
        }
    }

    function setTotalPrice(_price) {
        _price = parseInt(_price);
        var current = getTotalPriceAttrValue();
        $(".header-price .price-number .pr").text(_price+current);
    }
    /*--------------------------------------------------------------------------------*/
    function initDoctorPanelCost() {
        $.each($('#tab5 .equipment.selected'),function() {
            if($(this).parents('.doctor-tab').hasClass('doctor-tab-1')) {
                doctorPanelLabels[0] = $(this).attr('data-name');
                doctorPanelCostTab[0] = parseInt($(this).attr('data-price'));
            }
        })
        setDoctorDataAttrValue(doctorPanelCostTab[0]);
        setDoctorPanelCost(doctorPanelCostTab[0]);
    }
    /*--------------------------------------------------------------------------------*/
    function initDoctorPanelCard() {
        $.each($('#tab5 .doctor-panel-card'),function() {
            $.each($(this).find('[data-default]'),function() {
                var temp = $(this).attr('data-default');
                $(this).text(temp);
            })
        })
    }
    /*--------------------------------------------------------------------------------*/
    function resetDoctorPanel() {
        $.each($('#tab5 .equipment'), function() {
            if($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                $(this).find('.label-button').text("WYBIERAM");
            }
            if($(this).attr('data-standard')) {
                $(this).addClass('selected');
                $(this).find('.label-button').text("WYBRANO");
            }
            $.each(doctorPanelCostTab, function(value,index) {
                doctorPanelCostTab[value] = 0;
            })
            $.each(doctorPanelLabels, function(value,index) {
                doctorPanelLabels[value] = '';
            })
            $.each(doctorPanelCategories, function(value,index) {
                doctorPanelCategories[value] = '';
            })
            $.each($('#tab5 .panel-card-cover'),function() {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            })
            $.each($('#tab5 #doctor-panel-tabs-list .doctor-panel-choice'), function() {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            })
            $.each($('#tab5 .doctor-tab .main-panel-wrapper'), function() {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            })
            $.each($('#tab5 [type="radio"]'), function() {
                if($(this).hasClass('default-radio')) {
                    if(!$(this).attr('data-confirmed')) {
                        $(this).attr('data-confirmed','confirmed');
                    }
                    if(!$(this).hasClass('selected')) {
                        $(this).addClass('selected')
                    }
                    if(!$(this).is(":checked")) {
                        $(this).prop('checked',true);
                    }
                }
                else {
                    if($(this).attr('data-confirmed')) {
                        $(this).removeAttr('data-confirmed');
                    }
                    if($(this).hasClass('selected')) {
                        $(this).removeClass('selected')
                    }
                    if($(this).is(":checked")) {
                        $(this).prop('checked',false);
                    }
                }
            })
            $.each($('#tab5 .brand-choose-sidebar .choosen-brand-sign'), function() {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            })

            resetTabsAndRadiobuttons('.doctor-tab');
            initDoctorPanelCost();
            initDoctorPanelCard();

            //step 6
            resetAssystPanelCost()
        })
    }

    function getDoctorParentTab(_that) {
        var parent = '';
        if(_that.closest('.doctor-tab').hasClass('doctor-tab-2')) {
            parent = '.doctor-tab-2';
        }
        else if(_that.closest('.doctor-tab').hasClass('doctor-tab-3')) {
            parent = '.doctor-tab-3';
        }
        else if(_that.closest('.doctor-tab').hasClass('doctor-tab-4')) {
            parent = '.doctor-tab-4';
        }
        else if(_that.closest('.doctor-tab').hasClass('doctor-tab-5')) {
            parent = '.doctor-tab-5';
        }
        // console.log('PARENT: '+parent);
        return parent;
    }

    function setConfirmedProduct(_that) {
        $.each($(_that).find('input[type="radio"]'), function() {
            if(!$(this).attr('data-confirmed')) {
                if($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                if($(this).is(":checked")) {
                    $(this).prop('checked', false);
                }
                if($(this).closest('.checkbox-card').hasClass('checkbox-card-active')) {
                    $(this).closest('.checkbox-card').removeClass('checkbox-card-active');
                }
            }
            else {
                if(!$(this).hasClass('selected')) {
                    $(this).addClass('selected');
                }
                if(!$(this).is(":checked")) {
                    $(this).prop('checked', true);
                }
                if(!$(this).closest('.checkbox-card').hasClass('checkbox-card-active')) {
                    $(this).closest('.checkbox-card').removeClass('checkbox-card-active');
                }
            }
            if($(_that).find('.btn-doctor-panel-accept').hasClass('visible')) {
                // console.log('wywalam przycisk po anulowaniu');
                $(_that).find('.btn-doctor-panel-accept').removeClass('visible');
            }
        })
    }

    function resetAttentionBlock() {
        console.log('reset ATTENTION BLOCK')
        var flag = false;

        $.each($('#tab5 .attention-block-wrapper'), function() {
            if($(this).hasClass('hidden')) {
                $(this).removeClass('hidden');
                flag = true;
            }
        })
        if(flag) {
            console.log('wchodze w konkretny reset');
            $.each($('#tab5 .doctor-tab-5 '), function() {
                if($(this).hasClass('hidden')) {
                    $(this).removeClass('hidden')
                }
            })

            $.each($('#tab5 .doctor-panel-card'), function() {
                $(this).find('.doctor-model').text($(this).find('.doctor-model').attr('data-default'))
            })

            attentionDoctorPanelCost = 0;

            var price = getDoctorDataAttrValue();
            var sum = price - parseInt(attentionDoctorPanelCost);

            if(sum < 0) {
                sum = 0
            }

            setDoctorDataAttrValue(sum);
            setDoctorPanelCost(sum)
        }

    }

    var attentionDoctorPanelCost = 0;
    $(document).on('click touch', '.attention-block-wrapper button', function() {
        if($(this).hasClass('select-pneumatic')) {
            var current = $(this).closest('#tab5').find('.panel-card-cover.available .doctor-model');
            current.text('Pneumatyczny M4');

            attentionDoctorPanelCost = 350;

            var price = getDoctorDataAttrValue();
            var sum = price + parseInt(attentionDoctorPanelCost);
            setDoctorDataAttrValue(sum);
            setDoctorPanelCost(sum)

        }
        $.each($('#tab5 .doctor-tab-5 .doctor-panel-choice'), function() {
            if(!$(this).hasClass('available')) {
                $(this).addClass('available');
            }
        })
        if(!$(this).closest('.attention-block-wrapper').hasClass('hidden')) {
            $(this).closest('.attention-block-wrapper').addClass('hidden');
        }


    })

    function triggerDoctorPanelCost(_handler) {
        $(document).on('click touch', _handler, function() {
            var current = doctorPanelCostTab[0];

            if($(this).hasClass('btn-doctor-panel-accept')) {

                doctorPanelLabels[0] = strzykawkoDmuchawka;
                doctorPanelLabels[1] = rekaw1;
                doctorPanelLabels[2] = rekaw1Dodatkowa;
                doctorPanelLabels[3] = rekaw2;
                doctorPanelLabels[4] = rekaw2Dodatkowa;
                doctorPanelLabels[5] = rekaw3;
                doctorPanelLabels[6] = rekaw3Dodatkowa;
                doctorPanelLabels[7] = rekaw4;
                doctorPanelLabels[8] = rekaw4Dodatkowa;
                doctorPanelLabels[9] = rekaw5;
                doctorPanelLabels[10] = rekaw5Dodatkowa;

                doctorPanelCategories[0] = strzykawkoDmuchawkaKategoria;
                doctorPanelCategories[1] = rekaw1Kategoria;
                doctorPanelCategories[2] = rekaw2Kategoria;
                doctorPanelCategories[3] = rekaw3Kategoria;
                doctorPanelCategories[4] = rekaw4Kategoria;
                doctorPanelCategories[5] = rekaw5Kategoria;

                var active = '';
                var that = $(this);

                if($(this).closest('.doctor-tab').hasClass('doctor-tab-1')) {
                    active = 'doctor-tab-1';
                    var parent = $('#tab5').find('[data-target='+active+']').parents('.panel-card-cover');
                    if(!parent.hasClass('active')) {
                        parent.addClass('active');
                    }
                    $.each(parent.find('[data-default]'),function() {
                        // console.log($(this).attr('class'));
                        if($(this).hasClass('panel-card-title')) {
                            $(this).text("Wybrano");
                        }
                        else if($(this).hasClass('doctor-type')) {
                            $(this).text(doctorPanelLabels[0]);
                        }
                        else if($(this).hasClass('doctor-model')) {
                            $(this).text(doctorPanelCategories[0]);
                        }
                    })
                    markAsDone('#tab5',that,active,doctorPanelLabels[0]);
                }
                else if($(this).closest('.doctor-tab').hasClass('doctor-tab-2')){
                    active = 'doctor-tab-2';
                    doctorPanelLabels[1] = '';
                    doctorPanelLabels[2] = '';
                    doctorPanelCategories[1] = '';
                    doctorPanelCostTab[1] = 0;

                    $.each($(this).closest('.'+active).find('input[type="radio"]'), function() {
                        if($(this).attr('data-confirmed')) {
                            $(this).removeAttr('data-confirmed');
                        }
                    })

                    $.each($(this).closest('.'+active).find('input[type="radio"]:checked.selected'), function() {
                        $(this).attr('data-confirmed','confirmed');

                        if(!$(this).hasClass('added')) {
                            doctorPanelLabels[1] = $(this).attr('data-name');
                            doctorPanelCategories[1] = $(this).attr('data-type');
                        }
                        else {
                            doctorPanelLabels[2] = $(this).attr('data-name');
                        }
                    })

                    if($(this).hasClass('visible')) {
                        $(this).removeClass('visible');
                    }


                    var parent = $('#tab5').find('[data-target='+active+']').parents('.panel-card-cover');
                    if(!parent.hasClass('active')) {
                        parent.addClass('active');
                    }
                    $.each(parent.find('[data-default]'),function() {
                        if($(this).hasClass('panel-card-title')) {
                            $(this).text("Wybrano");
                        }
                        else if($(this).hasClass('doctor-type')) {
                            $(this).text(doctorPanelLabels[1]);
                        }
                        else if($(this).hasClass('doctor-model')) {
                            $(this).text(doctorPanelCategories[1]);
                        }
                    })
                    markAsDone('#tab5',that,active,doctorPanelLabels[1]);
                }
                else if($(this).closest('.doctor-tab').hasClass('doctor-tab-3')){
                    active = 'doctor-tab-3';
                    doctorPanelLabels[3] = '';
                    doctorPanelLabels[4] = '';
                    doctorPanelCategories[2] = '';
                    doctorPanelCostTab[2] = 0;

                    $.each($(this).closest('.'+active).find('input[type="radio"]'), function() {
                        if($(this).attr('data-confirmed')) {
                            $(this).removeAttr('data-confirmed');
                        }
                    })

                    $.each($(this).closest('.'+active).find('input[type="radio"]:checked.selected'), function() {
                        $(this).attr('data-confirmed','confirmed');

                        if(!$(this).hasClass('added')) {
                            doctorPanelLabels[3] = $(this).attr('data-name');
                            doctorPanelCategories[3] = $(this).attr('data-type');
                        }
                        else {
                            doctorPanelLabels[4] = $(this).attr('data-name');
                        }
                    })
                    if($(this).hasClass('visible')) {
                        $(this).removeClass('visible');
                    }

                    var parent = $('#tab5').find('[data-target='+active+']').parents('.panel-card-cover');
                    if(!parent.hasClass('active')) {
                        parent.addClass('active');
                    }
                    $.each(parent.find('[data-default]'),function() {
                        if($(this).hasClass('panel-card-title')) {
                            $(this).text("Wybrano");
                        }
                        else if($(this).hasClass('doctor-type')) {
                            $(this).text(doctorPanelLabels[3]);
                        }
                        else if($(this).hasClass('doctor-model')) {
                            $(this).text(doctorPanelCategories[3]);
                        }
                    })
                    markAsDone('#tab5',that,active,doctorPanelLabels[3]);
                }
                else if($(this).closest('.doctor-tab').hasClass('doctor-tab-4')){
                    active = 'doctor-tab-4';
                    doctorPanelLabels[5] = '';
                    doctorPanelLabels[6] = '';
                    doctorPanelCategories[3] = '';
                    doctorPanelCostTab[3] = 0;

                    $.each($(this).closest('.'+active).find('input[type="radio"]'), function() {
                        if($(this).attr('data-confirmed')) {
                            $(this).removeAttr('data-confirmed');
                        }
                    })

                    $.each($(this).closest('.'+active).find('input[type="radio"]:checked.selected'), function() {
                        $(this).attr('data-confirmed','confirmed');

                        if(!$(this).hasClass('added')) {
                            doctorPanelLabels[5] = $(this).attr('data-name');
                            doctorPanelCategories[5] = $(this).attr('data-type');
                        }
                        else {
                            doctorPanelLabels[6] = $(this).attr('data-name');
                        }
                    })
                    if($(this).hasClass('visible')) {
                        $(this).removeClass('visible');
                    }

                    var parent = $('#tab5').find('[data-target='+active+']').parents('.panel-card-cover');
                    if(!parent.hasClass('active')) {
                        parent.addClass('active');
                    }
                    $.each(parent.find('[data-default]'),function() {
                        if($(this).hasClass('panel-card-title')) {
                            $(this).text("Wybrano");
                        }
                        else if($(this).hasClass('doctor-type')) {
                            $(this).text(doctorPanelLabels[5]);
                        }
                        else if($(this).hasClass('doctor-model')) {
                            $(this).text(doctorPanelCategories[5]);
                        }
                    })
                    markAsDone('#tab5',that,active,doctorPanelLabels[5]);
                }
                else if($(this).closest('.doctor-tab').hasClass('doctor-tab-5')){
                    active = 'doctor-tab-5';
                    doctorPanelLabels[7] = '';
                    doctorPanelLabels[8] = '';
                    doctorPanelCategories[4] = '';
                    doctorPanelCostTab[4] = 0;

                    $.each($(this).closest('.'+active).find('input[type="radio"]'), function() {
                        if($(this).attr('data-confirmed')) {
                            $(this).removeAttr('data-confirmed');
                        }
                    })
                    $.each($(this).closest('.'+active).find('input[type="radio"]:checked.selected'), function() {
                        $(this).attr('data-confirmed','confirmed');

                        if(!$(this).hasClass('added')) {
                            doctorPanelLabels[7] = $(this).attr('data-name');
                            doctorPanelCategories[7] = $(this).attr('data-type');
                        }
                        else {
                            doctorPanelLabels[8] = $(this).attr('data-name');
                        }
                    })
                    if($(this).hasClass('visible')) {
                        $(this).removeClass('visible');
                    }

                    var parent = $('#tab5').find('[data-target='+active+']').parents('.panel-card-cover');
                    if(!parent.hasClass('active')) {
                        parent.addClass('active');
                    }
                    $.each(parent.find('[data-default]'),function() {
                        if($(this).hasClass('panel-card-title')) {
                            $(this).text("Wybrano");
                        }
                        else if($(this).hasClass('doctor-type')) {
                            $(this).text(doctorPanelLabels[7]);
                        }
                        else if($(this).hasClass('doctor-model')) {
                            $(this).text(doctorPanelCategories[7]);
                        }
                    })
                    markAsDone('#tab5',that,active,doctorPanelLabels[7]);
                }

                updateDoctorPanelPrice();
                var sum = updateDoctorPanelPrice();
                setDoctorDataAttrValue(sum);

                $.each($('#tab5 .doctor-tab'),function() {
                    if($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    }
                })
                $(".doctor-panel-title").show();
                $(".doctor-panel-top").show();
                $(".doctor-panel-row").show();
            }
            else if($(this).hasClass('btn-doctor-panel-cancel')) {
                if($(this).parents('.doctor-tab').hasClass('doctor-tab-1')) {
                    // console.log('tak wchodze bo moj parent to: '+$(this).parents('.doctor-tab').attr('class'));
                    $.each($('#tab5 .equipment'), function() {
                        var that = $(this);
                        if(that.attr('data-name') === doctorPanelLabels[0]) {
                            if(!that.hasClass('selected')) {
                                that.addClass('selected');
                                $(this).find('.label-button').text("WYBRANO");
                            }
                        }
                        else {
                            if(that.hasClass('selected')) {
                                that.removeClass('selected');
                                $(this).find('.label-button').text("WYBIERAM");
                            }
                        }
                    });
                }
                else {
                    if($(this).closest('.doctor-tab').hasClass('doctor-tab-2')){
                        setConfirmedProduct('.doctor-tab-2')
                    }
                    else if($(this).closest('.doctor-tab').hasClass('doctor-tab-3')){
                        setConfirmedProduct('.doctor-tab-3')
                    }
                    else if($(this).closest('.doctor-tab').hasClass('doctor-tab-4')){
                        setConfirmedProduct('.doctor-tab-4')
                    }
                    else if($(this).closest('.doctor-tab').hasClass('doctor-tab-5')){
                        setConfirmedProduct('.doctor-tab-5')
                    }

                }

                triggerTabsStatement();

                var current = getDoctorDataAttrValue();
                setDoctorPanelCost(current);

                $.each($('#tab5 .doctor-tab'),function() {
                    if($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    }
                })
                $(".doctor-panel-title").show();
                $(".doctor-panel-top").show();
                $(".doctor-panel-row").show();
            }
            else {
                setDoctorPanelCost(current);
            }
        })
    }

    $(document).on('click touch', "#tab5 .equipment",function () {
        if(!$(this).hasClass('selected')) {
            // console.log('resetuje cene poczatkowa')
            if($(this).parents('.doctor-tab').hasClass('doctor-tab-1')) {
                $.each($("#tab5 .doctor-tab-1 .equipment"),function() {
                    if($(this).hasClass('selected')) {
                        $(this).removeClass('selected');
                        $(this).find('.label-button').text("WYBIERAM");
                    }
                });
                $(this).find('.label-button').text("WYBRANO");

                strzykawkoDmuchawka = $(this).attr('data-name');
                strzykawkoDmuchawkaKategoria = $(this).attr('data-type');
                strzykawkoDmuchawkaCena = parseInt($(this).attr('data-price'));
                doctorPanelCostTab[0] = strzykawkoDmuchawkaCena;
            }
            $(this).addClass('selected');
        }
    });

    $(document).on('click touch', "#tab5 #doctor-panel-tabs-list .doctor-panel-choice",function() {
        if(!$(this).hasClass('active')) {
            var that = $(this);
            var parent = getDoctorParentTab(that);


            var tab = $(this).attr('id');
            $.each($('#tab5 '+parent+' #doctor-panel-tabs-list .doctor-panel-choice'), function() {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            })
            $.each($('#tab5 '+parent+' .main-panel-wrapper'), function() {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            })

            $(this).addClass('active');
            $.each($(this).parents(parent).find('.main-panel-wrapper'), function() {
                if($(this).attr('data-tab') === tab) {
                    if(!$(this).hasClass('active')) {
                        $(this).addClass('active');
                    }
                }
            })
        }
    })

    $(document).on('click touch','#tab5 .tab-trigger', function() {
        if(!$(this).hasClass('active')) {
            var that = $(this);
            var parent = getDoctorParentTab(that);
            resetTabsAndRadiobuttons(parent);
            that = $(this).attr('id');

            $(this).addClass('active');
            $.each($('#tab5 '+parent+' .tab-content, #tab5 '+parent+' .tab-content-internal-1, #tab5 '+parent+' .tab-trigger-internal-2'),function() {
                if($(this).attr('data-tab') === that) {
                    if(!$(this).hasClass('active')) {
                        $(this).addClass('active');
                    }
                }
                else {
                    if($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    }
                }
            })
            triggerTabsStatement();
        }
    })

    function triggerInternalTabs(_handler,_content) {
        $(document).on('click touch',_handler, function() {
            if(!$(this).hasClass('active')) {
                var that = $(this);
                var parent = getDoctorParentTab(that);
                that = $(this).attr('id');

                $.each($('#tab5 '+parent+' '+_handler),function() {
                    if($(this).hasClass('active')) {
                        $(this).removeClass('active')
                    }
                })

                // $.each($('#tab5 '+parent+' '+_content),function() {
                //     $.each($(this).find('[type="radio"]'), function() {
                //         if($(this).is(":checked")) {
                //             if($(this).hasClass('selected')) {
                //                 $(this).removeClass('selected');
                //                 $(this).prop('checked', false);
                //                 if ($(this).parents('.checkbox-card').hasClass('checkbox-card-active')) {
                //                     $(this).parents('.checkbox-card').removeClass('checkbox-card-active')
                //                 }
                //             }
                //         }
                //     })
                //     if($(this).hasClass('active')) {
                //         $(this).removeClass('active')
                //     }
                // });

                $.each($('#tab5 '+parent+' .btn-doctor-panel-accept'), function() {
                    if($(this).hasClass('visible')) {
                        $(this).removeClass('visible');
                    }
                })

                $(this).addClass('active');
                $.each($('#tab5 '+parent+' '+_content),function() {
                    if($(this).attr('data-tab') === that) {
                        if(!$(this).hasClass('active')) {
                            $(this).addClass('active');
                        }
                    }
                    else {
                        if($(this).hasClass('active')) {
                            $(this).removeClass('active');
                        }
                    }
                })

                // var current = getDoctorDataAttrValue();
                // var price = 0;
                // $.each($(this).closest(parent).find('input[type="radio"]:checked.selected'), function() {
                //     console.log($(this).attr('data-price'));
                //     price = price + parseInt($(this).attr('data-price'));
                // })
                //
                // var sum = current + price;
                // setDoctorPanelCost(sum);
                triggerTabsStatement();
            }
        })
    }

    function triggerTabsStatement() {

        // $.each($('#tab5 .tab-trigger'), function() {
        $.each($('#tab5 .tab2-button'), function() {
            var that = $(this);
            if($(this).attr('data-stmt') && !$(this).hasClass('active')) {
                // console.log('powinienem odpalic');
                var parent = getDoctorParentTab(that);
                var stmt = $(this).attr('data-stmt');
                stmt = '.'+stmt;

                if($(parent).find(stmt).hasClass('active')) {
                    $(parent).find(stmt).removeClass('active');
                }
            }
            else {
                // console.log('powinienem odpalic2');
                var parent = getDoctorParentTab(that);
                var stmt = $(this).attr('data-stmt');
                stmt = '.'+stmt;

                if(!$(parent).find(stmt).hasClass('active')) {
                    $(parent).find(stmt).addClass('active');
                }
            }
        })
    }

    $(document).on('change','#tab5 [type="radio"]',function() {
        var that = $(this);
        var parent = getDoctorParentTab(that);

        // console.log('CENA: '+$(this).attr('data-price'));

        $.each($('#tab5 '+parent+' [type="radio"]'),function() {
            if(!$(this).is(':checked')) {
                if($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                if ($(this).parents('.checkbox-card').hasClass('checkbox-card-active')) {
                    $(this).parents('.checkbox-card').removeClass('checkbox-card-active')
                }
            }
        })

        if(!$(this).attr('data-variant')) {
            // console.log('ty nie masz wariantu!')
            $.each($('#tab5 '+parent+' .tab-content-internal-2 [type="radio"]'),function() {
                if($(this).is(":checked")) {
                    // console.log('zaznaczone w conent internal 2');
                    if($(this).hasClass('selected')) {
                        $(this).removeClass('selected');
                        $(this).prop('checked', false);
                        if ($(this).parents('.checkbox-card').hasClass('checkbox-card-active')) {
                            $(this).parents('.checkbox-card').removeClass('checkbox-card-active')
                        }
                    }
                }
            })
        }
        else {
            console.log($(this).attr('data-variant'));
            //reset
            $.each($('#tab5 '+parent+' .tab-trigger-internal-2'),function() {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active')
                }
            })

            $.each($('#tab5 '+parent+' .tab-content-internal-2'),function() {
                $.each($(this).find('[type="radio"]'), function() {
                    if($(this).is(":checked")) {
                        if($(this).hasClass('selected')) {
                            $(this).removeClass('selected');
                            $(this).prop('checked', false);
                            if ($(this).parents('.checkbox-card').hasClass('checkbox-card-active')) {
                                $(this).parents('.checkbox-card').removeClass('checkbox-card-active')
                            }
                        }
                    }
                })
                if($(this).hasClass('active')) {
                    $(this).removeClass('active')
                }
            });

            $.each($('#tab5 '+parent+' .tab-content-internal-2 .choose-to-continue'),function() {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            })

            $.each($('#tab5 '+parent+' .btn-doctor-panel-accept'), function() {
                if($(this).hasClass('visible')) {
                    $(this).removeClass('visible');
                }
            })

            resetPriceWhenResetTabsAndRadiobuttons();
            //koniec resetu

            var variant = $(this).attr('data-variant');
            if(variant === 'mikro-katnica-light' || variant === 'mikro-katnica-no-light') {
                console.log('katnice - prostnice');
                if(!$('#tab5 '+parent+' [data-tab="mikro-internal"]').hasClass('active')) {
                    $('#tab5 '+parent+' [data-tab="mikro-internal"]').addClass('active');
                }
                if(!$('#tab5 '+parent+' [data-tab="mikro-internal"] .tab-content-internal-2 .choose-to-continue.'+variant).hasClass('active')) {
                    $('#tab5 '+parent+' [data-tab="mikro-internal"] .tab-content-internal-2 .choose-to-continue.'+variant).addClass('active')
                }
            }
        }

        if($(this).is(":checked")) {
            if(!$(this).hasClass('selected')) {

                if($(this).closest('.active').is('.tab-last','.active') || $(this).closest('.default').is('.tab-last','.active')) {
                    console.log('to jeden z ostatnich');
                    if(!$(this).closest(parent).find('.btn-doctor-panel-accept').hasClass('visible')) {
                        $(this).closest(parent).find('.btn-doctor-panel-accept').addClass('visible')
                    }
                }

                $(this).addClass('selected');

                if(!$(this).closest('.checkbox-card').hasClass('checkbox-card-active')) {
                    $(this).closest('.checkbox-card').addClass('checkbox-card-active')
                }

                var current = doctorPanelCostTab[0];
                console.log('attention-block-cost: '+attentionDoctorPanelCost);
                var price = parseInt(0 + attentionDoctorPanelCost);

                $.each($('.doctor-tab input[type="radio"]:checked.selected'), function() {
                    price = price + parseInt($(this).attr('data-price'));
                })
                var sum = current + price;
                setDoctorPanelCost(sum);
            }
        }
    });

    function resetTabsAndRadiobuttons(_parent) {
        //reset kart + reset radiobuttonow
        console.log('reset kart i radiobuttonow');
        $.each($('#tab5 '+_parent+' .tab-trigger, #tab5 '+_parent+' .tab-trigger-internal-1, #tab5 '+_parent+' .tab-trigger-internal-2'),function() {
            if($(this).hasClass('active')) {
                $(this).removeClass('active')
            }
        })
        // $.each($('#tab5 '+_parent+' .tab-content, #tab5 '+_parent+' .tab-content-internal-1, #tab5 '+_parent+' .tab-content-internal-2'),function() {
            // $.each($(this).find('[type="radio"]:checked.selected:not([data-confirmed="confirmed"])'), function() {
            //     $(this).removeClass('selected');
            //     $(this).prop('checked', false);
            //     if ($(this).parents('.checkbox-card').hasClass('checkbox-card-active')) {
            //         $(this).parents('.checkbox-card').removeClass('checkbox-card-active')
            //     }
            // })
            // if($(this).hasClass('active')) {
            //     $(this).removeClass('active')
            // }
        // });

        $.each($('#tab5 '+_parent+' .btn-doctor-panel-accept'), function() {
            if($(this).hasClass('visible')) {
                $(this).removeClass('visible');
            }
        })

        // resetPriceWhenResetTabsAndRadiobuttons()
    }

    function resetPriceWhenResetTabsAndRadiobuttons() {
        console.log('licze cene sumaryczna');
        var current = getDoctorDataAttrValue();
        var price = 0;

        $.each($('#tab5 .doctor-tab input[type="radio"]:checked.selected'), function() {
            price = price + parseInt($(this).attr('data-price'));
        })

        var sum = current + price;
        setDoctorPanelCost(sum);
    }
    /*w przypadku wcisniecia "Anuluj" przywraca zaznaczenia na podstawie elementow ktore sa w tablicy czyli de facto byly zaznaczone*/
    function updateDoctorPanelPrice() {
        var current = doctorPanelCostTab[0];
        var price = parseInt(0 + attentionDoctorPanelCost);

        $.each($('.doctor-tab input[type="radio"][data-confirmed="confirmed"]'), function() {
            if(!$(this).is(":checked")) {
                $(this).prop('checked',true);
            }
            if($(this).hasClass('selected')) {
                $(this).addClass('selected');
            }
            price = price + parseInt($(this).attr('data-price'));
        })
        console.log('CURRENT = '+current);
        console.log('PRICE = '+price);
        var sum = current + price;
        setDoctorPanelCost(sum);
        return sum;
    }

    initDoctorPanelCost();
    initDoctorPanelCard();
    triggerDoctorPanelCost('#tab5 .btn-doctor-panel-accept');
    triggerDoctorPanelCost('#tab5 .btn-doctor-panel-cancel');
    triggerDoctorPanelCost('#tab5 .equipment');
    triggerInternalTabs('.tab-trigger-internal-1','.tab-content-internal-1');
    triggerInternalTabs('.tab-trigger-internal-2','.tab-content-internal-2');

    /*--------------------------------------step 6----------------------------------------*/

    var assystSsakLabel = '';
    var assystSsakCategories = '';

    var assystPiaskarkaLabel = '';
    var assystPiaskarkaCategories = '';

    var assystStrzykawkoDmuchawkaLabel = '';
    var assystStrzykawkoDmuchawkaCategories = '';

    var assystLampaLabel = '';
    var assystLampaCategories = '';

    var assystPanelLabels = [assystSsakLabel,assystPiaskarkaLabel,assystStrzykawkoDmuchawkaLabel,assystLampaLabel];
    var assystPanelCategories = [assystSsakCategories,assystPiaskarkaCategories,assystStrzykawkoDmuchawkaCategories,assystLampaCategories];



    function initAssystPanelCost() {
        if($('#tab6 .brand-price-summary .pr').attr('data-assyst-panel-cost')) {
            var price = getAssystDataAttrValue()
            setAssystPanelCost(price);
        }
        $.each($('#tab6 .button-to-go'), function() {
            $(this).text($(this).attr('data-default'));
        })
    }

    function activeAssystStep1() {
        $.each($('#tab6 .step-1'), function() {
            if(!$(this).hasClass('active')) {
                $(this).addClass('active');
            }
        })
        $.each($('#tab6 .step-2'), function() {
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        })
    }

    function activeAssystStep2() {
        $.each($('#tab6 .step-2'), function() {
            if(!$(this).hasClass('active')) {
                $(this).addClass('active');
            }
        })
        $.each($('#tab6 .step-1'), function() {
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        })
    }

    function resetAssystPanelCost() {
        if($('#tab6 .brand-price-summary .pr').attr('data-assyst-panel-cost')) {
            setAssystDataAttrValue(0)
            setAssystPanelCost(0);
        }

        $.each($('#tab6 .assyst-content-wrapper .assyst-main-button'), function() {
            if($(this).attr('data-standard')) {
                if(!$(this).hasClass('selected')) {
                    $(this).addClass('selected');
                }
            }
            else {
                if($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
            }
        })

        $.each($('#tab6 .brand-choose-sidebar .nextStepActive'), function() {
            $(this).text($(this).attr('data-default'));
        })

        $.each($('#tab6 .choosen-assyst'), function() {
            if($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            }
        })

        $.each($('#tab6 .brand-choose-sidebar .choosen-assyst'), function() {
            if($(this).attr('data-standard')) {
                if(!$(this).hasClass('selected')) {
                    $(this).addClass('selected');
                }
            }
            else {
                if($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
            }
        })

        if($('#tab6 .brand-choose-sidebar .info').hasClass('hidden')) {
            $('#tab6 .brand-choose-sidebar .info').removeClass('hidden')
        }

        activeAssystStep1();
    }

    function setAssystPanelCost(_price) {
        $("#tab6 .brand-sidebar-wrapper .brand-price-summary .pr").text(parseInt(_price));
    }

    function getAssystPanelCost() {
        return parseInt($("#tab6 .brand-sidebar-wrapper .brand-price-summary .pr").text());
    }
    /*--------------------------------------------------------------------------------*/
    function setAssystDataAttrValue(_price) {
        $("#tab6 .brand-sidebar-wrapper .brand-price-summary .pr").attr('data-assyst-panel-cost',parseInt(_price));
    }

    function getAssystDataAttrValue() {
        return parseInt($("#tab6 .brand-sidebar-wrapper .brand-price-summary .pr").attr('data-assyst-panel-cost'));
    }
    /*--------------------------------------------------------------------------------*/

    function updateAssystPanelPrice() {
        var current = assystPanelCostTab[0];
        var price = parseInt(0 + attentionDoctorPanelCost);

        $.each($('.doctor-tab input[type="radio"][data-confirmed="confirmed"]'), function() {
            if(!$(this).is(":checked")) {
                $(this).prop('checked',true);
            }
            if($(this).hasClass('selected')) {
                $(this).addClass('selected');
            }
            price = price + parseInt($(this).attr('data-price'));
        })
        var sum = current + price;
        setDoctorPanelCost(sum);
        return sum;
    }

    function getAssystPanelTab(_that) {
        var parent = '';
        if(_that.closest('.assyst-tab').hasClass('assyst-tab-1')) {
            parent = '.assyst-tab-1';
        }
        else if(_that.closest('.assyst-tab').hasClass('assyst-tab-2')) {
            parent = '.assyst-tab-2';
        }
        else if(_that.closest('.assyst-tab').hasClass('assyst-tab-3')) {
            parent = '.assyst-tab-3';
        }
        return parent;
    }

    $(document).on('click touch', '#tab6 .assyst-content-wrapper .assyst-main-button', function() {
        if(!$(this).attr('data-standard')) {
            if(!$(this).hasClass('selected')) {

                $(this).addClass('selected');

                $.each($('#tab6 .brand-choose-sidebar .button-to-go[data-trigger]'), function() {
                    $(this).text($(this).attr('data-trigger'));
                    if($(this).hasClass('nextStepActive')) {
                        $(this).removeClass('nextStepActive')
                    }
                })

                if(!$('#tab6 .brand-choose-sidebar .info').hasClass('hidden')) {
                    $('#tab6 .brand-choose-sidebar .info').addClass('hidden')
                }
                if(!$('#tab6 .brand-choose-sidebar .choosen-assyst.available').hasClass('selected')) {
                    $('#tab6 .brand-choose-sidebar .choosen-assyst.available').addClass('selected');
                }

                setAssystPanelCost($(this).attr('data-price'));


            }
            else {
                $(this).removeClass('selected');

                $.each($('#tab6 .brand-choose-sidebar .button-to-go[data-trigger]'), function() {
                    $(this).text($(this).attr('data-default'));
                    if(!$(this).hasClass('nextStepActive')) {
                        $(this).addClass('nextStepActive')
                    }
                })

                if($('#tab6 .brand-choose-sidebar .info').hasClass('hidden')) {
                    $('#tab6 .brand-choose-sidebar .info').removeClass('hidden')
                }
                if($('#tab6 .brand-choose-sidebar .choosen-assyst.available').hasClass('selected')) {
                    $('#tab6 .brand-choose-sidebar .choosen-assyst.available').removeClass('selected');
                }

                setAssystPanelCost(getAssystDataAttrValue());
            }


        }
    })

    $(document).on('click touch', '#tab6 .brand-choose-sidebar .button-to-go', function() {
        if($(this).text() === $(this).attr('data-trigger')) {
            activeAssystStep2();
        }
    })

    $(document).on('click touch', '#tab6 .button-change', function() {
        var active = '';
        var that = $(this);



        if($(this).attr('data-target') === 'assyst-card-1') {
            console.log('1');
            active = 'assyst-card-1';
            if(!$('.'+active).hasClass('active')) {
                $('.'+active).addClass('active');
                markAsProgress('#tab6',that,active);
            }
        }
        else if($(this).attr('data-target') === 'assyst-card-2') {
            console.log('2');
            active = 'assyst-card-2';
            if(!$('.'+active).hasClass('active')) {
                $('.'+active).addClass('active');
                markAsProgress('#tab6',that,active);
            }
        }
        else if($(this).attr('data-target') === 'assyst-card-3') {
            console.log('3');
            active = 'assyst-card-3';
            if(!$('.'+active).hasClass('active')) {
                $('.'+active).addClass('active');
                markAsProgress('#tab6',that,active);
            }
        }

        if(!$('#tab6 .assyst-step2-content').hasClass('hidden')) {
            $('#tab6 .assyst-step2-content').addClass('hidden')
        }
    });

    $(document).on('click touch', "#tab6 .assyst-panel-tabs-list .assyst-panel-choice",function() {
        if(!$(this).hasClass('active')) {
            var that = $(this);
            var parent = getAssystPanelTab(that);


            var tab = $(this).attr('id');
            $.each($('#tab6 '+parent+' .assyst-panel-tabs-list .assyst-panel-choice'), function() {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            })
            $.each($('#tab6 '+parent+' .main-panel-wrapper'), function() {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            })

            $(this).addClass('active');
            $.each($(this).parents(parent).find('.main-panel-wrapper'), function() {
                if($(this).attr('data-tab') === tab) {
                    if(!$(this).hasClass('active')) {
                        $(this).addClass('active');
                    }
                }
            })
        }
    })

    function triggerAssystPanelCost(_handler) {
        $(document).on('click touch', _handler, function() {
            // var current = doctorPanelCostTab[0];

            /*
            if($(this).hasClass('btn-doctor-panel-accept')) {

                assystPanelLabels[0] = assystSsakLabel;
                assystPanelLabels[1] = assystPiaskarkaLabel;
                assystPanelLabels[2] = assystStrzykawkoDmuchawkaLabel;
                assystPanelLabels[3] = assystLampaLabel;

                assystPanelCategories[0] = assystSsakCategories;
                assystPanelCategories[1] = assystPiaskarkaCategories;
                assystPanelCategories[2] = assystStrzykawkoDmuchawkaCategories;
                assystPanelCategories[3] = assystLampaCategories;


                var active = '';
                var that = $(this);

                if($(this).closest('.assyst-tab').hasClass('assyst-tab-1')) {
                    active = 'assyst-tab-1';
                    assystPanelLabels[0] = '';
                    assystPanelCategories[0] = '';

                    $.each($(this).closest('.'+active).find('input[type="radio"]'), function() {
                        if($(this).attr('data-confirmed')) {
                            $(this).removeAttr('data-confirmed');
                        }
                    })


                    if($(this).hasClass('visible')) {
                        $(this).removeClass('visible');
                    }


                    var parent = $('#tab6').find('[data-target='+active+']').parents('.panel-card-cover');
                    if(!parent.hasClass('active')) {
                        parent.addClass('active');
                    }
                    $.each(parent.find('.config-object'),function() {
                        if($(this).hasClass('panel-card-title')) {
                            $(this).text("Wybrano");
                        }
                        else if($(this).hasClass('assyst-type')) {
                            $(this).text(doctorPanelLabels[0]);
                        }
                        else if($(this).hasClass('assyst-model')) {
                            $(this).text(doctorPanelCategories[0]);
                        }
                    })
                    markAsDone('#tab5',that,active,doctorPanelLabels[0]);
                }
                else if($(this).closest('.assyst-tab').hasClass('assyst-tab-2')){
                    active = 'assyst-tab-2';
                    assystPanelLabels[1] = '';
                    assystPanelCategories[1] = '';

                    $.each($(this).closest('.'+active).find('input[type="radio"]'), function() {
                        if($(this).attr('data-confirmed')) {
                            $(this).removeAttr('data-confirmed');
                        }
                    })


                    if($(this).hasClass('visible')) {
                        $(this).removeClass('visible');
                    }


                    var parent = $('#tab6').find('[data-target='+active+']').parents('.panel-card-cover');
                    if(!parent.hasClass('active')) {
                        parent.addClass('active');
                    }
                    $.each(parent.find('.config-object'),function() {
                        if($(this).hasClass('panel-card-title')) {
                            $(this).text("Wybrano");
                        }
                        else if($(this).hasClass('assyst-type')) {
                            $(this).text(doctorPanelLabels[1]);
                        }
                        else if($(this).hasClass('assyst-model')) {
                            $(this).text(doctorPanelCategories[1]);
                        }
                    })
                    markAsDone('#tab5',that,active,doctorPanelLabels[1]);
                }
                else if($(this).closest('.assyst-tab').hasClass('assyst-tab-3')){
                    active = 'assyst-tab-3';
                    assystPanelLabels[2] = '';
                    assystPanelCategories[2] = '';

                    $.each($(this).closest('.'+active).find('input[type="radio"]'), function() {
                        if($(this).attr('data-confirmed')) {
                            $(this).removeAttr('data-confirmed');
                        }
                    })


                    if($(this).hasClass('visible')) {
                        $(this).removeClass('visible');
                    }


                    var parent = $('#tab6').find('[data-target='+active+']').parents('.panel-card-cover');
                    if(!parent.hasClass('active')) {
                        parent.addClass('active');
                    }
                    $.each(parent.find('.config-object'),function() {
                        if($(this).hasClass('panel-card-title')) {
                            $(this).text("Wybrano");
                        }
                        else if($(this).hasClass('assyst-type')) {
                            $(this).text(doctorPanelLabels[2]);
                        }
                        else if($(this).hasClass('assyst-model')) {
                            $(this).text(doctorPanelCategories[2]);
                        }
                    })
                    markAsDone('#tab5',that,active,doctorPanelLabels[2]);
                }


                // updateDoctorPanelPrice();
                // var sum = updateDoctorPanelPrice();
                // setDoctorDataAttrValue(sum);

            }
            else if($(this).hasClass('btn-doctor-panel-cancel')) {

                if($(this).closest('.assyst-tab').hasClass('assyst-tab-1')){
                    // setConfirmedProduct('.doctor-tab-1')
                }
                else if($(this).closest('.assyst-tab').hasClass('assyst-tab-2')){
                    // setConfirmedProduct('.doctor-tab-2')
                }
                else if($(this).closest('.assyst-tab').hasClass('assyst-tab-3')){
                    // setConfirmedProduct('.doctor-tab-3')
                }


                // triggerTabsStatement();
                //
                // var current = getDoctorDataAttrValue();
                // setDoctorPanelCost(current);
                
            }
            */
            $.each($('#tab6 .assyst-tab'),function() {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            })
            if($('.assyst-step2-content').hasClass('hidden')) {
                $('.assyst-step2-content').removeClass('hidden')
            }
        })
    }

    $(document).on('change','#tab6 [type="radio"]',function() {
        var that = $(this);
        var parent = getAssystPanelTab(that);


        $.each($('#tab6 '+parent+' [type="radio"]'),function() {
            if(!$(this).is(':checked')) {
                if($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                if ($(this).parents('.checkbox-card').hasClass('checkbox-card-active')) {
                    $(this).parents('.checkbox-card').removeClass('checkbox-card-active')
                }
            }
        })

        if($(this).is(":checked")) {
            if(!$(this).hasClass('selected')) {

                if($(this).closest('.active').is('.tab-last','.active') || $(this).closest('.default').is('.tab-last','.active')) {
                    console.log('to jeden z ostatnich');
                    if(!$(this).closest(parent).find('.btn-doctor-panel-accept').hasClass('visible')) {
                        $(this).closest(parent).find('.btn-doctor-panel-accept').addClass('visible')
                    }
                }

                $(this).addClass('selected');

                if(!$(this).closest('.checkbox-card').hasClass('checkbox-card-active')) {
                    $(this).closest('.checkbox-card').addClass('checkbox-card-active')
                }

                // var current = doctorPanelCostTab[0];
                // console.log('attention-block-cost: '+attentionDoctorPanelCost);
                // var price = parseInt(0 + attentionDoctorPanelCost);
                //
                // $.each($('.doctor-tab input[type="radio"]:checked.selected'), function() {
                //     price = price + parseInt($(this).attr('data-price'));
                // })
                // var sum = current + price;
                // setDoctorPanelCost(sum);
            }
        }
    });

    triggerAssystPanelCost('.btn-doctor-panel-accept');
    triggerAssystPanelCost('.btn-doctor-panel-cancel');


    initAssystPanelCost();

    $(document).on('click touch', '#tab6 .brand-choose-sidebar .step-back-button', function() {
        activeAssystStep1()
    })


    /*
    $(document).on('change', '#tab5 .tab-as-trigger [type="radio"]', function() {
        if($(this).is(":checked")) {
            if($(this).hasClass('selected')) {
                console.log($(this).attr('data-variant'));
                var variant = $(this).attr('data-variant');

                if(!$('#tab5 [data-tab="mikro-el-internal"]').hasClass('active')) {
                    $('#tab5 [data-tab="mikro-el-internal"]').addClass('active');
                }

                $.each($('#tab5 .tab-content-internal-2 .choose-to-continue'),function() {
                    if($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    }
                })

                if(!$('#tab5 .tab-content-internal-2 .choose-to-continue.'+variant).hasClass('active')) {
                    $('#tab5 .tab-content-internal-2 .choose-to-continue.'+variant).addClass('active')
                }
            }
        }

    })

*/



    // $(".panel-checkbox-div").click(function () {
    //     $(".checkbox-card").removeClass("checkbox-card-active");
    //     $(this).parent().parent().addClass("checkbox-card-active");
    // });


/*
    $(document).on('click touch', ".tab1-accept",function () {
        $.each($('#tab5 .doctor-tab'),function() {
            if($(this).is(':visible')) {
                console.log('visible');
                $(this).hide()
            }
        })
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
*/
    // $(".tab1-cancel").click(function () {
    //     $(".doctor-tab-1").hide();
    //     $(".doctor-tab-2").hide();
    //     $(".doctor-panel-title").show();
    //     $(".doctor-panel-top").show();
    //     $(".doctor-panel-row").show();
    // });


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


        inject_orbitvu('pop-up-color', '/konfigurator/orbitvu12_basic//orbitvuer12.swf', '/konfigurator/orbitvu12_basic//expressInstall.swf', {
            ovus_folder: "/seat-360/" + colorDirection + "/",
            content2: "yes",
            width: "650",
            height: "650"
        });

    });






    /*
    var panel_lekarza_tab1 = {
        "type": "Strzykawko-dmuchawkę",
        "brand": ""
    };


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
*/

    // 7855




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

/*
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
*/

/*
    $(".tab5-continue").click(function () {
        let w = curentDoctorTab.toString();
        $(".doctor-choice-icon" + w).addClass("icon-icon_check");

        $(".doctor-tab-5").hide();
        $(".doctor-panel-title").show();
        $(".doctor-panel-top").show();
        $(".doctor-panel-row").show();
    });
*/

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





    $("#tab6 .tab2-accept").click(function () {
        $(".choose-assyst-product").hide();
        $(".assyst-step2-content").show();
    });

    // $("#tab6 .assyst-place").click(function () {
    //     if ($(".assyst-place .assyst-span").hasClass("icon-icon_check")) {
    //         $(".assyst-place .assyst-span").removeClass("icon-icon_check");
    //     } else {
    //         $(".assyst-place .assyst-span").removeClass("icon-icon_check");
    //         $(".assyst-place .assyst-span").addClass('icon-icon_check');
    //     }
    //
    // });




/*
//tutaj sie tabsy zaczynaja
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
    */
//tutaj tabsy sie koncza



//Change Current Config Text
    changeCurrentCongig = (tabName) => {
        $(".current-configuration").text(tabName)
    }


    // $(".assyst-type-buttons button").click(function () {
    //     $(".assyst-type-buttons button").removeClass("button-blue");
    //     $(this).addClass("button-blue");
    //
    //     let assyst_tab_id = $(this).attr('id');
    //     assystType = $(this).text();
    //
    //     $(".assyst1-wrapper").hide();
    //     $("#" + assyst_tab_id + ".assyst1-wrapper").show();
    // });
    //
    // $("#assyst-ssak .tab2-button-place .tab2-button").click(function () {
    //     $("#assyst-ssak .tab2-button-place .tab2-button").removeClass("button-blue");
    //     $(this).addClass("button-blue");
    // });


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

        console.log("blabla");
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

    // $(".assyst-tab-1").click(function () {
    //     $(".assyst-step2-content").hide();
    //     $(".assyst-tab1").show();
    //     currentAssystTab = 1;
    // });
    //
    // $(".assyst-tab-2").click(function () {
    //     $(".assyst-step2-content").hide();
    //     $(".assyst-tab2").show();
    //     currentAssystTab = 2;
    // });
    //
    // $(".assyst-tab-3").click(function () {
    //     $(".assyst-step2-content").hide();
    //     $(".assyst-tab3").show();
    //     currentAssystTab = 3;
    //
    // });

// turbina-attention-icon attention-p

    $("#assyst-ssak .tab2-button-place button").click(function () {
        assystChoice = $(this).text();
        assystSsak = true;
    });

    $(".choose-assyst-product label").click(function () {
        assystChoice = $(this).text();
    });

    var assAss = false;

    /*
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
                if (assAss) {
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
*/

    // $(".tab5-cancel").click(function () {
    //     $(".attention-block-wrapper").hide();
    // });

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


    truePanelName = (word) =>
    {
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

    trueColorName = (colorId) =>
    {
        if (colorId === "color1" || colorId === "color1_w") {
            return "BORDOWY";
        } else if (colorId === "color2" || colorId === "color2_w") {
            return "BRĄZOWY";
        } else if (colorId === "color3") {
            return "CIEMNO-SZARY";
        } else if (colorId === "color4" || colorId === "color4_w") {
            return "JASNO-SZARY";
        } else if (colorId === "color5" || colorId === "color5_w") {
            return "FIOLETOWY";
        } else if (colorId === "color6" || colorId === "color6_w") {
            return "GRANATOWY";
        } else if (colorId === "color7" || colorId === "color7_w") {
            return "NIEBIESKI";
        } else if (colorId === "color8") {
            return "MORSKI";
        } else if (colorId === "color9" || colorId === "color9_w") {
            return "POMARAŃCZOWY";
        } else if (colorId === "color10" || colorId === "color10_w") {
            return "ŻÓŁTY";
        } else if (colorId === "color11") {
            return "ZIELONY";
        }
    }

    trueLampName = (lamp) =>
    {
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


    printPdf = () =>
    {
        window.print();
    }

    function a(t, a, e) {
        var price = 0;
        // $(t + " input:checked," + t + " button .icon-icon_check").each(function () {
        $(t + " input:checked," + t + " button.selected").each(function () {
            // if ($(this).is("input")) var t = $(this);
            // else t = $(this).closest("button");
            // var t = $(this);
            // console.log($(this).attr('data-price'));
            $.isNumeric($(this).attr("data-price")) && (price += parseInt($(this).attr("data-price")),
                $(a).text(numberWithCommas(price) + ""), $(e).text(numberWithCommas(price) + ""));
        })
    }

// $("#tab2 .model-card-cover button.model-button").on("click", function () {

// });

// $("input").on("change", function () {
//     a("body", ".price-number .pr", ".price-numbers-up")
// });
// $("button").on("click", function () {
//     a("body", ".price-numbers-up", ".price-number .pr")
// });

    // $("#tab5 input").on("change", function () {
    //     a("#tab5", "#tab5 .price-summary span")
    // });

    // $("#tab5 button").on("click", function () {
    //     a("#tab5", "#tab5 .price-summary span")
    // });

    // $("#tab6 input").on("change", function () {
    //     a("#tab6", "#tab6 .price-summary")
    // });
    //
    // $("#tab6 button").on("click", function () {
    //     a("#tab6", "#tab6 .price-summary")
    // });


// $("#tab4 button").on("click", function () {
//     a("#tab4", "#tab4 .price-summary span")
// });

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


    qq = () =>
    {
        $("#tab5 input:checked, #tab5  button .icon-icon_check, #tab6 .assyst2 input:checked, #tab6 .assyst2  button .icon-icon_check,#tab7  button .icon-icon_check").each(function () {
            $(this).is("input") ?
                $("#result-table tbody").append("<tr  style=\"font-size:9px;\"><td style=\"line-height:30px; border-bottom:1px solid #E4E5ED;width:30%\">" + $(this).attr("data-type") + "</td><td style=\"line-height:30px; border-bottom:1px solid #E4E5ED;\">" + $(this).next().text() + "</td><td style=\"   line-height: 30px; border-bottom:1px solid #E4E5ED;text-align:end;\">" + numberWithCommas($(this).attr("data-price")) + "</td></tr>")
                :
                $("#result-table tbody").append("<tr  style=\"font-size:9px;\"><td style=\"line-height:30px; border-bottom:1px solid #E4E5ED;width:30%\">" + $(this).closest("button").attr("data-type") + "</td><td style=\"line-height:30px; border-bottom:1px solid #E4E5ED;\">" + $(this).closest("button").attr("data-name") + "</td><td style=\"   line-height: 30px; border-bottom:1px solid #E4E5ED;text-align:end;\">" + numberWithCommas($(this).closest("button").attr("data-price")) + "</td></tr>");
        })
    }


    $(".tab7-summ .assyst-next-button").click(function () {
        $(".pdf-price b").text($("header .header-price .price-number").text());
        $("#result-table tbody").empty();
        $("#result-table tbody").append("<tr style=\"font-size:9px;\"><td style=\"line-height:30px;  border-bottom:1px solid #E4E5ED;width:30%\">Panel       </td><td style=\"line-height:30px; width:50%; border-bottom:1px solid #E4E5ED;\">" + truePanelName(currentnModel) + "</td><td style=\"line-height:30px;width:20%; border-bottom:1px solid #E4E5ED;text-align: end;\">" + numberWithCommas(seatPrice) + "</td></tr>");
        $("#result-table tbody").append("<tr style=\"font-size:9px;\"><td style=\"line-height:30px;  border-bottom:1px solid #E4E5ED;width:30%\">Color unitu </td><td style=\"line-height:30px; width:50%; border-bottom:1px solid #E4E5ED;\">" + trueColorName(seatColor) + "</td><td style=\"line-height:30px;width:20%; border-bottom:1px solid #E4E5ED;text-align: end;\">" + numberWithCommas(1000) + "</td></tr>");
        $("#result-table tbody").append("<tr style=\"font-size:9px;\"><td style=\"line-height:30px;  border-bottom:1px solid #E4E5ED;width:30%\">Lampa       </td><td style=\"line-height:30px; width:50%; border-bottom:1px solid #E4E5ED;\">" + trueLampName(currentLamp) + "</td><td style=\"line-height:30px;width:20%; border-bottom:1px solid #E4E5ED;text-align: end;\">" + numberWithCommas($("button#" + currentLamp).attr("data-price")) + "</td></tr>");
        qq()

    });


    $(".print-button-place").click(function () {
        var el = $(".for-prinr-section").html();
        let add = $(".footer-pdf").html();
        el = el.replace(/(\r\n|\n|\r)/gm, " ");
        el += add;
        $("#textarea-for-print").text(el)

    });


    function numberWithCommas(t) {
        if (t !== undefined) {
            var u = t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            // return u += " zł"
            return u;
        } else {
            console.log(undefined)
        }

    }

});
