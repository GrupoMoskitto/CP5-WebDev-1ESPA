import React from 'react';
import logoMoskitto from '../src/assets/logoMoskitto_oficial.jpeg';

const Header = () => {
  return (
    <header className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div style={{width:'7vh'}}>
          <img src={logoMoskitto} />
        </div>
        <h1 className="text-2xl font-sans font-bold ml-30">Loja de Bicicletas Elétricas Moskitto</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-black transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-black transition duration-300">Sobre</a></li>
            <li><a href="/contato" className="hover:text-black transition duration-300">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
