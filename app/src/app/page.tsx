
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <Link href='/ValorPorMarca'>Ir a la grafica de valor total por marca</Link>  
        <Link href='/CantidadPorCategoria'>Ir a la grafica de productos por categoria</Link>
         <Link href='/ValorPromedioActivo'>Ir a la grafica de valor promedio de productos activos</Link>
 
      </main>

    </div>
  );
}
