function reset(){
	document.getElementById('name').innerHTML = ''
    document.getElementById('country').innerHTML = ''
    document.getElementById('latitude').innerHTML = ''
    document.getElementById('longitude').innerHTML = ''
    document.getElementById('date').innerHTML = ''
    document.getElementById('temperature').innerHTML = ''
}

function requeteAJAX(){
	alert("Envoi de la requête AJAX")
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://www.prevision-meteo.ch/services/json/'+document.getElementById('city').value);
	xhr.onload = function() {
	    if (xhr.status === 200) {
	    	alert("Affichage des résultats")
	        var data = JSON.parse(xhr.responseText);
	        console.log(data)
	        document.getElementById('name').innerHTML = data.city_info.name
	        document.getElementById('country').innerHTML = data.city_info.country
	        document.getElementById('latitude').innerHTML = data.city_info.latitude
	        document.getElementById('longitude').innerHTML = data.city_info.longitude
	        document.getElementById('date').innerHTML = data.fcst_day_0.day_long + ' - ' + data.fcst_day_0.date
	        document.getElementById('temperature').innerHTML ='<br>';
	        for(hour in data.fcst_day_0.hourly_data){
	        	document.getElementById('temperature').innerHTML += hour + ': ' + data.fcst_day_0.hourly_data[hour].TMP2m + '<br>'
	        }
	    }
	    else {
	        alert('Request failed');
	    }
	};
	xhr.send();
}