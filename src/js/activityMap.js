/** 
	* Import all needed files (models/collections/views) 
*/
import Router from './routes/router.js';
import singleActivity from './models/singleActivityModel.js';
import userLocationModel from'./models/userLocationModel.js';
import ActivitiesCollection from './collections/allActivities.js';
import childrenActivityCollection from './collections/childrenActivities.js';
import allActivitiesView from './views/allActivitiesView.js';
import allDropdownView from './views/allDropdownView.js';

$(document).ready(function () {
	const aLocationsObj = [];
	let bMap = false;

	let user = new userLocationModel();
	/**
		* Fetching user Model, on success pushing result into array and calling for setMapMarkers with params
	*/
	user.fetch({
	    success: function (user) {
	        const userLocationData = JSON.stringify(user.attributes);
	        aLocationsObj.push({
	        	name: "Jouw locatie" + user.attributes.city,
	        	lat: Number(user.attributes.lat),
	        	lng: Number(user.attributes.lng),
	        	type: user.attributes.type
	        });
	     	setMapMarkers(aLocationsObj, bMap);
	    }
	})
	/**
		* Creating new collection instances and calling views with collection in them
		* .Render function in views getting called for divs to show data in
	*/
	let allActivities = new ActivitiesCollection();
	let allChildrenActivities = new childrenActivityCollection();
   
    let activityGroupView = new allActivitiesView({ collection: allActivities });
    let dropdownGroupView = new allDropdownView({ collection: allActivities });
    let childrenGroupView = new allActivitiesView({ collection: allChildrenActivities });
    
    $("#dropdownActivities").html(dropdownGroupView.render().el);
	$("#allActivities").html(activityGroupView.render().el);
	$("#alLChildrenActivities").html(childrenGroupView.render().el);

	/**
		* Ajax call for getting location of models
		* Calling setMapMarkers with params (lat/lng/city name)
	*/
	$.ajax({
	    url: "https://www.nemokennislink.nl/api/activiteiten.json?sleutel=btkpnok5qy",
	    type: "GET",
	    dataType: "JSONP",
	    contentType: 'application/json;charset=UTF-8',
	    success: function(data) {
	    	const dataCol = data['results'];
	    	const allActivities = [];
	    	let bMap = true;

	    	$.each(dataCol, function(k, v){
	    		if(v['location']['lat'] != null){
	    			aLocationsObj.push({
	    				name: v['location']['city'],
	    				lat: v['location']['lat'],
	    				lng: v['location']['lng']
	    			});
	    		}                    
	    	});
	    	setMapMarkers(aLocationsObj, bMap);
	    },
	    error : function(data) {
	    	console.log("error");
	    }
	});
	/**
		* Creating new Router, starting bakcbone history as part of router
	*/
	var activityRouter = new Router();

	Backbone.history.start();

	/**
		* Function to create markers on map
		* Gets params location and boolean
		* Loops through each object in Array and puts them on the map according to lat & lng
	*/
	function setMapMarkers(aLocationsObj, bMap){
		
		const locations = [
			    
	    ];

		$.each(aLocationsObj, function (k, v) {
		    locations.push([
		    	''+v.name +'', v.lat , v.lng, v.type
		    ]);
		});

		if(bMap == false){
		    var map = new google.maps.Map(document.getElementById('map'), {
		      zoom: 7,
		      center: new google.maps.LatLng(52.2183036,5.0073012),
		      mapTypeId: google.maps.MapTypeId.ROADMAP
		    });
	    }
	    let infowindow = new google.maps.InfoWindow();
		let marker, i;

		let icon = "";
		for (i = 0; i < locations.length; i++) {  	
			var data = locations[i];
			
	        switch (data[3]){
	            case "userLocation":
	                icon = "green";
	                break;
	            default:
	            	icon = "red";
	        }
	        icon = "http://maps.google.com/mapfiles/ms/icons/" + icon + ".png";
	        marker = new google.maps.Marker({
	        	position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	        	map: map,
	        	icon: new google.maps.MarkerImage(icon)
	      	});
	      	

		    google.maps.event.addListener(marker, 'click', (function(marker, i) {
		        return function() {
		          infowindow.setContent(locations[i][0]);
		          infowindow.open(map, marker);
		        }
		    })(marker, i));
	    }
	}
	
});