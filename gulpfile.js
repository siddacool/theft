var gulp = require('gulp'),
    
    //css related
    sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	prefix = require('gulp-autoprefixer'),
    combineMq = require('gulp-combine-mq'),
    
    //js related
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    
    //Html related
    nunjucksRender = require('gulp-nunjucks-render'),
    htmlmin = require('gulp-htmlmin'),
    
    //sever related
    browserSync = require('browser-sync'),
    
    //Shared and misc
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    rename = require('gulp-rename'),
    data = require('gulp-data'),
    
    //error control
    plumber = require('gulp-plumber');

var projectName = 'theft',
    dist = 'dist',
    scripts = projectName + '/scripts';


/* live reload */
gulp.task('browser-sync', function () {
   var files = [
      dist + '/*.html',
      dist + '/css/*.css',
      dist + '/img/*.png',
      dist + '/js/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './' + dist
      },
      open: false
   });
});

gulp.task('browser-sync-open-browser', function () {
   var files = [
      dist + '/*.html',
      dist + '/css/*.css',
      dist + '/img/*.png',
      dist + '/js/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './' + dist
      }
   });
});

/* style related components */
/* scss css */

// scssToCss
gulp.task('scssToCss', function () {
    gulp.src(projectName + '/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(plumber())
        .pipe(combineMq({
            beautify: false
        }))
        .pipe(prefix('last 4 versions'))
        .pipe(sourcemaps.write('../sourceMaps_css'))
        .pipe(gulp.dest(dist + '/css/'));
});

// scssToCss
gulp.task('scssToCssWeb', function () {
    gulp.src(projectName + '/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(plumber())
        .pipe(combineMq({
            beautify: false
        }))
        .pipe(prefix('last 4 versions'))
        .pipe(gulp.dest(dist + '/css/'));
});

// js compress
gulp.task('jsCompress', function () {
    gulp.src([
         scripts + '/mode-local.js',
         scripts + '/sys-var.js', 
         scripts + '/main.js', 
         scripts + '/game-page.js',
         scripts + '/greet.js'
        ])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(plumber())
        .pipe(gulp.dest(dist + '/js/'));
});
// js compress distribution version
gulp.task('jsCompressWeb', function () {
    gulp.src([
         scripts + '/mode-web.js',
         scripts + '/sys-var.js', 
         scripts + '/main.js', 
         scripts + '/game-page.js',
         scripts + '/greet.js'
        ])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(plumber())
        .pipe(gulp.dest(dist + '/js/'));
});

// nunjucks to html
gulp.task('nunjucks', function() {
 nunjucksRender.nunjucks.configure([projectName + '/nunjucks_templates/'],{ watch: false });

  // Gets .html and .nunjucks files in pages
  return gulp.src(projectName + '/nunjucks_pages/*.nunjucks')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      title:'Theft',
      moto:'GTA Cheats'
  }))
  .pipe(plumber())
  // output files in app folder
  .pipe(gulp.dest(dist))
  
});

// games to html
gulp.task('gameMake', function() {
    
 nunjucksRender.nunjucks.configure([projectName + '/nunjucks_templates/'],{ watch: false });
  
  // Gets .html and .nunjucks files in pages
  return gulp.src(projectName + '/game_pages/*.nunjucks')
  // Renders template with nunjucks
  .pipe(data(function() {
   return require('./theft/api/theftdb.json')
  }))
  .pipe(nunjucksRender({
      title:'Theft',
      moto:'GTA Cheats'
  }))
  .pipe(plumber())
  .pipe(htmlmin({collapseWhitespace: true}))
  // output files in app folder
  .pipe(gulp.dest(dist + '/games/'));
  
});

// copy paste content of public folder to dist
gulp.task('public', function() {
  gulp.src(projectName + '/public/*/*.**')
        .pipe(plumber())
        .pipe(gulp.dest(dist + '/'));
});
gulp.task('publicBase', function() {
  gulp.src(projectName + '/public/*.**')
        .pipe(plumber())
        .pipe(gulp.dest(dist + '/'));
});


/* svg sprites */
/* type 'gulp svgstore' in console */
var path = require('path');

gulp.task('svgstore', function () {
    return gulp
        .src(projectName + '/svgAssets/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(rename({prefix: 'icon-'}))
        .pipe(svgstore())
        .pipe(gulp.dest(projectName + '/nunjucks_templates/partials/'));
});

/* Watch for changes */
/* Generic */
gulp.task('watch',function(){
	gulp.watch(projectName + '/scss/**/*.scss',['scssToCss']);
	gulp.watch(projectName + '/scripts/*.js',['jsCompress']);
	gulp.watch(projectName + '/nunjucks_pages/*.nunjucks',['nunjucks']);
	gulp.watch(projectName + '/nunjucks_templates/**/*.nunjucks',['nunjucks']);
	gulp.watch(projectName + '/game_pages/*.nunjucks',['gameMake']);
});


/* Default Gulp task */
/* type Gulp in console */

/* Local Testing */
gulp.task('default', ['scssToCss','jsCompress','browser-sync','nunjucks','gameMake','watch']);
gulp.task('openbrowser', ['scssToCss','jsCompress','svgstore','public','publicBase','browser-sync-open-browser','nunjucks','gameMake','watch']);

/* distribution version */
gulp.task('web', ['scssToCssWeb','jsCompressWeb','browser-sync','public','publicBase','nunjucks','gameMake','watch']);

