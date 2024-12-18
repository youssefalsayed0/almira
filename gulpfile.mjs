import gulp from 'gulp';
import uglify from 'gulp-uglify';
import cssnano from 'gulp-cssnano';
import imagemin from 'gulp-imagemin';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';

// Minify and concat JS
gulp.task('minify-js', () => {
    return gulp.src('js/*.js') // Path to your JS files
        .pipe(uglify())
        .pipe(gulp.dest('js')); // Output directory
});

// Minify and autoprefix CSS
gulp.task('minify-css', () => {
    return gulp.src('css/*.css') // Path to your CSS files
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(gulp.dest('css')); // Output directory
});

// Optimize images including those in subfolders
gulp.task('optimize-images', () => {
    return gulp.src('images/**/*') // This will include images in subfolders
        .pipe(imagemin())
        .pipe(gulp.dest('images')); // Output directory
});

// Watch for changes and reload with BrowserSync
gulp.task('serve', () => {
    browserSync.init({
        proxy: 'your-laravel-app.test', // Adjust with your local dev URL (e.g., Laravel Valet)
        open: false, // Prevents auto-opening the browser
    });

    gulp.watch('js/*.js', gulp.series('minify-js')).on('change', browserSync.reload);
    gulp.watch('css/*.css', gulp.series('minify-css')).on('change', browserSync.reload);
    gulp.watch('images/**/*', gulp.series('optimize-images')).on('change', browserSync.reload); // Watch all images in subfolders
});

// Default task that runs when you type `gulp`
gulp.task('default', gulp.series('minify-js', 'minify-css', 'optimize-images', 'serve'));
