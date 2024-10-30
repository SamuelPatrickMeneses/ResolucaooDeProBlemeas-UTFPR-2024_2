type magima = (i:number,a:number) => number;
class AritimeticProgrecion {
    public enumFormTo(eFrom :number, eTo :number, callback :magima, acumulato: number): number
    {
        acumulato = callback(eFrom, acumulato);
        if (eFrom < eTo)
            return this.enumFormTo(Math.ceil(eFrom) + 1, Math.ceil(eTo), callback, acumulato);

        if (eFrom > eTo)
            return this.enumFormTo(Math.ceil(eFrom) - 1, Math.ceil(eTo), callback, acumulato);
        return acumulato;
    }
    public sunOfSequence(v: number, acumulato = 0): number
    {
        return v + acumulato;
    }
    public fatorial(v:number):number
    {
        return this.enumFormTo(1, v, (a1, a2) => (a1 || 1) * a2, 1)
    }
}
export default AritimeticProgrecion;
