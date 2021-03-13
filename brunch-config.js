// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      // 'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },

  stylesheets: { joinTo: 'app.css' },
};

exports.server = {
  run: true,
  hostname: '0.0.0.0',
};

exports.plugins = {
  babel: { presets: ['latest'] }
};

exports.modules = {
  autoRequire: {
    'app.js': ['main']
  }
};
