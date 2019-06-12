<?php
require_once('./tcpdf/tcpdf.php');
	    $pdf = new TCPDF();
	    $pdf->SetFont('freesans',null,10);
	    //$pdf->SetFont('zeitung-micro',null,10);
	    $pdf->SetPrintHeader(false);
	    $pdf->SetPrintFooter(false);
	    $pdf->setFontSubsetting(true);
	    $pdf->setPageOrientation("P");
	    $pdf->SetMargins(10, 15, 10);
	    $pdf->AddPage();
		// $pdf->addTTFfont("https://use.typekit.net/bzk0zrk.css");
	    
            
        $content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta http-equiv="content-type" content="text/html; charset=UTF-8" /></head><body>'."\r\n";
	    
		$content.= $_POST['print'];
		
		
		
		
		
		$content.="</body></html>";
		

	    $pdf->writeHTMLCell($w=0, $h=0, $x='', $y='', $content, $border=0, $ln=1, $fill=0, $reseth=true, $align='', $autopadding=true);
        $pdf->Output("Unit_configuration.pdf",'I');
        
        
?>