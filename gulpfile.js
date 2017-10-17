var gulp            = require('gulp');
    sass            = require('gulp-sass');
    autoprefixer    = require('gulp-autoprefixer');
    browsersync     = require('browser-sync').create();

gulp.task('default', function() {

    browsersync.init({
        proxy: 'localhost:8000',
        notify: false
    });

    gulp.watch('**/static/**/sass/*.sass').on("change", function(file){
        var dir = file.path.toString();
        var parentDir = dir.substring(0, dir.lastIndexOf("/sass"));
        var destDir = parentDir += "/css";
        return gulp.src(file.path)
            .pipe(sass())
            .pipe(autoprefixer('last 2 versions'))
            .pipe(gulp.dest(destDir))
            .pipe(browsersync.stream())
    });
});
