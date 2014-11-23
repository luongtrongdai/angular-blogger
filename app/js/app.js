'use strict'

angular.module('spBlogger',['ui.router', 'spBlogger.posts','spBlogger.controllers','spBlogger.directives','spBlogger.filters','spBlogger.services']);

angular.module('spBlogger').value('version','V1.0');

//Go to allPosts when start
angular.module('spBlogger').run(['$state', function($state){
		$state.go('allPosts');
	}]);
