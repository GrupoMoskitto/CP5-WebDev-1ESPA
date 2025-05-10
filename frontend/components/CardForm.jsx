import React, { useState } from 'react';

const CardForm = ({ onSubmit, initialBicicleta }) => {
  const [bicicleta, setBicicleta] = useState(initialBicicleta || { name: '', description: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBicicleta({ ...bicicleta, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(bicicleta);
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4">
      <input
        type="text"
        name="name"
        value={bicicleta.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 m-2"
      />
      <input
        type="text"
        name="description"
        value={bicicleta.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 m-2"
      />
      <input
        type="number"
        name="price"
        value={bicicleta.price}
        onChange={handleChange}
        placeholder="Price"
        className="border p-2 m-2"
      />
      <button type="submit" className="bg-green-500 text-white p-2 m-2">Submit</button>
    </form>
  );
};

export default CardForm;
