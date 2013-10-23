if (localStorage.getItem('value')) {
  area.value = localStorage.getItem('value');
}

$('.save-button').on ('click', function() {
  localStorage.setItem('value', area.value);
});
$('.erase-button').on ('click', function() {
  localStorage.removeItem('value');
});