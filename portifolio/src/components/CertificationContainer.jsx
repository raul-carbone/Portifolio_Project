import '../styles/components/certificationcontainer.sass'


const CertificationContainer = () => {
    return (
      <section className="certification-container">
        <h2>Certificações</h2>
  
        <div>
          <h3>JavaScript Básico ao avançado (Carga Horária: 17 Horas)</h3>        
          <p>Debugging e Error Handling, Funções, Sintaxes, Operadores, Tipos, APIs, Projetos incrementadores.</p>
        </div>  
      
        <div>
          <h3>Introdução ao TypeScript (Carga Horária: 2 Horas)</h3>        
          <p>Explorando Classes, Tipos e Interfaces</p>
        </div>

        <div>
          <h3>Desenvolvimento Web utilizando HTML5, CSS3 e Flexbox (Carga Horária: 17 Horas)</h3>        
          <p>Introdução a criação de websites com HTML5 e CSS3, Posicionando elementos com Flexbox em CSS, Projetos extracurriculares</p>
        </div> 
      </section>
    );
  };
  
  export default CertificationContainer;