/**
	* Represents a Backbone model called singleChildrenActivity.
	* @model
	* contains default value for model
*/
const singleChildrenActivity = Backbone.Model.extend({
	
	defaults: {
		location: "",
		img: "img/placeholder.png",
		link: "",
		audience: "Kinderen"
	}
	
});

export default singleChildrenActivity;