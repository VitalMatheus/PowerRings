"use client";
import React, { useEffect, useState } from 'react'
import Carousel from './components/carousel';
import { RingData } from '@/types/card';

function Page() {
  const [formData, setFormData] = useState({
    name: '',
    power: '',
    carrier: '',
    forgedBy: '',
    image: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<RingData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
        setIsLoading(false);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:3001", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

    } catch (error) {
      console.log('this is error => ', error);
    }
  };

  return (
    <div className="flex-col border-8 border-red-600">
      <h1 className="text-4xl text-center">Anéis do Poder</h1>

      <div className="border-10 w-4/5 flex m-auto">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto flex flex-col border-8 border-blue-200 w-1/2">
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-5">
            <label htmlFor="power" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Poder</label>
            <input type="text" id="power" value={formData.power} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>

          <div className="mb-5">
            <label htmlFor="carrier" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Portador</label>
            <input type="text" id="carrier" value={formData.carrier} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>

          <div className="mb-5">
            <label htmlFor="forgedBy" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Forjador</label>
            <select name="forgedBy" id="forgedBy" value={formData.forgedBy} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              <option value="">Selecione um forjador</option>
              <option value="Elfos">Elfos</option>
              <option value="Anões">Anões</option>
              <option value="Homens">Homens</option>
              <option value="Sauron">Sauron</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagem</label>
            <input type="text" id="image" value={formData.image} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className="flex justify-around">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Criar</button>
          </div>
        </form>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <span className="text-gray-600">Carregando...</span>
          </div>
        ) : (
          <Carousel data={data} />
        )}
      </div>
    </div>
  )
}

export default Page;