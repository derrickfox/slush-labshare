'use strict';

var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer');

function padLeft(dateValue) {
    return (dateValue < 10) ? '0' + dateValue : dateValue.toString();
}

var defaultAppName = process.cwd().split('/').pop().split('\\').pop();

gulp.task('default', function (done) {
    var prompts = [{
        name: 'appName',
        message: 'What is the name of your project?',
        default: defaultAppName
    }, {
        name: 'appDescription',
        message: 'What is the description?'
    }, {
        type: 'confirm',
        name: 'moveon',
        message: 'Continue?'
    }];

    inquirer.prompt(prompts, function (answers) {
        if (!answers.moveon) {
            return done();
        }

        var today = new Date();
        answers.appVersion = [
            'v0',
            today.getFullYear().toString().slice(2),
            padLeft(today.getMonth() + 1) + padLeft(today.getDate())
        ].join('.');
        answers.appNameSlug = _.slugify(answers.appName);

        gulp.src(__dirname + '/templates/**')
            .pipe(template(answers))
            .pipe(rename(function (file) {
                if (file.basename[0] === '_') {
                    file.basename = '.' + file.basename.slice(1);
                }
            }))
            .pipe(conflict('./'))
            .pipe(gulp.dest('./'))
            .pipe(install())
            .on('end', function () {
                done();
            });
    });
});
