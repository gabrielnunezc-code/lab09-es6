export const promedio = (...notas) => {
  const suma = notas.reduce((total, nota) => total + nota, 0);
  return notas.length ? suma / notas.length : 0;
};

export const estado = (nota, minima = 13) => {
  return nota >= minima ? "Aprobado" : "Desaprobado";
};

const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas);

  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};

// Exportación por defecto
export default reporte;
