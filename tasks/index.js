function getDecimal(n) {
  let decimalToPart;
  let decimalPart;
  decimalToPart = (n + '').split('.');
  if (decimalToPart.length === 1) {
    return 0;
  } else {
    decimalPart = '0.' + decimalToPart[1];
  }
  return Number(decimalPart);
}
getDecimal(-2.5)
console.log(getDecimal)


let admin;
let name = 'John';
name = admin;
alert(admin);