'use strict'

angular.module('spBlogger.posts.services',[]);

//Create virtual service
angular.module('spBlogger.posts.services')
	.factory('postService', function(){
		return {
			posts: [{
				id: 1
				, title: 'Simple title 1'
				, content: 'Sample content...'
				, permalink: 'simple-title1'
				, author: 'Sandeep'
				, datePublished: '2014/11/01'
			}, {
				id: 2
				, title: 'Simple title 2'
				, content: 'Sample content...'
				, permalink: 'simple-title2'
				, author: 'Luong Dai'
				, datePublished: '2014/11/04'
			}, {
				id: 3
				, title: 'Simple title 3'
				, content: 'Sample content...'
				, permalink: 'simple-title3'
				, author: 'Sandeep'
				, datePublished: '2014/11/11'
			}, {
				id: 4
				, title: 'Simple title 4'
				, content: 'Sample content...'
				, permalink: 'simple-title4'
				, author: 'Sandeep'
				, datePublished: '2014/12/11'
			}]
			, getAll: function () {
				return this.posts;
			}
			, getPostById: function (id) {
				for (var i in this.posts) {
					if (this.posts[i].id == id) {
						return this.posts[i];
					}
				}
			}
		};
	});