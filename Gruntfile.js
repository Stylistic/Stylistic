module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-webfont');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.initConfig({

		stylus: {
			main: {
				options: {
					compress: true,
					paths: ['./styl/**/*.styl'],
					relativeDest: 'dist/css',
					sourcemap: {
						inline: true
					}
				},
				files: {
					'stylus.css': ['styl/stylistic.styl']
				}
			},
			docs: {
				options: {
					compress: true,
					paths: ['./styl/**/*.styl', 'docs/styl/**/*'],
					relativeDest: 'docs/build/css',
					'include css': true,
					sourcemap: {
						inline: true
					}
				},
				files: {
					'site.css': ['docs/styl/site.styl']
				}
			}
		},

		babel: {
			main: {

			}
		},

		pug: {
			debug: {
				options: {
					data: {
						debug: true
					}
				},
				files: [{
					expand: true,
					cwd: 'docs/pug',
					ext: '.html',
					src: ['**/*.pug', '!partials/'],
					dest: 'docs/build/',
					filter: 'isFile'
				}]
			}
		},

		webfont: {
		    main: {
		        src: 'icons/*.svg',
		        dest: 'dist/fonts',
		        destCss: 'styl',
		        options: {
		            stylesheet: 'styl',
		            template: 'icons/_icons.styl',
		            relativeFontPath: '/fonts',
		            engine: 'node',
		            fontFamilyName: 'stylfont',
		            fontFilename: 'stylfont',
		            htmlDemo: false,
		            templateOptions: {
						        baseClass: 'glyph-icon',
						        classPrefix: 'glyph_',
						        mixinPrefix: 'glyph-',
						        fontPath: '../fonts',
						        fontName: 'stylfont'
						    }
		        }
		    }
		},

		copy: {
			fonts: {
				files: [{
					expand: true,
					cwd: 'dist/fonts',
					src: ['**'],
					dest: 'docs/build/fonts',
					filter: 'isFile'
				}]
			}
		},

		connect: {
			server: {
				options: {
					port: 8000,
					hostname: '*',
					base: 'docs/build',
					keepalive: true
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			stylus: {
				files: ['styl/**/*.styl', 'docs/styl/**/*'],
				tasks: ['stylus']
			},
			pug: {
				files: ['docs/pug/**/*.pug'],
				tasks: ['pug']
			}
		}

	});

	grunt.registerTask('default', ['stylus', 'pug', 'watch'])

}