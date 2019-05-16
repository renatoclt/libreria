import { EstadoChat } from './eestado-chat';

export interface IMensajeDetalle {
    id:string;
    img:string ;
    nombre:string;
    mensaje:string;
    fechaHora:string;
    notificacion:number;
    estado:EstadoChat;
}
