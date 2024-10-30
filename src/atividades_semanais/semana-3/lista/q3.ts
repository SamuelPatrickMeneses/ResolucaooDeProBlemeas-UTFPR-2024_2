class AritimeticProgrecion {
    public enumFormTo(eFrom :number, eTo :number)
    {
        if (eFrom < eTo){
            console.log(eFrom);
            this.enumFormTo(Math.ceil(eFrom) + 1, Math.ceil(eTo));
        }
        if (eFrom > eTo) {
            console.log(eFrom);
            this.enumFormTo(Math.ceil(eFrom) - 1, Math.ceil(eTo));
        }
    }
}
export default AritimeticProgrecion;
