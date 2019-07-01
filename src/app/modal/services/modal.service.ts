import { Injectable } from '@angular/core';

/**
 * Servicio que permite añadir modales
 */
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  /**
   * Modales registrados en el servicio
   */
  private modals: any[] = [];
  /**
   * @ignore
   */
  constructor() { }
  /**
   * Añadimos el modal a la lista de modales a mostrar
   * @param modal Modal a mostrar
   */
  add(modal: any) {
    this.modals.push(modal);
  }

  /**
   * Eliminamos un modal de la lista de modales a mostrar
   * @param id id del model que vamos a eliminar
   */
  remove(id: string) {
    this.modals = this.modals.filter(x => x.id !== id);
  }

  /**
   * Abrir un modal
   * @param id id del modal que queremos mostrar
   */
  open(id: string) {
    const modal: any = this.modals.filter(x => x.id === id)[0];
    modal.open();
  }

  /**
   * Cerrar un modal
   * @param id id del modal que queremos ocultar
   */
  close(id: string) {
    const modal: any = this.modals.filter(x => x.id === id)[0];
    modal.close();
  }


}
