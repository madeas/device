// добавление класса
$(function() {
  var b = $('.btn_cls');
  b.click(function() {
    var cls = $(this).data("cls");
    $('#bSm').toggleClass(cls);
  });
});

// функция drag-and-drop
$(function() {
  $('#dragshadow').draggable();
  $('#dragdisplay').draggable()
  $('#dragposition').draggable();
  $('#dragblock').draggable();
});

//добавление стилей из data-stl и выведение в поле #form_code
$('.btn').click(function() {
  $('#bSm').css($(this).data('stl'));

  var newStyles = $('#bSm').attr('style').replace(/; /g, ';\n');
  var val = $('#form_code').val();

  $('#form_code').val(val.replace(/#bSd \{([\s\S]*?)\}/, `#bSd {\n${newStyles}\n}`));
});

// type='color'
document.getElementById('bg_choose').onchange = e => {
  document.getElementById('choose').textContent = e.target.value;
  document.getElementById('bSm').style.backgroundColor = e.target.value;
  let ecls = document.querySelector('#bg_choose');
  ecls.dataset.cls = e.target.value;
}

// бегущая строка typed display
var typed = new Typed("#typed", {
  strings: [
    'Can place here:',
    'code <br /><pre><span class="pl-e">.display</span> {<br /><span class="pl-c1"><span class="pl-c1">  border-radius</span></span>: <span class="pl-c1">8<span class="pl-k">px</span></span>;<br /><span class="pl-c1"><span class="pl-c1">  min-height</span></span>: <span class="pl-c1">185<span class="pl-k">px</span></span>;<br /><span class="pl-c1"><span class="pl-c1">  padding</span></span>: <span class="pl-c1">15<span class="pl-k">px</span></span>;<br />}</pre>',
    'pictures,',
    'responsive design,',
    'and much more...',
  ],
  onStop: (arrayPos, self) => { // остановка текста по клику
    console.log('onStop', arrayPos, self);
  },
  onStart: (arrayPos, self) => { // старт текста по клику
    console.log('onStart', arrayPos, self)
  },
  onDestroy: (arrayPos, self) => { // удаление текста
    console.log('onDestroy', arrayPos, self)
  },
  onReset: (arrayPos, self) => { // сброс текста
    console.log('onReset', arrayPos, self)
  }
});

// текст стоп/старт по клику
var checkbox = document.querySelector("input[id=typstop]");
checkbox.addEventListener('change', function() {
  if (this.checked) {
    // Checkbox is checked..
    typed.stop();
  } else {
    // Checkbox is not checked..
    typed.start();
  }
});

// текст сброс/рестарт по клику
var checkbox = document.querySelector("input[id=typdest]");
checkbox.addEventListener('change', function() {
  if (this.checked) {
    // Checkbox is checked..
    typed.destroy();
  } else {
    // Checkbox is not checked..
    typed.reset();
  }
});

// генератор стилей
document.getElementById('adstl').onchange = e => {
  let ecls = document.querySelector('#adstl');
  ecls.dataset.cls = e.target.value;
  document.getElementById('bSm').style = e.target.value;
}

// добавление классов в id='display'
$(function() {
  var b = $('.btn_dis_cls');
  b.click(function() {
    var cls = $(this).data("cls");
    $('#display').toggleClass(cls);
  });
});

// сохранение кода в буфер обмена
var button = document.querySelector('.copy_code');
button.addEventListener('click', function(event) {
  var text = document.querySelector('#form_code');
  text.select();
  document.execCommand('copy');
});

// автосайз поля с кодом
var textarea = document.querySelector('.custom-textarea');
textarea.addEventListener('keydown', autosize);

function autosize() {
  var el = this;
  setTimeout(function() {
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 0);
}

// добавление стикера на заднюю крышку
var back = document.querySelector("#back"),
  x = document.querySelector("#posX"),
  y = document.querySelector('#posY'),
  so = document.querySelector('#sizeOne'),
  st = document.querySelector('#sizeTwo'),
  si = document.querySelector('#sizeIn');
(style = () => {
  back.style.background = 'url(' + document.querySelector("#bgImage").value + ') ' + document.querySelector('[name="repeat"]:checked').parentNode.textContent + ' ' + x.value + '% ' + y.value + '%';
  // back.style.background = `url(${document.querySelector("#bgImage").value}) black ${document.querySelector('[name="repeat"]:checked').parentNode.textContent} ${x.value}% ${y.value}%`;
  back.style.backgroundSize = so.checked ? 'cover' : st.checked ? 'contain' : si.value + 'px';
})();
document.querySelectorAll('input').forEach(el => el.oninput = style);

// сброс стилей и кнопок
NodeList.prototype.forEach = Array.prototype.forEach;

document.getElementById('reset').addEventListener('click', function(e) {
  var sideLeft = document.getElementById('sidebar-left');
  var sideRight = document.getElementById('sidebar-right');
  var inputsL = sideLeft.querySelectorAll('input[type=radio]');
  var inputsR = sideRight.querySelectorAll('input[type=radio]');
  inputsL.forEach(function(el) {
    el.checked = false;
  });
  inputsR.forEach(function(el) {
    el.checked = false;
  });
  bSm.style = '';
});
