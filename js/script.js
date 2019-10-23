$( "document" ).ready(function() {

    $("#button").click(function(){
        let userInput=$(".input").val();
        let checkVowelResult=checkVowel(userInput)
        let pigLatinWord=pigLatinizer(userInput);
        $(".output").text(pigLatinWord);
});

function pigLatinizer(userInput){
    let isVowel= checkVowel(userInput)

    if (isVowel===false){
        return user.slice(1)+ userInput[0]+"ay"
    }
        return userInput +"ay"
}

function sliceFromSecond(str){
  return str.slice(1)
}

function checkVowel(str){
  var firstLetter= str [0];
  var vowels=['a','e','i','o','u'];

  if (vowels.includes (firstLetter)){
    return true;
  }

  return false;
}
});