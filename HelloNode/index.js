ccn = 371449635398431;
const ccnStr = String(ccn);
const arrCcn = [];

for (let i = 0; i < ccnStr.length; i += 1) {
    if (i % 2 !== 0) {
        arrCcn.push(Number(ccnStr[i]));
    } else { arrCcn.push(Number(ccnStr[i] * 2)); }
}
console.log(arrCcn);
/*for (let i = 0; i < arrCcn.length; i += 1) {
    if (arrCcn[i] > 9) {
        arrCcn[i] = arrCcn[i] - 9;
    }
}
console.log(arrCcn);
const sumCCN = (arrCcn.reduce((sum, current) => sum + current));
console.log(sumCCN);
if ((sumCCN % 10) === 0) {
    console.log(true);
} else { console.log(false) };
*/
const arr = ccn.toString().split('').map((elem) => Number(elem));

for (let i = arr.length - 2; i >= 0; i -= 2) {
    if ((arr[i] * 2) > 9) {
        arr[i] = (arr[i] * 2) - 9;
    } else {
        arr[i] *= 2;
    }
}
const sumCCN = (arrCcn.reduce((sum, current) => sum + current))
return (sumCCN % 10) === 0;