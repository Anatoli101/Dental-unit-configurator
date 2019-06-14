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

            if(valueOfAttribute === "certus-neo") {
                // $(".doctor-panel-img").append(certus_neo.panel_lekarza);
                // $(".assyst-content-wrapper").append(certus_neo.panel_asysty);
                // $(".assyst-step2-content").append(certus_neo.panel_asysty_numbers);

                // $(".lacquer-type-wrapper").css("opacity", "1");
                // $(".lacquer-type-wrapper").css("pointer-events", "all");
                // $(currentBrand + "-brand-color.block-colorified-seats").show();
                // $(".model-color-place").hide();
                // currentnModel = ".certus-neo";
                // $(".choose-color").css("display", "flex");
                // $(".lacquer-type-wrapper").css("display", "flex");
                $('.see-360-color').show()
            }
            else if(valueOfAttribute === "certus-max") {
                // $(".doctor-panel-img").append(certus_max.panel_lekarza);
                // $(".assyst-content-wrapper").append(certus_max.panel_asysty);
                // $(".assyst-step2-content").append(certus_max.panel_asysty_numbers);

                // $(".lacquer-type-wrapper").css("opacity", "1");
                // $(".lacquer-type-wrapper").css("pointer-events", "all");
                // $(".model-color-place").show();
                // $(".model-color-place").append("<img style=\'width:400px\' src=\"/konfigurator/img/img_panel_komplet_certus_max@2x.png\">");
                // currentnModel = ".certus-max";
            }
            else if(valueOfAttribute === "certus-standard") {
                // $(".doctor-panel-img").append(certus_standard.panel_lekarza);
                // $(".assyst-content-wrapper").append(certus_standard.panel_asysty);
                // $(".assyst-step2-content").append(certus_standard.panel_asysty_numbers);
                // $(".attention-block-wrapper").css("display", "block");

                // $(".model-color-place").show();
                // $(".model-color-place").append("<img style=\'width:400px\' src=\"/konfigurator/img/img_panel_komplet_certus_standard@2x.png\">");
                // currentnModel = ".certus-standart";
            }
            else if(valueOfAttribute === "exima-neo") {
                // $(".doctor-panel-img").append(exima_neo.panel_lekarza);
                // $(".assyst-content-wrapper").append(exima_neo.panel_asysty);
                // $(".assyst-step2-content").append(exima_neo.panel_asysty_numbers);

                // $(currentBrand + "-brand-color.block-colorified-seats").show();
                // $(".model-color-place").hide();
                // $(".choose-color").css("display", "flex");
                // $(".lacquer-type-wrapper").css("display", "flex");
                // currentnModel = ".exima-neo";
                $(".see-360-color").show();
            }
            else if(valueOfAttribute === "exima-max") {
                // $(".doctor-panel-img").append(exima_max.panel_lekarza);
                // $(".assyst-content-wrapper").append(exima_max.panel_asysty);
                // $(".assyst-step2-content").append(exima_max.panel_asysty_numbers);

                // $(".model-color-place").show();
                // $(".model-color-place").append("<img style=\'width:400px\' src=\"/konfigurator/img/img_panel_komplet_exima_max@2x.png\">");
                // currentnModel = ".exima-max";
            }
            else if(valueOfAttribute === "exima-x1g") {
                // $(".doctor-panel-img").append(exima_x1g.panel_lekarza);
                // $(".assyst-content-wrapper").append(exima_x1g.panel_asysty);
                // $(".assyst-step2-content").append(exima_x1g.panel_asysty_numbers);

                // $(".model-color-place").show();
                // $(".model-color-place").append("<img class=\"small-panel\" style=\'width:400px\' src=\"/konfigurator/img/img_panel_komplet_exima_standard_x1g@2x.png\">");
                // currentnModel = ".exima-x1g";
            }
            else if(valueOfAttribute === "exima-x1d") {
                // $(".doctor-panel-img").append(exima_x1d.panel_lekarza);
                // $(".assyst-content-wrapper").append(exima_x1d.panel_asysty);
                // $(".assyst-step2-content").append(exima_x1d.panel_asysty_numbers);

                // $(".model-color-place").show();
                // $(".model-color-place").append("<img class=\"small-panel\" style=\'width:400px\' src=\"/konfigurator/img/img_panel_komplet_exima_standard_x1d@2x.png\">");
                // currentnModel = ".exima-x1d";
            }
        }

        // seatPrice = seatPrice + doctorPanel; //update ceny
        priceLabel('#tab2','',seatPrice);
        resetAssystPanelCost();
        resetAttentionBlock();
        // confirmStep();

        $(".step-2-button").addClass("nextStepActive");
    });

    $(document).on('click touch', '#tab3 .choose-the-color', function() {

        // $('.choose-the-color').children("span").removeClass("icon-icon_check");
        // $(".choose-the-color.color-seat").removeClass('color-active');
        // $("#" + $(this).attr("id")).children("span").addClass("icon-icon_check");
        // $('.choose-the-color.color-seat#' + $(this).attr("id")).children("span").addClass("icon-icon_check");
        // $('.choose-the-color.color-seat#' + $(this).attr("id")).addClass('color-active');
        $(".step-3-button").addClass("nextStepActive");


        // $(".color-img").hide();
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
        confirmStep();
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


        confirmStep();
        setCurrentProductNameCallback();
        // changeCurrentCongig(getTabId);
    });

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function numberWithoutSpaces(x) {
        return x.toString().replace(" ", "");
    }


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
        $(".header-price .price-number").attr('data-total-price', numberWithSpaces(currentPrice));
        // $(".header-price .price-number").attr('data-total-price', parseInt(currentPrice));
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
        var totalPrice = parseInt(numberWithoutSpaces($('.header-price .pr').text()));

        $.each($('[data-invoice-row]'),function() {
            var invoiceAttr = $(this).attr('data-invoice-row');
            if($(this).attr('data-confirmed')) {
                var invoiceRow = $('#tab8').find("#"+invoiceAttr);

                if(invoiceRow.hasClass('hidden')) {
                    console.log('is hidden')
                    var number = $(this).closest('.model-card-cover').find('input[type="number"]')
                    if(number.length) {
                        var number = parseInt(number.val());
                        invoiceRow.find('.version .counter').text(number+'szt ');
                        invoiceRow.find('.price-label .pr').text(number * numberWithSpaces($(this).attr('data-price')));
                        totalInvoicePrice = totalInvoicePrice + (number * parseInt($(this).attr('data-price')));
                    }
                    else {
                        invoiceRow.find('.price-label .pr').text(numberWithSpaces($(this).attr('data-price')));
                        totalInvoicePrice = totalInvoicePrice + parseInt($(this).attr('data-price'))
                    }

                    invoiceRow.removeClass('hidden');
                    invoiceRow.find('.version .label').text($(this).attr('data-name'));
                }
            }
        })


        console.log('INVOICE: '+totalInvoicePrice+', TOTAL: '+totalPrice);
        if(totalPrice === totalInvoicePrice) {
            $('#invoice .total-price-invoice').text(numberWithSpaces(totalInvoicePrice));
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
            // if($(this).is(':visible')) {
            //     $(this).css({'display':'none'})
            // }
            $.each($(this).find('[data-default]'), function() {
                $(this).text($(this).attr('data-default'));
            })
        })
        $('#invoice .total-price-invoice').text($('#invoice .total-price-invoice').attr('data-default'))
    }

    $(document).on('click touch', '.print-pdf-button', function() {
        $.each($('#invoice .invoice-row'),function() {
            if($(this).hasClass('hidden')) {
                $(this).remove();
            }
        })
        // e.preventDefault();
        var el = $("#invoice").html();
        console.log(el)
        el = el.replace(/(\r\n|\n|\r)/gm, " ");
        $("#textarea-for-print").text(el)
    });


    // $(document).on('click touch', '.print-pdf-button', function() {
    //     var pdf = new jsPDF('1', 'pt', 'letter','Non-utf-8-string');
    //     source = $('#invoice')[0];
    //
    //     var imageURL1 = 'data:image/png;base64,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';
    //     var imageURL2 = 'data:image/png;base64,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';
    //     pdf.addImage(imageURL1,'PNG',15,40,100,100);
    //     pdf.addImage(imageURL2,'PNG',150,200,100,100);
    //     specialElementHandlers = {
    //         '#bypassme': function (element, renderer) {
    //             return true
    //         }
    //     };
    //     margins = {
    //         top:50,
    //         bottom: 50,
    //         left: 80,
    //         right: 80,
    //     };
    //     pdf.fromHTML(
    //         source,
    //         margins.left,
    //         margins.top, {
    //             'elementHandlers': specialElementHandlers
    //         },
    //
    //         function (dispose) {
    //
    //             pdf.save('makromed.pdf');
    //         }
    //     );
    // })




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


    // $(".color-color").click(function () {
    //     if (currentBrand === ".certus") {
    //         $("img#" + seatColor).hide();
    //
    //
    //         if (seatColor.length === 8 || seatColor.length === 9) {
    //
    //         } else {
    //             seatColor += "_w"
    //         }
    //         $("img#" + seatColor).show();
    //     }
    //
    // });

    // $(".color-white").click(function () {
    //     $("img#" + seatColor).hide();
    //
    //
    //     if (seatColor.length === 8) {
    //         seatColor = seatColor.substr("_w", 6);
    //     } else if (seatColor.length === 9) {
    //         seatColor = seatColor.substr("_w", 7);
    //     }
    //
    //     $("img#" + seatColor).show();
    // });


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


    // $(".additional-product-tab1").click(function () {
    //     $(".kompressors-tab").hide();
    //     $(".seat-and-additional").css("display", "flex");
    // });
    //
    // $(".additional-product-tab2").click(function () {
    //     $(".seat-and-additional").hide();
    //     $(".kompressors-tab").css("display", "flex");
    // });
    //




    // $("#tab6 .tab2-accept").click(function () {
    //     $(".choose-assyst-product").hide();
    //     $(".assyst-step2-content").show();
    // });
    //
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

    /*
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

    // $("#assyst-strykawko button.tab1-card-button").click(function () {
    //     assystChoice = $(this).parent().find(".tab1-card-title").text();
    // });
    //
    //
    // $(".assyst-type-buttons button").click(function () {
    //     $(".assyst-accept").hide();
    //
    // });
    //
    // $(".choose-assyst-product label").click(function () {
    //     $(".assyst-accept").show();
    // });
    //
    // $(".choose-assyst-product .assyst1-wrapper button").click(function () {
    //     $(".assyst-accept").show();
    // });

    // $("#Piaskarka label").click(function () {
    //     var piaskarkaHasClass = $(this).hasClass("turn-szybko");
    //     if (piaskarkaHasClass) {
    //         $("#Piaskarka .turbina-attention").css("display", "flex");
    //     } else {
    //         $("#Piaskarka .turbina-attention").hide();
    //     }
    // });
    //
    //
    // $("#assyst-piaskarka label").click(function () {
    //     var piaskarkaHasClass = $(this).hasClass("turn-szybko");
    //     if (piaskarkaHasClass) {
    //         $("#assyst-piaskarka .turbina-attention").css("display", "flex");
    //     } else {
    //         $("#assyst-piaskarka .turbina-attention").hide();
    //     }
    // });
    //
    //
    // $(".pneumatic-light-off label").click(function () {
    //     $(".mikro-attention-icon").show();
    // });


    // truePanelName = (word) =>
    // {
    //     if (word === ".certus-neo") {
    //         return "CERTUS NEO";
    //     } else if (word === ".certus-max") {
    //         return "CERTUS MAX"
    //     } else if (word === ".certus-standart") {
    //         return "CERTUS STANDART"
    //     } else if (word === ".exima-neo") {
    //         return "EXIMA NEO"
    //     } else if (word === ".exima-max") {
    //         return "EXIMA MAX"
    //     } else if (word === ".exima-x1g") {
    //         return "EXIMA X1G"
    //     } else if (word === ".exima-x1d") {
    //         return "EXIMA X1D"
    //     }
    // }
    //
    // trueColorName = (colorId) =>
    // {
    //     if (colorId === "color1" || colorId === "color1_w") {
    //         return "BORDOWY";
    //     } else if (colorId === "color2" || colorId === "color2_w") {
    //         return "BRĄZOWY";
    //     } else if (colorId === "color3") {
    //         return "CIEMNO-SZARY";
    //     } else if (colorId === "color4" || colorId === "color4_w") {
    //         return "JASNO-SZARY";
    //     } else if (colorId === "color5" || colorId === "color5_w") {
    //         return "FIOLETOWY";
    //     } else if (colorId === "color6" || colorId === "color6_w") {
    //         return "GRANATOWY";
    //     } else if (colorId === "color7" || colorId === "color7_w") {
    //         return "NIEBIESKI";
    //     } else if (colorId === "color8") {
    //         return "MORSKI";
    //     } else if (colorId === "color9" || colorId === "color9_w") {
    //         return "POMARAŃCZOWY";
    //     } else if (colorId === "color10" || colorId === "color10_w") {
    //         return "ŻÓŁTY";
    //     } else if (colorId === "color11") {
    //         return "ZIELONY";
    //     }
    // }
    //
    // trueLampName = (lamp) =>
    // {
    //     if (lamp === "lamp1") {
    //         return "BEZCIENIOWA DIODOWA POLARIS";
    //     } else if (lamp === "lamp2") {
    //         return "BEZCIENIOWA DIODA POLARIS SENSOMATIC";
    //     } else if (lamp === "lamp3") {
    //         return "BEZCIENIOWA HALOGENOWA ISA";
    //     } else if (lamp === "lamp4") {
    //         return "BEZCIENIOWA DIODOWA IRIS Z WBUDOWANĄ KAMERĄ";
    //     }
    // }
    //
    //
    // printPdf = () =>
    // {
    //     window.print();
    // }

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

    // $("#tab7 button").on("click", function () {
    //     a("#tab7", "#tab7 .price-summary span")
    // });


// $("button.step-2-button").click(function () {

//   $(".product-summary-list").append("<div class=\"result\"><div class=\"product\">Panel</div><div class=\"version\">" + truePanelName(currentnModel) + "</div><div class=\"product-price\">" + seatPrice + " zl" + "</div>")
// })

// $("button.step-3-button").click(function () {
//   $(".product-summary-list").append("<div class=\"result\"><div class=\"product\">Color unitu</div><div class=\"version\">" + trueColorName(seatColor) + "</div><div class=\"product-price\">" + '1000' + " zl" + "</div>")
// })

// $("button.step-4-button").click(function () {
//   $(".product-summary-list").append("<div class=\"result\"><div class=\"product\">Lampa</div><div class=\"version\">" + trueLampName(currentLamp) + "</div><div class=\"product-price\">" + $("button#" + currentLamp).attr("data-price") + " zl" + "</div>")
// })


    // qq = () =>
    // {
    //     $("#tab5 input:checked, #tab5  button .icon-icon_check, #tab6 .assyst2 input:checked, #tab6 .assyst2  button .icon-icon_check,#tab7  button .icon-icon_check").each(function () {
    //         $(this).is("input") ?
    //             $("#result-table tbody").append("<tr  style=\"font-size:9px;\"><td style=\"line-height:30px; border-bottom:1px solid #E4E5ED;width:30%\">" + $(this).attr("data-type") + "</td><td style=\"line-height:30px; border-bottom:1px solid #E4E5ED;\">" + $(this).next().text() + "</td><td style=\"   line-height: 30px; border-bottom:1px solid #E4E5ED;text-align:end;\">" + numberWithCommas($(this).attr("data-price")) + "</td></tr>")
    //             :
    //             $("#result-table tbody").append("<tr  style=\"font-size:9px;\"><td style=\"line-height:30px; border-bottom:1px solid #E4E5ED;width:30%\">" + $(this).closest("button").attr("data-type") + "</td><td style=\"line-height:30px; border-bottom:1px solid #E4E5ED;\">" + $(this).closest("button").attr("data-name") + "</td><td style=\"   line-height: 30px; border-bottom:1px solid #E4E5ED;text-align:end;\">" + numberWithCommas($(this).closest("button").attr("data-price")) + "</td></tr>");
    //     })
    // }
    //
    //
    // $(".tab7-summ .assyst-next-button").click(function () {
    //     $(".pdf-price b").text($("header .header-price .price-number").text());
    //     $("#result-table tbody").empty();
    //     $("#result-table tbody").append("<tr style=\"font-size:9px;\"><td style=\"line-height:30px;  border-bottom:1px solid #E4E5ED;width:30%\">Panel       </td><td style=\"line-height:30px; width:50%; border-bottom:1px solid #E4E5ED;\">" + truePanelName(currentnModel) + "</td><td style=\"line-height:30px;width:20%; border-bottom:1px solid #E4E5ED;text-align: end;\">" + numberWithCommas(seatPrice) + "</td></tr>");
    //     $("#result-table tbody").append("<tr style=\"font-size:9px;\"><td style=\"line-height:30px;  border-bottom:1px solid #E4E5ED;width:30%\">Color unitu </td><td style=\"line-height:30px; width:50%; border-bottom:1px solid #E4E5ED;\">" + trueColorName(seatColor) + "</td><td style=\"line-height:30px;width:20%; border-bottom:1px solid #E4E5ED;text-align: end;\">" + numberWithCommas(1000) + "</td></tr>");
    //     $("#result-table tbody").append("<tr style=\"font-size:9px;\"><td style=\"line-height:30px;  border-bottom:1px solid #E4E5ED;width:30%\">Lampa       </td><td style=\"line-height:30px; width:50%; border-bottom:1px solid #E4E5ED;\">" + trueLampName(currentLamp) + "</td><td style=\"line-height:30px;width:20%; border-bottom:1px solid #E4E5ED;text-align: end;\">" + numberWithCommas($("button#" + currentLamp).attr("data-price")) + "</td></tr>");
    //     qq()
    //
    // });





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
