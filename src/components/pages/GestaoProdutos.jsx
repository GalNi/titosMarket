//const { Component } = require("react");
import { Component } from "react";

class GestaoProdutos extends Component {
    render() {
        return (
            <>
                <div className="tituloGprodutos">
                    Gestão de Produtos
                </div>
                <form action="" className="formGprodutos">
                    <input type="text" name="codigo_produto" className="inputGprodutos" placeholder="Código" />
                    <input type="text" name="nome_produto" className="inputGprodutos" placeholder="Nome do produto" />
                    <input type="text" name="img_produto" className="inputGprodutos" placeholder="Imagem do produto" />
                    <input type="text" name="preco_produto" className="inputGprodutos" placeholder="Preço" />
                    <button className="botaoGprodutos inputGprodutos">Cadastrar</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Produto</th>
                            <th>Imagem</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody id="listaCompras">
                        <tr>
                            <td>Código</td>
                            <td>Produto</td>
                            <td>Imagem</td>
                            <td>Preço</td>
                        </tr>
                        <tr>
                            <td>Código</td>
                            <td>Produto</td>
                            <td>Imagem</td>
                            <td>Preço</td>
                        </tr>
                    </tbody>
                </table>

            </>

        )
    }

}

export default GestaoProdutos;