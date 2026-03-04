import prisma from '../lib/prisma';

// Esta es tu página principal. Al poner "async", le permitimos esperar a la base de datos.
export default async function Home() {
  
  // Le pedimos a Prisma que busque todos los servicios que guardaste
  const respuesta = await fetch('http://localhost:8080/api/servicios', { cache: 'no-cache' });
  const servicios=await respuesta.json(); 
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1> Bienvenido a la Peluquería</h1>
      <p>Estos son nuestros servicios disponibles:</p>
      
      <ul style={{ marginTop: '20px' }}>
        {servicios.map((servicio) => (
          <li key={servicio.id} style={{ marginBottom: '10px' }}>
            <strong>{servicio.nombre}</strong> - {servicio.precio}€
            <br />
            <small style={{ color: 'gray' }}>{servicio.descripcion}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
