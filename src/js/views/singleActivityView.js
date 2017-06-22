/**
	* This view gets called in collection.each loop from allActivitiesView.js
	* Creates for each model inside collection a article with classname
	* Render function adds model to HTML (template)
*/
const singleActivityView = Backbone.View.extend({

	tagName: "article",
	className: "activityListItem",

	template: _.template($("#activityElement").html()),

	render: function(){
		let activityTemplate = this.template(this.model.toJSON());
		this.$el.html(activityTemplate);
		return this;
	}
});

export default singleActivityView;