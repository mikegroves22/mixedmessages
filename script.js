
const generate = () =>{

  var randNum = Math.floor(Math.random() * quotesArr.length)

  document.getElementById('message').innerHTML = quotesArr[randNum];

  
}




