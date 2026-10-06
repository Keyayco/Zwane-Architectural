const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
const body = document.body;

const closeMenu = () => {
  if (!menuToggle || !navigation) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  body.classList.remove('menu-open');
};

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  navigation?.classList.toggle('is-open', !open);
  body.classList.toggle('menu-open', !open);
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 30);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const filterButtons = document.querySelectorAll('.filter-button');
const workCards = document.querySelectorAll('.work-card');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    workCards.forEach((card) => {
      const visible = category === 'all' || card.dataset.category === category;
      card.classList.toggle('is-hidden', !visible);
    });
  });
});

const enquiryForm = document.querySelector('#enquiry-form');
const successPanel = document.querySelector('#form-success');
const resetForm = document.querySelector('[data-reset-form]');

enquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!enquiryForm.checkValidity()) {
    enquiryForm.reportValidity();
    return;
  }
  enquiryForm.hidden = true;
  if (successPanel) successPanel.hidden = false;
});

resetForm?.addEventListener('click', () => {
  enquiryForm?.reset();
  if (enquiryForm) enquiryForm.hidden = false;
  if (successPanel) successPanel.hidden = true;
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());

const visual = document.querySelector('.hero-visual');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (visual && !prefersReducedMotion) {
  visual.addEventListener('pointermove', (event) => {
    const bounds = visual.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
    visual.style.transform = `perspective(1000px) rotateY(${x * 0.18}deg) rotateX(${-y * 0.18}deg)`;
  });
  visual.addEventListener('pointerleave', () => {
    visual.style.transform = '';
  });
}