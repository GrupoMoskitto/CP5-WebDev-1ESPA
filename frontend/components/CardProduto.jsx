import React from 'react';

const CardProduto = ({ bicicleta, onEdit, onDelete }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      <img className="p-8 rounded-t-lg" src={bicicleta.image} alt={bicicleta.name} />
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
