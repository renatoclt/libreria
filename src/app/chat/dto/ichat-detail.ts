import { EChatState } from './echat-state';
import { IChatDetailMessage } from './ichat-detail-message';
import { EChatLock } from './echat-lock';

/**
 * Los datos que necesitamos para una conversacion entre 2 personas
 */
export interface IChatDetail {
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
    name: string;
    /**
     * Estado del chat desbloqueado, bloqueo, bloqueado
     */
    lock: EChatLock;
    /**
     * Si el chat esta conectado o desconectado
     */
    state: EChatState;
    /**
     * La lista de mensajes del chat
     */
    messages: IChatDetailMessage[];
}
