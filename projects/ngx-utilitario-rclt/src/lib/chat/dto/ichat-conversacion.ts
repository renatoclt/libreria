import { EEstadoChat } from './eestado-chat';
import { IChatConversacionDetalle } from './ichat-conversacion-detalle';

export interface IChatConversacion {
    id:string;
    img:string ;
    nombre:string;
    estado: EEstadoChat;
    mensajes: IChatConversacionDetalle[];
}
