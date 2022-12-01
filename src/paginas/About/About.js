import React from "react";
import Popovers from "../../components/Popover/Popover";
import Texto from "../../components/Text/Texto";

function About(){
    return(
        <div>
            <br/>
            <Texto titulo="Sobre meu sanduba" texto="Olá, somos a lanchonete Meu Sanduba, aqui fazemos os lanches mais deliciosos da cidade, nossa especialidade são os
                sanduíches, tanto no sabor quanto na variedade, para comprar e se deliciar com um de nossos lanches clique na opção
                Cardápio lá em cima na barra de navegação."/>
            <Texto titulo="Onde nos achar" texto="Atuamos na cidade de Maceió - AL, Rua do Bauro Nº 69, nossas formas de contato são Tel: (82) 91234-5678, Whatsapp: 98765-
            4321, Instagram: @MeuSanduba e Facebook: MeuSanduba"/>
            <h2>Nossa História</h2>
            <br/>
            <Popovers titulo="Ano 2019" corpo="Nossa história começou no ano 2019, quando abrimos nosso primeiro estabelecimento da linha
            de lanchonetes Meu Sanduba, o começo foi contubardo, mas nos mantemos firmes e conseguimos nos manter"/>
            <br/>
            <Popovers titulo="Ano 2020" corpo="Nesse momento com a chegada do corona-vírus quase fomos a falência, mas tivemos a ideia de
            começar com o delivery, mesmo que muitas pessoas ainda estivessem assustadas com a pandemia utilizamos a higiene como principal meta
            de entrega conseguindo novamente a confiança das pessoas"/>
            <br/>
            <Popovers titulo="Ano 2021" corpo="Nos mativemos de pé durante mais um ano e enfrentamos esse como uma guerra, as medidas se in
            tensificavam e novas diretrizes de higiene também, apesar de ter sido nosso pior ano, conseguimos continuar funcionando"/>
            <br/>
            <Popovers titulo="Ano 2022" corpo="Quase de volta a normalidade conseguimos voltar com força total, recuperando clientes e o saindo
            do deficit deixado pelos últimos anos, voltando com um sorriso no rosto e o sandwich na chapa"/>
        </div>
    );
}

export default About;