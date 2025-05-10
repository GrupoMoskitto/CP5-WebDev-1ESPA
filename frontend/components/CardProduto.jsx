import React from 'react';

const CardProduto = ({ bicicleta, onEdit, onDelete }) => {
  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold">{bicicleta.name}</h2>
      <p>{bicicleta.description}</p>
      <p>{bicicleta.price}</p>
      <button onClick={() => onEdit(bicicleta)} className="bg-blue-500 text-white p-2 m-2">Edit</button>
      <button onClick={() => onDelete(bicicleta.id)} className="bg-red-500 text-white p-2 m-2">Delete</button>
    </div>
  );
};

export default CardProduto;
