/**
	* Bone structure of the app, imports all needed files for application to run
*/

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

import './js/collections/allActivities.js';
import './js/models/singleActivityModel.js';
import './js/models/userLocationModel.js';
import './js/routes/router.js';
import './js/views/allActivitiesView.js';
import './js/views/singleActivityView.js';
import './js/activityMap.js';