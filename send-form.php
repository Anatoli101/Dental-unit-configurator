<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (isset($_POST['contact']) ) {

        $post = $_POST['contact'];

        $errors = array();
//        if(!($post['name'])) $errors['name'] = 1;
//        if(!$post['companyname']) $errors['companyname'] = 1;
        if(!$post['email'] || !preg_match('/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i',$post['email'])) $errors['email'] = 1;
//        if(!$post['tel'] || !preg_match("/^[0-9]{3}[0-9]{3}[0-9]{3}$/", $post['tel'])) $errors['tel'] = 1;
        if(empty($post['agreements'])) $errors['agreements'] = 1;


        if(empty($errors)) {
//            $target_dir = "uploads/";
//            $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
//            $uploadOk = 1;
//            $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));


            $header = 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/html; charset=UTF-8' . "\r\n";
            $header .= 'From: lewapkyzcrok@gmail.com'."\r\n" .
                'Reply-To: '.$post['email'] . "\r\n" .
                'X-Mailer: PHP/' . phpversion();
            $msg .= "Dane do kontaktu: <br /><br />";
            $msg .= "Email: ".$post['email']."<br />";

            $email = "lewapkyzcrok@gmail.com";

            mail($email, 'Wiadomość ze strony', $msg, $header);


//            $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
//            if($check !== false) {
//                echo "File is an image - " . $check["mime"] . ".";
//                $uploadOk = 1;
//                echo json_encode(array('success' => 1, 'msg' => 'Wiadomość została wysłana'));
//            } else {
//                echo "File is not an image.";
//                $uploadOk = 0;
//                echo json_encode(array('success' => 0, 'msg' => 'Wiadomość nie została wysłana'));
//            }
            echo json_encode(array('success' => 1, 'msg' => 'Wiadomość została wysłana'));
        } else {

            echo json_encode(array('success' => 0, 'msg' => 'Błędnie wypełniony formularz!', 'errors' => $errors));

        }
    }
    return '';
}
