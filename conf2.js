( function() {
    'use strict';
    exports.config = {
    // Setting the parameters to use chromedriver.exe for running the script
    chromeOnly: true,
    chromeDriver: 'C:/node_modules/protractor/selenium/chromedriver',
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': [ 'start-maximized' ],
            'extensions': [ 'C:\\Temp\\Extensions\\lima-chrome.at4_taran.crx' ]
        }
    },
    onPrepare: function() {
        // for non-angular page
        //browser.ignoreSynchronization = true;
        require( 'jasmine-reporters' );
        jasmine.getEnv().addReporter( new jasmine.JUnitXmlReporter( __dirname+ '\\Logs', true, true, undefined, true ));
    },
    allScriptsTimeout: 120000,
    // Spec patterns are relative to the current working directory when
    // Protractor is called.
    specs  :[
        //'./alpha-testing-frontend-e2e-tests/at4-manage-mdl-docs/open-mdl.spec.js',
        //'./alpha-testing-frontend-e2e-tests/create-new-document.spec.js',
        //'./alpha-testing-frontend-e2e-tests/at4-manage-mdl-docs/save-and-saveas.spec.js',
        //'./alpha-testing-frontend-e2e-tests/define-universe-benchmark-with-formula.spec.js',
        //'./alpha-testing-frontend-e2e-tests/define-universe-benchmark-with-portfolio.spec.js',
        //'./alpha-testing-frontend-e2e-tests/define-universe-benchmark-with-screen.spec.js',
        //'./alpha-testing-frontend-e2e-tests/delete-report.spec.js',
        //'./alpha-testing-frontend-e2e-tests/delete-tile.spec.js',
        //'./alpha-testing-frontend-e2e-tests/document-settings.spec.js',
        //'./alpha-testing-frontend-e2e-tests/edit-model-settings.spec.js',
        //'./alpha-testing-frontend-e2e-tests/group-reports.spec.js',

        //'./alpha-testing-frontend-e2e-tests/reports-view-tiles.spec.js',

        //'./alpha-testing-frontend-e2e-tests/time-series-calendar.spec.js',
        //'./alpha-testing-frontend-e2e-tests/rename-report.spec.js',
        //'./alpha-testing-frontend-e2e-tests/specify-start-date-and-end-date.spec.js',
        //'./alpha-testing-frontend-e2e-tests/adding-report-to-model-by-double-click.spec.js',
        //'./alpha-testing-frontend-e2e-tests/report-with-row-groupings.spec.js',
        //'./alpha-testing-frontend-e2e-tests/report-with-no-groupings.spec.js',
        //'./alpha-testing-frontend-e2e-tests/view-date-preview.spec.js',
        //'./alpha-testing-frontend-e2e-tests/at4-report-display/freeze-summary-row.spec.js',
        './alpha-testing-frontend-e2e-tests/at4-report-display/rpt-column-grpgs.spec.js',
        //'./alpha-testing-frontend-e2e-tests/at4-report-display/display-na-data.spec.js',
        //'./alpha-testing-frontend-e2e-tests/reload-report.spec.js',
        //'./alpha-testing-frontend-e2e-tests/freezing-grouping-column.spec.js',

    ],
    baseUrl: 'https://alphatesting.staging-cauth.factset.com/',
    rootElement: 'body',
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 120000
    }
};
})();