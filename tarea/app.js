import nuevoEstudiante, { curso, estudiantes } from "./datos.js";

import reporte, { promedio, estado } from "./calculos.js";

// Spread: combinar los estudiantes con el nuevo estudiante
const todos = [...estudiantes, nuevoEstudiante];

// Mostrar el nombre del curso
console.log(`Curso: ${curso}`);

// Mostrar los reportes en la consola
todos.forEach((estudiante) => {
  console.log(reporte(estudiante));
});

// Mostrar los resultados en la página web
const titulo = document.querySelector("#curso");
const lista = document.querySelector("#resultados");

titulo.textContent = `Curso: ${curso}`;

todos.forEach((estudiante) => {
  const elemento = document.createElement("li");
  elemento.textContent = reporte(estudiante);
  lista.appendChild(elemento);
});
