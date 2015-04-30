/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('vendor/theme/html/homepage/css/bootstrap.min.css');
app.import('vendor/theme/html/homepage/css/font-awesome.min.css');
app.import('vendor/theme/html/homepage/css/animate.css');
app.import('vendor/theme/html/homepage/css/owl.carousel.css');
app.import('vendor/theme/html/homepage/css/owl.theme.css');
app.import('vendor/theme/html/homepage/css/prettyPhoto.css');
app.import('vendor/theme/html/homepage/css/red.css');
app.import('vendor/theme/html/homepage/css/custom.css');
app.import('vendor/theme/html/homepage/css/responsive.css');
app.import('vendor/theme/html/homepage/css/jquery.fancybox.css?v=2.1.5');

app.import('vendor/theme/html/homepage/js/bootstrap.min.js');
app.import('vendor/theme/html/homepage/js/owl.carousel.min.js');
app.import('vendor/theme/html/homepage/js/jquery.isotope.js');
app.import('vendor/theme/html/homepage/js/jquery.prettyPhoto.js');
app.import('vendor/theme/html/homepage/js/smooth-scroll.js');
app.import('vendor/theme/html/homepage/js/jquery.fancybox.pack.js?v=2.1.5');
app.import('vendor/theme/html/homepage/js/jquery.counterup.min.js');
app.import('vendor/theme/html/homepage/js/waypoints.min.js');
app.import('vendor/theme/html/homepage/js/jquery.bxslider.min.js');
app.import('vendor/theme/html/homepage/js/jquery.scrollTo.js');
app.import('vendor/theme/html/homepage/js/jquery.easing.1.3.js');
app.import('vendor/theme/html/homepage/js/jquery.singlePageNav.js');
app.import('vendor/theme/html/homepage/js/wow.min.js');

module.exports = app.toTree();
