/**
 * Estados que puede tener un chat
 */
export enum EChatLock {
    /**
     * Si el chat esta desbloqueado
     */
    unlocked = 0,
    /**
     * Si yo eh bloqueado el chat
     */
    lock = 1,
    /**
     * Si he sido bloqueado
     */
    locked = 2,
}
