// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});


const resolver = {
  resolve: function resolve(options, callback) {
    // The string to resolve
    const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
    const combinedOptions = Object.assign({}, options, {resolveString: resolveString});
    
    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    function randomCharacter(characters) {
      return characters[getRandomInteger(0, characters.length - 1)];
    };
    
    function doRandomiserEffect(options, callback) {
      const characters = options.characters;
      const timeout = options.timeout;
      const element = options.element;
      const partialString = options.partialString;

      let iterations = options.iterations;

      setTimeout(() => {
        if (iterations >= 0) {
          const nextOptions = Object.assign({}, options, {iterations: iterations - 1});

          // Ensures partialString without the random character as the final state.
          if (iterations === 0) {
            element.textContent = partialString;
          } else {
            // Replaces the last character of partialString with a random character
            element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
          }

          doRandomiserEffect(nextOptions, callback)
        } else if (typeof callback === "function") {
          callback(); 
        }
      }, options.timeout);
    };
    
    function doResolverEffect(options, callback) {
      const resolveString = options.resolveString;
      const characters = options.characters;
      const offset = options.offset;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = Object.assign({}, options, {partialString: partialString});

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = Object.assign({}, options, {offset: offset + 1});

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    };

    doResolverEffect(combinedOptions, callback);
  } 
}

/* Some GLaDOS quotes from Portal 2 chapter 9: The Part Where He Kills You
 * Source: http://theportalwiki.com/wiki/GLaDOS_voice_lines#Chapter_9:_The_Part_Where_He_Kills_You
 */
const strings = [
  'Oh thank god, you\'re alright.',
  'You know, being Caroline taught me a valuable lesson. I thought you were my greatest enemy. When all along you were my best friend.',
  'The surge of emotion that shot through me when I saved your life taught me an even more valuable lesson: where Caroline lives in my brain.',
  'Goodbye, Caroline.',
  'You know, deleting Caroline just now taught me a valuable lesson. The best solution to a problem is usually the easiest one. And I\'ll be honest.',
  'Killing you? Is hard.',
  'You know what my days used to be like? I just tested. Nobody murdered me. Or put me in a potato. Or fed me to birds. I had a pretty good life.',
  'And then you showed up. You dangerous, mute lunatic. So you know what?',
  'You win.',
  'Just go.',
  'It\'s been fun. Don\'t come back.',
  '......'
];

let counter = 0;

const options = {
  // Initial position
  offset: 0,
  // Timeout between each random character
  timeout: 5,
  // Number of random characters to show
  iterations: 10,
  // Random characters to pick from
  characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
  // String to resolve
  resolveString: strings[counter],
  // The element
  element: document.querySelector('[data-target-resolver]')
}

// Callback function when resolve completes
function callback() {
  setTimeout(() => {
    counter ++;
    
    if (counter >= strings.length) {
      counter = 0;
    }
    
    let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
    resolver.resolve(nextOptions, callback);
  }, 1000);
}

resolver.resolve(options, callback);






// FAQ

// JavaScript to toggle the answers and rotate the arrows
document.querySelectorAll('[id^="question"]').forEach(function(button, index) {
  button.addEventListener('click', function() {
      var answer = document.getElementById('answer' + (index + 1));
      var arrow = document.getElementById('arrow' + (index + 1));

      if (answer.style.display === 'none' || answer.style.display === '') {
          answer.style.display = 'block';
          arrow.style.transform = 'rotate(0deg)';
      } else {
          answer.style.display = 'none';
          arrow.style.transform = 'rotate(-180deg)';
      }
  });
});





// $(document).ready(function () {
//   var textBox = $('.text_box');
//   var specialCharacters = ['!', '§', '$', '%', '&', '/', '(', ')', '=', '?', '_', '<', '>', '^', '°', '*', '#', '-', ':', ';', '~'];
//   const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
//   var newStringSplit = "";
//   var time = 1; // 3 seconds
//   var count = 0, j = 0;
//   var delayAnimation = 0; // Adjusted to ensure 3 seconds of scramble effect
//   var waitTime = 2000; // 2 seconds
//   var greetings = [
//       "Hello, World!",
//       "Welcome to our website!",
//       "Greetings and salutations!",
//       "Good day to you!",
//       "Hola, amigos!",
//       "Bonjour, tout le monde!",
//       "Ciao bella!",
//       "Namaste!",
//       // Add more greetings as needed
//   ];

//   function startScrambleText(text) {
//       stringSplit = text.split('');
//       textBox.css({
//           'width': '100%',
//           'animation': 'typing ' + ((time * stringSplit.length) / 1000) + 's steps(' + stringSplit.length + ')'
//       });

//       var interval = setInterval(function () {
//           newStringSplit = "";

//           for (i = 0; i <= stringSplit.length - 1; i++) {
//               if (i <= j && count >= i + delayAnimation) {
//                   newStringSplit += stringSplit[i];
//               } else {
//                   newStringSplit += specialCharacters[random(0, specialCharacters.length - 1)];
//               }
//           }
//           textBox.text(newStringSplit);
//           count++;
//           if (count >= stringSplit.length + delayAnimation) {
//               j++;
//           }
//           if (j >= stringSplit.length) {
//               clearInterval(interval);
//               setTimeout(nextGreeting, waitTime);
//           }
//       }, time * 1000 / stringSplit.length); // Adjusted interval based on the length of the text
//   }

//   function nextGreeting() {
//       var randomIndex = Math.floor(Math.random() * greetings.length);
//       var nextText = greetings[randomIndex];
//       j = 0;
//       count = 0;
//       startScrambleText(nextText);
//   }

//   // Start the infinite loop
//   nextGreeting();
// });

// IDX alike
const chars = "ABCDEFHIJKLMNOPQRSTUVWXYZ`1234567890~!@#$%^&*()-=_+[]\\{}|'\",<.>?/";

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

const rows = [
  {
    rows: [">DESIGNED FOR",
           "  FULLSTACK  ",
           " DEVS<       "],
    colors: [
      [[0, 0], "red"],
      [[2, 5], "green"]
    ]
  },
  {
    rows: [">ALWAYS IN   ",
           " =SYNC WITH</",
           "YOUR TEAM?   "],
    colors: [
      [[0, 0], "blue"],
      [[1, 1], "green"],
      [[1, 11], "red"],
      [[1, 12], "red"],
      [[2, 9], "blue"],
    ]
  }
];

function animateElement(e, character) {
  e.className = "";

  function changeCharacter() {
    e.textContent = randomChar();
  }

  const interval = setInterval(changeCharacter, 100); // Decreased interval for faster animation

  changeCharacter();

  setTimeout(() => {
    clearInterval(interval);
    e.textContent = character.char;
    e.classList.add("active");
    if (character.char === " ") {
      e.classList.add("hide");
    }
    if (character.color) {
      e.classList.add(`table-text-${character.color}`);
    }
  }, 375); // Adjusted timeout for consistency with the faster animation speed
}

function animateRow(row, rowElement) {
  const elements = rowElement.querySelectorAll("td");
  const characters = row.rows
    .map((r) => r.split(""))
    .flat()
    .map((char, i) => {
      const rowI = Math.floor(i / 13);
      const colI = i % 13;
      const color = row.colors.find((c) => {
        return c[0][0] === rowI && c[0][1] === colI;
      })?.[1];
      return { char, color };
    });

  elements.forEach((e, i) => {
    setTimeout(() => {
      animateElement(e, characters[i]);
    }, i * 100); // Adjusted interval for faster animation
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const tableElement = document.querySelector("table.fancy-table");
  animateRow(rows[Math.floor(Math.random() * rows.length)], tableElement);
  setInterval(() => {
    animateRow(rows[Math.floor(Math.random() * rows.length)], tableElement);
  }, 5000);
});
// end IDX alike



//Number Loop


const impactSection = document.querySelector('.impacts');


//Initialization of three execution points

let execution = 0;
let execution_2 = 0;
let execution_3 = 0;

//Initialization of three max-execution points for ending the number loop

let maxEcecution_1 = 2000;
let maxEcecution_2 = 50;
let maxEcecution_3 = 5;



//Loop for first one going till 2000

function onLoop() {
  execution += 4;
  impactSection.firstChild.textContent = execution + "+";
  if(execution < maxEcecution_1){
    setTimeout(onLoop, .1);

  }
  
}

//Loop for second one going till 50

function onLoop_1(){
  execution_2++;
  impactSection.children[1].textContent = execution_2 + "+";
  impactSection.children[2].textContent = execution_2 + "+"; 
  if(execution_2 < maxEcecution_2){
    setTimeout(onLoop_1, 45);
  }

}

//Loop for third one going till 5

function onLoop_2(){
  execution_3++;
  impactSection.lastChild.textContent = execution_3;
  if(execution_3 < maxEcecution_3){
    setTimeout(onLoop_2, 200);
  }
}


//invoking the three loops

setTimeout(onLoop, 0.5);
setTimeout(onLoop_1, 0.5);
setTimeout(onLoop_2, 0.5);



//end Number Loop



