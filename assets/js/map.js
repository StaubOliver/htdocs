var map = angular.module('map', [])
.controller('GoogleMap', function($scope, $http){

	var mapProp = {
		    center:new google.maps.LatLng(51.508742,-0.120850),
		    zoom:5,
		    mapTypeId:google.maps.MapTypeId.ROADMAP,
		    mapTypeControl:false,
		    streetViewControl:false
		  };

	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var markers = [];

	var createMarkers = function(info){
		var marker = new google.maps.Marker({
			map: $scope.map,
			position: new google.maps.LatLng(info.lat, info.lng),
			title: info.title
		});

		$scope.markers.push(marker);
	}

	//retrieve the fossils and put them as marker in the map
	$http.get('/api/map/loadfossils/-1/-1/ee/ee/-1/-1/-1/-1/-1/-1').sucess(function(data, status, headers, config){}).forEach(function(item, index){

		var info = [];
		info['lat'] = item['lattitude'];
		info['lng'] = item['longitude'];
		info['title'] = item['genus'];

	})


});