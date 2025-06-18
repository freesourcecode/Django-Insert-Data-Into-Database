$(document).ready(function(){
    $('#submit').on('click', function(){
        $firstname = $('#firstname').val();
        $lastname = $('#lastname').val();
        $address = $('#address').val();

        if($firstname == "" || $lastname == "" || $address == ""){
            alert("Please complete field");
        }else{
            $.ajax({
                type: "POST",
                url: "insert",
                data:{
                    firstname: $firstname,
                    lastname: $lastname,
                    address: $address,
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                },
                success: function(){
                    alert('Save Data');
                    $('#firstname').val('');
                    $('#lastname').val('');
                    $('#address').val('');
                    window.location = "/";
                }
            });
        }
    });
});