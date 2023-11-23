var inp, aud;
var pl = [];
onload = () => {
  navigator.serviceWorker.register('sw.js');
  inp = document.querySelector('input');
  aud = document.querySelctor('audio');
  inp.onchange = (e) => {
    for(let i=0; i < e.target.files.length; i++) {
      pl.push(URL.createObjectURL(e.target.files[i]));
      document.body.innerHTML = document.body.innerHTML + '<div id="' + pl.[i]' + '"></div>';
    }
  }
}
