import AritimeticProgrecion from '../../../../src/atividades_semanais/semana-3/lista/q5';
import  j from '@jest/globals';

j.test.each(
    [
        [5, 1, 15],
        [12, 3, 75],
        [10, 5, 45]
    ]
)("exersicio semana 3, questão 5", (v1: number, v2:number, v3:number) => {
    let pa = new AritimeticProgrecion();
    let sum = pa.enumFormTo(v1, v2, pa.sunOfSequence, 0);
    j.expect(sum).toBe(v3);
});

