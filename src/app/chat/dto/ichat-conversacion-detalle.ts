import { ETipoMensaje } from './etipo-mensaje';
import { EEstadoMensaje } from './eestado-mensaje';

/**
 * Interface del mensaje en un chat
 */
export interface IChatConversacionDetalle {
    /**
     * Si el mensaje enviado es una imagen o un texto
     */
    img: string | null;
    /**
     * El mensaje enviado
     */
    mensaje: string;
    /**
     * Cuando se envio el mensaje
     */
    fecha: string;
    /**
     * Hora del mensaje enviado
     */
    hora: string;
    /**
     * Si el mensaje a sido recibido o enviado
     */
    tipoMensaje: ETipoMensaje;
    /**
    * Si el mensaje a sido envido, recibido o leido
    */
    estadoMensaje: EEstadoMensaje;
}
