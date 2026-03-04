export default async function Reserva() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Reserva tu cita</h1>
      <p>Selecciona un servicio y elige una fecha disponible.</p>
      <form style={{ marginTop: '20px' }}>
        <label htmlFor="servicio" style={{ display: 'block', marginBottom: '10px' }}>
          Servicio:
        </label>
        <select id="servicio" name="servicio" style={{ padding: '10px', width: '100%', marginBottom: '20px' }}>
          <option value="">Selecciona un servicio</option>
          <option value="corte">Corte de cabello</option>
          <option value="color">Coloración</option>
          <option value="peinado">Peinado</option>
        </select>
        <label htmlFor="fecha" style={{ display: 'block', marginBottom: '10px' }}>
          Fecha:
        </label>
        <input type="date" id="fecha" name="fecha" style={{ padding: '10px', width: '100%', marginBottom: '20px' }} />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Reservar
        </button>
      </form>
    </main>
  );
}