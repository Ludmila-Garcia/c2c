//RESPOSÁVEL PELO PROCESSO DE AUTENTICAÇÃO
import Cookies from 'js-cookie';

export const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
}

export const doLogin = (token, rememberPassword = false) => {
   //salva o cookie e guarda a senha mesmo depois de o usuário fechar o navegador 
    if(rememberPassword){
        Cookies.set('token', token, { expires:999 });
    } 
    // Se usuário não clicar em lembrar senha então o sistema seta o cookie porém ficará limitado 
    //ao navegador estar aberto, quando o usuário fechar o navegador o cookie se perde 
    else{
        Cookies.set('token', token);

    }
}

export const doLogout = () => {
    Cookies.remove('token');
}