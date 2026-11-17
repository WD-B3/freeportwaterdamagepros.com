(function(){var b=document.querySelector('.menubtn'),m=document.getElementById('mobmenu');if(!b||!m)return;
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
window.addEventListener('resize',function(){if(window.innerWidth>900){m.classList.remove('open');b.setAttribute('aria-expanded','false');}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&m.classList.contains('open')){m.classList.remove('open');b.setAttribute('aria-expanded','false');b.focus();}});})();
