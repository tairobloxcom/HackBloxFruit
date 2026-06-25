(function(){
  function ready(fn){ document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }

  ready(function(){
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');

    // Render simple rating stars from data-stars.
    document.querySelectorAll('.rating[data-stars]').forEach(function(el){
      if (el.dataset.githubRendered === '1') return;
      var value = parseFloat(el.getAttribute('data-stars') || '0');
      if (isNaN(value)) value = 0;
      var html = '';
      for (var i=1; i<=5; i++) {
        html += '<span class="github-star" aria-hidden="true">' + (i <= Math.round(value) ? '★' : '☆') + '</span>';
      }
      html += '<span class="sr-only">' + value + ' sao</span>';
      el.innerHTML = html;
      el.dataset.githubRendered = '1';
    });

    // Static download button: open original page instead of direct API calls.
    document.querySelectorAll('.modradar-download-container[data-static-mode="github-pages"]').forEach(function(box){
      var btn = box.querySelector('.modradar-download-button');
      if (!btn) return;
      btn.addEventListener('click', function(){
        var target = btn.getAttribute('data-target') || 'https://tairoblox.com/blox-fruit/';
        btn.classList.add('is-loading');
        btn.textContent = 'Đang mở trang gốc...';
        setTimeout(function(){ window.location.href = target; }, 350);
      });
    });

    // Simple fallback for mobile menu open/close if Flatsome JS fails.
    document.querySelectorAll('[data-open="#main-menu"]').forEach(function(btn){
      btn.addEventListener('click', function(e){
        var menu = document.querySelector('#main-menu');
        if (!menu) return;
        e.preventDefault();
        menu.classList.toggle('mfp-hide');
        menu.style.display = menu.classList.contains('mfp-hide') ? 'none' : 'block';
        btn.setAttribute('aria-expanded', menu.classList.contains('mfp-hide') ? 'false' : 'true');
      });
    });

    // View-more fallback.
    document.querySelectorAll('.custom-view-more-btn').forEach(function(btn){
      btn.addEventListener('click', function(){
        var prev = btn.previousElementSibling;
        if (prev && prev.classList.contains('custom-view-more')) {
          prev.classList.toggle('is-expanded');
          btn.textContent = prev.classList.contains('is-expanded') ? 'Thu gọn' : 'Xem thêm';
        }
      });
    });

    // Normalize any leftover admin margin injected by external CSS.
    document.documentElement.style.marginTop = '0px';
    document.body.style.marginTop = '0px';
  });
})();
