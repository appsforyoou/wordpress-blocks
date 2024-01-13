import gulp from 'gulp';
import del from 'del';
import { exec } from 'child_process';

const { src, dest, series } = gulp;

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

function executeRollup() {
    return HELPERS.execute('rollup -c');
}

function copyPluginPhpFiles() {
    return src(['wpSrc/**/*.php'])
        .pipe(dest('dist'));
}

const _default = series(clean, executeRollup, copyPluginPhpFiles);
export { _default as default };