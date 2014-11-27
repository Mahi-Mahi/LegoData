"use strict";

grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-watch');

// Project configuration.
grunt.initConfig({
	connect: {
		server: {
			options: {
				port: 9001,
				base: '.'
			}
		}
	},

	watch: {
		css: {
			files: 'index.html',
			options: {
				livereload: {
					port: 9001,
				}
			},
		},
	}

});