export default function f( n :number , i = 1) {
    if (i <= n){
        console.log(i);
        f(n, i+1);
    }
    if (n < 0)
        throw Error("The argument n must by positive!");
}
