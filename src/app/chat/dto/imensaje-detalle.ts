import { EEstadoChat } from './eestado-chat';
import { IChatConversacionDetalle } from './ichat-conversacion-detalle';
import { EBloqueoChat } from './ebloqueo-chat';

export interface IMensajeDetalle {
    id: string;
    img: string ;
    nombre: string;
    mensaje: IChatConversacionDetalle[];
    notificacion: number;
    estado: EEstadoChat;
    bloqueo: EBloqueoChat;

}
