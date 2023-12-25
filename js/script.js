// init Isotope //
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click //
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}

// contact form //
const scriptURL = 'https://script.google.com/macros/s/AKfycbyE60ZfS8s9zs5uheNDteVMfG_N4DIs0zzzZMClm7gzyBO86ySN74Erc_ab-S86XnzZbA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
