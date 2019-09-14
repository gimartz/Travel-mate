  $(document).ready(function(){
  
  
  var name = $('#Departure').val();
	     var to = $('#Arrival').val();
		 var start = $('#Check-in').val();
		  var arrival = $('#Check-out').val();  var adults = $('#adults').val();  var child = $('#child').val();  var infant = $('#infants').val();
		  var first $('#cabin').val(); 
       var settings = {
  "url": "http://www.ije-api.tcore.xyz/v1/flight/search-flight",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": "{\n    \"header\": {\n        \"cookie\": \"\"\n    },\n    \"body\": {\n        \"originDestinations\": [\n            {\n                \"departureCity\": \"name\",\n                \"destinationCity\": \"to\",\n                \"departureDate\": \"start\",\n                \"returnDate\": \"\arrival",\n            },\n            {\n                \"departureCity\": \"name\",\n                \"destinationCity\": \"to\",\n                \"departureDate\": \"start\"\n            },\n            {\n                \"departureCity\": \"name\",\n                \"destinationCity\": \"to\",\n                \"departureDate\": \"start\"\n            }\n        ],\n        \"searchParam\": {\n            \"noOfAdult\": adults,\n            \"noOfChild\": child,\n            \"noOfInfant\": infant,\n            \"cabin\": \"First\"\n        }\n    }\n}",
};

$.ajax(settings).done(function (response) {
 console.log(response);
  var data = JSON.parse(this.response)
 if (request.status >= 200 && request.status < 400) {
    data.forEach(departure => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = departure.date

      const p = document.createElement('p')
      departure.airort = departure.airport.substring(0, 300)
      p.textContent = `${departure.airport}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    }
	arrival => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = arrival.date

      const p = document.createElement('p')
     arrival.city_name = arrival.city_name.substring(0, 300)
      p.textContent = `${arrival.city_name}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
});
});
;