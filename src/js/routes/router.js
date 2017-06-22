const Router = Backbone.Router.extend({

	routes: {
		"": "noCopy",
		"firstActivity"	 : "firstActivityMessage",
		"secondActivity" : "secondActivityMessage",
		"thirdActivity"  : "thirdActivityMessage"
	},

	noCopy: function(){
		$("#copy").html("");
	},

	firstActivityMessage: function(){
		$("#copy").html("firstActivityMessage");
	},

	secondActivityMessage: function(){
		$("#copy").html("secondActivityMessage");
	},

	thirdActivityMessage: function(){
		$("#copy").html("thirdActivityMessage");
	}

});

export default Router;
