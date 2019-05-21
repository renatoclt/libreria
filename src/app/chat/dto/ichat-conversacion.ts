import { EEstadoChat } from './eestado-chat';
import { IChatConversacionDetalle } from './ichat-conversacion-detalle';
import { EBloqueoChat } from './ebloqueo-chat';

export interface IChatConversacion {
    id:string;
    img:string ;
    nombre:string;
    bloqueo:EBloqueoChat;
    estado: EEstadoChat;
    mensajes: IChatConversacionDetalle[];
}
