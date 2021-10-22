    let nome = document.querySelector('#nome')
    let email = document.querySelector('#email')
    let assunto= document.querySelector('#assunto')
    let nomeOk = false
    let emailOk = false
    let assuntoOk = false
    let mapa = document.querySelector('#mapa')

    nome.style.width = '100%'
    email.style.width = '100%'
 

    
    function validarNome(){
        let txtNome = document.querySelector('#txtNome')
        if(nome.value.length < 3){  
            txtNome.innerHTML = 'Nome invalido'
            txtNome.style.color = 'red'
        }
        else{   
            txtNome.innerHTML =  'Nome valido'
            txtNome.style.color = 'green'
            nomeOk = true
        }
    }
    function validarEmail(){
        let txtEmail = document.querySelector('#txtEmail')
        if(email.value.indexOf('@')== -1){
            txtEmail.innerHTML= 'Email invalido'
            txtEmail.style.color = 'red'
        }  
        else{
            txtEmail.innerHTML= 'Email valido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}
    function validarAssunto(){
        let txtAssunto = document.querySelector('#txtAssunto')
        if(assunto.value.length  >= 100){  
            txtAssunto.innerHTML = 'Digite no maximo 100 caracteres'
            txtAssunto.style.color = 'red'
           txtAssunto.style.display = 'block'
        }else{
            txtAssunto.style.display = 'none'
            assuntoOk = true
        }
    }
    function enviar(){
        if(nomeOk ==  true && emailOk == true && assuntoOk == true){
            alert('Todos os dados foram preenchidos corretamente')
        }else{
            alert  ('Preencha todos os dados para envia-lo')
        }
    }

    function zoomMapa(){
        mapa.style.width ='800px'
        mapa.style.heigt = '600px'
    }
    

    function normalMapa(){
        mapa.style.width ='400px'
        mapa.style.heigt = '250px'
    }