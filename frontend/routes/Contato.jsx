import React from 'react'

const Contato = () => {
    return (
        <div className="flex justify-center items-center mt-35">
            <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md border-2 border-green-800">
                <div className="mb-4">
                    <label htmlFor="nomeCliente" className="block text-gray-700">Nome:</label>
                    <input className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" type="text" id="nomeCliente" placeholder="Escreva seu nome aqui" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="emailCliente" className="block text-gray-700">Endereço de email:</label>
                    <input type="email" className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" id="emailCliente" placeholder="email@exemplo.com" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="mensagem" className="block text-gray-700">Escreva a sua mensagem:</label>
                    <textarea className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" id="mensagem" rows="8" placeholder="Escreva a sua mensagem aqui, limite de 800 caracteres." required maxLength="800"></textarea>
                </div>

                <div className="text-center">
                    <button type="submit" className="bg-green-600 text-white p-2 rounded-lg border-1 border-green-800 px-4 hover:bg-green-800 hover:border-white transition duration-300">Enviar</button>
                </div>
            </form>
        </div>

    )
}

export default Contato
