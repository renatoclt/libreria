import { ETipoMensaje } from "./etipo-mensaje";

export interface IChatConversacionDetalle {
    img:string | null;
    mensaje:string;
    nombre:string;
    fecha: string;
    hora: string;
    tipo: ETipoMensaje
}
