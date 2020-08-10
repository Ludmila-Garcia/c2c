import React from 'react';
import { Link } from 'react-router-dom'; //Utilizando o link dá para acessar outra página sem que dê uma atualização(F5) na página atual

const Page = () =>{
    return (
        <div>
            <h1>Página não encontrada</h1>

            <Link to="/">Voltar para a Home</Link>
        </div>
    );
}

export default Page;