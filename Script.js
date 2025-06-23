javascript:(function(){
  document.body.style.userSelect = 'text';
  document.body.style.webkitUserSelect = 'text';
  document.body.style.MozUserSelect = 'text';
  document.body.style.msUserSelect = 'text';
  document.body.style.pointerEvents = 'auto';
  document.body.oncopy = null;
  document.body.oncut = null;
  document.body.onpaste = null;
  document.body.onselectstart = null;
  document.body.oncontextmenu = null;
  window.oncontextmenu = null;
  window.onselectstart = null;
  window.oncopy = null;
  window.oncut = null;
  window.onpaste = null;
  alert('Seleção de texto liberada! Tente copiar agora.');
})();
