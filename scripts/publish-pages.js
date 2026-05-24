'use strict';

const upath = require('upath');
const sh = require('shelljs');

const rootPath = upath.resolve(upath.dirname(__filename), '..');
const distPath = upath.resolve(rootPath, 'dist');

sh.cp('-R', `${distPath}/*`, rootPath);
