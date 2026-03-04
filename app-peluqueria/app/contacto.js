export default function Contacto(){
  return(
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1> Contáctanos</h1>
      <p style={{marginTop:'20px', fontFamily:'ui-serif'}}>Si deseas reservar una cita o tienes alguna pregunta, no dudes en contactarnos:</p>
      
      <ul style={{ marginTop: '20px' }}>
        <li style={{ marginBottom: '10px' }}>
          <strong>Teléfono:</strong> 123-456-789
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong>Email:</strong> contacto@peluqueria.com
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong>Dirección:</strong> Calle Principal 123, Ciudad
        </li>
      </ul>
    </main>
  );
          
}