/**
	* View for all activities, imports singleActivity view to pass model through.
	* Initialize function fetches collection and calls render function 
	* Render functions loops through collection and calls addActivity function for each collection object
	* Refresh function gets called from another view, (trigger event) fetches collection with parameter data (province id)
*/
import singleActivityView from './singleActivityView.js';

const allActivitiesView = Backbone.View.extend({

	tagName: "section",
	initialize: function(){
		let self = this;
		
		this.collection.fetch({
			dataType: 'JSONP',
			success: function(){
				self.render();
			}
		});
		
		Backbone.on('changeProvince', this.refresh, this);
	},

	render: function(){

		this.collection.each(this.addActivity, this);
		
		return this;
	},

	addActivity: function(activity){
		let activityView = new singleActivityView({ model: activity});
		this.$el.append(activityView.render().el);
	},
	
	refresh: function(id){
		let self = this;
		if(id != "all"){
			this.collection.fetch({
				dataType: 'JSONP',
				data: {"province": id},
				success: function(){
					self.render();
				}
			});
		}
	}

});


export default allActivitiesView;