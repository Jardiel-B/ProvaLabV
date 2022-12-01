import React from "react";
import './Home.css';
import Acordeao from "../../components/Acordeao/Acordeao";


function Home(){
    return(
        <div className="info">
            <br/>
            <h2>Bem vindo ao "Meu sanduba"</h2>
            <p>Seja muito bem vindo a lanchonete "Meu Sanduba" aqui você encontrará uma gingante diversificação de lanches, aqui temos
            pastéis, coxinhas, bolos, sanduíches, etc.
            </p>
            <p>Prepare-se para se empanturrar com o lache mais que delicioso, feito com ingredientes de qualidade, com opções veganas e
            vegetarianas, mas não se preocupe se você gosta de uma boa carne, aqui temos os melhores e mais recheados hamburgueres arte
            sanais feitos com carne bovina, suína, de aves e, para os amantes de frutos do mar, um hamburguer super delicioso de camarão.
            </p>
            <Acordeao titulo="Proprietário" conteudo="Jardiel Bernardino Alexandre"/>
            <Acordeao titulo="Diponibilidade" conteudo="Ifood, loja Física e delivery"/>
        </div>
    );
}

export default Home;