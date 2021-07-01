function showRegisterForm() {
    $('div#modalGeneral').attr('style','top:0vh;display:block;');
    $('.terminosBox').fadeOut('fast', function() {

        $('.registerBox').fadeIn('fast');
        $('.confirmTelForm').fadeOut('fast');
        $('.LoginBox').fadeOut('fast');
        $('.modal-title').html('Registrar su cuenta');
        buttonClick();
    });

}

function showTerminosForm() {
    $('#modalGeneral .registerBox').fadeOut('fast', function() {
        $('.terminosBox').fadeIn('fast');
        $('.confirmTelForm').fadeOut('fast');
        $('.messageConfirmation').fadeOut('fast');
        $('.LoginBox').fadeOut('fast');
        $('.modal-title').html('Confirmación');
    });
}

function confirmTelForm() {
    $('#modalGeneral .confirmTelForm').fadeOut('fast', function() {

        $('.confirmTelForm').fadeIn('fast');
        $('.registerBox').fadeOut('fast');
        $('.modal-title').html('Confirmar tu teléfono');
        buttonClickMessage();
    });
}

function messageConfirmation() {

    $('#modalGeneral .messageConfirmation').fadeOut('fast', function() {
        
        $('.messageConfirmation').fadeIn('fast');
        $('.confirmTelForm').fadeOut('fast');
        $('.modal-title').html('Confirmar tu teléfono');
    });
    buttonClickmessageConfirmar();
}

function showLogin() {
    $('div#modalGeneral').attr('style','top:0vh;display:block;');
    $('#modalGeneral .LoginBox').fadeOut('fast', function() {
        $('.LoginBox').fadeIn('fast');
        $('.terminosBox').fadeOut('fast');
        $('.messageConfirmation').fadeOut('fast');
        $('.registerBox').fadeOut('fast');
        $('.modal-title').html('Iniciar sesión');
    });
}


function openModalTerminos() {
    $('div#modalGeneral').attr('style','top:30vh');
    showTerminosForm();
    setTimeout(function() {
        $('#modalGeneral').modal('show');
    }, 230);
    buttonClickSalir();

}

function openRegisterModal() {
    showRegisterForm();
    setTimeout(function() {
        $('#modalGeneral').modal('show');
    }, 230);


}

function buttonClick() {

    $(".registerBox button.registrate").click(function() {
        confirmTelForm();
    });
}

function buttonClickMessage() {
    $("button.Confirmar").click(function() {
        messageConfirmation();
    });
}

function buttonClickmessageConfirmar() {
    $("button.messageConfirmar").click(function() {
        showLogin();
    });
}


function buttonClickSalir() {
$("button.close").click(function() {
        $('#modalGeneral').modal('hide');
        $('.LoginBox').fadeOut('fast');
        $('.registerBox').fadeOut('fast');
        $('.confirmTelForm').fadeOut('fast');
        $('.messageConfirmation').fadeOut('fast');

        
    });
}


function validarBusquedaDNI(){
    $("button.searchButton.busquedaDni").click(function() {
        if($("#insertarDNI").val().length > 0){
            $(".sb-example-1 .searchTerm").attr("style","border: unset;");
            openModalTerminos();
        }
        else{
            $(".sb-example-1 .searchTerm").attr("style","border: red 2px solid;");
        }
    });
}