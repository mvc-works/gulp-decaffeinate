
Gulp decaffeinate
----

Barely replaced `gulp-coffee` into `decaffeinate`...

```js
var gulp = require('gulp')
var decaffeinate = require('gulp-decaffeinate')

gulp.task('compile', function() {
  gulp.src('coffee/**/*')
  .pipe(decaffeinate({}))
  .pipe(gulp.dest('app/'))
})
```

Report bugs to https://github.com/decaffeinate/decaffeinate

### License

MIT
