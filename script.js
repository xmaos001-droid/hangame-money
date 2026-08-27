const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded','false');
  }));
}

const toast = document.getElementById('toast');

async function copyKakaoId() {
  try {
    await navigator.clipboard.writeText('tlem7');
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = 'tlem7';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}

document.getElementById('kakaoCopy')?.addEventListener('click', copyKakaoId);
document.getElementById('kakaoCopy2')?.addEventListener('click', copyKakaoId);

document.getElementById('year').textContent = new Date().getFullYear();
