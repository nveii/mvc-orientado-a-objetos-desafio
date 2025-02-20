import * as fs from "fs";
import * as jsonfile from "jsonfile";


// Ruta del archivo JSON
const FILE_PATH = "./contacts.json";

// Definimos la clase Contact
class Contact {
  id: number = 0;
  name: string = "";
}
console.log(FILE_PATH)
// Clase ContactsCollection
class ContactsCollection {
  private data: Contact[] = []; // Lista privada de contactos

  constructor() {
    this.data = [];
  }

  // Cargar contactos desde el archivo JSON
  
  load() {
    this.data = jsonfile.readFileSync(__dirname + "/contacts.json");
  }

  // Obtener todos los contactos
  getAll() {
    return this.data;
  }

  // Agregar un contacto a la lista
  addOne(contact: Contact) {
    this.data.push(contact)
  }

  // Guardar la lista en el archivo JSON
  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data, { spaces: 2 });
  }

  // Obtener un contacto por su ID
  getOneById(id: number) {
    const data = this.data
    return data.find((c) => c.id == id)
  }
}

// Exportamos la clase
export { ContactsCollection, Contact };
