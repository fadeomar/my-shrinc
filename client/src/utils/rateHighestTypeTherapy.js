import ratesForAllQusetions from './ratesForAllQuestions';

const rate = answers => {
  const getValues = Object.values(answers);
  const result = { CBT: 0, PD: 0, Hu: 0, In: 0, C: 0, STPD: 0 };
  ratesForAllQusetions.forEach((rateForSingleQuestion, id) => {
    const selectedOptions = getValues[id];
    if (typeof selectedOptions === 'string') {
      result.CBT += rateForSingleQuestion[selectedOptions].CBT;
      result.PD += rateForSingleQuestion[selectedOptions].PD;
      result.Hu += rateForSingleQuestion[selectedOptions].Hu;
      result.In += rateForSingleQuestion[selectedOptions].In;
      result.C += rateForSingleQuestion[selectedOptions].C;
      result.STPD += rateForSingleQuestion[selectedOptions].STPD;
    } else {
      selectedOptions.forEach(singleOption => {
        result.CBT += rateForSingleQuestion[singleOption].CBT;
        result.PD += rateForSingleQuestion[singleOption].PD;
        result.Hu += rateForSingleQuestion[singleOption].Hu;
        result.In += rateForSingleQuestion[singleOption].In;
        result.C += rateForSingleQuestion[singleOption].C;
        result.STPD += rateForSingleQuestion[singleOption].STPD;
      });
    }
  });

  return result;
};

export default rate;
