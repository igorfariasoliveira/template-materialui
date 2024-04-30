import React from 'react';
import '..//..//estilos/apresentacao.css';

const SobreMim = () => {
  return (
    <div className="sobre-mim-container">
      <div><img src="" alt="" /></div>
      <div className="text-container">
        <h1>Sobre Mim</h1>
        <p>
          Oi pessoal! Meu nome é Igor, tenho 28 anos e estou tentando entrar no ramo de programção.
        </p>
        <p>
          Trabalho na area de TI a 9 anos, más somente na parte de Hardwere. Sempre me interessei em escrever codigos apenas por hobbie, só que um dia decidi transformar em carreira.
          Tenho um pouco de experiência com front-end, porem apenas para projetos próprios.
        </p>
        <p>Meu linkedin é <a
      href="https://www.linkedin.com/in/igor-farias-8a721a24a/"
      target="_blank"
      >@Igor Farias</a></p>
      </div>
    </div>
  );
};

export default SobreMim;
