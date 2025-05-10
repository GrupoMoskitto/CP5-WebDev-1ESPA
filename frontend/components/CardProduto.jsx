import React from 'react';

const CardProduto = ({ bicicleta, onEdit, onDelete }) => {
  const listaImagens = [
    '../src/assets/bike1.jpg',
    '../src/assets/bike2.jpg',
    '../src/assets/bike3.jpg',
    '../src/assets/bike4.jpg',
    '../src/assets/bike5.jpg',
    '../src/assets/bike6.jpg',
    '../src/assets/bike7.jpg',
    '../src/assets/bike8.jpg',
    '../src/assets/bike9.jpg',
    '../src/assets/bike10.jpg',
    '../src/assets/bike11.jpg',
    '../src/assets/bike12.jpg'
  ];

  const getImagemAleatoria = () => {
    const indexRandom = Math.floor(Math.random() * listaImagens.length);
    return listaImagens[indexRandom];
  };

  const imagemAleatoria = getImagemAleatoria();

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg/40">
      <img className="p-8 rounded-t-lg" src={imagemAleatoria} alt={bicicleta.name} />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">{bicicleta.name}</h5>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">R${bicicleta.price}</span>
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={() => onEdit(bicicleta)} className="bg-blue-600 text-white p-2 rounded-lg border-1 border-blue-800 hover:bg-blue-800 hover:border-black transition duration-300">Editar</button>
          <button onClick={() => onDelete(bicicleta.id)} className="bg-red-600 text-white p-2 rounded-lg border-1 border-red-800 hover:bg-red-800 hover:border-black transition duration-300">Deletar</button>
        </div>
      </div>
    </div>
  );
};

export default CardProduto;
