import { EMessageType } from './emensaje-type';
import { EMessageState } from './emessage-state';

/**
 * Interface de un mensaje en el chat
 */
export interface IChatDetailMessage {
    /**
     * Si el mensaje enviado es una imagen o un url
     */
    img: string | null | File;
    /**
     * Si se envia un DataUrl
     */
    imgUrl?: any;
    /**
     * El mensaje enviado
     */
    message: string;
    /**
     * Cuando se envio el mensaje
     */
    date: string;
    /**
     * Hora del mensaje enviado
     */
    hour: string;
    /**
     * Si el mensaje a sido recibido o enviado
     */
    messageType: EMessageType;
    /**
     * Si el mensaje a sido envido, recibido o leido
     */
    messageState: EMessageState;
}
