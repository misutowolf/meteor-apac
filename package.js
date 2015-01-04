Package.describe({
  summary: "Wrapper for the Amazon Product Advertising API NPM module, apac",
  version: "0.0.1",
  git: "https://github.com/alexsmr/meteor-apac.git",
  name: "alexsmr:apac"
});

Npm.depends({
  "apac": "1.0.0"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.2.1');
  api.addFiles('server/lib/meteor-apac.js','server');
  api.export('apac');
});

