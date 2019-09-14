function checkDOB() {
        var dateString = document.getElementById('start').value;
        var myDate = new Date(dateString);
        var today = new Date();
        if ( myDate < today ) { 
            $('start').after('<p>Please pick the correct date.</p>');
            return false;
        }
 }

 $("#start").datepicker({
        numberOfMonths: 2,
        onSelect: function(selected) {
          $("#start").datepicker("option","minDate", selected)
        }
    });
    $("#start").datepicker({ 
        numberOfMonths: 2,
        onSelect: function(selected) {
           $("#arrival").datepicker("option","maxDate", selected)
        }
    });