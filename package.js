Package.describe({
  summary: "Wrapper for the Amazon Product Advertising API NPM module, apac",
  version: "0.0.1",
  git: "https://github.com/misutowolf/meteor-apac.git",
  name: "misutowolfe:apac"
});

Npm.depends({
  "apac": "0.0.14"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('server/lib/meteor-apac.js','server');
  api.export('apac');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meteor-apac');
  api.addFiles('meteor-apac-tests.js');
});
