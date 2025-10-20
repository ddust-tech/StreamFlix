document.querySelector('.email-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = e.target.querySelector('input').value;
  alert(`Welcome to Streamflix , ${email}! (404 error not found!!!)`);
});
