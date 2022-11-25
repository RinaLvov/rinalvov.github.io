import { calculateFederalTax, calculateMarginalTax } from "./calculations.js";

const calculateTaxForQuebec = (grossIncome) => {
    let quebecTaxDeductable;
    if (grossIncome <= 42184) {
        // console.log ('if:', grossIncome <= 45142)
        quebecTaxDeductable =  (grossIncome * 0.0506);
        // created a variable called ptd to store the value tax for this tax bracket
        // console.log('quebecTaxDeductable:', grossIncome * 0.0506)
    };
    // console.log("calculateTaxForBC:", grossIncome)
    if (42184 >= grossIncome <= 84369) {
        quebecTaxDeductable =  (grossIncome * 0.0707);
        // console.log ('quebecTaxDeductable:', grossIncome * 0.0707)
    }
    if (84369 >= grossIncome <= 96866) {
        quebecTaxDeductable = (grossIncome * 0.1050);
        // console.log ('quebecTaxDeductable:', grossIncome * 0.1050)
    }
    if (96866 >= grossIncome <= 117623	) {
        quebecTaxDeductable =(grossIncome * 0.1229);
        // console.log ('quebecTaxDeductable:', grossIncome * 0.1229)
    }if (117623 >= grossIncome <= 159483) {
        quebecTaxDeductable =(grossIncome * 0.1470);
        // console.log ('quebecTaxDeductable:', grossIncome * 0.1470)
    }
    if (159483 >= grossIncome <= 222420) {
        quebecTaxDeductable = (grossIncome * 0.1680);
        // console.log ('quebecTaxDeductable:', grossIncome * 0.1680)
    }
    if (grossIncome > 222420) {
        quebecTaxDeductable = (grossIncome * 0.2050);
        // console.log ('quebecTaxDeductable:', grossIncome * 0.2050)
    }
    return quebecTaxDeductable;   
}

const calculateEIQuebec = (grossIncome) => {
    let quebecEI
    if (grossIncome < 56300) {
        quebecEI = (grossIncome * 0.018)
        // console.log ('calculateEIQuebec:', quebecEI)

    }
    else {
        quebecEI =  (56300 * 0.018);
    }
    return quebecEI;
}

const calculateQPP = (grossIncome) => {
    let qpp;
    if (grossIncome < 65000) {
        qpp = (grossIncome * 0.047);
        // console.log ('calculateQPP:', grossIncome * 0.047)
    }
    else {
        qpp = 3776;
    }
    return qpp;
}

const calculateQPIP = (grossIncome) => {
    let qpip;
    if (grossIncome < 90000) {
        qpip = (grossIncome * 0.00494)
    }
    else {
        qpip = 435;
    }
    return qpip;
}

const calculateQuebcTotalTax = (federalTaxes, provinceTaxes, ei, qpp, qpip) => {
    // console.log ("calculateQuebcTotalTax:", calculateQuebcTotalTax)
    const totalTax = (federalTaxes + provinceTaxes + ei + qpp + qpip)
    // console.log ('totalTax:', totalTax)
    return totalTax;
}

const calculateQuebecNetPay = (grossIncome, totalTax) => {
    const netPay = (grossIncome - totalTax);
    return netPay;
}

const calculateAverageTaxQuebec = (totalTax, grossIncome) => {
    const averageTax = (totalTax / grossIncome) * 100 ;
    return averageTax;
}

export const quebecCalc = (grossIncome) => {
    const provincialTax = calculateTaxForQuebec(grossIncome)
    const federalTax = calculateFederalTax(grossIncome);

    const quebecEI = calculateEIQuebec (grossIncome);
    const quebecPension = calculateQPP (grossIncome);
    const quebecInsurance = calculateQPIP (grossIncome);
    const quebecTax = calculateQuebcTotalTax (federalTax, provincialTax,
        quebecEI, quebecPension, quebecInsurance)
    const quebecNetPay =  calculateQuebecNetPay ( grossIncome, quebecTax)
    const quebecAverageRate = calculateAverageTaxQuebec (quebecTax, grossIncome)
    const marginalRate = calculateMarginalTax (grossIncome);
    
    const initialUiParams = {
        eiTax: quebecEI,
        totalTax: quebecTax,
        netPay: quebecNetPay,
        averageRate: quebecAverageRate,
        quebecPension, 
        quebecInsurance,
        grossIncome,
        federalTax, 
        provincialTax, 
        cppTax: 0, 
        marginalRate
    };
    return initialUiParams
}