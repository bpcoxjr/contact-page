module.exports = function(grunt) {
    var initConfig = {
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            scss:'./scss/',
            theme:'../',
            assets:'assets/',
            css:'css/',
            images:'images/',
            js:'js/',
            font:'font/'
        },
        sass: {
    		dev: {
    			options: {
    				style: 'expanded',
    				compass: false
    			},
    			files: {
    				'<%= dirs.theme %><%= dirs.assets %><%= dirs.css %>style.css': '<%= dirs.scss %>style.scss'
    			}
    		}
    	},
        watch: {
            options: {
                livereload: true
            },
            
            scss: {
                files:'<%= dirs.scss %>**/*.scss',
                tasks:['sass:dev','growl:sass']
            }
        },
		growl: { /* optional growl notifications requires terminal-notifer: gem install terminal-notifier */
			sass: {
				message: "Sass files created.",
				title: "grunt"
			},
			
			build: {
				title: "grunt",
				message: "Build complete."
			},
			watch: {
				title: "grunt",
				message: "Watching. Grunt has its eye on you."
			},
			expand: {
				title: "grunt",
				message: "CSS Expanded. Don't check it in."
			},
			concat: {
				title: "grunt",
				message: "JavaScript concatenated."
			},
			uglify: {
				title: "grunt",
				message: "JavaScript minified."
			}
		}
    };
    
    grunt.initConfig(initConfig);
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-growl');
    
    grunt.registerTask('default','growl:watch','watch');
    grunt.registerTask('build',['sass','growl:sass']);
};