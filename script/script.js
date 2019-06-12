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

    $(".info-icon-block").tooltip({
        position: {
            my: "bottom bottom",
            at: "top+15 top"
        }
    });




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
    var doctorPanelAddedType = [];
    var doctorPanelAddedModel = [];


    var addedOptions = [];

    $(document).on('click touch',"#tab1 .seat-model",function () {
        $(currentBrand).hide();
        // $(".block-colorified-seats").hide();
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
            resetStep3();


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

        console.log('krok 2');

        // $(".doctor-panel-img").empty();
        // $(".assyst-content-wrapper img").remove();
        // $(".assyst-step2-content img").remove();
        // $(".lacquer-type-wrapper").css("display","none");
        // let objChild = $(this).children("span");
        // $(currentBrand + "-brand-color.block-colorified-seats").hide();
        $(".see-360-color").hide();
        // $(".model-color-place").empty();
        dataBrand = $(this).attr('data-brand');
        setCurrentProductName(dataBrand);
        brand = $("#tab2 .brand-choose-sidebar").find('[data-brand='+dataBrand+']').find(".brand-name").text();

        //seatPrice = $(this).attr("data-price"); //update ceny

        $.each($("#tab4 .lamp-button-div, #tab4 .product-list, #tab5 .doctor-tab-5 .attention-block-wrapper, #tab5 .doctor-tab-5 .attention-block-wrapper .data-brand, #tab5 .panel-card-cover.d-panel5, #tab5 .doctor-tab-5 .doctor-panel-choice, #tab6 .common, #tab5 .common, #tab3 .block-colorified-seats, #tab3 .lacquer-type-wrapper"),function() {
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

           

        // seatPrice = seatPrice + doctorPanel; //update ceny
        priceLabel('#tab2','',seatPrice);
        resetAssystPanelCost();
        resetAttentionBlock();
        // confirmStep();

        $(".step-2-button").addClass("nextStepActive");


    $(document).on('click touch', '#tab3 .choose-the-color', function() {
        $(".step-3-button").addClass("nextStepActive");


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
                }
            })

            $.each($('#tab3 .certus-brand-color.available .color-img:not(.additional-img).selected'),function() {
                var additionalCost = $('#tab3 .lacquer-type-wrapper');
                if($(this).hasClass('additional-cost')) {
                    if(additionalCost.hasClass('available')) {
                        if(!additionalCost.hasClass('additional-cost')) {
                            additionalCost.addClass('additional-cost')
                        }
                    }
                }
                else {
                    if(additionalCost.hasClass('additional-cost')) {
                        additionalCost.removeClass('additional-cost')
                    }
                }
            })
        }


        // if ($("img#" + seatColor).hasClass("hide-me")) {
        //     $("img#" + seatColor).hide();
        //     $("img#" + seatColor + ".with-tapicerka").show();
        //
        // } else {
        //     $("img#" + seatColor + ".with-tapicerka").hide();
        //     $("img#" + seatColor).show();
        //
        // }
        //
        // $("label.color-white").prev().prop("checked", true);
        //
        // if (currentBrand === ".certus") {
        //     colorDirection = $(this).attr("data-direct-certus")
        //
        // } else if (currentBrand === ".exima") {
        //     colorDirection = $(this).attr("data-direct-exima");
        //     console.log(colorDirection)
        // }
        //
        // if (currentnModel === ".certus-neo" || currentnModel === ".exima-neo") {
        //     if ($(this).hasClass("no-such-color")) {
        //         $(".lacquer-type-wrapper").css("opacity", ".5");
        //         $(".lacquer-type-wrapper").css("pointer-events", "none");
        //         $('.color-attantion').css("display", "flex")
        //     } else {
        //         $(".lacquer-type-wrapper").css("opacity", "1");
        //         $(".lacquer-type-wrapper").css("pointer-events", "all");
        //         $('.color-attantion').hide();
        //     }
        // }


    });

    $(document).on('change', '#tab3 .lacquer-type-wrapper input[type="radio"]', function() {
        $.each($(this).closest('.lacquer-type-wrapper').find('input[type="radio"]'), function() {
            if($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            }
            if($(this).is(":checked")) {
                $(this).prop('checked', false);
            }
        })
        $(this).addClass('selected').prop('checked',true);

        var price = parseInt($(this).attr('data-price'));
        // resetColorUnit(price);

        if(price > 0) {
            console.log('za to bulisz')
            $.each($('#tab3 .seat-colors .color-kind, #tab3 .certus-brand-color .color-img, #tab3 .choose-color .choose-the-color'), function() {
                if(!$(this).hasClass('common-additional')) {
                    $(this).addClass('hidden')
                }
            })
            $.each($('#tab3 .certus-brand-color .color-img'), function() {
                if ($(this).hasClass('additional-img')) {
                    $(this).removeClass('additional-img')
                }
            })
        }
        else {
            console.log('to nic nie kosztuje')
            $.each($('#tab3 .seat-colors .color-kind, #tab3 .certus-brand-color .color-img, #tab3 .choose-color .choose-the-color'), function() {
                if($(this).hasClass('hidden')) {
                    $(this).removeClass('hidden')
                }
            })
            $.each($('#tab3 .certus-brand-color .color-img'), function() {
                if ($(this).hasClass('common-additional')) {
                    $(this).addClass('additional-img')
                }
            })
        }
    })

    function resetStep3() {
        console.log('TOTAL RESET STEP 3');
        $.each($('#tab3 .lacquer-type-wrapper').find('input[type="radio"]'), function() {
            var price = parseInt($(this).attr('data-price'));

            if(price > 0) {
                if($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                if($(this).is(":checked")) {
                    $(this).prop('checked', false);
                }
            }
            else {
                if(!$(this).hasClass('selected')) {
                    $(this).addClass('selected');
                }
                if(!$(this).is(":checked")) {
                    $(this).prop('checked', true);
                }
            }

            $.each($('#tab3 .seat-colors .color-kind, #tab3 .certus-brand-color .color-img, #tab3 .choose-color .choose-the-color'), function() {
                if($(this).hasClass('hidden')) {
                    $(this).removeClass('hidden')
                }
            })
            $.each($('#tab3 .certus-brand-color .color-img'), function() {
                if ($(this).hasClass('common-additional')) {
                    $(this).addClass('additional-img')
                }
            })
        })
    }

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
                if($(this).is(':visible')) {
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
        console.log('ponowny mark as down')
        if(_that.closest(_tab).find('.brand-choose-sidebar [data-label='+_active+'] .icon-icon_loading').hasClass('active')) {
            _that.closest(_tab).find('.brand-choose-sidebar [data-label='+_active+'] .icon-icon_loading').removeClass('active');
        }
        if(!_that.closest(_tab).find('.brand-choose-sidebar [data-label='+_active+'] .icon-icon_check').hasClass('active')) {
            _that.closest(_tab).find('.brand-choose-sidebar [data-label='+_active+'] .icon-icon_check').addClass('active');
        }
        if(_that.closest(_tab).find('.brand-choose-sidebar [data-label='+_active+'] .icon-icon_check').hasClass('active')) {
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
        // $.each($('#tab5 .doctor-panel-card'),function() {
        //     $.each($(this).find('[data-default]'),function() {
        //         var temp = $(this).attr('data-default');
        //         $(this).text(temp);
        //     })
        // })
        $.each($('#tab5').find('[data-default]'),function() {
            var temp = $(this).attr('data-default');
            $(this).text(temp);
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
            $.each(doctorPanelCostTab, function(value) {
                doctorPanelCostTab[value] = 0;
            })
            $.each(doctorPanelLabels, function(value) {
                doctorPanelLabels[value] = '';
            })
            $.each(doctorPanelCategories, function(value) {
                doctorPanelCategories[value] = '';
            })
            $.each(doctorPanelAddedType, function(value) {
                doctorPanelCategories[value] = '';
            })
            $.each(doctorPanelAddedModel, function(value) {
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
            $.each($('#tab5 .doctor-panel-card'), function() {
                $(this).find('.doctor-model').text($(this).find('.doctor-model').attr('data-default'));
                $(this).find('.doctor-type').text($(this).find('.doctor-type').attr('data-default'));


                if(!$(this).find('.katnica-prostnica-model').hasClass('hidden')) {
                    $(this).find('.katnica-prostnica-model').text($(this).find('.katnica-prostnica-model').attr('data-default'));
                    $(this).find('.katnica-prostnica-model').addClass('hidden')
                }
                if(!$(this).find('.katnica-prostnica-type').hasClass('hidden')) {
                    $(this).find('.katnica-prostnica-type').text($(this).find('.katnica-prostnica-type').attr('data-default'));
                    $(this).find('.katnica-prostnica-type').addClass('hidden')
                }
            })

            $.each($('#tab5 .tab-content, #tab5 .tab-content-internal-1, #tab5 .tab-trigger-internal-2'),function() {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            })

            resetTabsAndRadiobuttons('.doctor-tab');
            initDoctorPanelCost();
            initDoctorPanelCard();

            $.each($('#tab5 .doctor-tab'),function() {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            })
            $("#tab5 .doctor-panel-title").show();
            $("#tab5 .doctor-panel-top").show();
            $("#tab5 .doctor-panel-row").show();

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
            var statement = $(this).closest('.checkbox-card');

            if(!$(this).attr('data-confirmed')) {
                if($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                if($(this).is(":checked")) {
                    $(this).prop('checked', false);
                }


                if(statement.hasClass('checkbox-card-active')) {
                    statement.removeClass('checkbox-card-active');
                }
            }
            else {
                if(!$(this).hasClass('selected')) {
                    $(this).addClass('selected');
                }
                if(!$(this).is(":checked")) {
                    $(this).prop('checked', true);
                }
                if(!statement.hasClass('checkbox-card-active')) {
                    statement.addClass('checkbox-card-active');
                }
            }

            $.each(statement.siblings('.statement'), function() {
                if($(this).is(":hidden")) {
                    console.log('hidden');
                    if($(this).find('input[type="radio"]').is(":checked")) {
                        $(this).find('input[type="radio"]').prop('checked',false);
                    }
                    if($(this).find('input[type="radio"]').hasClass('selected')) {
                        $(this).find('input[type="radio"]').removeClass('selected');
                    }
                }
                else {
                    console.log('visible');
                    if(!$(this).find('input[type="radio"]').is(":checked")) {
                        $(this).find('input[type="radio"]').prop('checked',true);
                    }
                    if(!$(this).find('input[type="radio"]').hasClass('selected')) {
                        $(this).find('input[type="radio"]').addClass('selected');
                    }
                }
            })

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

                doctorPanelAddedType[0] = '';
                doctorPanelAddedType[1] = '';
                doctorPanelAddedType[2] = '';
                doctorPanelAddedType[3] = '';

                doctorPanelAddedModel[0] = '';
                doctorPanelAddedModel[1] = '';
                doctorPanelAddedModel[2] = '';
                doctorPanelAddedModel[3] = '';

                var active = '';
                var that = $(this);

                if($(this).closest('.doctor-tab').hasClass('doctor-tab-1')) {
                    active = 'doctor-tab-1';
                    var parent = $('#tab5').find('[data-target='+active+']').parents('.panel-card-cover');
                    if(!parent.hasClass('active')) {
                        parent.addClass('active');
                    }


                    $(this).closest('.'+active).find('.equipment.selected').attr('data-confirmed','confirmed');

                    $.each($(this).closest('.'+active).find('.equipment:not(.selected)'), function() {
                        if($(this).attr('data-confirmed')) {
                            $(this).removeAttr('data-confirmed');
                        }
                    })

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

                        if((!$(this).hasClass('added')) && (!$(this).hasClass('input-stmt'))) {
                            doctorPanelLabels[1] = $(this).attr('data-name');
                            doctorPanelCategories[1] = $(this).attr('data-type');
                        }
                        else {
                            doctorPanelLabels[2] = $(this).attr('data-name');
                        }

                        if($(this).hasClass('added')) {
                            if($(this).attr('data-type') === 'Prostnica') {
                                doctorPanelAddedType[0] = $(this).attr('data-type');
                                if($(this).attr('data-name')) {
                                    doctorPanelAddedModel[0] = $(this).attr('data-name');
                                }
                            }
                            else if($(this).attr('data-type') === 'Katnica') {
                                doctorPanelAddedType[0] = $(this).attr('data-type');
                                if($(this).attr('data-name')) {
                                    doctorPanelAddedModel[0] = $(this).attr('data-name');
                                }
                            }
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
                            $(this).text(doctorPanelCategories[1]);
                        }
                        else if($(this).hasClass('doctor-model')) {
                            $(this).text(doctorPanelLabels[1]);
                        }
                        else if($(this).hasClass('katnica-prostnica-type')) {
                            if($(this).hasClass('hidden')) {
                                $(this).removeClass('hidden')
                            }
                            $(this).text(doctorPanelAddedType[0]);
                        }
                        else if($(this).hasClass('katnica-prostnica-model')) {
                            if($(this).hasClass('hidden')) {
                                $(this).removeClass('hidden')
                            }
                            $(this).text(doctorPanelAddedModel[0]);
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

                        if((!$(this).hasClass('added')) && (!$(this).hasClass('input-stmt'))) {
                            doctorPanelLabels[3] = $(this).attr('data-name');
                            doctorPanelCategories[3] = $(this).attr('data-type');
                        }
                        else {
                            doctorPanelLabels[4] = $(this).attr('data-name');
                        }

                        if($(this).hasClass('added')) {
                            if($(this).attr('data-type') === 'Prostnica') {
                                doctorPanelAddedType[1] = $(this).attr('data-type');
                                if($(this).attr('data-name')) {
                                    doctorPanelAddedModel[1] = $(this).attr('data-name');
                                }
                            }
                            else if($(this).attr('data-type') === 'Katnica') {
                                doctorPanelAddedType[1] = $(this).attr('data-type');
                                if($(this).attr('data-name')) {
                                    doctorPanelAddedModel[1] = $(this).attr('data-name');
                                }
                            }
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
                            $(this).text(doctorPanelCategories[3]);
                        }
                        else if($(this).hasClass('doctor-model')) {
                            $(this).text(doctorPanelLabels[3]);
                        }
                        else if($(this).hasClass('katnica-prostnica-type')) {
                            if($(this).hasClass('hidden')) {
                                $(this).removeClass('hidden')
                            }
                            $(this).text(doctorPanelAddedType[1]);
                        }
                        else if($(this).hasClass('katnica-prostnica-model')) {
                            if($(this).hasClass('hidden')) {
                                $(this).removeClass('hidden')
                            }
                            $(this).text(doctorPanelAddedModel[1]);
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

                        if((!$(this).hasClass('added')) && (!$(this).hasClass('input-stmt'))) {
                            doctorPanelLabels[5] = $(this).attr('data-name');
                            doctorPanelCategories[5] = $(this).attr('data-type');
                        }
                        else {
                            doctorPanelLabels[6] = $(this).attr('data-name');
                        }

                        if($(this).hasClass('added')) {
                            if($(this).attr('data-type') === 'Prostnica') {
                                doctorPanelAddedType[2] = $(this).attr('data-type');
                                if($(this).attr('data-name')) {
                                    doctorPanelAddedModel[2] = $(this).attr('data-name');
                                }
                            }
                            else if($(this).attr('data-type') === 'Katnica') {
                                doctorPanelAddedType[2] = $(this).attr('data-type');
                                if($(this).attr('data-name')) {
                                    doctorPanelAddedModel[2] = $(this).attr('data-name');
                                }
                            }
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
                            $(this).text(doctorPanelCategories[5]);
                        }
                        else if($(this).hasClass('doctor-model')) {
                            $(this).text(doctorPanelLabels[5]);
                        }
                        else if($(this).hasClass('katnica-prostnica-type')) {
                            if($(this).hasClass('hidden')) {
                                $(this).removeClass('hidden')
                            }
                            $(this).text(doctorPanelAddedType[2]);
                        }
                        else if($(this).hasClass('katnica-prostnica-model')) {
                            if($(this).hasClass('hidden')) {
                                $(this).removeClass('hidden')
                            }
                            $(this).text(doctorPanelAddedModel[2]);
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

                        if((!$(this).hasClass('added')) && (!$(this).hasClass('input-stmt'))) {
                            doctorPanelLabels[7] = $(this).attr('data-name');
                            doctorPanelCategories[7] = $(this).attr('data-type');
                        }
                        else {
                            doctorPanelLabels[8] = $(this).attr('data-name');
                        }

                        if($(this).hasClass('added')) {
                            if($(this).attr('data-type') === 'Prostnica') {
                                doctorPanelAddedType[3] = $(this).attr('data-type');
                                if($(this).attr('data-name')) {
                                    doctorPanelAddedModel[3] = $(this).attr('data-name');
                                }
                            }
                            else if($(this).attr('data-type') === 'Katnica') {
                                doctorPanelAddedType[3] = $(this).attr('data-type');
                                if($(this).attr('data-name')) {
                                    doctorPanelAddedModel[3] = $(this).attr('data-name');
                                }
                            }
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
                            $(this).text(doctorPanelCategories[7]);
                        }
                        else if($(this).hasClass('doctor-model')) {
                            $(this).text(doctorPanelLabels[7]);
                        }
                        else if($(this).hasClass('katnica-prostnica-type')) {
                            if($(this).hasClass('hidden')) {
                                $(this).removeClass('hidden')
                            }
                            $(this).text(doctorPanelAddedType[3]);
                        }
                        else if($(this).hasClass('katnica-prostnica-model')) {
                            if($(this).hasClass('hidden')) {
                                $(this).removeClass('hidden')
                            }
                            $(this).text(doctorPanelAddedModel[3]);
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
                $("#tab5 .doctor-panel-title").show();
                $("#tab5 .doctor-panel-top").show();
                $("#tab5 .doctor-panel-row").show();
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
                $("#tab5 .doctor-panel-title").show();
                $("#tab5 .doctor-panel-top").show();
                $("#tab5 .doctor-panel-row").show();
            }
            // else {
            //     setDoctorPanelCost(current);
            // }
        })
    }

    $(document).on('click touch', "#tab5 .equipment",function () {
        if(!$(this).hasClass('selected')) {
            // console.log('resetuje cene poczatkowa')
            if($(this).parents('.doctor-tab').hasClass('doctor-tab-1')) {
                $.each($("#tab5 .doctor-tab-1 .equipment"),function() {
                    if($(this).hasClass('selected')) {
                        $(this).removeClass('selected');
                        // $(this).removeAttr('data-confirmed');
                        $(this).find('.label-button').text("WYBIERAM");
                    }
                });
                $(this).find('.label-button').text("WYBRANO");

                strzykawkoDmuchawka = $(this).attr('data-name');
                strzykawkoDmuchawkaKategoria = $(this).attr('data-type');
                strzykawkoDmuchawkaCena = parseInt($(this).attr('data-price'));
                doctorPanelCostTab[0] = strzykawkoDmuchawkaCena;
                updateInstantDoctorPanelPrice();

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
                var statement = $(this).closest('.checkbox-card');
                if (statement.hasClass('checkbox-card-active')) {
                    statement.removeClass('checkbox-card-active');

                    $.each(statement.siblings('.statement'), function() {
                        if($(this).is(":hidden")) {
                            console.log('hidden');
                            if($(this).find('input[type="radio"]').is(":checked")) {
                                $(this).find('input[type="radio"]').prop('checked',false);
                            }
                            if($(this).find('input[type="radio"]').hasClass('selected')) {
                                $(this).find('input[type="radio"]').removeClass('selected');
                            }
                        }
                        else {
                            console.log('visible');
                            if(!$(this).find('input[type="radio"]').is(":checked")) {
                                $(this).find('input[type="radio"]').prop('checked',true);
                            }
                            if(!$(this).find('input[type="radio"]').hasClass('selected')) {
                                $(this).find('input[type="radio"]').addClass('selected');
                            }
                        }
                    })
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


                var statement = $(this).closest('.checkbox-card');
                if(!statement.hasClass('checkbox-card-active')) {
                    statement.addClass('checkbox-card-active');

                    $.each(statement.siblings('.statement'), function() {
                        if($(this).is(":hidden")) {
                            console.log('hidden');
                            if($(this).find('input[type="radio"]').is(":checked")) {
                                $(this).find('input[type="radio"]').prop('checked',false);
                            }
                            if($(this).find('input[type="radio"]').hasClass('selected')) {
                                $(this).find('input[type="radio"]').removeClass('selected');
                            }
                        }
                        else {
                            console.log('visible');
                            if(!$(this).find('input[type="radio"]').is(":checked")) {
                                $(this).find('input[type="radio"]').prop('checked',true);
                            }
                            if(!$(this).find('input[type="radio"]').hasClass('selected')) {
                                $(this).find('input[type="radio"]').addClass('selected');
                            }
                        }
                    })
                }

                updateInstantDoctorPanelPrice();
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

        $.each($('#tab5 input[type="radio"][data-confirmed="confirmed"]'), function() {
            if(!$(this).is(":checked")) {
                $(this).prop('checked',true);
            }
            if(!$(this).hasClass('selected')) {
                $(this).addClass('selected');
            }
            price = price + parseInt($(this).attr('data-price'));
        })
        var sum = current + price;
        setDoctorPanelCost(sum);
        return sum;
    }

    function updateInstantDoctorPanelPrice() {
        var current = doctorPanelCostTab[0];
        console.log('attention-block-cost: '+attentionDoctorPanelCost);
        var price = parseInt(0 + attentionDoctorPanelCost);



        $.each($('.doctor-tab input[type="radio"]:checked.selected'), function() {
            price = price + parseInt($(this).attr('data-price'));
        })
        var sum = current + price;
        setDoctorPanelCost(sum);
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

    var step1Cost = 0;

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
        initAssystPanelCard();
    }

    function initAssystPanelCard() {
        $.each($('#tab6 .brand-choose-sidebar').find('[data-default]'),function() {
            var temp = $(this).attr('data-default');
            $(this).text(temp);
        })
        $.each($('#tab6 .brand-choose-sidebar').find('.choosen-brand-sign:not(:last-child)'), function() {
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        })
        $.each($('#tab6 .panel-card-cover'), function() {
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
            $(this).find('.config-object').text($(this).find('.config-object').attr('data-default'));
        })

        $.each($('#tab6 .button-change'), function() {
            if($(this).hasClass('hidden')) {
                $(this).removeClass('hidden');
            }
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
            step1Cost = 0;
            setAssystDataAttrValue(step1Cost)
            setAssystPanelCost(step1Cost);
            console.log('reset Step1Cost: '+step1Cost)
        }

        $.each($('#tab6 .brand-choose-sidebar .nextStepActive'), function() {
            $(this).text($(this).attr('data-default'));
        })

        $.each($('#tab6 .choosen-assyst'), function() {
            if($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            }
        })

        $.each($('#tab6 input[type="radio"]'), function() {
            if($(this).attr('data-confirmed')) {
                $(this).removeAttr('data-confirmed');
            }
            if($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            }
            $(this).prop('checked',false);
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

        $.each($('#tab6 .assyst-content-wrapper .assyst-main-button'), function() {
            if($(this).attr('data-confirmed')) {
                $(this).removeAttr('data-confirmed');
            }
        })

        $.each($('#tab6 .tab-content, #tab6 .assyst-panel-choice, #tab6 .choosen-brand-sign'),function() {
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        })


        if($('#tab6 .brand-choose-sidebar .info').hasClass('hidden')) {
            $('#tab6 .brand-choose-sidebar .info').removeClass('hidden')
        }

        activeAssystStep1();
        initAssystPanelCost();
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
        var current = step1Cost;
        // var price = parseInt(0 + attentionDoctorPanelCost);
        var price = parseInt(0);

        $.each($('#tab6 input[type="radio"][data-confirmed="confirmed"]'), function() {
            if(!$(this).is(":checked")) {
                $(this).prop('checked',true);
            }
            if($(this).hasClass('selected')) {
                $(this).addClass('selected');
            }
            price = price + parseInt($(this).attr('data-price'));
        })
        var sum = current + price;
        setAssystPanelCost(sum);
        return sum;
    }

    function updateInstantAssystPanelPrice() {
        var current = step1Cost;
        var price = parseInt(0);

        $.each($('#tab6 input[type="radio"]:checked.selected'), function() {
            price = price + parseInt($(this).attr('data-price'));
        })
        var sum = current + price;
        setAssystPanelCost(sum);
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

    function triggerAssystPanelCost(_handler) {
        $(document).on('click touch', _handler, function() {
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

                if($(this).closest('.assyst-tab').hasClass('assyst-card-1')) {
                    active = 'assyst-card-1';
                    assystPanelLabels[0] = '';
                    assystPanelCategories[0] = '';

                    $.each($(this).closest('.'+active).find('input[type="radio"]'), function() {
                        if($(this).attr('data-confirmed')) {
                            $(this).removeAttr('data-confirmed');
                        }
                    })

                    $.each($(this).closest('.'+active).find('input[type="radio"]:checked.selected'), function() {
                        $(this).attr('data-confirmed','confirmed');

                        if((!$(this).hasClass('added')) && (!$(this).hasClass('input-stmt'))) {
                            assystPanelCategories[0] = $(this).attr('data-name');
                            assystPanelLabels[0] = $(this).attr('data-type');
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
                            if(assystPanelLabels[0] === 'Instalacja ssaka') {
                                $(this).text('');
                            }
                            else {
                                $(this).text(assystPanelLabels[0]);
                            }
                        }
                        else if($(this).hasClass('assyst-model')) {
                            $(this).text(assystPanelCategories[0]);
                        }
                    })
                    // markAsDone('#tab6',that,active,assystPanelLabels[0]);


                    //instalacja ssaka

                    if(assystPanelLabels[0] === 'Instalacja ssaka') {
                        console.log('WYBIERAM JAKIS SSAK');
                        active = 'assyst-card-2';
                        var parent = $('#tab6').find('[data-target='+active+']').parents('.panel-card-cover');
                        if(!parent.hasClass('active')) {
                            parent.addClass('active');
                        }
                        $.each(parent.find('.config-object'),function() {
                            if($(this).hasClass('panel-card-title')) {
                                $(this).text("Wybrano");
                            }
                            else if($(this).hasClass('assyst-type')) {
                                $(this).text('');
                            }
                            else if($(this).hasClass('assyst-model')) {
                                $(this).text(assystPanelCategories[0]);
                            }
                        })
                        if(!parent.find('.button-change').hasClass('hidden')) {
                            parent.find('.button-change').addClass('hidden')
                        }

                        $.each($('#tab6 .'+active).find('input[type="radio"]:checked.selected'), function() {
                            console.log('chociaz jeden');
                            if($(this).attr('data-confirmed')) {
                                $(this).removeAttr('data-confirmed')
                                $(this).removeClass('selected');
                                $(this).prop('checked',false)
                            }
                        })
                        markAsDone('#tab6',that,active,assystPanelLabels[0]);
                        active = 'assyst-card-1';
                        markAsDone('#tab6',that,active,assystPanelLabels[0]);
                    }
                    else {
                        console.log('DEMONTUJE SSAK NA POLU 2');
                        active = 'assyst-card-2';

                        var flag = true;

                        $.each($('#tab6 .'+active).find('input[type="radio"]:checked.selected'), function() {
                            flag = false;
                        });

                        if(flag) {
                            var parent = $('#tab6').find('[data-target='+active+']').parents('.panel-card-cover');
                            if(parent.hasClass('active')) {
                                parent.removeClass('active');
                            }
                            $.each(parent.find('.config-object'),function() {
                                if($(this).hasClass('panel-card-title')) {
                                    $(this).text("");
                                }
                                else if($(this).hasClass('assyst-type')) {
                                    $(this).text("");
                                }
                                else if($(this).hasClass('assyst-model')) {
                                    $(this).text("");
                                }
                            })
                            if(parent.find('.button-change').hasClass('hidden')) {
                                parent.find('.button-change').removeClass('hidden')
                            }

                            var label = $('#tab6 .brand-choose-sidebar [data-label="assyst-card-2"]');
                            label.find('.selected-equipment').text(label.find('.selected-equipment').attr('data-default'))
                            $.each(label.find('.choosen-brand-sign'),function() {
                                if($(this).hasClass('active')) {
                                    $(this).removeClass('active');
                                }
                            })

                            active = 'assyst-card-1';
                            markAsDone('#tab6',that,active,assystPanelLabels[0]);
                        }


                    }



                    console.log(active);
                    console.log(assystPanelLabels[0]);
                    console.log(assystPanelCategories[0]);
                }
                else if($(this).closest('.assyst-tab').hasClass('assyst-card-2')){
                    active = 'assyst-card-2';
                    assystPanelLabels[1] = '';
                    assystPanelCategories[1] = '';

                    $.each($(this).closest('.'+active).find('input[type="radio"]'), function() {
                        if($(this).attr('data-confirmed')) {
                            $(this).removeAttr('data-confirmed');
                        }
                    })

                    $.each($(this).closest('.'+active).find('input[type="radio"]:checked.selected'), function() {
                        $(this).attr('data-confirmed','confirmed');

                        if((!$(this).hasClass('added')) && (!$(this).hasClass('input-stmt'))) {
                            assystPanelCategories[1] = $(this).attr('data-name');
                            assystPanelLabels[1] = $(this).attr('data-type');
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
                            $(this).text(assystPanelLabels[1]);
                        }
                        else if($(this).hasClass('assyst-model')) {
                            $(this).text(assystPanelCategories[1]);
                        }
                    })
                    markAsDone('#tab6',that,active,assystPanelLabels[1]);
                    // active = 'assyst-card-1';
                    // markAsDone('#tab6',that,active,assystPanelLabels[0]);

                    // console.log(active);
                    // console.log(assystPanelLabels[1]);
                    // console.log(assystPanelCategories[1]);
                }
                else if($(this).closest('.assyst-tab').hasClass('assyst-card-3')){
                    active = 'assyst-card-3';
                    assystPanelLabels[2] = '';
                    assystPanelCategories[2] = '';

                    $.each($(this).closest('.'+active).find('input[type="radio"]'), function() {
                        if($(this).attr('data-confirmed')) {
                            $(this).removeAttr('data-confirmed');
                        }
                    })

                    $.each($(this).closest('.'+active).find('input[type="radio"]:checked.selected'), function() {
                        $(this).attr('data-confirmed','confirmed');

                        if((!$(this).hasClass('added')) && (!$(this).hasClass('input-stmt'))) {
                            assystPanelCategories[2] = $(this).attr('data-name');
                            assystPanelLabels[2] = $(this).attr('data-type');
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
                            $(this).text(assystPanelLabels[2]);
                        }
                        else if($(this).hasClass('assyst-model')) {
                            $(this).text(assystPanelCategories[2]);
                        }
                    })
                    markAsDone('#tab6',that,active,assystPanelLabels[2]);

                    // console.log(active);
                    // console.log(assystPanelLabels[2]);
                    // console.log(assystPanelCategories[2]);
                }


                updateAssystPanelPrice();
                var sum = updateAssystPanelPrice();
                setAssystDataAttrValue(sum);
            }
            else if($(this).hasClass('btn-doctor-panel-cancel')) {

                if($(this).closest('.assyst-tab').hasClass('assyst-card-1')){
                    setConfirmedProduct('.assyst-card-1')
                }
                else if($(this).closest('.assyst-tab').hasClass('assyst-card-2')){
                    setConfirmedProduct('.assyst-card-2')
                }
                else if($(this).closest('.assyst-tab').hasClass('assyst-card-3')){
                    setConfirmedProduct('.assyst-card-3')
                }

                var current = getAssystDataAttrValue();
                setAssystPanelCost(current);
            }
            // updateAssystPanelPrice();

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

    $(document).on('click touch', '#tab6 .assyst-content-wrapper .assyst-main-button', function() {

        $.each($('#tab6 .assyst-content-wrapper .assyst-main-button'), function() {
            if($(this).attr('data-confirmed')) {
                $(this).removeAttr('data-confirmed');
            }
        })

        if(!$(this).attr('data-standard')) {
            if(!$(this).hasClass('selected')) {

                $(this).addClass('selected');
                $(this).attr('data-confirmed','confirmed');

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
                step1Cost = parseInt($(this).attr('data-price'));
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
                step1Cost = getAssystDataAttrValue();
            }
        }
    })

    $(document).on('click touch', '#tab6 .brand-choose-sidebar .button-to-go', function() {
        if($(this).text() === $(this).attr('data-trigger')) {
            activeAssystStep2();
            step1Cost = getAssystPanelCost();
            setAssystDataAttrValue(step1Cost);
            setDefaultAssystPanel();
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

    $(document).on('change','#tab6 [type="radio"]',function() {
        var that = $(this);
        var parent = getAssystPanelTab(that);


        $.each($('#tab6 '+parent+' [type="radio"]'),function() {
            if(!$(this).is(':checked')) {
                if($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                var statement = $(this).closest('.checkbox-card');
                if (statement.hasClass('checkbox-card-active')) {
                    statement.removeClass('checkbox-card-active');

                    $.each(statement.siblings('.statement'), function() {
                        if($(this).is(":hidden")) {
                            console.log('hidden');
                            if($(this).find('input[type="radio"]').is(":checked")) {
                                $(this).find('input[type="radio"]').prop('checked',false);
                            }
                            if($(this).find('input[type="radio"]').hasClass('selected')) {
                                $(this).find('input[type="radio"]').removeClass('selected');
                            }
                        }
                        else {
                            console.log('visible');
                            if(!$(this).find('input[type="radio"]').is(":checked")) {
                                $(this).find('input[type="radio"]').prop('checked',true);
                            }
                            if(!$(this).find('input[type="radio"]').hasClass('selected')) {
                                $(this).find('input[type="radio"]').addClass('selected');
                            }
                        }
                    })
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

                var statement = $(this).closest('.checkbox-card');
                if(!statement.hasClass('checkbox-card-active')) {
                    statement.addClass('checkbox-card-active');

                    $.each(statement.siblings('.statement'), function() {
                        if($(this).is(":hidden")) {
                            console.log('hidden');
                            if($(this).find('input[type="radio"]').is(":checked")) {
                                $(this).find('input[type="radio"]').prop('checked',false);
                            }
                            if($(this).find('input[type="radio"]').hasClass('selected')) {
                                $(this).find('input[type="radio"]').removeClass('selected');
                            }
                        }
                        else {
                            console.log('visible');
                            if(!$(this).find('input[type="radio"]').is(":checked")) {
                                $(this).find('input[type="radio"]').prop('checked',true);
                            }
                            if(!$(this).find('input[type="radio"]').hasClass('selected')) {
                                $(this).find('input[type="radio"]').addClass('selected');
                            }
                        }
                    })
                }

                updateInstantAssystPanelPrice();
            }
        }
    });

    $(document).on('click touch', '#tab6 .brand-choose-sidebar .step-back-button', function() {
        setAssystDataAttrValue(0);
        activeAssystStep1()
    })

    function setDefaultAssystPanel() {
        var assystContent = $('#tab6 .assyst-content-wrapper');
        $.each(assystContent,function() {
            var button = $(this).find('.assyst-main-button');
            if(!$(this).hasClass('available')) {
                if(button.hasClass('selected')) {
                    button.removeClass('selected');
                }
            }
            else {
                if(!button.hasClass('selected')) {
                    button.addClass('selected');
                }
            }
        })
    }




    triggerAssystPanelCost('.btn-doctor-panel-accept');
    triggerAssystPanelCost('.btn-doctor-panel-cancel');
    initAssystPanelCost();




    /*--------------------------------------step 7----------------------------------------*/


    function initAddedPanelCost() {
        if($('#tab7 .brand-price-summary .pr').attr('data-added-panel-cost')) {
            var price = getAddedDataAttrValue()
            setAddedPanelCost(price);
        }
    }

    function setAddedPanelCost(_price) {
        $("#tab7 .brand-sidebar-wrapper .pr").text(parseInt(_price));
    }

    function getAddedPanelCost() {
        return parseInt($("#tab7 .brand-sidebar-wrapper .pr").text());
    }
    /*--------------------------------------------------------------------------------*/
    function setAddedDataAttrValue(_price) {
        $("#tab7 .brand-sidebar-wrapper .pr").attr('data-added-panel-cost',parseInt(_price));
    }

    function getAddedDataAttrValue() {
        return parseInt($("#tab7 .brand-sidebar-wrapper .pr").attr('data-added-panel-cost'));
    }

    // function resetAddedPanel() {
    //     $.each($('#tab7 .additional-tab'),function() {
    //         if($(this).attr('id') === 'fotel-additional') {
    //             if(!$(this).hasClass('active')) {
    //                 $(this).addClass('active');
    //             }
    //         }
    //         else {
    //             if($(this).hasClass('active')) {
    //                 $(this).removeClass('active');
    //             }
    //         }
    //     })
    //
    //     $.each($('#tab7 .additional-product-summary'), function() {
    //         if($(this).hasClass('active')) {
    //             $(this).removeClass('active');
    //             $(this).find('.additional-product-name').text('');
    //             $(this).find('.additional-product-amount').text('');
    //         }
    //     })
    //     initAddedPanelCost();
    // }

    $(document).on('click touch', '#tab7 .choosen-brand', function() {
        var activeTab = $(this).attr('data-target');
        console.log('ACTIVETAB: '+activeTab)

        if(!$('#tab7 .additional-tab#'+activeTab).hasClass('active')) {
            $.each($('#tab7 .additional-tab'), function() {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
                if($(this).attr('id') === activeTab) {
                    if(!$(this).hasClass('active')) {
                        $(this).addClass('active')
                    }
                }
            })
        }
    })

    $(document).on('click touch', '#tab7 .additional-tab .model-button', function() {
        var target = $(this).attr('data-target');
        var number = $(this).closest('.model-card-cover').find('input[type="number"]');

        if(!$(this).hasClass('selected')) {
            $(this).addClass('selected')
            $(this).find('.label-button').text('WYBRANO');

            if(!number.hasClass('disabled')) {
                number.addClass('disabled');
            }

            var label = $(this).attr('data-name');
            var price = parseInt($(this).attr('data-price'));
            var amount = parseInt(number.val());

            if(amount > 0) {
                target = $('#tab7 .brand-choose-sidebar').find('#'+target);
                if(!target.hasClass('active')) {
                    target.addClass('active')
                }
                target.find('.additional-product-name').text(label);
                target.find('.additional-product-amount').text(amount);
            }
            else {
                if(!number.hasClass('locked')) {
                    number.addClass('locked')
                }
            }
        }
        else {
            $(this).closest('.model-card-cover').find('input[type="number"]').val(1);
            if($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                $(this).find('.label-button').text('DODAJ');
                if(number.hasClass('disabled')) {
                    number.removeClass('disabled');
                }
            }

            $.each($('#tab7 .additional-product-summary'), function() {
                if($(this).attr('id') === target) {
                    $(this).removeClass('active');
                    $(this).find('.additional-product-name').text('');
                    $(this).find('.additional-product-amount').text('');
                }

            })
        }
        updateAddedElemPrice();
    })

    $(document).on('click touch', '#tab7 .additional-product-close', function() {
        var parent = $(this).closest('.additional-product-summary');
        var target = parent.attr('id');
        if(parent.hasClass('active')) {
            parent.removeClass('active');
            parent.find('.additional-product-name').text('');
            parent.find('.additional-product-amount').text('');
        }

        $.each($('#tab7 .additional-tab .model-button'), function() {
            if($(this).attr('data-target') === target) {
                var number = $(this).closest('.model-card-cover').find('input[type="number"]');
                number.val(1)
                // $(this).closest('.model-card-cover').find('input[type="number"]').val(1);
                if($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                    $(this).find('.label-button').text('DODAJ');
                    if(number.hasClass('disabled')) {
                        number.removeClass('disabled');
                    }
                }
            }
        })
        updateAddedElemPrice();
    })

    function updateAddedElemPrice() {
        console.log('update added price');
        var price = 0;
        $.each($('#tab7 .additional-tab .model-button'), function() {
            if($(this).hasClass('selected')) {
                var number = $(this).closest('.model-card-cover').find('input[type="number"]').val();
                sub = number * parseInt($(this).attr('data-price'));
                price = price + parseInt(sub);
            }
        })
        setAddedPanelCost(price);
        setAddedDataAttrValue(price)
    }

    function limitAddedElem() {
        $('#tab7 input[type="number"]').keydown(function () {
            // Save old value.
            if (!$(this).val() || (parseInt($(this).val()) <= 100000 && parseInt($(this).val()) > 0))
                $(this).data("old", $(this).val());
        });
        $('#tab7 input[type="number"]').keyup(function () {
            // Check correct, else revert back to old value.
            if (!$(this).val() || (parseInt($(this).val()) <= 100000 && parseInt($(this).val()) > 0))
                ;
            else
                $(this).val($(this).data("old"));
        });
    };

    $('#tab7 input[type="number"]').on('focus blur', function() {
        if($(this).hasClass('locked')) {
            console.log('chce zdjac klase')
            $(this).removeClass('locked')
        }
    })


    initAddedPanelCost();
    limitAddedElem();


    // $(document).on


    /*--------------------------------------step triggers----------------------------------------*/
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
        setCurrentProductNameCallback();
        setDefaultInvoiceRow();
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
        // confirmSelected();

        setCurrentProductNameCallback();
        console.log('aktualnie obslugujesz model: '+dataBrand);
        console.log('aktualnie jestes w kroku: '+$(target_tab_selector).attr('id'));

        // if($(this).closest('.tab-content').is(':nth-last-child(3)')) {
        //     console.log('przed przed ostatni krok')
        // }


        if($(this).closest('.tab-content').is(':nth-last-child(2)')) {
            console.log('FAKTURA!!');
            createInvoice()
        }

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
        console.log('confirm step')
        // var currentPrice = parseInt(0 + attentionDoctorPanelCost);
        var currentPrice = parseInt(0);
        // var currentPrice = parseInt(step1Cost);
        $.each($('.tab-content'), function() {
            // if($(this).hasClass('visitedTab') || $(this).hasClass('active')) {
            if($(this).hasClass('visitedTab')) {
                // console.log('JESTEM');
                if ($(".header-price .price-number").attr('data-total-price')) {
                    $.each($(this).find("[data-price]"), function () {
                        if ($(this).hasClass('selected')) {
                            if (!$(this).attr('data-price')) {
                                console.log('nie mam data-price');
                                currentPrice = currentPrice + 0;
                            }
                            else {
                                if (!(($(this).parents('.tab-content').is("#tab5")) || ($(this).parents('.tab-content').is("#tab6")))) {
                                    if ($(this).parents('.tab-content').is("#tab4")) {
                                        if ($(this).parents('.lamp-button-div').hasClass('available')) {
                                            if ($(this).attr('data-price')) {
                                                currentPrice = currentPrice + parseInt($(this).attr('data-price'));
                                            }
                                        }
                                    }
                                    else {
                                        currentPrice = currentPrice + parseInt($(this).attr('data-price'));
                                    }

                                    if($(this).parents('.tab-content').is("#tab7")) {
                                        var sub = 0;
                                        var number = $(this).closest('.model-card-cover').find('input[type="number"]').val();
                                        number = number - 1;
                                        sub = number * parseInt($(this).attr('data-price'));
                                        currentPrice = currentPrice + parseInt(sub);
                                        console.log('koszt w kroku 7: '+sub)
                                    }
                                }
                            }
                        }
                        if ($(this).parents('.tab-content').is("#tab5") || $(this).parents('.tab-content').is("#tab6")) {
                            if($(this).attr('data-confirmed')) {
                                currentPrice = currentPrice + parseInt($(this).attr('data-price'));
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
        // currentPrice = currentPrice + step1Cost;
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
    setCurrentProductNameCallback();

    function confirmSelected() {
        $.each($('[data-invoice-row]'),function() {
            if($(this).hasClass('selected')) {
                if(!$(this).attr('data-confirmed')) {
                    $(this).attr('data-confirmed','confirmed');
                }
            }
            else {
                if($(this).attr('data-confirmed')) {
                    $(this).removeAttr('data-confirmed');
                }
            }
        })
    }

    setDefaultInvoiceRow();
    function createInvoice() {
        confirmSelected();
        var totalInvoicePrice = 0;
        var totalPrice = parseInt($('.header-price .pr').text());
        $.each($('[data-invoice-row]'),function() {
            var invoiceAttr = $(this).attr('data-invoice-row');
            if($(this).attr('data-confirmed')) {
                var invoiceRow = $('#tab8').find("#"+invoiceAttr);
                if(invoiceRow.hasClass('hidden')) {
                    var number = $(this).closest('.model-card-cover').find('input[type="number"]')
                    if(number.length) {
                        var number = parseInt(number.val());
                        invoiceRow.find('.version .counter').text(number);
                        invoiceRow.find('.price-label .pr').text(number * parseInt($(this).attr('data-price')));
                        totalInvoicePrice = totalInvoicePrice + (number * parseInt($(this).attr('data-price')));
                    }
                    else {
                        invoiceRow.find('.price-label .pr').text($(this).attr('data-price'));
                        totalInvoicePrice = totalInvoicePrice + parseInt($(this).attr('data-price'))
                    }

                    invoiceRow.removeClass('hidden');
                    invoiceRow.find('.version .label').text($(this).attr('data-name'));
                    console.log('data-price: '+parseInt($(this).attr('data-price')));



                }
            }
        })
        console.log('INVOICE: '+totalInvoicePrice+', TOTAL: '+totalPrice);
        if(totalPrice === totalInvoicePrice) {
            $('#invoice .total-price-invoice').text(totalInvoicePrice)
        }
        else {
            $('#invoice .total-price-invoice').text("BŁĄD LICZENIA!!");
        }

    }

    function setDefaultInvoiceRow() {
        $.each($('#invoice .invoice-row'),function() {
            if(!$(this).hasClass('hidden')) {
                $(this).addClass('hidden')
            }
            $.each($(this).find('[data-default]'), function() {
                $(this).text($(this).attr('data-default'));
            })
        })
        $('#invoice .total-price-invoice').text($('#invoice .total-price-invoice').attr('data-default'))
    }


    $(document).on('click touch', '.print-pdf-button', function() {
        var pdf = new jsPDF('1', 'pt', 'letter');
        source = $('#invoice')[0];

        specialElementHandlers = {
            '#bypassme': function (element, renderer) {
                return true
            }
        };
        margins = {
            top:50,
            bottom: 50,
            left: 80,
            right: 80,
        };
        pdf.fromHTML(
            source,
            margins.left,
            margins.top, {
                'elementHandlers': specialElementHandlers
            },

            function (dispose) {
                pdf.save('makromed.pdf');
            }
        );
    })





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






//Change Current Config Text
    changeCurrentCongig = (tabName) => {
        $(".current-configuration").text(tabName)
    }





    $(".print-button-place").click(function () {
        var el = $(".for-print-section").html();
        let add = $(".footer-pdf").html();
        el = el.replace(/(\r\n|\n|\r)/gm, " ");
        el += add;
        $("#textarea-for-print").text(el)
        console.log(el)
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
