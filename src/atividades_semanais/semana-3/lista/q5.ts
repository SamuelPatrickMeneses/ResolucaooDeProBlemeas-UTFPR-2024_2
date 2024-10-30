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
}
export default AritimeticProgrecion;
