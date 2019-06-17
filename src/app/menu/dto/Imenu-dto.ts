/**
 * Las propiedades que deberia tener un menu dinamico
 */
export interface IMenuDot {
    /**
     * Icono a mostrar en el menu, enviar vacio, undefined o null no mostrara icono
     */
    icon: string;
    /**
     * Nombre con el cual se podra acceder al menu
     */
    nombre: string ;
    /**
     * texto a mostra al usuario final
     */
    text: string ;
}
