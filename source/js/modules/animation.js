function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
};

const headBlock = document.querySelector('.head-block');

docReady(function () {
  console.log('###ready');
  headBlock.classList.add('ready');
});
