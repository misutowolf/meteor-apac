Package.describe({
  summary: "Wrapper for the Amazon Product Advertising API NPM module, apac",
  version: "0.0.3",
  git: "https://github.com/alexsmr/meteor-apac.git",
  name: "alexsmr:apac"
});

Npm.depends({
  "apac": "1.0.0"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.2.1');
  if (api.export) {
    api.export('apac', 'server');
  }
  api.use(['underscore'],'server');
  api.addFiles('server/lib/meteor-apac.js','server');

});

