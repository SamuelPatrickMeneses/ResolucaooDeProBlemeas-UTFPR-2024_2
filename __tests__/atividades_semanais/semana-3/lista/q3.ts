import c from '../../../../src/atividades_semanais/semana-3/lista/q3';
import  j from '@jest/globals';
import ml from '../../../util/mockLog.ignore'

j.test.each(
    [[1, 3],[ 5, 10]]
)("exersicio semana 3, questão 3", (n1, n2) => {
    let co = new c();
    co.enumFormTo(n1, n2)
    j.expect(ml.logMock).toHaveBeenCalledTimes(n2 - n1);
});

