import { ETipoMensaje } from "./etipo-mensaje";
import { EEstadoMensaje } from './eestado-mensaje';

export interface IChatConversacionDetalle {
    img:string | null;
    mensaje:string;
    fecha: string;
    hora: string;
    tipoMensaje: ETipoMensaje;
    estadoMensaje: EEstadoMensaje;
}
