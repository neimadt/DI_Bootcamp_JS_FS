const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;


const toJs = () => {

  return new Promise(resolve => {

    const result = JSON.parse(morse);

    return resolve(result);
  });
};

const toMorse = (morseDictionary) => {

  const word = prompt('Give me a word')?.toLowerCase() || '';

  return new Promise((resolve, reject) => {

    const { translation, errorFound } = [...word].reduce((acc, c) => {

      if (acc.errorFound) return acc;


      const t = morseDictionary[c];

      if (t) {

        acc.translation.push(t);
      }
      else {

        acc.errorFound = c;
      }

      return acc;
    }, { translation: [], errorFound: null });

    if (errorFound) {

      reject(`Character '${errorFound}' cannot be translated`);
    }
    else {

      resolve(translation);
    }
  });
};

const joinWords = (morseTranslation) => {

  const result = morseTranslation.length > 0 ?
    morseTranslation.join('<br />')
    : 'Nothing to translate';

  const element = document.createElement('p');
  element.innerHTML = result;

  document.body.appendChild(element);
};

const wait2Secs = () => {

  return new Promise(resolve => setTimeout(resolve, 2000));
};




const start = async () => {

  try {

    const morseDictionary = await toJs();

    const translation = await toMorse(morseDictionary);

    wait2Secs()
      .then(() => {

        console.log('HELLO!');
      });

    joinWords(translation);
  }
  catch (err) {

    alert(`Error caught:\n${err || ''}`)
  }
};

start();
