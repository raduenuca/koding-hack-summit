import {join} from 'path';
import {APP_SRC} from '../config';

export = function buildSassProd(gulp, plugins, option) {
  return function () {
    return gulp.src(join(APP_SRC, '**', '*.scss'))
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.cssnano())
        .pipe(gulp.dest(APP_SRC));
  };
}
