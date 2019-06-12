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
//ANATOLII
?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Makromed</title>
    <!--<link rel="stylesheet" href="/wp-content/themes/makromed /css/main.css">-->

    <!--<link rel="stylesheet" href="/wp-content/themes/makromed /fonts/icomoon/style.css">-->
    <link rel="stylesheet" href=" /fonts/icomoon/style.css">
    <!--<link rel="stylesheet" href="/wp-content/themes/makromed /css/jquery-ui-1.9.2.custom.min.css">-->
    <link rel="stylesheet" href=" /css/jquery-ui-1.9.2.custom.min.css">
    <!--<link rel="stylesheet" href="/wp-content/themes/makromed /css/jquery-ui.structure.min.css">-->
    <link rel="stylesheet" href=" /css/jquery-ui.structure.min.css">
    <!--<link rel="stylesheet" href="/wp-content/themes/makromed /css/jquery-ui.theme.min.css">-->
    <link rel="stylesheet" href=" /css/jquery-ui.theme.min.css">
    <!-- <link rel="stylesheet" href=" /css/modal.min.css"> -->
    <link rel="stylesheet" href="https://use.typekit.net/bzk0zrk.css">
    <!--    <link rel="stylesheet" href=" /css/main.css">-->
    <link rel="stylesheet" href=" /css/main-pawel.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
</head>

<body>
    <div class="main">
        <header>
            <div class="logo-place"><a href=""><img src=" /img/makromed.png" alt="image"></a></div>
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
            <div class="close-button"><a href=""><img src=" /img/close-buttom.png" alt="image"></a></div>
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
                                <div class="product-card-top"><img src=" /img/certus-logo.png" alt="image"
                                        class="logo-img">
                                    <button id="seat-certus" class="see-360">ZOBACZ W 360°</button>
                                </div>
                                <div class="brand-img-place"><img src=" /img/img_marka_certus.png"
                                        id="seat-certus" class="brand-seat-click" alt="image"></div>
                                <div class="brand-text-wrapper">
                                    <p class="brand-text-title">Opis marki</p>
                                    <p class="brand-text-p">
                                        W unitach marki Certus specjalnie przeprojektowany fotel stomatologiczny Amicus
                                        jest integralnie połączony z blokiem spluwaczki, wzdłuż którego się porusza.
                                        Zaprojektowano je z myślą o maksymalnej wygodzie pacjenta i wyjątkowym komforcie
                                        pracy stomatologa. Pneumatyczne sterowanie unitem pozwala na niezawodną pracę,
                                        nie ograniczając możliwości wyposażania stanowiska pracy we wspomagające ją
                                        nowoczesne urządzenia elektroniczne.
                                        Unit Certus max odróżnia od standardowego Certusa m.in. nowy design klawiatury
                                        sterującej, ruchoma miska spluwaczki, nowy panel asysty, pozwalający na
                                        zamontowanie aż czterech różnych końcówek. Model NEO odruznia się od modelu Max
                                        nowy dizajn panelu lekarza i asysty, inna forma klawiatury sterującej oraz
                                        zintegrowany z obudowa pojemnik na chusteczki higieniczne.
                                        Fotel unitu CERTUS jest odchylany od bloku spluwaczki o 20 stopni, ułatwiając
                                        dostęp do pacjenta z obu stron. Posiada predefiniowane i edytowalne pamiÍci,
                                        wyposażony jest w wygodną pneumatyczną blokadę zagluwka.
                                        Blok spluwaczki modeli Max i NEO może być opcjonalnie polakierowany zgodnie z
                                        wybranym kolorem tapicerki fotela (dotyczy wybranych kolorów).
                                        Unity marki CERTUS wyposażamy w lampy oświetlające z szerokiej oferty włoskiej
                                        firmy G.COMM oraz w najnowocześniejszy osprzęt renomowanego japońskiego koncernu
                                        NSK. Na życzenie zamawiającego unity możemy wyposażyć w urządzenia innych marek.

                                    </p>
                                </div>
                                <div class="choose-button-place">
                                    <button data-price="29000" data-brand="certus" class="choose-seat seat-model "><span
                                            class="label-button">WYBIERAM</span><span
                                            class="choose-seat-sign certus-seat icon-icon_check"></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="brand-exima">
                            <div class="brand-exima-wrapper">
                                <div class="product-card-top"><img src=" /img/exima-logo@2x.png" alt="image"
                                        class="logo-img">
                                    <button id="seat-exima" class="see-360">ZOBACZ W 360°</button>
                                </div>
                                <div class="brand-img-place"><img src=" /img/img_marka_exima.png"
                                        class="brand-seat-click" alt="image"></div>
                                <div class="brand-text-wrapper">
                                    <p class="brand-text-title">Opis marki</p>
                                    <p class="brand-text-p">
                                        Unit EXIMA to stanowisko pracy stomatologa montowane do fotela
                                        stomatologicznego. Unity naszej produkcji wyposażamy w wytwarzany przez nas
                                        fotel stomatologiczny AMICUS. Takie zestawienie zapewnia niezawodnoúś działania
                                        dwóch kompatybilnych urządzeń, połączonych w zintegrowaną całość. Pneumatyczne
                                        sterowanie unitem pozwala na niezawodną pracę przez lata, nie ograniczając
                                        możliwości wyposażania stanowiska pracy w nowoczesne urządzenia elektroniczne.
                                        Unity marki EXIMA obecnie dostępne są w trzech wersjach: najnowszej NEO,
                                        popularnej i lubianej wersji Max oraz podstawowych: X1G i X1D (rękawy wiszące).
                                        Unity marki EXIMA wyposażamy w lampy ozwietlajace z szerokiej oferty włoskiej
                                        firmy G.COMM oraz w najnowocześniejszy osprzęt renomowanego japońskiego koncernu
                                        NSK. Na życzenie zamawiającego unity możemy wyposażyć w urządzenia innych marek
                                    </p>

                                    </p>
                                </div>
                                <div class="choose-button-place">
                                    <button data-price="22500" data-brand="exima" class="choose-seat seat-model"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="choose-seat-sign exima-seat icon-icon_check"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="seat-certus" class="seat-one-popup pop-up">
                    <div class="close-pop-up"><img src=" /img/close-buttom.png" alt="image"></div>
                    <div style="width: 650px; height: 650px;" id="CERTUS_ciemnoszary-ciemnoszary-1283136100"><a
                            href="http://www.adobe.com/go/getflashplayer"> <img
                                src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif"
                                alt="Get Adobe Flash player" /></a></div>
                </div>
                <div id="seat-exima" class="seat-two-popup pop-up">
                    <div class="close-pop-up"><img src=" /img/close-buttom.png" alt="image"></div>
                    <div style="width: 650px; height: 650px;" id="Exima_niebieski-1658327094"><a
                            href="http://www.adobe.com/go/getflashplayer"> <img
                                src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif"
                                alt="Get Adobe Flash player" /></a></div>
                </div>
            </section>
            <!--        invoice 1-->
            <section id="tab2" class="tab-content hide">
                <div class="brand-choose-sidebar">
                    <div class="brand-sidebar-wrapper">
                        <div class="product-list">
                            <div class="choosen-brand model-type model-tab2 Certus" data-brand="certus-neo">
                                <p class="brand-name">CERTUS NEO</p>
                                <p class="brand-price">od 34 000 zł</p><span
                                    class="choosen-brand-sign certus-neo icon-icon_check"></span>
                            </div>
                            <div class="choosen-brand model-type model-tab2 Certus" data-brand="certus-max">
                                <p class="brand-name">CERTUS MAX</p>
                                <p class="brand-price">od 31 000 zł</p><span
                                    class="choosen-brand-sign certus-max icon-icon_check"></span>
                            </div>
                            <div class="choosen-brand model-type model-tab2 Certus" data-brand="certus-standard">
                                <p class="brand-name">CERTUS STANDARD</p>
                                <p class="brand-price">od 29 000 zł</p><span
                                    class="choosen-brand-sign certus-standart icon-icon_check"></span>
                            </div>
                            <div class="choosen-brand model-type model-tab2 Exima" data-brand="exima-neo">
                                <p class="brand-name">EXIMA NEO</p>
                                <p class="brand-price">od 28 500 zł</p><span
                                    class="choosen-brand-sign exima-neo icon-icon_check"></span>
                            </div>
                            <div class="choosen-brand model-type model-tab2 Exima" data-brand="exima-max">
                                <p class="brand-name">EXIMA MAX</p>
                                <p class="brand-price">od 26 000 zł</p><span
                                    class="choosen-brand-sign exima-max icon-icon_check"></span>
                            </div>
                            <div class="choosen-brand model-type model-tab2 Exima" data-brand="exima-x1g">
                                <p class="brand-name">EXIMA X1G</p>
                                <p class="brand-price">od 23 500 zł</p><span
                                    class="choosen-brand-sign exima-x1g icon-icon_check"></span>
                            </div>
                            <div class="choosen-brand model-type model-tab2 Exima" data-brand="exima-x1d">
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
                                <span class="icon-icon_arrow_left"></span></div>
                            <div class="next-step-button">
                                <button class="step-2-button button-to-go">DALEJ</button>
                                <span class="icon-icon_arrow_right"></span></div>
                        </div>
                    </div>
                </div>
                <div class="main-content model-content">
                    <div class="model-card-wrapper">
                        <?php $invoice = 'invoice-row-1';?>
                        <div class="exima-list model-list">
                            <div class="model-card-cover certus">
                                <div class="model-card">
                                    <div class="model-over-hidden">
                                        <p class="model-name">CERTUS NEO</p><img
                                            src=" /img/img_panel_komplet_certus_neo@2x.png" alt="image">
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
                                        <button data-invoice-row="<?php echo $invoice;?>" data-price="34000"
                                            data-brand="certus-neo" data-name="CERTUS NEO"
                                            class="model-button model-type"><span
                                                class="label-button">WYBIERAM</span><span
                                                class="certus-neo icon-icon_check"></span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="model-card-cover certus">
                                <div class="model-card">
                                    <div class="model-over-hidden">
                                        <p class="model-name">CERTUS MAX</p><img
                                            src=" /img/img_panel_komplet_certus_max@2x.png" alt="image">
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
                                            <span class="li-category">Lampa oświetleniowa</span>
                                            <li>Bezcieniowa, diodowa POLARIS</li>
                                        </ul>
                                    </div>
                                    <div class="model-button-place">
                                        <button data-invoice-row="<?php echo $invoice;?>" data-price="31000"
                                            data-brand="certus-max" data-name="CERTUS MAX"
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
                                            src=" /img/img_panel_komplet_certus_standard@2x.png"
                                            alt="image">
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
                                            <span class="li-category">Lampa oświetleniowa</span>
                                            <li>Bezcieniowa, diodowa POLARIS</li>
                                        </ul>
                                    </div>
                                    <div class="model-button-place">
                                        <button data-invoice-row="<?php echo $invoice;?>" data-price="29000"
                                            data-brand="certus-standard" data-name="CERTUS STANDARD"
                                            class="model-button model-type"><span
                                                class="label-button">WYBIERAM</span><span
                                                class="certus-standart icon-icon_check"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="exima-list model-list">
                            <div class="model-card-cover exima">
                                <div class="model-card">
                                    <div class="model-over-hidden">
                                        <p class="model-name">EXIMA NEO</p><img
                                            src=" /img/img_panel_komplet_exima_neo@2x.png" alt="image">
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
                                        <button data-invoice-row="<?php echo $invoice;?>" data-price="28500"
                                            data-brand="exima-neo" data-name="EXIMA NEO"
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
                                            src=" /img/img_panel_komplet_exima_max@2x.png" alt="image">
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
                                        <button data-invoice-row="<?php echo $invoice;?>" data-price="26000"
                                            data-brand="exima-max" data-name="EXIMA MAX"
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
                                            src=" /img/img_panel_komplet_exima_standard_x1g@2x.png"
                                            alt="image">
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
                                            <li>Bezcieniowa, halogenowa ISA</li>
                                        </ul>
                                    </div>
                                    <div class="model-button-place">
                                        <button data-invoice-row="<?php echo $invoice;?>" data-price="23500"
                                            data-brand="exima-x1g" data-name="EXIMA XJG"
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
                                            src=" /img/img_panel_komplet_exima_standard_x1d@2x.png"
                                            alt="image">
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
                                        <button data-invoice-row="<?php echo $invoice;?>" data-price="22500"
                                            data-brand="exima-x1d" data-name="EXIMA X1D"
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
            <!--        invoice 3-->
            <section id="tab3" class="tab-content hide">
                <div class="brand-choose-sidebar color-seat-choose">
                    <div class="brand-sidebar-wrapper">
                        <div class="seat-color-wrapper">
                            <p class="sidebar-color-title"><span style="margin-right: 15px"
                                    class="bold-text">01</span>Kolor tapicerki fotela</p>
                            <div class="seat-colors">
                                <!--                            <div class="color-kind">-->
                                <!--                                <p class="color-id">F1</p>-->
                                <!--                                <p id="color1" data-color="1" class="color-class choose-the-color">BEŻOWY<span class="icon-icon_check"></span></p>-->
                                <!--                            </div>-->
                                <div class="color-kind common-additional">
                                    <p class="color-id">F4</p>
                                    <p id="color2" data-color="2" class="color-class choose-the-color no-such-color">
                                        POMARAŃCZOWY<span class="icon-icon_check"></span></p>
                                </div>
                                <div class="color-kind common-additional">
                                    <p class="color-id">F7</p>
                                    <p id="color3" data-color="3" class="color-class choose-the-color selected">
                                        BORDOWY<span class="icon-icon_check"></span></p>
                                </div>
                                <div class="color-kind common-additional">
                                    <p class="color-id">F9</p>
                                    <p id="color4" data-color="4" class="color-class choose-the-color">FIOLETOWY<span
                                            class="icon-icon_check"></span></p>
                                </div>
                                <div class="color-kind common-additional">
                                    <p class="color-id">F10</p>
                                    <p id="color5" data-color="5" class="color-class choose-the-color">GRANATOWY<span
                                            class="icon-icon_check"></span></p>
                                </div>
                                <div class="color-kind">
                                    <p class="color-id">F11</p>
                                    <p id="color6" data-color="6" class="color-class choose-the-color">JASNOZIELONY<span
                                            class="icon-icon_check"></span></p>
                                </div>
                                <div class="color-kind common-additional">
                                    <p class="color-id">F13</p>
                                    <p id="color7" data-color="7" class="color-class choose-the-color">CIEMNOŻÓŁTY<span
                                            class="icon-icon_check"></span></p>
                                </div>
                                <div class="color-kind common-additional">
                                    <p class="color-id">F14</p>
                                    <p id="color8" data-color="8" class="color-class choose-the-color no-such-color">
                                        NIEBIESKI<span class="icon-icon_check"></span></p>
                                </div>
                                <div class="color-kind common-additional">
                                    <p class="color-id">F15</p>
                                    <p id="color9" data-color="9" class="color-class choose-the-color">CIEMNOSZARY<span
                                            class="icon-icon_check"></span></p>
                                </div>
                                <div class="color-kind common-additional">
                                    <p class="color-id">F16</p>
                                    <p id="color10" data-color="10" class="color-class choose-the-color">JASNOSZARY<span
                                            class="icon-icon_check"></span></p>
                                </div>
                                <div class="color-kind">
                                    <p class="color-id">F17</p>
                                    <p id="color11" data-color="11" class="color-class choose-the-color no-such-color">
                                        MORSKI<span class="icon-icon_check"></span></p>
                                </div>
                                <div class="color-kind">
                                    <p class="color-id">F18</p>
                                    <p id="color12" data-color="12" class="color-class choose-the-color no-such-color">
                                        BRĄZOWY<span class="icon-icon_check"></span></p>
                                </div>
                            </div>
                            <div class="lacquer-type-wrapper certus-neo certus-max certus-standard additional-cost">
                                <p class="sidebar-color-title lacquer-part">
                                    <span style="margin-right: 15px" class="bold-text">02</span> Kolor bloku spluwaczki
                                </p>
                                <?php $invoice = 'invoice-row-3';?>
                                <input class="selected" type="radio" data-price="0" name="radio" id="1" value="value"
                                    checked><label for="1"
                                    class="lacquer-type-checkbox tapicerka-color color-white">lakier bloku spluwaczki w
                                    kolorze białym</label>
                                <input data-invoice-row="<?php echo $invoice;?>" data-price="300" type="radio"
                                    name="radio" id="2" value="value"><label for="2"
                                    class="lacquer-type-checkbox tapicerka-color color-color">lakier bloku spluwaczki w
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
                                <span class="icon-icon_arrow_left"></span>
                            </div>
                            <div class="next-step-button">
                                <button class="step-3-button button-to-go nextStepActive">DALEJ</button>
                                <span class="icon-icon_arrow_right"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-content color-content">
                    <div class="color-content-wrapper certus-colors">
                        <!--                    <div class="certus-brand-color block-colorified-seats">-->
                        <!--                        <img id="color1" class="color-img img-hidden" src=" /seat-color/c-red-w.jpg" alt="image">-->
                        <!--                        <img id="color2" class="color-img img-hidden" src=" /seat-color/c-brown-w.jpg" alt="image">-->
                        <!--                        <img id="color3" style="display:block" class="color-img img-hidden" src=" /seat-color/c-grey_w.jpg" alt="image">-->
                        <!--                        <img id="color4" class="color-img img-hidden" src=" /seat-color/c-light-grey-w.jpg" alt="image">-->
                        <!--                        <img id="color5" class="color-img img-hidden" src=" /seat-color/c-fiolet-w.jpg" alt="image">-->
                        <!--                        <img id="color6" class="color-img img-hidden" src=" /seat-color/c-blue-w.jpg" alt="image">-->
                        <!--                        <img id="color7" class="color-img img-hidden" src=" /seat-color/c-light-blue-w.jpg" alt="image">-->
                        <!--                        <img id="color8" class="color-img img-hidden" src=" /seat-color/c-sea-blue-w.jpg" alt="image">-->
                        <!--                        <img id="color9" class="color-img img-hidden" src=" /seat-color/c-orange-w.jpg" alt="image">-->
                        <!--                        <img id="color10" class="color-img img-hidden" src=" /seat-color/c-yellow-w.jpg" alt="image">-->
                        <!--                        <img id="color11" class="color-img img-hidden" src=" /seat-color/c-light-green-w.jpg" alt="image">-->
                        <!--                        <img id="color1_w" class="color-img img-hidden" src=" /seat-color/Cer_color_red.jpg" alt="image">-->
                        <!--                        <img id="color3_w" class="color-img img-hidden" src=" /seat-color/Cer_color_grey.jpg" alt="image">-->
                        <!--                        <img id="color4_w" class="color-img img-hidden" src=" /seat-color/Cer_color_light-grey.jpg" alt="image">-->
                        <!--                        <img id="color5_w" class="color-img img-hidden" src=" /seat-color/Cer_color_fiolet.jpg" alt="image">-->
                        <!--                        <img id="color6_w" class="color-img img-hidden" src=" /seat-color/Cer_color_granat.jpg" alt="image">-->
                        <!--                        <img id="color7_w" class="color-img img-hidden" src=" /seat-color/Cer_color_light_blue.jpg" alt="image">-->
                        <!--                        <img id="color9_w" class="color-img img-hidden" src=" /seat-color/Cer_color_orange.jpg" alt="image">-->
                        <!--                        <img id="color10_w" class="color-img img-hidden" src=" /seat-color/Cer_color_yellow.jpg" alt="image">-->
                        <!--                    </div>-->
                        <!--                    <div class="certus-brand-color block-colorified-seats certus-neo certus-max certus-standard"> NIE KASOWAC-->
                        <div class="certus-brand-color block-colorified-seats certus-neo">
                            <!--                        <img data-color="1" class="color-img" src=" /seat-color/certus/" alt="image">-->
                            <img data-color="2" class="color-img additional-cost"
                                src=" /seat-color/certus/c-orange-w.jpg" alt="image">
                            <img data-color="3" class="color-img selected additional-cost"
                                src=" /seat-color/certus/c-red-w.jpg" alt="image">
                            <img data-color="4" class="color-img additional-cost"
                                src=" /seat-color/certus/c-fiolet-w.jpg" alt="image">
                            <img data-color="5" class="color-img additional-cost"
                                src=" /seat-color/certus/c-blue-w.jpg" alt="image">
                            <img data-color="6" class="color-img"
                                src=" /seat-color/certus/c-light-green-w.jpg" alt="image">
                            <img data-color="7" class="color-img additional-cost"
                                src=" /seat-color/certus/c-yellow-w.jpg" alt="image">
                            <img data-color="8" class="color-img additional-cost"
                                src=" /seat-color/certus/c-light-blue-w.jpg" alt="image">
                            <img data-color="9" class="color-img additional-cost"
                                src=" /seat-color/certus/c-grey_w.jpg" alt="image">
                            <img data-color="10" class="color-img additional-cost"
                                src=" /seat-color/certus/c-light-grey-w.jpg" alt="image">
                            <img data-color="11" class="color-img"
                                src=" /seat-color/certus/c-sea-blue-w.jpg" alt="image">
                            <img data-color="12" class="color-img" src=" /seat-color/certus/c-brown.jpg"
                                alt="image">

                            <img data-color="2" class="color-img common-additional additional-img additional-cost"
                                src=" /seat-color/certus-s/c-orange.jpg" alt="image">
                            <img data-color="3"
                                class="color-img common-additional additional-img additional-cost selected"
                                src=" /seat-color/certus-s/c-red.jpg" alt="image">
                            <img data-color="4" class="color-img common-additional additional-img additional-cost"
                                src=" /seat-color/certus-s/c-fiolet.jpg" alt="image">
                            <img data-color="5" class="color-img common-additional additional-img additional-cost"
                                src=" /seat-color/certus-s/c-blue.jpg" alt="image">
                            <img data-color="7" class="color-img common-additional additional-img additional-cost"
                                src=" /seat-color/certus-s/c-yellow.jpg" alt="image">
                            <img data-color="8" class="color-img common-additional additional-img additional-cost"
                                src=" /seat-color/certus-s/c-light-blue.jpg" alt="image">
                            <img data-color="9" class="color-img common-additional additional-img additional-cost"
                                src=" /seat-color/certus-s/c-grey.jpg" alt="image">
                            <img data-color="10" class="color-img common-additional additional-img additional-cost"
                                src=" /seat-color/certus-s/c-light-grey.jpg" alt="image">
                        </div>

                        <div class="certus-brand-color block-colorified-seats certus-max">
                            <img class="color-img additional-cost selected"
                                src=" /img/img_panel_lekarza_certus_max.png"
                                srcset=" /img/img_panel_lekarza_certus_max@2x.png" alt="image">
                            <img class="color-img common-additional additional-img additional-cost selected"
                                src=" /img/img_panel_lekarza_certus_max.png"
                                srcset=" /img/img_panel_lekarza_certus_max@2x.png" alt="image">
                        </div>
                        <div class="certus-brand-color block-colorified-seats certus-standard">
                            <img class="color-img additional-cost selected"
                                src=" /img/img_panel_asysty_certus_standard.png"
                                srcset=" /img/img_panel_lekarza_certus_standard@2x.png" alt="image">
                            <img class="color-img common-additional additional-img additional-cost selected"
                                src=" /img/img_panel_asysty_certus_standard.png"
                                srcset=" /img/img_panel_lekarza_certus_standard@2x.png" alt="image">
                        </div>

                        <!--                    <div class="exima-brand-color block-colorified-seats exima-neo exima-max exima-x1d exima-x1g"> NIE KASOWAC-->
                        <div class="exima-brand-color block-colorified-seats exima-neo">
                            <!--                        <img data-color="1" class="color-img" src=" /seat-color/exima/" alt="image">-->
                            <img data-color="2" class="color-img" src=" /seat-color/exima/e-orange.jpg"
                                alt="image">
                            <img data-color="3" class="color-img selected"
                                src=" /seat-color/exima/e-red.jpg" alt="image">
                            <img data-color="4" class="color-img" src=" /seat-color/exima/e-fiolet.jpg"
                                alt="image">
                            <img data-color="5" class="color-img" src=" /seat-color/exima/e-blue.jpg"
                                alt="image">
                            <img data-color="6" class="color-img" src=" /seat-color/exima/e-light-green.jpg"
                                alt="image">
                            <img data-color="7" class="color-img" src=" /seat-color/exima/e-yellow.jpg"
                                alt="image">
                            <img data-color="8" class="color-img" src=" /seat-color/exima/e-light-blue.jpg"
                                alt="image">
                            <img data-color="9" class="color-img" src=" /seat-color/exima/e-grey.jpg"
                                alt="image">
                            <img data-color="10" class="color-img" src=" /seat-color/exima/e-light-grey.jpg"
                                alt="image">
                            <img data-color="11" class="color-img" src=" /seat-color/exima/e-sea-blue.jpg"
                                alt="image">
                            <img data-color="12" class="color-img" src=" /seat-color/exima/e-brown.jpg"
                                alt="image">
                        </div>

                        <div class="exima-brand-color block-colorified-seats exima-max">
                            <img class="color-img additional-cost selected"
                                src=" /img/img_panel_lekarza_exima_max.png"
                                srcset=" /img/img_panel_lekarza_exima_max@2x.png" alt="image">
                            <img class="color-img common-additional additional-img additional-cost selected"
                                src=" /img/img_panel_lekarza_exima_max.png"
                                srcset=" /img/img_panel_lekarza_exima_max@2x.png" alt="image">
                        </div>
                        <div class="exima-brand-color block-colorified-seats exima-x1d">
                            <img class="color-img additional-cost selected"
                                src=" /img/img_panel_lekarza_exima_standard_x1d.png"
                                srcset=" /img/img_panel_lekarza_exima_standard_x1d@2x.png" alt="image">
                            <img class="color-img common-additional additional-img additional-cost selected"
                                src=" /img/img_panel_lekarza_exima_standard_x1d.png"
                                srcset=" /img/img_panel_lekarza_exima_standard_x1d@2x.png" alt="image">
                        </div>
                        <div class="exima-brand-color block-colorified-seats exima-x1g">
                            <img class="color-img additional-cost selected"
                                src=" /img/img_panel_asysty_exima_standard_x1g.png"
                                srcset=" /img/img_panel_komplet_exima_standard_x1g@2x.png" alt="image">
                            <img class="color-img common-additional additional-img additional-cost selected"
                                src=" /img/img_panel_asysty_exima_standard_x1g.png"
                                srcset=" /img/img_panel_komplet_exima_standard_x1g@2x.png" alt="image">
                        </div>
                        <!--                    <div class="model-color-place"></div>-->
                        <div class="choose-color">
                            <!--                        <div data-color="1" class="color-seat choose-the-color color1">-->
                            <!--                            <span class="checkbox-color icon-icon_check"></span>-->
                            <!--                        </div>-->
                            <div data-color="2" class="color-seat choose-the-color color2 common-additional">
                                <span class="checkbox-color icon-icon_check"></span>
                            </div>
                            <div data-color="3" class="color-seat color3 choose-the-color common-additional selected">
                                <span class="checkbox-color icon-icon_check"></span>
                            </div>
                            <div data-color="4" class="color-seat color4 choose-the-color common-additional">
                                <span class="checkbox-color icon-icon_check"></span>
                            </div>
                            <div data-color="5" class="color-seat color5 choose-the-color common-additional">
                                <span class="checkbox-color icon-icon_check"></span>
                            </div>
                            <div data-color="6" class="color-seat color6 choose-the-color">
                                <span class="checkbox-color icon-icon_check"></span>
                            </div>
                            <div data-color="7" class="color-seat color7 choose-the-color common-additional">
                                <span class="checkbox-color icon-icon_check"></span>
                            </div>
                            <div data-color="8"
                                class="color-seat color8 choose-the-color common-additional no-such-color">
                                <span class="checkbox-color icon-icon_check"></span>
                            </div>
                            <div data-color="9" class="color-seat color9 choose-the-color common-additional">
                                <span class="checkbox-color icon-icon_check"></span>
                            </div>
                            <div data-color="10" class="color-seat color10 choose-the-color common-additional">
                                <span class="checkbox-color icon-icon_check"></span>
                            </div>
                            <div data-color="11" class="color-seat color11 choose-the-color no-such-color">
                                <span class="checkbox-color icon-icon_check"></span>
                            </div>
                            <div data-color="12" class="color-seat color12 choose-the-color no-such-color">
                                <span class="checkbox-color icon-icon_check"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="color-pop-up" class="pop-up">
                    <div class="close-pop-up"><img src=" /img/close-buttom.png" alt="image"></div>
                    <div style="width: 650px; height: 650px;" class="color-div-popup" id="pop-up-color">
                        <a href="http://www.adobe.com/go/getflashplayer">
                            <img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif"
                                alt="Get Adobe Flash player" />
                        </a>
                    </div>
                </div>
            </section>
            <!--        invoice 4-->
            <section id="tab4" class="tab-content hide">
                <?php $invoice = 'invoice-row-4';?>
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
                                <p class="brand-price">Dopłata: 400 zł</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                            </li>
                            <li class="choosen-brand lamp-type" data-type="lamp4">
                                <p class="brand-name">BEZCIENIOWA DIODOWA IRIS Z WBUDOWANĄ KAMERĄ</p>
                                <p class="brand-price">Dopłata 21 100 zł</p><span
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
                                <p class="brand-price">Dopłata: 400 zł</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                            </li>
                            <li class="choosen-brand lamp-type" data-type="lamp4">
                                <p class="brand-name">BEZCIENIOWA DIODOWA IRIS Z WBUDOWANĄ KAMERĄ</p>
                                <p class="brand-price">Dopłata 21 100 zł</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                            </li>
                        </ul>
                        <ul class="product-list exima-x1g exima-x1d">
                            <li class="choosen-brand lamp-type" data-type="lamp1">
                                <p class="brand-name">BEZCIENIOWA DIODOWA POLARIS</p>
                                <p class="brand-price">Dopłata: 1 700 zł</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                            </li>
                            <li class="choosen-brand lamp-type selected" data-type="lamp2" data-standard="standard">
                                <p class="brand-name">BEZCIENIOWA HALOGENOWA ISA</p>
                                <p class="brand-price">Standardowo w zestawie</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                            </li>
                            <li class="choosen-brand lamp-type" data-type="lamp3">
                                <p class="brand-name">BEZCIENIOWA DIODOWA POLARIS SENSOMATIC</p>
                                <p class="brand-price">Dopłata: 2 100 zł</p><span
                                    class="choosen-brand-sign icon-icon_check"></span>
                            </li>
                            <li class="choosen-brand lamp-type" data-type="lamp4">
                                <p class="brand-name">BEZCIENIOWA DIODOWA IRIS Z WBUDOWANĄ KAMERĄ</p>
                                <p class="brand-price">Dopłata 22 800 zł</p><span
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
                                    <?php $dataName = 'BEZCIENIOWA DIODOWA POLARIS' ?>
                                    <p class="lamp-name"><?php echo $dataName;?></p><img
                                        src=" /img/img_lampa_polaris.png" alt="image">
                                    <p class="lamp-description">Opis modelu</p>
                                    <p class="lamp-scroll-text"> • Źródło światła - 10 diod LED <br>• Żywotność diod LED
                                        ok
                                        50.000 godzin pracy<br>• Bardzo niski pobór energii elektrycznej<br>• Nieznaczna
                                        emisja ciepła<br>• Brak układu chłodzenia eliminuje powstawanie hałasu<br>•
                                        Regulacja intensywności strumienia światław zakresie: od 8.000 do 35.000
                                        lux<br>•
                                        Płynna regulacja temperatury koloru światław zakresie: od 4.200 do 6.000 K<br>•
                                        Index odwzorowania kolorów (CRI): >85<br>• Nie generuje promieni UV - brak
                                        fotopolimeryzacji<br>• Szybkorozłączne uchwyty (możliwość sterylizacji)<br></p>
                                </div>
                                <div class="lamp-button-div certus-neo certus-max certus-standard">
                                    <div class="lamp-button-row">
                                        <span class="lamp-price lamp-type">Standard</span><span
                                            class="icon-icon_check"><span class="lamp-additional-price"></span>
                                    </div>
                                    <button data-invoice-row="<?php echo $invoice;?>"
                                        data-name="<?php echo $dataName;?>" data-price="0"
                                        class="lamp-button lamp-type selected" data-type="lamp1"
                                        data-standard="standard"><span class="label-button">WYBRANO</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                                </div>
                                <div class="lamp-button-div exima-neo exima-max">
                                    <div class="lamp-button-row">
                                        <span class="lamp-price lamp-type">Standard</span><span
                                            class="icon-icon_check"><span class="lamp-additional-price"></span>
                                    </div>
                                    <button data-invoice-row="<?php echo $invoice;?>"
                                        data-name="<?php echo $dataName;?>" data-price="0"
                                        class="lamp-button lamp-type selected" data-type="lamp1"
                                        data-standard="standard"><span class="label-button">WYBRANO</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                                </div>
                                <div class="lamp-button-div exima-x1g exima-x1d">
                                    <div class="lamp-button-row">
                                        <span class="lamp-price lamp-type">Dopłata</span><span
                                            class="lamp-additional-price">1 700 zł</span>
                                    </div>
                                    <button data-invoice-row="<?php echo $invoice;?>"
                                        data-name="<?php echo $dataName;?>" data-price="1700"
                                        class="lamp-button lamp-type" data-type="lamp1"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="lamp-card-cover">
                            <div class="lamp-card">
                                <div class="model-over-hidden">
                                    <?php $dataName = 'BEZCIENIOWA HALOGENOWA ISA' ?>
                                    <p class="lamp-name"><?php echo $dataName;?></p><img
                                        src=" /img/img_lampa_halogenowa_isa.png" alt="image">
                                    <p class="lamp-description">Opis modelu</p>
                                    <p class="lamp-scroll-text short-scroll"> • Dwustopniowa regulacja natężenia
                                        światła:17.000 i 22.000 lux <br>• Temperatura koloru światła: 5.000 K<br>• Index
                                        odwzorowania kolorów (CRI): >90<br>•Szybkorozłączne uchwyty (możliwość
                                        sterylizacji)<br></p>
                                </div>
                                <div class="lamp-button-div certus-neo certus-max certus-standard">
                                    <div class="lamp-button-row">
                                        <span class="lamp-price lamp-type">Zmiana bez dopłaty</span><span
                                            class="lamp-additional-price"></span>
                                    </div>
                                    <button data-invoice-row="<?php echo $invoice;?>"
                                        data-name="<?php echo $dataName;?>" data-price="0" class="lamp-button lamp-type"
                                        data-type="lamp2"><span class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                                </div>
                                <div class="lamp-button-div exima-neo exima-max">
                                    <div class="lamp-button-row">
                                        <span class="lamp-price lamp-type">Zmiana bez dopłaty</span><span
                                            class="lamp-additional-price"></span>
                                    </div>
                                    <button data-invoice-row="<?php echo $invoice;?>"
                                        data-name="<?php echo $dataName;?>" data-price="0" class="lamp-button lamp-type"
                                        data-type="lamp2"><span class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                                </div>
                                <div class="lamp-button-div exima-x1g exima-x1d">
                                    <div class="lamp-button-row">
                                        <span class="lamp-price lamp-type">Standard</span><span
                                            class="icon-icon_check"><span class="lamp-additional-price"></span>
                                    </div>
                                    <button data-invoice-row="<?php echo $invoice;?>"
                                        data-name="<?php echo $dataName;?>" data-price="0"
                                        class="lamp-button lamp-type standard" data-type="lamp2"
                                        data-standard="standard"><span class="label-button">WYBRANO</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="lamp-card-cover">
                            <div class="lamp-card">
                                <div class="model-over-hidden">
                                    <?php $dataName = 'BEZCIENIOWA DIODOWA POLARIS SENSOMATIC' ?>
                                    <p class="lamp-name"><?php echo $dataName;?></p><img
                                        src=" /img/img_lampa_polaris_sensomatic.png" alt="image">
                                    <p class="lamp-description">Opis modelu</p>
                                    <p class="lamp-scroll-text"> • Źródło światła - 10 diod LED <br>• Żywotność diod LED
                                        ok
                                        50.000 godzin pracy<br>• Bardzo niski pobór energii elektrycznej<br>• Nieznaczna
                                        emisja ciepła<br>• Brak układu chłodzenia eliminuje powstawanie hałasu<br>•
                                        Regulacja intensywności strumienia światław zakresie: od 8.000 do 35.000
                                        lux<br>•
                                        Płynna regulacja temperatury koloru światław zakresie: od 4.200 do 6.000 K<br>•
                                        Index odwzorowania kolorów (CRI): >85<br>• Nie generuje promieni UV - brak
                                        fotopolimeryzacji<br>• Szybkorozłączne uchwyty (możliwość sterylizacji)<br></p>
                                </div>
                                <div class="lamp-button-div certus-neo certus-max certus-standard">
                                    <div class="lamp-button-row">
                                        <span class="lamp-price lamp-type">Dopłata</span><span
                                            class="lamp-additional-price">400 zl</span>
                                    </div>
                                    <button data-invoice-row="<?php echo $invoice;?>"
                                        data-name="<?php echo $dataName;?>" data-price="400"
                                        class="lamp-button lamp-type" data-type="lamp3"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                                </div>
                                <div class="lamp-button-div exima-neo exima-max">
                                    <div class="lamp-button-row">
                                        <span class="lamp-price lamp-type">Dopłata</span><span
                                            class="lamp-additional-price">400 zl</span>
                                    </div>
                                    <button data-invoice-row="<?php echo $invoice;?>"
                                        data-name="<?php echo $dataName;?>" data-price="400"
                                        class="lamp-button lamp-type" data-type="lamp3"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                                </div>
                                <div class="lamp-button-div exima-x1g exima-x1d">
                                    <div class="lamp-button-row">
                                        <span class="lamp-price lamp-type">Dopłata</span><span
                                            class="lamp-additional-price">2 100 zl</span>
                                    </div>
                                    <button data-invoice-row="<?php echo $invoice;?>"
                                        data-name="<?php echo $dataName;?>" data-price="2100"
                                        class="lamp-button lamp-type" data-type="lamp3"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="lamp-card-cover">
                            <div class="lamp-card">
                                <div class="model-over-hidden">
                                    <?php $dataName = 'BEZCIENIOWA DIODOWA IRIS Z WBUDOWANĄ KAMERĄ' ?>
                                    <p class="lamp-name"><?php echo $dataName;?></p><img
                                        src=" /img/img_lampa_z_kamera.png" alt="image">
                                    <p class="lamp-description">Opis modelu</p>
                                    <p class="lamp-scroll-text"> • Źródło światła - 8 diod LED o bardzo niskim
                                        poborem energii elektrycznej i nieznacznej emisji ciepła <br>• Żywotność diod
                                        LED
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
                                        iOS dostępny na tablet iPad - do obsługi kamery i lampy<br>• Szybkorozłączne
                                        uchwyty
                                        (możliwość
                                        sterylizacji)<br>
                                    </p>
                                </div>
                                <div class="lamp-button-div certus-neo certus-max certus-standard">
                                    <div class="lamp-button-row">
                                        <span class="lamp-price lamp-type">Dopłata</span><span
                                            class="lamp-additional-price">21 000 zl</span>
                                    </div>
                                    <button data-invoice-row="<?php echo $invoice;?>"
                                        data-name="<?php echo $dataName;?>" data-price="21000" data-type="lamp4"
                                        class="lamp-button lamp-type"><span class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                                </div>
                                <div class="lamp-button-div exima-neo exima-max">
                                    <div class="lamp-button-row">
                                        <span class="lamp-price lamp-type">Dopłata</span><span
                                            class="lamp-additional-price">21 000 zl</span>
                                    </div>
                                    <button data-invoice-row="<?php echo $invoice;?>"
                                        data-name="<?php echo $dataName;?>" data-price="21000" data-type="lamp4"
                                        class="lamp-button lamp-type"><span class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                                </div>
                                <div class="lamp-button-div exima-x1g exima-x1d">
                                    <div class="lamp-button-row">
                                        <span class="lamp-price lamp-type">Dopłata</span><span
                                            class="lamp-additional-price">22 800 zl</span>
                                    </div>
                                    <button data-invoice-row="<?php echo $invoice;?>"
                                        data-name="<?php echo $dataName;?>" data-price="22800" data-type="lamp4"
                                        class="lamp-button lamp-type"><span class="label-button">WYBIERAM</span><span
                                            class="lamp-neo icon-icon_check"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--        invoice 5,6,7,8,9-->
            <section id="tab5" class="tab-content hide">
                <div class="brand-choose-sidebar">
                    <div class="brand-sidebar-wrapper">
                        <div class="product-list clickless-zone">
                            <div class="choosen-brand model-type" data-label="doctor-tab-1">
                                <p class="brand-name">1. MIEJSCE W PANELU</p>
                                <p class="brand-price panel-result-1 selected-equipment" data-default="Dmuchawka DCI">
                                </p>
                                <span class="choosen-brand-sign icon-icon_loading"></span>
                                <span class="choosen-brand-sign icon-icon_check"></span>
                            </div>
                            <div class="choosen-brand model-type" data-label="doctor-tab-2">
                                <p class="brand-name">2. MIEJSCE W PANELU</p>
                                <p class="brand-price panel-result-2 selected-equipment"
                                    data-default="Konfiguracja domyślna"></p>
                                <span class="choosen-brand-sign icon-icon_loading"></span>
                                <span class="choosen-brand-sign icon-icon_check"></span>
                            </div>
                            <div class="choosen-brand model-type" data-label="doctor-tab-3">
                                <p class="brand-name">3. MIEJSCE W PANELU</p>
                                <p class="brand-price panel-result-3 selected-equipment"
                                    data-default="Konfiguracja domyślna"></p>
                                <span class="choosen-brand-sign icon-icon_loading"></span>
                                <span class="choosen-brand-sign icon-icon_check"></span>
                            </div>
                            <div class="choosen-brand model-type" data-label="doctor-tab-4">
                                <p class="brand-name">4. MIEJSCE W PANELU</p>
                                <p class="brand-price panel-result-4 selected-equipment"
                                    data-default="Konfiguracja domyślna"></p>
                                <span class="choosen-brand-sign icon-icon_loading"></span>
                                <span class="choosen-brand-sign icon-icon_check"></span>
                            </div>
                            <div class="choosen-brand model-type" data-label="doctor-tab-5">
                                <p class="brand-name">5. MIEJSCE W PANELU</p>
                                <p class="brand-price panel-result-5 selected-equipment"
                                    data-default="Konfiguracja domyślna"></p>
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
                            <img class="doctor-panel-img small-panel common certus-neo" alt="img"
                                src=" /img/img_panel_lekarza_certus_neo.png"
                                srcset=" /img/img_panel_lekarza_certus_neo@2x.png">
                            <img class="doctor-panel-img small-panel common certus-max" alt="img"
                                src=" /img/img_panel_lekarza_certus_max.png"
                                srcset=" /img/img_panel_lekarza_certus_max@2x.png">
                            <img class="doctor-panel-img small-panel common certus-standard" alt="img"
                                src=" /img/img_panel_lekarza_certus_standard.png"
                                srcset=" /img/img_panel_lekarza_certus_standard@2x.png">
                            <img class="doctor-panel-img small-panel common exima-neo" alt="img"
                                src=" /img/img_panel_lekarza_exima_neo.png"
                                srcset=" /img/img_panel_lekarza_exima_neo@2x.png">
                            <img class="doctor-panel-img small-panel common exima-max" alt="img"
                                src=" /img/img_panel_lekarza_exima_max.png"
                                srcset=" /img/img_panel_lekarza_exima_max@2x.png">
                            <img class="doctor-panel-img small-panel common exima-x1g" alt="img"
                                src=" /img/img_panel_lekarza_exima_standard_x1g@2x.png"
                                srcset=" /img/img_panel_komplet_exima_standard_x1g@2x.png">
                            <img class="doctor-panel-img small-panel common exima-x1d" alt="img"
                                src=" /img/img_panel_lekarza_exima_standard_x1d.png"
                                srcset=" /img/img_panel_lekarza_exima_standard_x1d@2x.png">
                        </div>
                        <div class="doctor-panel-row">
                            <div class="panel-card-cover d-panel1">
                                <span class="icon-icon_check"></span>
                                <div class="doctor-panel-card"><span class="start-here-img icon-icon_start_here"></span>
                                    <p class="panel-card-number">01</p>
                                    <p class="panel-card-title" data-default="Domyślnie:"></p>
                                    <p class="config-object doctor-type" data-default="Strzykawko-dmuchawka"></p>
                                    <p class="config-object doctor-model" data-default="Dmuchawka DCI"></p>
                                    <p class="button-change doctor-panel1" data-target="doctor-tab-1">ZMIEŃ</p>
                                </div>
                            </div>
                            <div class="panel-card-cover d-panel2">
                                <span class="icon-icon_check"></span>
                                <div class="doctor-panel-card">
                                    <p class="panel-card-number">02</p>
                                    <p class="panel-card-title" data-default="Domyślnie:"></p>
                                    <p class="config-object doctor-type" data-default="Wolny rękaw"></p>
                                    <p class="config-object doctor-model" data-default="pneumatyczny M4"></p>
                                    <p class="config-object katnica-prostnica-type hidden" data-default=""></p>
                                    <p class="config-object katnica-prostnica-model hidden" data-default=""></p>
                                    <p class="button-change dt2 doctor-panel2" data-target="doctor-tab-2">ZMIEŃ</p>
                                </div>
                            </div>
                            <div class="panel-card-cover d-panel3">
                                <span class="icon-icon_check"></span>
                                <div class="doctor-panel-card">
                                    <p class="panel-card-number">03</p>
                                    <p class="panel-card-title" data-default="Domyślnie:"></p>
                                    <p class="config-object doctor-type" data-default="Wolny rękaw"></p>
                                    <p class="config-object doctor-model" data-default="pneumatyczny M4"></p>
                                    <p class="config-object katnica-prostnica-type hidden" data-default=""></p>
                                    <p class="config-object katnica-prostnica-model hidden" data-default=""></p>
                                    <p class="button-change dt3 doctor-panel3" data-target="doctor-tab-3">ZMIEŃ</p>
                                </div>
                            </div>
                            <div class="panel-card-cover d-panel4">
                                <span class="icon-icon_check"></span>
                                <div class="doctor-panel-card">
                                    <p class="panel-card-number">04</p>
                                    <p class="panel-card-title" data-default="Domyślnie:"></p>
                                    <p class="config-object doctor-type" data-default="Wolny rękaw"></p>
                                    <p class="config-object doctor-model" data-default="pneumatyczny M4"></p>
                                    <p class="config-object katnica-prostnica-type hidden" data-default=""></p>
                                    <p class="config-object katnica-prostnica-model hidden" data-default=""></p>
                                    <p class="button-change dt4 doctor-panel4" data-target="doctor-tab-4">ZMIEŃ</p>
                                </div>
                            </div>
                            <div class="panel-card-cover d-panel5 certus-neo certus-max exima-neo exima-max">
                                <span class="icon-icon_check"></span>
                                <div class="doctor-panel-card">
                                    <p class="panel-card-number">05</p>
                                    <p class="panel-card-title" data-default="Domyślnie:"></p>
                                    <p class="config-object doctor-type" data-default="Wolny rękaw"></p>
                                    <p class="config-object doctor-model" data-default="pneumatyczny M4"></p>
                                    <p class="config-object katnica-prostnica-type hidden" data-default=""></p>
                                    <p class="config-object katnica-prostnica-model hidden" data-default=""></p>
                                    <p class="button-change doctor-panel5" data-target="doctor-tab-5">ZMIEŃ</p>
                                </div>
                            </div>
                            <div class="panel-card-cover d-panel5 certus-standard exima-x1g exima-x1d">
                                <span class="icon-icon_check"></span>
                                <div class="doctor-panel-card">
                                    <p class="panel-card-number">05</p>
                                    <p class="panel-card-title" data-default="Domyślnie:"></p>
                                    <p class="config-object doctor-type" data-default="Wolny rękaw"></p>
                                    <p class="config-object doctor-model" data-default="elektryczny M4"></p>
                                    <p class="config-object katnica-prostnica-type hidden" data-default=""></p>
                                    <p class="config-object katnica-prostnica-model hidden" data-default=""></p>
                                    <p class="button-change doctor-panel5" data-target="doctor-tab-5">ZMIEŃ</p>
                                </div>
                            </div>
                        </div>
                        <div class="doctor-tab-1 doctor-tab">
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
                            <?php $invoice = 'invoice-row-5';?>
                            <div class="tab1-row">
                                <div class="tab1-row-card">
                                    <p class="tab1-card-title">DMUCHAWKA DCI</p>
                                    <p class="tab1-card-description"><span class="bold-text">Dodatkowa dmuchawka
                                            3-funkcyjna prosta</span></p>
                                    <p class="tab1-card-price">W standardzie</p>
                                    <!--                                <span class="icon-icon_check"></span>-->
                                    <button data-invoice-row="<?php echo $invoice;?>" data-type="Strzykawko-dmuchawka"
                                        data-name="DMUCHAWKA DCI" data-price="0"
                                        class="equipment tab1-card-button selected" data-confirmed="confirmed"
                                        data-standard="standard"><span class="label-button">WYBRANO</span><span
                                            class="icon-icon_check"></span></button>
                                </div>
                                <div class="tab1-row-card">
                                    <p class="tab1-card-title">LUZANI MINI MATE</p>
                                    <p class="tab1-card-description"><span class="bold-text">Dmuchawka
                                            3-funkcyjna</span>(zamiana ze standardowej DCI na panelu lekarza) </p>
                                    <div class="price-flex">
                                        <p class="tab1-card-price">Dopłata</p>
                                        <p class="tab1-price-number">900 zł</p>
                                    </div>
                                    <button data-invoice-row="<?php echo $invoice;?>" data-price="900"
                                        data-type="Strzykawko-dmuchawka" data-name="LUZANI MINI MATE"
                                        class="equipment tab1-card-button"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="icon-icon_check"></span></button>
                                </div>
                                <div class="tab1-row-card">
                                    <p class="tab1-card-title">LUZANI MINI BRIGHT</p>
                                    <p class="tab1-card-description"><span class="bold-text">Dmuchawka 6-funkcyjna
                                            zpodgrzewaniem i światłem </span>(zamiana ze standardowej DCI na panelu
                                        lekarza)</p>
                                    <div class="price-flex">
                                        <p class="tab1-card-price">Dopłata</p>
                                        <p class="tab1-price-number">1650 zł</p>
                                    </div>
                                    <button data-invoice-row="<?php echo $invoice;?>" data-price="1650"
                                        data-type="Strzykawko-dmuchawka" data-name="LUZANI MINI BRIGHT"
                                        class="equipment tab1-card-button"><span
                                            class="label-button">WYBIERAM</span><span
                                            class="icon-icon_check"></span></button>
                                </div>
                            </div>
                            <div class="tab1-bottom-accept">
                                <button class="tab1-cancel btn-doctor-panel-cancel">ANULUJ</button>
                                <button class="tab1-accept btn-doctor-panel-accept">ZATWIERDŹ</button>
                            </div>
                        </div>
                        <?php for($i=2;$i<6;$i++): ?>
                        <?php $invoice = 0;?>
                        <?php
                            if($i===2) {
                                $invoice = 'invoice-row-6';
                                $invoiceS = 'invoice-row-s52';
                                $invoiceK = 'invoice-row-k52';
                                $invoiceP = 'invoice-row-p52';
                            }
                            else if($i===3) {
                                $invoice = 'invoice-row-7';
                                $invoiceS = 'invoice-row-s53';
                                $invoiceK = 'invoice-row-k53';
                                $invoiceP = 'invoice-row-p53';
                            }
                            else if($i===4) {
                                $invoice = 'invoice-row-8';
                                $invoiceS = 'invoice-row-s54';
                                $invoiceK = 'invoice-row-k54';
                                $invoiceP = 'invoice-row-p54';
                            }
                            else if($i===5) {
                                $invoice = 'invoice-row-9';
                                $invoiceS = 'invoice-row-s55';
                                $invoiceK = 'invoice-row-k55';
                                $invoiceP = 'invoice-row-p55';
                            }
                        ?>
                        <div class="doctor-tab-<?php echo $i;?> doctor-tab">
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
                            <!--                            certus-neo certus-max exima-neo exima-max-->
                            <!--                            certus-standard exima-x1g exima-x1d-->
                            <div class="tab2-button-place" id="doctor-panel-tabs-list">
                                <button id="tab-turbina"
                                    class="tab2-button doctor-panel-choice active certus-neo certus-max exima-neo exima-max">Turbinę</button>
                                <button id="tab-mikrosilnik"
                                    class="tab2-button doctor-panel-choice certus-neo certus-max exima-neo exima-max">Mikrosilnik</button>
                                <button id="tab-skaler"
                                    class="tab2-button doctor-panel-choice certus-neo certus-max exima-neo exima-max">Skaler</button>
                                <button id="tab-piaskarka"
                                    class="tab2-button doctor-panel-choice certus-neo certus-max exima-neo exima-max">Piaskarkę</button>
                                <button id="tab-polimer"
                                    class="tab2-button doctor-panel-choice certus-neo certus-max exima-neo exima-max">Lampę
                                    polimeryzacyjną</button>
                                <button id="tab-rekaw" class="tab2-button doctor-panel-choice">Wolny rękaw
                                    pneumatyczny</button>
                            </div>

                            <div id="Turbina" data-tab="tab-turbina" class="active main-panel-wrapper tab-turbina">
                                <p class="tab1-text">Światło w turbinie:</p>
                                <div class="tab2-button-place turbina-light-choose">
                                    <button id="turbina-light" class="tab-trigger tab2-button mikrosilnik-type-button"
                                        data-stmt="statement-turbina-with-light">Turbina ze światłem</button>
                                    <button id="turbina-no-light"
                                        class="tab-trigger tab2-button mikrosilnik-type-button">Turbina bez
                                        światła</button>
                                    <div class="statement statement-turbina-with-light">
                                        <span
                                            class="turbina-attention-icon attention-icon icon-icon_exclamation"></span>
                                        <p class="turbina-attention-icon attention-p">Światło w rękawie: dopłata <span
                                                class="turbina-bold-price" style="color: #50515C;">150 zł</span></p>
                                    </div>
                                </div>

                                <div data-tab="turbina-light" class="tab-content tab-last turbina-with-light">
                                    <div class="checkbox-card turbina--light statement-1">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Turbina"
                                                data-name="Ti-Max Z 900L" type="radio"
                                                id="tab<?php echo $i;?>-timax-z-900l" data-price="2980"
                                                name="tab<?php echo $i;?>-value"
                                                data-stmt="statement-turbina-with-light">
                                            <label for="tab<?php echo $i;?>-timax-z-900l" class="panel-checkbox-div">
                                                Ti-Max Z 900L</label>
                                        </div>
                                        <p class="panel-checkbox-p">Tytanowa kątnica turbinowa z podświetlaniem - główka
                                            standard </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 830 zł</p>
                                            <div class="info-icon-block"
                                                title="Na szybkozłączkę PTL-CL (NSK), najmocniejsze w swojej klasie - do 26W, max. 400.000 obr./min.">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card turbina--light statement-2">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Turbina"
                                                data-name="Ti-Max Z 800L" type="radio"
                                                id="tab<?php echo $i;?>-timax-z-800l" data-price="2980"
                                                name="tab<?php echo $i;?>-value" value=""
                                                data-stmt="statement-turbina-with-light">
                                            <label for="tab<?php echo $i;?>-timax-z-800l" class="panel-checkbox-div">
                                                Ti-Max Z 800L</label>
                                        </div>
                                        <p class="panel-checkbox-p">Tytanowa kątnica turbinowa z podświetlaniem - główka
                                            mini </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 830 zł</p>
                                            <div class="info-icon-block"
                                                title="Na szybkozłączkę PTL-CL (NSK), najmocniejsze w swojej klasie - do 26W, max. 440.000 obr./min.">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card turbina--light statement-3">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Turbina"
                                                data-name="S-Max M 900L" type="radio"
                                                id="tab<?php echo $i;?>-timax-m-600l" data-price="2135"
                                                name="tab<?php echo $i;?>-value" value=""
                                                data-stmt="statement-turbina-with-light">
                                            <label for="tab<?php echo $i;?>-timax-m-600l" class="panel-checkbox-div">
                                                S-Max M 900L</label>
                                        </div>
                                        <p class="panel-checkbox-p">Stalowa kątnica turbinowa - główka standard, z
                                            podświetlaniem </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 985 zł</p>
                                            <div class="info-icon-block"
                                                title="łożyska ceramiczne, poczwórny aerosol, na szybkozłączkę, prędkość max. 450.000 lub 430.000 obr./min, system czystej główki">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card turbina--light statement-4">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Turbina"
                                                data-name="S-Max M 800L" type="radio"
                                                id="tab<?php echo $i;?>-timax-m-500l" data-price="2135"
                                                name="tab<?php echo $i;?>-value" value=""
                                                data-stmt="statement-turbina-with-light">
                                            <label for="tab<?php echo $i;?>-timax-m-500l" class="panel-checkbox-div">
                                                S-Max M 800L</label>
                                        </div>
                                        <p class="panel-checkbox-p">Stalowa kątnica turbinowa - główka mini, z
                                            podświetlaniem </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 985 zł</p>
                                            <div class="info-icon-block"
                                                title="łożyska ceramiczne, poczwórny aerosol, na szybkozłączkę, prędkość max. 450.000 lub 430.000 obr./min, system czystej główki">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <?php for($j=1;$j<6;$j++):?>
                                    <div class="statement statement-<?php echo $j;?>">
                                        <input data-invoice-row="<?php echo $invoiceS;?>" type="radio"
                                            data-name="szybkozłączka PTL-CL-LED" class="input-stmt" data-price="830"
                                            name="tab<?php echo $i;?>-stmt">
                                        <span class="tur-attention-icon attention-icon icon-icon_exclamation"></span>
                                        <p class="tur-attention-icon attention-p">Do tego modelu turbiny dołączana jest
                                            szybkozłączka PTL-CL-LED w cenie <span class="turbina-bold-price"
                                                style="color: #50515C;">830 zł</span></p>
                                    </div>
                                    <?php endfor ;?>

                                </div>
                                <div data-tab="turbina-no-light" class="tab-content tab-last turbina-without-light">
                                    <div class="checkbox-card turbina--no statement-1">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Turbina"
                                                data-name="S-Max M 900" type="radio"
                                                id="tab<?php echo $i;?>-timax-m-600" data-price="1533"
                                                name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-timax-m-600" class="panel-checkbox-div">
                                                S-Max M 900</label>
                                        </div>
                                        <p class="panel-checkbox-p">Stalowa kątnica turbinowa - główka standard, bez
                                            podświetlania </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 533 zł</p>
                                            <div class="info-icon-block"
                                                title="łożyska ceramiczne, poczwórny aerosol, na szybkozłączkę, prędkość max. 450.000 lub 430.000 obr./min, system czystej główki">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card turbina--no statement-2">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Turbina"
                                                data-name="S-Max M 800" type="radio"
                                                id="tab<?php echo $i;?>-timax-m-500" data-price="1533"
                                                name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-timax-m-500" class="panel-checkbox-div">
                                                S-Max M 800</label>
                                        </div>
                                        <p class="panel-checkbox-p">Stalowa kątnica turbinowa - główka mini, bez
                                            podświetlania </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 533 zł</p>
                                            <div class="info-icon-block"
                                                title="łożyska ceramiczne, poczwórny aerosol, na szybkozłączkę, prędkość max. 450.000 lub 430.000 obr./min, system czystej główki">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card turbina--no">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Turbina"
                                                data-name=" PANA-MAX2 M4" type="radio"
                                                id="tab<?php echo $i;?>-pana-max2-m4" data-price="1070"
                                                name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-pana-max2-m4" class="panel-checkbox-div">
                                                PANA-MAX2 M4</label>
                                        </div>
                                        <p class="panel-checkbox-p">Kątnica turbinowa na złącze Midwest </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 070 zł</p>
                                            <div class="info-icon-block"
                                                title="wymiana wierteł przyciskiem, 450.000 obr./min., pojedynczy aerosol">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <?php for($j=1;$j<3;$j++):?>
                                    <div class="statement statement-<?php echo $j;?>">
                                        <input data-invoice-row="<?php echo $invoiceS;?>" type="radio"
                                            data-name="szybkozłączka FM-CL-M4-T" class="input-stmt" data-price="544"
                                            name="tab<?php echo $i;?>-stmt">
                                        <span class="tur-attention-icon attention-icon icon-icon_exclamation"></span>
                                        <p class="tur-attention-icon attention-p">Do tego modelu turbiny dołączana jest
                                            szybkozłączka FM-CL-M4-T w cenie <span class="turbina-bold-price"
                                                style="color: #50515C;">544 zł</span></p>
                                    </div>
                                    <?php endfor ;?>
                                </div>
                            </div>
                            <div id="Mikrosilnik" data-tab="tab-mikrosilnik" class="main-panel-wrapper tab-mikrosilnik">
                                <p class="tab1-text">Wybierz rodzaj mikrosilnika:</p>
                                <div class="tab2-button-place">
                                    <button id="mikro-el"
                                        class="tab-trigger tab2-button mikrosilnik-type-button">Elektryczny</button>
                                    <button id="mikro-pn"
                                        class="tab-trigger tab2-button mikrosilnik-type-button">Pneumatyczny</button>
                                </div>

                                <!--                                <div data-tab="mikro-el" class="tab-content tab-as-trigger">-->
                                <div data-tab="mikro-el" class="tab-content">
                                    <p class="tab1-text">Światło w rękawie:</p>
                                    <div class="tab2-button-place">
                                        <button id="el-light" class="tab-trigger-internal-1 tab2-button">Mikrosilnik ze
                                            światłem</button>
                                        <button id="el-no-light" class="tab-trigger-internal-1 tab2-button"
                                            data-stmt="statement-el-with-light">Mikrosilnik bez światła</button>

                                        <div class="statement statement-el-with-light">
                                            <span
                                                class="mikro-attention-icon attention-icon icon-icon_exclamation"></span>
                                            <p class="mikro-attention-icon attention-p">Światło w rękawie: dopłata <span
                                                    class="turbina-bold-price" style="color: #50515C;">150 zł</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div data-tab="mikro-el" class="tab-content">
                                    <div data-tab="el-light" class="tab-content-internal-1 tab-as-trigger el-light-on">
                                        <div class="checkbox-card">
                                            <div class="panel-checkbox-place"><input
                                                    data-invoice-row="<?php echo $invoice;?>" data-type="Mikrosilnik"
                                                    data-name="NLX plus" data-variant="mikro-katnica-light"
                                                    data-price="8190" type="radio" id="tab<?php echo $i;?>-nlx-plus"
                                                    name="tab<?php echo $i;?>-value" value=""> <label id="light-on"
                                                    for="tab<?php echo $i;?>-nlx-plus" class="panel-checkbox-div">NLX
                                                    plus </label></div>
                                            <p class="panel-checkbox-p">Tytanowy mikrosilnik elektryczny z funkcją ENDO,
                                                z Multipadem, z podświetleniem LED</p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">8 190 zł</p>
                                                <div class="info-icon-block"
                                                    title="Bezszczotkowy, wewn. chłodzenie, 100 -40.000 obr./min., 4.0 Nm, światło LED, do wbudowania do unitu, w zestawie Multipad, zasilacz i rękaw.">
                                                    <img class="info-icon" src=" /img/info.png" alt="image">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="checkbox-card">
                                            <div class="panel-checkbox-place"><input
                                                    data-invoice-row="<?php echo $invoice;?>" data-type="Mikrosilnik"
                                                    data-name="NLX nano" data-variant="mikro-katnica-light" type="radio"
                                                    data-price="8128" name="tab<?php echo $i;?>-value"
                                                    id="tab<?php echo $i;?>-nlx-nano"> <label id="light-on"
                                                    for="tab<?php echo $i;?>-nlx-nano" class="panel-checkbox-div">NLX
                                                    nano</label></div>
                                            <p class="panel-checkbox-p">Tytanowy mikrosilnik elektryczny, z Multipadem,
                                                z podświetleniem LED</p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">8 128 zł</p>
                                                <div class="info-icon-block"
                                                    title="Bezszczotkowy, wewn. chłodzenie, 100 -40.000 obr./min., 4.0 Nm, światło LED, do wbudowania do unitu, w zestawie Multipad, zasilacz i rękaw">
                                                    <img class="info-icon" src=" /img/info.png" alt="image">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="checkbox-card">
                                            <div class="panel-checkbox-place"><input
                                                    data-invoice-row="<?php echo $invoice;?>" data-type="Mikrosilnik"
                                                    data-name="NBX LED" data-variant="mikro-katnica-light"
                                                    data-price="4243" type="radio" id="tab<?php echo $i;?>-nbx-led"
                                                    name="tab<?php echo $i;?>-value" value=""> <label id="light-on"
                                                    for="tab<?php echo $i;?>-nbx-led" class="panel-checkbox-div">NBX LED
                                                </label></div>
                                            <p class="panel-checkbox-p">Tytanowy mikrosilnik elektryczny z
                                                podświetlaniem LED</p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">4 243 zł</p>
                                                <div class="info-icon-block"
                                                    title="Wewn. chłodzenie, 1.000 -40.000 obr./min., do wbudowania do unitu, z zasilaczem i rękawem.">
                                                    <img class="info-icon" src=" /img/info.png" alt="image">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="checkbox-card">
                                            <div class="panel-checkbox-place"><input
                                                    data-invoice-row="<?php echo $invoice;?>" data-type="Mikrosilnik"
                                                    data-name="M40 XS" data-variant="mikro-katnica-light"
                                                    data-price="4297" type="radio" id="tab<?php echo $i;?>-m40-xs"
                                                    name="tab<?php echo $i;?>-value" value=""> <label id="light-on"
                                                    for="tab<?php echo $i;?>-m40-xs" class="panel-checkbox-div">M40 XS
                                                </label></div>
                                            <p class="panel-checkbox-p">Mikrosilnik elektryczny z podświetlaniem LED</p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">4 297 zł</p>
                                                <div class="info-icon-block"
                                                    title="Wewn. chłodzenie, 60-40.000 obr./min., zawór retrakcyjny, złącze Midwest, do wbudowania do unitu, z zasilaczem i rękawem">
                                                    <img class="info-icon" src=" /img/info.png" alt="image">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-tab="el-no-light"
                                        class="tab-content-internal-1 tab-as-trigger el-light-off">
                                        <div class="checkbox-card">
                                            <div class="panel-checkbox-place"><input
                                                    data-invoice-row="<?php echo $invoice;?>" data-type="Mikrosilnik"
                                                    data-name="NBX N" data-variant="mikro-katnica-no-light"
                                                    data-price="3737" type="radio" id="tab<?php echo $i;?>-nbx-n"
                                                    name="tab<?php echo $i;?>-value" value=""> <label id="light-off"
                                                    for="tab<?php echo $i;?>-nbx-n" class="panel-checkbox-div">NBX N
                                                </label></div>
                                            <p class="panel-checkbox-p">Tytanowy mikrosilnik elektryczny bez
                                                podświetlania</p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">3 737 zł</p>
                                                <div class="info-icon-block"
                                                    title="Wewn. chłodzenie, 1.000 -40.000 obr./min., do wbudowania do unitu, z zasilaczem i rękawem">
                                                    <img class="info-icon" src=" /img/info.png" alt="image">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="checkbox-card">
                                            <div class="panel-checkbox-place"><input
                                                    data-invoice-row="<?php echo $invoice;?>" data-type="Mikrosilnik"
                                                    data-name="M40N XS" data-variant="mikro-katnica-no-light"
                                                    data-price="3625" type="radio" id="tab<?php echo $i;?>-m40n-xs"
                                                    name="tab<?php echo $i;?>-value" value=""> <label id="light-off"
                                                    for="tab<?php echo $i;?>-m40n-xs" class="panel-checkbox-div">M40N XS
                                                </label></div>
                                            <p class="panel-checkbox-p">Mikrosilnik elektryczny bez podświetlenia</p>
                                            <div class="panel-price">
                                                <p class="panel-checkbox-price">3 625 zł</p>
                                                <div class="info-icon-block"
                                                    title="Wewn. chłodzenie, 60-40.000 obr./min., zawór retrakcyjny, złącze Midwest, do wbudowania do unitu, z zasilaczem i rękawem">
                                                    <img class="info-icon" src=" /img/info.png" alt="image">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div data-tab="mikro-pn" class="tab-content">
                                    <p class="tab1-text">Światło w rękawie:</p>
                                    <div class="tab2-button-place">
                                        <button id="pneum-light" class="tab-trigger-internal-1 tab2-button">Mikrosilnik
                                            ze światłem</button>
                                        <button id="pneum-no-light" class="tab-trigger-internal-1 tab2-button"
                                            data-stmt="statement-pn-with-light">Mikrosilnik bez światła</button>

                                        <div class="statement statement-pn-with-light">
                                            <span
                                                class="mikro-attention-icon attention-icon icon-icon_exclamation"></span>
                                            <p class="mikro-attention-icon attention-p">Światło w rękawie: dopłata <span
                                                    class="turbina-bold-price" style="color: #50515C;">150 zł</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div data-tab="mikro-pn" class="tab content">
                                    <div data-tab="pneum-light"
                                        class="tab-content-internal-1 tab-as-trigger pneumatic-light-on">
                                        <p class="tab1-text tab1-text-separatop">Wybierz mikrosilnik:</p>
                                        <div class="checkbox-card-wrapper">
                                            <div class="checkbox-card">
                                                <div class="panel-checkbox-place"><input
                                                        data-invoice-row="<?php echo $invoice;?>"
                                                        data-type="Mikrosilnik" data-variant="mikro-katnica-light"
                                                        data-name="Ti-Max X205LED" data-price="2570" type="radio"
                                                        name="tab<?php echo $i;?>-value"
                                                        id="tab<?php echo $i;?>-timax-x205LED"> <label id="light-on"
                                                        for="tab<?php echo $i;?>-timax-x205LED"
                                                        class="panel-checkbox-div"> Ti-Max X205LED </label></div>
                                                <p class="panel-checkbox-p">Mikrosilnik pneumatyczny z podświetlaniem
                                                    LED </p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">2 570 zł</p>
                                                    <div class="info-icon-block"
                                                        title="Korpus tytanowy, powłoka DURACOAT, obrót 360o, 32.000 LUX, wewn. chłodzenie, max. 25.000 obr./min.">
                                                        <img class="info-icon" src=" /img/info.png"
                                                            alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="checkbox-card">
                                                <div class="panel-checkbox-place"><input
                                                        data-invoice-row="<?php echo $invoice;?>"
                                                        data-type="Mikrosilnik" data-variant="mikro-katnica-light"
                                                        data-name="DynaLED M205LG M4" type="radio" data-price="3550"
                                                        id="tab<?php echo $i;?>-dynaled-m4"
                                                        name="tab<?php echo $i;?>-value" value=""> <label id="light-on"
                                                        for="tab<?php echo $i;?>-dynaled-m4"
                                                        class="panel-checkbox-div">DynaLED M205LG M4 </label></div>
                                                <p class="panel-checkbox-p">Mikrosilnik pneumatyczny z generatorem
                                                    oświetlenia LED</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">3 550 zł</p>
                                                    <div class="info-icon-block"
                                                        title="25.000 LUX, max. 24.000 obr./min., wewnętrzne chłodzenie, na złącze Midwest">
                                                        <img class="info-icon" src=" /img/info.png"
                                                            alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="checkbox-card">
                                                <div class="panel-checkbox-place"><input
                                                        data-invoice-row="<?php echo $invoice;?>"
                                                        data-type="Mikrosilnik" data-variant="mikro-katnica-light"
                                                        data-name="DynaLED M205LG B2" type="radio" data-price="3550"
                                                        id="tab<?php echo $i;?>-dynaled-b2"
                                                        name="tab<?php echo $i;?>-value" value=""> <label id="light-on"
                                                        for="tab<?php echo $i;?>-dynaled-b2"
                                                        class="panel-checkbox-div">DynaLED M205LG B2 </label></div>
                                                <p class="panel-checkbox-p">Mikrosilnik pneumatyczny z generatorem
                                                    oświetlenia LED</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">3 550 zł</p>
                                                    <div class="info-icon-block"
                                                        title="25.000 LUX, max. 24.000 obr./min., wewnętrzne chłodzenie, na złącze Borden.">
                                                        <img class="info-icon" src=" /img/info.png"
                                                            alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-tab="pneum-no-light"
                                        class="tab-content-internal-1 tab-as-trigger pneumatic-light-off">
                                        <p class="tab1-text tab1-text-separatop">Wybierz mikrosilnik:</p>
                                        <div class="checkbox-card-wrapper">
                                            <div class="checkbox-card">
                                                <div class="panel-checkbox-place"><input
                                                        data-invoice-row="<?php echo $invoice;?>"
                                                        data-type="Mikrosilnik" data-variant="mikro-katnica-no-light"
                                                        data-name="FX 205m M4" type="radio"
                                                        id="tab<?php echo $i;?>-fx-b4" data-price="1070"
                                                        name="tab<?php echo $i;?>-value" value=""> <label id="light-off"
                                                        for="tab<?php echo $i;?>-fx-b4" class="panel-checkbox-div">FX
                                                        205m M4 </label></div>
                                                <p class="panel-checkbox-p">Mikrosilnik pneumatyczny</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">920 zł</p>
                                                    <div class="info-icon-block"
                                                        title="Korpus ze stali nierdzewnej, zewnętrzne chłodzenie, max. 25.000 obr./min., na złącze Midwest">
                                                        <img class="info-icon" src=" /img/info.png"
                                                            alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="checkbox-card">
                                                <div class="panel-checkbox-place"><input
                                                        data-invoice-row="<?php echo $invoice;?>"
                                                        data-type="Mikrosilnik" data-variant="mikro-katnica-no-light"
                                                        data-name="FX 205m B2" type="radio"
                                                        id="tab<?php echo $i;?>-fx-b2" data-price="1070"
                                                        name="tab<?php echo $i;?>-value" value=""> <label id="light-off"
                                                        for="tab<?php echo $i;?>-fx-b2" class="panel-checkbox-div">FX
                                                        205m B2 </label></div>
                                                <p class="panel-checkbox-p">Mikrosilnik pneumatyczny </p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">920 zł</p>
                                                    <div class="info-icon-block"
                                                        title="Korpus ze stali nierdzewnej, zewnętrzne chłodzenie, max. 25.000 obr./min., na złącze Borden">
                                                        <img class="info-icon" src=" /img/info.png"
                                                            alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="checkbox-card">
                                                <div class="panel-checkbox-place"><input
                                                        data-invoice-row="<?php echo $invoice;?>"
                                                        data-type="Mikrosilnik" data-variant="mikro-katnica-no-light"
                                                        data-name="S-Max M-205-M4" type="radio" data-price="1350"
                                                        id="tab<?php echo $i;?>-smax-m205m4"
                                                        name="tab<?php echo $i;?>-value" value=""> <label id="light-off"
                                                        for="tab<?php echo $i;?>-smax-m205m4"
                                                        class="panel-checkbox-div"> S-Max M-205-M4 </label></div>
                                                <p class="panel-checkbox-p">Mikrosilnik pneumatyczny</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">1 200 zł</p>
                                                    <div class="info-icon-block"
                                                        title="Max. 25.000 obr./min., wewnętrzne chłodzenie"><img
                                                            class="info-icon" src=" /img/info.png"
                                                            alt="image"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div data-tab="mikro-internal"
                                    class="tab-content-internal-1 katnica-wrapper prostnica-wrapper">
                                    <p class="tab1-text">Wybierz kątnicę lub prostnicę:</p>
                                    <div class="tab2-button-place katnica-choose">
                                        <button id="katnica" class="tab-trigger-internal-2 tab2-button">Kątnica</button>
                                        <button id="prostnica"
                                            class="tab-trigger-internal-2 tab2-button">Prostnica</button>
                                    </div>
                                    <div data-tab="katnica" id="type-katnica"
                                        class="tab-content-internal-2 tab-last checkbox-card-wrapper katnica-or-prostnica katnica-with-light">
                                        <div id="without-light"
                                            class="mikro-katnica-no-light choose-to-continue tab-last">
                                            <div id="without-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input
                                                        data-invoice-row="<?php echo $invoiceK;?>" class="added"
                                                        data-name="S-Max M 25" data-type="Katnica" data-price="2090"
                                                        type="radio" id="tab<?php echo $i;?>-smax-m-25"
                                                        name="tab<?php echo $i;?>-katnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-smax-m-25"
                                                        class="panel-checkbox-div"> S-Max M 25 </label></div>
                                                <p class="panel-checkbox-p">Kątnica 1:1 na mikrosilnik, bez
                                                    podświetlania</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">2 090 zł</p>
                                                    <div class="info-icon-block"
                                                        title="Max. 40.000 obr./min., wewn. chłodzenie, pojedynczy aerosol">
                                                        <img class="info-icon" src=" /img/info.png"
                                                            alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="with-light" class="mikro-katnica-light choose-to-continue tab-last">
                                            <div id="with-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input
                                                        data-invoice-row="<?php echo $invoiceK;?>" class="added"
                                                        data-name="Ti-Max Z 25L" data-type="Katnica" type="radio"
                                                        data-price="2626" id="tab<?php echo $i;?>-ti-max-z-25l"
                                                        name="tab<?php echo $i;?>-katnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-ti-max-z-25l"
                                                        class="panel-checkbox-div"> Ti-Max Z 25L</label>
                                                </div>
                                                <p class="panel-checkbox-p">Kątnica tytanowa na mikrosilnik z
                                                    przełożeniem 1:1, pojedynczy aerosol</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">2 626 zł</p>
                                                    <div class="info-icon-block"
                                                        title="z podświetlaniem, wewnętrzne chłodzenie, wymiana wierteł przyciskiem, system czystej główki, mikrofiltr">
                                                        <img class="info-icon" src=" /img/info.png"
                                                            alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="with-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input
                                                        data-invoice-row="<?php echo $invoiceK;?>" class="added"
                                                        data-name="Ti-Max Z 95L" data-type="Katnica" type="radio"
                                                        data-price="4116" id="tab<?php echo $i;?>-timax-z-95l"
                                                        name="tab<?php echo $i;?>-katnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-timax-z-95l"
                                                        class="panel-checkbox-div"> Ti-Max Z 95L</label>
                                                </div>
                                                <p class="panel-checkbox-p">Kątnica tytanowa na mikrosilnik z
                                                    przełożeniem 1:5, pojedynczy aerosol</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">4 116 zł</p>
                                                    <div class="info-icon-block"
                                                        title="z podświetlaniem, wewnętrzne chłodzenie, wymiana wierteł przyciskiem, system czystej główki, mikrofiltr">
                                                        <img class="info-icon" src=" /img/info.png"
                                                            alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="with-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input
                                                        data-invoice-row="<?php echo $invoiceK;?>" class="added"
                                                        data-name="Ti-Max Z 85L" data-type="Katnica" type="radio"
                                                        data-price="4116" id="tab<?php echo $i;?>-timax-z-85l"
                                                        name="tab<?php echo $i;?>-katnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-timax-z-85l"
                                                        class="panel-checkbox-div"> Ti-Max Z 85L</label>
                                                </div>
                                                <p class="panel-checkbox-p">Kątnica tytanowa na mikrosilnik z
                                                    przełożeniem 1:5, pojedynczy aerosol</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">4 116 zł</p>
                                                    <div class="info-icon-block"
                                                        title="z podświetlaniem, wewnętrzne chłodzenie, wymiana wierteł przyciskiem, system czystej główki, mikrofiltr">
                                                        <img class="info-icon" src=" /img/info.png"
                                                            alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="with-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input
                                                        data-invoice-row="<?php echo $invoiceK;?>" class="added"
                                                        data-name="S-Max M 25L" data-type="Katnica" type="radio"
                                                        data-price="2090" id="tab<?php echo $i;?>-smax-m-25l"
                                                        name="tab<?php echo $i;?>-katnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-smax-m-25l"
                                                        class="panel-checkbox-div"> S-Max M 25L </label>
                                                </div>
                                                <p class="panel-checkbox-p">Kątnica 1:1 na mikrosilnik, z podświetlaniem
                                                </p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">2 090 zł</p>
                                                    <div class="info-icon-block"
                                                        title="Wewn. chłodzenie, pojedynczy aerosol, światłowód prętowy">
                                                        <img class="info-icon" src=" /img/info.png"
                                                            alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-tab="prostnica" id="type-prostnica"
                                        class="tab-content-internal-2 tab-last checkbox-card-wrapper katnica-or-prostnica prostnica-without-light">
                                        <div id="without-light"
                                            class="choose-to-continue mikro-katnica-no-light tab-last">
                                            <div id="without-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input
                                                        data-invoice-row="<?php echo $invoiceP;?>" class="added"
                                                        data-type="Prostnica" data-name="S-Max M 65" type="radio"
                                                        id="tab<?php echo $i;?>-smax-m-65" data-price="800"
                                                        name="tab<?php echo $i;?>-prostnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-smax-m-65"
                                                        class="panel-checkbox-div">S-Max M 65 </label>
                                                </div>
                                                <p class="panel-checkbox-p">Prostnica 1:1 na mikrosilnik, bez
                                                    podświetlania</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">800 zł</p>
                                                    <div class="info-icon-block"
                                                        title="Wewn. chłodzenie, pojedynczy aerosol">
                                                        <img class="info-icon" src=" /img/info.png"
                                                            alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="without-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input
                                                        data-invoice-row="<?php echo $invoiceP;?>" class="added"
                                                        data-type="Prostnica" data-name="FX 65m" type="radio"
                                                        id="tab<?php echo $i;?>-fx-65" data-price="800"
                                                        name="tab<?php echo $i;?>-prostnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-fx-65" class="panel-checkbox-div">
                                                        FX 65m </label>
                                                </div>
                                                <p class="panel-checkbox-p">Prostnica 1:1 na mikrosilnik, bez
                                                    podświetlania</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">800 zł</p>
                                                    <div class="info-icon-block"
                                                        title="Korpus stalowy, max. 40.000 obr./min., zewnętrzne chłodzenie">
                                                        <img class="info-icon" src=" /img/info.png"
                                                            alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="without-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input
                                                        data-invoice-row="<?php echo $invoiceP;?>" class="added"
                                                        data-type="Prostnica" data-name="EX-6B" type="radio"
                                                        id="tab<?php echo $i;?>-ex-6b" data-price="800"
                                                        name="tab<?php echo $i;?>-prostnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-ex-6b" class="panel-checkbox-div">
                                                        EX-6B </label>
                                                </div>
                                                <p class="panel-checkbox-p">Prostnica 1:1 na mikrosilnik, bez
                                                    podświetlania</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">800 zł</p>
                                                    <div class="info-icon-block"
                                                        title="zewnętrzne chłodzenie, max. 40.000 obr./min."><img
                                                            class="info-icon" src=" /img/info.png"
                                                            alt="image"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="with-light" class="choose-to-continue mikro-katnica-light tab-last">
                                            <!--                                            <p id="with-light" class="checkbox-card">Brak</p>-->
                                            <div id="with-light" class="checkbox-card">
                                                <div class="panel-checkbox-place"><input
                                                        data-invoice-row="<?php echo $invoiceP;?>" class="added"
                                                        data-type="Prostnica" data-name="Ti-Max X 65L" type="radio"
                                                        id="tab<?php echo $i;?>-timax-x-65l" data-price="2773"
                                                        name="tab<?php echo $i;?>-prostnica-value" value="">
                                                    <label for="tab<?php echo $i;?>-timax-x-65l"
                                                        class="panel-checkbox-div">Ti-Max X 65L </label>
                                                </div>
                                                <p class="panel-checkbox-p">Prostnica tytanowa 1:1 na mikrosilnik, z
                                                    podświetleniem LED</p>
                                                <div class="panel-price">
                                                    <p class="panel-checkbox-price">2 773 zł</p>
                                                    <div class="info-icon-block"
                                                        title="Wewn. chłodzenie, pojedynczy aerosol">
                                                        <img class="info-icon" src=" /img/info.png"
                                                            alt="image">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Skaler" data-tab="tab-skaler" class="main-panel-wrapper tab-skaler">
                                <p class="tab1-text">Wybierz rodzaj skalera:</p>
                                <div class="tab2-button-place skaler-button-place">
                                    <button id="skaler-el"
                                        class="tab-trigger tab2-button mikrosilnik-type-button">Elektryczny</button>
                                    <button id="skaler-pn" class="tab-trigger tab2-button mikrosilnik-type-button"
                                        data-stmt="statement-skaler-with-light">Pneumatyczny</button>
                                    <div class="statement statement-skaler-with-light">
                                        <span class="skaler-attention-icon attention-icon icon-icon_exclamation"></span>
                                        <p class="skaler-attention-icon attention-p">Światło w rękawie: dopłata <span
                                                class="turbina-bold-price" style="color: #50515C;">150 zł</span></p>
                                    </div>
                                </div>
                                <div data-tab="skaler-el" class="tab-content skaler-light-choose">
                                    <p class="tab1-text">Światło w rękawie:</p>
                                    <div class="skaler-mikro-light">
                                        <button id="skaler-light" class="tab-trigger-internal-1 tab2-button">Skaler ze
                                            światłem</button>
                                        <button id="skaler-no-light" class="tab-trigger-internal-1 tab2-button">Skaler
                                            bez światła</button>
                                    </div>
                                </div>
                                <div data-tab="skaler-light" class="tab-content-internal-1 tab-last skaler-el-light">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Skaler"
                                                data-name="VARIOS 150 LUX" type="radio"
                                                id="tab<?php echo $i;?>-varios-150-lux" data-price="3084"
                                                name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-varios-150-lux" class="panel-checkbox-div">
                                                VARIOS 150 LUX</label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler Piezzoelektryczny Varios 151 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 084 zł</p>
                                            <div class="info-icon-block"
                                                title="Skaler piezzo. do wbudowania do unitu z poświetlaniem LED, 8W">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Skaler"
                                                data-name="VARIOS 170 LUX" type="radio"
                                                id="tab<?php echo $i;?>-varios-170-lux" data-price="3624"
                                                name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-varios-170-lux" class="panel-checkbox-div">
                                                VARIOS 170 LUX</label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler Piezzoelektryczny Varios 153 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 624 zł</p>
                                            <div class="info-icon-block"
                                                title="Skaler piezzo. do wbudowania do unitu z poświetlaniem LED, 11W">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Skaler"
                                                data-name="Ti-Max S970 L" type="radio"
                                                id="tab<?php echo $i;?>-timax-s970-l" data-price="3107"
                                                name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-timax-s970-l" class="panel-checkbox-div">
                                                Ti-Max S970 L</label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler pneumatyczny ze światłem Ti-Max S970 L </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 107 zł</p>
                                            <div class="info-icon-block"
                                                title="Tytanowy skaler pneumatyczny ze światłem, na szybkozłączkę NSK">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-tab="skaler-no-light"
                                    class="tab-content-internal-1 tab-last skaler-el-no-light">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Skaler"
                                                data-name="VARIOS 150" type="radio" id="tab<?php echo $i;?>-varios-150"
                                                data-price="2138" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-varios-150" class="panel-checkbox-div">
                                                VARIOS 150 </label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler Piezzoelektryczny Varios 150 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 138 zł</p>
                                            <div class="info-icon-block"
                                                title="Skaler piezzo. do wbudowania do unitu, 8W">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Skaler"
                                                data-name="VARIOS 170" type="radio" id="tab<?php echo $i;?>-varios-170"
                                                data-price="2512" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-varios-170" class="panel-checkbox-div">
                                                VARIOS 170 </label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler Piezzoelektryczny Varios 152 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 512 zł</p>
                                            <div class="info-icon-block"
                                                title="Skaler piezzo. do wbudowania do unitu, 11W">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-tab="skaler-pn" id="Skaler" class="tab-content tab-last skaler-pn-no-light">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Skaler"
                                                data-name="Ti-Max S970" type="radio" id="tab<?php echo $i;?>-timax-s970"
                                                data-price="2598" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-timax-s970" class="panel-checkbox-div">
                                                Ti-Max S970</label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler pneumatyczny ze światłem Ti-Max S970 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 448 zł</p>
                                            <div class="info-icon-block"
                                                title="Tytanowy skaler pneumatyczny, na szybkozłączkę NSK"><img
                                                    class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Skaler"
                                                data-name="AS 2000 M4" type="radio" id="tab<?php echo $i;?>-as-2000-m4"
                                                data-price="1217" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-as-2000-m4" class="panel-checkbox-div"> AS
                                                2000 M4 </label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler pneumatyczny AS 2000 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 067 zł</p>
                                            <div class="info-icon-block" title="Skaler pneumatyczny, na złącze Midwest">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Skaler"
                                                data-name="AS 2000 B2" type="radio" id="tab<?php echo $i;?>-as-2000-b2"
                                                data-price="1217" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-as-2000-b2" class="panel-checkbox-div"> AS
                                                2000 B2 </label>
                                        </div>
                                        <p class="panel-checkbox-p">Skaler pneumatyczny AS 2000 </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 067 zł</p>
                                            <div class="info-icon-block" title="Skaler pneumatyczny, na złącze Borden">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Piaskarka" data-tab="tab-piaskarka" class="main-panel-wrapper tab-piaskarka">
                                <p class="tab1-text tab1-text-separatop">Wybierz model:</p>
                                <div class="tab-content tab-last piaskarka-block default">
                                    <div class="checkbox-card statement-1">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Piaskarka"
                                                data-name="Prophy Mate NEO PTL-P" type="radio"
                                                id="tab<?php echo $i;?>-neo-ptl-p" data-price="2875"
                                                name="tab<?php echo $i;?>-value" value=""> <label
                                                for="tab<?php echo $i;?>-neo-ptl-p"
                                                class="panel-checkbox-div turn-szybko"> Prophy Mate NEO PTL-P </label>
                                        </div>
                                        <p class="panel-checkbox-p">Piaskarka do profilaktyki Prophy Mate NEO </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 875 zł</p>
                                            <div class="info-icon-block"
                                                title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img
                                                    class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Piaskarka"
                                                data-name="Prophy Mate NEO M4-P" type="radio"
                                                id="tab<?php echo $i;?>-neo-m4-p" data-price="2788"
                                                name="tab<?php echo $i;?>-value" value=""> <label
                                                for="tab<?php echo $i;?>-neo-m4-p" class="panel-checkbox-div"> Prophy
                                                Mate NEO M4-P</label></div>
                                        <p class="panel-checkbox-p">Piaskarka do profilaktyki Prophy Mate NEO </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 788 zł</p>
                                            <div class="info-icon-block"
                                                title="Piaskarka na rękaw Midwest (kolor szary) - Tajwan"><img
                                                    class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card statement-2">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Piaskarka"
                                                data-name="Perio Mate PTL-P" type="radio" id="tab<?php echo $i;?>-ptl-p"
                                                data-price="3335" name="tab<?php echo $i;?>-value" value=""> <label
                                                for="tab<?php echo $i;?>-ptl-p" class="panel-checkbox-div turn-szybko">
                                                Perio Mate PTL-P </label></div>
                                        <p class="panel-checkbox-p">Piaskarka do periodontologii Perio Mate </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 335 zł</p>
                                            <div class="info-icon-block"
                                                title="Piaskarka do zabiegów perio na szybkozłączkę PTL-CL (NSK)"><img
                                                    class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Piaskarka"
                                                data-name="Perio Mate M4-P" type="radio" id="tab<?php echo $i;?>-m4-p"
                                                data-price="3050" name="tab<?php echo $i;?>-value" value=""> <label
                                                for="tab<?php echo $i;?>-m4-p" class="panel-checkbox-div"> Perio Mate
                                                M4-P </label></div>
                                        <p class="panel-checkbox-p">Piaskarka do periodontologii Perio Mate </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 050 zł</p>
                                            <div class="info-icon-block"
                                                title="Piaskarka do zabiegów perio na rękaw Midwest">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <?php for($j=1;$j<3;$j++):?>
                                    <div class="statement statement-<?php echo $j;?>">
                                        <input data-invoice-row="<?php echo $invoiceS;?>" type="radio"
                                            data-name="szybkozłączka PTL-CL-LED" class="input-stmt" data-price="830"
                                            name="tab<?php echo $i;?>-stmt">
                                        <span class="tur-attention-icon attention-icon icon-icon_exclamation"></span>
                                        <p class="tur-attention-icon attention-p">Do tego modelu turbiny dołączana jest
                                            szybkozłączka PTL-CL-LED w cenie <span class="turbina-bold-price"
                                                style="color: #50515C;">830 zł</span></p>
                                    </div>
                                    <?php endfor ;?>
                                </div>
                            </div>
                            <div id="Lampa-pol" data-tab="tab-polimer" class="main-panel-wrapper tab-polimer">
                                <p class="tab1-text tab1-text-separatop">Wybierz model:</p>
                                <div class="tab-content tab-last default polimer-lamp">
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Lampa"
                                                data-name="MOON" type="radio" id="tab<?php echo $i;?>-moon"
                                                data-price="2300" name="tab<?php echo $i;?>-value" value=""> <label
                                                for="tab<?php echo $i;?>-moon" class="panel-checkbox-div"> MOON </label>
                                        </div>
                                        <p class="panel-lamp-p">TKD - Włochy</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2300 zł</p>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Lampa"
                                                data-name="ULTRALIGHT" type="radio" id="tab<?php echo $i;?>-ultralight"
                                                data-price="1800" name="tab<?php echo $i;?>-value" value="">
                                            <label for="tab<?php echo $i;?>-ultralight" class="panel-checkbox-div">
                                                ULTRALIGHT </label>
                                        </div>
                                        <p class="panel-lamp-p">FINEVISION - Tajwan</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1800 zł</p>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Lampa"
                                                data-name="BUILT-IN C" type="radio" id="tab<?php echo $i;?>-built-in"
                                                data-price="700" name="tab<?php echo $i;?>-value" value=""> <label
                                                for="tab<?php echo $i;?>-built-in" class="panel-checkbox-div"> BUILT-IN
                                                C </label>
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
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" type="radio"
                                                data-type="pneumatyczny M4" data-name="Wolny rękaw"
                                                id="tab<?php echo $i;?>-empty" data-price="0"
                                                name="tab<?php echo $i;?>-value" class="selected default-radio"
                                                data-confirmed="confirmed" checked="true"> <label
                                                for="tab<?php echo $i;?>-empty" class="panel-checkbox-div"> Pusty rękaw
                                            </label></div>
                                    </div>
                                </div>
                                <div class="attention-block-wrapper certus-standard exima-x1g exima-x1d">
                                    <div class="attention-wrapper"> <span class="icon-icon_exclamation"></span>
                                        <p>W unicie <span class="data-brand certus-standard">CERTUS STANDARD</span><span
                                                class="data-brand exima-x1g">EXIMA X1G</span><span
                                                class="data-brand exima-x1d">EXIMA X1D</span> 4-ty rękaw pneumatyczny
                                            jest dodatkowo płatny, jego cena to 350 zł.</p>
                                    </div>
                                    <div class="continue-buttons">
                                        <button class="tab5-continue select-electric">OK, KONTYNUUJ</button>
                                        <button class="tab5-cancel select-pneumatic">WYBIERZ RĘKAW PNEUMATYCZNY</button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab<?php echo $i; ?>-bottom-accept">
                                <button class="tab<?php echo $i; ?>-cancel btn-doctor-panel-cancel">ANULUJ</button>
                                <button class="tab<?php echo $i; ?>-cancel btn-doctor-panel-accept">ZATWIERDŹ</button>
                            </div>
                        </div>
                        <?php endfor; ?>
                    </div>
                </div>
            </section>
            <!--        invoice 10,11,12,13-->
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
                            <div class="choosen-brand model-type" data-label="assyst-card-1">
                                <p class="brand-name">1. MIEJSCE W PANELU</p>
                                <p class="brand-price assyst-brand-1 selected-equipment"
                                    data-default="Skonfiguruj, aby poznać ostateczną cenę"></p>
                                <span class="choosen-brand-sign icon-icon_loading"></span>
                                <span class="choosen-brand-sign icon-icon_check"></span>
                            </div>
                            <div class="choosen-brand model-type" data-label="assyst-card-2">
                                <p class="brand-name">2. MIEJSCE W PANELU</p>
                                <p class="brand-price assyst-brand-2 selected-equipment"
                                    data-default="Skonfiguruj, aby poznać ostateczną cenę"></p>
                                <span class="choosen-brand-sign icon-icon_loading"></span>
                                <span class="choosen-brand-sign icon-icon_check"></span>
                            </div>
                            <div class="choosen-brand model-type" data-label="assyst-card-3">
                                <p class="brand-name">3. MIEJSCE W PANELU</p>
                                <p class="brand-price assyst-brand-3 selected-equipment"
                                    data-default="Skonfiguruj, aby poznać ostateczną cenę"></p>
                                <span class="choosen-brand-sign icon-icon_loading"></span>
                                <span class="choosen-brand-sign icon-icon_check"></span>
                            </div>
                            <div class="choosen-brand model-type">
                                <p class="brand-name">4. MIEJSCE W PANELU</p>
                                <p class="brand-price assyst-brand-4">Ślinociąg</p>
                                <span class="choosen-brand-sign icon-icon_check active"></span>
                            </div>
                        </div>
                        <div class="tab1-summary">
                            <div class="brand-price-summary">
                                <p class="brand-summary">Wyposażenie panelu asysty:</p>
                                <p class="price-summary"><span class="pr" data-assyst-panel-cost="0"></span> zł</p>
                            </div>
                            <div class="step-1">
                                <p class="info common certus-max certus-standard exima-max exima-x1g exima-x1d">Kliknij
                                    "Pomiń" jeśli nie chcesz uwzględniać paneliku asysty w swoim zestawie.</p>
                                <div class="prev-step-button">
                                    <button class="step-back-button">WRÓĆ</button>
                                    <span class="icon-icon_arrow_left"></span>
                                </div>
                                <div class="next-step-button common certus-neo exima-neo">
                                    <button class="step-5-button button-to-go" data-default="DALEJ"
                                        data-trigger="DALEJ"></button>
                                    <span class="icon-icon_arrow_right"></span>
                                </div>
                                <div
                                    class="next-step-button common certus-max certus-standard exima-max exima-x1g exima-x1d">
                                    <button class="step-5-button button-to-go nextStepActive" data-default="POMIŃ"
                                        data-trigger="DALEJ"></button>
                                    <span class="icon-icon_arrow_right"></span>
                                </div>
                            </div>
                            <div class="step-2">
                                <div class="prev-step-button">
                                    <button class="step-back-button">WRÓĆ</button>
                                    <span class="icon-icon_arrow_left"></span>
                                </div>
                                <div class="next-step-button">
                                    <button class="step-5-button nextStepActive button-to-go"
                                        data-default="DALEJ"></button>
                                    <span class="icon-icon_arrow_right"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-content">
                    <div class="assyst-content">
                        <div class="step-1 assyst-content-internal">
                            <?php $invoice = 'invoice-row-10'; ?>
                            <div class="assyst-content-wrapper common certus-neo">
                                <span class="label-top uppercase">panel asysty - 4 uchwyty</span>
                                <img src=" /img/img_panel_asysty_certus_neo.png"
                                    srcset=" /img/img_panel_asysty_certus_neo@2x.png" alt="img">
                                <div class="label-bottom"><span class="label-internal">W standardzie</span><span
                                        class="price"></span></div>
                                <button data-invoice-row="<?php echo $invoice;?>"
                                    class="assyst-main-button assyst-place" data-standard="standard" data-price="0"
                                    data-name="Panel asysty do CERTUS Neo">WYBRANO<span
                                        class="assyst-span icon-icon_check"></span></button>
                            </div>
                            <div class="assyst-content-wrapper common certus-max">
                                <span class="label-top uppercase">panel asysty - 4 uchwyty</span>
                                <img src=" /img/img_panel_asysty_certus_max.png"
                                    srcset=" /img/img_panel_asysty_certus_max@2x.png" alt="img">
                                <div class="label-bottom"><span class="label-internal">Dopłata</span><span
                                        class="price"> 800 zł</span></div>
                                <button data-invoice-row="<?php echo $invoice;?>"
                                    class="assyst-main-button assyst-place" data-price="800"
                                    data-name="Panel asysty do CERTUS Max">WYBIERAM<span
                                        class="assyst-span icon-icon_check"></span></button>
                            </div>
                            <div class="assyst-content-wrapper common certus-standard">
                                <span class="label-top uppercase">panel asysty - 3 uchwyty</span>
                                <img src=" /img/img_panel_asysty_certus_standard.png"
                                    srcset=" /img/img_panel_asysty_certus_standard_numbers@2x.png"
                                    alt="img">
                                <div class="label-bottom"><span class="label-internal">Dopłata</span><span
                                        class="price"> 600 zł</span></div>
                                <button data-invoice-row="<?php echo $invoice;?>"
                                    class="assyst-main-button assyst-place" data-price="600"
                                    data-name="Panel asysty do CERTUS Standard">WYBIERAM<span
                                        class="assyst-span icon-icon_check"></span></button>
                            </div>
                            <div class="assyst-content-wrapper common exima-neo">
                                <span class="label-top uppercase">panel asysty - 4 uchwyty</span>
                                <img src=" /img/img_panel_asysty_exima_neo.png"
                                    srcset=" /img/img_panel_asysty_exima_neo@2x.png" alt="img">
                                <div class="label-bottom"><span class="label-internal"></span><span
                                        class="price"></span></div>
                                <button data-invoice-row="<?php echo $invoice;?>"
                                    class="assyst-main-button assyst-place" data-standard="standard" data-price="0"
                                    data-name="Panel asysty do EXIMA Neo">WYBRANO<span
                                        class="assyst-span icon-icon_check"></span></button>
                            </div>
                            <div class="assyst-content-wrapper common exima-max">
                                <span class="label-top uppercase">panel asysty - 3 uchwyty</span>
                                <img src=" /img/img_panel_asysty_exima_max.png"
                                    srcset=" /img/img_panel_asysty_exima_max@2x.png" alt="img">
                                <div class="label-bottom"><span class="label-internal">Dopłata</span><span
                                        class="price"> 600 zł</span></div>
                                <button data-invoice-row="<?php echo $invoice;?>"
                                    class="assyst-main-button assyst-place" data-price="600"
                                    data-name="Panel asysty do EXIMA Max">WYBIERAM<span
                                        class="assyst-span icon-icon_check"></span></button>
                            </div>
                            <div class="assyst-content-wrapper common exima-x1g">
                                <span class="label-top uppercase">panel asysty - 3 uchwyty</span>
                                <img src=" /img/img_panel_asysty_exima_standard_x1g.png"
                                    srcset=" /img/img_panel_asysty_exima_standard_x1g@2x.png" alt="img">
                                <div class="label-bottom"><span class="label-internal">Dopłata</span><span
                                        class="price"> 600 zł</span></div>
                                <button data-invoice-row="<?php echo $invoice;?>"
                                    class="assyst-main-button assyst-place" data-price="600"
                                    data-name="Panel asysty do EXIMA x1g">WYBIERAM<span
                                        class="assyst-span icon-icon_check"></span></button>
                            </div>
                            <div class="assyst-content-wrapper common exima-x1d">
                                <span class="label-top uppercase">panel asysty - 3 uchwyty</span>
                                <img src=" /img/img_panel_asysty_exima_standard_x1d.png"
                                    srcset=" /img/img_panel_asysty_exima_standard_x1d@2x.png" alt="img">
                                <div class="label-bottom"><span class="label-internal">Dopłata</span><span
                                        class="price"> 600 zł</span></div>
                                <button data-invoice-row="<?php echo $invoice;?>"
                                    class="assyst-main-button assyst-place" data-price="600"
                                    data-name="Panel asysty do EXIMA x1d">WYBIERAM<span
                                        class="assyst-span icon-icon_check"></span></button>
                            </div>
                        </div>
                        <div class="step-2 assyst-content-internal">
                            <div class="assyst-step2-content">
                                <img class="small-panel common certus-neo"
                                    src=" /img/img_panel_asysty_certus_neo.png"
                                    srcset=" /img/img_panel_asysty_certus_neo@2x.png" alt="img">
                                <img class="small-panel common certus-max"
                                    src=" /img/img_panel_asysty_certus_max.png"
                                    srcset=" /img/img_panel_asysty_certus_max@2x.png" alt="img">
                                <img class="small-panel common certus-standard"
                                    src=" /img/img_panel_asysty_certus_standard.png"
                                    srcset=" /img/img_panel_asysty_certus_standard_numbers@2x.png"
                                    alt="img">
                                <img class="small-panel common exima-neo"
                                    src=" /img/img_panel_asysty_exima_neo.png"
                                    srcset=" /img/img_panel_asysty_exima_neo@2x.png" alt="img">
                                <img class="small-panel common exima-max"
                                    src=" /img/img_panel_asysty_exima_max.png"
                                    srcset=" /img/img_panel_asysty_exima_max@2x.png" alt="img">
                                <img class="small-panel common exima-x1g"
                                    src=" /img/img_panel_asysty_exima_standard_x1g.png"
                                    srcset=" /img/img_panel_asysty_exima_standard_x1g@2x.png" alt="img">
                                <img class="small-panel common exima-x1d"
                                    src=" /img/img_panel_asysty_exima_standard_x1d.png"
                                    srcset=" /img/img_panel_asysty_exima_standard_x1d@2x.png" alt="img">
                                <div class="assyst-step2-row">
                                    <div class="assyst-step2-card assyst-card1 panel-card-cover">
                                        <span class="icon-icon_check"></span>
                                        <p class="assyst-card">01</p>
                                        <p class="config-object panel-card-title" data-default=""></p>
                                        <p class="config-object assyst-type" data-default=""></p>
                                        <p class="config-object assyst-model" data-default=""></p>
                                        <p class="assyst-link assyst-tab-1 ass1 button-change"
                                            data-target="assyst-card-1">ZMIEŃ</p>
                                    </div>
                                    <div class="assyst-step2-card assyst-card2 panel-card-cover">
                                        <span class="icon-icon_check"></span>
                                        <p class="assyst-card">02</p>
                                        <p class="config-object panel-card-title" data-default=""></p>
                                        <p class="config-object assyst-type" data-default=""></p>
                                        <p class="config-object assyst-model" data-default=""></p>
                                        <p class="assyst-link assyst-tab-2 ass2 button-change"
                                            data-target="assyst-card-2">ZMIEŃ</p>
                                    </div>
                                    <div class="assyst-step2-card assyst-card3 panel-card-cover">
                                        <span class="icon-icon_check"></span>
                                        <p class="assyst-card">03</p>
                                        <p class="config-object panel-card-title" data-default=""></p>
                                        <p class="config-object assyst-type" data-default=""></p>
                                        <p class="config-object assyst-model" data-default=""></p>
                                        <p class="assyst-link assyst-tab-3 ass3 button-change"
                                            data-target="assyst-card-3">ZMIEŃ</p>
                                    </div>
                                    <div class="assyst-step2-card assyst-special ass4">
                                        <span class="icon-icon_check"></span>
                                        <p class="assyst-card">04</p>
                                        <p class="assyst-card-title">Domyślnie:</p>
                                        <p class="assyst-card-p">Ślinociąg</p>
                                    </div>
                                </div>
                            </div>
                            <?php for($i=1;$i<4;$i++): ?>
                            <?php $invoice = 0;?>
                            <?php
                            if($i===1) {
                                $invoice = 'invoice-row-11';
                                $invoiceS = 'invoice-row-s61';
                            }
                            else if($i===2) {
                                $invoice = 'invoice-row-12';
                                $invoiceS = 'invoice-row-s62';
                            }
                            else if($i===3) {
                                $invoice = 'invoice-row-13';
                                $invoiceS = 'invoice-row-s63';
                            }
                            ?>
                            <div
                                class="assyst-card-<?php echo $i;?> assyst-tab assyst-tab-<?php echo $i;?> choose-assyst-product">
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
                                    <button id="assyst-ssak" class="assyst-panel-choice tab2-button">Instalację
                                        ssaka</button>
                                    <?php endif; ?>
                                    <button id="assyst-piaskarka-tab-<?php echo $i; ?>"
                                        class="assyst-panel-choice tab2-button">Piaskarkę</button>
                                    <button id="assyst-strykawko-tab-<?php echo $i; ?>"
                                        class="assyst-panel-choice tab2-button">Strzykawko-dmuchawkę</button>
                                    <button id="assyst-lampa-tab-<?php echo $i; ?>"
                                        class="assyst-panel-choice tab2-button">Lampę polimeryzacyjną</button>
                                </div>
                                <?php if($i === 1):?>
                                <div id="assyst-ssak" data-tab="assyst-ssak"
                                    class="main-panel-wrapper assyst1-wrapper tab-content tab-last">
                                    <p class="tab1-text">Wybierz model:</p>
                                    <div class="checkbox-card statement-1">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Instalacja ssaka"
                                                data-name="Instalacja ssaka do pompy mokrej" type="radio"
                                                data-stmt="statement-1" id="ssak1-tab-<?php echo $i; ?>"
                                                name="tab6-tab-<?php echo $i; ?>" data-price="1000" value="">
                                            <label for="ssak1-tab-<?php echo $i; ?>"
                                                class="panel-checkbox-div">Instalacja ssaka</label>
                                        </div>
                                        <p class="panel-checkbox-p">Instalacja ssaka do pompy mokrej</p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 000 zł</p>
                                            <div class="info-icon-block" title="Skaler pneumatyczny, na złącze Midwest">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card statement-1">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Instalacja ssaka"
                                                data-name="Instalacja ssaka do pompy suchej" type="radio"
                                                data-stmt="statement-1" id="ssak2-tab-<?php echo $i; ?>"
                                                name="tab6-tab-<?php echo $i; ?>" data-price="1700" value="">
                                            <label for="ssak2-tab-<?php echo $i; ?>"
                                                class="panel-checkbox-div">Instalacja ssaka</label>
                                        </div>
                                        <p class="panel-checkbox-p">Instalacja ssaka do pompy suchej</p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1 700 zł</p>
                                            <div class="info-icon-block" title="Skaler pneumatyczny, na złącze Borden">
                                                <img class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="statement statement-1">
                                        <span class="attention-icon icon-icon_exclamation"></span>
                                        <p class="attention-p">Instalacja ssaka zajmuje 2 uchwyty na panelu asysty.</p>
                                    </div>
                                </div>
                                <?php endif; ?>
                                <div id="assyst-piaskarka-tab-<?php echo $i; ?>"
                                    data-tab="assyst-piaskarka-tab-<?php echo $i; ?>"
                                    class="main-panel-wrapper assyst1-wrapper tab-content tab-last">
                                    <p class="tab1-text">Wybierz model:</p>
                                    <!--                                    <div class="assyst-piaskarka-block tab-content">-->
                                    <div class="checkbox-card statement-1">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Piaskarka"
                                                data-name="Prophy Mate NEO PTL-P" type="radio"
                                                id="assyst-neo-ptl-p-tab-<?php echo $i; ?>" data-price="2875"
                                                name="tab6-tab-<?php echo $i; ?>" value="">
                                            <label for="assyst-neo-ptl-p-tab-<?php echo $i; ?>"
                                                class="panel-checkbox-div turn-szybko"> Prophy Mate NEO PTL-P </label>
                                        </div>
                                        <p class="panel-checkbox-p">Piaskarka do profilaktyki Prophy Mate NEO </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 875 zł</p>
                                            <div class="info-icon-block"
                                                title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img
                                                    class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Piaskarka"
                                                data-name="Prophy Mate NEO M4-P" type="radio"
                                                id="assyst-neo-m4-p-tab-<?php echo $i; ?>" data-price="2788"
                                                name="tab6-tab-<?php echo $i; ?>" value="">
                                            <label for="assyst-neo-m4-p-tab-<?php echo $i; ?>"
                                                class="panel-checkbox-div"> Prophy Mate NEO M4-P</label>
                                        </div>
                                        <p class="panel-checkbox-p">Piaskarka do profilaktyki Prophy Mate NEO </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2 788 zł</p>
                                            <div class="info-icon-block"
                                                title="Piaskarka na rękaw Midwest (kolor szary) - Tajwan"><img
                                                    class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card statement-2">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Piaskarka"
                                                data-name="Perio Mate PTL-P" type="radio"
                                                id="assyst-ptl-p-tab-<?php echo $i; ?>" data-price="3335"
                                                name="tab6-tab-<?php echo $i; ?>" value="">
                                            <label for="assyst-ptl-p-tab-<?php echo $i; ?>"
                                                class="panel-checkbox-div turn-szybko"> Perio Mate PTL-P</label>
                                        </div>
                                        <p class="panel-checkbox-p">Piaskarka do periodontologii Perio Mate </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 335 zł</p>
                                            <div class="info-icon-block"
                                                title="Piaskarka do zabiegów perio na szybkozłączkę PTL-CL (NSK)"><img
                                                    class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Piaskarka"
                                                data-name="Perio Mate M4-P" type="radio"
                                                id="assyst-m4-p-tab-<?php echo $i; ?>" data-price="3050"
                                                name="tab6-tab-<?php echo $i; ?>" value="">
                                            <label for="assyst-m4-p-tab-<?php echo $i; ?>" class="panel-checkbox-div">
                                                Perio Mate M4-P </label>
                                        </div>
                                        <p class="panel-checkbox-p">Piaskarka do periodontologii Perio Mate </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">3 050 zł</p>
                                            <div class="info-icon-block"
                                                title="Piaskarka do zabiegów perio na rękaw Midwest"><img
                                                    class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <!--                                    </div>-->
                                    <?php for($j=1;$j<3;$j++):?>
                                    <div class="statement statement-<?php echo $j;?>">
                                        <input data-invoice-row="<?php echo $invoiceS;?>" type="radio"
                                            data-name="szybkozłączka PTL-CL-LED" data-price="830" class="input-stmt"
                                            name="tab<?php echo $i;?>-stmt">
                                        <span class="tur-attention-icon attention-icon icon-icon_exclamation"></span>
                                        <p class="tur-attention-icon attention-p">Do tego modelu turbiny dołączana jest
                                            szybkozłączka PTL-CL-LED w cenie <span class="turbina-bold-price"
                                                style="color: #50515C;">830 zł</span></p>
                                    </div>
                                    <?php endfor;?>
                                </div>
                                <div id="assyst-strykawko-tab-<?php echo $i; ?>"
                                    data-tab="assyst-strykawko-tab-<?php echo $i; ?>"
                                    class="main-panel-wrapper assyst1-wrapper tab-content tab-last">
                                    <p class="tab1-text">Wybierz model:</p>
                                    <!--                                    <div class="tab1-row tab-content">-->
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>"
                                                data-type="Strykawko-dmuchawka" data-name="DMUCHAWKA DCI" type="radio"
                                                id="assyst-dmuchawka-dci-tab-<?php echo $i; ?>" data-price="0"
                                                name="tab6-tab-<?php echo $i; ?>" value="">
                                            <label for="assyst-dmuchawka-dci-tab-<?php echo $i; ?>"
                                                class="panel-checkbox-div turn-szybko"> DMUCHAWKA DCI </label>
                                        </div>
                                        <p class="panel-checkbox-p">Dodatkowa dmuchawka 3-funkcyjna DCI na panelu
                                            asysty, kątowa lub prosta </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">0 zł</p>
                                            <div class="info-icon-block"
                                                title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img
                                                    class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>"
                                                data-type="Strykawko-dmuchawka" data-name="LUZANI MINI MATE"
                                                type="radio" id="assyst-dmuchawka-luzani-mate-tab-<?php echo $i; ?>"
                                                data-price="900" name="tab6-tab-<?php echo $i; ?>" value="">
                                            <label for="assyst-dmuchawka-luzani-mate-tab-<?php echo $i; ?>"
                                                class="panel-checkbox-div turn-szybko">LUZANI MINI MATE </label>
                                        </div>
                                        <p class="panel-checkbox-p">Dmuchawka 3-funkcyjna </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">900 zł</p>
                                            <div class="info-icon-block"
                                                title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img
                                                    class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>"
                                                data-type="Strykawko-dmuchawka" data-name="LUZANI MINI BRIGHT"
                                                type="radio" id="assyst-dmuchawka-luzani-bright-tab-<?php echo $i; ?>"
                                                data-price="1650" name="tab6-tab-<?php echo $i; ?>" value="">
                                            <label for="assyst-dmuchawka-luzani-bright-tab-<?php echo $i; ?>"
                                                class="panel-checkbox-div turn-szybko">LUZANI MINI BRIGHT </label>
                                        </div>
                                        <p class="panel-checkbox-p"><span class="bold-text">Dmuchawka 6-funkcyjna
                                                zpodgrzewaniem i światłem </span></p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1650 zł</p>
                                            <div class="info-icon-block"
                                                title="Piaskarka na szybkozłączkę PTL-CL (NSK) (kolor szary)"><img
                                                    class="info-icon" src=" /img/info.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <!--                                    </div>-->
                                </div>
                                <div id="assyst-lampa-tab-<?php echo $i; ?>"
                                    data-tab="assyst-lampa-tab-<?php echo $i; ?>"
                                    class="main-panel-wrapper assyst1-wrapper assyst-bottom-button tab-content tab-last">
                                    <p class="tab1-text">Wybierz model:</p>
                                    <!--                                    <div class="assyst-lampa-block tab-content">-->
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Lampa"
                                                data-name="MOON" type="radio" id="assyst1-moon-tab-<?php echo $i; ?>"
                                                data-price="2300" name="tab6-tab-<?php echo $i; ?>" value="">
                                            <label for="assyst1-moon-tab-<?php echo $i; ?>" class="panel-checkbox-div">
                                                MOON </label>
                                        </div>
                                        <p class="panel-lamp-p">TKD - Włochy</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">2300 zł</p>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Lampa"
                                                data-name="ULTRALIGHT" type="radio"
                                                id="assyst1-ultralight-tab-<?php echo $i; ?>" data-price="1800"
                                                name="tab6-tab-<?php echo $i; ?>" value="">
                                            <label for="assyst1-ultralight-tab-<?php echo $i; ?>"
                                                class="panel-checkbox-div"> ULTRALIGHT </label>
                                        </div>
                                        <p class="panel-lamp-p">FINEVISION - Tajwan</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">1800 zł</p>
                                        </div>
                                    </div>
                                    <div class="checkbox-card">
                                        <div class="panel-checkbox-place"><input
                                                data-invoice-row="<?php echo $invoice;?>" data-type="Lampa"
                                                data-name="BUILT-IN C" type="radio"
                                                id="assyst1-built-in-tab-<?php echo $i; ?>" data-price="700"
                                                name="tab6-tab-<?php echo $i; ?>" value="">
                                            <label for="assyst1-built-in-tab-<?php echo $i; ?>"
                                                class="panel-checkbox-div"> BUILT-IN C </label>
                                        </div>
                                        <p class="panel-lamp-p">WOODPECKER - Chiny</p>
                                        <p class="panel-checkbox-p">Lampa polimeryzacyjna do wbudowania do unitu </p>
                                        <div class="panel-price">
                                            <p class="panel-checkbox-price">700 zł</p>
                                        </div>
                                    </div>
                                    <!--                                    </div>-->
                                </div>
                                <div class="tab<?php echo $i; ?>-bottom-accept">
                                    <button class="tab<?php echo $i; ?>-cancel btn-doctor-panel-cancel">ANULUJ</button>
                                    <button
                                        class="tab<?php echo $i; ?>-cancel btn-doctor-panel-accept">ZATWIERDŹ</button>
                                </div>
                            </div>
                            <?php endfor; ?>
                        </div>
                    </div>
                </div>
            </section>
            <!--        invoice 14,15,16,17-->
            <!-- 7855 -->
            <section id="tab7" class="tab-content hide">
                <div class="brand-choose-sidebar">
                    <div class="brand-sidebar-wrapper">
                        <div class="product-list">
                            <div id="fotel-additional" class="choosen-brand tab7-mikro-tab additional-product-tab1"
                                data-target="fotel-additional">
                                <p class="brand-name">FOTELIKI LEKARSKIE I PODKŁADKI</p>
                                <p class="brand-price"></p><span class="choosen-brand-sign fotel-span"></span>
                            </div>
                            <div class="additional-product-summary" id="siodlo1">
                                <div class="additional-product-name"></div>
                                <div class="additional-product-amount"></div>
                                <span class="additional-product-close icon-icon_close_small"></span>
                            </div>
                            <div class="additional-product-summary" id="siodlo2">
                                <div class="additional-product-name"></div>
                                <div class="additional-product-amount"></div>
                                <span class="additional-product-close icon-icon_close_small"></span>
                            </div>
                            <div id="kamery-additional" class="choosen-brand tab7-mikro-tab"
                                data-target="kamery-additional">
                                <p class="brand-name">KAMERY WEWNĄTRZUSTNE I MONITORY MEDYCZNE</p>
                                <p class="brand-price"></p><span class="choosen-brand-sign "></span>
                            </div>
                            <div class="additional-product-summary" id="camera1">
                                <div class="additional-product-name"></div>
                                <div class="additional-product-amount"></div>
                                <span class="additional-product-close icon-icon_close_small"></span>
                            </div>
                            <div class="additional-product-summary" id="camera2">
                                <div class="additional-product-name"></div>
                                <div class="additional-product-amount"></div>
                                <span class="additional-product-close icon-icon_close_small"></span>
                            </div>
                            <div id="kompressor-additional" class="choosen-brand tab7-mikro-tab additional-product-tab2"
                                data-target="kompressor-additional">
                                <p class="brand-name">KOMPRESORY</p>
                                <p class="brand-price"></p><span class="choosen-brand-sign kompresor-span"></span>
                            </div>
                            <div class="additional-product-summary" id="kompressor1">
                                <div class="additional-product-name"></div>
                                <div class="additional-product-amount"></div>
                                <span class="additional-product-close icon-icon_close_small"></span>
                            </div>
                            <div class="additional-product-summary" id="kompressor2">
                                <div class="additional-product-name"></div>
                                <div class="additional-product-amount"></div>
                                <span class="additional-product-close icon-icon_close_small"></span>
                            </div>
                            <div id="pompy-additional" class="choosen-brand tab7-mikro-tab"
                                data-target="pompy-additional">
                                <p class="brand-name">POMPY SSAKA</p>
                                <p class="brand-price"></p><span class="choosen-brand-sign "></span>
                            </div>
                            <div class="additional-product-summary" id="pompa1">
                                <div class="additional-product-name"></div>
                                <div class="additional-product-amount"></div>
                                <span class="additional-product-close icon-icon_close_small"></span>
                            </div>
                            <div class="additional-product-summary" id="pompa2">
                                <div class="additional-product-name"></div>
                                <div class="additional-product-amount"></div>
                                <span class="additional-product-close icon-icon_close_small"></span>
                            </div>
                            <div class="additional-product-summary" id="pompa3">
                                <div class="additional-product-name"></div>
                                <div class="additional-product-amount"></div>
                                <span class="additional-product-close icon-icon_close_small"></span>
                            </div>
                            <div class="additional-product-summary" id="pompa4">
                                <div class="additional-product-name"></div>
                                <div class="additional-product-amount"></div>
                                <span class="additional-product-close icon-icon_close_small"></span>
                            </div>
                        </div>
                        <div class="tab1-summary">
                            <div class="brand-price-summary">
                                <p class="brand-summary">Wyposażenie dodatkowe:</p>
                                <p class="price-summary"><span class="pr" data-added-panel-cost="0"></span> zł</p>
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
                <div class="main-content model-content">
                    <div class="model-card-wrapper">
                        <?php
                    $invoice711 = 'invoice-row-711';
                    $invoice712 = 'invoice-row-712';
                    ?>
                        <div id="fotel-additional" class="seat-and-additional additional-tab active">
                            <div class="model-card-cover">
                                <div class="model-card final-seat seat1">
                                    <div class="model-over-hidden">
                                        <p class="model-name">ROGAL</p><img src=" /img/rogal.jpg"
                                            alt="image">
                                        <p class="fotel-description fotel-description-1 ">Fotelik lekarski z podstawą
                                            chromowaną</p>
                                        <p class="additional-product-price">850 zł</p>
                                        <div class="additional-row-amount">
                                            <p class="amount-additional">Liczba sztuk:</p><input type="number" step="1"
                                                class="additional-number-input" placeholder="0" value="1" />
                                        </div>
                                    </div>
                                    <div class="dodatki-button">
                                        <button data-invoice-row="<?php echo $invoice711;?>" data-type="Dodatek"
                                            data-price="850" data-name="ROGAL" data-target="siodlo1"
                                            class="model-button seat-final"><span class="label-button">DODAJ</span><span
                                                class="icon-icon_check"></span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="model-card-cover">
                                <div class="model-card final-seat seat2">
                                    <div class="model-over-hidden">
                                        <p class="model-name">SIODŁO</p><img src=" /img/siodlo.jpg"
                                            alt="image">
                                        <p class="fotel-description fotel-description-2" placeholder="69">Fotelik
                                            lekarski z
                                            ergonomicznym siedziskiem</p>
                                        <p class="additional-product-price">900 zł</p>
                                        <div class="additional-row-amount">
                                            <p class="amount-additional">Liczba sztuk:</p><input data-type=""
                                                type="number" step="1" class="additional-number-input additO"
                                                placeholder="0" value="1" />
                                        </div>
                                    </div>
                                    <div class="dodatki-button">
                                        <button data-invoice-row="<?php echo $invoice712;?>" data-type="Dodatek"
                                            data-price="900" data-name="SIODŁO" data-target="siodlo2"
                                            class="model-button seat-final"><span class="label-button">DODAJ</span><span
                                                class="icon-icon_check"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php
                    $invoice721 = 'invoice-row-721';
                    $invoice722 = 'invoice-row-722';
                    ?>
                        <div id="kamery-additional" class="seat-and-additional additional-tab">
                            <div class="model-card-cover">
                                <div class="model-card final-seat seat1">
                                    <div class="model-over-hidden">
                                        <p class="model-name">Neovo X-17</p><img
                                            src=" /img/img_NEOVO X-17@2x.png" alt="image">
                                        <p class="fotel-description fotel-description-1 ">Do Zmiany</p>
                                        <p class="additional-product-price">100 zł</p>
                                        <div class="additional-row-amount">
                                            <p class="amount-additional">Liczba sztuk:</p><input data-type=""
                                                type="number" step="1" class="additional-number-input" placeholder="0"
                                                value="1" />
                                        </div>
                                    </div>
                                    <div class="dodatki-button">
                                        <button data-invoice-row="<?php echo $invoice721;?>" data-type="Kamera"
                                            data-price="100" data-name="Neovo X-17" data-target="camera1"
                                            class="model-button cam1"><span class="label-button">DODAJ</span><span
                                                class="icon-icon_check"></span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="model-card-cover">
                                <div class="model-card final-seat seat2">
                                    <div class="model-over-hidden">
                                        <p class="model-name">ADVANCE CAM</p><img
                                            src=" /img/img_ADVANCE CAM@2x.png" alt="image">
                                        <p class="fotel-description fotel-description-2" placeholder="69">Do Zmiany</p>
                                        <p class="additional-product-price">100 zł</p>
                                        <div class="additional-row-amount">
                                            <p class="amount-additional">Liczba sztuk:</p><input data-type=""
                                                type="number" step="1" class="additional-number-input additO"
                                                placeholder="0" value="1" />
                                        </div>
                                    </div>
                                    <div class="dodatki-button">
                                        <button data-invoice-row="<?php echo $invoice722;?>" data-type="Monitor"
                                            data-price="100" data-name="ADVANCE CAM" data-target="camera2"
                                            class="model-button cam2"><span class="label-button">DODAJ</span><span
                                                class="icon-icon_check"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php
                    $invoice731 = 'invoice-row-731';
                    $invoice732 = 'invoice-row-732';
                    ?>
                        <div id="kompressor-additional" class="additional-product-tab3 kompressors-tab additional-tab">
                            <div class="fotel-card-cover model-card-cover">
                                <div class="model-card">
                                    <div class="model-over-hidden">
                                        <p class="model-name">DK-50Z-10</p><img
                                            src=" /img/img_DK-50Z-10.png" alt="image">
                                        <p class="kompressor-description ">Kompresor bezolejowy w obudowie wygłuszającej
                                        </p>
                                        <p class="kompressor-additional">Wydajność 80 l./min. przy p.=0, zbiornik 10 l.
                                        </p>
                                        <p class="additional-product-price">5490 zł</p>
                                        <div class="additional-row-amount">
                                            <p class="amount-additional">Liczba sztuk:</p><input data-type=""
                                                type="number" step="1" class="additional-number-input" placeholder="0"
                                                value="1" />
                                        </div>
                                    </div>
                                    <div class="dodatki-button">
                                        <button data-invoice-row="<?php echo $invoice731;?>" data-type="Kompressor"
                                            data-price="5490" data-name="DK-50Z-10" data-target="kompressor1"
                                            class="model-button komp1"><span class="label-button">DODAJ</span><span
                                                class="icon-icon_check"></span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="fotel-card-cover model-card-cover">
                                <div class="model-card">
                                    <div class="model-over-hidden">
                                        <p class="model-name">DÜRR TORNADO 70</p><img
                                            src=" /img/img_DÜRR-tornado.png" alt="image">
                                        <p class="kompressor-description ">Kompresor bezolejowy w obudowie wygłuszającej
                                        </p>
                                        <p class="kompressor-additional">Wydajność 70 l./min., przy p.=0, zbiornik 20 l.
                                        </p>
                                        <p class="additional-product-price">5490 zł</p>
                                        <div class="additional-row-amount">
                                            <p class="amount-additional">Liczba sztuk:</p><input data-type=""
                                                type="number" step="1" class="additional-number-input" placeholder="0"
                                                value="1" />
                                        </div>
                                    </div>
                                    <div class="dodatki-button">
                                        <button data-invoice-row="<?php echo $invoice732;?>" data-type="Kompressor"
                                            data-price="5490" data-name="DÜRR TORNADO 70" data-target="kompressor2"
                                            class="model-button komp2"><span class="label-button">DODAJ</span><span
                                                class="icon-icon_check"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php
                    $invoice741 = 'invoice-row-741';
                    $invoice742 = 'invoice-row-742';
                    $invoice743 = 'invoice-row-743';
                    $invoice744 = 'invoice-row-744';
                    ?>
                        <div id="pompy-additional" class="seat-and-additional additional-tab">
                            <div class="model-card-cover">
                                <div class="model-card final-seat seat1">
                                    <div class="model-over-hidden">
                                        <p class="model-name">Mono-Jet</p>
                                        <div class="pompy-foto"
                                            style="width: 200px; height:327px; margin: 35px 0 10px;">
                                        </div>
                                        <p class="fotel-description fotel-description-1 ">Ssak chirurgiczny z instalacją
                                            (Cattani - W</p>
                                        <p class="additional-product-price">5 800 zł</p>
                                        <div class="additional-row-amount">
                                            <p class="amount-additional">Liczba sztuk:</p><input data-type=""
                                                type="number" step="1" class="additional-number-input" placeholder="0"
                                                value="1" />
                                        </div>
                                    </div>
                                    <div class="dodatki-button">
                                        <button data-invoice-row="<?php echo $invoice741;?>" data-type="Pompa Ssaka"
                                            data-price="5800" data-name="Mono-Jet" data-target="pompa1"
                                            class="model-button pomp1"><span class="label-button">DODAJ</span><span
                                                class="icon-icon_check"></span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="model-card-cover">
                                <div class="model-card final-seat seat2">
                                    <div class="model-over-hidden">
                                        <p class="model-name">Turbo-Jet</p>
                                        <div class="pompy-foto"
                                            style="width: 200px; height:327px; margin: 35px 0 10px;">
                                        </div>
                                        <p class="fotel-description fotel-description-2" placeholder="69">Ssak
                                            chirurgiczny
                                            z separatorem amalgamatu z instalacją (Cattani - Włochy)</p>
                                        <p class="additional-product-price">7 400 zł</p>
                                        <div class="additional-row-amount">
                                            <p class="amount-additional">Liczba sztuk:</p><input data-type=""
                                                type="number" step="1" class="additional-number-input additO"
                                                placeholder="0" value="1" />
                                        </div>
                                    </div>
                                    <div class="dodatki-button">
                                        <button data-invoice-row="<?php echo $invoice742;?>" data-type="Pompa Ssaka"
                                            data-price="7400" data-name="Turbo-Jet" data-target="pompa2"
                                            class="model-button pomp2"><span class="label-button">DODAJ</span><span
                                                class="icon-icon_check"></span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="model-card-cover">
                                <div class="model-card final-seat seat1">
                                    <div class="model-over-hidden">
                                        <p class="model-name">VS 300 S</p>
                                        <div class="pompy-foto"
                                            style="width: 200px; height:327px; margin: 35px 0 10px;">
                                        </div>
                                        <p class="fotel-description fotel-description-1 ">Ssak chirurgiczny z instalacją
                                            (Dürr Dental - Niemcy)</p>
                                        <p class="additional-product-price">5 800 zł</p>
                                        <div class="additional-row-amount">
                                            <p class="amount-additional">Liczba sztuk:</p><input data-type=""
                                                type="number" step="1" class="additional-number-input" placeholder="0"
                                                value="1" />
                                        </div>
                                    </div>
                                    <div class="dodatki-button">
                                        <button data-invoice-row="<?php echo $invoice743;?>" data-type="Pompa Ssaka"
                                            data-price="5800" data-name="VS 300 S" data-target="pompa3"
                                            class="model-button pomp3"><span class="label-button">DODAJ</span><span
                                                class="icon-icon_check"></span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="model-card-cover">
                                <div class="model-card final-seat seat2">
                                    <div class="model-over-hidden">
                                        <p class="model-name">UNI-JET 75 D30</p>
                                        <div class="pompy-foto"
                                            style="width: 200px; height:327px; margin: 35px 0 10px;">
                                        </div>
                                        <p class="fotel-description fotel-description-2" placeholder="69">Pompa ssaków,
                                            sucha (Cattani - Włochy)</p>
                                        <p class="additional-product-price">2 500 zł</p>
                                        <div class="additional-row-amount">
                                            <p class="amount-additional">Liczba sztuk:</p><input data-type=""
                                                type="number" step="1" class="additional-number-input additO"
                                                placeholder="0" value="1" />
                                        </div>
                                    </div>
                                    <div class="dodatki-button">
                                        <button data-invoice-row="<?php echo $invoice744;?>" data-type="Pompa Ssaka"
                                            data-price="2500" data-name="UNI-JET 75 D30" data-target="pompa4"
                                            class="model-button pomp4"><span class="label-button">DODAJ</span><span
                                                class="icon-icon_check"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="tab8" class="tab-content hide">
                <div class="tab-summary">
                    <div class="for-print-section" style="font-family: 'zeitung-micro',sans-serif;">

                        <div id="invoice">
                            <p class="summary-top-title"
                                style="color:#32333B;font-size:20px;line-height:30px;font-weight:700;padding-bottom:25px;">
                                <b>Konfiguracja unitu stomatologicznego</b></p>
                            <table class="table table-striped" style="width:850px">
                                <colgroup>
                                    <col width="30%">
                                    <col width="40%">
                                    <col width="30%">
                                </colgroup>
                                <thead>
                                    <tr class='warning'>
                                        <th>Produkt</th>
                                        <th>Wersja</th>
                                        <th>Cena</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="invoice-row-1" class="invoice-row hidden">
                                        <td class="product" data-default="Panel"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-2" class="invoice-row hidden">
                                        <td class="product" data-default="Kolor unitu"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="Biały RAL 9016"></span></td>
                                        <td class="price-label"><span class="pr">0</span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-3" class="invoice-row hidden">
                                        <td class="product" data-default="Kolor spluwaczki w kolorze tapicerki"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-4" class="invoice-row hidden">
                                        <td class="product" data-default="Lampa"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <!--                                step 5-->
                                    <tr id="invoice-row-5" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 1)"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="Strzykawko-dmuchawka"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-6" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 2)"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-s52" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 2) szybkozłączka"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-k52" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 2) kątnica"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-p52" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 2) prostnica"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-7" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 3)"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-s53" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 3) szybkozłączka"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-k53" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 3) kątnica"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-p53" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 3) prostnica"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-8" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 4)"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-s54" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 4) szybkozłączka"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-k54" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 4) kątnica"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-p54" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 4) prostnica"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-9" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 5)"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-s55" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 5) szybkozłączka"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-k55" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 5) kątnica"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-p55" class="invoice-row hidden">
                                        <td class="product" data-default="Panel doktora (rękaw 5) prostnica"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <!--                            step 6-->
                                    <tr id="invoice-row-10" class="invoice-row hidden">
                                        <td class="product" data-default="Panel asysty"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-11" class="invoice-row hidden">
                                        <td class="product" data-default="Panel asysty (miejsce 1)"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-s61" class="invoice-row hidden">
                                        <td class="product" data-default="Panel asysty (miejsce 1) szybkozłączka"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-12" class="invoice-row hidden">
                                        <td class="product" data-default="Panel asysty (miejsce 2)"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-s62" class="invoice-row hidden">
                                        <td class="product" data-default="Panel asysty (miejsce 2) szybkozłączka"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-13" class="invoice-row hidden">
                                        <td class="product" data-default="Panel asysty (mioejsce 3)"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-s62" class="invoice-row hidden">
                                        <td class="product" data-default="Panel asysty (miejsce 1) szybkozłączka"></td>
                                        <td class="version"><span class="counter" data-default=""></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <!--                            step 7-->
                                    <tr id="invoice-row-711" class="invoice-row hidden">
                                        <td class="product" data-default="Dodatek: Fotelik lekarski"></td>
                                        <td class="version"><span class="counter" data-default="1"></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-712" class="invoice-row hidden">
                                        <td class="product" data-default="Dodatek: Fotelik lekarski"></td>
                                        <td class="version"><span class="counter" data-default="1"></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>

                                    <tr id="invoice-row-721" class="invoice-row hidden">
                                        <td class="product" data-default="Dodatek: Monitor medyczny"></td>
                                        <td class="version"><span class="counter" data-default="1"></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-722" class="invoice-row hidden">
                                        <td class="product" data-default="Dodatek: Kamera wewnątrzustna"></td>
                                        <td class="version"><span class="counter" data-default="1"></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>

                                    <tr id="invoice-row-731" class="invoice-row hidden">
                                        <td class="product" data-default="Dodatek: Kompresor"></td>
                                        <td class="version"><span class="counter" data-default="1"></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-732" class="invoice-row hidden">
                                        <td class="product" data-default="Dodatek: Kompresor"></td>
                                        <td class="version"><span class="counter" data-default="1"></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>

                                    <tr id="invoice-row-741" class="invoice-row hidden">
                                        <td class="product" data-default="Dodatek: Ssak chirurgiczny"></td>
                                        <td class="version"><span class="counter" data-default="1"></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-742" class="invoice-row hidden">
                                        <td class="product" data-default="Dodatek: Ssak chirurgiczny"></td>
                                        <td class="version"><span class="counter" data-default="1"></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-743" class="invoice-row hidden">
                                        <td class="product" data-default="Dodatek: Ssak chirurgiczny"></td>
                                        <td class="version"><span class="counter" data-default="1"></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                    <tr id="invoice-row-744" class="invoice-row hidden">
                                        <td class="product" data-default="Dodatek: Pompa ssaków"></td>
                                        <td class="version"><span class="counter" data-default="1"></span><span
                                                class="label" data-default="NIE"></span></td>
                                        <td class="price-label"><span class="pr" data-default="0"></span> zł</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr style="color: #32333B;">
                                        <td style="height:40px; line-height: 40px; font-size: 10px;"><b>Podane ceny są
                                                cenami brutto.</b></td>
                                        <td style="height:40px; line-height: 40px;"></td>
                                        <td class="pdf-price"
                                            style="height:40px; line-height: 40px; text-align:end;font-weight:700">Suma:
                                            <span class="total-price-invoice" data-default="0"></span> zł</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        
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
                                            <img src=" /img/makromed.png" style="width:101px" alt="image">
                                        </td>
                                        <td style="width: 60%;height:40px ">
                                            <img src=" /img/exima-logo.png" alt="image" style="width:72px">
                                            <img src=" /img/certus-logo.png"
                                                style="width:77px;padding-right:20px;" alt="image">
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
                                        <td
                                            style="width: 60%;font-size:7px;line-height:12px;text-align:left;margin-left:-100px">
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
                    <div class="tab8-buttons">
                        <div class="prev-step-button">
                            <button class="step-back-button">WRÓĆ</button>
                            <span class="icon-icon_arrow_left"></span>
                        </div>
                        <button class="print-pdf-button">POBIERZ PDF</button>
                        <a href="#ex1" rel="modal:open" class="pdf-sender">WYSLIJ NA EMAIL</a>
                    </div>
                </div>
                <div id="ex1" class="modal">
                    <form method="POST" id="contact-form" enctype="multipart/form-data">
                        <div class="form-alert"></div>
                        <p class="mail-asker">Podaj swój adres e-mail oraz załącz wygenerowany *.pdf:</p>
                        <label for="email" class="common form-email">
                            <input name="contact[email]" type="email" id="email" placeholder="E-mail" required
                                class="regular" />
                        </label>
                        <!--                <input type="email" id="email" required>-->
                        <input type="file" name="fileToUpload" id="fileToUpload">
                        <label class="container-checkbox form-agreements" for="agreements-bottom">
                            <input name="contact[agreements]" id="agreements-bottom" type="checkbox"><span
                                class="checkmark"></span><span class="text">Wyrażam zgodę na przetwarzanie danych <a
                                    class="about-rodo" href="./2018_07_RODO_na_oplatomaty24.pdf"
                                    download="info_rodo">Info o RODO</a></span>
                        </label>
                        <!--                <p class="regulations"><input type="checkbox" name="newsletter[regulations]" id="regulations"><label for="regulations">Zgadzam się na <a href="/polityka-prywatnosci/">zasady prywatności</a> serwisu</label> </p>-->
                        <input type="submit" value="Wyślij" class="btn-send">
                    </form>
                </div>
            </section>
        </div>
        <div class="beta-version">Wersja Beta 1.1.15</div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
    <!--<script src=" /script/jquery-ui-1.9.2.custom.min.js"></script>-->
    <script src=" /script/jquery-ui-1.9.2.custom.min.js"></script>
    <!--<script src=" /script/jquery-ui.js"></script>-->
    <script src=" /script/jquery-ui.js"></script>
    <!--<script type="text/javascript" src=" /orbitvu12_basic/orbitvu.js"></script>-->
    <script type="text/javascript" src=" /orbitvu12_basic/orbitvu.js"></script>
    <!--<script type="text/javascript" src=" /orbitvu12_basic/swfobject.js"></script>-->
    <script type="text/javascript" src=" /orbitvu12_basic/swfobject.js"></script>
    <!--<script src=" /script/script.js"> </script>-->
    <script src=" /script/script.js"></script>
    <script src=" /script/form-alert.js"></script>
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