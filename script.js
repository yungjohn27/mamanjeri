const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

const dishSelect = document.getElementById('dish');
document.querySelectorAll('.add-order').forEach(button => {
  button.addEventListener('click', () => {
    const dish = button.dataset.dish;
    const option = [...dishSelect.options].find(item => item.textContent.startsWith(dish));
    if (option) dishSelect.value = option.value;
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('orderForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Thank you, ${data.get('customerName')}! Your order request for ${data.get('quantity')} x ${data.get('dish')} has been prepared. Please contact Mama Njeri to confirm availability and payment.`;
  document.getElementById('formMessage').textContent = message;
  event.currentTarget.reset();
});
