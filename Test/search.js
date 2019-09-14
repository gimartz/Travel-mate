$(document).ready(function(){

                  var start  = '#Check-in';
                  var end = '#Check-out';
                
                  var flighttype= '#flight_direction';

                  $("#findflight").click(function(){
                      $("#errormessages").html();
                          
      
        var dept  = $("#Departure").val();
        var to   = $("#Arrival").val();
        var start  = $("#Check-in").val();
        var end = $("#Check-out").val();
        var adults1      = $("#adults").val();
        var flighttype   = $("#ftype").val();
        var child        = $("#child").val();
        var infants      = $("#infants").val();
        
        if((dept == "" || dept == null) && (to == "" || to == null) && (start == "" || start == null )){
        $("#Departure").css("border-color", "red"); alert  " required";
        $("#Arrival").css("border-color", "red");
        $("#start").css("border-color", "red");
        
        toastr.warning("Departure airport, arrival airport and departure date are required");
        return false;
        }if((dept == "" || dept == null) && (to == "" || to == null)){
        $("#Departure").css("border-color", "red");
        $("#Arrival").css("border-color", "red");
       
        toastr.warning("Departure  and arrival airport is required");
        return false;
        }if((to == "" || to == null) && (start == "" || start == null) ){
        $("#Check-in").css("border-color", "red");
        $("#start").css("border-color", "red");
        $(".awe-search-tabs").LoadingOverlay("hide");
        toastr.warning("Departure aiport and departure date is required ");
        return false;
        }if((to == "" || to == null) && (start == "" || start == null )){
        $("#Check-out").css("border-color", "red");
        $("#start").css("border-color", "red");
        $(".awe-search-tabs").LoadingOverlay("hide");
        toastr.warning("Arrival airport and departure date is required");
        return false;
        }
        if(dept== "" || to== null){
        $("#Check-in").css("border-color", "red");
        $(".awe-search-tabs").LoadingOverlay("hide");
        toastr.warning("Departure date is required");
        return false;    
        }if(toairport1 == "" || toairport1 == null){
        $("#Check-out").css("border-color", "red");
        $(".awe-search-tabs").LoadingOverlay("hide");
         toastr.warning("Arrival airport field is required");
        return false;
        }if(start== "" || start == null){
        $("#start").css("border-color", "red");
        $(".awe-search-tabs").LoadingOverlay("hide");
         toastr.warning("Departure date is required");
        return false;
        }   
        $.post("flight-results.html",{
					deptAirport  : dept,
                    arrivAirport    : to,
                    checkin  : start,
                    checkout : end,
                    adultsNo       : adults,
                    childNo         : kids1,
                    infantsNo      : infants,
                    flighType   : flighttype
				}, function(data){
           // $(".awe-search-tabs").LoadingOverlay("hide");
            if(data == 1){
                toastr.success("Search Completed. Redirecting to available flights");
              window.location.href = "flight?flighttype=both";
            }else if(data == 0){
            	toastr.error("Bad Internet Connection");
                return false;
            }else{
            	toastr.warning("No result found for your search options. Try again with different search options");
                  return false;
            }
				});
      });

                  $('.awe-calendar').datepicker({ minDate: 0 });

                  function getTodaysDate (val) {
        var t = new Date, day, month, year = t.getFullYear();
        if (t.getDate() < 10) {
            day = "0" + t.getDate();
        }
        else {
            day = t.getDate();
        }
        if ((t.getMonth() + 1) < 10) {
            month = "0" + (t.getMonth() + 1 - val);
        }
        else {
            month = t.getMonth() + 1 - val;
        }

        return (day + '/' + month + '/' + year);
    }

                  if($(start).val() === null || $(start).val() === ""){
                       $(start).datepicker({
                           dateFormat: "dd-mm-yy",
                           minDate: 0
                       }).val(getTodaysDate(0))
                  }


    }



                  $('form').submit(function() {
                      $(this).find('button[type="submit"]').prop('disabled','disabled').html('<i class="fa fa-spinner fa-spin fa-fw"></i> Loading...');
                  });



});