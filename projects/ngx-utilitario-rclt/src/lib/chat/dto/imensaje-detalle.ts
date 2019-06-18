import { EEstadoChat } from './eestado-chat';
import { IChatDetailMessage } from './ichat-conversacion-detalle';
import { EChatLook } from './ebloqueo-chat';

export interface IMensajeDetalle {
    id: string;
    img: string ;
    nombre: string;
    mensaje: IChatDetailMessage[];
    notificacion: number;
    estado: EEstadoChat;
    bloqueo: EChatLook;
}
