$(document).ready(function() {


    // $('.styledSelect').select2({
    //   dropdownParent: $('.modal-body'),
    // });
    //$('.styledSelect').select2();
    //var targetSelect = $('select').parent();
    $("select").select2({
        minimumResultsForSearch: -1,
        //dropdownParent: $(this).parent().parent(),
    });
    $('body').on('shown.bs.modal', '.modal', function() {
        $(this).find('select').each(function() {
            var dropdownParent = $(document.body);
            if ($(this).parents('.modal.in:first').length !== 0)
                dropdownParent = $(this).parents('.modal.in:first');
            $(this).select2({
                dropdownParent: dropdownParent
                // ...
            });
        });
    });
    $('.toast').toast("show");



    var input = document.querySelector("#phone");
    window.intlTelInput(input, {
        separateDialCode: false,
        autoHideDialCode: true,
        formatOnDisplay: false,
        initialCountry: "sg"
    });


    $("#phone").val("+65");

    $("#phone").on("keydown", function(e) {
        // if user writes a char at index === 0 that is not an arrow or HOME or END
        if (($(this).get(0).selectionStart === 0 && (e.keyCode < 35 || e.keyCode > 40))
            // or if user tries to erase first char
            ||
            ($(this).get(0).selectionStart === 1 && $(this).get(0).selectionEnd === 1 && e.keyCode === 8)) {
            // don't write the character
            return false;
        }
    });

    // prevent right click
    $("#nameId").bind("contextmenu", function(e) {
        e.preventDefault();
    });

    // var input = document.querySelector("#phone2");
    // window.intlTelInput(input, {
    // separateDialCode: false,
    // initialCountry: "sg"   
    // });
    // $("#phone2").val("+65");
});



$(function() {
    /*var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    */

    $('[data-toggle="tooltip"]').tooltip();
})


$(document).ready(function() {
    $('.toast').toast('show');
});

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
// var toastList = toastElList.map(function (toastEl) {
//   return new bootstrap.Toast(toastEl, option)
// })