import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProduto from '../components/CardProduto';
import CardForm from '../components/CardForm';

const Home = () => {
  const [bicicletas, setBicicleta] = useState([]);
  const [editarProduto, setEditarProduto] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/bicicletas')
      .then(response => setBicicleta(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleCriar = (bicicleta) => {
    axios.post('http://localhost:5000/bicicletas', bicicleta)
      .then(response => setBicicleta([...bicicletas, response.data]))
      .catch(error => console.error(error));
  };

  const handleEditar = (bicicleta) => {
    axios.put(`http://localhost:5000/bicicletas/${bicicleta.id}`, bicicleta)
      .then(response => {
        setBicicleta(bicicletas.map(p => p.id === bicicleta.id ? response.data : p));
        setEditarProduto(null);
      })
      .catch(error => console.error(error));
  };

  const handleDeletar = (id) => {
    axios.delete(`http://localhost:5000/bicicletas/${id}`)
      .then(() => setBicicleta(bicicletas.filter(p => p.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="Home">
      <h1 className="text-3xl font-bold">Gerenciamento de Produtos</h1>
      <CardForm onSubmit={editarProduto ? handleEditar : handleCriar} initialProduct={editarProduto} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bicicletas.map(bicicleta => (
          <CardProduto
            key={bicicleta.id}
            bicicleta={bicicleta}
            onEdit={setEditarProduto}
            onDelete={handleDeletar}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
