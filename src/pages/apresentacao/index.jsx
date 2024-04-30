import React from 'react';
import '..//..//estilos/apresentacao.css';

const SobreMim = () => {
  return (
    <div className="sobre-mim-container">
      <div className="image-container">
        <img
          src="caminho/para/sua/foto.jpg" // Substitua pelo caminho da sua foto
          alt="Minha Foto"
          className="profile-image"
        />
      </div>
      <div className="text-container">
        <h1>Sobre Mim</h1>
        <p>
          Olá! Meu nome é [Seu Nome]. Eu sou [sua profissão ou uma breve descrição sobre você].
        </p>
        <p>
          [Fale um pouco mais sobre você, seus interesses, hobbies, habilidades, etc.]
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
