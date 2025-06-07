 'use client'

import { obtenerValorPromedioActivo } from '@/app/Servicios/api';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Page() {
  const [charData, setCharData] = useState({
    labels: ['Productos Activos'],
    datasets: [
      {
        label: 'Valor Promedio',
        data: [0],
        backgroundColor: 'rgba(166, 51, 170, 0.6)',
      },
    ],
  });

  useEffect(() => {
    obtenerValorPromedioActivo()
      .then((data) => {
        const promedio = parseFloat(data.valor_promedio);
        setCharData({
          labels: ['Productos Activos'],
          datasets: [
            {
              label: 'Valor Promedio',
              data: [promedio],
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
          ],
        });
      })
      .catch((error) => console.error('Error al obtener valor promedio:', error));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Valor Promedio de Productos Activos</h2>
      <Bar data={charData} />
    </div>
  );
}


