//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/external-file-loader/lib/external-file-loader.js                                            //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
// external-file-loader.js                                                                              // 1
                                                                                                        // 2
(function() {                                                                                           // 3
                                                                                                        // 4
	var Loader = function() {                                                                              // 5
		this.loadedUrls = {};                                                                                 // 6
	}                                                                                                      // 7
                                                                                                        // 8
	// Callback must be of the jquery success callback form: function(data, textStatus, jqxhr)             // 9
	// timeoutDelay is the number of ms before the script request times out. Default is 5000               // 10
	// If the second arg is a number instead of a callback, it will be considered the timeoutDelay         // 11
	Loader.prototype.loadJs = function(url, callback, timeoutDelay) {                                      // 12
		var self = this,                                                                                      // 13
			timeoutId,                                                                                           // 14
			promise;                                                                                             // 15
                                                                                                        // 16
		if (typeof callback === 'number') {                                                                   // 17
			timeoutId = callback;                                                                                // 18
		} else if (typeof timeoutDelay !== 'number') {                                                        // 19
			timeoutDelay = 5000                                                                                  // 20
		}                                                                                                     // 21
                                                                                                        // 22
		// Prevent duplicate URLs from being loaded.                                                          // 23
		if (self.loaded(url)) {                                                                               // 24
			return false;                                                                                        // 25
		}                                                                                                     // 26
                                                                                                        // 27
		self.loadedUrls[url] = false;                                                                         // 28
                                                                                                        // 29
		promise = $.getScript(url, function(data, textStatus, jqxhr) {                                        // 30
			self.loadedUrls[url] = true;                                                                         // 31
			clearTimeout(timeoutId);                                                                             // 32
			if (callback) {                                                                                      // 33
				callback(data, textStatus, jqxhr);                                                                  // 34
			}                                                                                                    // 35
		});                                                                                                   // 36
                                                                                                        // 37
		// $.getScript doesn't reject promises with cross-domain so we need a timeout                         // 38
		// cf. http://stackoverflow.com/questions/1406537/handling-errors-in-jquery-getscript#answer-11741631 // 39
		timeoutId = setTimeout(function() {                                                                   // 40
			promise.abort("Timeout error: The script was not found or took too long to load.");                  // 41
		}, timeoutDelay);                                                                                     // 42
                                                                                                        // 43
		return promise;                                                                                       // 44
	}                                                                                                      // 45
                                                                                                        // 46
	Loader.prototype.loadCss = function(url) {                                                             // 47
		var self = this;                                                                                      // 48
		// Prevent duplicate URLs from being loaded.                                                          // 49
		if (self.loaded(url)) {                                                                               // 50
			return false;                                                                                        // 51
		}                                                                                                     // 52
                                                                                                        // 53
		var css = document.createElement('link');                                                             // 54
		css.setAttribute('rel', 'stylesheet');                                                                // 55
		css.setAttribute('type', 'text/css');                                                                 // 56
		css.setAttribute('href', url);                                                                        // 57
		document.getElementsByTagName("head")[0].appendChild(css);                                            // 58
                                                                                                        // 59
		self.loadedUrls[url] = true;                                                                          // 60
	}                                                                                                      // 61
	                                                                                                       // 62
	Loader.prototype.loadHtml = function(url,template_name) {                                              // 63
		if(Template[template_name]) {                                                                         // 64
			return Template[template_name];                                                                      // 65
		}                                                                                                     // 66
	                                                                                                       // 67
		var raw = '';                                                                                         // 68
		this.ajax({                                                                                           // 69
			url:    url,                                                                                         // 70
			success: function(html) {                                                                            // 71
				raw = html;                                                                                         // 72
			},                                                                                                   // 73
			async:false                                                                                          // 74
		});                                                                                                   // 75
			                                                                                                     // 76
		return Template.__define__(template_name, function() {                                                // 77
			return raw;                                                                                          // 78
		});                                                                                                   // 79
	}                                                                                                      // 80
                                                                                                        // 81
	Loader.prototype.loaded = function(url) {                                                              // 82
		var self = this;                                                                                      // 83
		return (_.has(self.loadedUrls, url) && self.loadedUrls[url]);                                         // 84
	}                                                                                                      // 85
                                                                                                        // 86
	// Only use this method for testing.                                                                   // 87
	Loader.prototype.resetUrls = function() {                                                              // 88
		this.loadedUrls = {};                                                                                 // 89
	}                                                                                                      // 90
	                                                                                                       // 91
	// Override for stub during testing                                                                    // 92
	Loader.prototype.ajax = jQuery.ajax                                                                    // 93
                                                                                                        // 94
	Meteor.Loader = new Loader();                                                                          // 95
                                                                                                        // 96
}());                                                                                                   // 97
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['external-file-loader'] = {};

})();
