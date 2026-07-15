// My Midterm Project — interaction script
// Handles the CTA button: shows a themed toast instead of
// a plain browser alert() so it matches the dark/flame design.

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('alertBtn');
  if (!btn) return;

  const messages = [
    'สอบผ่านชัวร์ ขอให้ได้คะแนนเต็ม 20! ✨',
    'นะโมครบสามจบแล้ว โชคดีตอนสอบนะ 🙏',
    'กดแล้วสิ่งศักดิ์สิทธิ์รับทราบ ลุยข้อสอบเลย!'
  ];

  btn.addEventListener('click', () => {
    showToast(messages[Math.floor(Math.random() * messages.length)]);
  });
});

function showToast(text) {
  // remove any existing toast first
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = text;

  Object.assign(toast.style, {
    position: 'fixed',
    left: '50%',
    bottom: '40px',
    transform: 'translateX(-50%) translateY(20px)',
    background: 'linear-gradient(135deg, #ff8a1f, #ff3d1f)',
    color: '#17110a',
    fontFamily: '"Kanit", "Sarabun", sans-serif',
    fontWeight: '600',
    fontSize: '0.95rem',
    padding: '14px 26px',
    borderRadius: '999px',
    boxShadow: '0 20px 40px -14px rgba(0,0,0,0.6), 0 0 30px -8px rgba(255,90,30,0.45)',
    opacity: '0',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    zIndex: '999',
    textAlign: 'center',
    maxWidth: '90vw'
  });

  document.body.appendChild(toast);

  // trigger enter animation
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  // auto dismiss
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}
