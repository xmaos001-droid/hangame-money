
const toast = document.getElementById('toast');

async function copyKakaoId(){
  try{
    await navigator.clipboard.writeText('tlem7');
  }catch(e){
    const ta=document.createElement('textarea');
    ta.value='tlem7';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),1700);
}

document.getElementById('kakaoCopy')?.addEventListener('click', copyKakaoId);
document.getElementById('kakaoCopyMobile')?.addEventListener('click', copyKakaoId);
