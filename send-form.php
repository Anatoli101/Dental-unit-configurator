<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (isset($_POST['contact']) ) {

        $post = $_POST['contact'];

        $errors = array();
        if(!$post['email'] || !preg_match('/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i',$post['email'])) $errors['email'] = 1;
        if(empty($post['agreements'])) $errors['agreements'] = 1;


        if(empty($errors)) {

            $uploadOk = true;

            if (isset($_FILES['file'])) {
                switch ($_FILES['file']["error"]) {
                    case UPLOAD_ERR_OK:

                        $actualLink = $_SERVER['DOCUMENT_ROOT'];
                        $ds          = DIRECTORY_SEPARATOR;
                        $storeFolder = 'upload';
//                        $target = $actualLink.$ds. $storeFolder . $ds;  wersja na serwer
                        $target = $actualLink. $storeFolder . $ds;
                        $file = basename($_FILES['file']['name']);
                        $removeExtension = explode('.',$file);
                        $name = $removeExtension[0];
                        $ext = $removeExtension[1];
                        $name2 = $name.date("m-d-y").'('.date("h:i:sa").')'.".$ext";
                        $target = $target.$name2;


                        $fileType = strtolower(pathinfo($target, PATHINFO_EXTENSION));
                        if ($_FILES["file"]["size"] > 500000) {
                            $uploadOk = false;
                            echo json_encode(array('success' => 0, 'msg' => 'Załączony plik jest zbyt duży '.$target));
                        }
                        if($fileType != "pdf") {
                            $uploadOk = false;
                            echo json_encode(array('success' => 0, 'msg' => 'Załączony plik nie ma rozszerzenia *.pdf '.$target));
                        }

                        if($uploadOk) {
                            if (move_uploaded_file($_FILES['file']['tmp_name'], $target)) {

                                $actualLink = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
                                $target = $actualLink.$ds.$storeFolder.$ds.$name2;

                                /*
                                $header = 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/html; charset=UTF-8' . "\r\n";
                                $header .= 'From: lewapkyzcrok@gmail.com'."\r\n" .
                                    'Reply-To: '.$post['email'] . "\r\n" .
                                    'X-Mailer: PHP/' . phpversion();
                                $msg .= "Dane do kontaktu: <br /><br />";
                                $msg .= "Email: ".$post['email']."<br />";
                                $msg .= "Plik do pobrania: <a href=".$target.">".$name.".$ext"."</a><br />";

                                $email = "lewapkyzcrok@gmail.com";
                                mail($email, 'Wiadomość ze strony', $msg, $header);
                                */

                                echo json_encode(array('success' => 1, 'msg' => 'Wysłano wiadomość'));
                            }
                            else {
                                echo json_encode(array('success' => 0, 'msg' => 'Błąd w wysyłaniu plik na serwer'.$target));
                            }
                        }
                        break;
                }
            }

        } else {
            echo json_encode(array('success' => 0, 'msg' => 'Błędnie wypełniony formularz!', 'errors' => $errors));
        }
    }
    return '';
}