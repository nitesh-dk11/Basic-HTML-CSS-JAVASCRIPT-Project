let  upperSet = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
let  lowerSet = "abcdefghijklmnopqrstugvwxyz";
let  numberSet  =  "1234567890" ;
let  symbolSet = " !@#$%^&*_+";

const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");






const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random()* dataSet.length)]
}

const generatePassword = (password = "") =>{
  if(upperInput.checked){
    password += getRandomData(upperSet)
  }

  if(lowerInput.checked){
    password += getRandomData(lowerSet)
  }

  
  if(numInput.checked){
    password += getRandomData(numberSet)
  }

  
  if(symbolInput.checked){
    password += getRandomData(symbolSet)
  }
 
  if(password.length <= totalChar.value){
    return generatePassword(password)
  }
   passBox.innerText = truncateString(password , totalChar.value);
}
 let btn = document.getElementById("btn") ;

btn.addEventListener("click" , ()=>{
    generatePassword();
})


function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "";
    } else {
      return str;
    }
  }

  generatePassword();


  const btns = document.querySelector("#btns")
 const input = document.querySelector("#name")
 const birthDate = document.querySelector("#date")
 const symbol = document.querySelector("#symbol")
 


  btns.addEventListener("click" , ()=>{
    let userName = input.value
    let  userBirth = birthDate.value;
    let symbols = symbol.value ;

    upperSet = userName.toUpperCase();
    lowerSet = userName.toLowerCase()  ;
    numberSet = userBirth ;
    symbolSet = symbols ;
  })

  