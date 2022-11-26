const calculateTaxForOntario = (grossIncome) => {
    let provincialTaxDeductable;


    if (grossIncome <= 45142) {
        // console.log ('if:', grossIncome <= 45142)
        provincialTaxDeductable =  (grossIncome * 0.0505);
        // created a variable called provincialTaxDeductable to store the value tax for this tax bracket
        // console.log('provincialTaxDeductable:', grossIncome * 0.0505)
    };
    // console.log("calculateTaxForOntario:", grossIncome)
    if (45142 > grossIncome <= 90287) {
        let bracket1 = 45142 * 0.0505
        let bracket2 = (grossIncome - 45142) 
        provincialTaxDeductable = (bracket2 * 0.0915) + bracket1;
    
        // console.log ('provincialTaxDeductable:', grossIncome * 0.0915)
    }
    if (90287 > grossIncome <= 150000) {
        let bracket1 = 45142 * 0.0505
        let bracket2 = (grossIncome - 45142) * 0.0915
        let bracket3 = (grossIncome - bracket2)
        provincialTaxDeductable = (bracket3 * 0.1116) + bracket2 + bracket1;
        // console.log ('provincialTaxDeductable:', grossIncome * 0.1116)
    }
    if (150000 > grossIncome <= 220000) {
        provincialTaxDeductable = (grossIncome * 0.1216);
        // console.log ('provincialTaxDeductable:', grossIncome * 0.1216)
    }
    if (grossIncome > 220000) {
        provincialTaxDeductable = (grossIncome  * 0.1616);
        // console.log ('provincialTaxDeductable:', grossIncome * 0.1316)
    }
    return provincialTaxDeductable;
}

const calculateTaxForManitoba = (grossIncome) => {
    let provincialTaxDeductable;
    if (grossIncome <= 34431) {
        // console.log ('if:', grossIncome <= 45142)
        provincialTaxDeductable = Math.ceil(grossIncome * 0.108);
        // created a variable called ptd to store the value tax for this tax bracket
        // console.log('provincialTaxDeductable:', grossIncome * 0.108)
    };
    // console.log("calculateTaxForBC:", grossIncome)
    if (34431 >= grossIncome <= 74416) {
        provincialTaxDeductable = (grossIncome * 0.1275);
        // console.log ('provincialTaxDeductable:', grossIncome * 0.1275)
    }
    if (grossIncome > 74,416) {
        provincialTaxDeductable = (grossIncome * 0.174);
        // console.log ('provincialTaxDeductable:', grossIncome * 0.174)
    }
    return provincialTaxDeductable;
}

const calculateTaxForBC = (grossIncome) => {
    let provincialTaxDeductable;
    if (grossIncome <= 42184) {
        // console.log ('if:', grossIncome <= 45142)
        provincialTaxDeductable = (grossIncome * 0.0506);
        // console.log('provincialTaxDeductable:', grossIncome * 0.0506)
    };
    // console.log("calculateTaxForBC:", grossIncome)
    if (42185 >= grossIncome <= 84369) {
        provincialTaxDeductable = (grossIncome * 0.077);
        // console.log ('provincialTaxDeductable:', grossIncome * 0.077)
    }
    if (84370 >= grossIncome <= 96866) {
        provincialTaxDeductable = (grossIncome * 0.1050);
        // console.log ('provincialTaxDeductable:', grossIncome * 0.1050)
    }
    if (96867 >= grossIncome <= 117623) {
        provincialTaxDeductable = (grossIncome * 0.1229);
        // console.log ('provincialTaxDeductable:', grossIncome * 0.1229)
    }
    if (117624 >= grossIncome <= 159483) {
        provincialTaxDeductable = (grossIncome * 0.1470);
        // console.log ('provincialTaxDeductable:', grossIncome * 0.1470)
    }
    if (159484 >= grossIncome <= 1222420) {
        provincialTaxDeductable = (grossIncome * 0.1680);
        // console.log ('provincialTaxDeductable:', grossIncome * 0.1680)
    }
    if (grossIncome <= 222420) {
        provincialTaxDeductable = (grossIncome * 0.2050);
        // console.log ('provincialTaxDeductable:', grossIncome * 0.2050)
    }
    return provincialTaxDeductable;
}

const calculateTaxForSaskatchewan = (grossIncome) => {
    let provincialTaxDeductable;
    if (grossIncome <= 45677) {
        provincialTaxDeductable = (grossIncome * 0.1050);
        // console.log ('ptd:', grossIncome * 0.1050)
    }
    if (45677 > grossIncome <= 130506) {
        provincialTaxDeductable = (grossIncome * 0.1250);
        // console.log ('ptd:', grossIncome * 0.1250)
    }
    if (grossIncome > 130506) {
        provincialTaxDeductable = (grossIncome * 0.1450);
        // console.log ('ptd:', grossIncome * 0.1450)
    }
    return provincialTaxDeductable;
}

const calculateTaxForAlberta = (grossIncome) => {
    let provincialTaxDeductable;
    if (grossIncome <= 131220) {
        provincialTaxDeductable = (grossIncome * 0.1);
        // console.log ('ptd:', grossIncome * 0.1)
    }
    if (131220 > grossIncome <= 157464) {
        provincialTaxDeductable = (grossIncome * 0.12);
        // console.log ('ptd:', grossIncome * 0.12)
    }
    if (157464 > grossIncome > 209952) {
        provincialTaxDeductable =  (grossIncome * 0.13);
        // console.log ('ptd:', grossIncome * 0.1450)
    }
    if (209952 > grossIncome <= 314928) {
        provincialTaxDeductable = (grossIncome * 0.14);
        // console.log ('ptd:', grossIncome * 0.14)
    }
    if (grossIncome > 314928) {
        provincialTaxDeductable = (grossIncome * 0.15);
        // console.log ('ptd:', grossIncome * 0.15)
    }
    return provincialTaxDeductable;
}

const calculateTaxForPEI = (grossIncome) => {
    let provincialTaxDeductable;
    if (grossIncome <= 31984) {
        provincialTaxDeductable = (grossIncome * 0.098);
        // console.log ('ptd:', grossIncome * 0.098)
    }
    if (31984 > grossIncome <= 63969) {
        provincialTaxDeductable = (grossIncome * 0.138);
        // console.log ('ptd:', grossIncome * 0.138)
    }
    if (grossIncome > 63969) {
        provincialTaxDeductable = (grossIncome * 0.167);
        // console.log ('ptd:', grossIncome * 0.167)
    }
    return provincialTaxDeductable;
}

const calculateTaxForNovaScotia = (grossIncome) => {
    let provincialTaxDeductable;
    if (grossIncome <= 29590) {
        provincialTaxDeductable = (grossIncome * 0.0879);
        // console.log ('ptd:', grossIncome * 0.0879)
    }
    if (29590 > grossIncome <= 59180) {
        provincialTaxDeductable = (grossIncome * 0.1495);
        // console.log ('ptd:', grossIncome * 0.1495)
    }
    if (59180 > grossIncome > 93000) {
        provincialTaxDeductable = (grossIncome * 0.1667);
        // console.log ('ptd:', grossIncome * 0.1667)
    }
    if (93000 > grossIncome <= 150000) {
        provincialTaxDeductable = (grossIncome * 0.1759);
        // console.log ('ptd:', grossIncome * 0.1759)
    }
    if (grossIncome > 150000) {
        provincialTaxDeductable = (grossIncome * 0.21);
        // console.log ('ptd:', grossIncome * 0.21)
    }
    return provincialTaxDeductable;
}

const calculateTaxForNewBrunswick = (grossIncome) => {
    let provincialTaxDeductable;
    if (grossIncome <= 43835) {
        provincialTaxDeductable = (grossIncome * 0.094);
        // console.log ('ptd:', grossIncome * 0.094)
    }
    if (43835 > grossIncome <= 87671) {
        provincialTaxDeductable = (grossIncome * 0.1482);
        // console.log ('ptd:', grossIncome * 0.1482)
    }
    if (87671 > grossIncome > 142534) {
        provincialTaxDeductable = (grossIncome * 0.1652);
        // console.log ('ptd:', grossIncome * 0.1652)
    }
    if (142534 > grossIncome <= 162383) {
        provincialTaxDeductable = (grossIncome * 0.1784);
        // console.log ('ptd:', grossIncome * 0.1784)
    }
    if (grossIncome > 162383) {
        provincialTaxDeductable = (grossIncome * 0.203);
        // console.log ('ptd:', grossIncome * 0.2030)
    }
    return provincialTaxDeductable;
}

const calculateTaxForYukon = (grossIncome) => {
    let provincialTaxDeductable;
    if (grossIncome <= 49020) {
        provincialTaxDeductable = (grossIncome * 0.064);
        // console.log ('ptd:', grossIncome * 0.064)
    }
    if (49020 > grossIncome <= 98040) {
        provincialTaxDeductable = (grossIncome * 0.09);
        // console.log ('ptd:', grossIncome * 0.09)
    }
    if (98040 > grossIncome > 151978) {
        provincialTaxDeductable = (grossIncome * 0.109);
        // console.log ('ptd:', grossIncome * 0.109)
    }
    if (151978 > grossIncome <= 500000	) {
        provincialTaxDeductable = (grossIncome * 0.128);
        // console.log ('ptd:', grossIncome * 0.128)
    }
    if (grossIncome > 500000) {
        provincialTaxDeductable = (grossIncome * 0.15);
        // console.log ('ptd:', grossIncome * 0.15)
    }
    return provincialTaxDeductable;
}

const calculateTaxForNunavut = (grossIncome) => {
    let provincialTaxDeductable;
    if (grossIncome <= 46740) {
        provincialTaxDeductable = (grossIncome * 0.04);
        // console.log ('ptd:', grossIncome * 0.04)
    }
    if (46740 > grossIncome > 93480) {
        provincialTaxDeductable = (grossIncome * 0.07);
        // console.log ('ptd:', grossIncome * 0.07)
    }
    if (93480 > grossIncome <= 151978) {
        provincialTaxDeductable = (grossIncome * 0.09);
        // console.log ('ptd:', grossIncome * 0.09)
    }
    if (grossIncome > 151978) {
        provincialTaxDeductable = (grossIncome * 0.115);
        // console.log ('ptd:', grossIncome * 0.115)
    }
    return provincialTaxDeductable;
}

const calculateTaxForNewfoundlandLabrador = (grossIncome) => {
    let provincialTaxDeductable;
    if (grossIncome <= 39147) {
        provincialTaxDeductable = (grossIncome * 0.087);
        // console.log ('ptd:', grossIncome * 0.087)
    }
    if ( 39147 > grossIncome <= 78294) {
        provincialTaxDeductable = (grossIncome * 0.145);
        // console.log ('ptd:', grossIncome * 0.145)
    }
    if (78294 > grossIncome > 139,780 ) {
        provincialTaxDeductable = (grossIncome * 0.158);
        // console.log ('ptd:', grossIncome * 0.158)
    }
    if ( 139780> grossIncome <= 195693) {
        provincialTaxDeductable = (grossIncome * 0.170);
        // console.log ('ptd:', grossIncome * 0.1730)
    }
    if (195693 > grossIncome <= 250000) {
        provincialTaxDeductable = (grossIncome * 0.1830);
        // console.log ('ptd:', grossIncome * 0.1784)
    }
    if (250000 > grossIncome <= 500000) {
        provincialTaxDeductable = (grossIncome * 0.2080);
        // console.log ('ptd:', grossIncome * 0.2080)
    }
    if (500000 > grossIncome <= 1000000) {
        provincialTaxDeductable = (grossIncome * 0.2130);
        // console.log ('ptd:', grossIncome * 0.2130)
    }
    if (grossIncome > 1000000) {
        provincialTaxDeductable = (grossIncome * 0.2180);
        // console.log ('ptd:', grossIncome * 0.2180)
    }
    return provincialTaxDeductable;
}

const calculateTaxForNorthwestTerritories = (grossIncome) => {
    let provincialTaxDeductable;
    if (grossIncome <= 44396) {
        provincialTaxDeductable = (grossIncome * 0.059);
        // console.log ('ptd:', grossIncome * 0.059)
    }
    if (44396 > grossIncome > 88796) {
        provincialTaxDeductable = (grossIncome * 0.086);
        // console.log ('ptd:', grossIncome * 0.086)
    }
    if (88796 > grossIncome <= 144362) {
        provincialTaxDeductable = (grossIncome * 0.122);
        // console.log ('ptd:', grossIncome * 0.122)
    }
    if (grossIncome > 144362) {
        provincialTaxDeductable = (grossIncome * 0.1405);
        // console.log ('ptd:', grossIncome * 0.1405)
    }
    return provincialTaxDeductable;
}

const provincialCalc = (province, grossIncome) => {
    let provincialTax;
    switch (province) {
        case 'Ontario':
            provincialTax = calculateTaxForOntario(grossIncome);
            break;
         case 'Quebec':
            provincialTax = calculateTaxForQuebec(grossIncome)
            break;
        case 'Manitoba':
            provincialTax = calculateTaxForManitoba(grossIncome)
            break;
        case 'BritishColumbia':
            provincialTax = calculateTaxForBC(grossIncome)
            break;
        case 'Saskatchewan':
            provincialTax = calculateTaxForSaskatchewan(grossIncome)
            break;
        case 'Alberta':
            provincialTax = calculateTaxForAlberta(grossIncome)
            break; 
        case 'PEI':
            provincialTax = calculateTaxForPEI(grossIncome)
            break;
        case 'NovaScotia':
            provincialTax = calculateTaxForNovaScotia(grossIncome)
            break;
        case 'NewBrunswick':
            provincialTax = calculateTaxForNewBrunswick(grossIncome)
            break;
        case 'Yukon':
            provincialTax = calculateTaxForYukon(grossIncome)
            break;
        case 'Nunavut':
            provincialTax = calculateTaxForNunavut(grossIncome)
            break;      
        case 'NewfoundlandLabrador':
            provincialTax = calculateTaxForNewfoundlandLabrador(grossIncome)
            break;
        case 'NorthwestTerritories':
            provincialTax = calculateTaxForNorthwestTerritories(grossIncome)
            break;
    }
    return provincialTax;
}

export default provincialCalc;
