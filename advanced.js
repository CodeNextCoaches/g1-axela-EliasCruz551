(function () {

  var input = document.querySelector("#axela-input"),
      submit = document.querySelector("#axela-submit"),
      message = document.querySelector("#axela-message"),
      advancedDiv = document.querySelector("#advanced"),
      errorText = "I don't understand you.",
      dunnoText = "I wasn't programmed to know that.",
      picture = null,
      greetings = ["hi", "sup", "hello", "hola", "wasup"];

  // Add event listeners to text input and submit button below
  input.addEventListener("keypress", checkKey);
  submit.addEventListener("click", processInput);

  // This function checks if the user has pressed "ENTER" on their keyboard.
  function checkKey(event) {
    var keyCode = event.which || event.keyCode;
    if(keyCode == "13") {
      processInput();
    }
  }

  /*
   * processInput()
   * This function does the following (in order):
   * -If the advancedDiv element contains a picture, that picture is
   *  removed from the advancedDiv.
   * -Create a variable "words" that is an array of all words the user typed.
      Do so exactly like this:
      var words = input.value.toLowerCase().trim().split(" ");
   * -Clear the text area.
   * -If the length of words is 1, then the user only entered one word. Check
   *  if that word is a greeting. If so, set the innerHTML of the message
   *  element to "Greetings!". Otherwise, set it to errorText.
   * -If the lenght of words is 2, then the user entered two words. What
      happens next is based on the first word they entered. Create a switch
      statement for the expression words[0], and has the following cases: "who"
      "what" "where" "tell" "show".
   * -Each case simply calls a function with the same name as the case, with
      words[1] passed in as an argument. For example, case "who" calls
      who(words[1]). Each case should break after calling the function.
   * -At the very end of the switch statement we handle what happens if the
      user has not entered a valid first word. Create a "default" case and
      make it set the message element's innerHTML to errorText.
   * -Finally, create one final "else" that takes care of the user entering
      anything other than 1 or 2 words. This will simply set the innerHTML of
      the message element to errorText.
   */


   function processInput() {
     if(advancedDiv.contains(picture)) {
       picture.removeChild();
     }
     var words = input.value.toLowerCase().trim().split(" ");
     input.value = '';

     if(words.length == 1) {
       if(greetings.indexOf(words[0]) > -1) {
         message.innerHTML = 'Greetings!';
       } else {
         message.innerHTML = errorText;
       }
     } else if (words.length == 2) {
       switch(words[0]){
         case "who":
         who(words[1]);
         break;
         case "what":
         what(words[1]);
         break;
         case "where":
         where(words[1]);
         break;
         case "tell":
         tell(words[1]);
         break;
         case "show":
         show(words[1]);
         break;
         default:
         message.innerHTML = errorText;
       }
     }else{
       message.innerHTML = errorText;
     }



   }

  /*
   * who(word)
   * This function sets the innerHTML of the message element to specific text,
     based on what the "word" is. In this case the word is the second word the
     user entered (e.g., "who you" results in "I am Axela, of course").
   * To do so, create a switch statement that handles the various valid
     second words the user could have entered (e.g., "you", "president", "me").
   * After setting the innerHTML of the message element to whatever text you
     want, don't forget to break.
   * Also don't forget to add a final default case, which handles the user
     entering an invalid second word. This sets the message's innerHTML to
     dunnoText, NOT errorText (since it's not an error per se, Axela just
     doesn't know what they're referring to.)
   */
function who(word){
  switch (expression){
    case 'you':
    message.innerHTML = 'I am Axela, of course';

    case 'me':
    message.innerHTML = 'You are you';

    case 'cool':
    message.innerHTML = 'Coach Elias';
    break;
    default:
    message.innerHTML = dunnoText;
  }
}
function what(word){
  switch (expression){
    case 'life':
    message.innerHTML = 'Life is crazy';

    case 'pi':
    message.innerHTML = 'Today is pi day';

    case 'love':
    message.innerHTML = 'Some tough stuff';
    break;
    default:
    message.innerHTML = dunnoText;
  }
}

function where(word){
  switch (expression){
    case 'me':
    message.innerHTML = 'You are a very good person';

    case 'atlantis':
    message.innerHTML = 'Crazy place';

    case 'food':
    message.innerHTML = 'You need a lot of it';
    break;
    default:
    message.innerHTML = dunnoText;
  }
}

function tell(word){
  switch (expression){
    case 'joke':
    message.innerHTML = 'Im not good at telling jokes';

    case 'poem':
    message.innerHTML = 'Complicated';

    case 'quote':
    message.innerHTML = 'Coach Elias';
    break;
    default:
    message.innerHTML = dunnoText;
  }
}
  /*
   * what(word)
   * See above.
   */

  /*
   * where(word)
   * See above.
   */

  /*
   * tell(word)
   * See above.
   */

  /*
   * show(word)
   * See above.
   */
functio doubleUp(num){
  console.log(num*2);
}
doubleUp(4);
})();
