(function(){
  var KEY = 'nvbTheme';

  function current(){
    return document.documentElement.getAttribute('data-theme') === 'cream' ? 'cream' : 'white';
  }
  function apply(theme){
    if(theme === 'cream'){
      document.documentElement.setAttribute('data-theme', 'cream');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }
  function updateButton(btn){
    var isCream = current() === 'cream';
    btn.setAttribute('aria-pressed', isCream ? 'true' : 'false');
    btn.textContent = isCream ? 'White mode' : 'Cream mode';
  }

  document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('theme-toggle');
    if(!btn) return;
    updateButton(btn);
    btn.addEventListener('click', function(){
      var next = current() === 'cream' ? 'white' : 'cream';
      apply(next);
      try{ localStorage.setItem(KEY, next); }catch(e){}
      updateButton(btn);
    });
  });
})();
