(function (global)
{
    // map tells the System loader where to look for things
    var map =
    {
        'app': 'dist',
        '@angular': 'node_modules/@angular',
        '@angular/common/http': 'node_modules/@angular/common/bundles/common-http.umd.js',
        '@angular/material': 'node_modules/@angular/material/bundles/material.umd.js',
        '@angular/animations': 'node_modules/@angular/animations/bundles/animations.umd.min.js',
        '@angular/animations/browser':'node_modules/@angular/animations/bundles/animations-browser.umd.js',
        '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
        '@angular/cdk': 'node_modules/@angular/cdk/bundles/cdk.umd.js',
        '@angular/cdk/a11y': 'node_modules/@angular/cdk/bundles/cdk-a11y.umd.js',
        '@angular/cdk/bidi': 'node_modules/@angular/cdk/bundles/cdk-bidi.umd.js',
        '@angular/cdk/coercion': 'node_modules/@angular/cdk/bundles/cdk-coercion.umd.js',
        '@angular/cdk/collections': 'node_modules/@angular/cdk/bundles/cdk-collections.umd.js',
        '@angular/cdk/keycodes': 'node_modules/@angular/cdk/bundles/cdk-keycodes.umd.js',
        '@angular/cdk/observers': 'node_modules/@angular/cdk/bundles/cdk-observers.umd.js',
        '@angular/cdk/overlay': 'node_modules/@angular/cdk/bundles/cdk-overlay.umd.js',
        '@angular/cdk/platform': 'node_modules/@angular/cdk/bundles/cdk-platform.umd.js',
        '@angular/cdk/portal': 'node_modules/@angular/cdk/bundles/cdk-portal.umd.js',
        '@angular/cdk/rxjs': 'node_modules/@angular/cdk/bundles/cdk-rxjs.umd.js',
        '@angular/cdk/table': 'node_modules/@angular/cdk/bundles/cdk-table.umd.js',
        '@angular/cdk/scrolling': 'node_modules/@angular/cdk/bundles/cdk-scrolling.umd.js',
        '@angular/cdk/stepper': 'node_modules/@angular/cdk/bundles/cdk-stepper.umd.js',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'tslib': 'node_modules/tslib/tslib.js',
        'rxjs': 'node_modules/rxjs',
        'traceur': 'node_modules/traceur/bin/traceur.js',
        'hammerjs': 'node_modules/hammerjs/hammer.js'
    };
    
    // packages tells the System loader how to load when no filename and/or no extension
    var packages =
    {
        'app': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {main: 'index.js', defaultExtension: 'js'}
    };
    
    var ngPackageNames =
    [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade'
    ];
    
    // Individual files (~300 requests):
    function packIndex(pkgName)
    {
        packages['@angular/' + pkgName] = {main: 'index.js', defaultExtension: 'js'};
    }
    
    // Bundled (~40 requests):
    function packUmd(pkgName)
    {
        packages['@angular/' + pkgName] = {main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
    }
    
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    
    var config =
    {
        map: map,
        packages: packages
    };
    
    System.config(config);
})(this);
