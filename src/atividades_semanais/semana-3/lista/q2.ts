export default function f( n = 0 :number, i = 1 :number) {
    console.log(i);
    if (i <= n){
        f(n, i+1);
    }
    if (n < 0)
        throw Error("The argument n must by positive!");
}
