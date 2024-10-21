export default function f(message :string, n = 1) {
    if (n > 0){
        console.log(message);
        f(message, n-1);
    }
    if (n < 0)
        throw Error("The argument n must by positive!");
}
