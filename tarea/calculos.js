// Calcula el promedio de las notas usando rest
export const promedio = (...notas) => {
  const suma = notas.reduce((total, nota) => total + nota, 0);
  return suma / notas.length;
};

// Determina si el estudiante está aprobado
export const estado = (nota, minima = 13) => {
  return nota >= minima ? "Aprobado" : "Desaprobado";
};

// Genera el reporte usando desestructuración
const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas);

  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};

// Exportación por defecto
export default reporte;
