'use client'

import { obtenerCantidadProductosPorCategoria } from '@/app/Servicios/api';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Page() {
  const [charData, setCharData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        borderColor: '',
        fill: false,
      },
    ],
  });

  useEffect(() => {
    obtenerCantidadProductosPorCategoria()
    
      .then((data) => {
         console.log("Datos recibidos:", data); 
        const etiquetas = data.map((item: any) => item.categoryCode); 
        const cantidades = data.map((item: any) => item.total);

        setCharData({
          labels: etiquetas,
          datasets: [
            {
              label: 'Cantidad de productos por categoria',
              data: cantidades,
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false,
            },
          ],
        });
      })
      .catch((error) => console.log('Ocurrió un error:', error));
  }, []);

  return (
  <div>
    <h2 className="text-xl font-semibold mb-4">Productos por Categoria</h2>
    {charData.labels.length > 0 ? (
      <Line data={charData} />
    ) : (
      <p>Cargando grafico...</p>
    )}
  </div>
);

}
