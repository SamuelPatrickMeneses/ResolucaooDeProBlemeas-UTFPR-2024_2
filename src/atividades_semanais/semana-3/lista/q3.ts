class AritimeticProgrecion {
    public enumFormTo(eFrom :number, eTo :number)
    {
        console.log(eFrom);
        if (eFrom < eTo)
            this.enumFormTo(Math.ceil(eFrom) + 1, Math.ceil(eTo));

        if (eFrom > eTo)
            this.enumFormTo(Math.ceil(eFrom) - 1, Math.ceil(eTo));
    }
}
export default AritimeticProgrecion;
