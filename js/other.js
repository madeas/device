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
  $('#dragbuttons').draggable();
  $('#dragcreate').draggable();
  $('#drag_back_set').draggable();
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
  document.getElementById('bSm').style.background = e.target.value;
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

// добавление классов в id='back'
$(function() {
  var b = $('.btn_back_cls');
  b.click(function() {
    var cls = $(this).data("cls");
    $('#back').toggleClass(cls);
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
var back = document.querySelector('.back_cover'),
  x = document.querySelector('#posX'),
  y = document.querySelector('#posY'),
  so = document.querySelector('#sizeOne'),
  st = document.querySelector('#sizeTwo'),
  si = document.querySelector('#sizeIn');
(style = () => {
  back.style.backgroundImage = 'url(' + document.querySelector('#bgImage').value + ')';
  back.style.backgroundSize = so.checked ? 'cover' : st.checked ? 'contain' : si.value + 'px';
  back.style.backgroundRepeat = document.querySelector('[name="repeat"]:checked').parentNode.textContent;
  back.style.backgroundPosition = x.value + '%' + y.value + '%';
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

// добавить/убрать кнопки menu и back
var bi = document.getElementById('binone');
var bb = document.getElementById('back_button');
var mb = document.getElementById('menu_button');
bi.addEventListener('change', function() {
  if (this.checked) {
    bb.style.display = 'block';
    mb.style.display = 'block';
  } else {
    bb.style.display = 'none';
    mb.style.display = 'none';
  }
});

// открыть кнопки разработчика
var odb = document.querySelector('.opendev');
odb.onclick = e => {
  e.target.parentNode.style.display = 'none';
  var devb = document.querySelectorAll('.devbutton');
  document.querySelectorAll('.devbutton').forEach(n => n.classList.remove('devbutton'));
};
if (localStorage.getItem('an') == 1) opb.click();

// вращение устройства
var state = true;
document.querySelector('.anistop').onclick = () => {
  document.querySelector('.bsdisplay').style.animationPlayState = state ? 'running' : 'paused';
  state = !state;
};

// настройка камеры iSight
function toggle() {
  var dbblock = document.getElementById('drag_back_set');
  if (devplay.checked)
    dbblock.style.display = 'block';
  else
    dbblock.style.display = 'none'
}
var devplay = document.getElementById('device_play');
devplay.addEventListener('change', function() {
  toggle();
});
