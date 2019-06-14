function prepareForm(_btn,_form) {
    $(_form).find(_btn).on('click',function(e) {
        e.preventDefault();
        var file = $(_form).find('#file').prop('files')[0];
        if(file != undefined) {

            var formData = new FormData($(_form)[0]);

            $.ajax({
                url: "./../send-form.php",
                type: 'POST',
                data: formData,
                enctype: 'multipart/form-data',
                cache: false,
                contentType: false,
                processData: false,

                success: function(data)
                {
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
            });
        }
        else {
            $(_form).find('.form-alert').addClass("msg-error").html("NIe załączyłeś żadnego pliku!").show().delay(5000).fadeOut(400);
        }
        return false;
    });

    $(_form).find("input,textarea").focus(function() {$(this).removeClass('msg-error-input-border'); $(this).parent().removeClass('msg-error-input, error')});
    $(_form).find("input,textarea").change(function() {$(this).removeClass('msg-error-input-border')});
    $(_form).find(".common").focus(function() {$(this).removeClass('msg-error-input')});

};
prepareForm(".btn-send","#contact-form");
