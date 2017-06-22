/**
	* Creating new Backbone collection
	* Collection url contains API url, Backbone makes auto call to url
	* Model: lets collection now which model is part of it
	* Parse function returns data to html
	* AddMarker function fetches collection and returns lat & lng of models 
*/
import singleActivity from '../models/singleActivityModel.js';

const ActivitiesCollection = Backbone.Collection.extend({

	url: "https://www.nemokennislink.nl/api/activiteiten.json?sleutel=btkpnok5qy",
	model: singleActivity,
	initialize: function(model, options) {},

	parse: function(data) {
		return data.results;
	},

	addMarker: function(){
		let self = this;
		
		self.fetch({
			dataType: 'JSONP',
			success: function(){
				
			}
		})
        .done(function(){ 

            var filterType = _.filter(self.models, function(item){
                return item.attributes.location.lat != null;
                return item.attributes.location.lng != null;
            })
            self.reset(filterType);
        })
    },
});

export default ActivitiesCollection;