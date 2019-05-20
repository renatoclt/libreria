import { EEstadoChat } from './eestado-chat';
import { IChatConversacionDetalle } from './ichat-conversacion-detalle';

export interface IMensajeDetalle {
    id:string;
    img:string ;
    nombre:string;
    mensaje:IChatConversacionDetalle[];
    fechaHora:string;
    notificacion:number;
    estado:EEstadoChat;
}
