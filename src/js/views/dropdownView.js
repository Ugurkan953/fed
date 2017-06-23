const singleActivityView = Backbone.View.extend({

	// tagName: "option",
	// className: "activityListItem",

	template: _.template($("#dropdownElement").html()),

	render: function(){
		
		var activityTemplate = this.template(this.model.toJSON());
		
		this.$el.html(activityTemplate);
		return this;
	}
});

export default singleActivityView;