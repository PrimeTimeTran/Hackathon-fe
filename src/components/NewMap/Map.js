import { DistanceMatrixService, GoogleMap, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import Geocode from "react-geocode";
import './style.css';
import { useDispatch } from 'react-redux';
import { mapActions } from '../../redux/actions/map.actions';

const Map = ({ receivers, providers, setShow }) => {
	console.log(receivers)
	const dispatch = useDispatch();
	const [geocode, setGeocode] = useState({
		lat: 10.77788992345464,
		lng: 106.69517319605292,
	});

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(function (position) {
				// console.log('Latitude is :', position.coords.latitude);
				setGeocode({ ...geocode, lat: position.coords.latitude });
				// console.log('Longitude is :', position.coords.longitude);
				setGeocode({ ...geocode, lng: position.coords.longitude });
			});
		}
	}, []);

	const REACT_APP_GOOGLE_API = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
	const containerStyle = {
		width: '400px',
		height: '400px',
	};

	const onLoad = (marker) => {
		console.log('marker: ', marker);
	};

	// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
	Geocode.setApiKey(REACT_APP_GOOGLE_API);
	// set response language. Defaults to english.
	Geocode.setLanguage('vi');
	// A Geocoding request with region=es (Spain) will return the Spanish city.
	Geocode.setRegion('vi');
	// ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
	Geocode.setLocationType('ROOFTOP');
	Geocode.enableDebug();

	// Get latitude & longitude from address.
	// Geocode.fromAddress("Eiffel Tower").then(
	//   (response) => {
	//     const { lat, lng } = response.results[0].geometry.location;
	//     console.log(lat, lng);
	//   },
	//   (error) => {
	//     console.error(error);
	//   }
	// );
	const users = receivers.newPetitions?.concat(providers.newPetitions)
	console.log(users)

	const showUserModal = (user) => {
		// dispatch(mapActions.selectMarker(user));
		setShow(true);
	};

	const options = {
		imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
	};

	function createKey(location) {
		return location.lat + location.lng;
	}
	return (
		<LoadScript googleMapsApiKey={REACT_APP_GOOGLE_API}>
			<GoogleMap mapContainerStyle={containerStyle} center={geocode} zoom={13}>
				<Marker onLoad={onLoad} position={{ ...geocode }} />
				<MarkerClusterer gridSize={150} options={options} averageCenter={true}>
					{(clusterer) => 
						
						users?.map((user) => {
							console.log('user',user)
							if (user.type === 'receive')
								return (
									<Marker
										onClick={() => showUserModal(user)}
										key={createKey(user.endLoc)}
										position={{ lat: user.endLoc.lat, lng: user.endLoc.lng }}
										icon="https://res.cloudinary.com/wotv/image/upload/v1628629572/logo-receiver_uzfhf3_hswe0x.png"
										clusterer={clusterer}
									/>
								);
							if (user.type === 'provide')
								return (
									<Marker
										onClick={() => showUserModal(user)}
										key={createKey(user.startLoc)}
										position={{ lat: user.startLoc.lat, lng: user.startLoc.lng }}
										icon="https://res.cloudinary.com/wotv/image/upload/v1628629651/logo-giver-7_ffly1f_atdi1i.png"
										clusterer={clusterer}
									/>
								);
							else return null;
						})
					}
				</MarkerClusterer>
				


				<DistanceMatrixService
					options={{
						destinations: [{ lat: 10.80721641690156, lng: 106.68184289556997 }],
						origins: [{ lat: 10.77788992345464, lng: 106.69517319605292 }],
						travelMode: 'DRIVING',
					}}
					callback={(res) => {
						console.log('RESPONSE', res);
					}}
				/>
			</GoogleMap>
		</LoadScript>
	);
};

export default Map;
