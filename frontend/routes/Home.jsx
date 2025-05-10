import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProduto from '../components/CardProduto';
import CardForm from '../components/CardForm';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [bicicletas, setBicicleta] = useState([]);
  const [editarProduto, setEditarProduto] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/bicicletas')
      .then(response => setBicicleta(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleCriar = (bicicleta) => {
    bicicleta.id = uuidv4(); // Gerar um ID único para o novo produto
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
      <div className="mb-4">
        <button onClick={() => setShowForm(true)} className="bg-green-500 text-white p-2 rounded-lg">Adicionar Produto</button>
      </div>
      {showForm && (
        <CardForm
          onSubmit={editarProduto ? handleEditar : handleCriar}
          initialBicicleta={editarProduto}
          onClose={() => { setShowForm(false); setEditarProduto(null); }}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bicicletas.map(bicicleta => (
          <CardProduto
            key={bicicleta.id}
            bicicleta={bicicleta}
            onEdit={(bicicleta) => { setEditarProduto(bicicleta); setShowForm(true); }}
            onDelete={handleDeletar}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
