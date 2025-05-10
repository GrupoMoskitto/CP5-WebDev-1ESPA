import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Meu Site</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">Sobre</a></li>
            <li><a href="#contact" className="hover:underline">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
