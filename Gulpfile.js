var gulp = require('gulp'),
    //browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    inject = require('gulp-inject'),
    wiredep = require('wiredep').stream,
    browserSync = require('browser-sync').create();



gulp.task('sass', function () {
  gulp.src('./css/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

//gulp.task('sass:watch', function () {
//  gulp.watch('./css/sass/**/*.scss', ['sass']);
//});


gulp.task('inject', function() {
  var sources = gulp.src(['./js/**/*.js', './css/**/*.css'])
  return gulp.src('index.html')
      .pipe(inject(sources, {
        read: false
      }))
      .pipe(gulp.dest('./'))
})

gulp.task('wiredep', function() {
  return gulp.src('index.html')
      .pipe(wiredep({
        directory: './bower_components'
      }))
      .pipe(gulp.dest('./'))
})


gulp.task('watch', function() {

    gulp.watch('./css/sass/**/*.scss', ['sass']);
    gulp.watch('./css/**/*.css', ['inject']);
    gulp.watch('./js/**/*.js', ['inject']);
    gulp.watch('./bower.json', ['wiredep']);

    gulp.watch(['./**/*.*']).on('change', browserSync.reload);
    gulp.watch(['./']).on('change', browserSync.reload);


});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});



gulp.task('serve', function() {

    //browserSync.init({
    //    proxy: "localhost:8080",
    //    notify:false
    //});
    //
    //gulp.watch("./css/**/*.css").on('change', browserSync.reload);
    //gulp.watch("./**/*.html").on('change', browserSync.reload);
    //gulp.watch("./js/**/*.js").on('change', browserSync.reload);

});

gulp.task('default', ['watch', 'sass', 'browser-sync']);
//ter
