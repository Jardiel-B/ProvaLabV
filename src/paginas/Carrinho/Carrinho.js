import React from "react";
import Table from "react-bootstrap/Table";

function Carrinho(){
    return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Nome</th>
          <th>Valor</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bauru</td>
          <td>8 R$</td>
          <td><button>Remover</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>X-Bacon</td>
          <td>15 R$</td>
          <td><button>Remover</button></td>
        </tr>
      </tbody>
    </Table>
    );
}

export default Carrinho;