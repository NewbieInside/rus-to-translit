let input = document.querySelector('input');
let btn = document.querySelector('button');
let original = document.querySelector('.type-russian');
let translit = document.querySelector('.type-translit');

btn.addEventListener('click', function() {
  let originalText = document.createElement('div');
  originalText.setAttribute('title', input.value);
  originalText.classList.add('special');
  originalText.innerText = input.value;
  let translitText = document.createElement('div');
  translitText.classList.add('special');
  translitText.innerText = transliterate(input.value);
  original.appendChild(originalText);
  translit.appendChild(translitText);
  translitText.title = transliterate(input.value);
  input.value = '';
});

function transliterate(word) {
  let translateLat = {};
  let result = '';

  translateLat['Ё'] = 'YO';
  translateLat['Й'] = 'I';
  translateLat['Ц'] = 'TS';
  translateLat['У'] = 'U';
  translateLat['К'] = 'K';
  translateLat['Е'] = 'E';
  translateLat['Н'] = 'N';
  translateLat['Г'] = 'G';
  translateLat['Ш'] = 'SH';
  translateLat['Щ'] = 'SCH';
  translateLat['З'] = 'Z';
  translateLat['Х'] = 'H';
  translateLat['Ъ'] = "'";
  translateLat['ё'] = 'yo';
  translateLat['й'] = 'i';
  translateLat['ц'] = 'ts';
  translateLat['у'] = 'u';
  translateLat['к'] = 'k';
  translateLat['е'] = 'e';
  translateLat['н'] = 'n';
  translateLat['г'] = 'g';
  translateLat['ш'] = 'sh';
  translateLat['щ'] = 'sch';
  translateLat['з'] = 'z';
  translateLat['х'] = 'h';
  translateLat['ъ'] = "'";
  translateLat['Ф'] = 'F';
  translateLat['Ы'] = 'I';
  translateLat['В'] = 'V';
  translateLat['А'] = 'A';
  translateLat['П'] = 'P';
  translateLat['Р'] = 'R';
  translateLat['О'] = 'O';
  translateLat['Л'] = 'L';
  translateLat['Д'] = 'D';
  translateLat['Ж'] = 'ZH';
  translateLat['Э'] = 'E';
  translateLat['ф'] = 'f';
  translateLat['ы'] = 'i';
  translateLat['в'] = 'v';
  translateLat['а'] = 'a';
  translateLat['п'] = 'p';
  translateLat['р'] = 'r';
  translateLat['о'] = 'o';
  translateLat['л'] = 'l';
  translateLat['д'] = 'd';
  translateLat['ж'] = 'zh';
  translateLat['э'] = 'e';
  translateLat['Я'] = 'YA';
  translateLat['Ч'] = 'CH';
  translateLat['С'] = 'S';
  translateLat['М'] = 'M';
  translateLat['И'] = 'I';
  translateLat['Т'] = 'T';
  translateLat['Ь'] = "'";
  translateLat['Б'] = 'B';
  translateLat['Ю'] = 'YU';
  translateLat['я'] = 'ya';
  translateLat['ч'] = 'ch';
  translateLat['с'] = 's';
  translateLat['м'] = 'm';
  translateLat['и'] = 'i';
  translateLat['т'] = 't';
  translateLat['ь'] = "'";
  translateLat['б'] = 'b';
  translateLat['ю'] = 'yu';

  for (let i = 0; i < word.length; i++) {
    let newStr = word.charAt(i);

    result += translateLat[newStr] || newStr;
  }

  return result;
}
