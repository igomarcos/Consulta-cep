window.onload = function() {
    const oTxtCep = document.querySelector("#cep");
    const oDivMsgCep = document.querySelector("#msgCep");

    oTxtCep.onblur = function() {
        
        const oRegExp = new RegExp("^[0-9]{5}\-[0-9]{3}$");
        

        if(oRegExp.test(oTxtCep.value) == true) {
            oTxtCep.style.borderColor = "#008000";
            oDivMsgCep.style.color = "#008000";
            oDivMsgCep.innerHTML = "CEP Correto!"
        }else{
            oTxtCep.style.borderColor = "#FF0000";
            oDivMsgCep.style.color = "#FF0000";
            oDivMsgCep.innerHTML = "CEP inválido!"
        }
    }

    oTxtCep.onfocus = function(){
        oTxtCep.style.borderColor = "";
        oTxtCep.value = "";
        oDivMsgCep.style.color = "";
        oDivMsgCep.innerHTML = "";
    }
}