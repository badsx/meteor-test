/* αdithep SriNarulα | 31-12-2013 */
(function(){module.exports=function(a){return a.initConfig({pkg:a.file.readJSON("package.json"),coffee:{Grunt:{files:{"javascript/Gruntfile/Gruntfile.js":"coffee/Gruntfile/**/*.coffee"}},server:{files:{"javascript/server/server.js":"coffee/server/**/*.coffee"},options:{bare:!0}},client:{files:{"javascript/client/client.js":"coffee/client/**/*.coffee"},options:{bare:!0}},lib:{files:{"javascript/lib/lib.js":"coffee/lib/**/*.coffee"},options:{bare:!0}}},uglify:{options:{mangle:!0,compress:!0,banner:"/* <%= pkg.author %> | <%= grunt.template.today('dd-mm-yyyy') %> */\n"},Grunt:{files:{"Gruntfile.js":["javascript/Gruntfile/Gruntfile.js"]}},server:{files:{"αSΨS/server/server.js":["javascript/server/server.js"]}},client:{files:{"αSΨS/client/client/client.min.js":["javascript/client/client.js"]}},vendor:{files:{"αSΨS/client/vendor/vendor.min.js":["client/vendor.js"]}},lib:{files:{"αSΨS/lib/lib.min.js":["javascript/lib/lib.js"]}}},jshint:{options:{curly:!0,eqeqeq:!0,eqnull:!0,browser:!0,sub:!0},Grunt:["javascript/Gruntfile/Gruntfile.js"],server:["javascript/server/server.js"],client:["javascript/client/client.js"],lib:["javascript/lib/lib.js"]},coffeelint:{options:{max_line_length:{level:"ignore"},camel_case_classes:{level:"ignore"}},Grunt:["coffee/Gruntfile/**/*.coffee"],server:["coffee/server/**/*.coffee"],client:["coffee/client/**/*.coffee"],lib:["coffee/lib/**/*.coffee"]},concat:{vendor:{files:{"javascript/client/vendor.js":["bower_components/jquery/jquery.min.js","bower_components/modernizr/modernizr.js","bower_components/foundation/js/foundation.min.js"]}}},jade:{dada:{files:{"client/alpha.html":["jade/angular.jade"]},options:{pretty:!0}},client:{expand:!0,cwd:"jade",src:"**/*.jade",dest:"html",ext:".html",options:{pretty:!0}},clientmin:{expand:!0,cwd:"jade",src:"**/*.jade",dest:"html",ext:".html"}},htmlmin:{options:{removeComments:!0,collapseWhitespace:!0,useShortDoctype:!0,removeEmptyAttributes:!0},dada:{files:{"client/alphamin.html":["client/alpha.html"]}},client:{expand:!0,cwd:"html",src:"**/*.html",dest:"αSΨS/client/client",ext:".html",options:{pretty:!0}}},cssmin:{client:{expand:!0,cwd:"css",src:"**/*.css",dest:"αSΨS/client/client",ext:".css",options:{pretty:!0}},vendor:{files:{"αSΨS/client/vendor/vendor.css":["bower_components/foundation/css/foundation.min.css"]}}},stylus:{client:{expand:!0,cwd:"stylus",src:"**/*.stylus",dest:"css",ext:".css",options:{pretty:!0}}},watch:{server:{files:["coffee/server/**/*.coffee"],tasks:["default"]},client_j:{files:["coffee/client/**/*.coffee"],tasks:["build_j"]},client_b:{files:["coffee/lib/**/*.coffee"],tasks:["build_b"]},client_h:{files:["jade/*.jade"],tasks:["build_h"]},client_c:{files:["stylus/*.stylus"],tasks:["build_c"]}}}),a.loadNpmTasks("grunt-contrib-coffee"),a.loadNpmTasks("grunt-contrib-uglify"),a.loadNpmTasks("grunt-contrib-jshint"),a.loadNpmTasks("grunt-contrib-cssmin"),a.loadNpmTasks("grunt-contrib-watch"),a.loadNpmTasks("grunt-contrib-concat"),a.loadNpmTasks("grunt-contrib-htmlmin"),a.loadNpmTasks("grunt-contrib-stylus"),a.loadNpmTasks("grunt-contrib-jade"),a.loadNpmTasks("grunt-newer"),a.loadNpmTasks("grunt-coffeelint"),a.registerTask("default",["coffeelint:server","coffee:server","jshint:server","uglify:server"]),a.registerTask("g",["coffeelint:Grunt","coffee:Grunt","jshint:Grunt","uglify:Grunt"]),a.registerTask("build_j",["coffeelint:client","coffee:client","jshint:client","uglify:client"]),a.registerTask("build_b",["coffeelint:lib","coffee:lib","jshint:lib","uglify:lib"]),a.registerTask("build_h",["jade:client","htmlmin:client"]),a.registerTask("build_c",["stylus:client","cssmin:client"]),a.registerTask("build_r",["jade:route","htmlmin:route"]),a.registerTask("build_v",["concat:vendor","uglify:vendor","cssmin:vendor"])}}).call(this);