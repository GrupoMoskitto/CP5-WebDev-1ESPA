import React, { useState } from 'react';

const CardForm = ({ onSubmit, initialBicicleta, onClose }) => {
  const [bicicleta, setBicicleta] = useState(initialBicicleta || { id: '', name: '', description: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBicicleta({ ...bicicleta, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(bicicleta);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-lg">
        <input
          type="text"
          name="name"
          value={bicicleta.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 m-2 w-full"
        />
        <input
          type="text"
          name="description"
          value={bicicleta.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 m-2 w-full"
        />
        <input
          type="number"
          name="price"
          value={bicicleta.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2 m-2 w-full"
        />
        <div className="flex justify-end">
          <button type="button" onClick={onClose} className="bg-gray-500 text-white p-2 m-2 rounded-lg">Cancel</button>
          <button type="submit" className="bg-green-500 text-white p-2 m-2 rounded-lg">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
