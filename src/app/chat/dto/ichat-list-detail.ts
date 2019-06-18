import { EChatState } from './echat-state';
import { IChatDetailMessage } from './ichat-detail-message';
import { EChatLock } from './echat-lock';

/**
 * Los datos que necesitamos para mostrar en una lista de chats
 */
export interface IChatListDetail {
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
    name: string;
    /**
     * Mensajes del chat
     */
    message: IChatDetailMessage[];
    /**
     * Mensajes que tiene el chat sin leer
     */
    notification: number;
    /**
     * Estado del chat conectado, desconectado
     */
    state: EChatState;
    /**
     * Estado del chat desbloqueado, bloqueo , bloqueado
     */
    lock: EChatLock;

}
