(function() {
  'use strict';

  var terms = document.querySelectorAll('.term');

  for (var i = 0; i < terms.length; i++) {
    terms[i].addEventListener('click', function(event) {
      console.log( this );
      this.classList.toggle('is-term-visible');
    });
  }

})();