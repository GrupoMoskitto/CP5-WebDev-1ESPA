import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white p-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; Grupo Moskitto, 2025. Todos os direitos reservados.</p>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-black transition duration-300">Privacidade</a></li>
            <li><a href="#" className="hover:text-black transition duration-300">Termos</a></li>
            <li><a href="#" className="hover:text-black transition duration-300">Suporte</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
