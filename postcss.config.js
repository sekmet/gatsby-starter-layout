const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const customMedia = require('postcss-custom-media');
const customProperties = require('postcss-custom-properties');
const mixins = require('postcss-mixins');

const mediaConfig = require('./config/postcss/media');
const mixinsConfig = require('./config/postcss/mixins');

module.exports = function postcssConfig() {
  return {
    plugins: [
      mixins(mixinsConfig),
      customMedia({ importFrom: mediaConfig }),
      customProperties({
        importFrom: ['src/components/layout/base.css']
      }),
      cssnano({
        preset: 'default',
      }),
      nested,
      autoprefixer
    ]
  };
};
