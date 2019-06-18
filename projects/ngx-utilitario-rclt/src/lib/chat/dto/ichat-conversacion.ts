import { EEstadoChat } from './eestado-chat';
import { IChatDetailMessage } from './ichat-conversacion-detalle';
import { EChatLook } from './ebloqueo-chat';

export interface IChatDetail {
    id: string;
    img: string ;
    nombre: string;
    bloqueo: EChatLook;
    estado: EEstadoChat;
    mensajes: IChatDetailMessage[];
}
