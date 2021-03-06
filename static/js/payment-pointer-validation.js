(function () {
    'use strict';

    window.addEventListener('load', function () {

        const form = document.querySelector('form');
        const input = document.getElementById('pp');

        form.addEventListener('submit', function (event) {
            if (validPointer(input.value) === false) {
                event.preventDefault();
                event.stopPropagation();
                input.value = '';
            } 
            form.classList.add('was-validated');
        }, false);
    });

    function validPointer(pointer) {
        let startswith$ = pointer.startsWith('$');
        return startswith$;
    }
})();