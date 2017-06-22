/**
	* Represents a Backbone model called userLocationModel.
	* @model
	* contains default value for model
*/
const userLocationModel = Backbone.Model.extend({
	
	idAttribute: 'uid',
	defaults: {
		ip: "",
		lat: "51.9247772",
		lng: "4.4759085",
		city: "Rotterdam",
		type: "userLocation"
	},
	url: "http://ipinfo.io"
});

export default userLocationModel;