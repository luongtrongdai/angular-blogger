'use strict'

angular.module('spBlogger',['ngAnimate', 'ui.router', 'ngResource', 'spBlogger.admin', 'spBlogger.posts','spBlogger.controllers','spBlogger.directives','spBlogger.filters','spBlogger.services']);

angular.module('spBlogger').value('version','V1.0');

//Go to allPosts when start
angular.module('spBlogger').run(['$state', function($state){
		$state.go('allPosts');
	}]);
