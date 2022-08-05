import React from 'react';
import "../styles/components/languagecontainer.sass";

const LanguageContainer = () => {
  return (
    <section className="language-container">
      <div>
        <h3>Português</h3>
        <p>Fluente na lígua portuguesa.</p>
      </div>
      <div>
        <h3>Inglês</h3>
        <p>Nível Intermediário</p>
      </div>
    </section>
  );
};

export default LanguageContainer;