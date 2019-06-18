/**
 * Estados posibles de un mensaje en un chat
 */
export enum EMessageState {
    /**
     * Mensaje enviado
     */
    sent = 0,
    /**
     * Mensaje recibido
     */
    received = 1,
    /**
     * Mensaje leido
     */
    read = 2
}
