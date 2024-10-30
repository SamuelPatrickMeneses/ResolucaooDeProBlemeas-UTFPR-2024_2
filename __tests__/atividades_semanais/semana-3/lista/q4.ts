import AritimeticProgrecion from '../../../../src/atividades_semanais/semana-3/lista/q4';
import  j from '@jest/globals';

j.test.each(
    [
        [1, 5, 15],
        [3, 12, 75],
        [5, 10, 45]
    ]
)("exersicio semana 3, questão 4", (v1: number, v2:number, v3:number) => {
    let pa = new AritimeticProgrecion();
    let sum = pa.enumFormTo(v1, v2, pa.sunOfSequence, 0);
    j.expect(sum).toBe(v3);
});

