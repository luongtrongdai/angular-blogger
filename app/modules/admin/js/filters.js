'user strict';

angular.module('spBlogger.admin.filters', []);

angular.module('spBlogger.admin.filters')
	.filter('permalink', function() {
		return function (title) {
			return title === undefined ?
									'' 
									: angular.lowercase(title).replace(/[\s]/g, '-');
		}
	});;
