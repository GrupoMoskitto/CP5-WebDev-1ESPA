import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2025 Meu Site. Todos os direitos reservados.</p>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#privacy" className="hover:underline">Privacidade</a></li>
            <li><a href="#terms" className="hover:underline">Termos</a></li>
            <li><a href="#support" className="hover:underline">Suporte</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
