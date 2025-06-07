import axios from 'axios';

const URL_API = "http://localhost:5000";


export const obtenerCantidadProductosPorCategoria = async () => {
    const response = await axios.get(`${URL_API}/CantidadPorCategoria`);
    return response.data;
}


export const obtenerValorTotalPorMarca = async () => {
    const response = await axios.get(`${URL_API}/ValorPorMarca`);
    return response.data;
}

export const obtenerValorPromedioActivo = async () => {
    const response = await axios.get(`${URL_API}/ValorPromedioActivo`);
    return response.data;
}