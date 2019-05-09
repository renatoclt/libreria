export class LissChat {
    private _imagen: string;
    private _nombre: string;
    private _mensaje: string;
    private _fechaHora: string;
    private _notificacion: number;
    private _estado: number;

    constructor() { }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get mensaje(): string {
        return this._mensaje;
    }
    public set mensaje(value: string) {
        this._mensaje = value;
    }
    public get fechaHora(): string {
        return this._fechaHora;
    }
    public set fechaHora(value: string) {
        this._fechaHora = value;
    }
    public get notificacion(): number {
        return this._notificacion;
    }
    public set notificacion(value: number) {
        this._notificacion = value;
    }
    public get estado(): number {
        return this._estado;
    }
    public set estado(value: number) {
        this._estado = value;
    }
}