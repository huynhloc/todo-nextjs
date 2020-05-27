'use strict';

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const SVGO = require('svgo');
const parseArg = require('minimist');

const { prefix } = parseArg(process.argv);

if (!prefix) {
  console.error('Needs to add prefix e.g: `--prefix=mouth`');
  process.exit(1);
}

const svgo = new SVGO({
  precision: 8,
  plugins: [
    {
      prefixIds: {
        prefix,
      },
    },
    {
      cleanupAttrs: true,
    },
    {
      removeDoctype: true,
    },
    {
      removeXMLProcInst: true,
    },
    {
      removeComments: true,
    },
    {
      removeMetadata: true,
    },
    {
      removeTitle: true,
    },
    {
      removeDesc: true,
    },
    {
      removeUselessDefs: true,
    },
    {
      removeEditorsNSData: true,
    },
    {
      removeEmptyAttrs: true,
    },
    {
      removeHiddenElems: true,
    },
    {
      removeEmptyText: true,
    },
    {
      removeEmptyContainers: true,
    },
    {
      removeViewBox: false,
    },
    {
      cleanUpEnableBackground: true,
    },
    {
      convertStyleToAttrs: true,
    },
    {
      convertColors: false,
    },
    {
      convertPathData: false,
    },
    {
      convertTransform: false,
    },
    {
      removeUnknownsAndDefaults: true,
    },
    {
      removeNonInheritableGroupAttrs: true,
    },
    {
      removeUselessStrokeAndFill: true,
    },
    {
      removeUnusedNS: true,
    },
    {
      cleanupIDs: true,
    },
    {
      cleanupNumericValues: true,
    },
    {
      moveElemsAttrsToGroup: true,
    },
    {
      moveGroupAttrsToElems: true,
    },
    {
      collapseGroups: true,
    },
    {
      removeRasterImages: false,
    },
    {
      mergePaths: false,
    },
    {
      convertShapeToPath: true,
    },
    {
      sortAttrs: true,
    },
    {
      transformsWithOnePath: false,
    },
    {
      removeDimensions: true,
    },
    {
      removeAttrs: { attrs: 'data-name' },
    },
  ],
  js2svg: {
    pretty: true,
    indent: '  ',
  },
});

const propsToReplace = {
  '"isolation:isolate"': "{{ isolation: 'isolate' }}",
  '"mix-blend-mode:overlay"': "{{ mixBlendMode: 'overlay' }}",
  '"mix-blend-mode:multiply"': "{{ mixBlendMode: 'multiply' }}",
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'stroke-width': 'strokeWidth',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-linecap': 'strokeLinecap',
  'xlink:href': 'xlinkHref',
  'clip-path': 'clipPath',
  'stroke-linejoin': 'strokeLinejoin',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
};

function convertJSX(data) {
  const jsxResult = data;

  return Object.entries(propsToReplace).reduce((result, [key, value]) => {
    return result.replace(new RegExp(key, 'gi'), value);
  }, jsxResult);
}

function readFiles(dirname) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      console.log('error', err);
      return;
    }
    filenames.forEach(function(filename) {
      if (!filename.includes('svg')) {
        return;
      }
      const filepath = path.join(dirname, filename);
      fs.readFile(filepath, 'utf-8', function(fileErr, content) {
        if (fileErr) {
          console.log('error', fileErr);
          return;
        }
        svgo.optimize(content, { path: filepath }).then(function(result) {
          const optimizedSVG = result.data;
          const jsxCompatibleSVG = convertJSX(optimizedSVG);
          // rewrites original svg
          fs.writeFile(`${filepath}.optimized.svg`, optimizedSVG, function(
            svgErr
          ) {
            if (svgErr) {
              console.log('err', err);
            }
            console.log('file saved');
          });

          // generates a JSX-compatible svg
          fs.writeFile(`${filepath}.jsx`, jsxCompatibleSVG, function(svgErr) {
            if (svgErr) {
              console.log('err', err);
            }
            console.log('jsx file saved');
          });
        });
      });
    });
  });
}

const dirName = path.resolve(__dirname, 'svg-images');

readFiles(dirName);
