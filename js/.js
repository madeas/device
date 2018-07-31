// добавление класса
$(function() {
  var b = $('.btn_cls');
  b.click(function() {
    var cls = $(this).data("cls");
    $('#bSm').toggleClass(cls);
  });
});

// функция днд
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

// type=color 
document.getElementById('bg_choose').onchange = e => {
  document.getElementById('choose').textContent = e.target.value;
  document.getElementById('bSm').style.backgroundColor = e.target.value;
  let ecls = document.querySelector('#bg_choose');
  ecls.dataset.cls = e.target.value;
}

// бегущая строка на дисплее
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

// стоп - старт по клику
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

// сброс - рестарт по клику
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

// добавление класса в дисплей
$(function() {
  var b = $('.btn_dis_cls');
  b.click(function() {
    var cls = $(this).data("cls");
    $('#display').toggleClass(cls);
  });
});

// функция копирования кода в буфер
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

// сброс стилей по клику
reset.onclick = () => bSm.style = ''
