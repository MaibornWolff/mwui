#!/usr/bin/env node

const fs = require('fs-extra');
const glob = require('glob-promise');
const path = require('path');
const { parse } = require('svgson');

// first, get a list of all of your icons in the source folder
glob('assets/icons/*.svg')
  // next, read their files, using svgson to parse
  .then(filePaths =>
    Promise.all(
      filePaths.map(fileName => {
        return new Promise(resolve => {
          fs.readFile(fileName, 'utf-8').then(svg => {
            parse(svg).then(contents => resolve({ file: fileName, contents }));
          });
        });
      }),
    ),
  )
  // write a JSON file inside your component's asset folder for each icon
  .then(files => {
    // save filenames in separate files
    const fileNames = files.map(f => {
      const basename = path.basename(f.file);
      return basename.substring(0, basename.length - 4);
    });
    fs.writeFileSync('icon-names.js', `export const icons = ${JSON.stringify(fileNames)};`, 'utf8');

    files.forEach(svg => {
      let file = path.basename(svg.file);
      let paths = svg.contents.children.filter(child => child.name === 'path');
      let filename = `src/components/mw-icon/assets/${file}.json`;

      fs.writeFileSync(filename, JSON.stringify(paths), 'utf8');
    });
    process.exit(0);
  });
