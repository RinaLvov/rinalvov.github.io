import provincialCalc from './provincialCalc.js'

 export const calculateFederalTax = (grossIncome) => {
    let federalTaxDeductable;
    // console.log ('calculateFederalTax:', grossIncome)
    if (grossIncome <= 49020){
        // console.log('calculateFederalTax:', grossIncome <= 49020)
        federalTaxDeductable = (grossIncome * 0.15);
        // console.log('federalTaxDeductable:', grossIncome * 0.15)
    }
    if (49020 < grossIncome <= 98040){
        // let bracket1 = 49020 * 0.15
        // let bracket2 = (grossIncome - 49020)
        federalTaxDeductable = (grossIncome * 0.205) 
        // console.log('federalTaxDeductable:', (bracket2 * 0.205) + bracket1)
    }
    if (98040  < grossIncome <= 151978){
        // let bracket1 = 49020 * 0.15
        // let bracket2 = (98040 - 49020) * 0.205
        // let bracket3 = grossIncome - 98040
        federalTaxDeductable = (grossIncome * 0.26);
        // console.log('federalTaxDeductable:', grossIncome * 0.26)
    }
    if (151978  < grossIncome <= 216511){
        // let bracket1 = 49020 * 0.15
        // let bracket2 = (98040 - 49020) * 0.205
        // let bracket3 = (151978 - 98040) * 0.26
        // let bracket4 = (grossIncome - 151978)
        federalTaxDeductable = (grossIncome * 0.29);
        // console.log('federalTaxDeductable:', grossIncome * 0.29)
    }
    if (grossIncome > 216511){
        // let bracket1 = 49020 * 0.15
        // let bracket2 = (98040 - 49020) * 0.205
        // let bracket3 = (151978 - 98040) * 0.26
        // let bracket4 = (216511 - 151978) * 0.29
        // let bracket5 = (grossIncome - 216511)
        federalTaxDeductable = (grossIncome * 0.29)
    // console.log('calculateFe(grossIncome * 0.33);
        // console.log('federalTaxDeductable:', grossIncome * 0.33)
    }
    return federalTaxDeductable;
}

 const calculateCPPTax = (grossIncome) => {
    // console.log ('calculateCPPTaxGross:', grossIncome)
    let cpp;
    if (0 < grossIncome <= 3500) {
        // console.log ('grossIncome <= 3500:', grossIncome <= 3500)
        // console.log ('cpp:', cpp)
        cpp = 0
    }
    if (3500 < grossIncome && grossIncome < 64900) {
        // console.log ('3500 > grossIncome < 64900', 3500 > grossIncome < 64900)
        cpp = (grossIncome - 3500) * 0.057
    }
    if (grossIncome >= 64900) {
        // console.log ('grossIncome >= 64900:', grossIncome >= 64900)
        cpp = 3499
        // console.log ('cpp:', cpp)
    }
    // console.log ('cpp:', cpp)

    return cpp;
}

 const calculateEITax = (grossIncome) => {
        // console.log ('calculateEITaxGross:', grossIncome)
    let ei;
    if (grossIncome <= 60300) {
        ei = (grossIncome * 0.0158);
                // console.log ('ei:', ei )
    }
    else {
        ei = (60300 * 0.158);
    }

    return ei;
}

 const calculateTotalTax = (federalTaxes, provinceTaxes, cpp
    ,ei) => {
        // console.log ("calculateTotalTax:", calculateTotalTax)
    const totalTax = (federalTaxes + provinceTaxes + cpp + ei);
    // console.log ('totalTax:', totalTax)
    return totalTax;
}

 const calculateNetPay = (grossIncome,totalTax) => {
    const netPay = grossIncome - totalTax;
    return netPay;
}

export const calculateMarginalTax = (grossIncome) => {
    let marginalPercent;
    if (grossIncome <= 49020){
        marginalPercent = 15;
    }
    if (49020 < grossIncome <= 98040){
        marginalPercent = 20.5;
    }
    if (98040  < grossIncome <= 151978){
        marginalPercent = 26;
    }
    if (151978  < grossIncome <= 216511){
        marginalPercent = 29;
    }
    if (grossIncome > 216511){
    marginalPercent = 33;
    }
    return marginalPercent;
    ;
}

const calculateAverageTax = (totalTax, grossIncome) => {
    const averageTax = (totalTax / grossIncome) * 100;
    return averageTax;
}

export const englishCalc = (province, grossIncome) => {
    const provincialTax = provincialCalc(province, grossIncome)
    const federalTax = calculateFederalTax(grossIncome);
    // console.log("federalTax: ", federalTax)
    const cppTax = calculateCPPTax (grossIncome);
    // console.log("cppTax: ", cppTax)
    const eiTax = calculateEITax(grossIncome);
    // console.log("eiTax: ", eiTax)
    const totalTax = calculateTotalTax(federalTax, provincialTax, cppTax, eiTax);
    // console.log ('totalTax:', totalTax)
    const netPay = calculateNetPay(grossIncome,totalTax);
    const marginalRate = calculateMarginalTax (grossIncome);
    const averageRate = calculateAverageTax (totalTax, grossIncome);

    const initialUiParams = {
        eiTax,
        totalTax,
        netPay,
        averageRate,
        quebecPension: 0, 
        quebecInsurance: 0,
        grossIncome: grossIncome,
        federalTax, 
        provincialTax, 
        cppTax, 
        marginalRate
    };
    return initialUiParams
}
