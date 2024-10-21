import f from '../../../../src/atividades_semanais/semana-3/lista/q2';
import  j from '@jest/globals';
import ml from '../../../util/mockLog.ignore'

j.test.each(
    [1, 3, 5, 10]
)("exersicio semana 3, questão 2", (n) => {
    f(n)
    j.expect(ml.logMock).toHaveBeenCalledTimes(n);
});

