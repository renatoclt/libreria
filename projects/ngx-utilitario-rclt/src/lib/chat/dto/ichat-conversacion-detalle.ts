import { ETipoMensaje } from './etipo-mensaje';
import { EMessageState } from './eestado-mensaje';

export interface IChatDetailMessage {
    img: string | null;
    mensaje: string;
    fecha: string;
    hora: string;
    tipoMensaje: ETipoMensaje;
    estadoMensaje: EMessageState;
}
