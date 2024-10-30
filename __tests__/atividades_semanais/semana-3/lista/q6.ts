import AritimeticProgrecion from '../../../../src/atividades_semanais/semana-3/lista/q6';
import  j from '@jest/globals';

j.test.each(
    [
        [4, 24],
        [1, 1],
        [5, 120],
        [0, 1]
    ]
)("exersicio semana 3, questão 6", (v1: number, v2:number) => {
    let pa = new AritimeticProgrecion();
    let sum = pa.fatorial(v1);
    j.expect(sum).toBe(v2);
});

