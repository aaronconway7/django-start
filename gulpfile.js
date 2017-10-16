var gulp            = require('gulp');
    sass            = require('gulp-sass');
    autoprefixer    = require('gulp-autoprefixer');

// gulp.task('default', function(){
    // gulp.watch('**/*.sass').on("change", function(file){
    //     console.log("compiling " + file.path);
    //     return gulp.src(file.path, { base: process.cwd() })
    //         .pipe(sass())
    //         .pipe(autoprefixer('last 2 versions'))
    //         .pipe(rename(function(path){
    //             var arr = path.dirname.toString().split('/');
    //             arr.pop();
    //             arr.join('/');
    //             var output_path = arr.join('/');
    //             path.direname = output_path += "/css";
    //         }))
    //         .pipe(gulp.dest("./"))
    // });

// gulp.task('default', function() {
//     gulp.watch('**/*.sass').on("change", function(file){
//         console.log("compiling " + file.path);
//         return gulp.src(file.path)
//             .pipe(foreach(function(stream, file) {
//                 var dir = file.path.toString();
//                 console.log("dir " + dir);
//                 var parentDir = dir.substring(0, dir.lastIndexOf("/sass"));
//                 console.log("parent " + parentDir);
//                 var destDir = parentDir += "/css";
//                 console.log("dest " + destDir);
//                 return stream
//                     .pipe(sass())
//                     .pipe(autoprefixer('last 2 versions'))
//                     .pipe(gulp.dest(destDir));
//             }));
//     });
// });

gulp.task('default', function() {
    gulp.watch('**/*.sass').on("change", function(file){
        var dir = file.path.toString();
        var parentDir = dir.substring(0, dir.lastIndexOf("/sass"));
        var destDir = parentDir += "/css";
        return gulp.src(file.path)
            .pipe(sass())
            .pipe(autoprefixer('last 2 versions'))
            .pipe(gulp.dest(destDir));
    });
});
