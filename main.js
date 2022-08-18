// Declarar una clase Usuario

class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = [{nombre: "Juego de tronos", autor: "George R. R. Martin"}];
      this.mascotas = ["Pombi", "Solís"];
    }
// Métodos

getFullName(){
    return `Nombre: ${this.nombre}, Apellido: ${this.apellido}`;
};

addMascota(pet){
    return this.mascotas.push(pet);
};

countMascotas(){
  return this.mascotas.length
};

addBook(nomb,aut){
  this.libros.push({nombre: nomb, autor: aut})
};

getBookNames(){
  let nombreLibro = this.libros.map((libro) => libro.nombre);
  console.log(nombreLibro);
};
}
// nuevo usuario

let user = new Usuario ("Marcos", "Garzon");

// métodos sobre el nuevo usuario

console.log(user.getFullName());

user.addMascota("Tony");
console.log(user.mascotas);

console.log(user.countMascotas());

user.addBook("Harry Potter", "J. K. Rowling");

user.getBookNames();