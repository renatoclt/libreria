import { EEstadoChat } from './eestado-chat';

export interface IChatConversacion {
    id:string;
    img:string ;
    nombre:string;
    estado: EEstadoChat;
}
