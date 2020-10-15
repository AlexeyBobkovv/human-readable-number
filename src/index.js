module.exports = function toReadable(number) {
 let strNum = number.toString();
  var answ = '';

  const unitsNumbArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const tensNumbArr = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

if  (strNum.length === 3) { 
   answ += unitsNumbArr[strNum.substring(0, 1)] + ' hundred';
   
   if (strNum.substring(1, 3) === '00') {
     return answ;
     
   } else if (parseInt(strNum.substring(1, 3)) >= 20 ) {
     answ += ' ' + tensNumbArr[strNum.substring(1, 2)]
     
     if (strNum.substring(2,3) === '0') {
      return answ;
     }
     
     answ += ' ' + unitsNumbArr[strNum.substring(2, 3)]

    } else {

    if(parseInt(strNum.substring(1, 3)) > 9) {
    answ += ' ' + unitsNumbArr[strNum.substring(1, 3)]

    } else {

    answ += ' ' + unitsNumbArr[strNum.substring(2, 3)]

    }
    }
    return answ;
    
  } else if	(strNum.substring(1, 2) === '0' && parseInt(strNum.substring(0, 2)) > 10) { 
  	answ += tensNumbArr[strNum.substring(0, 1)]
    return answ

  } else if (strNum.length === 2) {
  	if(parseInt(strNum.substring(0, 2)) > 20) {
  	 answ += tensNumbArr[strNum.substring(0, 1)]
     answ += ' ' + unitsNumbArr[strNum.substring(1, 2)];
   } else {
   	 answ += unitsNumbArr[strNum.substring(0, 2)] 
   }
   return answ;
   
  } else {
  	answ += unitsNumbArr[strNum.substring(0, 1)]  
  }
  return answ;
  
}
