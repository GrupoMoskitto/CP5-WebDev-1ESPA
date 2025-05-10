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
    bicicleta.id = uuidv4(); // gera um ID unico para o produto
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
      <div style={{width:'100%', height:'35vh', background: 'linear-gradient(130deg, rgb(65, 253, 84) 0%, rgb(144, 238, 144) 100%)', color:'#021700', marginBottom: '4vh'}} className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-sans mb-10 text-green-900 text-shadow-lg'>Seja bem vindo a Loja de Bicicletas Elétricas Moskitto</p>
        <button onClick={() => setShowForm(true)} className="bg-green-600 text-white p-2 rounded-lg border-1 border-green-800 hover:bg-green-800 hover:border-white transition duration-300">Adicionar Produto</button>
      </div>

      {showForm && (
        <CardForm
          onSubmit={editarProduto ? handleEditar : handleCriar}
          initialBicicleta={editarProduto}
          onClose={() => { setShowForm(false); setEditarProduto(null); }}
        />
      )}
      <div className="ml-17 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {bicicletas.map(bicicleta => (
          <CardProduto
            key={bicicleta.id}
            bicicleta={bicicleta}
            onEdit={(bicicleta) => { setEditarProduto(bicicleta); setShowForm(true); }}
            onDelete={handleDeletar}
          />
        ))}
      </div>
      <div className='mt-20'></div>
    </div>
  );
};

export default Home;
