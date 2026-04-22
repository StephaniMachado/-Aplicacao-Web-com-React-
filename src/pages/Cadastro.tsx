import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../App.css";

function Cadastro() {
  const location = useLocation();

  const [nome] = useState(location.state?.nome || "");
  const [email] = useState(location.state?.email || "");
  const [telefone, setTelefone] = useState("");
  const [jsonGerado, setJsonGerado] = useState("");

  function gerarJSON() {
    const usuario = {
      nome,
      email,
      telefone,
    };

    const json = JSON.stringify(usuario, null, 2);
    setJsonGerado(json);
  }

  return (
    <div className="integrantes-container">
      <h1>Cadastro</h1>

      <div className="integrantes-card">
        <h2>Preencha seus dados</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            gerarJSON();
          }}
        >
          <input
            type="text"
            value={nome}
            readOnly
            required
            style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
          />

          <input
            type="email"
            value={email}
            readOnly
            required
            style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
          />

          <input
            type="tel"
            placeholder="Telefone (somente números)"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value.replace(/\D/g, ""))}
            required
            pattern="[0-9]{10,11}"
            title="Digite um telefone válido com 10 ou 11 números"
            style={{ width: "100%", marginBottom: "15px", padding: "10px" }}
          />

          <button type="submit" className="botao-voltar">
            Gerar JSON
          </button>
        </form>
      </div>

      {jsonGerado && (
        <div className="integrantes-card">
          <h2>Resultado</h2>
          <pre style={{ textAlign: "left" }}>{jsonGerado}</pre>
        </div>
      )}

      <Link to="/">
        <button className="botao-voltar">Voltar para Home</button>
      </Link>
    </div>
  );
}

export default Cadastro;