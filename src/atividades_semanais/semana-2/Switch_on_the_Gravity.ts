type matrix =  ('-'|'#')[][];
function makeMatrixN0(n: number): matrix
{
    let temp: matrix = [];
    for (let i = 0; i < n; i++)
        temp.push([]);
    return temp;

}
function zip(m: matrix):matrix
{
    let rowLength = m.map((r) => r.length)
    .reduce((a:number, cv:number) => Math.min(a, cv));
    let mat = makeMatrixN0(rowLength);
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < rowLength; j++) {
            mat[j][i] = m[i][j];
        }
    }
    return mat;
}
function makeColumn(n: number, size: number)
{
    let temp: ('-'|'#')[] = [];
    for (let i = 0; i < size; i++) {
        temp.unshift(i < n ? '#' : '-');
    }
    return temp;
}
export function switchGravity(arr: matrix): matrix {
    let transposedFoledMatrix : matrix =  zip(arr).map((v) => {
        return v.reduce((ac, cv) => 
             cv == '#' ? ac+1 : ac
        ,0);
    }).map((a) => makeColumn(a, arr.length));
    return zip(transposedFoledMatrix);
}
