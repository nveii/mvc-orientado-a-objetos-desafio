import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {

  contacts: ContactsCollection;

  constructor(contacts: ContactsCollection) {
    this.contacts = contacts
    this.contacts.load()
  }

  processOptions(options: ContactsControllerOptions) {
    const {action, params } = options

    switch(action){
      case 'get':
        if(params && params.id){
          const contact = this.contacts.getOneById(params.id)
          return contact ? contact: "Contact not found"
      } else {
        const contacts = this.contacts.getAll()
        return contacts
      }

      case 'save':
        if(params && params.contact){
         this.contacts.addOne(params.contact)
         this.contacts.save()
         return "contacto agregado"
        } else {
          return "no se pudo agregar el contacto"
      }

      default: 
        return "error, accion no reconocida"

    }

  }
  
  
}

export { ContactsController };
