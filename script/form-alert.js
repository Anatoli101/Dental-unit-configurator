function prepareForm(_btn,_form) {
    $(_form).find(_btn).on('click',function() {
        $.ajax(
            {
                type: "POST",
                url: "./../send-form.php",
                data: $(_form).serialize(),
                success: function(data)
                {
                    alert(data);
                    data = $.parseJSON(data);

                    if(data['success'] == 1)
                    {
                        $(_form).find('.form-alert').addClass('msg-success').html(data['msg']).show().delay(5000).fadeOut(400,function() { $(this).removeClass('msg-success msg-error');  });
                        $(_form)[0].reset();
                    }
                    else
                    {
                        $.each(data['errors'],function(x,y) {
                            $(_form).find(".form-"+x).addClass('error');
                        });
                        $(_form).find('.form-alert').addClass("msg-error").html(data['msg']).show().delay(5000).fadeOut(400);
                    }
                },
                complete: function(data)
                {
                }
            });

        return false;
    });

    $(_form).find("input,textarea").focus(function() {$(this).removeClass('msg-error-input-border'); $(this).parent().removeClass('msg-error-input, error')});
    $(_form).find("input,textarea").change(function() {$(this).removeClass('msg-error-input-border')});
    $(_form).find(".common").focus(function() {$(this).removeClass('msg-error-input')});

};
prepareForm(".btn-send","#contact-form");

