import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./index.scss";

const Payment = ({ data }) => {
  const { paymentId } = useParams();
  const selectedProduct = data.find((product) => product.id == paymentId);

  return (
    <>
      <Header />
      <main className="payment">
        <section className="payment__left-side">
          <form>
            <div className="payment__name">
              <label htmlFor="name">Nome:</label>
              <input type="text" placeholder="Nome completo" />
            </div>
            <div className="payment__address">
              <label htmlFor="address">Endereço de entrega:</label>
              <input type="text" placeholder="Endereço de entrega" />
            </div>
            <div className="payment__method">
              <label htmlFor="method">Forma de Pagamento:</label>
              <label className="container">
                Pix
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                Boleto
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                Cartão de Crédito
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <button type="submit">
              <Link to="/">Enviar Pedido</Link>
            </button>
          </form>
        </section>
        <section className="payment__right-side">
          <div className="payment__summary">
            <h1>Resumo do Pedido:</h1>
            <div className="payment__right-side-item">
              <p>Produto: SKU #{selectedProduct.id}</p>
              <h1>{selectedProduct.price}</h1>
            </div>
            <div className="payment__right-side-total">
              <p>Total:</p>
              <h1>{selectedProduct.price}</h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Payment;
