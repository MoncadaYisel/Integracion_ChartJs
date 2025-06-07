'use client'

import { obtenerValorTotalPorMarca } from '@/app/Servicios/api';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Page() {
  const [charData, setCharData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: '',
      },
    ],
  });

useEffect(() => {
  obtenerValorTotalPorMarca()
    .then((data) => {
      console.log("Datos recibidos:", data);

      const etiquetas = data.map((item: any) => item.brandCode);
      const valores = data.map((item: any) => parseFloat(item.valor_total));

      setCharData({
        labels: etiquetas,
        datasets: [
          {
            label: 'Valor total de productos por marca',
            data: valores,
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
          },
        ],
      });
    })
    .catch((error) => console.log('Ocurrio un error:', error));
}, []);


  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Valor Total por Marca</h2>
      <Bar data={charData} />
    </div>
  );
}
