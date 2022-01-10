const changeFirstNumber = (number) =>{
    switch (number){
      case "1":
        return "one";
      case "2":
        return "two";
      case "3":
        return "three";
      case "4":
        return "four";
      case "5":
        return "five";
      case "6":
        return "six";
      case "7":
        return "seven";
      case "8":
        return "eight";
      case "9":
        return "nine";
    }
  }
  
  const changeSecondNumber = (number) => {
    switch (number){
      case "1":
        return "ten";
      case "2":
        return "twenty";
      case "3":
        return "thirty";
      case "4":
        return "forty";
      case "5":
        return "fifty";
      case "6":
        return "sixty";
      case "7":
        return "seventy";
      case "8":
        return "eighty";
      case "9":
        return "ninety";
    }
  }
  
  const changeTenNumber = (number) => {
    switch (number){
      case "10":
        return "ten";
      case "11":
        return "eleven";
      case "12":
        return "twelve";
      case "13":
        return "thirteen";
      case "14":
        return "fourteen";
      case "15":
        return "fifteen";
      case "16":
        return "sixteen";
      case "17":
        return "seventeen";
      case "18":
        return "eighteen";
      case "19":
        return "nineteen";
    }
}



module.exports = function toReadable (number) {
    let numberString = String(number)

    if(number === 0){
        return "zero"
    }else if(numberString.length === 1){
      return changeFirstNumber(numberString)
    }else if(numberString.length === 2 && numberString[0] === "1"){
      return changeTenNumber(numberString)
    }else if(numberString.length === 2 && numberString[1] !== "0"){
      return changeSecondNumber(numberString[0]) + " " + changeFirstNumber(numberString[1])
    }else if(numberString.length === 2 && numberString[1] === "0"){
      return changeSecondNumber(numberString[0])
    }else if(numberString.length === 3 && numberString[1] === "0" && numberString[2] === "0"){
      return changeFirstNumber(numberString[0]) + " " + "hundred"
    }else if(numberString.length === 3 && numberString[1] === "0" && numberString[2] !== "0"){
      return changeFirstNumber(numberString[0]) + " " + "hundred" + " " + changeFirstNumber(numberString[2])
    }else if(numberString.length === 3  && numberString[2] === "0"){
      return changeFirstNumber(numberString[0]) + " " + "hundred" + " " + changeSecondNumber(numberString[1])
    }else if(numberString.length === 3 && numberString[1] === "1"){
      return changeFirstNumber(numberString[0]) + " " + "hundred" + " " + changeTenNumber(numberString.slice(1)) 
    }else if(numberString.length === 3){
      return changeFirstNumber(numberString[0]) + " " + "hundred" + " " + changeSecondNumber(numberString[1]) + " " + changeFirstNumber(numberString[2])
    }
  
  }
  
  
