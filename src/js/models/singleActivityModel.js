/**
	* Represents a Backbone model called singleActivity.
	* @model
	* contains default value for model
*/
const singleActivity = Backbone.Model.extend({
	
	defaults: {
		location: "",
		img: "img/placeholder.png",
		link: "",
		theme: ""
	}
	
});

export default singleActivity;