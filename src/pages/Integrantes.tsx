import { Link } from "react-router-dom";
import "../App.css";
import stephani from "../assets/Stephani.jpeg";
import larissa from "../assets/Larissa.jpeg";

function Integrantes() {
  return (
    <div className="integrantes-container">
      <h1>Integrantes</h1>

      <div className="cards-container">

        <div className="integrantes-card">
          <img src={stephani} className="foto" />
          <h2>Stephani Machado</h2>
          <p>
            Stephani  é estudante de Engenharia de Software e formada em Automação Industrial, possuindo uma formação multidisciplinar voltada para tecnologia e sistemas. Atua no desenvolvimento de aplicações utilizando JavaScript e React, além de trabalhar com integração de sistemas e serviços.
            Possui forte domínio em banco de dados, com experiência em modelagem relacional e não relacional (SQL e NoSQL), criação de estruturas eficientes, manipulação de dados e integração com plataformas como Firebase. Destaca-se pela organização, consistência e otimização no gerenciamento de informações.
            Tem interesse em desenvolvimento de sistemas, arquitetura de dados e soluções tecnológicas eficientes, sempre aplicando boas práticas de programação e visando desempenho, escalabilidade e qualidade.
          </p>
        </div>

        <div className="integrantes-card">
          <img src={larissa} className="foto" />
          <h2>Larissa Candido</h2>
          <p>
            Larissa é estudante de Engenharia de Software, com interesse em desenvolvimento web e automação de sistemas, possuindo uma base sólida em conceitos de tecnologia e construção de aplicações. Atua no desenvolvimento de interfaces utilizando React e outras tecnologias modernas, aplicando boas práticas de programação e organização de código.
            Possui conhecimentos em lógica de programação e experiência na criação de soluções voltadas à usabilidade e eficiência, buscando sempre desenvolver aplicações funcionais e bem estruturadas. Também apresenta interesse em integração de sistemas, ampliando sua capacidade de atuar em diferentes etapas do desenvolvimento.
            Demonstra forte compromisso com o aprendizado contínuo e o aprimoramento de suas habilidades, com foco em desenvolvimento front-end e evolução constante dentro da área de tecnologia.
          </p>
        </div>

      </div>

      <Link to="/">
        <button className="botao-voltar">Voltar para Home</button>
      </Link>
    </div>
  );
}

export default Integrantes;