window.onload = function(){
  function removeTransition(e) {
    //transitionend会触发多个事件，包括transform和四个边框的变化等等
    if(e.target.classList.contains("playing"))
      e.target.classList.remove("playing");
    else
      return;
  }
  function playSound(e) {
    //const、模板字符串均为es6新特性
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio)
      return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
  //Array.from为es6中的新方法
  //用于将一个 ArrayLike 对象或者 Iterable 对象转换成一个 Array
  const keys = Array.from(document.querySelectorAll('.key'));
  //=>为es6新增的Arrow Functions
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
};