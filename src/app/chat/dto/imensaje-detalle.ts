import { EEstadoChat } from './eestado-chat';
import { IChatConversacionDetalle } from './ichat-conversacion-detalle';
import { EBloqueoChat } from './ebloqueo-chat';

/**
 * Los datos que necesitamos para mostrar en una lista de chats
 */
export interface IMensajeDetalle {
    /**
     * id del chat
     */
    id: string;
    /**
     * Img a a mostrar
     */
    img: string ;
    /**
     * nombre del chat
     */
    nombre: string;
    /**
     * Mensajes del chat
     */
    mensaje: IChatConversacionDetalle[];
    /**
     * Mensajes que tiene el chat sin leer
     */
    notificacion: number;
    /**
     * Estado del chat conectado, desconectado
     */
    estado: EEstadoChat;
    /**
     * Estado del chat desbloqueado, bloqueo , bloqueado
     */
    bloqueo: EBloqueoChat;

}
