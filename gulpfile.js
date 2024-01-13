import gulp from 'gulp';
import del from 'del';
import { exec } from 'child_process';

const { src, dest, series, watch, task } = gulp;

const HELPERS = {
    execute: (command) => {
        const process = exec(command);
        process.stdout.on('data', (data) => { console.log(data.toString()); })
        process.stderr.on('data', (data) => { console.log(data.toString()); })
        process.on('exit', (code) => { 
        console.log('Process exited with code ' + code.toString()); 
        })
        return process;
    }
}

function clean() {
    return del(['dist']);
}

function cleanOnlyJs() {
    return del(['dist/**/*.js']);
}

function executeRollup() {
    return HELPERS.execute('rollup -c');
}

function copyPluginPhpFiles() {
    return src(['wpSrc/**/*'])
        .pipe(dest('dist'));
}

function copyFilesToWp() {
    del(['D:/Work/Other/AppsForYou/appsfyou-main-website/wordpress/wp-content/plugins/wordpress-blocks/**/*'], { force: true })
    return src(['dist/**/*'])
        .pipe(dest("D:/Work/Other/AppsForYou/appsfyou-main-website/wordpress/wp-content/plugins/wordpress-blocks"));
}


task('build', series(clean, executeRollup, copyPluginPhpFiles))
task('watch', () => watch('src/**/*.{ts,tsx}', series(cleanOnlyJs, executeRollup)))
task('watch-wp-copy', () => watch('src/**/*.{ts,tsx}', series(cleanOnlyJs, executeRollup, copyFilesToWp)))
task('copy-to-wp', series(copyFilesToWp))

const _default = series(clean, executeRollup, copyPluginPhpFiles);
export { _default as default };