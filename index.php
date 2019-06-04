<!--ANATOLII BRANCH-->

<?php
/**
 * The template for displaying pages
 *
 * Template Name: Konfigurator
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Makromed</title>
    <!--<link rel="stylesheet" href="/wp-content/themes/makromed/konfigurator/css/main.css">-->

    <!--<link rel="stylesheet" href="/wp-content/themes/makromed/konfigurator/fonts/icomoon/style.css">-->
    <link rel="stylesheet" href="/konfigurator/fonts/icomoon/style.css">
    <!--<link rel="stylesheet" href="/wp-content/themes/makromed/konfigurator/css/jquery-ui-1.9.2.custom.min.css">-->
    <link rel="stylesheet" href="/konfigurator/css/jquery-ui-1.9.2.custom.min.css">
    <!--<link rel="stylesheet" href="/wp-content/themes/makromed/konfigurator/css/jquery-ui.structure.min.css">-->
    <link rel="stylesheet" href="/konfigurator/css/jquery-ui.structure.min.css">
    <!--<link rel="stylesheet" href="/wp-content/themes/makromed/konfigurator/css/jquery-ui.theme.min.css">-->
    <link rel="stylesheet" href="/konfigurator/css/jquery-ui.theme.min.css">
    <link rel="stylesheet" href="https://use.typekit.net/bzk0zrk.css">
    <link rel="stylesheet" href="/konfigurator/css/main.css">
</head>

<body>
<div class="main">
    <header>
        <div class="logo-place"><a href=""><img src="/konfigurator/img/makromed.png" alt=""></a></div>
        <div class="curent-config-block">
            <div class="current-config-left">
                <p class="curent-config-p"> Obecnie konfigurujesz:<span class="current-configuration"></span></p>
            </div>
            <div class="current-config-right">
                <img class="logo-img" src="" alt="empty">
            </div>
        </div>
        <div class="header-price">
            <p class="price-general">Cena łącznie:</p>
            <div class="price-block">
                <p class="price">
                <p class="price-number" data-total-price="0"><span class="pr">0</span> zł</p>brutto
            </div>
        </div>
        <div class="close-button"><a href=""><img src="/konfigurator/img/close-buttom.png" alt=""></a></div>
    </header>
    <div class="content">
        <div class="sidebar">
            <ul class="sidebar-ul nav nav-tabs">
                <li id="#tab1" class="sidebar-li-list active visitedTab">Marka</li>
                <li id="#tab2" class="sidebar-li-list">Model</li>
                <li id="#tab3" class="sidebar-li-list">Fotel</li>
                <li id="#tab4" class="sidebar-li-list">Lampa</li>
                <li id="#tab5" class="sidebar-li-list">Panel lekarza</li>
                <li id="#tab6" class="sidebar-li-list">Panel asysty</li>
                <li id="#tab7" class="sidebar-li-list">Dodatki</li>
                <li id="#tab8" class="sidebar-li-list summaryTab">Podsumowanie</li>
            </ul>
        </div>
        <section id="tab1" class="tab-content active visitedTab">
            <div class="brand-choose-sidebar">
                <div class="brand-sidebar-wrapper">
                    <div class="product-list">
                        <div class="choosen-brand brand-certus-label seat-model " data-brand="certus">
                            <p class="brand-name">CERTUS</p>
                            <p class="brand-price">od 29 000 zł</p> <span
                                    class="choosen-brand-sign choose-seat-sign icon-icon_check certus-seat"></span>
                        </div>
                        <div class="choosen-brand brand-exima-label seat-model" data-brand="exima">
                            <p class="brand-name">EXIMA</p>
                            <p class="brand-price">od 22 500 zł</p><span
                                    class="choosen-brand-sign choose-seat-sign icon-icon_check exima-seat"></span>
                        </div>
                    </div>
                    <div class="tab1-summary">
                        <div class="brand-price-summary">
                            <p class="brand-summary">Cena unitu:</p>
                            <p class="price-summary"><span class="pr">0</span> zł</p>
                        </div>
                        <div class="next-step-button">
                            <button class="step-1-button button-to-go">DALEJ</button>
                            <span class="icon-icon_arrow_right"></span></div>
                    </div>
                </div>
            </div>
            <div class="main-content">
                <p class="choose-brand-p">Wybierz interesującą Cię markę:</p>
                <div class="brand-products">
                    <div class="brand-certus">
                        <div class="brand-certus-wrapper">
                            <div class="product-card-top"><img src="/konfigurator/img/certus-logo.png" alt=""
                                                               class="logo-img">
                                <button id="seat-certus" class="see-360">ZOBACZ W 360°</button>
                            </div>
                            <div class="brand-img-place"><img src="/konfigurator/img/img_marka_certus.png"
                                                              id="seat-certus"
                                                              class="brand-seat-click" alt=""></div>
                            <div class="brand-text-wrapper">
                                <p class="brand-text-title">Opis marki</p>
                                <p class="brand-text-p">W unitach marki Certus specjalnie przeprojektowany fotel stomatologiczny Amicus jest integralnie połączony z blokiem spluwaczki, wzdłuż którego się porusza. Zaprojektowano je z myślą o maksymalnej wygodzie pacjenta i wyjątkowym komforcie pracy stomatologa. Pneumatyczne sterowanie unitem pozwala na niezawodną pracę, nie ograniczając możliwości wyposażania stanowiska pracy we wspomagające ją nowoczesne urządzenia elektroniczne.
                                    Unit Certus max odróżnia od standardowego Certusa m.in. nowy design klawiatury sterującej, ruchoma miska spluwaczki, nowy panel asysty, pozwalający na zamontowanie aż czterech różnych końcówek. Model NEO odruznia się od modelu Max nowy dizajn panelu lekarza i asysty, inna forma klawiatury sterującej oraz zintegrowany z obudowa pojemnik na chusteczki higieniczne.
                                    Fotel unitu CERTUS jest odchylany od bloku spluwaczki o 20 stopni, ułatwiając dostęp do pacjenta z obu stron. Posiada predefiniowane i edytowalne pamiÍci, wyposażony jest w wygodną pneumatyczną blokadę zagluwka.
                                    Blok spluwaczki modeli Max i NEO może być opcjonalnie polakierowany zgodnie z wybranym kolorem tapicerki fotela (dotyczy wybranych kolorów).
                                    Unity marki CERTUS wyposażamy w lampy oświetlające z szerokiej oferty włoskiej firmy G.COMM oraz w najnowocześniejszy osprzęt renomowanego japońskiego koncernu NSK. Na życzenie zamawiającego unity możemy wyposażyć w urządzenia innych marek.

                                </p>
                            </div>
                            <div class="choose-button-place">
                                <button data-price="29000" data-brand="certus"
                                        class="choose-seat seat-model "><span class="label-button">WYBIERAM</span><span
                                            class="choose-seat-sign certus-seat icon-icon_check"></span></button>
                            </div>
                        </div>
                    </div>
                    <div class="brand-exima">
                        <div class="brand-exima-wrapper">
                            <div class="product-card-top"><img src="/konfigurator/img/exima-logo@2x.png" alt=""
                                                               class="logo-img">
                                <button id="seat-exima" class="see-360">ZOBACZ W 360°</button>
                            </div>
                            <div class="brand-img-place"><img src="/konfigurator/img/img_marka_exima.png"
                                                              class="brand-seat-click" alt=""></div>
                            <div class="brand-text-wrapper">
                                <p class="brand-text-title">Opis marki</p>
                                <p class="brand-text-p">Unit EXIMA to stanowisko pracy stomatologa montowane do fotela stomatologicznego. Unity naszej produkcji wyposażamy w wytwarzany przez nas fotel stomatologiczny AMICUS. Takie zestawienie zapewnia niezawodnoúś działania dwóch kompatybilnych urządzeń, połączonych w zintegrowaną całość. Pneumatyczne sterowanie unitem pozwala na niezawodną pracę przez lata, nie ograniczając możliwości wyposażania stanowiska pracy w nowoczesne urządzenia elektroniczne.
                                    Unity marki EXIMA obecnie dostępne są w trzech wersjach: najnowszej NEO, popularnej i lubianej wersji Max oraz podstawowych: X1G i X1D (rękawy wiszące).
                                    Unity marki EXIMA wyposażamy w lampy ozwietlajace z szerokiej oferty włoskiej firmy G.COMM oraz w najnowocześniejszy osprzęt renomowanego japońskiego koncernu NSK. Na życzenie zamawiającego unity możemy wyposażyć w urządzenia innych marek</p>
                            </div>
                            <div class="choose-button-place">
                                <button data-price="22500" data-brand="exima"
                                        class="choose-seat seat-model"><span class="label-button">WYBIERAM</span><span
                                            class="choose-seat-sign exima-seat icon-icon_check"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="seat-certus" class="seat-one-popup pop-up">
                <div class="close-pop-up"><img src="/konfigurator/img/close-buttom.png" alt=""></div>
                <div style="width: 650px; height: 650px;" id="CERTUS_ciemnoszary-ciemnoszary-1283136100"><a
                            href="http://www.adobe.com/go/getflashplayer"> <img
                                src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif"
                                alt="Get Adobe Flash player"/></a></div>
            </div>
            <div id="seat-exima" class="seat-two-popup pop-up">
                <div class="close-pop-up"><img src="/konfigurator/img/close-buttom.png" alt=""></div>
                <div style="width: 650px; height: 650px;" id="Exima_niebieski-1658327094"><a
                            href="http://www.adobe.com/go/getflashplayer"> <img
                                src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif"
                                alt="Get Adobe Flash player"/></a></div>
            </div>
        </section>
        <section id="tab2" class="tab-content hide">
            <div class="brand-choose-sidebar">
                <div class="brand-sidebar-wrapper">
                    <div class="product-list">
                        <div class="choosen-brand model-type model-tab2 certus" data-brand="certus-neo">
                            <p class="brand-name">CERTUS NEO</p>
                            <p class="brand-price">od 34 000 zł</p><span
                                    class="choosen-brand-sign certus-neo icon-icon_check"></span>
                        </div>
                        <div class="choosen-brand model-type model-tab2 certus" data-brand="certus-max">
                            <p class="brand-name">CERTUS MAX</p>
                            <p class="brand-price">od 31 000 zł</p><span
                                    class="choosen-brand-sign certus-max icon-icon_check"></span>
                        </div>
                        <div class="choosen-brand model-type model-tab2 certus" data-brand="certus-standard">
                            <p class="brand-name">CERTUS STANDARD</p>
                            <p class="brand-price">od 29 000 zł</p><span
                                    class="choosen-brand-sign certus-standart icon-icon_check"></span>
                        </div>
                        <div class="choosen-brand model-type model-tab2 exima" data-brand="exima-neo">
                            <p class="brand-name">EXIMA NEO</p>
                            <p class="brand-price">od 28 500 zł</p><span
                                    class="choosen-brand-sign exima-neo icon-icon_check"></span>
                        </div>
                        <div class="choosen-brand model-type model-tab2 exima" data-brand="exima-max">
                            <p class="brand-name">EXIMA MAX</p>
                            <p class="brand-price">od 26 000 zł</p><span
                                    class="choosen-brand-sign exima-max icon-icon_check"></span>
                        </div>
                        <div class="choosen-brand model-type model-tab2 exima" data-brand="exima-x1g">
                            <p class="brand-name">EXIMA X1G</p>
                            <p class="brand-price">od 23 500 zł</p><span
                                    class="choosen-brand-sign exima-x1g icon-icon_check"></span>
                        </div>
                        <div class="choosen-brand model-type model-tab2 exima" data-brand="exima-x1d">
                            <p class="brand-name">EXIMA X1D</p>
                            <p class="brand-price">od 22 500 zł</p><span
                                    class="choosen-brand-sign exima-x1d icon-icon_check"></span>
                        </div>
                    </div>
                    <div class="tab1-summary">
                        <div class="brand-price-summary">
                            <p class="brand-summary">Cena unitu: <span class="brand-summary-label"></span></p>
                            <p class="price-summary"><span class="pr">0</span> zł</p>
                        </div>
                        <div class="prev-step-button">
                            <button class="step-back-button">WRÓĆ</button>
                            <span
                                    class="icon-icon_arrow_left"></span></div>
                        <div class="next-step-button">
                            <button class="step-2-button button-to-go">DALEJ</button>
                            <span class="icon-icon_arrow_right"></span></div>
                    </div>
                </div>
            </div>
            <div class="main-content model-content">
                <div class="model-card-wrapper">
                    <div class="exima-list model-list">
                        <div class="model-card-cover certus">
                            <div class="model-card">
                                <div class="model-over-hidden">
                                    <p class="model-name">CERTUS NEO</p><img
                                            src="/konfigurator/img/img_panel_komplet_certus_neo@2x.png"
                                            alt="">
                                    <p class="model-description">W standardzie otrzymujesz:</p>
                                    <ul class="model-ul">

                                        <li>W kolorze białym RAL 9016</li>
                                        <li>Fotel Amicus</li>
                                        <li>Blokada ruchu fotela podczas pracy końcówki</li>
                                        <li>Pneumatyczna blokada zagłówka fotela</li>
                                        <li>Pamięci fotela</li>
                                        <li>Pamięć fotela w pozycji "do spluwaczki"</li>
                                        <li>Predefiniowane i edytowalne pamięci fotela</li>
                                        <li>Sterownik nożny</li>
                                        <span class="li-category">Panel lekarza</span>
                                        <li>Rękawy od góry</li>
                                        <li>5 rękawów</li>
                                        <li>Rękawy silikonowe bez światła</li>
                                        <li>Silikonowa podkładka pod końcówki</li>
                                        <li>Hamulec pneumatyczny ramienia</li>
                                        <li>Hamulec pneumatyczny ruchu obrotowego</li>
                                        <li>Sterowanie fotelem</li>
                                        <li>Sterowanie funkcjami bloku spluwaczki</li>
                                        <li>Regulacja wody do każdej końcówki</li>
                                        <li>Strzykawko-dmuchawka 3-funkcyjna</li>
                                        <li>Tacka na narzędzia pod panelem</li>
                                        <span class="li-category">Blok spluwaczki</span>
                                        <li>Fotel odchylany od bloku spluwaczki</li>
                                        <li>Obrotowa miska spluwaczki</li>
                                        <li>Sygnalizacja niedomknięcia miski podczas ruchu fotela</li>
                                        <li>Ślinociąg przepływowy</li>
                                        <span class="li-category">Panel asysty</span>
                                        <li>Panel asysty – 4 końcówki</li>
                                        <li>Sterowanie funkcjami spluwaczki i lampy</li>
                                        <li>Sterowanie funkcjami fotela</li>
                                        <span class="li-category">Lampa oświetleniowa</span>
                                        <li>Bezcieniowa, diodowa POLARIS</li>

                                    </ul>

                                </div>
                                <div class="model-button-place">
                                    <button data-price="34000" data-brand="certus-neo" class="model-button model-type">
                                        <span class="label-button">WYBIERAM</span><span
                                                class="certus-neo icon-icon_check"></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="model-card-cover certus">
                            <div class="model-card">
                                <div class="model-over-hidden">
                                    <p class="model-name">CERTUS MAX</p><img
                                            src="/konfigurator/img/img_panel_komplet_certus_max@2x.png"
                                            alt="">
                                    <p class="model-description">W standardzie otrzymujesz:</p>
                                    <ul class="model-ul">
                                        <li>W kolorze białym RAL 9016</li>
                                        <li>Fotel Amicus</li>
                                        <li>Blokada ruchu fotela podczas pracy końcówki</li>
                                        <li>Pneumatyczna blokada zagłówka fotela</li>
                                        <li>Pamięci fotela</li>
                                        <li>Pamięć fotela w pozycji "do spluwaczki"</li>
                                        <li>Predefiniowane i edytowalne pamięci fotela</li>
                                        <li>Sterownik nożny</li>
                                        <span class="li-category">Panel lekarza</span>
                                        <li>Rękawy od góry</li>
                                        <li>5 rękawów</li>
                                        <li>Rękawy silikonowe bez światła</li>
                                        <li>Silikonowa podkładka pod końcówki</li>
                                        <li>Hamulec pneumatyczny ramienia</li>
                                        <li>Hamulec pneumatyczny ruchu obrotowego</li>
                                        <li>Sterowanie fotelem</li>
                                        <li>Sterowanie funkcjami bloku spluwaczki</li>
                                        <li>Regulacja wody do każdej końcówki</li>
                                        <li>Strzykawko-dmuchawka 3-funkcyjna</li>
                                        <li>Tacka na narzędzia pod panelem</li>
                                        <span class="li-category">Blok spluwaczki</span>
                                        <li>Fotel odchylany od bloku spluwaczki</li>
                                        <li>Obrotowa miska spluwaczki</li>
                                        <li>Sygnalizacja niedomknięcia miski podczas ruchu fotela</li>
                                        <li>Ślinociąg przepływowy</li>
                                        <span class="li-category">Panel asysty</span>
                                        <li>Sterowanie funkcjami spluwaczki i lampy</li>
                                        <li>Sterowanie funkcjami fotela</li>
                                        <span class="li-category">Lampa oświetleniowa</span>
                                        <li>Bezcieniowa, diodowa POLARIS</li>
                                    </ul>
                                </div>
                                <div class="model-button-place">
                                    <button data-price="31000" data-brand="certus-max"
                                            class="model-button model-type"><span
                                                class="label-button">WYBIERAM</span><span
                                                class="certus-max icon-icon_check"></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="model-card-cover certus">
                            <div class="model-card">
                                <div class="model-over-hidden">
                                    <p class="model-name">CERTUS STANDARD</p><img
                                            src="/konfigurator/img/img_panel_komplet_certus_standard@2x.png" alt="">
                                    <p class="model-description">W standardzie otrzymujesz:</p>
                                    <ul class="model-ul">
                                        <li>W kolorze białym RAL 9016</li>
                                        <li>Fotel Amicus</li>
                                        <li>Blokada ruchu fotela podczas pracy końcówki</li>
                                        <li>Pneumatyczna blokada zagłówka fotela</li>
                                        <li>Pamięci fotela</li>
                                        <li>Predefiniowane i edytowalne pamięci fotela</li>
                                        <li>Sterownik nożny</li>
                                        <span class="li-category">Panel lekarza</span>
                                        <li>Rękawy od góry</li>
                                        <li>5 rękawów</li>
                                        <li>Rękawy silikonowe bez światła</li>
                                        <li>Silikonowa podkładka pod końcówki</li>
                                        <li>Hamulec pneumatyczny ramienia</li>
                                        <li>Hamulec pneumatyczny ruchu obrotowego</li>
                                        <li>Sterowanie fotelem</li>
                                        <li>Sterowanie funkcjami bloku spluwaczki</li>
                                        <li>Regulacja wody do każdej końcówki</li>
                                        <li>Strzykawko-dmuchawka 3-funkcyjna</li>
                                        <li>Tacka na narzędzia pod panelem</li>
                                        <span class="li-category">Blok spluwaczki</span>
                                        <li>Fotel odchylany od bloku spluwaczki</li>
                                        <li>-Ślinociąg przepływowy</li>
                                        <span class="li-category">Panel asysty</span>
                                        <li>Sterowanie funkcjami spluwaczki i lampy</li>
                                        <li>Sterowanie funkcjami fotela</li>
                                        <span class="li-category">Lampa oświetleniowa</span>
                                        <li>Bezcieniowa, diodowa POLARIS</li>
                                    </ul>
                                </div>
                                <div class="model-button-place">
                                    <button data-price="29000" data-brand="certus-standard"
                                            class="model-button model-type"><span
                                                class="label-button">WYBIERAM</span><span
                                                class="certus-standart icon-icon_check"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="exima-list model-list">
                        <div class="model-card-cover exima">
                            <div class="model-card">
                                <div class="model-over-hidden">
                                    <p class="model-name">EXIMA NEO</p><img
                                            src="/konfigurator/img/img_panel_komplet_exima_neo@2x.png"
                                            alt="">
                                    <p class="model-description">W standardzie otrzymujesz:</p>
                                    <ul class="model-ul">
                                        <li>W kolorze białym RAL 9016</li>
                                        <li>Fotel Amicus</li>
                                        <li>Blokada ruchu fotela podczas pracy końcówki</li>
                                        <li>Pamięci fotela</li>
                                        <li>Pamięć fotela w pozycji "do spluwaczki"</li>
                                        <li>Predefiniowane i edytowalne pamięci fotela</li>
                                        <li>Sterownik nożny</li>
                                        <span class="li-category">Panel lekarza</span>
                                        <li>Rękawy od góry</li>
                                        <li>Czwarty rękaw pneumatyczny</li>
                                        <li>5 rękawów</li>
                                        <li>Rękawy silikonowe bez światła</li>
                                        <li>Silikonowa podkładka pod końcówki</li>
                                        <li>Hamulec pneumatyczny ramienia</li>
                                        <li>Hamulec pneumatyczny ruchu obrotowego</li>
                                        <li>Sterowanie fotelem</li>
                                        <li>Sterowanie funkcjami bloku spluwaczki</li>
                                        <li>Regulacja wody do każdej końcówki</li>
                                        <li>Strzykawko-dmuchawka 3-funkcyjna</li>
                                        <li>Tacka na narzędzia pod panelem</li>
                                        <span class="li-category">Blok spluwaczki</span>
                                        <li>Odchylany blok spluwaczki</li>
                                        <li>Obrotowa miska spluwaczki</li>
                                        <li>Ślinociąg przepływowy</li>
                                        <span class="li-category">Panel asysty</span>
                                        <li>Panel asysty – 4 końcówki</li>
                                        <li>Sterowanie funkcjami spluwaczki i lampy</li>
                                        <li>Sterowanie funkcjami fotela</li>
                                        <span class="li-category">Lampa oświetleniowa</span>
                                        <li>Bezcieniowa, diodowa POLARIS</li>

                                    </ul>
                                </div>
                                <div class="model-button-place">
                                    <button data-price="28500" data-brand="exima-neo"
                                            class="model-button model-type"><span
                                                class="label-button">WYBIERAM</span><span
                                                class="exima-neo icon-icon_check"></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="model-card-cover exima">
                            <div class="model-card">
                                <div class="model-over-hidden">
                                    <p class="model-name">EXIMA MAX</p><img
                                            src="/konfigurator/img/img_panel_komplet_exima_max@2x.png"
                                            alt="">
                                    <p class="model-description">W standardzie otrzymujesz:</p>
                                    <ul class="model-ul">
                                        <li>W kolorze białym RAL 9016</li>
                                        <li>Fotel Amicus</li>
                                        <li>Blokada ruchu fotela podczas pracy końcówki</li>
                                        <li>Pamięci fotela</li>
                                        <li>Sterownik nożny</li>
                                        <span class="li-category">Panel lekarza</span>
                                        <li>Rękawy od góry</li>
                                        <li>5 rękawów</li>
                                        <li>Rękawy silikonowe bez światła</li>
                                        <li>Silikonowa podkładka pod końcówki</li>
                                        <li>Hamulec pneumatyczny ramienia</li>
                                        <li>Hamulec pneumatyczny ruchu obrotowego</li>
                                        <li>Sterowanie fotelem</li>
                                        <li>Sterowanie funkcjami bloku spluwaczki</li>
                                        <li>Regulacja wody do każdej końcówki</li>
                                        <li>Strzykawko-dmuchawka 3-funkcyjna</li>
                                        <li>Tacka na narzędzia pod panelem</li>
                                        <span class="li-category">Blok spluwaczki</span>
                                        <li>Odchylany blok spluwaczki</li>
                                        <li>Obrotowa miska spluwaczki</li>
                                        <li>Ślinociąg przepływowy</li>
                                        <span class="li-category">Panel asysty</span>
                                        <li>Panel asysty – 4 końcówki</li>
                                        <li>Sterowanie funkcjami spluwaczki i lampy</li>
                                        <li>Sterowanie funkcjami fotela</li>
                                        <span class="li-category">Lampa oświetleniowa</span>
                                        <li>Bezcieniowa, diodowa POLARIS</li>
                                    </ul>
                                </div>
                                <div class="model-button-place">
                                    <button data-price="26000" data-brand="exima-max"
                                            class="model-button model-type"><span
                                                class="label-button">WYBIERAM</span><span
                                                class="exima-max icon-icon_check"></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="model-card-cover exima">
                            <div class="model-card">
                                <div class="model-over-hidden">
                                    <p class="model-name">EXIMA X1G</p><img
                                            src="/konfigurator/img/img_panel_komplet_exima_standard_x1g@2x.png" alt="">
                                    <p class="model-description">W standardzie otrzymujesz:</p>
                                    <ul class="model-ul">
                                        <li>W kolorze białym RAL 9016</li>
                                        <li>Fotel Amicus</li>
                                        <li>Blokada ruchu fotela podczas pracy końcówki</li>
                                        <li>Pamięci fotela</li>
                                        <li>Sterownik nożny</li>
                                        <span class="li-category">Panel lekarza</span>
                                        <li>Rękawy od góry</li>
                                        <li>5 rękawów</li>
                                        <li>Rękawy silikonowe bez światła</li>
                                        <li>Silikonowa podkładka pod końcówki</li>
                                        <li>Hamulec pneumatyczny ramienia</li>
                                        <li>Sterowanie fotelem</li>
                                        <li>Sterowanie funkcjami bloku spluwaczki</li>
                                        <li>Regulacja wody do każdej końcówki</li>
                                        <li>Strzykawko-dmuchawka 3-funkcyjna</li>
                                        <li>Tacka na narzędzia pod panelem</li>
                                        <span class="li-category">Blok spluwaczki</span>
                                        <li>Odchylany blok spluwaczki</li>
                                        <li>Ślinociąg przepływowy</li>
                                        <span class="li-category">Panel asysty</span>
                                        <li>Sterowanie funkcjami spluwaczki i lampy</li>
                                        <span class="li-category">Lampa oświetleniowa</span>
                                        <li>Bezcieniowa, halogenowa ISA</li>ul>
                                </div>
                                <div class="model-button-place">
                                    <button data-price="23500" data-brand="exima-x1g"
                                            class="model-button model-type"><span
                                                class="label-button">WYBIERAM</span><span
                                                class="exima-x1g icon-icon_check"></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="model-card-cover exima">
                            <div class="model-card">
                                <div class="model-over-hidden">
                                    <p class="model-name">EXIMA X1D</p><img
                                            src="/konfigurator/img/img_panel_komplet_exima_standard_x1d@2x.png" alt="">
                                    <p class="model-description">W standardzie otrzymujesz:</p>
                                    <ul class="model-ul">
                                        <li>W kolorze białym RAL 9016</li>
                                        <li>Fotel Amicus</li>
                                        <li>Blokada ruchu fotela podczas pracy końcówki</li>
                                        <li>Pneumatyczna blokada zagłówka fotela</li>
                                        <li>Pamięci fotela</li>
                                        <li>Pamięć fotela w pozycji "do spluwaczki"</li>
                                        <li>Predefiniowane i edytowalne pamięci fotela</li>
                                        <li>Sterownik nożny</li>
                                        <span class="li-category">Panel lekarza</span>
                                        <li>Rękawy od góry</li>
                                        <li>5 rękawów</li>
                                        <li>Rękawy silikonowe bez światła</li>
                                        <li>Silikonowa podkładka pod końcówki</li>
                                        <li>Hamulec pneumatyczny ramienia</li>
                                        <li>Hamulec pneumatyczny ruchu obrotowego</li>
                                        <li>Sterowanie fotelem</li>
                                        <li>Sterowanie funkcjami bloku spluwaczki</li>
                                        <li>Regulacja wody do każdej końcówki</li>
                                        <li>Strzykawko-dmuchawka 3-funkcyjna</li>
                                        <li>Tacka na narzędzia pod panelem</li>
                                        <span class="li-category">BLOK SPLUWACZKI</span>
                                        <li>Fotel odchylany od bloku spluwaczki</li>
                                        <li>Obrotowa miska spluwaczki</li>
                                        <li>Sygnalizacja niedomknięcia miski podczas ruchu fotela</li>
                                        <li>Ślinociąg przepływowy</li>
                                        <span class="li-category">PANEL ASYSTY</span>
                                        <li>Panel asysty – 4 końcówki</li>
                                        <li>Sterowanie funkcjami spluwaczki i lampy</li>
                                        <li>Sterowanie funkcjami fotela</li>
                                    </ul>
                                </div>
                                <div class="model-button-place">
                                    <button data-price="22500" data-brand="exima-x1d"
                                            class="model-button model-type"><span
                                                class="label-button">WYBIERAM</span><span
                                                class="exima-x1d icon-icon_check"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="tab3" class="tab-content hide">
            <div class="brand-choose-sidebar color-seat-choose">
                <div class="brand-sidebar-wrapper">
                    <div class="seat-color-wrapper">
                        <p class="sidebar-color-title"><span style="margin-right: 15px" class="bold-text">01</span>Kolor
                            tapicerki fotela</p>
                        <div class="seat-colors">
                            <div class="color-kind">
                                <p class="color-id">F1</p>
                                <p id="color1" data-direct-exima="Exima_bordo" data-color="1"
                                   data-direct-certus="CERTUS_bordo-bialy" class="color-class choose-the-color">
                                    BORDOWY<span class="icon-icon_check"></span></p>
                            </div>
                            <div class="color-kind">
                                <p class="color-id">F4</p>
                                <p id="color2" data-direct-exima="Exima_braz" data-direct-certus="Certus_braz-bialy"
                                   data-color="2"
                                   class="color-class choose-the-color no-such-color">BRĄZOWY <span
                                            class="icon-icon_check"></span></p>
                            </div>
                            <div class="color-kind">
                                <p class="color-id">F7</p>
                                <p id="color3" data-direct-exima="Exima_ciemnoszary"
                                   data-direct-certus="CERTUS_ciemnoszary-bialy" data-color="3"
                                   class="color-class choose-the-color selected">CIEMNO-SZARY <span
                                            class="icon-icon_check"></span></p>
                            </div>
                            <div class="color-kind">
                                <p class="color-id">F9</p>
                                <p id="color4" data-direct-exima="Exima_jasnoszary"
                                   data-direct-certus="CERTUS_jasnoszary-bialy" data-color="4"
                                   class="color-class choose-the-color">JASNO-SZARY<span class="icon-icon_check"></span>
                                </p>
                            </div>
                            <div class="color-kind">
                                <p class="color-id">F10</p>
                                <p id="color5" data-direct-exima="Exima_fiolet" data-color="5"
                                   data-direct-certus="Certus_fiolet-bialy" class="color-class choose-the-color">
                                    FIOLETOWY<span class="icon-icon_check"></span></p>
                            </div>
                            <div class="color-kind">
                                <p class="color-id">F11</p>
                                <p id="color6" data-direct-exima="Exima_granat" data-color="6"
                                   data-direct-certus="Certus_granat-bialy" class="color-class choose-the-color">
                                    GRANATOWY<span class="icon-icon_check"></span></p>
                            </div>
                            <div class="color-kind">
                                <p class="color-id">F13</p>
                                <p id="color7" data-direct-exima="Exima_niebieski"
                                   data-direct-certus="CERTUS_niebieski-bialy" data-color="7"
                                   class="color-class choose-the-color">NIEBIESKI<span class="icon-icon_check"></span>
                                </p>
                            </div>
                            <div class="color-kind">
                                <p class="color-id">F14</p>
                                <p id="color8" data-direct-exima="Exima_morski"
                                   data-direct-certus="Certus_morski-bialy" data-color="8"
                                   class="color-class choose-the-color no-such-color">MORSKI<span
                                            class="icon-icon_check"></span></p>
                            </div>
                            <div class="color-kind">
                                <p class="color-id">F14</p>
                                <p id="color9" data-direct-exima="Exima_pomarancz"
                                   data-direct-certus="Certus_pomarancz-bialy" data-color="9"
                                   class="color-class choose-the-color">POMARAŃCZOWY<span
                                            class="icon-icon_check"></span></p>
                            </div>
                            <div class="color-kind">
                                <p class="color-id">F14</p>
                                <p id="color10" data-direct-exima="Exima_zolty" data-color="10"
                                   data-direct-certus="CERTUS_zolty-bialy" class="color-class choose-the-color">
                                    ŻÓŁTY<span class="icon-icon_check"></span></p>
                            </div>
                            <div class="color-kind">
                                <p class="color-id">F14</p>
                                <p id="color11" data-direct-exima="Exima_zielony"
                                   data-direct-certus="Certus_zielony-bialy" data-color="11"
                                   class="color-class choose-the-color no-such-color">ZIELONY<span
                                            class="icon-icon_check"></span></p>
                            </div>
                        </div>
                        <div class="lacquer-type-wrapper">
                            <p class="sidebar-color-title lacquer-part"><span style="margin-right: 15px"
                                                                              class="bold-text">02</span> Kolor bloku
                                spluwaczki</p><input data-type="" type="radio" data-price="0" name="radio" id="1"
                                                     value="value" checked> <label for="1"
                                                                                   class="lacquer-type-checkbox tapicerka-color color-white">
                                lakier bloku spluwaczki w kolorze białym</label> <input data-type="" data-price="1000"
                                                                                        type="radio" name="radio" id="2"
                                                                                        value="value"> <label
                                    data-price="" for="2" class="lacquer-type-checkbox tapicerka-color color-color">
                                lakier bloku spluwaczki w
                                kolorze tapicerki</label>
                            <div class="color-attantion"> <span
                                        class="color-attantion icon-icon_exclamation"></span>
                                <p class="color-attantion">Dla tego koloru nie ma możliwości doboru lakieru bloku
                                    spluwaczki w kolorze tapicerki</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab1-summary">
                        <div class="prev-step-button">
                            <button class="step-back-button">WRÓĆ</button>
                            <span
                                    class="icon-icon_arrow_left"></span></div>
                        <div class="next-step-button">
                            <button
                                    class="step-3-button button-to-go nextStepActive">DALEJ
                            </button>
                            <span
                                    class="icon-icon_arrow_right"></span></div>
                    </div>
                </div>
            </div>
            <div class="main-content color-content">
                <div class="color-content-wrapper certus-colors">
                    <button id="seat-certus"
                            class="see-360-color">ZOBACZ W 360°
                    </button>
                    <div class="certus-brand-color block-colorified-seats"><img id="color1" data-direct-exima=""
                                                                                data-direct-certus="CERTUS_bordo-bialy"
                                                                                class="color-img img-hidden"
                                                                                src="/konfigurator/seat-color/c-red-w.jpg"
                                                                                alt=""> <img id="color2"
                                                                                             data-direct-exima=""
                                                                                             data-direct-certus="Certus_braz-bialy"
                                                                                             class="color-img img-hidden"
                                                                                             src="/konfigurator/seat-color/c-brown-w.jpg"
                                                                                             alt=""> <img id="color3"
                                                                                                          data-direct-exima=""
                                                                                                          data-direct-certus="CERTUS_ciemnoszary-bialy"
                                                                                                          style="display:block"
                                                                                                          class="color-img img-hidden"
                                                                                                          src="/konfigurator/seat-color/c-grey_w.jpg"
                                                                                                          alt=""> <img
                                id="color4"
                                data-direct-exima="" data-direct-certus="CERTUS_jasnoszary-bialy"
                                class="color-img img-hidden" src="/konfigurator/seat-color/c-light-grey-w.jpg" alt="">
                        <img
                                id="color5" class="color-img img-hidden" src="/konfigurator/seat-color/c-fiolet-w.jpg"
                                alt=""> <img
                                id="color6" class="color-img img-hidden" src="/konfigurator/seat-color/c-blue-w.jpg"
                                alt=""> <img
                                id="color7" class="color-img img-hidden"
                                src="/konfigurator/seat-color/c-light-blue-w.jpg" alt="">
                        <img id="color8" class="color-img img-hidden" src="/konfigurator/seat-color/c-sea-blue-w.jpg"
                             alt="">
                        <img id="color9" class="color-img img-hidden" src="/konfigurator/seat-color/c-orange-w.jpg"
                             alt=""> <img
                                id="color10" class="color-img img-hidden" src="/konfigurator/seat-color/c-yellow-w.jpg"
                                alt=""> <img
                                id="color11" class="color-img img-hidden"
                                src="/konfigurator/seat-color/c-light-green-w.jpg" alt="">
                        <img id="color1_w" data-direct-exima="" data-direct-certus="CERTUS_bordo-bialy"
                             class="color-img img-hidden" src="/konfigurator/seat-color/Cer_color_red.jpg" alt=""> <img
                                id="color3_w" data-direct-exima="" data-direct-certus="CERTUS_ciemnoszary-bialy"
                                class="color-img img-hidden" src="/konfigurator/seat-color/Cer_color_grey.jpg" alt="">
                        <img
                                id="color4_w" data-direct-exima="" data-direct-certus="CERTUS_jasnoszary-bialy"
                                class="color-img img-hidden" src="/konfigurator/seat-color/Cer_color_light-grey.jpg"
                                alt=""> <img
                                id="color5_w" class="color-img img-hidden"
                                src="/konfigurator/seat-color/Cer_color_fiolet.jpg"
                                alt=""> <img id="color6_w" class="color-img img-hidden"
                                             src="/konfigurator/seat-color/Cer_color_granat.jpg" alt=""> <img
                                id="color7_w"
                                class="color-img img-hidden" src="/konfigurator/seat-color/Cer_color_light_blue.jpg"
                                alt=""> <img
                                id="color9_w" class="color-img img-hidden"
                                src="/konfigurator/seat-color/Cer_color_orange.jpg"
                                alt=""> <img id="color10_w" class="color-img img-hidden"
                                             src="/konfigurator/seat-color/Cer_color_yellow.jpg" alt=""></div>
                    <div class="exima-brand-color block-colorified-seats"><img id="color1" data-direct-exima=""
                                                                               data-direct-certus="CERTUS_bordo-bialy"
                                                                               class="color-img img-hidden"
                                                                               src="/konfigurator/seat-color/red.jpg"
                                                                               alt=""> <img id="color2"
                                                                                            data-direct-exima=""
                                                                                            data-direct-certus="Certus_braz-bialy"
                                                                                            class="color-img img-hidden"
                                                                                            src="/konfigurator/seat-color/braz.jpg"
                                                                                            alt=""> <img id="color3"
                                                                                                         data-direct-exima=""
                                                                                                         data-direct-certus="CERTUS_ciemnoszary-bialy"
                                                                                                         style="display:block"
                                                                                                         class="color-img img-hidden"
                                                                                                         src="/konfigurator/seat-color/grey.jpg"
                                                                                                         alt=""> <img
                                id="color4"
                                data-direct-exima="" data-direct-certus="CERTUS_jasnoszary-bialy"
                                class="color-img img-hidden" src="/konfigurator/seat-color/light-grey.jpg" alt=""> <img
                                id="color5"
                                class="color-img img-hidden" src="/konfigurator/seat-color/fiolet.jpg" alt=""> <img
                                id="color6"
                                class="color-img img-hidden" src="/konfigurator/seat-color/blue.jpg" alt=""> <img
                                id="color7"
                                class="color-img img-hidden" src="/konfigurator/seat-color/light-blue.jpg" alt=""> <img
                                id="color8"
                                class="color-img img-hidden" src="/konfigurator/seat-color/sea-blue.jpg" alt=""> <img
                                id="color9"
                                class="color-img img-hidden" src="/konfigurator/seat-color/orange.jpg" alt=""> <img
                                id="color10"
                                class="color-img img-hidden" src="/konfigurator/seat-color/yellow.jpg" alt=""> <img
                                id="color11"
                                class="color-img img-hidden" src="/konfigurator/seat-color/light-green.jpg" alt="">
                    </div>
                    <div class="model-color-place"></div>
                    <div class="choose-color">
                        <div id="color1" data-direct-exima="Exima_bordo" data-direct-certus="CERTUS_bordo-bialy"
                             data-color="1"
                             class="color-seat choose-the-color" style="background-color:#A72606"><span
                                    class="checkbox-color icon-icon_check"></span>
                        </div>
                        <div id="color2" data-direct-exima="Exima_braz" data-direct-certus="Certus_braz-bialy"
                             data-color="2"
                             class="color-seat choose-the-color no-such-color" style="background-color:#AA674A">
                            <span class="checkbox-color icon-icon_check"></span></div>
                        <div id="color3" data-direct-exima="Exima_ciemnoszary"
                             data-direct-certus="CERTUS_ciemnoszary-bialy" data-color="3"
                             class="color-seat color3 choose-the-color color-active selected"
                             style="background-color:#939393"><span class="checkbox-color icon-icon_check"></span>
                        </div>
                        <div id="color4" data-direct-exima="Exima_jasnoszary"
                             data-direct-certus="CERTUS_jasnoszary-bialy" class="color-seat color4 choose-the-color"
                             data-color="4"
                             style="background-color:#CECECE"><span class="checkbox-color icon-icon_check"></span></div>
                        <div id="color5" data-direct-exima="Exima_fiolet" data-direct-certus="Certus_fiolet-bialy"
                             data-color="5"
                             class="color-seat color5 choose-the-color" style="background-color:#874F8B"> <span
                                    class="checkbox-color icon-icon_check"></span></div>
                        <div id="color6" data-direct-exima="Exima_granat" data-direct-certus="Certus_granat-bialy"
                             data-color="6"
                             class="color-seat color6 choose-the-color" style="background-color:#053B84"> <span
                                    class="checkbox-color icon-icon_check"></span></div>
                        <div id="color7" data-direct-exima="Exima_niebieski"
                             data-direct-certus="CERTUS_niebieski-bialy" class="color-seat color7 choose-the-color"
                             data-color="7"
                             style="background-color:#2F66B2"><span class="checkbox-color icon-icon_check"></span></div>
                        <div id="color8" data-direct-exima="Exima_morski" data-direct-certus="Certus_morski-bialy"
                             data-color="8"
                             class="color-seat color8 choose-the-color no-such-color"
                             style="background-color:#00CBEA"><span class="checkbox-color icon-icon_check"></span></div>
                        <div id="color9" data-direct-exima="Exima_pomarancz"
                             data-direct-certus="Certus_pomarancz-bialy" class="color-seat color8 choose-the-color"
                             data-color="9"
                             style="background-color:#FFA30F"><span class="checkbox-color icon-icon_check"></span></div>
                        <div id="color10" data-direct-exima="Exima_zolty" data-direct-certus="CERTUS_zolty-bialy"
                             data-color="10"
                             class="color-seat color8 choose-the-color" style="background-color:#FFCE2C"> <span
                                    class="checkbox-color icon-icon_check"></span></div>
                        <div id="color11" data-direct-exima="Exima_zielony"
                             data-direct-certus="Certus_zielony-bialy"
                             class="color-seat color8 choose-the-color no-such-color" data-color="11"
                             style="background-color:#ADCE2A"><span class="checkbox-color icon-icon_check"></span></div>
                    </div>
                </div>
            </div>
            <div id="color-pop-up" class="pop-up">
                <div class="close-pop-up"><img src="/konfigurator/img/close-buttom.png" alt=""></div>
                <div style="width: 650px; height: 650px;" class="color-div-popup" id="pop-up-color"><a
                            href="http://www.adobe.com/go/getflashplayer"> <img
                                src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif"
                                alt="Get Adobe Flash player"/></a></div>
            </div>
        </section>
        <section id="tab4" class="tab-content hide">
            <div class="brand-choose-sidebar">
                <div class="brand-sidebar-wrapper">
                    <ul class="product-list certus-neo certus-max certus-standard">
                        <li class="choosen-brand lamp-type selected" data-type="lamp1" data-standard="standard">
                            <p class="brand-name">BEZCIENIOWA DIODOWA POLARIS</p>
                            <p class="brand-price">Standardowo w zestawie</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                        </li>
                        <li class="choosen-brand lamp-type" data-type="lamp2">
                            <p class="brand-name">BEZCIENIOWA HALOGENOWA ISA</p>
                            <p class="brand-price">Opcja do wyboru, bez dopłaty</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                        </li>
                        <li class="choosen-brand lamp-type" data-type="lamp3">
                            <p class="brand-name">BEZCIENIOWA DIODOWA POLARIS SENSOMATIC</p>
                            <p class="brand-price">Dopłata 400 zl</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                        </li>
                        <li class="choosen-brand lamp-type" data-type="lamp4">
                            <p class="brand-name">BEZCIENIOWA DIODOWA IRIS Z WBUDOWANĄ KAMERĄ</p>
                            <p class="brand-price">Dopłata</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                        </li>
                    </ul>
                    <ul class="product-list exima-neo exima-max">
                        <li class="choosen-brand lamp-type selected" data-type="lamp1" data-standard="standard">
                            <p class="brand-name">BEZCIENIOWA DIODOWA POLARIS</p>
                            <p class="brand-price">Standardowo w zestawie</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                        </li>
                        <li class="choosen-brand lamp-type" data-type="lamp2">
                            <p class="brand-name">BEZCIENIOWA HALOGENOWA ISA</p>
                            <p class="brand-price">Opcja do wyboru, bez dopłaty</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                        </li>
                        <li class="choosen-brand lamp-type" data-type="lamp3">
                            <p class="brand-name">BEZCIENIOWA DIODOWA POLARIS SENSOMATIC</p>
                            <p class="brand-price">Czujnik do włączania ruchem ręki</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                        </li>
                        <li class="choosen-brand lamp-type" data-type="lamp4">
                            <p class="brand-name">BEZCIENIOWA DIODOWA IRIS Z WBUDOWANĄ KAMERĄ</p>
                            <p class="brand-price">Dopłata</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                        </li>
                    </ul>
                    <ul class="product-list exima-x1g exima-x1d">
                        <li class="choosen-brand lamp-type" data-type="lamp1">
                            <p class="brand-name">BEZCIENIOWA DIODA POLARIS</p>
                            <p class="brand-price">Dopłata</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                        </li>
                        <li class="choosen-brand lamp-type selected" data-type="lamp2" data-standard="standard">
                            <p class="brand-name">BEZCIENIOWA HALOGENOWA ISA</p>
                            <p class="brand-price">Standardowo w zestawie</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                        </li>
                        <li class="choosen-brand lamp-type" data-type="lamp3">
                            <p class="brand-name">BEZCIENIOWA DIODOWA POLARIS SENSOMATIC</p>
                            <p class="brand-price">Dopłata</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                        </li>
                        <li class="choosen-brand lamp-type" data-type="lamp4">
                            <p class="brand-name">BEZCIENIOWA DIODOWA IRIS Z WBUDOWANĄ KAMERĄ</p>
                            <p class="brand-price">Dopłata</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                        </li>
                    </ul>
                    <div class="tab1-summary">
                        <div class="brand-price-summary">
                            <p class="brand-summary">Lampa: <span class="brand-summary-label"></span></p>
                            <p class="price-summary"><span class="pr">0</span> zł</p>
                        </div>
                        <div class="prev-step-button">
                            <button class="step-back-button">WRÓĆ</button>
                            <span class="icon-icon_arrow_left"></span></div>
                        <div class="next-step-button">
                            <button class="step-4-button button-to-go nextStepActive">DALEJ
                            </button>
                            <span class="icon-icon_arrow_right"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-content lamp-content">
                <div class="lamp-card-wrapper">
                    <div class="lamp-card-cover">
                        <div class="lamp-card">
                            <div class="model-over-hidden">
                                <p class="lamp-name">BEZCIENIOWA DIODOWA POLARIS</p><img
                                        src="/konfigurator/img/img_lampa_polaris.png" alt="">
                                <p class="lamp-description">Opis modelu</p>
                                <p class="lamp-scroll-text"> • Źródło światła - 10 diod LED <br>• Żywotność diod LED
                                    ok
                                    50.000 godzin pracy<br>• Bardzo niski pobór energii elektrycznej<br>• Nieznaczna
                                    emisja ciepła<br>• Brak układu chłodzenia eliminuje powstawanie hałasu<br>•
                                    Regulacja intensywności strumienia światław zakresie: od 8.000 do 35.000
                                    lux<br>•
                                    Płynna regulacja temperatury koloru światław zakresie: od 4.200 do 6.000 K<br>•
                                    Index odwzorowania kolorów (CRI): >85<br>• Nie generuje promieni UV - brak
                                    fotopolimeryzacji<br>•
                                    Szybkorozłączne uchwyty (możliwość sterylizacji)<br></p>
                            </div>
                            <div class="lamp-button-div certus-neo certus-max certus-standard">
                                <div class="lamp-button-row">
                                    <span class="lamp-price lamp-type">Standard</span><span
                                            class="icon-icon_check"><span class="lamp-additional-price"></span>
                                </div>
                                <button data-price="0" class="lamp-button lamp-type selected" data-type="lamp1"
                                        data-standard="standard"><span class="label-button">WYBRANO</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                            </div>
                            <div class="lamp-button-div exima-neo exima-max">
                                <div class="lamp-button-row">
                                    <span class="lamp-price lamp-type">Standard</span><span
                                            class="icon-icon_check"><span class="lamp-additional-price"></span>
                                </div>
                                <button data-price="0" class="lamp-button lamp-type selected" data-type="lamp1"
                                        data-standard="standard"><span class="label-button">WYBRANO</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                            </div>
                            <div class="lamp-button-div exima-x1g exima-x1d">
                                <div class="lamp-button-row">
                                    <span class="lamp-price lamp-type">Dopłata</span><span
                                            class="lamp-additional-price">1 700 zł</span>
                                </div>
                                <button data-price="1700" class="lamp-button lamp-type" data-type="lamp1"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                            </div>
                        </div>
                    </div>
                    <div class="lamp-card-cover">
                        <div class="lamp-card">
                            <div class="model-over-hidden">
                                <p class="lamp-name">BEZCIENIOWA HALOGENOWA ISA</p><img
                                        src="/konfigurator/img/img_lampa_halogenowa_isa.png" alt="">
                                <p class="lamp-description">Opis modelu</p>
                                <p class="lamp-scroll-text short-scroll"> • Dwustopniowa regulacja natężenia
                                    światła:17.000 i 22.000 lux <br>• Temperatura koloru światła: 5.000 K<br>• Index
                                    odwzorowania kolorów (CRI): >90<br>• Szybkorozłączne uchwyty (możliwość sterylizacji)<br></p>
                            </div>
                            <div class="lamp-button-div certus-neo certus-max certus-standard">
                                <div class="lamp-button-row">
                                    <span class="lamp-price lamp-type">Zmiana bez dopłaty</span><span
                                            class="lamp-additional-price"></span>
                                </div>
                                <button data-price="0" class="lamp-button lamp-type" data-type="lamp2"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                            </div>
                            <div class="lamp-button-div exima-neo exima-max">
                                <div class="lamp-button-row">
                                    <span class="lamp-price lamp-type">Zmiana bez dopłaty</span><span
                                            class="lamp-additional-price"></span>
                                </div>
                                <button data-price="0" class="lamp-button lamp-type" data-type="lamp2"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                            </div>
                            <div class="lamp-button-div exima-x1g exima-x1d">
                                <div class="lamp-button-row">
                                    <span class="lamp-price lamp-type">Standard</span><span
                                            class="icon-icon_check"><span class="lamp-additional-price"></span>
                                </div>
                                <button data-price="0" class="lamp-button lamp-type standard" data-type="lamp2"
                                        data-standard="standard"><span class="label-button">WYBRANO</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                            </div>
                        </div>
                    </div>
                    <div class="lamp-card-cover">
                        <div class="lamp-card">
                            <div class="model-over-hidden">
                                <p class="lamp-name">BEZCIENIOWA DIODOWA POLARIS SENSOMATIC</p><img
                                        src="/konfigurator/img/img_lampa_polaris_sensomatic.png" alt="">
                                <p class="lamp-description">Opis modelu</p>
                                <p class="lamp-scroll-text">
                                    • Wersja z włącznikiem bezdotykowym (sensomatic)     <br>
                                    • Źródło światła - 10 diod LED <br>• Żywotność diod LED
                                    ok
                                    50.000 godzin pracy<br>• Bardzo niski pobór energii elektrycznej<br>• Nieznaczna
                                    emisja ciepła<br>• Brak układu chłodzenia eliminuje powstawanie hałasu<br>•
                                    Regulacja intensywności strumienia światław zakresie: od 8.000 do 35.000
                                    lux<br>•
                                    Płynna regulacja temperatury koloru światław zakresie: od 4.200 do 6.000 K<br>•
                                    Index odwzorowania kolorów (CRI): >85<br>• Nie generuje promieni UV - brak
                                    fotopolimeryzacji<br>•
                                    Szybkorozłączne uchwyty (możliwość sterylizacji)<br></p>
                            </div>
                            <div class="lamp-button-div certus-neo certus-max certus-standard">
                                <div class="lamp-button-row">
                                    <span class="lamp-price lamp-type">Dopłata</span><span
                                            class="lamp-additional-price">400 zl</span>
                                </div>
                                <button data-price="400" class="lamp-button lamp-type" data-type="lamp3"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                            </div>
                            <div class="lamp-button-div exima-neo exima-max">
                                <div class="lamp-button-row">
                                    <span class="lamp-price lamp-type">Dopłata</span><span
                                            class="lamp-additional-price">400 zl</span>
                                </div>
                                <button data-price="400" class="lamp-button lamp-type" data-type="lamp3"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                            </div>
                            <div class="lamp-button-div exima-x1g exima-x1d">
                                <div class="lamp-button-row">
                                    <span class="lamp-price lamp-type">Dopłata</span><span
                                            class="lamp-additional-price">2 100 zl</span>
                                </div>
                                <button data-price="2100" class="lamp-button lamp-type" data-type="lamp3"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                            </div>
                        </div>
                    </div>
                    <div class="lamp-card-cover">
                        <div class="lamp-card">
                            <div class="model-over-hidden">
                                <p class="lamp-name">BEZCIENIOWA DIODOWA IRIS Z WBUDOWANĄ KAMERĄ</p><img
                                        src="/konfigurator/img/img_lampa_z_kamera.png" alt="">
                                <p class="lamp-description">Opis modelu</p>
                                <p class="lamp-scroll-text"> • Źródło światła - 8 diod LED o bardzo niskim
                                    poborem energii elektrycznej i nieznacznej emisji ciepła <br>• Żywotność diod LED
                                    ok
                                    50.000 godzin pracy<br>• Brak układu chłodzenia eliminuje powstawanie
                                    hałasu<br>•
                                    Regulacja intensywności strumienia światław zakresie: od 8.000 do 35.000
                                    lux<br>•
                                    Płynna regulacja temperatury koloru światław zakresie: od 4.200 do 6.000 K<br>•
                                    Index odwzorowania kolorów (CRI): >93<br>• Nie generuje promieni UV - brak
                                    fotopolimeryzacji<br>• Wbudowana kamera Full HD z funkcją autofokus,automatyczną
                                    regulacją balansu bieli, 20 krotnympowiększeniem obrazu i 12 krotnym
                                    powiększeniemcyfrowym<br>• Możliwość wyboru 3 programów oświetlenia<br>•
                                    Interfejs
                                    iOS dostępny na tablet iPad - do obsługi kamery i lampy<br>• Szybkorozłączne uchwyty (możliwość
                                    sterylizacji)<br>
                                </p>
                            </div>
                            <div class="lamp-button-div certus-neo certus-max certus-standard">
                                <div class="lamp-button-row">
                                    <span class="lamp-price lamp-type">Dopłata</span><span
                                            class="lamp-additional-price">21 100 zl</span>
                                </div>
                                <button data-price="21000" data-type="lamp4" class="lamp-button lamp-type"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                            </div>
                            <div class="lamp-button-div exima-neo exima-max">
                                <div class="lamp-button-row">
                                    <span class="lamp-price lamp-type">Dopłata</span><span
                                            class="lamp-additional-price">21 100 zl</span>
                                </div>
                                <button data-price="21000" data-type="lamp4" class="lamp-button lamp-type"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                            </div>
                            <div class="lamp-button-div exima-x1g exima-x1d">
                                <div class="lamp-button-row">
                                    <span class="lamp-price lamp-type">Dopłata</span><span
                                            class="lamp-additional-price">22 800 zl</span>
                                </div>
                                <button data-price="22800" data-type="lamp4" class="lamp-button lamp-type"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="tab5" class="tab-content hide">
            <div class="brand-choose-sidebar">
                <div class="brand-sidebar-wrapper">
                    <div class="product-list clickless-zone">
                        <div class="choosen-brand model-type" data-label="doctor-tab-1">
                            <p class="brand-name">1. MIEJSCE W PANELU</p>
                            <p class="brand-price panel-result-1 selected-equipment">Konfiguracja domyślna</p>
                            <span class="choosen-brand-sign icon-icon_loading"></span>
                            <span class="choosen-brand-sign icon-icon_check"></span>
                        </div>
                        <div class="choosen-brand model-type" data-label="doctor-tab-2">
                            <p class="brand-name">2. MIEJSCE W PANELU</p>
                            <p class="brand-price panel-result-2 selected-equipment"">Konfiguracja domyślna</p>
                            <span class="choosen-brand-sign icon-icon_loading"></span>
                            <span class="choosen-brand-sign icon-icon_check"></span>
                        </div>
                        <div class="choosen-brand model-type" data-label="doctor-tab-3">
                            <p class="brand-name">3. MIEJSCE W PANELU</p>
                            <p class="brand-price panel-result-3 selected-equipment"">Konfiguracja domyślna</p>
                            <span class="choosen-brand-sign icon-icon_loading"></span>
                            <span class="choosen-brand-sign icon-icon_check"></span>
                        </div>
                        <div class="choosen-brand model-type" data-label="doctor-tab-4">
                            <p class="brand-name">4. MIEJSCE W PANELU</p>
                            <p class="brand-price panel-result-4 selected-equipment"">Konfiguracja domyślna</p>
                            <span class="choosen-brand-sign icon-icon_loading"></span>
                            <span class="choosen-brand-sign icon-icon_check"></span>
                        </div>
                        <div class="choosen-brand model-type" data-label="doctor-tab-5">
                            <p class="brand-name">5. MIEJSCE W PANELU</p>
                            <p class="brand-price panel-result-5 selected-equipment"">Konfiguracja domyślna</p>
                            <span class="choosen-brand-sign icon-icon_loading"></span>
                            <span class="choosen-brand-sign icon-icon_check"></span>
                        </div>
                    </div>
                    <div class="tab1-summary">
                        <div class="brand-price-summary">
                            <p class="brand-summary">Wyposażenie panelu lekarza:</p>
                            <p class="price-summary"><span class="pr" data-doctor-panel-cost="0"></span> zł</p>
                        </div>
                        <div class="prev-step-button">
                            <button class="step-back-button">WRÓĆ</button>
                            <span class="icon-icon_arrow_left"></span></div>
                        <div class="next-step-button">
                            <button class="step-5-button nextStepActive button-to-go">DALEJ</button>
                            <span class="icon-icon_arrow_right"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-content doctor-panel-content">
                <div class="doctor-panel-wrapper">
                    <p class="doctor-panel-title">Wybierz kolejno sprzęt, który chcesz mieć na każdym z rękawów:</p>
                    <div class="doctor-panel-top">
                        <img class="doctor-panel-img small-panel common certus-neo" alt="img" src="/konfigurator/img/img_panel_lekarza_certus_neo.png" srcset="/konfigurator/img/img_panel_lekarza_certus_neo@2x.png">
                        <img class="doctor-panel-img small-panel common certus-max" alt="img" src="/konfigurator/img/img_panel_lekarza_certus_max.png" srcset="/konfigurator/img/img_panel_lekarza_certus_max@2x.png">
                        <img class="doctor-panel-img small-panel common certus-standard" alt="img" src="/konfigurator/img/img_panel_lekarza_certus_standard.png" srcset="/konfigurator/img/img_panel_lekarza_certus_standard@2x.png">
                        <img class="doctor-panel-img small-panel common exima-neo" alt="img" src="/konfigurator/img/img_panel_lekarza_exima_neo.png" srcset="/konfigurator/img/img_panel_lekarza_exima_neo@2x.png">
                        <img class="doctor-panel-img small-panel common exima-max" alt="img" src="/konfigurator/img/img_panel_lekarza_exima_max.png" srcset="/konfigurator/img/img_panel_lekarza_exima_max@2x.png">
                        <img class="doctor-panel-img small-panel common exima-x1g" alt="img" src="/konfigurator/img/img_panel_lekarza_exima_standard_x1g@2x.png" srcset="/konfigurator/img/img_panel_komplet_exima_standard_x1g@2x.png">
                        <img class="doctor-panel-img small-panel common exima-x1d" alt="img" src="/konfigurator/img/img_panel_lekarza_exima_standard_x1d.png" srcset="/konfigurator/img/img_panel_lekarza_exima_standard_x1d@2x.png">
                    </div>
                    <div class="doctor-panel-row">
                        <div class="panel-card-cover d-panel1">
                            <span class="icon-icon_check"></span>
                            <div class="doctor-panel-card"><span class="start-here-img icon-icon_start_here"></span>
                                <p class="panel-card-number">01</p>
                                <p class="panel-card-title" data-default="Domyślnie:"></p>
                                <p class="congig-object doctor-type" data-default="Strzykawko-dmuchawka"></p>
                                <p class="congig-object doctor-model" data-default="Dmuchawka DCI"></p>
                                <p class="button-change doctor-panel1" data-target="doctor-tab-1">ZMIEŃ</p>
                            </div>
                        </div>
                        <div class="panel-card-cover d-panel2">
                            <span class="icon-icon_check"></span>
                            <div class="doctor-panel-card">
                                <p class="panel-card-number">02</p>
                                <p class="panel-card-title" data-default="Domyślnie:"></p>
                                <p class="congig-object doctor-type" data-default="Wolny rękaw"></p>
                                <p class="congig-object doctor-model" data-default="pneumatyczny M4"></p>
                                <p class="button-change dt2 doctor-panel2" data-target="doctor-tab-2">ZMIEŃ</p>
                            </div>
                        </div>
                        <div class="panel-card-cover d-panel3">
                            <span class="icon-icon_check"></span>
                            <div class="doctor-panel-card">
                                <p class="panel-card-number">03</p>
                                <p class="panel-card-title" data-default="Domyślnie:"></p>
                                <p class="congig-object doctor-type" data-default="Wolny rękaw"></p>
                                <p class="congig-object doctor-model" data-default="pneumatyczny M4"></p>
                                <p class="button-change dt3 doctor-panel3" data-target="doctor-tab-3">ZMIEŃ</p>
                            </div>
                        </div>
                        <div class="panel-card-cover d-panel4">
                            <span class="icon-icon_check"></span>
                            <div class="doctor-panel-card">
                                <p class="panel-card-number">04</p>
                                <p class="panel-card-title" data-default="Domyślnie:"></p>
                                <p class="congig-object doctor-type" data-default="Wolny rękaw"></p>
                                <p class="congig-object doctor-model" data-default="pneumatyczny M4"></p>
                                <p class="button-change dt4 doctor-panel4" data-target="doctor-tab-4">ZMIEŃ</p>
                            </div>
                        </div>
                        <div class="panel-card-cover d-panel5 certus-neo certus-max exima-neo exima-max">
                            <span class="icon-icon_check"></span>
                            <div class="doctor-panel-card">
                                <p class="panel-card-number">05</p>
                                <p class="panel-card-title" data-default="Domyślnie:"></p>
                                <p class="congig-object doctor-type" data-default="Wolny rękaw"></p>
                                <p class="congig-object doctor-model" data-default="pneumatyczny M4"></p>
                                <p class="button-change doctor-panel5" data-target="doctor-tab-5">ZMIEŃ</p>
                            </div>
                        </div>
                        <div class="panel-card-cover d-panel5 certus-standard exima-x1g exima-x1d">
                            <span class="icon-icon_check"></span>
                            <div class="doctor-panel-card">
                                <p class="panel-card-number">05</p>
                                <p class="panel-card-title" data-default="Domyślnie:"></p>
                                <p class="congig-object doctor-type" data-default="Wolny rękaw"></p>
                                <p class="congig-object doctor-model" data-default="elektryczny M4"></p>
                                <p class="button-change doctor-panel5" data-target="doctor-tab-5">ZMIEŃ</p>
                            </div>
                        </div>
                    </div>
                    <div class="doctor-tab-1 doctor-tab">
                        <div class="doctor-tab-cover">
                            <div class="tab1-top">
                                <div class="tab1-top-left">
                                    <p class="tab1-cong">Konfigurujesz:</p>
                                    <p class="tab1-cong">1. miejsce w panelu lekarza</p>
                                </div>
                                <div class="tab1-pagination"><span>01</span> <span class="pagination-circle"></span>
                                    <span class="pagination-circle"></span> <span class="pagination-circle"></span>
                                    <span class="pagination-circle"></span>
                                </div>
                            </div>
                            <p class="tab1-text">Na tym miejscu możesz umieścić:</p>
                            <button class="tab1-button">Strzykawko-dmuchawkę</button>
                            <p class="tab1-text">Wybierz model:</p>
                            <div class="tab1-row">
                                <div class="tab1-row-card">
                                    <p class="tab1-card-title">DMUCHAWKA DCI</p>
                                    <p class="tab1-card-description"><span class="bold-text">Dodatkowa dmuchawka3-funkcyjna DCI na panelu asysty, kątowa lub prosta</span></p>
                                    <div class="icon-holder" style="display:flex;">
                                        <p class="tab1-card-price">W standardzie</p>
                                        <span class="icon-icon_check" style="margin-top:52px; margin-left:13px" ></span>
                                    </div>
                                    <button data-type="Strzykawko-dmuchawka" data-name="DMUCHAWKA DCI" data-price="0" class="equipment tab1-card-button selected" data-standard="standard"><span class="label-button">WYBRANO</span><span class="icon-icon_check"></span></button>
                                </div>
                                <div class="tab1-row-card">
                                    <p class="tab1-card-title">LUZANI MINI MATE</p>
                                    <p class="tab1-card-description"><span class="bold-text">Dmuchawka 3-funkcyjna</span>(zamiana ze standardowej DCI na panelu lekarza) </p>
                                    <div class="price-flex">
                                        <p class="tab1-card-price">Dopłata</p>
                                        <p class="tab1-price-number">900 zł</p>
                                    </div>
                                    <button data-price="900" data-type="Strzykawko-dmuchawka" data-name="LUZANI MINI MATE" class="equipment tab1-card-button"><span class="label-button">WYBIERAM</span><span class="icon-icon_check"></span></button>
                                </div>
                                <div class="tab1-row-card">
                                    <p class="tab1-card-title">LUZANI MINI BRIGHT</p>
                                    <p class="tab1-card-description"><span class="bold-text">Dmuchawka 6-funkcyjna zpodgrzewaniem i światłem </span>(zamiana ze standardowej DCI na panelu lekarza)</p>
                                    <div class="price-flex">
                                        <p class="tab1-card-price">Dopłata</p>
                                        <p class="tab1-price-number">1650 zł</p>
                                    </div>
                                    <button data-price="1650" data-type="Strzykawko-dmuchawka" data-name="LUZANI MINI BRIGHT" class="equipment tab1-card-button"><span class="label-button">WYBIERAM</span><span class="icon-icon_check"></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="tab1-bottom-accept">
                            <button class="tab1-cancel btn-doctor-panel-cancel">ANULUJ</button>
                            <button class="tab1-accept btn-doctor-panel-accept">ZATWIERDŹ</button>
                        </div>
                    </div>
                    <?php for($i=2;$i<6;$i++): ?>
                        <div class="doctor-tab-<?php echo $i;?> doctor-tab">
                            <div class="doctor-tab-cover">
                                <div class="tab1-top">
                                    <div class="tab1-top-left">
                                        <p class="tab1-cong">Konfigurujesz:</p>
                                        <p class="tab1-cong"><?php echo $i?>. miejsce w panelu lekarza</p>
                                    </div>
                                    <?php if($i === 2):?>
                                        <div class="tab1-pagination">
                                            <span class="pagination-circle"></span>
                                            <span>0<?php echo $i?></span>
                                            <span class="pagination-circle"></span>
                                            <span class="pagination-circle"></span>
                                            <span class="pagination-circle"></span>
                                        </div>
                                    <?php elseif($i === 3):?>
                                        <div class="tab1-pagination">
                                            <span class="pagination-circle"></span>
                                            <span class="pagination-circle"></span>
                                            <span>0<?php echo $i?></span>
                                            <span class="pagination-circle"></span>
                                            <span class="pagination-circle"></span>
                                        </div>
                                    <?php elseif($i === 4):?>
                                        <div class="tab1-pagination">
                                            <span class="pagination-circle"></span>
                                            <span class="pagination-circle"></span>
                                            <span class="pagination-circle"></span>
                                            <span>0<?php echo $i?></span>
                                            <span class="pagination-circle"></span>
                                        </div>
                                    <?php elseif($i === 5):?>
                                        <div class="tab1-pagination">
                                            <span class="pagination-circle"></span>
                                            <span class="pagination-circle"></span>
                                            <span class="pagination-circle"></span>
                                            <span class="pagination-circle"></span>
                                            <span>0<?php echo $i?></span>
                                        </div>
                                    <?php endif;?>
                                </div>
                                <p class="tab1-text">Na tym miejscu możesz umieścić:</p>
                                <div class="tab2-button-place" id="doctor-panel-tabs-list">
                                    <button id="tab-turbina" class="tab2-button doctor-panel-choice active">Turbinę</button>
                                    <button id="tab-mikrosilnik" class="tab2-button doctor-panel-choice">Mikrosilnik</button>
                                    <button id="tab-skaler" class="tab2-button doctor-panel-choice">Skaler</button>
                                    <button id="tab-piaskarka" class="tab2-button doctor-panel-choice">Piaskarkę</button>
                                    <button id="tab-polimer" class="tab2-button doctor-panel-choice">Lampę polimeryzacyjną</button>
                                    <button id="tab-rekaw" class="tab2-button doctor-panel-choice">Wolny rękaw pneumatyczny</button>
                                </div>

                            <div id="Turbina" data-tab="tab-turbina" class="active main-panel-wrapper tab-turbina">
                                <p class="tab1-text">Światło w turbinie:</p>
                                <div class="tab2-button-place turbina-light-choose">
                                    <button id="turbina-light" class="tab-trigger tab2-button mikrosilnik-type-button" data-stmt="statement-turbina-with-light">Turbina ze światłem</button>
                                    <button id="turbina-no-light" class="tab-trigger tab2-button mikrosilnik-type-button">Turbina bez światła</button>
                                    <div class="statement statement-turbina-with-light">
                                        <span class="turbina-attention-icon attention-icon icon-icon_exclamation"></span>
                                        <p class="turbina-attention-icon attention-p">Światło w rękawie: dopłata <span class="turbina-bold-price" style="color: #50515C;">150 zł</span></p>
                                    </div>
                                </div>

                                <div data-tab="turbina-light" class="tab-content tab-last turbina-with-light">
                                    <div class="checkbox-card turbina--light statement-1">
                                        <div class="panel-checkbox-place"><input data-type="Turbina" data-name="Tytanowa kątnica turbinowa z podświetlaniem - główka standard" type="radio" id="tab<?php echo $i;?>-timax-z-900l" data-price="2980" name="tab<?php echo $i;?>-value" data-stmt="statement-turbina-with-light"> <label for="tab<?php echo $i;?>-timax-z-900l" class="panel-checkbox-div"> Ti-Max Z 900L</label></div>
                                        <p class="panel-checkbox-p">Tytanowa kątnica turbinowa z podświetlaniem - główka standard </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 830 zł</p>
                                            <div class="info-icon-block" title="Na szybkozłączkę PTL-CL (NSK), najmocniejsze w swojej klasie - do 26W, max. 400.000 obr./min.">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card turbina--light statement-1">
                                        <div class="panel-checkbox-place"><input data-type="Turbina" data-name="Tytanowa kątnica turbinowa z podświetlaniem - główka mini" type="radio" id="tab<?php echo $i;?>-timax-z-800l" data-price="2980" name="tab<?php echo $i;?>-value" value="" data-stmt="statement-turbina-with-light">
                                            <label for="tab<?php echo $i;?>-timax-z-800l" class="panel-checkbox-div"> Ti-Max Z 800L</label>
                                        </div>
                                        <p class="panel-checkbox-p">Tytanowa kątnica turbinowa z podświetlaniem - główka mini </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 830 zł</p>
                                            <div class="info-icon-block" title="Na szybkozłączkę PTL-CL (NSK), najmocniejsze w swojej klasie - do 26W, max. 440.000 obr./min.">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card turbina--light statement-1">
                                        <div class="panel-checkbox-place"><input data-type="Turbina" data-name="Stalowa kątnica turbinowa - główka standard, z podświetlaniem" type="radio" id="tab<?php echo $i;?>-timax-m-600l" data-price="2135" name="tab<?php echo $i;?>-value" value="" data-stmt="statement-turbina-with-light">
                                            <label for="tab<?php echo $i;?>-timax-m-600l" class="panel-checkbox-div"> S-Max M 900L</label>
                                        </div>
                                        <p class="panel-checkbox-p">Stalowa kątnica turbinowa - główka standard, z podświetlaniem </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 985 zł</p>
                                            <div class="info-icon-block" title="łożyska ceramiczne, poczwórny aerosol, na szybkozłączkę, prędkość max. 450.000 lub 430.000 obr./min, system czystej główki">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card turbina--light statement-1">
                                        <div class="panel-checkbox-place"><input data-type="Turbina" data-name="Stalowa kątnica turbinowa - główka mini, z podświetlaniem" type="radio" id="tab<?php echo $i;?>-timax-m-500l" data-price="2135" name="tab<?php echo $i;?>-value" value="" data-stmt="statement-turbina-with-light">
                                            <label for="tab<?php echo $i;?>-timax-m-500l" class="panel-checkbox-div"> S-Max M 800L</label>
                                        </div>
                                        <p class="panel-checkbox-p">Stalowa kątnica turbinowa - główka mini, z podświetlaniem </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 985 zł</p>
                                            <div class="info-icon-block" title="łożyska ceramiczne, poczwórny aerosol, na szybkozłączkę, prędkość max. 450.000 lub 430.000 obr./min, system czystej główki">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="statement  statement-1"><span class="tur-attention-icon attention-icon icon-icon_exclamation"></span>
                                        <p class="tur-attention-icon attention-p">Do tego modelu turbiny dołączana jest szybkozłączka PTL-CL-LED w cenie <span class="turbina-bold-price" style="color: #50515C;">830 zł</span></p>
                                    </div>
                                </div>
                                <div data-tab="turbina-no-light" class="tab-content tab-last turbina-without-light">
                                    <div class="checkbox-card turbina--no statement-1">
                                        <div class="panel-checkbox-place"><input data-type="Turbina" data-name="Stalowa kątnica turbinowa - główka standard, bez podświetlania" type="radio" id="tab<?php echo $i;?>-timax-m-600" data-price="1533" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-timax-m-600" class="panel-checkbox-div"> S-Max M 900</label>
                                        </div>
                                        <p class="panel-checkbox-p">Stalowa kątnica turbinowa - główka standard, bez podświetlania </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 533 zł</p>
                                            <div class="info-icon-block" title="łożyska ceramiczne, poczwórny aerosol, na szybkozłączkę, prędkość max. 450.000 lub 430.000 obr./min, system czystej główki">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card turbina--no statement-1">
                                        <div class="panel-checkbox-place"><input data-type="Turbina" data-name="Stalowa kątnica turbinowa - główka mini, bez podświetlania" type="radio" id="tab<?php echo $i;?>-timax-m-500" data-price="1533" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-timax-m-500" class="panel-checkbox-div"> S-Max M 800</label>
                                        </div>
                                        <p class="panel-checkbox-p">Stalowa kątnica turbinowa - główka mini, bez podświetlania </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 533 zł</p>
                                            <div class="info-icon-block" title="łożyska ceramiczne, poczwórny aerosol, na szybkozłączkę, prędkość max. 450.000 lub 430.000 obr./min, system czystej główki">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card turbina--no">
                                        <div class="panel-checkbox-place"><input data-type="Turbina" data-name="Kątnica turbinowa na złącze Midwest" type="radio" id="tab<?php echo $i;?>-pana-max2-m4" data-price="1070" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-pana-max2-m4" class="panel-checkbox-div"> PANA-MAX2 M4</label>
                                        </div>
                                        <p class="panel-checkbox-p">Kątnica turbinowa na złącze Midwest </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 070 zł</p>
                                            <div class="info-icon-block" title="wymiana wierteł przyciskiem, 450.000 obr./min., pojedynczy aerosol">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="statement statement-1">
                                        <span class="tur-attention-icon attention-icon icon-icon_exclamation"></span>
                                        <p class="tur-attention-icon attention-p">Do tego modelu turbiny dołączana jest szybkozłączka FM-CL-M4-T w cenie <span class="turbina-bold-price" style="color: #50515C;">544 zł</span></p>
                                    </div>
                                </div>


                            </div>
                            <div id="Mikrosilnik" data-tab="tab-mikrosilnik" class="main-panel-wrapper tab-mikrosilnik">
                                <p class="tab1-text">Wybierz rodzaj mikrosilnika:</p>
                                <div class="tab2-button-place">
                                    <button id="mikro-el" class="tab-trigger tab2-button mikrosilnik-type-button">Elektryczny</button>
                                    <button id="mikro-pn" class="tab-trigger tab2-button mikrosilnik-type-button">Pneumatyczny</button>
                                </div>

                                <div data-tab="mikro-el" class="tab-content tab-as-trigger">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Mikrosilnik" data-name="NLX plus" data-variant="mikro-katnica-light" data-price="8190" type="radio" id="tab<?php echo $i;?>-nlx-plus" name="tab<?php echo $i;?>-value" value=""> <label id="light-on" for="tab<?php echo $i;?>-nlx-plus" class="panel-checkbox-div">NLX plus </label></div>
                                        <p class="panel-checkbox-p">Tytanowy mikrosilnik elektryczny z funkcją ENDO, z Multipadem</p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">8 190 zł</p>
                                            <div class="info-icon-block" title="Bezszczotkowy, wewn. chłodzenie, 100 -40.000 obr./min., 4.0 Nm, światło LED, do wbudowania do unitu, w zestawie Multipad, zasilacz i rękaw.">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card ">
                                        <div class="panel-checkbox-place"><input data-type="Mikrosilnik" data-name="NLX nano" data-variant="mikro-katnica-light" type="radio" data-price="8128" name="tab<?php echo $i;?>-value" id="tab<?php echo $i;?>-nlx-nano"> <label id="light-on" for="tab<?php echo $i;?>-nlx-nano" class="panel-checkbox-div">NLX nano</label></div>
                                        <p class="panel-checkbox-p">Tytanowy mikrosilnik elektryczny, z Multipadem</p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">8 128 zł</p>
                                            <div class="info-icon-block" title="Bezszczotkowy, wewn. chłodzenie, 100 -40.000 obr./min., 4.0 Nm, światło LED, do wbudowania do unitu, w zestawie Multipad, zasilacz i rękaw">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Mikrosilnik" data-name="NBX LED" data-variant="mikro-katnica-light" data-price="4243" type="radio" id="tab<?php echo $i;?>-nbx-led" name="tab<?php echo $i;?>-value" value=""> <label id="light-on" for="tab<?php echo $i;?>-nbx-led" class="panel-checkbox-div">NBX LED </label></div>
                                        <p class="panel-checkbox-p">Tytanowy mikrosilnik elektryczny z podświetlaniem LED</p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">4 243 zł</p>
                                            <div class="info-icon-block" title="Wewn. chłodzenie, 1.000 -40.000 obr./min., do wbudowania do unitu, z zasilaczem i rękawem.">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Mikrosilnik" data-name="NBX N" data-variant="mikro-katnica-no-light" data-price="3737" type="radio" id="tab<?php echo $i;?>-nbx-n" name="tab<?php echo $i;?>-value" value=""> <label id="light-off" for="tab<?php echo $i;?>-nbx-n" class="panel-checkbox-div">NBX N </label></div>
                                        <p class="panel-checkbox-p">Tytanowy mikrosilnik elektryczny bez podświetlania</p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 737 zł</p>
                                            <div class="info-icon-block" title="Wewn. chłodzenie, 1.000 -40.000 obr./min., do wbudowania do unitu, z zasilaczem i rękawem">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Mikrosilnik" data-name="NBX LED iMD" data-variant="mikro-katnica-light" data-price="4243" type="radio" id="tab<?php echo $i;?>-nbx-led-imd" name="tab<?php echo $i;?>-value" value=""> <label id="light-on" for="tab<?php echo $i;?>-nbx-led-imd" class="panel-checkbox-div">NBX LED iMD </label></div>
                                        <p class="panel-checkbox-p">Tytanowy mikrosilnik elektryczny z podświetlaniem LED </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">4 243 zł</p>
                                            <div class="info-icon-block" title="Wewn. chłodzenie, 1.000 -40.000 obr./min., do wbudowania do unitu, z zasilaczem i rękawem">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Mikrosilnik" data-name="M40 XS" data-variant="mikro-katnica-light" data-price="4297" type="radio" id="tab<?php echo $i;?>-m40-xs" name="tab<?php echo $i;?>-value" value=""> <label id="light-on" for="tab<?php echo $i;?>-m40-xs" class="panel-checkbox-div">M40 XS </label></div>
                                        <p class="panel-checkbox-p">Mikrosilnik elektryczny z podświetlaniem LED</p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">4 297 zł</p>
                                            <div class="info-icon-block" title="Wewn. chłodzenie, 60-40.000 obr./min., zawór retrakcyjny, złącze Midwest, do wbudowania do unitu, z zasilaczem i rękawem">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Mikrosilnik" data-name="M40N XS" data-variant="mikro-katnica-no-light" data-price="3625" type="radio" id="tab<?php echo $i;?>-m40n-xs" name="tab<?php echo $i;?>-value" value=""> <label id="light-off" for="tab<?php echo $i;?>-m40n-xs" class="panel-checkbox-div">M40N XS </label></div>
                                        <p class="panel-checkbox-p">Mikrosilnik elektryczny bez podświetlenia</p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 625 zł</p>
                                            <div class="info-icon-block" title="Wewn. chłodzenie, 60-40.000 obr./min., zawór retrakcyjny, złącze Midwest, do wbudowania do unitu, z zasilaczem i rękawem">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-tab="mikro-pn" class="tab-content">
                                    <p class="tab1-text">Światło w rękawie:</p>
                                    <div class="tab2-button-place">
                                        <button id="pneum-light" class="tab-trigger-internal-1 tab2-button">Mikrosilnik ze światłem</button>
                                        <button id="pneum-no-light" class="tab-trigger-internal-1 tab2-button" data-stmt="statement-mikro-with-light">Mikrosilnik bez światła</button>

                                        <div class="statement statement-mikro-with-light">
                                            <span class="mikro-attention-icon attention-icon icon-icon_exclamation"></span>
                                            <p class="mikro-attention-icon attention-p">Światło w rękawie: dopłata <span class="turbina-bold-price" style="color: #50515C;">150 zł</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div data-tab="mikro-pn" class="pneumatic-mikrosilnik">
                                    <div data-tab="pneum-light" class="tab-content-internal-1 tab-as-trigger pneumatic-light-on">
                                        <p class="tab1-text tab1-text-separatop">Wybierz mikrosilnik:</p>
                                        <div class="checkbox-card-wrapper">
                                            <div class="checkbox-card">
                                                <div class="panel-checkbox-place"><input data-type="Mikrosilnik" data-variant="mikro-katnica-light" data-name="Ti-Max X205LED" data-price="2570" type="radio" name="tab<?php echo $i;?>-value" id="tab<?php echo $i;?>-timax-x205LED"> <label id="light-on" for="tab<?php echo $i;?>-timax-x205LED" class="panel-checkbox-div"> Ti-Max X205LED </label></div>
                                                <p class="panel-checkbox-p">Mikrosilnik pneumatyczny z podświetlaniem LED </p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">2 570 zł</p>
                                                    <div class="info-icon-block" title="Korpus tytanowy, powłoka DURACOAT, obrót 360o, 32.000 LUX, wewn. chłodzenie, max. 25.000 obr./min.">
                                                        <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="checkbox-card">
                                                <div class="panel-checkbox-place"><input data-type="Mikrosilnik" data-variant="mikro-katnica-light" data-name="DynaLED M205LG M4" type="radio" data-price="3550" id="tab<?php echo $i;?>-dynaled-m4" name="tab<?php echo $i;?>-value" value=""> <label id="light-on" for="tab<?php echo $i;?>-dynaled-m4" class="panel-checkbox-div">DynaLED M205LG M4 </label></div>
                                                <p class="panel-checkbox-p">Mikrosilnik pneumatyczny z generatorem oświetlenia LED</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">3 550 zł</p>
                                                    <div class="info-icon-block" title="25.000 LUX, max. 24.000 obr./min., wewnętrzne chłodzenie, na złącze Midwest">
                                                        <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="checkbox-card">
                                                <div class="panel-checkbox-place"><input data-type="Mikrosilnik" data-variant="mikro-katnica-light" data-name="DynaLED M205LG B2" type="radio" data-price="3550" id="tab<?php echo $i;?>-dynaled-b2" name="tab<?php echo $i;?>-value" value=""> <label id="light-on" for="tab<?php echo $i;?>-dynaled-b2" class="panel-checkbox-div">DynaLED M205LG B2 </label></div>
                                                <p class="panel-checkbox-p">Mikrosilnik pneumatyczny z generatorem oświetlenia LED</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">3 550 zł</p>
                                                    <div class="info-icon-block" title="25.000 LUX, max. 24.000 obr./min., wewnętrzne chłodzenie, na złącze Borden.">
                                                        <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-tab="pneum-no-light" class="tab-content-internal-1 tab-as-trigger pneumatic-light-off">
                                        <p class="tab1-text tab1-text-separatop">Wybierz mikrosilnik:</p>
                                        <div class="checkbox-card-wrapper">
                                            <div class="checkbox-card">
                                                <div class="panel-checkbox-place"><input data-type="Mikrosilnik" data-variant="mikro-katnica-no-light" data-name="FX 205m M4" type="radio" id="tab<?php echo $i;?>-fx-b4" data-price="1070" name="tab<?php echo $i;?>-value" value=""> <label id="light-off" for="tab<?php echo $i;?>-fx-b4" class="panel-checkbox-div">FX 205m M4 </label></div>
                                                <p class="panel-checkbox-p">Mikrosilnik pneumatyczny</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">920 zł</p>
                                                    <div class="info-icon-block" title="Korpus ze stali nierdzewnej, zewnętrzne chłodzenie, max. 25.000 obr./min., na złącze Midwest">
                                                        <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="checkbox-card">
                                                <div class="panel-checkbox-place"><input data-type="Mikrosilnik" data-variant="mikro-katnica-no-light" data-name="FX 205m B2" type="radio" id="tab<?php echo $i;?>-fx-b2" data-price="1070" name="tab<?php echo $i;?>-value" value=""> <label id="light-off" for="tab<?php echo $i;?>-fx-b2" class="panel-checkbox-div">FX 205m B2 </label></div>
                                                <p class="panel-checkbox-p">Mikrosilnik pneumatyczny </p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">920 zł</p>
                                                    <div class="info-icon-block" title="Korpus ze stali nierdzewnej, zewnętrzne chłodzenie, max. 25.000 obr./min., na złącze Borden">
                                                        <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="checkbox-card">
                                                <div class="panel-checkbox-place"><input data-type="Mikrosilnik" data-variant="mikro-katnica-no-light" data-name="S-Max M-205-M4" type="radio" data-price="1350" id="tab<?php echo $i;?>-smax-m205m4" name="tab<?php echo $i;?>-value" value=""> <label id="light-off" for="tab<?php echo $i;?>-smax-m205m4" class="panel-checkbox-div"> S-Max M-205-M4 </label></div>
                                                <p class="panel-checkbox-p">Mikrosilnik pneumatyczny</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">1 200 zł</p>
                                                    <div class="info-icon-block" title="Max. 25.000 obr./min., wewnętrzne chłodzenie"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div data-tab="mikro-internal" class="tab-content-internal-1 katnica-wrapper">
                                    <p class="tab1-text">Wybierz kątnicę lub prostnicę:</p>
                                    <div class="tab2-button-place katnica-choose">
                                        <button id="katnica" class="tab-trigger-internal-2 tab2-button">Kątnica</button>
                                        <button id="prostnica" class="tab-trigger-internal-2 tab2-button">Prostnica</button>
                                    </div>
                                    <div data-tab="katnica" id="type-katnica" class="tab-content-internal-2 tab-last checkbox-card-wrapper katnica-or-prostnica katnica-with-light">
                                        <div id="without-light" class="mikro-katnica-no-light choose-to-continue tab-last">
                                            <div id="without-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input class="added" data-name="S-Max M 25" data-type="Katnica" data-price="2090" type="radio" id="tab<?php echo $i;?>-smax-m-25" name="tab<?php echo $i;?>-katnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-smax-m-25" class="panel-checkbox-div"> S-Max M 25 </label></div>
                                                <p class="panel-checkbox-p">Kątnica 1:1 na mikrosilnik, bez podświetlania</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">2 090 zł</p>
                                                    <div class="info-icon-block" title="Max. 40.000 obr./min., wewn. chłodzenie, pojedynczy aerosol">
                                                        <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="with-light" class="mikro-katnica-light choose-to-continue tab-last">
                                            <div id="with-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input class="added" data-name="S-Max M 95" data-type="Katnica" data-price="2720" type="radio" id="tab<?php echo $i;?>-smax-m-95l" name="tab<?php echo $i;?>-katnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-smax-m-95l" class="panel-checkbox-div">S-Max M 95</label></div>
                                                <p class="panel-checkbox-p">Kątnica 1:5 na mikrosilnik, z podświetlaniem</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">2 720 zł</p>
                                                    <div class="info-icon-block" title="Max. 200.000 obr./min., łoż. ceram., wewn. chłodzenie, poczwórny aerosol">
                                                        <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="with-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input class="added" data-name="Ti-Max Z 25L" data-type="Katnica" type="radio" data-price="2626" id="tab<?php echo $i;?>-ti-max-z-25l" name="tab<?php echo $i;?>-katnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-ti-max-z-25l" class="panel-checkbox-div"> Ti-Max Z 25L</label>
                                                </div>
                                                <p class="panel-checkbox-p">Kątnica tytanowa na mikrosilnik z przełożeniem 1:1, pojedynczy aerosol</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">2 626 zł</p>
                                                    <div class="info-icon-block" title="z podświetlaniem, wewnętrzne chłodzenie, wymiana wierteł przyciskiem, system czystej główki, mikrofiltr">
                                                        <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="with-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input class="added" data-name="Ti-Max Z 95L" data-type="Katnica" type="radio" data-price="4116" id="tab<?php echo $i;?>-timax-z-95l" name="tab<?php echo $i;?>-katnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-timax-z-95l" class="panel-checkbox-div"> Ti-Max Z 95L</label>
                                                </div>
                                                <p class="panel-checkbox-p">Kątnica tytanowa na mikrosilnik z przełożeniem 1:5, pojedynczy aerosol</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">4 116 zł</p>
                                                    <div class="info-icon-block" title="z podświetlaniem, wewnętrzne chłodzenie, wymiana wierteł przyciskiem, system czystej główki, mikrofiltr">
                                                        <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="with-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input class="added" data-name="Ti-Max Z 85L" data-type="Katnica" type="radio" data-price="4116" id="tab1-timax-z-85l" name="tab<?php echo $i;?>-katnica-value" value="">
                                                    <label for="tab1-timax-z-85l" class="panel-checkbox-div"> Ti-Max Z 85L</label>
                                                </div>
                                                <p class="panel-checkbox-p">Kątnica tytanowa na mikrosilnik z przełożeniem 1:5, pojedynczy aerosol</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">4 116 zł</p>
                                                    <div class="info-icon-block" title="z podświetlaniem, wewnętrzne chłodzenie, wymiana wierteł przyciskiem, system czystej główki, mikrofiltr">
                                                        <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="with-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input class="added" data-name="S-Max M 25L" data-type="Katnica" type="radio" data-price="2090" id="tab<?php echo $i;?>-smax-m-25l" name="tab<?php echo $i;?>-katnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-smax-m-25l" class="panel-checkbox-div"> S-Max M 25L </label>
                                                </div>
                                                <p class="panel-checkbox-p">Kątnica 1:1 na mikrosilnik, z podświetlaniem</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">2 090 zł</p>
                                                    <div class="info-icon-block" title="Wewn. chłodzenie, pojedynczy aerosol, światłowód prętowy">
                                                        <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-tab="prostnica" id="type-prostnica" class="tab-content-internal-2 tab-last checkbox-card-wrapper katnica-or-prostnica prostnica-without-light">
                                        <div id="without-light" class="choose-to-continue mikro-katnica-no-light tab-last">
                                            <div id="without-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input data-type="Prostnica" data-name="S-Max M 65" type="radio" id="tab<?php echo $i;?>-smax-m-65" data-price="800" name="tab<?php echo $i;?>-prostnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-smax-m-65" class="panel-checkbox-div">S-Max M 65 </label>
                                                </div>
                                                <p class="panel-checkbox-p">Prostnica 1:1 na mikrosilnik, bez podświetlania</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">800 zł</p>
                                                    <div class="info-icon-block" title="Wewn. chłodzenie, pojedynczy aerosol">
                                                        <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="without-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input data-type="Prostnica" data-name="FX 65m" type="radio" id="tab<?php echo $i;?>-fx-65" data-price="800" name="tab<?php echo $i;?>-prostnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-fx-65" class="panel-checkbox-div"> FX 65m </label>
                                                </div>
                                                <p class="panel-checkbox-p">Prostnica 1:1 na mikrosilnik, bez podświetlania</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">800 zł</p>
                                                    <div class="info-icon-block" title="Korpus stalowy, max. 40.000 obr./min., zewnętrzne chłodzenie">
                                                        <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="without-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input data-type="Prostnica" data-name="EX-6B" type="radio" id="tab<?php echo $i;?>-ex-6b" data-price="800" name="tab<?php echo $i;?>-prostnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-ex-6b" class="panel-checkbox-div"> EX-6B </label>
                                                </div>
                                                <p class="panel-checkbox-p">Prostnica 1:1 na mikrosilnik, bez podświetlania</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">800 zł</p>
                                                    <div class="info-icon-block" title="zewnętrzne chłodzenie, max. 40.000 obr./min."><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="with-light" class="choose-to-continue mikro-katnica-light">
                                            <p id="with-light" class="checkbox-card">Brak</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Skaler" data-tab="tab-skaler" class="main-panel-wrapper tab-skaler">
                                <p class="tab1-text">Wybierz rodzaj skalera:</p>
                                <div class="tab2-button-place skaler-button-place">
                                    <button id="skaler-el" class="tab-trigger tab2-button mikrosilnik-type-button">Elektryczny</button>
                                    <button id="skaler-pn" class="tab-trigger tab2-button mikrosilnik-type-button" data-stmt="statement-skaler-with-light">Pneumatyczny</button>
                                    <div class="statement statement-skaler-with-light">
                                        <span class="skaler-attention-icon attention-icon icon-icon_exclamation"></span>
                                        <p class="skaler-attention-icon attention-p">Światło w rękawie: dopłata <span class="turbina-bold-price" style="color: #50515C;">150 zł</span></p>
                                    </div>
                                </div>
                                <div data-tab="skaler-el" class="tab-content skaler-light-choose">
                                    <p class="tab1-text">Światło w rękawie:</p>
                                    <div class="skaler-mikro-light">
                                        <button id="skaler-light" class="tab-trigger-internal-1 tab2-button">Skaler ze światłem</button>
                                        <button id="skaler-no-light" class="tab-trigger-internal-1 tab2-button">Skaler bez światła</button>
                                    </div>
                                </div>
                                <div data-tab="skaler-light" class="tab-content-internal-1 tab-last skaler-el-light">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Skaler" data-name="VARIOS 150 LUX" type="radio" id="tab<?php echo $i;?>-varios-150-lux" data-price="3084" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-varios-150-lux" class="panel-checkbox-div"> VARIOS 150 LUX</label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler Piezzoelektryczny Varios 151 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 084 zł</p>
                                            <div class="info-icon-block" title="Skaler piezzo. do wbudowania do unitu z poświetlaniem LED, 8W">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Skaler" data-name="VARIOS 170 LUX" type="radio" id="tab<?php echo $i;?>-varios-170-lux" data-price="3624" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-varios-170-lux" class="panel-checkbox-div"> VARIOS 170 LUX</label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler Piezzoelektryczny Varios 153 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 624 zł</p>
                                            <div class="info-icon-block" title="Skaler piezzo. do wbudowania do unitu z poświetlaniem LED, 11W">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Skaler" data-name="Ti-Max S970 L" type="radio" id="tab<?php echo $i;?>-timax-s970-l" data-price="3107" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-timax-s970-l" class="panel-checkbox-div"> Ti-Max S970 L</label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler pneumatyczny ze światłem Ti-Max S970 L </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 107 zł</p>
                                            <div class="info-icon-block" title="Tytanowy skaler pneumatyczny ze światłem, na szybkozłączkę NSK">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-tab="skaler-no-light" class="tab-content-internal-1 tab-last skaler-el-no-light">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Skaler" data-name="VARIOS 150" type="radio" id="tab<?php echo $i;?>-varios-150" data-price="2138" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-varios-150" class="panel-checkbox-div"> VARIOS 150 </label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler Piezzoelektryczny Varios 150 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 138 zł</p>
                                            <div class="info-icon-block" title="Skaler piezzo. do wbudowania do unitu, 8W">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Skaler" data-name="VARIOS 170" type="radio" id="tab<?php echo $i;?>-varios-170" data-price="2512" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-varios-170" class="panel-checkbox-div"> VARIOS 170 </label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler Piezzoelektryczny Varios 152 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 512 zł</p>
                                            <div class="info-icon-block" title="Skaler piezzo. do wbudowania do unitu, 11W">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-tab="skaler-pn" id="Skaler" class="tab-content tab-last skaler-pn-no-light">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Skaler" data-name="Skaler pneumatyczny ze światłem Ti-Max S970" type="radio" id="tab<?php echo $i;?>-timax-s970" data-price="2598" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-timax-s970" class="panel-checkbox-div"> Ti-Max S970</label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler pneumatyczny ze światłem Ti-Max S970 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 448 zł</p>
                                            <div class="info-icon-block" title="Tytanowy skaler pneumatyczny, na szybkozłączkę NSK"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Skaler" data-name="AS 2000 M4" type="radio" id="tab<?php echo $i;?>-as-2000-m4" data-price="1217" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-as-2000-m4" class="panel-checkbox-div"> AS 2000 M4 </label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler pneumatyczny AS 2000 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 067 zł</p>
                                            <div class="info-icon-block" title="Skaler pneumatyczny, na złącze Midwest">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Skaler" data-name="AS 2000 B2" type="radio" id="tab<?php echo $i;?>-as-2000-b2" data-price="1217" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-as-2000-b2" class="panel-checkbox-div"> AS 2000 B2 </label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler pneumatyczny AS 2000 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 067 zł</p>
                                            <div class="info-icon-block" title="Skaler pneumatyczny, na złącze Borden">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Piaskarka" data-tab="tab-piaskarka" class="main-panel-wrapper tab-piaskarka">
                                <p class="tab1-text tab1-text-separatop">Wybierz model:</p>
                                <div class="tab-content tab-last piaskarka-block default">
                                    <div class="checkbox-card statement-1">
                                        <div class="panel-checkbox-place"><input data-type="Piaskarka" data-name="Prophy Mate NEO PTL-P" type="radio" id="tab<?php echo $i;?>-neo-ptl-p" data-price="2875" name="tab<?php echo $i;?>-value" value=""> <label for="tab<?php echo $i;?>-neo-ptl-p" class="panel-checkbox-div turn-szybko"> Prophy Mate NEO PTL-P </label></div>
                                        <p class="panel-checkbox-p">Piaskarka do profilaktyki Prophy Mate NEO </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 875 zł</p>
                                            <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Piaskarka" data-name="Prophy Mate NEO M4-P" type="radio" id="tab<?php echo $i;?>-neo-m4-p" data-price="2788" name="tab<?php echo $i;?>-value" value=""> <label for="tab<?php echo $i;?>-neo-m4-p" class="panel-checkbox-div"> Prophy Mate NEO M4-P</label></div>
                                        <p class="panel-checkbox-p">Piaskarka do profilaktyki Prophy Mate NEO </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 788 zł</p>
                                            <div class="info-icon-block" title="Piaskarka na rękaw Midwest (kolor szary) - Tajwan"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card statement-1">
                                        <div class="panel-checkbox-place"><input data-type="Piaskarka" data-name="Perio Mate PTL-P" type="radio" id="tab<?php echo $i;?>-ptl-p" data-price="3335" name="tab<?php echo $i;?>-value" value=""> <label for="tab<?php echo $i;?>-ptl-p" class="panel-checkbox-div turn-szybko"> Perio Mate PTL-P </label></div>
                                        <p class="panel-checkbox-p">Piaskarka do periodontologii Perio Mate </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 335 zł</p>
                                            <div class="info-icon-block" title="Piaskarka do zabiegów perio na szybkozłączkę PTL-CL (NSK)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Piaskarka" data-name="Perio Mate M4-P" type="radio" id="tab<?php echo $i;?>-m4-p" data-price="3050" name="tab<?php echo $i;?>-value" value=""> <label for="tab<?php echo $i;?>-m4-p" class="panel-checkbox-div"> Perio Mate M4-P </label></div>
                                        <p class="panel-checkbox-p">Piaskarka do periodontologii Perio Mate </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 050 zł</p>
                                            <div class="info-icon-block" title="Piaskarka do zabiegów perio na rękaw Midwest">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="statement statement-1">
                                        <span class="tur-attention-icon attention-icon icon-icon_exclamation"></span>
                                        <p class="tur-attention-icon attention-p">Do tego modelu turbiny dołączana jest szybkozłączka PTL-CL-LED w cenie <span class="turbina-bold-price" style="color: #50515C;">830 zł</span></p>
                                    </div>
                                </div>
                            </div>
                            <div id="Lampa-pol" data-tab="tab-polimer" class="main-panel-wrapper tab-polimer">
                                <p class="tab1-text tab1-text-separatop">Wybierz model:</p>
                                <div class="tab-content tab-last default polimer-lamp">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Lampa" data-name="TKD - Włochy" type="radio" id="tab<?php echo $i;?>-moon" data-price="2300" name="tab<?php echo $i;?>-value" value=""> <label for="tab<?php echo $i;?>-moon" class="panel-checkbox-div"> MOON </label></div>
                                        <p class="panel-lamp-p">TKD - Włochy</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2300 zł</p>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Lampa" data-name="FINEVISION - Tajwan" type="radio" id="tab<?php echo $i;?>-ultralight" data-price="1800" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-ultralight" class="panel-checkbox-div"> ULTRALIGHT </label>
                                        </div>
                                        <p class="panel-lamp-p">FINEVISION - Tajwan</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1800 zł</p>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Lampa" data-name="WOODPECKER - Chiny" type="radio" id="tab<?php echo $i;?>-built-in" data-price="700" name="tab<?php echo $i;?>-value" value=""> <label for="tab<?php echo $i;?>-built-in" class="panel-checkbox-div"> BUILT-IN C </label>
                                        </div>
                                        <p class="panel-lamp-p">WOODPECKER - Chiny</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">700 zł</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="wolny-rekaw" data-tab="tab-rekaw" class="main-panel-wrapper tab-rekaw">
                                <div class="tab-content tab-last default polimer-lamp">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input type="radio" data-type="pneumatyczny M4" data-name="Wolny rękaw" id="tab<?php echo $i;?>-empty" data-price="0" name="tab<?php echo $i;?>-value" class="selected default-radio" data-confirmed="confirmed" checked="true"> <label for="tab<?php echo $i;?>-empty" class="panel-checkbox-div"> Pusty rękaw </label></div>
                                    </div>
                                </div>
                                <div class="attention-block-wrapper certus-standard exima-x1g exima-x1d">
                                    <div class="attention-wrapper"> <span class="icon-icon_exclamation"></span>
                                        <p>W unicie <span class="data-brand certus-standard">CERTUS STANDARD</span><span class="data-brand exima-x1g">EXIMA X1G</span><span class="data-brand exima-x1d">EXIMA X1D</span> 4-ty rękaw pneumatyczny jest dodatkowo płatny, jego cena to 350 zł.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab<?php echo $i; ?>-bottom-accept">
                                <button class="tab<?php echo $i; ?>-cancel btn-doctor-panel-cancel">ANULUJ</button>
                                <button class="tab<?php echo $i; ?>-cancel btn-doctor-panel-accept">ZATWIERDŹ</button>
                            </div>
                        </div>

                </div>
                    <?php endfor; ?>
            </div>
        </section>
        <section id="tab6" class="tab-content hide">
            <div class="brand-choose-sidebar assyst-step-1">
                <div class="brand-sidebar-wrapper">
                    <div class="product-list step-1">
                        <div class="choosen-assyst assyst-place common certus-neo" data-standard="standard">
                            <p class="brand-name uppercase">4 uchwyty</p>
                            <p class="brand-price">Standard</p>
                            <span class="assyst-span icon-icon_check"></span>
                        </div>
                        <div class="choosen-assyst assyst-place common certus-max">
                            <p class="brand-name uppercase">4 uchwyty</p>
                            <p class="brand-price">Dopłata 800 zł</p>
                            <span class="assyst-span icon-icon_check"></span>
                        </div>
                        <div class="choosen-assyst assyst-place common certus-standard">
                            <p class="brand-name uppercase">3 uchwyty</p>
                            <p class="brand-price">Dopłata 600 zł</p>
                            <span class="assyst-span icon-icon_check"></span>
                        </div>
                        <div class="choosen-assyst assyst-place common exima-neo" data-standard="standard">
                            <p class="brand-name uppercase">4 uchwyty</p>
                            <p class="brand-price">Standard</p>
                            <span class="assyst-span icon-icon_check"></span>
                        </div>
                        <div class="choosen-assyst assyst-place common exima-max">
                            <p class="brand-name uppercase">3 uchwyty</p>
                            <p class="brand-price">Dopłata 600 zł</p>
                            <span class="assyst-span icon-icon_check"></span>
                        </div>
                        <div class="choosen-assyst assyst-place common exima-x1g">
                            <p class="brand-name uppercase">3 uchwyty</p>
                            <p class="brand-price">Dopłata 600 zł</p>
                            <span class="assyst-span icon-icon_check"></span>
                        </div>
                        <div class="choosen-assyst assyst-place common exima-x1d">
                            <p class="brand-name uppercase">3 uchwyty</p>
                            <p class="brand-price">Dopłata 600 zł</p>
                            <span class="assyst-span icon-icon_check"></span>
                        </div>
                    </div>
                    <div class="product-list step-2">
                        <div class="choosen-brand model-type" data-label="assyst-tab-1">
                            <p class="brand-name">1. MIEJSCE W PANELU</p>
                            <p class="brand-price assyst-brand-1">Skonfiguruj, aby poznać ostateczną cenę</p>
                            <span class="choosen-brand-sign icon-icon_loading"></span>
                            <span class="choosen-brand-sign icon-icon_check"></span>
                        </div>
                        <div class="choosen-brand model-type" data-label="assyst-tab-2">
                            <p class="brand-name">2. MIEJSCE W PANELU</p>
                            <p class="brand-price assyst-brand-2">Skonfiguruj, aby poznać ostateczną cenę</p>
                            <span class="choosen-brand-sign icon-icon_loading"></span>
                            <span class="choosen-brand-sign icon-icon_check"></span>
                        </div>
                        <div class="choosen-brand model-type" data-label="assyst-tab-3">
                            <p class="brand-name">3. MIEJSCE W PANELU</p>
                            <p class="brand-price assyst-brand-3">Skonfiguruj, aby poznać ostateczną cenę</p>
                            <span class="choosen-brand-sign icon-icon_loading"></span>
                            <span class="choosen-brand-sign icon-icon_check"></span>
                        </div>
                        <div class="choosen-brand model-type">
                            <p class="brand-name">4. MIEJSCE W PANELU</p>
                            <p class="brand-price assyst-brand-4">Ślinociąg</p><span class="choosen-brand-sign"></span>
                        </div>
                    </div>
                    <div class="tab1-summary">
                        <div class="brand-price-summary">
                            <p class="brand-summary">Wyposażenie panelu asysty:</p>
                            <p class="price-summary"><span class="pr" data-assyst-panel-cost="0"></span> zł</p>
                        </div>
                        <div class="step-1">
                            <p class="info common certus-max certus-standard exima-max exima-x1g exima-x1d">Kliknij "Pomiń" jeśli nie chcesz uwzględniać paneliku asysty w swoim zestawie.</p>
                            <div class="prev-step-button">
                                <button class="step-back-button">WRÓĆ</button>
                                <span class="icon-icon_arrow_left"></span>
                            </div>
                            <div class="next-step-button common certus-neo exima-neo">
                                <button class="step-5-button button-to-go" data-default="DALEJ" data-trigger="DALEJ"></button>
                                <span class="icon-icon_arrow_right"></span>
                            </div>
                            <div class="next-step-button common certus-max certus-standard exima-max exima-x1g exima-x1d">
                                <button class="step-5-button button-to-go nextStepActive" data-default="POMIŃ" data-trigger="DALEJ"></button>
                                <span class="icon-icon_arrow_right"></span>
                            </div>
                        </div>
                        <div class="step-2">
                            <div class="prev-step-button">
                                <button class="step-back-button">WRÓĆ</button>
                                <span class="icon-icon_arrow_left"></span>
                            </div>
                            <div class="next-step-button">
                                <button class="step-5-button nextStepActive button-to-go" data-default="DALEJ"></button>
                                <span class="icon-icon_arrow_right"></span>
                            </div>
                                <!--                            <div class="next-step-button common certus-neo exima-neo">-->
<!--                                <button class="step-5-button nextStepActive button-to-go" data-default="DALEJ"></button>-->
<!--                                <span class="icon-icon_arrow_right"></span>-->
<!--                            </div>-->
<!--                            <div class="next-step-button common certus-max certus-standard exima-max exima-x1g exima-x1d">-->
<!--                                <button class="step-5-button nextStepActive button-to-go" data-default="DALEJ"></button>-->
<!--                                <span class="icon-icon_arrow_right"></span>-->
<!--                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-content">
                <div class="assyst-content">
                    <div class="step-1 assyst-content-internal">
                        <div class="assyst-content-wrapper common certus-neo">
                            <span class="label-top uppercase">panel asysty - 4 uchwyty</span>
                            <img src="/konfigurator/img/img_panel_asysty_certus_neo.png" srcset="/konfigurator/img/img_panel_asysty_certus_neo@2x.png" alt="img">
                            <div class="label-bottom"><span class="label-internal">W standardzie</span><span class="price"></span></div>
                            <button class="assyst-main-button assyst-place selected" data-standard="standard" data-price="0" data-name="Panel asysty do CERTUS Neo">WYBRANO<span class="assyst-span icon-icon_check"></span></button>
                        </div>
                        <div class="assyst-content-wrapper common certus-max">
                            <span class="label-top uppercase">panel asysty - 4 uchwyty</span>
                            <img src="/konfigurator/img/img_panel_asysty_certus_max.png" srcset="/konfigurator/img/img_panel_asysty_certus_max@2x.png" alt="img">
                            <div class="label-bottom"><span class="label-internal">Dopłata</span><span class="price">800 zł</span></div>
                            <button class="assyst-main-button assyst-place" data-price="800" data-name="Panel asysty do CERTUS Max">WYBIERAM<span class="assyst-span icon-icon_check"></span></button>
                        </div>
                        <div class="assyst-content-wrapper common certus-standard">
                            <span class="label-top uppercase">panel asysty - 3 uchwyty</span>
                            <img src="/konfigurator/img/img_panel_asysty_certus_standard.png" srcset="/konfigurator/img/img_panel_asysty_certus_standard_numbers@2x.png" alt="img">
                            <div class="label-bottom"><span class="label-internal">Dopłata</span><span class="price">600 zł</span></div>
                            <button class="assyst-main-button assyst-place" data-price="600" data-name="Panel asysty do CERTUS Standard">WYBIERAM<span class="assyst-span icon-icon_check"></span></button>
                        </div>
                        <div class="assyst-content-wrapper common exima-neo">
                            <span class="label-top uppercase">panel asysty - 4 uchwyty</span>
                            <img src="/konfigurator/img/img_panel_asysty_exima_neo.png" srcset="/konfigurator/img/img_panel_asysty_exima_neo@2x.png" alt="img">
                            <div class="label-bottom"><span class="label-internal"></span><span class="price"></span></div>
                            <button class="assyst-main-button assyst-place selected" data-standard="standard" data-price="0" data-name="Panel asysty do EXIMA Neo">WYBRANO<span class="assyst-span icon-icon_check"></span></button>
                        </div>
                        <div class="assyst-content-wrapper common exima-max">
                            <span class="label-top uppercase">panel asysty - 3 uchwyty</span>
                            <img src="/konfigurator/img/img_panel_asysty_exima_max.png" srcset="/konfigurator/img/img_panel_asysty_exima_max@2x.png" alt="img">
                            <div class="label-bottom"><span class="label-internal">Dopłata</span><span class="price">600 zł</span></div>
                            <button class="assyst-main-button assyst-place" data-price="600" data-name="Panel asysty do EXIMA Max">WYBIERAM<span class="assyst-span icon-icon_check"></span></button>
                        </div>
                        <div class="assyst-content-wrapper common exima-x1g">
                            <span class="label-top uppercase">panel asysty - 3 uchwyty</span>
                            <img src="/konfigurator/img/img_panel_asysty_exima_standard_x1g.png" srcset="/konfigurator/img/img_panel_asysty_exima_standard_x1g@2x.png" alt="img">
                            <div class="label-bottom"><span class="label-internal">Dopłata</span><span class="price">600 zł</span></div>
                            <button class="assyst-main-button assyst-place" data-price="600" data-name="Panel asysty do EXIMA x1g">WYBIERAM<span class="assyst-span icon-icon_check"></span></button>
                        </div>
                        <div class="assyst-content-wrapper common exima-x1d">
                            <span class="label-top uppercase">panel asysty - 3 uchwyty</span>
                            <img src="/konfigurator/img/img_panel_asysty_exima_standard_x1d.png" srcset="/konfigurator/img/img_panel_asysty_exima_standard_x1d@2x.png" alt="img">
                            <div class="label-bottom"><span class="label-internal">Dopłata</span><span class="price">600 zł</span></div>
                            <button class="assyst-main-button assyst-place" data-price="600" data-name="Panel asysty do EXIMA x1d">WYBIERAM<span class="assyst-span icon-icon_check"></span></button>
                        </div>
                    </div>
                    <div class="step-2 assyst-content-internal">
                        <div class="assyst-step2-content">
                            <img class="small-panel common certus-neo" src="/konfigurator/img/img_panel_asysty_certus_neo.png" srcset="/konfigurator/img/img_panel_asysty_certus_neo@2x.png" alt="img">
                            <img class="small-panel common certus-max" src="/konfigurator/img/img_panel_asysty_certus_max.png" srcset="/konfigurator/img/img_panel_asysty_certus_max@2x.png" alt="img">
                            <img class="small-panel common certus-standard" src="/konfigurator/img/img_panel_asysty_certus_standard.png" srcset="/konfigurator/img/img_panel_asysty_certus_standard_numbers@2x.png" alt="img">
                            <img class="small-panel common exima-neo" src="/konfigurator/img/img_panel_asysty_exima_neo.png" srcset="/konfigurator/img/img_panel_asysty_exima_neo@2x.png" alt="img">
                            <img class="small-panel common exima-max" src="/konfigurator/img/img_panel_asysty_exima_max.png" srcset="/konfigurator/img/img_panel_asysty_exima_max@2x.png" alt="img">
                            <img class="small-panel common exima-x1g" src="/konfigurator/img/img_panel_asysty_exima_standard_x1g.png" srcset="/konfigurator/img/img_panel_asysty_exima_standard_x1g@2x.png" alt="img">
                            <img class="small-panel common exima-x1d" src="/konfigurator/img/img_panel_asysty_exima_standard_x1d.png" srcset="/konfigurator/img/img_panel_asysty_exima_standard_x1d@2x.png" alt="img">
                            <div class="assyst-step2-row">
                                <div class="assyst-step2-card assyst-card1 panel-card-cover">
                                    <span class="icon-icon_check"></span>
                                    <p class="assyst-card">01</p>
                                    <p class="config-object panel-card-title"></p>
                                    <p class="config-object assyst-type"></p>
                                    <p class="config-object assyst-model"></p>
                                    <p class="assyst-link assyst-tab-1 ass1 button-change" data-target="assyst-card-1">ZMIEŃ</p>
                                </div>
                                <div class="assyst-step2-card assyst-card2 panel-card-cover">
                                    <span class="icon-icon_check"></span>
                                    <p class="assyst-card">02</p>
                                    <p class="config-object panel-card-title"></p>
                                    <p class="config-object assyst-type"></p>
                                    <p class="config-object assyst-model"></p>
                                    <p class="assyst-link assyst-tab-2 ass2 button-change" data-target="assyst-card-2">ZMIEŃ</p>
                                </div>
                                <div class="assyst-step2-card assyst-card3 panel-card-cover">
                                    <span class="icon-icon_check"></span>
                                    <p class="assyst-card">03</p>
                                    <p class="config-object panel-card-title"></p>
                                    <p class="config-object assyst-type"></p>
                                    <p class="config-object assyst-model"></p>
                                    <p class="assyst-link assyst-tab-3 ass3 button-change" data-target="assyst-card-3">ZMIEŃ</p>
                                </div>
                                <div class="assyst-step2-card assyst-special ass4">
                                    <p class="assyst-card">04</p>
                                    <p class="assyst-card-title">Domyślnie:</p>
                                    <p class="assyst-card-p">Ślinociąg</p>
                                </div>
                            </div>
                        </div>
                        <?php for($i=1;$i<4;$i++): ?>
                            <div class="assyst-card-<?php echo $i;?> assyst-tab assyst-tab-<?php echo $i;?> choose-assyst-product">
                                <div class="doctor-tab-cover">
                                <div class="tab1-top">
                                    <div class="tab1-top-left">
                                        <p class="tab1-cong">Konfigurujesz:</p>
                                        <p class="tab1-cong"><?php echo $i?>. miejsce w panelu asysty</p>
                                    </div>
                                    <?php if($i === 1):?>
                                        <div class="tab1-pagination">
                                            <span>0<?php echo $i?></span>
                                            <span class="pagination-circle"></span>
                                            <span class="pagination-circle"></span>
                                        </div>
                                    <?php elseif($i === 2):?>
                                        <div class="tab1-pagination">
                                            <span class="pagination-circle"></span>
                                            <span>0<?php echo $i?></span>
                                            <span class="pagination-circle"></span>
                                        </div>
                                    <?php elseif($i === 3):?>
                                        <div class="tab1-pagination">
                                            <span class="pagination-circle"></span>
                                            <span class="pagination-circle"></span>
                                            <span>0<?php echo $i?></span>
                                        </div>
                                    <?php endif;?>
                                </div>
                                <p class="tab1-text">Na tym miejscu możesz umieścić (wybierz):</p>
                                <div class="tab2-button-place assyst-type-buttons assyst-panel-tabs-list">
                                    <?php if($i === 1):?>
                                    <button id="assyst-ssak-tab-<?php echo $i; ?>" class="assyst-panel-choice tab2-button">Instalację ssaka</button>
                                    <?php endif; ?>
                                    <button id="assyst-piaskarka-tab-<?php echo $i; ?>" class="assyst-panel-choice tab2-button">Piaskarkę</button>
                                    <button id="assyst-strykawko-tab-<?php echo $i; ?>" class="assyst-panel-choice tab2-button">Strzykawko-dmuchawkę</button>
                                    <button id="assyst-lampa-tab-<?php echo $i; ?>" class="assyst-panel-choice tab2-button">Lampę polimeryzacyjną</button>
                                </div>
                                <?php if($i === 1):?>
                                <div id="assyst-ssak-tab-<?php echo $i; ?>" data-tab="assyst-ssak-tab-<?php echo $i; ?>" class="main-panel-wrapper assyst1-wrapper tab-content tab-last">
<!--                                    <div class="tab-content tab-last">-->
                                        <p class="tab1-text">Wybierz model:</p>
                                        <div class="checkbox-card statement-1">
                                            <div class="panel-checkbox-place"><input data-type="Instalację ssaka" data-name="AS 2000 M4" type="radio" data-stmt="statement-1" id="ssak1-tab-<?php echo $i; ?>" name="tab6-tab-<?php echo $i; ?>" data-price="1067" value="">
                                                <label for="ssak1-tab-<?php echo $i; ?>" class="panel-checkbox-div">AS 2000 M4</label>
                                            </div>
                                            <p class="panel-checkbox-p">Skaler pneumatyczny AS 2000 </p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">1 067 zł</p>
                                                <div class="info-icon-block" title="Skaler pneumatyczny, na złącze Midwest">
                                                    <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="checkbox-card statement-1">
                                            <div class="panel-checkbox-place"><input data-type="Instalację ssaka" data-name="AS 2000 B2" type="radio"  data-stmt="statement-1" id="ssak2-tab-<?php echo $i; ?>" name="tab6-tab-<?php echo $i; ?>" data-price="1067" value="">
                                                <label for="ssak2-tab-<?php echo $i; ?>" class="panel-checkbox-div">AS 2000 B2</label>
                                            </div>
                                            <p class="panel-checkbox-p">Skaler pneumatyczny AS 2000 </p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">1 067 zł</p>
                                                <div class="info-icon-block" title="Skaler pneumatyczny, na złącze Borden"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                            </div>
                                        </div>
                                        <div class="statement statement-1">
                                            <span class="attention-icon icon-icon_exclamation"></span>
                                            <p class="attention-p">Instalacja ssaka zajmuje 2 uchwyty na panelu asysty.</p>
                                        </div>
<!--                                    </div>-->
                                </div>
                                <?php endif; ?>
                                <div id="assyst-piaskarka-tab-<?php echo $i; ?>" data-tab="assyst-piaskarka-tab-<?php echo $i; ?>" class="main-panel-wrapper assyst1-wrapper tab-content tab-last">
                                    <p class="tab1-text">Wybierz model:</p>
<!--                                    <div class="assyst-piaskarka-block tab-content">-->
                                        <div class="checkbox-card statement-2">
                                            <div class="panel-checkbox-place"><input data-type="Piaskarka" type="radio" id="assyst-neo-ptl-p-tab-<?php echo $i; ?>" data-price="2875" name="tab6-tab-<?php echo $i; ?>" value="">
                                                <label for="assyst-neo-ptl-p-tab-<?php echo $i; ?>" class="panel-checkbox-div turn-szybko"> Prophy Mate NEO PTL-P </label>
                                            </div>
                                            <p class="panel-checkbox-p">Piaskarka do profilaktyki Prophy Mate NEO </p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">2 875 zł</p>
                                                <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                            </div>
                                        </div>
                                        <div class="checkbox-card">
                                            <div class="panel-checkbox-place"><input data-type="Piaskarka" type="radio" id="assyst-neo-m4-p-tab-<?php echo $i; ?>" data-price="2788" name="tab6-tab-<?php echo $i; ?>" value="">
                                                <label for="assyst-neo-m4-p-tab-<?php echo $i; ?>" class="panel-checkbox-div"> Prophy Mate NEO M4-P</label>
                                            </div>
                                            <p class="panel-checkbox-p">Piaskarka do profilaktyki Prophy Mate NEO </p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">2 788 zł</p>
                                                <div class="info-icon-block" title="Piaskarka na rękaw Midwest (kolor szary) - Tajwan"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                            </div>
                                        </div>
                                        <div class="checkbox-card statement-2">
                                            <div class="panel-checkbox-place"><input data-type="Piaskarka" type="radio" id="assyst-ptl-p-tab-<?php echo $i; ?>" data-price="3335" name="tab6-tab-<?php echo $i; ?>" value="">
                                                <label for="assyst-ptl-p-tab-<?php echo $i; ?>" class="panel-checkbox-div turn-szybko"> Perio Mate PTL-P</label>
                                            </div>
                                            <p class="panel-checkbox-p">Piaskarka do periodontologii Perio Mate </p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">3 335 zł</p>
                                                <div class="info-icon-block" title="Piaskarka do zabiegów perio na szybkozłączkę PTL-CL (NSK)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                            </div>
                                        </div>
                                        <div class="checkbox-card">
                                            <div class="panel-checkbox-place"><input data-type="Piaskarka" type="radio" id="assyst-m4-p-tab-<?php echo $i; ?>" data-price="3050" name="tab6-tab-<?php echo $i; ?>" value="">
                                                <label for="assyst-m4-p-tab-<?php echo $i; ?>" class="panel-checkbox-div"> Perio Mate M4-P </label>
                                            </div>
                                            <p class="panel-checkbox-p">Piaskarka do periodontologii Perio Mate </p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">3 050 zł</p>
                                                <div class="info-icon-block" title="Piaskarka do zabiegów perio na rękaw Midwest"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                            </div>
                                        </div>
<!--                                    </div>-->
                                    <div class="statement statement-2">
                                        <span class="attention-icon icon-icon_exclamation"></span>
                                        <p class="tur-attention-icon attention-p">Do tego modelu turbiny dołączana jest szybkozłączka PTL-CL-LED w cenie <span class="turbina-bold-price" style="color: #50515C;">830 zł</span></p>
                                    </div>
<!--                                    <div class="turbina-attention light-turbina turbina-att-1"> <span class="tur-attention-icon attention-icon icon-icon_exclamation"></span>-->
<!--                                        <p class="tur-attention-icon attention-p">Do tego modelu turbiny dołączana jest szybkozłączka PTL-CL-LED w cenie <span class="turbina-bold-price" style="color: #50515C;">830 zł</span></p>-->
<!--                                    </div>-->
                                </div>
                                <div id="assyst-strykawko-tab-<?php echo $i; ?>" data-tab="assyst-strykawko-tab-<?php echo $i; ?>" class="main-panel-wrapper assyst1-wrapper tab-content tab-last">
                                    <p class="tab1-text">Wybierz model:</p>
<!--                                    <div class="tab1-row tab-content">-->
                                        <div class="checkbox-card">
                                            <div class="panel-checkbox-place"><input data-type="Strykawko-dmuchawka" type="radio" id="assyst-dmuchawka-dci-tab-<?php echo $i; ?>" data-price="0" name="tab6-tab-<?php echo $i; ?>" value="">
                                                <label for="assyst-dmuchawka-dci-tab-<?php echo $i; ?>" class="panel-checkbox-div turn-szybko"> DMUCHAWKA DCI </label>
                                            </div>
                                            <p class="panel-checkbox-p">Dodatkowa dmuchawka 3-funkcyjna DCI na panelu asysty, kątowa lub prosta </p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">0 zł</p>
                                                <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                            </div>
                                        </div>
                                        <div class="checkbox-card">
                                            <div class="panel-checkbox-place"><input data-type="Strykawko-dmuchawka" type="radio" id="assyst-dmuchawka-luzani-mate-tab-<?php echo $i; ?>" data-price="900" name="tab6-tab-<?php echo $i; ?>" value="">
                                                <label for="assyst-dmuchawka-luzani-mate-tab-<?php echo $i; ?>" class="panel-checkbox-div turn-szybko">LUZANI MINI MATE </label>
                                            </div>
                                            <p class="panel-checkbox-p">Dmuchawka 3-funkcyjna </p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">900 zł</p>
                                                <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                            </div>
                                        </div>
                                        <div class="checkbox-card">
                                            <div class="panel-checkbox-place"><input data-type="Strykawko-dmuchawka" type="radio" id="assyst-dmuchawka-luzani-bright-tab-<?php echo $i; ?>" data-price="1650" name="tab6-tab-<?php echo $i; ?>" value="">
                                                <label for="assyst-dmuchawka-luzani-bright-tab-<?php echo $i; ?>" class="panel-checkbox-div turn-szybko">LUZANI MINI BRIGHT </label>
                                            </div>
                                            <p class="panel-checkbox-p"><span class="bold-text">Dmuchawka 6-funkcyjna zpodgrzewaniem i światłem </span></p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">1650 zł</p>
                                                <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                            </div>
                                        </div>
<!--                                    </div>-->
                                </div>
                                <div id="assyst-lampa-tab-<?php echo $i; ?>" data-tab="assyst-lampa-tab-<?php echo $i; ?>" class="main-panel-wrapper assyst1-wrapper assyst-bottom-button tab-content tab-last">
                                    <p class="tab1-text">Wybierz model:</p>
<!--                                    <div class="assyst-lampa-block tab-content">-->
                                        <div class="checkbox-card">
                                            <div class="panel-checkbox-place"><input data-type="Lampa" type="radio" id="assyst1-moon-tab-<?php echo $i; ?>" data-price="2300" name="tab6-tab-<?php echo $i; ?>" value="">
                                                <label for="assyst1-moon-tab-<?php echo $i; ?>" class="panel-checkbox-div"> MOON </label>
                                            </div>
                                            <p class="panel-lamp-p">TKD - Włochy</p>
                                            <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">2300 zł</p>
                                            </div>
                                        </div>
                                        <div class="checkbox-card">
                                            <div class="panel-checkbox-place"><input data-type="Lampa" type="radio" id="assyst1-ultralight-tab-<?php echo $i; ?>" data-price="1800" name="tab6-tab-<?php echo $i; ?>" value="">
                                                <label for="assyst1-ultralight-tab-<?php echo $i; ?>" class="panel-checkbox-div"> ULTRALIGHT </label>
                                            </div>
                                            <p class="panel-lamp-p">FINEVISION - Tajwan</p>
                                            <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">1800 zł</p>
                                            </div>
                                        </div>
                                        <div class="checkbox-card">
                                            <div class="panel-checkbox-place"><input data-type="Lampa" type="radio" id="assyst1-built-in-tab-<?php echo $i; ?>" data-price="700" name="tab6-tab-<?php echo $i; ?>" value="">
                                                <label for="assyst1-built-in-tab-<?php echo $i; ?>" class="panel-checkbox-div"> BUILT-IN C </label>
                                            </div>
                                            <p class="panel-lamp-p">WOODPECKER - Chiny</p>
                                            <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">700 zł</p>
                                            </div>
                                        </div>
                                </div>
<!--                                    </div>-->
                                </div>
                                <div class="tab<?php echo $i; ?>-bottom-accept">
                                    <button class="tab<?php echo $i; ?>-cancel btn-doctor-panel-cancel">ANULUJ</button>
                                    <button class="tab<?php echo $i; ?>-cancel btn-doctor-panel-accept">ZATWIERDŹ</button>
                                </div>
                            </div>
                        <?php endfor; ?>
<!--                        <div class="assyst-bottom-button">-->
<!--                            <button class="assyst-cancel">ANULUJ</button>-->
<!--                            <button class="assyst-accept">ZATWIERDŹ</button>-->
<!--                        </div>-->

                        <!--
                        <div class="assyst-card-1 assyst-tab1 choose-assyst-product">
                            <div class="tab1-top">
                                <div class="tab1-top-left">
                                    <p class="tab1-cong">Konfigurujesz:</p>
                                    <p class="tab1-cong">1. miejsce w panelu asysty</p>
                                </div>
                                <div class="tab1-pagination"><span>01</span> <span class="pagination-circle"></span> <span class="pagination-circle"></span> <span class="pagination-circle"></span></div>
                            </div>
                            <p class="tab1-text">Na tym miejscu możesz umieścić (wybierz):</p>
                            <div class="tab2-button-place assyst-type-buttons">
                                <button id="assyst-ssak" class="tab2-button">Instalację ssaka</button>
                                <button id="assyst-piaskarka" class="tab2-button">Piaskarkę</button>
                                <button id="assyst-strykawko" class="tab2-button">Strzykawko-dmuchawkę</button>
                                <button id="assyst-lampa" class="tab2-button">Lampę polimeryzacyjną</button>
                            </div>
                            <div id="assyst-ssak" class="assyst1-wrapper ">
                                <p class="tab1-text">Wybierz model:</p>
                                <div class="ssak-flex" style="display:flex">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Instalację ssaka" data-name="AS 2000 M4" type="radio" id="ssak1" name="ssak" data-price="1067" value=""> <label for="ssak1" class="panel-checkbox-div">AS 2000 M4</label></div>
                                        <p class="panel-checkbox-p">Skaler pneumatyczny AS 2000 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 067 zł</p>
                                            <div class="info-icon-block" title="Skaler pneumatyczny, na złącze Midwest">
                                                <img class="info-icon" src="/konfigurator/img/info.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Instalację ssaka" data-name="AS 2000 B2" type="radio" id="ssak2" name="ssak" data-price="1067" value=""> <label for="ssak2" class="panel-checkbox-div">AS 2000 B2</label></div>
                                        <p class="panel-checkbox-p">Skaler pneumatyczny AS 2000 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 067 zł</p>
                                            <div class="info-icon-block" title="Skaler pneumatyczny, na złącze Borden"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="attention-block"><span class="attention-icon icon-icon_exclamation"></span>
                                    <p class="attention-p">Instalacja ssaka zajmuje 2 uchwyty na panelu asysty.</p>
                                </div>
                            </div>
                            <div id="assyst-piaskarka" class="assyst1-wrapper">
                                <div class="assyst-piaskarka-block">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Piaskarka" type="radio" id="assyst-neo-ptl-p" data-price="2875" name="tab1-piaskarka" value="">
                                            <label for="assyst-neo-ptl-p" class="panel-checkbox-div turn-szybko"> Prophy Mate NEO PTL-P </label>
                                        </div>
                                        <p class="panel-checkbox-p">Piaskarka do profilaktyki Prophy Mate NEO </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 875 zł</p>
                                            <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Piaskarka" type="radio" id="assyst-neo-m4-p" data-price="2788" name="tab1-piaskarka" value="">
                                            <label for="assyst-neo-m4-p" class="panel-checkbox-div"> Prophy Mate NEO M4-P</label>
                                        </div>
                                        <p class="panel-checkbox-p">Piaskarka do profilaktyki Prophy Mate NEO </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 788 zł</p>
                                            <div class="info-icon-block" title="Piaskarka na rękaw Midwest (kolor szary) - Tajwan"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Piaskarka" type="radio" id="assyst-ptl-p" data-price="3335" name="tab1-piaskarka" value=""> <label for="assyst-ptl-p" class="panel-checkbox-div turn-szybko"> Perio Mate PTL-P</label></div>
                                        <p class="panel-checkbox-p">Piaskarka do periodontologii Perio Mate </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 335 zł</p>
                                            <div class="info-icon-block" title="Piaskarka do zabiegów perio na szybkozłączkę PTL-CL (NSK)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Piaskarka" type="radio" id="assyst-m4-p" data-price="3050" name="tab1-piaskarka" value=""> <label for="assyst-m4-p" class="panel-checkbox-div"> Perio Mate M4-P </label></div>
                                        <p class="panel-checkbox-p">Piaskarka do periodontologii Perio Mate </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 050 zł</p>
                                            <div class="info-icon-block" title="Piaskarka do zabiegów perio na rękaw Midwest"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="turbina-attention light-turbina turbina-att-1"> <span class="tur-attention-icon attention-icon icon-icon_exclamation"></span>
                                    <p class="tur-attention-icon attention-p">Do tego modelu turbiny dołączana jest szybkozłączka PTL-CL-LED w cenie <span class="turbina-bold-price" style="color: #50515C;">830 zł</span></p>
                                </div>
                            </div>
                            <div id="assyst-strykawko" class="assyst1-wrapper">
                                <p class="tab1-text">Wybierz model:</p>
                                <div class="tab1-row">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Strykawko-dmuchawka" type="radio" id="assyst-dmuchawka-dci" data-price="0" name="tab1-strykawko" value="">
                                            <label for="assyst-dmuchawka-dci" class="panel-checkbox-div turn-szybko"> DMUCHAWKA DCI </label>
                                        </div>
                                        <p class="panel-checkbox-p">Dodatkowa dmuchawka 3-funkcyjna DCI na panelu asysty, kątowa lub prosta </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">0 zł</p>
                                            <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Strykawko-dmuchawka" type="radio" id="assyst-dmuchawka-luzani-mate" data-price="900" name="tab1-strykawko" value="">
                                            <label for="assyst-dmuchawka-luzani-mate" class="panel-checkbox-div turn-szybko">LUZANI MINI MATE </label>
                                        </div>
                                        <p class="panel-checkbox-p">Dmuchawka 3-funkcyjna </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">900 zł</p>
                                            <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Strykawko-dmuchawka" type="radio" id="assyst-dmuchawka-luzani-bright" data-price="1650" name="tab1-strykawko" value="">
                                            <label for="assyst-dmuchawka-luzani-bright" class="panel-checkbox-div turn-szybko">LUZANI MINI BRIGHT </label>
                                        </div>
                                        <p class="panel-checkbox-p"><span class="bold-text">Dmuchawka 6-funkcyjna zpodgrzewaniem i światłem </span></p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1650 zł</p>
                                            <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="assyst-lampa" class="assyst1-wrapper">
                                <div class="assyst-lampa-block">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Lampa" type="radio" id="assyst1-moon" data-price="2300" name="assyst1-lampa" value=""> <label for="assyst1-moon" class="panel-checkbox-div"> MOON </label></div>
                                        <p class="panel-lamp-p">TKD - Włochy</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2300 zł</p>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Lampa" type="radio" id="assyst1-ultralight" data-price="1800" name="assyst1-lampa" value="">
                                            <label for="assyst1-ultralight" class="panel-checkbox-div"> ULTRALIGHT </label>
                                        </div>
                                        <p class="panel-lamp-p">FINEVISION - Tajwan</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1800 zł</p>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Lampa" type="radio" id="assyst1-built-in" data-price="700" name="assyst1-lampa" value=""> <label for="assyst1-built-in" class="panel-checkbox-div"> BUILT-IN C </label></div>
                                        <p class="panel-lamp-p">WOODPECKER - Chiny</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">700 zł</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="assyst-bottom-button">
                                <button class="assyst-cancel">ANULUJ</button>
                                <button class="assyst-accept">ZATWIERDŹ</button>
                            </div>
                        </div>
                        <div class="assyst-card-2 assyst-tab2 choose-assyst-product">
                            <div class="tab1-top">
                                <div class="tab1-top-left">
                                    <p class="tab1-cong">Konfigurujesz:</p>
                                    <p class="tab1-cong">1. miejsce w panelu asysty</p>
                                </div>
                                <div class="tab1-pagination"><span class="pagination-circle"></span> <span>02</span> <span class="pagination-circle"></span> <span class="pagination-circle"></span></div>
                            </div>
                            <p class="tab1-text">Na tym miejscu możesz umieścić (wybierz):</p>
                            <div class="tab2-button-place assyst-type-buttons">
                                <button id="assyst-piaskarka" class="tab2-button">Piaskarkę</button>
                                <button id="assyst-strykawko" class="tab2-button">Strzykawko-dmuchawkę</button>
                                <button id="assyst-lampa" class="tab2-button">Lampę polimeryzacyjną</button>
                            </div>
                            <div id="assyst-ssak" class="assyst1-wrapper">
                                <p class="tab1-text">Wybierz model:</p>
                                <div class="tab2-button-place">
                                    <button class="tab2-button">Instalacja ssaka do pompy suchej</button>
                                    <button class="tab2-button">Instalacja ssaka do pompy mokrej</button>
                                </div>
                                <div class="attention-block"><span class="attention-icon icon-icon_exclamation"></span>
                                    <p class="attention-p">Instalacja ssaka zajmuje 2 uchwyty na panelu asysty.</p>
                                </div>
                            </div>
                            <div id="assyst-strykawko" class="assyst1-wrapper">
                                <p class="tab1-text">Wybierz model:</p>
                                <div class="tab1-row">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Strykawko-dmuchawka" type="radio" id="assyst2-dmuchawka-dci" data-price="0" name="tab2-strykawko" value="">
                                            <label for="assyst2-dmuchawka-dci" class="panel-checkbox-div turn-szybko"> DMUCHAWKA DCI </label>
                                        </div>
                                        <p class="panel-checkbox-p">Dodatkowa dmuchawka 3-funkcyjna DCI na panelu asysty, kątowa lub prosta </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">0 zł</p>
                                            <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Strykawko-dmuchawka" type="radio" id="assyst2-dmuchawka-luzani-mate" data-price="900" name="tab2-strykawko" value="">
                                            <label for="assyst2-dmuchawka-luzani-mate" class="panel-checkbox-div turn-szybko">LUZANI MINI MATE </label>
                                        </div>
                                        <p class="panel-checkbox-p">Dmuchawka 3-funkcyjna </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">900 zł</p>
                                            <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Strykawko-dmuchawka" type="radio" id="assyst2-dmuchawka-luzani-bright" data-price="1650" name="tab2-strykawko" value="">
                                            <label for="assyst2-dmuchawka-luzani-bright" class="panel-checkbox-div turn-szybko">LUZANI MINI BRIGHT </label></div>
                                        <p class="panel-checkbox-p"><span class="bold-text">Dmuchawka 6-funkcyjna zpodgrzewaniem i światłem </span></p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1650 zł</p>
                                            <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="assyst-lampa" class="assyst1-wrapper">
                                <div class="assyst-lampa-block">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Lampa" type="radio" id="assyst2-moon" data-price="2300" name="assyst2-lampa" value=""> <label for="assyst2-moon" class="panel-checkbox-div"> MOON </label></div>
                                        <p class="panel-lamp-p">TKD - Włochy</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2300 zł</p>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Lampa" type="radio" id="assyst2-ultralight" data-price="1800" name="assyst2-lampa" value="">
                                            <label for="assyst2-ultralight" class="panel-checkbox-div"> ULTRALIGHT </label>
                                        </div>
                                        <p class="panel-lamp-p">FINEVISION - Tajwan</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1800 zł</p>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Lampa" type="radio" id="assyst2-built-in" data-price="700" name="assyst2-lampa" value=""> <label for="assyst2-built-in" class="panel-checkbox-div"> BUILT-IN C </label></div>
                                        <p class="panel-lamp-p">WOODPECKER - Chiny</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">700 zł</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="assyst-bottom-button">
                                <button class="assyst-cancel">ANULUJ</button>
                                <button class="assyst-accept">ZATWIERDŹ</button>
                            </div>
                        </div>
                        <div class="assyst-card-3 assyst-tab3 choose-assyst-product">
                            <div class="tab1-top">
                                <div class="tab1-top-left">
                                    <p class="tab1-cong">Konfigurujesz:</p>
                                    <p class="tab1-cong">1. miejsce w panelu asysty</p>
                                </div>
                                <div class="tab1-pagination"><span>01</span> <span class="pagination-circle"></span><span class="pagination-circle"></span> <span class="pagination-circle"></span></div>
                            </div>
                            <p class="tab1-text">Na tym miejscu możesz umieścić (wybierz):</p>
                            <div class="tab2-button-place assyst-type-buttons">
                                <button id="assyst-piaskarka" class="tab2-button">Piaskarkę</button>
                                <button id="assyst-strykawko" class="tab2-button">Strzykawko-dmuchawkę</button>
                                <button id="assyst-lampa" class="tab2-button">Lampę polimeryzacyjną</button>
                            </div>
                            <div id="assyst-ssak" class="assyst1-wrapper">
                                <p class="tab1-text">Wybierz model:</p>
                                <div class="tab2-button-place">
                                    <button class="tab2-button">Instalacja ssaka do pompy suchej</button>
                                    <button class="tab2-button">Instalacja ssaka do pompy mokrej</button>
                                </div>
                                <div class="attention-block"><span class="attention-icon icon-icon_exclamation"></span>
                                    <p class="attention-p">Instalacja ssaka zajmuje 2 uchwyty na panelu asysty.</p>
                                </div>
                            </div>
                            <div id="assyst-piaskarka" class="assyst1-wrapper">
                                <div class="assyst-piaskarka-block">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Piaskarka" type="radio" id="assyst3-neo-ptl-p" data-price="2875" name="tab1-piaskarka" value="">
                                            <label for="assyst3-neo-ptl-p" class="panel-checkbox-div turn-szybko"> Prophy Mate NEO PTL-P </label>
                                        </div>
                                        <p class="panel-checkbox-p">Piaskarka do profilaktyki Prophy Mate NEO </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 875 zł</p>
                                            <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Piaskarka" type="radio" id="assyst3-neo-m4-p" data-price="2788" name="tab1-piaskarka" value="">
                                            <label for="assyst3-neo-m4-p" class="panel-checkbox-div"> Prophy Mate NEO M4-P</label>
                                        </div>
                                        <p class="panel-checkbox-p">Piaskarka do profilaktyki Prophy Mate NEO </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 788 zł</p>
                                            <div class="info-icon-block" title="Piaskarka na rękaw Midwest (kolor szary) - Tajwan"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Piaskarka" type="radio" id="assyst3-ptl-p" data-price="3335" name="tab1-piaskarka" value=""> <label for="assyst3-ptl-p" class="panel-checkbox-div turn-szybko"> Perio Mate PTL-P</label></div>
                                        <p class="panel-checkbox-p">Piaskarka do periodontologii Perio Mate </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 335 zł</p>
                                            <div class="info-icon-block" title="Piaskarka do zabiegów perio na szybkozłączkę PTL-CL (NSK)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Piaskarka" type="radio" id="assyst3-m4-p" data-price="3050" name="tab1-piaskarka" value=""> <label for="assyst3-m4-p" class="panel-checkbox-div"> Perio Mate M4-P </label></div>
                                        <p class="panel-checkbox-p">Piaskarka do periodontologii Perio Mate </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 050 zł</p>
                                            <div class="info-icon-block" title="Piaskarka do zabiegów perio na rękaw Midwest"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="turbina-attention light-turbina turbina-att-1"> <span class="tur-attention-icon attention-icon icon-icon_exclamation"></span>
                                    <p class="tur-attention-icon attention-p">Do tego modelu turbiny dołączana jest szybkozłączka PTL-CL-LED w cenie <span class="turbina-bold-price" style="color: #50515C;">830 zł</span></p>
                                </div>
                            </div>
                            <div id="assyst-strykawko" class="assyst1-wrapper">
                                <p class="tab1-text">Wybierz model:</p>
                                <div class="tab1-row">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Strykawko-dmuchawka" type="radio" id="assyst3-dmuchawka-dci" data-price="0" name="tab3-strykawko" value="">
                                            <label for="assyst3-dmuchawka-dci" class="panel-checkbox-div turn-szybko"> DMUCHAWKA DCI </label></div>
                                        <p class="panel-checkbox-p">Dodatkowa dmuchawka 3-funkcyjna DCI na panelu asysty, kątowa lub prosta </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">0 zł</p>
                                            <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Strykawko-dmuchawka" type="radio" id="assyst3-dmuchawka-luzani-mate" data-price="900" name="tab3-strykawko" value="">
                                            <label for="assyst3-dmuchawka-luzani-mate" class="panel-checkbox-div turn-szybko">LUZANI MINI MATE </label></div>
                                        <p class="panel-checkbox-p">Dmuchawka 3-funkcyjna </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">900 zł</p>
                                            <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Strykawko-dmuchawka" type="radio" id="assyst3-dmuchawka-luzani-bright" data-price="1650" name="tab3-strykawko" value="">
                                            <label for="assyst3-dmuchawka-luzani-bright" class="panel-checkbox-div turn-szybko">LUZANI MINI BRIGHT </label></div>
                                        <p class="panel-checkbox-p"><span class="bold-text">Dmuchawka 6-funkcyjna zpodgrzewaniem i światłem </span></p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1650 zł</p>
                                            <div class="info-icon-block" title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img class="info-icon" src="/konfigurator/img/info.png" alt=""></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="assyst-lampa" class="assyst1-wrapper">
                                <div class="assyst-lampa-block">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Lampa" type="radio" id="assyst3-moon" data-price="2300" name="assyst3-lampa" value=""> <label for="assyst3-moon" class="panel-checkbox-div"> MOON </label></div>
                                        <p class="panel-lamp-p">TKD - Włochy</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2300 zł</p>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Lampa" type="radio" id="assyst3-ultralight" data-price="1800" name="assyst3-lampa" value="">
                                            <label for="assyst3-ultralight" class="panel-checkbox-div"> ULTRALIGHT </label>
                                        </div>
                                        <p class="panel-lamp-p">FINEVISION - Tajwan</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1800 zł</p>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input data-type="Lampa" type="radio" id="assyst3-built-in" data-price="700" name="assyst3-lampa" value=""> <label for="assyst3-built-in" class="panel-checkbox-div"> BUILT-IN C </label></div>
                                        <p class="panel-lamp-p">WOODPECKER - Chiny</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">700 zł</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="assyst-bottom-button">
                                <button class="assyst-cancel">ANULUJ</button>
                                <button class="assyst-accept">ZATWIERDŹ</button>
                            </div>
                        </div>
                        -->
                    </div>
                </div>
            </div>
        </section>
        <section id="tab7" class="tab-content hide">
            <div class="brand-choose-sidebar">
                <div class="brand-sidebar-wrapper ">
                    <div class="product-list">
                        <div id="fotel-additional" class="choosen-brand tab7-mikro-tab additional-product-tab1">
                            <p class="brand-name">FOTELIKI LEKARSKIE I PODKŁADKI</p>
                            <p class="brand-price"></p><span class="choosen-brand-sign fotel-span"></span>
                        </div>
                        <div class="additional-product-summary rogal-element">
                            <div class="additional-product-name">Rogal</div>
                            <div class="additional-product-amount">1 szt</div>
                            <span
                                    class="additional-product-close icon-icon_close_small"></span>
                        </div>
                        <div class="additional-product-summary siodlo-element">
                            <div class="additional-product-name">Siodlo</div>
                            <div class="additional-product-amount">1 szt</div>
                            <span
                                    class="additional-product-close icon-icon_close_small"></span>
                        </div>
                        <div id="kamery-additional" class="choosen-brand tab7-mikro-tab">
                            <p class="brand-name">KAMERY WEWNĄTRZUSTNE I MONITORY MEDYCZNE</p>
                            <p class="brand-price"></p><span class="choosen-brand-sign "></span>
                        </div>
                        <div class="additional-product-summary camera1">
                            <div class="additional-product-name">Neovo X-17</div>
                            <div class="additional-product-amount">1 szt</div>
                            <span
                                    class="additional-product-close icon-icon_close_small"></span>
                        </div>
                        <div class="additional-product-summary camera2">
                            <div class="additional-product-name">ADVANCE CAM</div>
                            <div class="additional-product-amount">1 szt</div>
                            <span
                                    class="additional-product-close icon-icon_close_small"></span>
                        </div>
                        <div id="kompressor-additional"
                             class="choosen-brand tab7-mikro-tab additional-product-tab2">
                            <p class="brand-name">KOMPRESORY</p>
                            <p class="brand-price"></p><span class="choosen-brand-sign kompresor-span"></span>
                        </div>
                        <div class="additional-product-summary kompressor1">
                            <div class="additional-product-name">DK-50Z-10</div>
                            <div class="additional-product-amount">1 szt</div>
                            <span
                                    class="additional-product-close icon-icon_close_small"></span>
                        </div>
                        <div class="additional-product-summary kompressor2">
                            <div class="additional-product-name">DÜRR TORNADO 70</div>
                            <div class="additional-product-amount">1 szt</div>
                            <span
                                    class="additional-product-close icon-icon_close_small"></span>
                        </div>
                        <div id="pompy-additional" class="choosen-brand tab7-mikro-tab">
                            <p class="brand-name">POMPY SSAKA</p>
                            <p class="brand-price"></p><span class="choosen-brand-sign "></span>
                        </div>
                        <div class="additional-product-summary pompa1">
                            <div class="additional-product-name">Mono-Jet</div>
                            <div class="additional-product-amount">1 szt</div>
                            <span
                                    class="additional-product-close icon-icon_close_small"></span>
                        </div>
                        <div class="additional-product-summary pompa2">
                            <div class="additional-product-name">Turbo-Jet</div>
                            <div class="additional-product-amount">1 szt</div>
                            <span
                                    class="additional-product-close icon-icon_close_small"></span>
                        </div>
                        <div class="additional-product-summary pompa3">
                            <div class="additional-product-name">VS 300 S</div>
                            <div class="additional-product-amount">1 szt</div>
                            <span
                                    class="additional-product-close icon-icon_close_small"></span>
                        </div>
                        <div class="additional-product-summary pompa4">
                            <div class="additional-product-name">UNI-JET 75 D30</div>
                            <div class="additional-product-amount">1 szt</div>
                            <span
                                    class="additional-product-close icon-icon_close_small"></span>
                        </div>
                    </div>
                    <div class="tab1-summary tab7-summ">
                        <div class="brand-price-summary">
                            <p class="brand-summary">Wyposażenie dodatkowe:</p>
                            <p class="price-summary"><span class="pr">0 zł</span></p>
                        </div>
                        <div class="prev-step-button">
                            <button class="step-back-button">WRÓĆ</button>
                            <span
                                    class="icon-icon_arrow_left"></span></div>
                        <div class="assyst-next-step">
                            <button
                                    class="assyst-next-button button-to-go nextStepActive">DALEJ
                            </button>
                            <span
                                    class="icon-icon_arrow_right"></span></div>
                    </div>
                </div>
            </div>
            <div class="main-content model-content">
                <div class="model-card-wrapper">
                    <div id="fotel-additional" class="seat-and-additional additional-tab">
                        <div class="model-card-cover">
                            <div class="model-card final-seat seat1">
                                <div class="model-over-hidden">
                                    <p class="model-name">ROGAL</p><img src="/konfigurator/img/img_ROGAL@2x.jpg" style="padding:40px 0" alt="">
                                    <p class="fotel-description fotel-description-1 ">Fotelik lekarski z podstawą
                                        chromowaną</p>
                                    <p class="additional-product-price">850 zł</p>
                                    <div class="additional-row-amount">
                                        <p class="amount-additional">Liczba sztuk:</p><input type="number" min="0"
                                                                                             step="1"
                                                                                             class="additional-number-input"
                                                                                             placeholder="0"/>
                                    </div>
                                </div>
                                <div class="dodatki-button">
                                    <button data-type="Dodatek" data-singe-price="850"
                                            data-price="" data-name="ROGAL"
                                            class="model-button seat-final">DODAJ<span></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="model-card-cover">
                            <div class="model-card final-seat seat2">
                                <div class="model-over-hidden">
                                    <p class="model-name">SIODŁO</p><img src="/konfigurator/img/img_SIODLO@2x.jpg" style="padding:40px 0" alt="">
                                    <p class="fotel-description fotel-description-2" placeholder="69">Fotelik lekarski z
                                        ergonomicznym siedziskiem</p>
                                    <p class="additional-product-price">900 zł</p>
                                    <div class="additional-row-amount">
                                        <p class="amount-additional">Liczba sztuk:</p><input data-type="" type="number"
                                                                                             min="0" step="1" max="10"
                                                                                             class="additional-number-input additO"
                                                                                             placeholder="0"/>
                                    </div>
                                </div>
                                <div class="dodatki-button">
                                    <button data-type="Dodatek" data-singe-price="900"
                                            data-price="" data-name="SIODŁO"
                                            class="model-button seat-final">DODAJ<span></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="kamery-additional" class="seat-and-additional additional-tab">
                        <div class="model-card-cover">
                            <div class="model-card final-seat seat1">
                                <div class="model-over-hidden">
                                    <p class="model-name">Neovo X-17</p><img src="/konfigurator/img/img_NEOVO X-17@2x.png"
                                                                             alt="">
                                    <p class="fotel-description fotel-description-1 ">Do Zmiany</p>
                                    <p class="additional-product-price">100 zł</p>
                                    <div class="additional-row-amount">
                                        <p class="amount-additional">Liczba sztuk:</p><input data-type="" type="number"
                                                                                             min="0" step="1"
                                                                                             class="additional-number-input"
                                                                                             placeholder="0"/>
                                    </div>
                                </div>
                                <div class="dodatki-button">
                                    <button data-type="Kamera" data-singe-price="100"
                                            data-price="" data-name="Neovo X-17"
                                            class="model-button cam1">DODAJ<span></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="model-card-cover">
                            <div class="model-card final-seat seat2">
                                <div class="model-over-hidden">
                                    <p class="model-name">ADVANCE CAM</p><img src="/konfigurator/img/img_ADVANCE CAM@2x.png"
                                                                              alt="">
                                    <p class="fotel-description fotel-description-2" placeholder="69">Do Zmiany</p>
                                    <p class="additional-product-price">100 zł</p>
                                    <div class="additional-row-amount">
                                        <p class="amount-additional">Liczba sztuk:</p><input data-type="" type="number"
                                                                                             min="0" step="1" max="10"
                                                                                             class="additional-number-input additO"
                                                                                             placeholder="0"/>
                                    </div>
                                </div>
                                <div class="dodatki-button">
                                    <button data-type="Monitor" data-singe-price="100"
                                            data-price="" data-name="ADVANCE CAM"
                                            class="model-button cam2">DODAJ<span></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="kompressor-additional" class="additional-product-tab3 kompressors-tab additional-tab">
                        <div class="fotel-card-cover">
                            <div class="model-card">
                                <div class="model-over-hidden">
                                    <p class="model-name">DK-50Z-10</p><img src="/konfigurator/img/img_DK-50Z-10.png"
                                                                            alt="">
                                    <p class="kompressor-description ">Kompresor bezolejowy w obudowie wygłuszającej</p>
                                    <p class="kompressor-additional">Wydajność 80 l./min. przy p.=0, zbiornik 10 l.</p>
                                    <p class="additional-product-price">5490 zł</p>
                                    <div class="additional-row-amount">
                                        <p class="amount-additional">Liczba sztuk:</p><input data-type="" type="number"
                                                                                             min="0" step="1"
                                                                                             class="additional-number-input"
                                                                                             placeholder="0"/>
                                    </div>
                                </div>
                                <div class="dodatki-button">
                                    <button data-type="Kompressor" data-singe-price="5490"
                                            data-price="" data-name="DK-50Z-10"
                                            class="model-button komp1">DODAJ<span></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="fotel-card-cover">
                            <div class="model-card">
                                <div class="model-over-hidden">
                                    <p class="model-name">DÜRR TORNADO 70</p><img
                                            src="/konfigurator/img/img_DÜRR-tornado.png"
                                            alt="">
                                    <p class="kompressor-description ">Kompresor bezolejowy w obudowie wygłuszającej</p>
                                    <p class="kompressor-additional">Wydajność 70 l./min., przy p.=0, zbiornik 20 l.</p>
                                    <p class="additional-product-price">5490 zł</p>
                                    <div class="additional-row-amount">
                                        <p class="amount-additional">Liczba sztuk:</p><input data-type="" type="number"
                                                                                             min="0" step="1" max="10"
                                                                                             class="additional-number-input"
                                                                                             placeholder="0"/>
                                    </div>
                                </div>
                                <div class="dodatki-button">
                                    <button data-type="Kompressor" data-singe-price="5490"
                                            data-price="" data-name="DÜRR TORNADO 70"
                                            class="model-button komp2">DODAJ<span></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="pompy-additional" class="seat-and-additional additional-tab">
                        <div class="model-card-cover">
                            <div class="model-card final-seat seat1">
                                <div class="model-over-hidden">
                                    <p class="model-name">Mono-Jet</p>
                                    <div class="pompy-foto" style="width: 200px; height:327px; margin: 35px 0 10px;">
                                    </div>
                                    <p class="fotel-description fotel-description-1 ">Ssak chirurgiczny z instalacją
                                        (Cattani - W</p>
                                    <p class="additional-product-price">5 800 zł</p>
                                    <div class="additional-row-amount">
                                        <p class="amount-additional">Liczba sztuk:</p><input data-type="" type="number"
                                                                                             min="0" step="1"
                                                                                             class="additional-number-input"
                                                                                             placeholder="0"/>
                                    </div>
                                </div>
                                <div class="dodatki-button">
                                    <button data-type="Pompa Ssaka" data-singe-price="5800"
                                            data-price="" data-name="Mono-Jet"
                                            class="model-button pomp1">DODAJ<span></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="model-card-cover">
                            <div class="model-card final-seat seat2">
                                <div class="model-over-hidden">
                                    <p class="model-name">Turbo-Jet</p>
                                    <div class="pompy-foto" style="width: 200px; height:327px; margin: 35px 0 10px;">
                                    </div>
                                    <p class="fotel-description fotel-description-2" placeholder="69">Ssak chirurgiczny
                                        z separatorem amalgamatu z instalacją (Cattani - Włochy)</p>
                                    <p class="additional-product-price">7 400 zł</p>
                                    <div class="additional-row-amount">
                                        <p class="amount-additional">Liczba sztuk:</p><input data-type="" type="number"
                                                                                             min="0" step="1" max="10"
                                                                                             class="additional-number-input additO"
                                                                                             placeholder="0"/>
                                    </div>
                                </div>
                                <div class="dodatki-button">
                                    <button data-type="Pompa Ssaka" data-singe-price="7400"
                                            data-price="" data-name="Turbo-Jet"
                                            class="model-button pomp2">DODAJ<span></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="model-card-cover">
                            <div class="model-card final-seat seat1">
                                <div class="model-over-hidden">
                                    <p class="model-name">VS 300 S</p>
                                    <div class="pompy-foto" style="width: 200px; height:327px; margin: 35px 0 10px;">
                                    </div>
                                    <p class="fotel-description fotel-description-1 ">Ssak chirurgiczny z instalacją
                                        (Dürr Dental - Niemcy)</p>
                                    <p class="additional-product-price">5 800 zł</p>
                                    <div class="additional-row-amount">
                                        <p class="amount-additional">Liczba sztuk:</p><input data-type="" type="number"
                                                                                             min="0" step="1"
                                                                                             class="additional-number-input"
                                                                                             placeholder="0"/>
                                    </div>
                                </div>
                                <div class="dodatki-button">
                                    <button data-type="Pompa Ssaka" data-singe-price="5800"
                                            data-price="" data-name="VS 300 S"
                                            class="model-button pomp3">DODAJ<span></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="model-card-cover">
                            <div class="model-card final-seat seat2">
                                <div class="model-over-hidden">
                                    <p class="model-name">UNI-JET 75 D30</p>
                                    <div class="pompy-foto" style="width: 200px; height:327px; margin: 35px 0 10px;">
                                    </div>
                                    <p class="fotel-description fotel-description-2" placeholder="69">Pompa ssaków,
                                        sucha (Cattani - Włochy)</p>
                                    <p class="additional-product-price">2 500 zł</p>
                                    <div class="additional-row-amount">
                                        <p class="amount-additional">Liczba sztuk:</p><input data-type="" type="number"
                                                                                             min="0" step="1" max="10"
                                                                                             class="additional-number-input additO"
                                                                                             placeholder="0"/>
                                    </div>
                                </div>
                                <div class="dodatki-button">
                                    <button data-type="Pompa Ssaka" data-singe-price="2500"
                                            data-price="" data-name="UNI-JET 75 D30"
                                            class="model-button pomp4">DODAJ<span></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="tab8" class="tab-content hide">
            <div class="tab-summary">


                <!-- <div class="summary-wrapper"
                        style="width:600px;margin:0 0 0 50px;height:850px;background-color:#fff;display:flex;flex-direction:column;position:relative;overflow-y:auto;padding-bottom:50px">

                        <div class="top-product-description"
                            style="font-size:13px;font-weight:600;display:flex;color:#32333B;margin-top:30px;padding-bottom:15px">
                            <div class="top-product" style="width:30%">Produkt</div>
                            <div class="top-version" style="width:calc(70% - 32px)">Wersja</div>
                            <div class="top-price" style="width:32px">Cena< /div>
                        </div>
                        <div class="product-summary-list" style="">
                            <div class="result"
                                style="font-size:13px;font-weight:600;list-style:19px;display:flex;color:#81828E;font-size:9px;padding:10px 0;border-bottom:1px solid #E4E5ED">
                                <div class="product" style="width:30%">CHLEN</div>
                                <div class="version" style="width:calc(70% - 42px)">OGOGO</div>
                                <div class="product-price"
                                    style="width:100px;color:#32333B;font-weight:600;text-align:end">10 grn</div>
                            </div>
                            <div class="info-result"
                                style="display:flex;justify-content:space-between;margin-top:17px;color:#32333B;font-weight:600;padding-bottom:100px">
                                <p class="price-brutto" style="font-size:11px">Podane ceny są cenami brutto.</p>
                                <p class="final-price" style="font-size:13px">Suma:<span class="price-numbers-up"
                                        style="font-size:16px;margin-left:15px">57 147 zł</span></p>
                            </div>
                             -->
                <div class="for-prinr-section" style="font-family: 'zeitung-micro',sans-serif;">
                    <p class="summary-top-title"
                       style="color:#32333B;font-size:20px;line-height:30px;font-weight:700;margin:40px 0 0 50px;">
                        <b>Konfiguracja unitu stomatologicznego</b></p>
                    <table id="result-table" style="text-align:left;margin:40px 0 0 50px;">
                        <thead>
                        <tr>
                            <th style="color:#32333B;padding-bottom:15px;width:30%; "><b>Produkt</b></th>
                            <th style="color:#32333B;padding-bottom:15px;width:50%; "><b>Wersja</b></th>
                            <th style="color:#32333B;padding-bottom:15px;width:20%;text-align: end; "><b>Cena</b></th>
                        </tr>
                        </thead>
                        <tbody style="font-weight:600;list-style:19px;color:#81828E;">

                        </tbody>
                        <tfoot>
                        <tr style="color: #32333B;">
                            <td style="height:40px; line-height: 40px; font-size: 10px;"><b>Podane ceny są cenami brutto.</b></td>
                            <td style="height:40px; line-height: 40px;"></td>
                            <td class="pdf-price" style="height:40px; line-height: 40px; text-align:end;font-weight:700"><b>Suma: 57 147 zł</b></td>
                        </tr>
                        </tfoot>
                    </table>


                    <!-- <div class="footer-info "
                                style="display:inline-block;height:134px; width:600px;margin:40px 0 0 50px;">
                                <div class=""
                                    style="width:200px;float:left;border-right:1px solid #E4E5ED;">
                                    <p class="" style="font-weight:600;font-size:9px;color:#32333B">
                                        Producent:</p><img src="/konfigurator/img/makromed.png" style="width:101px" alt="">
                                    <div class="" style="font-size:7px;color:#81828E">
                                        <p class="" style="font-size:7px;width:231px;line-height:12px">ul.
                                            Czechosłowacka 1</p>
                                        <p class="" style="font-size:7px;width:231px;line-height:12px">
                                            92-216 Łódź</p>
                                        <p class="" style="font-size:7px;width:231px;line-height:12px">
                                            tel.: +48 42 678 88 54</p>
                                        <p class="" style="font-size:7px;width:231px;line-height:12px">
                                            fax: +48 42 678 54 75</p>
                                        <p class="" style="font-size:7px;width:231px;line-height:12px">
                                            e-mail: biuro@makromed.com.pl</p>
                                    </div>
                                </div>
                                <div class=""
                                    style="float:left;width:300px">
                                    <p class="producent-info-pr" style="font-weight:600;font-size:9px;color:#32333B">
                                        Unity stomatologiczne:</p>
                                    <div class="products-img"
                                        style="padding:10px 20px 10px 0;border-right:1px solid #E4E5ED"> <img
                                            src="/konfigurator/img/certus-logo.png" alt=""> <img src="/konfigurator/img/exima-logo.png" alt=""
                                            style="padding:10px 20px 10px 0;border-right:1px solid #E4E5ED;padding-right:0;padding-left:20px">
                                    </div>
                                    <p class="contacts-title" style="font-size:7px;width:231px;line-height:12px">
                                        Niniejsza wycena nie jest ofertą w rozumieniu kodeksu
                                        cywilnego. Zastrzegamy sobie prawo do zmiany obecnych konfiguracji. Prosimy o
                                        przesłanie otrzymanej wyceny do weryfikacji.</p>
                                    <p class="producent-info-pr" style="font-weight:600;font-size:9px;color:#32333B">
                                        www.makromed.com.pl</p>
                                </div>
                            </div>
                        </div> -->
                </div>

                <div class="none-obj" style="display:none">
                    <div class="footer-pdf">
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <table style="width:100%;margin:40px 0 0 50px;">
                            <tbody>
                            <tr style="">
                                <td
                                        style="width:40%;   font-weight:700;    font-size:9px;color:#32333B;    height:30px">
                                    <b>Producent:</b></td>
                                <td
                                        style="width:60%;  font-weight:700;    font-size:9px;color:#32333B;    height:30px">
                                    <b>Unity stomatologiczne:</b></td>
                            </tr>
                            <tr style="">
                                <td style="width:40% ;height:40px">
                                    <img src="/konfigurator/img/makromed.png" style="width:101px" alt="">
                                </td>
                                <td style="width: 60%;height:40px ">
                                    <img src="/konfigurator/img/exima-logo.png" alt=""
                                         style="width:72px">
                                    <img src="/konfigurator/img/certus-logo.png" style="width:77px;padding-right:20px;"
                                         alt="">
                                </td>
                            </tr>
                            <tr style="">
                                <td style="width:40%;font-size:7px;line-height:12px">
                                    ul. Czechosłowacka 1<br>
                                    92-216 Łódź <br>
                                    tel.: +48 42 678 88 54 <br>
                                    fax: +48 42 678 54 75 <br>
                                    e-mail: biuro@makromed.com.pl
                                </td>
                                <td style="width: 60%;font-size:7px;line-height:12px;text-align:left;margin-left:-100px">
                                    Niniejsza wycena nie jest ofertą w rozumieniu kodeksu cywilnego.<br>
                                    Zastrzegamy sobie prawo do zmiany obecnych konfiguracji.<br>
                                    Prosimy o przesłanie otrzymanej wyceny do weryfikacji.<br> <b
                                            style="width:70%;  font-weight:700;    font-size:9px;color:#32333B; line-height:35px">www.makromed.com.pl</b>
                                </td>

                            <tr style="">
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="print-button-place" id="">
                    <form action="/wp-content/themes/makromed/konfigurator/print.php" method="post">
                        <button class="print-pdf-button">POBIERZ
                            PDF
                        </button>
                        <textarea style="display:none" name="print" id="textarea-for-print" cols="0"
                                  rows="0"></textarea>
                    </form>
                </div>
            </div>
        </section>
    </div>
    <div class="beta-version">Wersja Beta 1.1.15</div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
<!--<script src="/konfigurator/script/jquery-ui-1.9.2.custom.min.js"></script>-->
<script src="/konfigurator/script/jquery-ui-1.9.2.custom.min.js"></script>
<!--<script src="/konfigurator/script/jquery-ui.js"></script>-->
<script src="/konfigurator/script/jquery-ui.js"></script>
<!--<script type="text/javascript" src="/konfigurator/orbitvu12_basic/orbitvu.js"></script>-->
<script type="text/javascript" src="/konfigurator/orbitvu12_basic/orbitvu.js"></script>
<!--<script type="text/javascript" src="/konfigurator/orbitvu12_basic/swfobject.js"></script>-->
<script type="text/javascript" src="/konfigurator/orbitvu12_basic/swfobject.js"></script>
<!--<script src="/konfigurator/script/script.js"> </script>-->
<script src="/konfigurator/script/script.js"></script>
<script>
    $(function () {
        $(".info-icon-block").tooltip({
            position: {
                my: "bottom bottom",
                at: "top+15 top"
            }
        });
    });
</script>
</body>

</html>