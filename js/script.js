$( "document" ).ready(function() {

    $("#button").click(function(){
        let output=$(".input").val();
        let checkVowelResult=checkVowel(output)
        $(".output").text(checkVowelResult);

});
function checkVowel(str){
  var firstLetter= str [0];
  var vowels=['a','e','i','o','u'];

  if (vowels.includes (firstLetter)){
    return 'starts with vowel';
  }

  return 'starts with consonant';
}
});