/**
	* View generating new section
	* Initialize function fetches collection and calls render function 
	* Custom event, checks for change in select list, if there is a change it calls for changeProvince function
	* Render function creates collection inside of data, which gets sended to html
	* ChangeProvince function creates custom trigger event in Backbone which gets picked up in allActivitiesView.js
*/

const allDropdownView = Backbone.View.extend({

	tagName: "section",
	template: _.template($("#dropdownElement").html()),
	initialize: function(){
		let self = this;
		this.collection.fetch({
			dataType: 'JSONP',
			success: function(){
				self.render();
			}
		})
	},

	events: {
		"change #locations": "changeProvince"
	},

	render: function(){
		let data = {
			collection: this.collection
		};
		
		this.$el.html((this.template(data)));
		return this;
	},

	changeProvince: function(){	
		Backbone.trigger('changeProvince', this.$("#locations").val());
	}
});


export default allDropdownView;