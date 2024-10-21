import f from '../../../../src/atividades_semanais/semana-3/lista/q1';
import  j from '@jest/globals';
import ml from '../../../util/mockLog.ignore'

j.test.each(
    [1, 3, 5, 10]
)("exersicio semana 3, questão 1", (n) => {
    f("",n)
    j.expect(ml.logMock).toHaveBeenCalledTimes(n);
});

