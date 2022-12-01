import React from "react";
import CardWB from "../../components/CardWB/CardWB";

function Cupons(){
    return (
        <div>
            <br/>
            <CardWB cupom="MEUSANDUBA772" titulo="Cupom 15% OFF" validade="NOVO | 4 Unidades" corpo="Cupom de 15% de desconto aplicável somente em sandwichs"/>
            <CardWB cupom="HEXABRASIL2X1"titulo="Cupom 20% OFF" validade="NOVO | 5 Unidades" corpo="Cupom de 20% de desconto aplicável em qualquer salgado"/>
        </div>
    );
}

export default Cupons;