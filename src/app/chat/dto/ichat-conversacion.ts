import { EEstadoChat } from './eestado-chat';
import { IChatConversacionDetalle } from './ichat-conversacion-detalle';
import { EBloqueoChat } from './ebloqueo-chat';

/**
 * Los datos que necesitamos para una conversacion entre 2 personas
 */
export interface IChatConversacion {
    /**
     * id del chat
     */
    id: string;
    /**
     * img a mostrar en el chat
     */
    img: string ;
    /**
     * Nombre del chat
     */
    nombre: string;
    /**
     * Estado del chat desbloqueado, bloqueo, bloqueado
     */
    bloqueo: EBloqueoChat;
    /**
     * Si el chat esta conectado o desconectado
     */
    estado: EEstadoChat;
    /**
     * La lista de mensajes del chat
     */
    mensajes: IChatConversacionDetalle[];
}
