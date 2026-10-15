import nuevoEstudiante, { curso, estudiantes } from "./datos.js";

import reporte from "./calculos.js";

// Combinar los estudiantes con el nuevo estudiante
const todos = [...estudiantes, nuevoEstudiante];

// Mostrar el curso en la consola
console.log(`Curso: ${curso}`);

// Mostrar los reportes en la consola
todos.forEach((estudiante) => {
  console.log(reporte(estudiante));
});

// Seleccionar los elementos del HTML
const titulo = document.querySelector("#curso");
const lista = document.querySelector("#resultados");

// Mostrar los resultados en la página
if (titulo && lista) {
  titulo.textContent = `Curso: ${curso}`;

  todos.forEach((estudiante) => {
    const elemento = document.createElement("li");
    elemento.textContent = reporte(estudiante);
    lista.appendChild(elemento);
  });
} else {
  console.error(
    "No se encontraron los elementos #curso o #resultados en el HTML."
  );
}
