/**
	* Creating new Backbone collection
	* Collection url contains API url, Backbone makes auto call to url
	* Model: lets collection now which model is part of it
	* Parse function returns data to html 
*/
import singleChildrenActivity from '../models/singleChildrenActivityModel.js';

const childrenActivityCollection = Backbone.Collection.extend({

	url: "https://www.nemokennislink.nl/api/activiteiten.json?sleutel=btkpnok5qy&audience=1",
	model: singleChildrenActivity,
	initialize: function(model, options) {},

	parse: function(data) {
		return data.results;
	},
});

export default childrenActivityCollection;