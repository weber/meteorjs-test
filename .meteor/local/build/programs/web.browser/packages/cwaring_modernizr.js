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

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/cwaring:modernizr/modernizr-dev.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*! Modernizr 3.0.0-beta (Development Build) | MIT                                                                     // 1
 *  Build: http://modernizr.com/download/#-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-draganddrop-flexbox-flexboxlegacy-fontface-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-video-webgl-websockets-websqldatabase-webworkers-addtest-cssclasses-domprefixes-hasevent-prefixed-prefixes-shiv-testallprops-testprop-teststyles-dontmin
 */                                                                                                                    // 3
;(function(window, document, undefined){                                                                               // 4
                                                                                                                       // 5
  var classes = [];                                                                                                    // 6
                                                                                                                       // 7
                                                                                                                       // 8
  // Take the html5 variable out of the                                                                                // 9
  // html5shiv scope so we can return it.                                                                              // 10
  var html5;                                                                                                           // 11
                                                                                                                       // 12
  /**                                                                                                                  // 13
  * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed                              // 14
  */                                                                                                                   // 15
  ;(function(window, document) {                                                                                       // 16
  /*jshint evil:true */                                                                                                // 17
    /** version */                                                                                                     // 18
    var version = '3.7.0';                                                                                             // 19
                                                                                                                       // 20
    /** Preset options */                                                                                              // 21
    var options = window.html5 || {};                                                                                  // 22
                                                                                                                       // 23
    /** Used to skip problem elements */                                                                               // 24
    var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;                                 // 25
                                                                                                                       // 26
    /** Not all elements can be cloned in IE **/                                                                       // 27
    var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
                                                                                                                       // 29
    /** Detect whether the browser supports default html5 styles */                                                    // 30
    var supportsHtml5Styles;                                                                                           // 31
                                                                                                                       // 32
    /** Name of the expando, to work with multiple documents or to re-shiv one document */                             // 33
    var expando = '_html5shiv';                                                                                        // 34
                                                                                                                       // 35
    /** The id for the the documents expando */                                                                        // 36
    var expanID = 0;                                                                                                   // 37
                                                                                                                       // 38
    /** Cached data for each document */                                                                               // 39
    var expandoData = {};                                                                                              // 40
                                                                                                                       // 41
    /** Detect whether the browser supports unknown elements */                                                        // 42
    var supportsUnknownElements;                                                                                       // 43
                                                                                                                       // 44
    (function() {                                                                                                      // 45
      try {                                                                                                            // 46
          var a = document.createElement('a');                                                                         // 47
          a.innerHTML = '<xyz></xyz>';                                                                                 // 48
          //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles          // 49
          supportsHtml5Styles = ('hidden' in a);                                                                       // 50
                                                                                                                       // 51
          supportsUnknownElements = a.childNodes.length == 1 || (function() {                                          // 52
            // assign a false positive if unable to shiv                                                               // 53
            (document.createElement)('a');                                                                             // 54
            var frag = document.createDocumentFragment();                                                              // 55
            return (                                                                                                   // 56
              typeof frag.cloneNode == 'undefined' ||                                                                  // 57
              typeof frag.createDocumentFragment == 'undefined' ||                                                     // 58
              typeof frag.createElement == 'undefined'                                                                 // 59
            );                                                                                                         // 60
          }());                                                                                                        // 61
      } catch(e) {                                                                                                     // 62
        // assign a false positive if detection fails => unable to shiv                                                // 63
        supportsHtml5Styles = true;                                                                                    // 64
        supportsUnknownElements = true;                                                                                // 65
      }                                                                                                                // 66
                                                                                                                       // 67
    }());                                                                                                              // 68
                                                                                                                       // 69
    /*--------------------------------------------------------------------------*/                                     // 70
                                                                                                                       // 71
    /**                                                                                                                // 72
     * Creates a style sheet with the given CSS text and adds it to the document.                                      // 73
     * @private                                                                                                        // 74
     * @param {Document} ownerDocument The document.                                                                   // 75
     * @param {String} cssText The CSS text.                                                                           // 76
     * @returns {StyleSheet} The style element.                                                                        // 77
     */                                                                                                                // 78
    function addStyleSheet(ownerDocument, cssText) {                                                                   // 79
      var p = ownerDocument.createElement('p'),                                                                        // 80
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;                     // 81
                                                                                                                       // 82
      p.innerHTML = 'x<style>' + cssText + '</style>';                                                                 // 83
      return parent.insertBefore(p.lastChild, parent.firstChild);                                                      // 84
    }                                                                                                                  // 85
                                                                                                                       // 86
    /**                                                                                                                // 87
     * Returns the value of `html5.elements` as an array.                                                              // 88
     * @private                                                                                                        // 89
     * @returns {Array} An array of shived element node names.                                                         // 90
     */                                                                                                                // 91
    function getElements() {                                                                                           // 92
      var elements = html5.elements;                                                                                   // 93
      return typeof elements == 'string' ? elements.split(' ') : elements;                                             // 94
    }                                                                                                                  // 95
                                                                                                                       // 96
      /**                                                                                                              // 97
     * Returns the data associated to the given document                                                               // 98
     * @private                                                                                                        // 99
     * @param {Document} ownerDocument The document.                                                                   // 100
     * @returns {Object} An object of data.                                                                            // 101
     */                                                                                                                // 102
    function getExpandoData(ownerDocument) {                                                                           // 103
      var data = expandoData[ownerDocument[expando]];                                                                  // 104
      if (!data) {                                                                                                     // 105
          data = {};                                                                                                   // 106
          expanID++;                                                                                                   // 107
          ownerDocument[expando] = expanID;                                                                            // 108
          expandoData[expanID] = data;                                                                                 // 109
      }                                                                                                                // 110
      return data;                                                                                                     // 111
    }                                                                                                                  // 112
                                                                                                                       // 113
    /**                                                                                                                // 114
     * returns a shived element for the given nodeName and document                                                    // 115
     * @memberOf html5                                                                                                 // 116
     * @param {String} nodeName name of the element                                                                    // 117
     * @param {Document} ownerDocument The context document.                                                           // 118
     * @returns {Object} The shived element.                                                                           // 119
     */                                                                                                                // 120
    function createElement(nodeName, ownerDocument, data){                                                             // 121
      if (!ownerDocument) {                                                                                            // 122
          ownerDocument = document;                                                                                    // 123
      }                                                                                                                // 124
      if(supportsUnknownElements){                                                                                     // 125
          return ownerDocument.createElement(nodeName);                                                                // 126
      }                                                                                                                // 127
      if (!data) {                                                                                                     // 128
          data = getExpandoData(ownerDocument);                                                                        // 129
      }                                                                                                                // 130
      var node;                                                                                                        // 131
                                                                                                                       // 132
      if (data.cache[nodeName]) {                                                                                      // 133
          node = data.cache[nodeName].cloneNode();                                                                     // 134
      } else if (saveClones.test(nodeName)) {                                                                          // 135
          node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();                                       // 136
      } else {                                                                                                         // 137
          node = data.createElem(nodeName);                                                                            // 138
      }                                                                                                                // 139
                                                                                                                       // 140
      // Avoid adding some elements to fragments in IE < 9 because                                                     // 141
      // * Attributes like `name` or `type` cannot be set/changed once an element                                      // 142
      //   is inserted into a document/fragment                                                                        // 143
      // * Link elements with `src` attributes that are inaccessible, as with                                          // 144
      //   a 403 response, will cause the tab/window to crash                                                          // 145
      // * Script elements appended to fragments will execute when their `src`                                         // 146
      //   or `text` property is set                                                                                   // 147
      return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;      // 148
    }                                                                                                                  // 149
                                                                                                                       // 150
    /**                                                                                                                // 151
     * returns a shived DocumentFragment for the given document                                                        // 152
     * @memberOf html5                                                                                                 // 153
     * @param {Document} ownerDocument The context document.                                                           // 154
     * @returns {Object} The shived DocumentFragment.                                                                  // 155
     */                                                                                                                // 156
    function createDocumentFragment(ownerDocument, data){                                                              // 157
      if (!ownerDocument) {                                                                                            // 158
          ownerDocument = document;                                                                                    // 159
      }                                                                                                                // 160
      if(supportsUnknownElements){                                                                                     // 161
          return ownerDocument.createDocumentFragment();                                                               // 162
      }                                                                                                                // 163
      data = data || getExpandoData(ownerDocument);                                                                    // 164
      var clone = data.frag.cloneNode(),                                                                               // 165
          i = 0,                                                                                                       // 166
          elems = getElements(),                                                                                       // 167
          l = elems.length;                                                                                            // 168
      for(;i<l;i++){                                                                                                   // 169
          clone.createElement(elems[i]);                                                                               // 170
      }                                                                                                                // 171
      return clone;                                                                                                    // 172
    }                                                                                                                  // 173
                                                                                                                       // 174
    /**                                                                                                                // 175
     * Shivs the `createElement` and `createDocumentFragment` methods of the document.                                 // 176
     * @private                                                                                                        // 177
     * @param {Document|DocumentFragment} ownerDocument The document.                                                  // 178
     * @param {Object} data of the document.                                                                           // 179
     */                                                                                                                // 180
    function shivMethods(ownerDocument, data) {                                                                        // 181
      if (!data.cache) {                                                                                               // 182
          data.cache = {};                                                                                             // 183
          data.createElem = ownerDocument.createElement;                                                               // 184
          data.createFrag = ownerDocument.createDocumentFragment;                                                      // 185
          data.frag = data.createFrag();                                                                               // 186
      }                                                                                                                // 187
                                                                                                                       // 188
                                                                                                                       // 189
      ownerDocument.createElement = function(nodeName) {                                                               // 190
        //abort shiv                                                                                                   // 191
        if (!html5.shivMethods) {                                                                                      // 192
            return data.createElem(nodeName);                                                                          // 193
        }                                                                                                              // 194
        return createElement(nodeName, ownerDocument, data);                                                           // 195
      };                                                                                                               // 196
                                                                                                                       // 197
      ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +                                    // 198
        'var n=f.cloneNode(),c=n.createElement;' +                                                                     // 199
        'h.shivMethods&&(' +                                                                                           // 200
          // unroll the `createElement` calls                                                                          // 201
          getElements().join().replace(/[\w\-:]+/g, function(nodeName) {                                               // 202
            data.createElem(nodeName);                                                                                 // 203
            data.frag.createElement(nodeName);                                                                         // 204
            return 'c("' + nodeName + '")';                                                                            // 205
          }) +                                                                                                         // 206
        ');return n}'                                                                                                  // 207
      )(html5, data.frag);                                                                                             // 208
    }                                                                                                                  // 209
                                                                                                                       // 210
    /*--------------------------------------------------------------------------*/                                     // 211
                                                                                                                       // 212
    /**                                                                                                                // 213
     * Shivs the given document.                                                                                       // 214
     * @memberOf html5                                                                                                 // 215
     * @param {Document} ownerDocument The document to shiv.                                                           // 216
     * @returns {Document} The shived document.                                                                        // 217
     */                                                                                                                // 218
    function shivDocument(ownerDocument) {                                                                             // 219
      if (!ownerDocument) {                                                                                            // 220
          ownerDocument = document;                                                                                    // 221
      }                                                                                                                // 222
      var data = getExpandoData(ownerDocument);                                                                        // 223
                                                                                                                       // 224
      if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {                                                     // 225
        data.hasCSS = !!addStyleSheet(ownerDocument,                                                                   // 226
          // corrects block display not defined in IE6/7/8/9                                                           // 227
          'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +              // 228
          // adds styling not present in IE6/7/8/9                                                                     // 229
          'mark{background:#FF0;color:#000}' +                                                                         // 230
          // hides non-rendered elements                                                                               // 231
          'template{display:none}'                                                                                     // 232
        );                                                                                                             // 233
      }                                                                                                                // 234
      if (!supportsUnknownElements) {                                                                                  // 235
        shivMethods(ownerDocument, data);                                                                              // 236
      }                                                                                                                // 237
      return ownerDocument;                                                                                            // 238
    }                                                                                                                  // 239
                                                                                                                       // 240
    /*--------------------------------------------------------------------------*/                                     // 241
                                                                                                                       // 242
    /**                                                                                                                // 243
     * The `html5` object is exposed so that more elements can be shived and                                           // 244
     * existing shiving can be detected on iframes.                                                                    // 245
     * @type Object                                                                                                    // 246
     * @example                                                                                                        // 247
     *                                                                                                                 // 248
     * // options can be changed before the script is included                                                         // 249
     * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };                                 // 250
     */                                                                                                                // 251
    var html5 = {                                                                                                      // 252
                                                                                                                       // 253
      /**                                                                                                              // 254
       * An array or space separated string of node names of the elements to shiv.                                     // 255
       * @memberOf html5                                                                                               // 256
       * @type Array|String                                                                                            // 257
       */                                                                                                              // 258
      'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',
                                                                                                                       // 260
      /**                                                                                                              // 261
       * current version of html5shiv                                                                                  // 262
       */                                                                                                              // 263
      'version': version,                                                                                              // 264
                                                                                                                       // 265
      /**                                                                                                              // 266
       * A flag to indicate that the HTML5 style sheet should be inserted.                                             // 267
       * @memberOf html5                                                                                               // 268
       * @type Boolean                                                                                                 // 269
       */                                                                                                              // 270
      'shivCSS': (options.shivCSS !== false),                                                                          // 271
                                                                                                                       // 272
      /**                                                                                                              // 273
       * Is equal to true if a browser supports creating unknown/HTML5 elements                                        // 274
       * @memberOf html5                                                                                               // 275
       * @type boolean                                                                                                 // 276
       */                                                                                                              // 277
      'supportsUnknownElements': supportsUnknownElements,                                                              // 278
                                                                                                                       // 279
      /**                                                                                                              // 280
       * A flag to indicate that the document's `createElement` and `createDocumentFragment`                           // 281
       * methods should be overwritten.                                                                                // 282
       * @memberOf html5                                                                                               // 283
       * @type Boolean                                                                                                 // 284
       */                                                                                                              // 285
      'shivMethods': (options.shivMethods !== false),                                                                  // 286
                                                                                                                       // 287
      /**                                                                                                              // 288
       * A string to describe the type of `html5` object ("default" or "default print").                               // 289
       * @memberOf html5                                                                                               // 290
       * @type String                                                                                                  // 291
       */                                                                                                              // 292
      'type': 'default',                                                                                               // 293
                                                                                                                       // 294
      // shivs the document according to the specified `html5` object options                                          // 295
      'shivDocument': shivDocument,                                                                                    // 296
                                                                                                                       // 297
      //creates a shived element                                                                                       // 298
      createElement: createElement,                                                                                    // 299
                                                                                                                       // 300
      //creates a shived documentFragment                                                                              // 301
      createDocumentFragment: createDocumentFragment                                                                   // 302
    };                                                                                                                 // 303
                                                                                                                       // 304
    /*--------------------------------------------------------------------------*/                                     // 305
                                                                                                                       // 306
    // expose html5                                                                                                    // 307
    window.html5 = html5;                                                                                              // 308
                                                                                                                       // 309
    // shiv the document                                                                                               // 310
    shivDocument(document);                                                                                            // 311
                                                                                                                       // 312
  }(this, document));                                                                                                  // 313
                                                                                                                       // 314
                                                                                                                       // 315
                                                                                                                       // 316
  var tests = [];                                                                                                      // 317
                                                                                                                       // 318
                                                                                                                       // 319
  var ModernizrProto = {                                                                                               // 320
    // The current version, dummy                                                                                      // 321
    _version: 'v3.0.0pre',                                                                                             // 322
                                                                                                                       // 323
    // Any settings that don't work as separate modules                                                                // 324
    // can go in here as configuration.                                                                                // 325
    _config: {                                                                                                         // 326
      classPrefix : '',                                                                                                // 327
      enableClasses : true,                                                                                            // 328
      usePrefixes : true                                                                                               // 329
    },                                                                                                                 // 330
                                                                                                                       // 331
    // Queue of tests                                                                                                  // 332
    _q: [],                                                                                                            // 333
                                                                                                                       // 334
    // Stub these for people who are listening                                                                         // 335
    on: function( test, cb ) {                                                                                         // 336
      // I don't really think people should do this, but we can                                                        // 337
      // safe guard it a bit.                                                                                          // 338
      // -- NOTE:: this gets WAY overridden in src/addTest for                                                         // 339
      // actual async tests. This is in case people listen to                                                          // 340
      // synchronous tests. I would leave it out, but the code                                                         // 341
      // to *disallow* sync tests in the real version of this                                                          // 342
      // function is actually larger than this.                                                                        // 343
      setTimeout(function() {                                                                                          // 344
        cb(this[test]);                                                                                                // 345
      }, 0);                                                                                                           // 346
    },                                                                                                                 // 347
                                                                                                                       // 348
    addTest: function( name, fn, options ) {                                                                           // 349
      tests.push({name : name, fn : fn, options : options });                                                          // 350
    },                                                                                                                 // 351
                                                                                                                       // 352
    addAsyncTest: function (fn) {                                                                                      // 353
      tests.push({name : null, fn : fn});                                                                              // 354
    }                                                                                                                  // 355
  };                                                                                                                   // 356
                                                                                                                       // 357
                                                                                                                       // 358
                                                                                                                       // 359
  // Fake some of Object.create                                                                                        // 360
  // so we can force non test results                                                                                  // 361
  // to be non "own" properties.                                                                                       // 362
  var Modernizr = function(){};                                                                                        // 363
  Modernizr.prototype = ModernizrProto;                                                                                // 364
                                                                                                                       // 365
  // Leak modernizr globally when you `require` it                                                                     // 366
  // rather than force it here.                                                                                        // 367
  // Overwrite name so constructor name is nicer :D                                                                    // 368
  Modernizr = new Modernizr();                                                                                         // 369
                                                                                                                       // 370
                                                                                                                       // 371
/*!                                                                                                                    // 372
{                                                                                                                      // 373
  "name": "Application Cache",                                                                                         // 374
  "property": "applicationcache",                                                                                      // 375
  "caniuse": "offline-apps",                                                                                           // 376
  "tags": ["storage", "offline"],                                                                                      // 377
  "notes": [{                                                                                                          // 378
    "name": "MDN documentation",                                                                                       // 379
    "href": "https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache"                                   // 380
  }],                                                                                                                  // 381
  "polyfills": ["html5gears"]                                                                                          // 382
}                                                                                                                      // 383
!*/                                                                                                                    // 384
/* DOC                                                                                                                 // 385
Detects support for the Application Cache, for storing data to enable web-based applications run offline.              // 386
                                                                                                                       // 387
The API has been [heavily criticized](http://alistapart.com/article/application-cache-is-a-douchebag) and discussions are underway to address this.
*/                                                                                                                     // 389
                                                                                                                       // 390
  Modernizr.addTest('applicationcache', 'applicationCache' in window);                                                 // 391
                                                                                                                       // 392
/*!                                                                                                                    // 393
{                                                                                                                      // 394
  "name": "Geolocation API",                                                                                           // 395
  "property": "geolocation",                                                                                           // 396
  "caniuse": "geolocation",                                                                                            // 397
  "tags": ["media"],                                                                                                   // 398
  "notes": [{                                                                                                          // 399
    "name": "MDN documentation",                                                                                       // 400
    "href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"                                        // 401
  }],                                                                                                                  // 402
  "polyfills": [                                                                                                       // 403
    "joshuabell-polyfill",                                                                                             // 404
    "webshims",                                                                                                        // 405
    "geolocationshim",                                                                                                 // 406
    "geo-location-javascript",                                                                                         // 407
    "geolocation-api-polyfill"                                                                                         // 408
  ]                                                                                                                    // 409
}                                                                                                                      // 410
!*/                                                                                                                    // 411
/* DOC                                                                                                                 // 412
Detects support for the Geolocation API for users to provide their location to web applications.                       // 413
*/                                                                                                                     // 414
                                                                                                                       // 415
  // geolocation is often considered a trivial feature detect...                                                       // 416
  // Turns out, it's quite tricky to get right:                                                                        // 417
  //                                                                                                                   // 418
  // Using !!navigator.geolocation does two things we don't want. It:                                                  // 419
  //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513                                               // 420
  //   2. Disables page caching in WebKit: webk.it/43956                                                               // 421
  //                                                                                                                   // 422
  // Meanwhile, in Firefox < 8, an about:config setting could expose                                                   // 423
  // a false positive that would throw an exception: bugzil.la/688158                                                  // 424
                                                                                                                       // 425
  Modernizr.addTest('geolocation', 'geolocation' in navigator);                                                        // 426
                                                                                                                       // 427
/*!                                                                                                                    // 428
{                                                                                                                      // 429
  "name": "History API",                                                                                               // 430
  "property": "history",                                                                                               // 431
  "caniuse": "history",                                                                                                // 432
  "tags": ["history"],                                                                                                 // 433
  "authors": ["Hay Kranen", "Alexander Farkas"],                                                                       // 434
  "notes": [{                                                                                                          // 435
    "name": "W3C Spec",                                                                                                // 436
    "href": "http://www.w3.org/TR/html51/browsers.html#the-history-interface"                                          // 437
  }, {                                                                                                                 // 438
    "name": "MDN documentation",                                                                                       // 439
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"                                          // 440
  }],                                                                                                                  // 441
  "polyfills": ["historyjs", "html5historyapi"]                                                                        // 442
}                                                                                                                      // 443
!*/                                                                                                                    // 444
/* DOC                                                                                                                 // 445
Detects support for the History API for manipulating the browser session history.                                      // 446
*/                                                                                                                     // 447
                                                                                                                       // 448
  Modernizr.addTest('history', function() {                                                                            // 449
    // Issue #733                                                                                                      // 450
    // The stock browser on Android 2.2 & 2.3, and 4.0.x returns positive on history support                           // 451
    // Unfortunately support is really buggy and there is no clean way to detect                                       // 452
    // these bugs, so we fall back to a user agent sniff :(                                                            // 453
    var ua = navigator.userAgent;                                                                                      // 454
                                                                                                                       // 455
    // We only want Android 2 and 4.0, stock browser, and not Chrome which identifies                                  // 456
    // itself as 'Mobile Safari' as well                                                                               // 457
    if ((ua.indexOf('Android 2.') !== -1 ||                                                                            // 458
        (ua.indexOf('Android 4.0') !== -1)) &&                                                                         // 459
        ua.indexOf('Mobile Safari') !== -1 &&                                                                          // 460
        ua.indexOf('Chrome') === -1) {                                                                                 // 461
      return false;                                                                                                    // 462
    }                                                                                                                  // 463
                                                                                                                       // 464
    // Return the regular check                                                                                        // 465
    return (window.history && 'pushState' in window.history);                                                          // 466
  });                                                                                                                  // 467
                                                                                                                       // 468
/*!                                                                                                                    // 469
{                                                                                                                      // 470
  "name": "Local Storage",                                                                                             // 471
  "property": "localstorage",                                                                                          // 472
  "caniuse": "namevalue-storage",                                                                                      // 473
  "tags": ["storage"],                                                                                                 // 474
  "knownBugs": [],                                                                                                     // 475
  "notes": [],                                                                                                         // 476
  "warnings": [],                                                                                                      // 477
  "polyfills": [                                                                                                       // 478
    "joshuabell-polyfill",                                                                                             // 479
    "cupcake",                                                                                                         // 480
    "storagepolyfill",                                                                                                 // 481
    "amplifyjs",                                                                                                       // 482
    "yui-cacheoffline",                                                                                                // 483
    "textstorage"                                                                                                      // 484
  ]                                                                                                                    // 485
}                                                                                                                      // 486
!*/                                                                                                                    // 487
                                                                                                                       // 488
  // In FF4, if disabled, window.localStorage should === null.                                                         // 489
                                                                                                                       // 490
  // Normally, we could not test that directly and need to do a                                                        // 491
  //   `('localStorage' in window) && ` test first because otherwise Firefox will                                      // 492
  //   throw bugzil.la/365772 if cookies are disabled                                                                  // 493
                                                                                                                       // 494
  // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem                                        // 495
  // will throw the exception:                                                                                         // 496
  //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.                                                                         // 497
  // Peculiarly, getItem and removeItem calls do not throw.                                                            // 498
                                                                                                                       // 499
  // Because we are forced to try/catch this, we'll go aggressive.                                                     // 500
                                                                                                                       // 501
  // Just FWIW: IE8 Compat mode supports these features completely:                                                    // 502
  //   www.quirksmode.org/dom/html5.html                                                                               // 503
  // But IE8 doesn't support either with local files                                                                   // 504
                                                                                                                       // 505
  Modernizr.addTest('localstorage', function() {                                                                       // 506
    var mod = 'modernizr';                                                                                             // 507
    try {                                                                                                              // 508
      localStorage.setItem(mod, mod);                                                                                  // 509
      localStorage.removeItem(mod);                                                                                    // 510
      return true;                                                                                                     // 511
    } catch(e) {                                                                                                       // 512
      return false;                                                                                                    // 513
    }                                                                                                                  // 514
  });                                                                                                                  // 515
                                                                                                                       // 516
/*!                                                                                                                    // 517
{                                                                                                                      // 518
  "name": "postMessage",                                                                                               // 519
  "property": "postmessage",                                                                                           // 520
  "caniuse": "x-doc-messaging",                                                                                        // 521
  "notes": [{                                                                                                          // 522
    "name": "W3C Spec",                                                                                                // 523
    "href": "http://www.w3.org/TR/html5/comms.html#posting-messages"                                                   // 524
  }],                                                                                                                  // 525
  "polyfills": ["easyxdm", "postmessage-jquery"]                                                                       // 526
}                                                                                                                      // 527
!*/                                                                                                                    // 528
/* DOC                                                                                                                 // 529
Detects support for the `window.postMessage` protocol for cross-document messaging.                                    // 530
*/                                                                                                                     // 531
                                                                                                                       // 532
  Modernizr.addTest('postmessage', 'postMessage' in window);                                                           // 533
                                                                                                                       // 534
/*!                                                                                                                    // 535
{                                                                                                                      // 536
  "name": "Session Storage",                                                                                           // 537
  "property": "sessionstorage",                                                                                        // 538
  "tags": ["storage"],                                                                                                 // 539
  "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]                                                    // 540
}                                                                                                                      // 541
!*/                                                                                                                    // 542
                                                                                                                       // 543
  // Because we are forced to try/catch this, we'll go aggressive.                                                     // 544
                                                                                                                       // 545
  // Just FWIW: IE8 Compat mode supports these features completely:                                                    // 546
  //   www.quirksmode.org/dom/html5.html                                                                               // 547
  // But IE8 doesn't support either with local files                                                                   // 548
  Modernizr.addTest('sessionstorage', function() {                                                                     // 549
    var mod = 'modernizr';                                                                                             // 550
    try {                                                                                                              // 551
      sessionStorage.setItem(mod, mod);                                                                                // 552
      sessionStorage.removeItem(mod);                                                                                  // 553
      return true;                                                                                                     // 554
    } catch(e) {                                                                                                       // 555
      return false;                                                                                                    // 556
    }                                                                                                                  // 557
  });                                                                                                                  // 558
                                                                                                                       // 559
/*!                                                                                                                    // 560
{                                                                                                                      // 561
  "name": "SVG",                                                                                                       // 562
  "property": "svg",                                                                                                   // 563
  "caniuse": "svg",                                                                                                    // 564
  "tags": ["svg"],                                                                                                     // 565
  "authors": ["Erik Dahlstrom"],                                                                                       // 566
  "polyfills": [                                                                                                       // 567
    "svgweb",                                                                                                          // 568
    "raphael",                                                                                                         // 569
    "amplesdk",                                                                                                        // 570
    "canvg",                                                                                                           // 571
    "svg-boilerplate",                                                                                                 // 572
    "sie",                                                                                                             // 573
    "dojogfx",                                                                                                         // 574
    "fabricjs"                                                                                                         // 575
  ]                                                                                                                    // 576
}                                                                                                                      // 577
!*/                                                                                                                    // 578
/* DOC                                                                                                                 // 579
Detects support for SVG in `<embed>` or `<object>` elements.                                                           // 580
*/                                                                                                                     // 581
                                                                                                                       // 582
  Modernizr.addTest('svg', !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
                                                                                                                       // 584
/*!                                                                                                                    // 585
{                                                                                                                      // 586
  "name": "Web SQL Database",                                                                                          // 587
  "property": "websqldatabase",                                                                                        // 588
  "caniuse": "sql-storage",                                                                                            // 589
  "tags": ["storage"]                                                                                                  // 590
}                                                                                                                      // 591
!*/                                                                                                                    // 592
                                                                                                                       // 593
  // Chrome incognito mode used to throw an exception when using openDatabase                                          // 594
  // It doesn't anymore.                                                                                               // 595
  Modernizr.addTest('websqldatabase', 'openDatabase' in window);                                                       // 596
                                                                                                                       // 597
/*!                                                                                                                    // 598
{                                                                                                                      // 599
  "name": "Web Workers",                                                                                               // 600
  "property": "webworkers",                                                                                            // 601
  "caniuse" : "webworkers",                                                                                            // 602
  "tags": ["performance", "workers"],                                                                                  // 603
  "notes": [{                                                                                                          // 604
    "name": "W3C Reference",                                                                                           // 605
    "href": "http://www.w3.org/TR/workers/"                                                                            // 606
  }, {                                                                                                                 // 607
    "name": "HTML5 Rocks article",                                                                                     // 608
    "href": "http://www.html5rocks.com/en/tutorials/workers/basics/"                                                   // 609
  }, {                                                                                                                 // 610
    "name": "MDN documentation",                                                                                       // 611
    "href": "https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers"                         // 612
  }],                                                                                                                  // 613
  "polyfills": ["fakeworker", "html5shims"]                                                                            // 614
}                                                                                                                      // 615
!*/                                                                                                                    // 616
/* DOC                                                                                                                 // 617
Detects support for the basic `Worker` API from the Web Workers spec. Web Workers provide a simple means for web content to run scripts in background threads.
*/                                                                                                                     // 619
                                                                                                                       // 620
  Modernizr.addTest('webworkers', 'Worker' in window);                                                                 // 621
                                                                                                                       // 622
/*!                                                                                                                    // 623
{                                                                                                                      // 624
  "name": "WebSockets Support",                                                                                        // 625
  "property": "websockets",                                                                                            // 626
  "authors": ["Phread [fearphage]", "Mike Sherov [mikesherov]", "Burak Yigit Kaya [BYK]"],                             // 627
  "caniuse": "websockets",                                                                                             // 628
  "tags": ["html5"],                                                                                                   // 629
  "warnings": [                                                                                                        // 630
    "This test will reject any old version of WebSockets even if it is not prefixed such as in Safari 5.1"             // 631
  ],                                                                                                                   // 632
  "notes": [{                                                                                                          // 633
    "name": "CLOSING State and Spec",                                                                                  // 634
    "href": "http://www.w3.org/TR/websockets/#the-websocket-interface"                                                 // 635
  }],                                                                                                                  // 636
  "polyfills": [                                                                                                       // 637
    "sockjs",                                                                                                          // 638
    "socketio",                                                                                                        // 639
    "kaazing-websocket-gateway",                                                                                       // 640
    "websocketjs",                                                                                                     // 641
    "atmosphere",                                                                                                      // 642
    "graceful-websocket",                                                                                              // 643
    "portal",                                                                                                          // 644
    "datachannel"                                                                                                      // 645
  ]                                                                                                                    // 646
}                                                                                                                      // 647
!*/                                                                                                                    // 648
                                                                                                                       // 649
  Modernizr.addTest('websockets', 'WebSocket' in window && window.WebSocket.CLOSING === 2);                            // 650
                                                                                                                       // 651
                                                                                                                       // 652
  // List of property values to set for css tests. See ticket #21                                                      // 653
  var prefixes = (ModernizrProto._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : []);                   // 654
                                                                                                                       // 655
  // expose these for the plugin API. Look in the source for how to join() them against your input                     // 656
  ModernizrProto._prefixes = prefixes;                                                                                 // 657
                                                                                                                       // 658
                                                                                                                       // 659
                                                                                                                       // 660
  /**                                                                                                                  // 661
   * is returns a boolean for if typeof obj is exactly type.                                                           // 662
   */                                                                                                                  // 663
  function is( obj, type ) {                                                                                           // 664
    return typeof obj === type;                                                                                        // 665
  }                                                                                                                    // 666
  ;                                                                                                                    // 667
                                                                                                                       // 668
  // Run through all tests and detect their support in the current UA.                                                 // 669
  function testRunner() {                                                                                              // 670
    var featureNames;                                                                                                  // 671
    var feature;                                                                                                       // 672
    var aliasIdx;                                                                                                      // 673
    var result;                                                                                                        // 674
    var nameIdx;                                                                                                       // 675
    var featureName;                                                                                                   // 676
    var featureNameSplit;                                                                                              // 677
                                                                                                                       // 678
    for ( var featureIdx in tests ) {                                                                                  // 679
      featureNames = [];                                                                                               // 680
      feature = tests[featureIdx];                                                                                     // 681
      // run the test, throw the return value into the Modernizr,                                                      // 682
      //   then based on that boolean, define an appropriate className                                                 // 683
      //   and push it into an array of classes we'll join later.                                                      // 684
      //                                                                                                               // 685
      //   If there is no name, it's an 'async' test that is run,                                                      // 686
      //   but not directly added to the object. That should                                                           // 687
      //   be done with a post-run addTest call.                                                                       // 688
      if ( feature.name ) {                                                                                            // 689
        featureNames.push(feature.name.toLowerCase());                                                                 // 690
                                                                                                                       // 691
        if (feature.options && feature.options.aliases && feature.options.aliases.length) {                            // 692
          // Add all the aliases into the names list                                                                   // 693
          for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {                                  // 694
            featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());                                        // 695
          }                                                                                                            // 696
        }                                                                                                              // 697
      }                                                                                                                // 698
                                                                                                                       // 699
      // Run the test, or use the raw value if it's not a function                                                     // 700
      result = is(feature.fn, 'function') ? feature.fn() : feature.fn;                                                 // 701
                                                                                                                       // 702
                                                                                                                       // 703
      // Set each of the names on the Modernizr object                                                                 // 704
      for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {                                                    // 705
        featureName = featureNames[nameIdx];                                                                           // 706
        // Support dot properties as sub tests. We don't do checking to make sure                                      // 707
        // that the implied parent tests have been added. You must call them in                                        // 708
        // order (either in the test, or make the parent test a dependency).                                           // 709
        //                                                                                                             // 710
        // Cap it to TWO to make the logic simple and because who needs that kind of subtesting                        // 711
        // hashtag famous last words                                                                                   // 712
        featureNameSplit = featureName.split('.');                                                                     // 713
                                                                                                                       // 714
        if (featureNameSplit.length === 1) {                                                                           // 715
          Modernizr[featureNameSplit[0]] = result;                                                                     // 716
        }                                                                                                              // 717
        else if (featureNameSplit.length === 2) {                                                                      // 718
          // cast to a Boolean, if not one already                                                                     // 719
          /* jshint -W053 */                                                                                           // 720
          if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {                // 721
            Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);                              // 722
          }                                                                                                            // 723
                                                                                                                       // 724
          Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;                                                // 725
        }                                                                                                              // 726
                                                                                                                       // 727
        classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));                                              // 728
      }                                                                                                                // 729
    }                                                                                                                  // 730
  }                                                                                                                    // 731
                                                                                                                       // 732
  ;                                                                                                                    // 733
                                                                                                                       // 734
  var docElement = document.documentElement;                                                                           // 735
                                                                                                                       // 736
                                                                                                                       // 737
  // Pass in an and array of class names, e.g.:                                                                        // 738
  //  ['no-webp', 'borderradius', ...]                                                                                 // 739
  function setClasses( classes ) {                                                                                     // 740
    var className = docElement.className;                                                                              // 741
    var classPrefix = Modernizr._config.classPrefix || '';                                                             // 742
                                                                                                                       // 743
    // Change `no-js` to `js` (we do this regardles of the `enableClasses`                                             // 744
    // option)                                                                                                         // 745
    // Handle classPrefix on this too                                                                                  // 746
    var reJS = new RegExp('(^|\\s)'+classPrefix+'no-js(\\s|$)');                                                       // 747
    className = className.replace(reJS, '$1'+classPrefix+'js$2');                                                      // 748
                                                                                                                       // 749
    if(Modernizr._config.enableClasses) {                                                                              // 750
      // Add the new classes                                                                                           // 751
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);                                                // 752
      docElement.className = className;                                                                                // 753
    }                                                                                                                  // 754
                                                                                                                       // 755
  }                                                                                                                    // 756
                                                                                                                       // 757
  ;                                                                                                                    // 758
                                                                                                                       // 759
  // hasOwnProperty shim by kangax needed for Safari 2.0 support                                                       // 760
  var hasOwnProp;                                                                                                      // 761
                                                                                                                       // 762
  (function() {                                                                                                        // 763
    var _hasOwnProperty = ({}).hasOwnProperty;                                                                         // 764
    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {                               // 765
      hasOwnProp = function (object, property) {                                                                       // 766
        return _hasOwnProperty.call(object, property);                                                                 // 767
      };                                                                                                               // 768
    }                                                                                                                  // 769
    else {                                                                                                             // 770
      hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));                      // 772
      };                                                                                                               // 773
    }                                                                                                                  // 774
  })();                                                                                                                // 775
                                                                                                                       // 776
                                                                                                                       // 777
                                                                                                                       // 778
  // As far as I can think of, we shouldn't need or                                                                    // 779
  // allow 'on' for non-async tests, and you can't do                                                                  // 780
  // async tests without this 'addTest' module.                                                                        // 781
                                                                                                                       // 782
  // Listeners for async or post-run tests                                                                             // 783
  ModernizrProto._l = {};                                                                                              // 784
                                                                                                                       // 785
  // 'addTest' implies a test after the core runloop,                                                                  // 786
  // So we'll add in the events                                                                                        // 787
  ModernizrProto.on = function( test, cb ) {                                                                           // 788
    // Create the list of listeners if it doesn't exist                                                                // 789
    if (!this._l[test]) {                                                                                              // 790
      this._l[test] = [];                                                                                              // 791
    }                                                                                                                  // 792
                                                                                                                       // 793
    // Push this test on to the listener list                                                                          // 794
    this._l[test].push(cb);                                                                                            // 795
                                                                                                                       // 796
    // If it's already been resolved, trigger it on next tick                                                          // 797
    if (Modernizr.hasOwnProperty(test)) {                                                                              // 798
      // Next Tick                                                                                                     // 799
      setTimeout(function() {                                                                                          // 800
        Modernizr._trigger(test, Modernizr[test]);                                                                     // 801
      }, 0);                                                                                                           // 802
    }                                                                                                                  // 803
  };                                                                                                                   // 804
                                                                                                                       // 805
  ModernizrProto._trigger = function( test, res ) {                                                                    // 806
    if (!this._l[test]) {                                                                                              // 807
      return;                                                                                                          // 808
    }                                                                                                                  // 809
                                                                                                                       // 810
    var cbs = this._l[test];                                                                                           // 811
                                                                                                                       // 812
    // Force async                                                                                                     // 813
    setTimeout(function() {                                                                                            // 814
      var i, cb;                                                                                                       // 815
      for (i = 0; i < cbs.length; i++) {                                                                               // 816
        cb = cbs[i];                                                                                                   // 817
        cb(res);                                                                                                       // 818
      }                                                                                                                // 819
    },0);                                                                                                              // 820
                                                                                                                       // 821
    // Don't trigger these again                                                                                       // 822
    delete this._l[test];                                                                                              // 823
  };                                                                                                                   // 824
                                                                                                                       // 825
  /**                                                                                                                  // 826
   * addTest allows the user to define their own feature tests                                                         // 827
   * the result will be added onto the Modernizr object,                                                               // 828
   * as well as an appropriate className set on the html element                                                       // 829
   *                                                                                                                   // 830
   * @param feature - String naming the feature                                                                        // 831
   * @param test - Function returning true if feature is supported, false if not                                       // 832
   */                                                                                                                  // 833
  function addTest( feature, test ) {                                                                                  // 834
    if ( typeof feature == 'object' ) {                                                                                // 835
      for ( var key in feature ) {                                                                                     // 836
        if ( hasOwnProp( feature, key ) ) {                                                                            // 837
          addTest( key, feature[ key ] );                                                                              // 838
        }                                                                                                              // 839
      }                                                                                                                // 840
    } else {                                                                                                           // 841
                                                                                                                       // 842
      feature = feature.toLowerCase();                                                                                 // 843
      var featureNameSplit = feature.split('.');                                                                       // 844
      var last = Modernizr[featureNameSplit[0]];                                                                       // 845
                                                                                                                       // 846
      // Again, we don't check for parent test existence. Get that right, though.                                      // 847
      if (featureNameSplit.length == 2) {                                                                              // 848
        last = last[featureNameSplit[1]];                                                                              // 849
      }                                                                                                                // 850
                                                                                                                       // 851
      if ( typeof last != 'undefined' ) {                                                                              // 852
        // we're going to quit if you're trying to overwrite an existing test                                          // 853
        // if we were to allow it, we'd do this:                                                                       // 854
        //   var re = new RegExp("\\b(no-)?" + feature + "\\b");                                                       // 855
        //   docElement.className = docElement.className.replace( re, '' );                                            // 856
        // but, no rly, stuff 'em.                                                                                     // 857
        return Modernizr;                                                                                              // 858
      }                                                                                                                // 859
                                                                                                                       // 860
      test = typeof test == 'function' ? test() : test;                                                                // 861
                                                                                                                       // 862
      // Set the value (this is the magic, right here).                                                                // 863
      if (featureNameSplit.length == 1) {                                                                              // 864
        Modernizr[featureNameSplit[0]] = test;                                                                         // 865
      }                                                                                                                // 866
      else if (featureNameSplit.length == 2) {                                                                         // 867
        // cast to a Boolean, if not one already                                                                       // 868
        /* jshint -W053 */                                                                                             // 869
        if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {                  // 870
          Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);                                // 871
        }                                                                                                              // 872
                                                                                                                       // 873
        Modernizr[featureNameSplit[0]][featureNameSplit[1]] = test;                                                    // 874
      }                                                                                                                // 875
                                                                                                                       // 876
      // Set a single class (either `feature` or `no-feature`)                                                         // 877
      setClasses([(test ? '' : 'no-') + featureNameSplit.join('-')]);                                                  // 878
                                                                                                                       // 879
      // Trigger the event                                                                                             // 880
      Modernizr._trigger(feature, test);                                                                               // 881
    }                                                                                                                  // 882
                                                                                                                       // 883
    return Modernizr; // allow chaining.                                                                               // 884
  }                                                                                                                    // 885
                                                                                                                       // 886
  // After all the tests are run, add self                                                                             // 887
  // to the Modernizr prototype                                                                                        // 888
  Modernizr._q.push(function() {                                                                                       // 889
    ModernizrProto.addTest = addTest;                                                                                  // 890
  });                                                                                                                  // 891
                                                                                                                       // 892
                                                                                                                       // 893
                                                                                                                       // 894
  // Helper function for converting kebab-case to camelCase,                                                           // 895
  // e.g. box-sizing -> boxSizing                                                                                      // 896
  function cssToDOM( name ) {                                                                                          // 897
    return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {                                                    // 898
      return m1 + m2.toUpperCase();                                                                                    // 899
    }).replace(/^-/, '');                                                                                              // 900
  }                                                                                                                    // 901
  ;                                                                                                                    // 902
                                                                                                                       // 903
  // Following spec is to expose vendor-specific style properties as:                                                  // 904
  //   elem.style.WebkitBorderRadius                                                                                   // 905
  // and the following would be incorrect:                                                                             // 906
  //   elem.style.webkitBorderRadius                                                                                   // 907
                                                                                                                       // 908
  // Webkit ghosts their properties in lowercase but Opera & Moz do not.                                               // 909
  // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+                                               // 910
  //   erik.eae.net/archives/2008/03/10/21.48.10/                                                                      // 911
                                                                                                                       // 912
  // More here: github.com/Modernizr/Modernizr/issues/issue/21                                                         // 913
  var omPrefixes = 'Webkit Moz O ms';                                                                                  // 914
                                                                                                                       // 915
                                                                                                                       // 916
  var domPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : []);                   // 917
  ModernizrProto._domPrefixes = domPrefixes;                                                                           // 918
                                                                                                                       // 919
                                                                                                                       // 920
  var createElement = function() {                                                                                     // 921
    return document.createElement.apply(document, arguments);                                                          // 922
  };                                                                                                                   // 923
                                                                                                                       // 924
/*!                                                                                                                    // 925
{                                                                                                                      // 926
  "name": "Canvas",                                                                                                    // 927
  "property": "canvas",                                                                                                // 928
  "caniuse": "canvas",                                                                                                 // 929
  "tags": ["canvas", "graphics"],                                                                                      // 930
  "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]                                                     // 931
}                                                                                                                      // 932
!*/                                                                                                                    // 933
/* DOC                                                                                                                 // 934
Detects support for the `<canvas>` element for 2D drawing.                                                             // 935
*/                                                                                                                     // 936
                                                                                                                       // 937
  // On the S60 and BB Storm, getContext exists, but always returns undefined                                          // 938
  // so we actually have to call getContext() to verify                                                                // 939
  // github.com/Modernizr/Modernizr/issues/issue/97/                                                                   // 940
  Modernizr.addTest('canvas', function() {                                                                             // 941
    var elem = createElement('canvas');                                                                                // 942
    return !!(elem.getContext && elem.getContext('2d'));                                                               // 943
  });                                                                                                                  // 944
                                                                                                                       // 945
/*!                                                                                                                    // 946
{                                                                                                                      // 947
  "name": "Canvas text",                                                                                               // 948
  "property": "canvastext",                                                                                            // 949
  "caniuse": "canvas-text",                                                                                            // 950
  "tags": ["canvas", "graphics"],                                                                                      // 951
  "polyfills": ["canvastext"]                                                                                          // 952
}                                                                                                                      // 953
!*/                                                                                                                    // 954
/* DOC                                                                                                                 // 955
Detects support for the text APIs for `<canvas>` elements.                                                             // 956
*/                                                                                                                     // 957
                                                                                                                       // 958
  Modernizr.addTest('canvastext',  function() {                                                                        // 959
    if (Modernizr.canvas  === false) return false;                                                                     // 960
    return typeof createElement('canvas').getContext('2d').fillText == 'function';                                     // 961
  });                                                                                                                  // 962
                                                                                                                       // 963
/*!                                                                                                                    // 964
{                                                                                                                      // 965
  "name": "CSS Gradients",                                                                                             // 966
  "caniuse": "css-gradients",                                                                                          // 967
  "property": "cssgradients",                                                                                          // 968
  "tags": ["css"],                                                                                                     // 969
  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],                       // 970
  "notes": [{                                                                                                          // 971
    "name": "Webkit Gradient Syntax",                                                                                  // 972
    "href": "http://webkit.org/blog/175/introducing-css-gradients/"                                                    // 973
  },{                                                                                                                  // 974
    "name": "Mozilla Linear Gradient Syntax",                                                                          // 975
    "href": "http://developer.mozilla.org/en/CSS/-moz-linear-gradient"                                                 // 976
  },{                                                                                                                  // 977
    "name": "Mozilla Radial Gradient Syntax",                                                                          // 978
    "href": "http://developer.mozilla.org/en/CSS/-moz-radial-gradient"                                                 // 979
  },{                                                                                                                  // 980
    "name": "W3C Gradient Spec",                                                                                       // 981
    "href": "dev.w3.org/csswg/css3-images/#gradients-"                                                                 // 982
  }]                                                                                                                   // 983
}                                                                                                                      // 984
!*/                                                                                                                    // 985
                                                                                                                       // 986
                                                                                                                       // 987
  Modernizr.addTest('cssgradients', function() {                                                                       // 988
                                                                                                                       // 989
    var str1 = 'background-image:';                                                                                    // 990
    var str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));';                                         // 991
    var str3 = 'linear-gradient(left top,#9f9, white);';                                                               // 992
                                                                                                                       // 993
    // standard syntax             // trailing 'background-image:'                                                     // 994
    var css = str1 + prefixes.join(str3 + str1).slice(0, -str1.length);                                                // 995
    if (Modernizr._config.usePrefixes) {                                                                               // 996
    // legacy webkit syntax (FIXME: remove when syntax not in use anymore)                                             // 997
      css += str1 + '-webkit-' + str2;                                                                                 // 998
    }                                                                                                                  // 999
                                                                                                                       // 1000
    var elem = createElement('div');                                                                                   // 1001
    var style = elem.style;                                                                                            // 1002
    style.cssText = css;                                                                                               // 1003
                                                                                                                       // 1004
    // IE6 returns undefined so cast to string                                                                         // 1005
    return ('' + style.backgroundImage).indexOf('gradient') > -1;                                                      // 1006
  });                                                                                                                  // 1007
                                                                                                                       // 1008
/*!                                                                                                                    // 1009
{                                                                                                                      // 1010
  "name": "CSS Multiple Backgrounds",                                                                                  // 1011
  "caniuse": "multibackgrounds",                                                                                       // 1012
  "property": "multiplebgs",                                                                                           // 1013
  "tags": ["css"]                                                                                                      // 1014
}                                                                                                                      // 1015
!*/                                                                                                                    // 1016
                                                                                                                       // 1017
  // Setting multiple images AND a color on the background shorthand property                                          // 1018
  // and then querying the style.background property value for the number of                                           // 1019
  // occurrences of "url(" is a reliable method for detecting ACTUAL support for this!                                 // 1020
                                                                                                                       // 1021
  Modernizr.addTest('multiplebgs', function() {                                                                        // 1022
    var elem = createElement('div');                                                                                   // 1023
    var style = elem.style;                                                                                            // 1024
    style.cssText = 'background:url(https://),url(https://),red url(https://)';                                        // 1025
                                                                                                                       // 1026
    // If the UA supports multiple backgrounds, there should be three occurrences                                      // 1027
    // of the string "url(" in the return value for elemStyle.background                                               // 1028
    return (/(url\s*\(.*?){3}/).test(style.background);                                                                // 1029
  });                                                                                                                  // 1030
                                                                                                                       // 1031
/*!                                                                                                                    // 1032
{                                                                                                                      // 1033
  "name": "CSS Opacity",                                                                                               // 1034
  "caniuse": "css-opacity",                                                                                            // 1035
  "property": "opacity",                                                                                               // 1036
  "tags": ["css"],                                                                                                     // 1037
  "notes": ["Opacity must be be in the range of [0.0,1.0], according to the spec."]                                    // 1038
}                                                                                                                      // 1039
!*/                                                                                                                    // 1040
                                                                                                                       // 1041
  // Browsers that actually have CSS Opacity implemented have done so                                                  // 1042
  // according to spec, which means their return values are within the                                                 // 1043
  // range of [0.0,1.0] - including the leading zero.                                                                  // 1044
                                                                                                                       // 1045
  Modernizr.addTest('opacity', function() {                                                                            // 1046
    var elem = createElement('div');                                                                                   // 1047
    var style = elem.style;                                                                                            // 1048
    style.cssText = prefixes.join('opacity:.55;');                                                                     // 1049
                                                                                                                       // 1050
    // The non-literal . in this regex is intentional:                                                                 // 1051
    // German Chrome returns this value as 0,55                                                                        // 1052
    // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632                                                  // 1053
    return (/^0.55$/).test(style.opacity);                                                                             // 1054
  });                                                                                                                  // 1055
                                                                                                                       // 1056
/*!                                                                                                                    // 1057
{                                                                                                                      // 1058
  "name": "CSS rgba",                                                                                                  // 1059
  "caniuse": "css3-colors",                                                                                            // 1060
  "property": "rgba",                                                                                                  // 1061
  "tags": ["css"],                                                                                                     // 1062
  "notes": [{                                                                                                          // 1063
    "name": "CSSTricks Tutorial",                                                                                      // 1064
    "href": "http://css-tricks.com/rgba-browser-support/"                                                              // 1065
  }]                                                                                                                   // 1066
}                                                                                                                      // 1067
!*/                                                                                                                    // 1068
                                                                                                                       // 1069
  Modernizr.addTest('rgba', function() {                                                                               // 1070
    var elem = createElement('div');                                                                                   // 1071
    var style = elem.style;                                                                                            // 1072
    style.cssText = 'background-color:rgba(150,255,150,.5)';                                                           // 1073
                                                                                                                       // 1074
    return ('' + style.backgroundColor).indexOf('rgba') > -1;                                                          // 1075
  });                                                                                                                  // 1076
                                                                                                                       // 1077
/*!                                                                                                                    // 1078
{                                                                                                                      // 1079
  "name": "Drag & Drop",                                                                                               // 1080
  "property": "draganddrop",                                                                                           // 1081
  "caniuse": "dragndrop",                                                                                              // 1082
  "knownBugs": ["Mobile browsers like Android, iOS < 6, and Firefox OS technically support the APIs, but don't expose it to the end user, resulting in a false positive."],
  "notes": [{                                                                                                          // 1084
    "name": "W3C spec",                                                                                                // 1085
    "href": "http://www.w3.org/TR/2010/WD-html5-20101019/dnd.html"                                                     // 1086
  }],                                                                                                                  // 1087
  "polyfills": ["dropfile", "moxie", "fileapi"]                                                                        // 1088
}                                                                                                                      // 1089
!*/                                                                                                                    // 1090
/* DOC                                                                                                                 // 1091
Detects support for native drag & drop of elements.                                                                    // 1092
*/                                                                                                                     // 1093
                                                                                                                       // 1094
  Modernizr.addTest('draganddrop', function() {                                                                        // 1095
    var div = createElement('div');                                                                                    // 1096
    return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);                                          // 1097
  });                                                                                                                  // 1098
                                                                                                                       // 1099
/*!                                                                                                                    // 1100
{                                                                                                                      // 1101
  "name" : "HTML5 Audio Element",                                                                                      // 1102
  "property": "audio",                                                                                                 // 1103
  "tags" : ["html5", "audio", "media"]                                                                                 // 1104
}                                                                                                                      // 1105
!*/                                                                                                                    // 1106
/* DOC                                                                                                                 // 1107
Detects the audio element                                                                                              // 1108
*/                                                                                                                     // 1109
                                                                                                                       // 1110
  // This tests evaluates support of the audio element, as well as                                                     // 1111
  // testing what types of content it supports.                                                                        // 1112
  //                                                                                                                   // 1113
  // We're using the Boolean constructor here, so that we can extend the value                                         // 1114
  // e.g.  Modernizr.audio     // true                                                                                 // 1115
  //       Modernizr.audio.ogg // 'probably'                                                                           // 1116
  //                                                                                                                   // 1117
  // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845                                // 1118
  //                     thx to NielsLeenheer and zcorpan                                                              // 1119
                                                                                                                       // 1120
  // Note: in some older browsers, "no" was a return value instead of empty string.                                    // 1121
  //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2                                                            // 1122
  //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5                                                    // 1123
  Modernizr.addTest('audio', function() {                                                                              // 1124
    /* jshint -W053 */                                                                                                 // 1125
    var elem = createElement('audio');                                                                                 // 1126
    var bool = false;                                                                                                  // 1127
                                                                                                                       // 1128
    try {                                                                                                              // 1129
      if ( bool = !!elem.canPlayType ) {                                                                               // 1130
        bool      = new Boolean(bool);                                                                                 // 1131
        bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');                                 // 1132
        bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');                                 // 1133
        bool.opus  = elem.canPlayType('audio/ogg; codecs="opus"') .replace(/^no$/,'');                                 // 1134
                                                                                                                       // 1135
        // Mimetypes accepted:                                                                                         // 1136
        //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements                          // 1137
        //   bit.ly/iphoneoscodecs                                                                                     // 1138
        bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');                                 // 1139
        bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||                                                   // 1140
                     elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');                                  // 1141
      }                                                                                                                // 1142
    } catch(e) { }                                                                                                     // 1143
                                                                                                                       // 1144
    return bool;                                                                                                       // 1145
  });                                                                                                                  // 1146
                                                                                                                       // 1147
/*!                                                                                                                    // 1148
{                                                                                                                      // 1149
  "name": "HTML5 Video",                                                                                               // 1150
  "property": "video",                                                                                                 // 1151
  "caniuse": "video",                                                                                                  // 1152
  "tags": ["html5"],                                                                                                   // 1153
  "knownBugs": [                                                                                                       // 1154
    "Without QuickTime, `Modernizr.video.h264` will be `undefined`; http://github.com/Modernizr/Modernizr/issues/546"  // 1155
  ],                                                                                                                   // 1156
  "polyfills": [                                                                                                       // 1157
    "html5media",                                                                                                      // 1158
    "mediaelementjs",                                                                                                  // 1159
    "sublimevideo",                                                                                                    // 1160
    "videojs",                                                                                                         // 1161
    "leanbackplayer",                                                                                                  // 1162
    "videoforeverybody"                                                                                                // 1163
  ]                                                                                                                    // 1164
}                                                                                                                      // 1165
!*/                                                                                                                    // 1166
/* DOC                                                                                                                 // 1167
Detects support for the video element, as well as testing what types of content it supports.                           // 1168
                                                                                                                       // 1169
Subproperties are provided to describe support for `ogg`, `h264` and `webm` formats, e.g.:                             // 1170
                                                                                                                       // 1171
```javascript                                                                                                          // 1172
Modernizr.video         // true                                                                                        // 1173
Modernizr.video.ogg     // 'probably'                                                                                  // 1174
```                                                                                                                    // 1175
*/                                                                                                                     // 1176
                                                                                                                       // 1177
  // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845                                // 1178
  //                     thx to NielsLeenheer and zcorpan                                                              // 1179
                                                                                                                       // 1180
  // Note: in some older browsers, "no" was a return value instead of empty string.                                    // 1181
  //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2                                                            // 1182
  //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5                                                    // 1183
                                                                                                                       // 1184
  Modernizr.addTest('video', function() {                                                                              // 1185
    /* jshint -W053 */                                                                                                 // 1186
    var elem = createElement('video');                                                                                 // 1187
    var bool = false;                                                                                                  // 1188
                                                                                                                       // 1189
    // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224                                 // 1190
    try {                                                                                                              // 1191
      if ( bool = !!elem.canPlayType ) {                                                                               // 1192
        bool = new Boolean(bool);                                                                                      // 1193
        bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,'');                                  // 1194
                                                                                                                       // 1195
        // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546                // 1196
        bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,'');                            // 1197
                                                                                                                       // 1198
        bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');                           // 1199
                                                                                                                       // 1200
        bool.vp9 = elem.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,'');                                    // 1201
                                                                                                                       // 1202
        bool.hls = elem.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,'');                 // 1203
      }                                                                                                                // 1204
    } catch(e){}                                                                                                       // 1205
                                                                                                                       // 1206
    return bool;                                                                                                       // 1207
  });                                                                                                                  // 1208
                                                                                                                       // 1209
/*!                                                                                                                    // 1210
{                                                                                                                      // 1211
  "name": "Inline SVG",                                                                                                // 1212
  "property": "inlinesvg",                                                                                             // 1213
  "caniuse": "svg-html5",                                                                                              // 1214
  "tags": ["svg"],                                                                                                     // 1215
  "notes": [{                                                                                                          // 1216
    "name": "Test page",                                                                                               // 1217
    "href": "http://paulirish.com/demo/inline-svg"                                                                     // 1218
  }],                                                                                                                  // 1219
  "polyfills": ["inline-svg-polyfill"]                                                                                 // 1220
}                                                                                                                      // 1221
!*/                                                                                                                    // 1222
/* DOC                                                                                                                 // 1223
Detects support for inline SVG in HTML (not within XHTML).                                                             // 1224
*/                                                                                                                     // 1225
                                                                                                                       // 1226
  Modernizr.addTest('inlinesvg', function() {                                                                          // 1227
    var div = createElement('div');                                                                                    // 1228
    div.innerHTML = '<svg/>';                                                                                          // 1229
    return (div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';                            // 1230
  });                                                                                                                  // 1231
                                                                                                                       // 1232
/*!                                                                                                                    // 1233
{                                                                                                                      // 1234
  "name": "WebGL",                                                                                                     // 1235
  "property": "webgl",                                                                                                 // 1236
  "caniuse": "webgl",                                                                                                  // 1237
  "tags": ["webgl", "graphics"],                                                                                       // 1238
  "polyfills": ["jebgl", "webglcompat", "cwebgl", "iewebgl"]                                                           // 1239
}                                                                                                                      // 1240
!*/                                                                                                                    // 1241
                                                                                                                       // 1242
  Modernizr.addTest('webgl', function() {                                                                              // 1243
    var canvas = createElement('canvas');                                                                              // 1244
    if ('supportsContext' in canvas) {                                                                                 // 1245
      return canvas.supportsContext('webgl') || canvas.supportsContext('experimental-webgl');                          // 1246
    }                                                                                                                  // 1247
    return !!window.WebGLRenderingContext;                                                                             // 1248
  });                                                                                                                  // 1249
                                                                                                                       // 1250
                                                                                                                       // 1251
  // isEventSupported determines if the given element supports the given event                                         // 1252
  // kangax.github.com/iseventsupported/                                                                               // 1253
  // github.com/Modernizr/Modernizr/pull/636                                                                           // 1254
  //                                                                                                                   // 1255
  // Known incorrects:                                                                                                 // 1256
  //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative                                               // 1257
  //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333                         // 1258
  var isEventSupported = (function (undefined) {                                                                       // 1259
                                                                                                                       // 1260
    // Detect whether event support can be detected via `in`. Test on a DOM element                                    // 1261
    // using the "blur" event b/c it should always exist. bit.ly/event-detection                                       // 1262
    var needsFallback = !('onblur' in document.documentElement);                                                       // 1263
                                                                                                                       // 1264
    /**                                                                                                                // 1265
     * @param  {string|*}           eventName  is the name of an event to test for (e.g. "resize")                     // 1266
     * @param  {(Object|string|*)=} element    is the element|document|window|tagName to test on                       // 1267
     * @return {boolean}                                                                                               // 1268
     */                                                                                                                // 1269
    function isEventSupportedInner( eventName, element ) {                                                             // 1270
                                                                                                                       // 1271
      var isSupported;                                                                                                 // 1272
      if ( !eventName ) { return false; }                                                                              // 1273
      if ( !element || typeof element === 'string' ) {                                                                 // 1274
        element = createElement(element || 'div');                                                                     // 1275
      }                                                                                                                // 1276
                                                                                                                       // 1277
      // Testing via the `in` operator is sufficient for modern browsers and IE.                                       // 1278
      // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and                                       // 1279
      // "resize", whereas `in` "catches" those.                                                                       // 1280
      eventName = 'on' + eventName;                                                                                    // 1281
      isSupported = eventName in element;                                                                              // 1282
                                                                                                                       // 1283
      // Fallback technique for old Firefox - bit.ly/event-detection                                                   // 1284
      if ( !isSupported && needsFallback ) {                                                                           // 1285
        if ( !element.setAttribute ) {                                                                                 // 1286
          // Switch to generic element if it lacks `setAttribute`.                                                     // 1287
          // It could be the `document`, `window`, or something else.                                                  // 1288
          element = createElement('div');                                                                              // 1289
        }                                                                                                              // 1290
        if ( element.setAttribute && element.removeAttribute ) {                                                       // 1291
          element.setAttribute(eventName, '');                                                                         // 1292
          isSupported = typeof element[eventName] === 'function';                                                      // 1293
                                                                                                                       // 1294
          if ( element[eventName] !== undefined ) {                                                                    // 1295
            // If property was created, "remove it" by setting value to `undefined`.                                   // 1296
            element[eventName] = undefined;                                                                            // 1297
          }                                                                                                            // 1298
          element.removeAttribute(eventName);                                                                          // 1299
        }                                                                                                              // 1300
      }                                                                                                                // 1301
                                                                                                                       // 1302
      return isSupported;                                                                                              // 1303
    }                                                                                                                  // 1304
    return isEventSupportedInner;                                                                                      // 1305
  })();                                                                                                                // 1306
                                                                                                                       // 1307
                                                                                                                       // 1308
                                                                                                                       // 1309
  // Modernizr.hasEvent() detects support for a given event, with an optional element to test on                       // 1310
  // Modernizr.hasEvent('gesturestart', elem)                                                                          // 1311
  var hasEvent = ModernizrProto.hasEvent = isEventSupported;                                                           // 1312
                                                                                                                       // 1313
/*!                                                                                                                    // 1314
{                                                                                                                      // 1315
  "name": "Hashchange event",                                                                                          // 1316
  "property": "hashchange",                                                                                            // 1317
  "caniuse": "hashchange",                                                                                             // 1318
  "tags": ["history"],                                                                                                 // 1319
  "notes": [{                                                                                                          // 1320
    "name": "MDN documentation",                                                                                       // 1321
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.onhashchange"                                     // 1322
  }],                                                                                                                  // 1323
  "polyfills": [                                                                                                       // 1324
    "jquery-hashchange",                                                                                               // 1325
    "moo-historymanager",                                                                                              // 1326
    "jquery-ajaxy",                                                                                                    // 1327
    "hasher",                                                                                                          // 1328
    "shistory"                                                                                                         // 1329
  ]                                                                                                                    // 1330
}                                                                                                                      // 1331
!*/                                                                                                                    // 1332
/* DOC                                                                                                                 // 1333
Detects support for the `hashchange` event, fired when the current location fragment changes.                          // 1334
*/                                                                                                                     // 1335
                                                                                                                       // 1336
  Modernizr.addTest('hashchange', function() {                                                                         // 1337
    if (hasEvent('hashchange', window) === false) {                                                                    // 1338
      return false;                                                                                                    // 1339
    }                                                                                                                  // 1340
                                                                                                                       // 1341
    // documentMode logic from YUI to filter out IE8 Compat Mode                                                       // 1342
    //   which false positives.                                                                                        // 1343
    return (document.documentMode === undefined || document.documentMode > 7);                                         // 1344
  });                                                                                                                  // 1345
                                                                                                                       // 1346
                                                                                                                       // 1347
  /**                                                                                                                  // 1348
   * contains returns a boolean for if substr is found within str.                                                     // 1349
   */                                                                                                                  // 1350
  function contains( str, substr ) {                                                                                   // 1351
    return !!~('' + str).indexOf(substr);                                                                              // 1352
  }                                                                                                                    // 1353
                                                                                                                       // 1354
  ;                                                                                                                    // 1355
/*!                                                                                                                    // 1356
{                                                                                                                      // 1357
  "name": "CSS HSLA Colors",                                                                                           // 1358
  "caniuse": "css3-colors",                                                                                            // 1359
  "property": "hsla",                                                                                                  // 1360
  "tags": ["css"],                                                                                                     // 1361
  "notes": ["Same as rgba(), in fact, browsers re-map hsla() to rgba() internally, except IE9 who retains it as hsla"] // 1362
}                                                                                                                      // 1363
!*/                                                                                                                    // 1364
                                                                                                                       // 1365
  Modernizr.addTest('hsla', function() {                                                                               // 1366
    var elem = createElement('div');                                                                                   // 1367
    var style = elem.style;                                                                                            // 1368
    style.cssText = 'background-color:hsla(120,40%,100%,.5)';                                                          // 1369
    return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');                         // 1370
  });                                                                                                                  // 1371
                                                                                                                       // 1372
                                                                                                                       // 1373
  var inputElem = createElement('input');                                                                              // 1374
                                                                                                                       // 1375
                                                                                                                       // 1376
  var inputtypes = 'search tel url email datetime date month week time datetime-local number range color'.split(' ');  // 1377
                                                                                                                       // 1378
                                                                                                                       // 1379
  var inputs = {};                                                                                                     // 1380
                                                                                                                       // 1381
                                                                                                                       // 1382
  var smile = ':)';                                                                                                    // 1383
                                                                                                                       // 1384
/*!                                                                                                                    // 1385
{                                                                                                                      // 1386
  "name": "Form input types",                                                                                          // 1387
  "property": "inputtypes",                                                                                            // 1388
  "caniuse": "forms",                                                                                                  // 1389
  "tags": ["forms"],                                                                                                   // 1390
  "authors": ["Mike Taylor"],                                                                                          // 1391
  "polyfills": [                                                                                                       // 1392
    "jquerytools",                                                                                                     // 1393
    "webshims",                                                                                                        // 1394
    "h5f",                                                                                                             // 1395
    "webforms2",                                                                                                       // 1396
    "nwxforms",                                                                                                        // 1397
    "fdslider",                                                                                                        // 1398
    "html5slider",                                                                                                     // 1399
    "galleryhtml5forms",                                                                                               // 1400
    "jscolor",                                                                                                         // 1401
    "html5formshim",                                                                                                   // 1402
    "jqueryformshim",                                                                                                  // 1403
    "selectedoptionsjs",                                                                                               // 1404
    "formvalidationjs"                                                                                                 // 1405
  ]                                                                                                                    // 1406
}                                                                                                                      // 1407
!*/                                                                                                                    // 1408
/* DOC                                                                                                                 // 1409
Detects support for HTML5 form input types and exposes Boolean subproperties with the results:                         // 1410
                                                                                                                       // 1411
```javascript                                                                                                          // 1412
Modernizr.inputtypes.color                                                                                             // 1413
Modernizr.inputtypes.date                                                                                              // 1414
Modernizr.inputtypes.datetime                                                                                          // 1415
Modernizr.inputtypes['datetime-local']                                                                                 // 1416
Modernizr.inputtypes.email                                                                                             // 1417
Modernizr.inputtypes.month                                                                                             // 1418
Modernizr.inputtypes.number                                                                                            // 1419
Modernizr.inputtypes.range                                                                                             // 1420
Modernizr.inputtypes.search                                                                                            // 1421
Modernizr.inputtypes.tel                                                                                               // 1422
Modernizr.inputtypes.time                                                                                              // 1423
Modernizr.inputtypes.url                                                                                               // 1424
Modernizr.inputtypes.week                                                                                              // 1425
```                                                                                                                    // 1426
*/                                                                                                                     // 1427
                                                                                                                       // 1428
  // Run through HTML5's new input types to see if the UA understands any.                                             // 1429
  //   This is put behind the tests runloop because it doesn't return a                                                // 1430
  //   true/false like all the other tests; instead, it returns an object                                              // 1431
  //   containing each input type with its corresponding true/false value                                              // 1432
                                                                                                                       // 1433
  // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/                                            // 1434
  Modernizr['inputtypes'] = (function(props) {                                                                         // 1435
    var bool;                                                                                                          // 1436
    var inputElemType;                                                                                                 // 1437
    var defaultView;                                                                                                   // 1438
    var len = props.length;                                                                                            // 1439
                                                                                                                       // 1440
    for ( var i = 0; i < len; i++ ) {                                                                                  // 1441
                                                                                                                       // 1442
      inputElem.setAttribute('type', inputElemType = props[i]);                                                        // 1443
      bool = inputElem.type !== 'text';                                                                                // 1444
                                                                                                                       // 1445
      // We first check to see if the type we give it sticks..                                                         // 1446
      // If the type does, we feed it a textual value, which shouldn't be valid.                                       // 1447
      // If the value doesn't stick, we know there's input sanitization which infers a custom UI                       // 1448
      if ( bool ) {                                                                                                    // 1449
                                                                                                                       // 1450
        inputElem.value         = smile;                                                                               // 1451
        inputElem.style.cssText = 'position:absolute;visibility:hidden;';                                              // 1452
                                                                                                                       // 1453
        if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {                       // 1454
                                                                                                                       // 1455
          docElement.appendChild(inputElem);                                                                           // 1456
          defaultView = document.defaultView;                                                                          // 1457
                                                                                                                       // 1458
          // Safari 2-4 allows the smiley as a value, despite making a slider                                          // 1459
          bool =  defaultView.getComputedStyle &&                                                                      // 1460
            defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&                          // 1461
            // Mobile android web browser has false positive, so must                                                  // 1462
            // check the height to see if the widget is actually there.                                                // 1463
            (inputElem.offsetHeight !== 0);                                                                            // 1464
                                                                                                                       // 1465
          docElement.removeChild(inputElem);                                                                           // 1466
                                                                                                                       // 1467
        } else if ( /^(search|tel)$/.test(inputElemType) ){                                                            // 1468
          // Spec doesn't define any special parsing or detectable UI                                                  // 1469
          //   behaviors so we pass these through as true                                                              // 1470
                                                                                                                       // 1471
          // Interestingly, opera fails the earlier test, so it doesn't                                                // 1472
          //  even make it here.                                                                                       // 1473
                                                                                                                       // 1474
        } else if ( /^(url|email)$/.test(inputElemType) ) {                                                            // 1475
          // Real url and email support comes with prebaked validation.                                                // 1476
          bool = inputElem.checkValidity && inputElem.checkValidity() === false;                                       // 1477
                                                                                                                       // 1478
        } else {                                                                                                       // 1479
          // If the upgraded input compontent rejects the :) text, we got a winner                                     // 1480
          bool = inputElem.value != smile;                                                                             // 1481
        }                                                                                                              // 1482
      }                                                                                                                // 1483
                                                                                                                       // 1484
      inputs[ props[i] ] = !!bool;                                                                                     // 1485
    }                                                                                                                  // 1486
    return inputs;                                                                                                     // 1487
  })(inputtypes);                                                                                                      // 1488
                                                                                                                       // 1489
                                                                                                                       // 1490
  var attrs = {};                                                                                                      // 1491
                                                                                                                       // 1492
                                                                                                                       // 1493
  var inputattrs = 'autocomplete autofocus list placeholder max min multiple pattern required step'.split(' ');        // 1494
                                                                                                                       // 1495
/*!                                                                                                                    // 1496
{                                                                                                                      // 1497
  "name": "Input attributes",                                                                                          // 1498
  "property": "input",                                                                                                 // 1499
  "tags": ["forms"],                                                                                                   // 1500
  "authors": ["Mike Taylor"],                                                                                          // 1501
  "notes": [{                                                                                                          // 1502
    "name": "WHATWG spec",                                                                                             // 1503
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary"
  }]                                                                                                                   // 1505
}                                                                                                                      // 1506
!*/                                                                                                                    // 1507
/* DOC                                                                                                                 // 1508
Detects support for HTML5 `<input>` element attributes and exposes Boolean subproperties with the results:             // 1509
                                                                                                                       // 1510
```javascript                                                                                                          // 1511
Modernizr.input.autocomplete                                                                                           // 1512
Modernizr.input.autofocus                                                                                              // 1513
Modernizr.input.list                                                                                                   // 1514
Modernizr.input.max                                                                                                    // 1515
Modernizr.input.min                                                                                                    // 1516
Modernizr.input.multiple                                                                                               // 1517
Modernizr.input.pattern                                                                                                // 1518
Modernizr.input.placeholder                                                                                            // 1519
Modernizr.input.required                                                                                               // 1520
Modernizr.input.step                                                                                                   // 1521
```                                                                                                                    // 1522
*/                                                                                                                     // 1523
                                                                                                                       // 1524
  // Run through HTML5's new input attributes to see if the UA understands any.                                        // 1525
  // Mike Taylr has created a comprehensive resource for testing these attributes                                      // 1526
  //   when applied to all input types:                                                                                // 1527
  //   miketaylr.com/code/input-type-attr.html                                                                         // 1528
                                                                                                                       // 1529
  // Only input placeholder is tested while textarea's placeholder is not.                                             // 1530
  // Currently Safari 4 and Opera 11 have support only for the input placeholder                                       // 1531
  // Both tests are available in feature-detects/forms-placeholder.js                                                  // 1532
  Modernizr['input'] = (function( props ) {                                                                            // 1533
    for ( var i = 0, len = props.length; i < len; i++ ) {                                                              // 1534
      attrs[ props[i] ] = !!(props[i] in inputElem);                                                                   // 1535
    }                                                                                                                  // 1536
    if (attrs.list){                                                                                                   // 1537
      // safari false positive's on datalist: webk.it/74252                                                            // 1538
      // see also github.com/Modernizr/Modernizr/issues/146                                                            // 1539
      attrs.list = !!(createElement('datalist') && window.HTMLDataListElement);                                        // 1540
    }                                                                                                                  // 1541
    return attrs;                                                                                                      // 1542
  })(inputattrs);                                                                                                      // 1543
                                                                                                                       // 1544
                                                                                                                       // 1545
  var toStringFn = ({}).toString;                                                                                      // 1546
                                                                                                                       // 1547
/*!                                                                                                                    // 1548
{                                                                                                                      // 1549
  "name": "SVG clip paths",                                                                                            // 1550
  "property": "svgclippaths",                                                                                          // 1551
  "tags": ["svg"],                                                                                                     // 1552
  "notes": [{                                                                                                          // 1553
    "name": "Demo",                                                                                                    // 1554
    "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"                                        // 1555
  }]                                                                                                                   // 1556
}                                                                                                                      // 1557
!*/                                                                                                                    // 1558
/* DOC                                                                                                                 // 1559
Detects support for clip paths in SVG (only, not on HTML content).                                                     // 1560
                                                                                                                       // 1561
See [this discussion](http://github.com/Modernizr/Modernizr/issues/213) regarding applying SVG clip paths to HTML content.
*/                                                                                                                     // 1563
                                                                                                                       // 1564
  Modernizr.addTest('svgclippaths', function() {                                                                       // 1565
    return !!document.createElementNS &&                                                                               // 1566
      /SVGClipPath/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'clipPath')));         // 1567
  });                                                                                                                  // 1568
                                                                                                                       // 1569
/*!                                                                                                                    // 1570
{                                                                                                                      // 1571
  "name": "SVG SMIL animation",                                                                                        // 1572
  "property": "smil",                                                                                                  // 1573
  "caniuse": "svg-smil",                                                                                               // 1574
  "tags": ["svg"],                                                                                                     // 1575
  "notes": [{                                                                                                          // 1576
  "name": "W3C Synchronised Multimedia spec",                                                                          // 1577
  "href": "http://www.w3.org/AudioVideo/"                                                                              // 1578
  }]                                                                                                                   // 1579
}                                                                                                                      // 1580
!*/                                                                                                                    // 1581
                                                                                                                       // 1582
  // SVG SMIL animation                                                                                                // 1583
  Modernizr.addTest('smil', function() {                                                                               // 1584
    return !!document.createElementNS &&                                                                               // 1585
      /SVGAnimate/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'animate')));           // 1586
  });                                                                                                                  // 1587
                                                                                                                       // 1588
                                                                                                                       // 1589
  var cssomPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : []);                               // 1590
  ModernizrProto._cssomPrefixes = cssomPrefixes;                                                                       // 1591
                                                                                                                       // 1592
                                                                                                                       // 1593
  function getBody() {                                                                                                 // 1594
    // After page load injecting a fake body doesn't work so check if body exists                                      // 1595
    var body = document.body;                                                                                          // 1596
                                                                                                                       // 1597
    if(!body) {                                                                                                        // 1598
      // Can't use the real body create a fake one.                                                                    // 1599
      body = createElement('body');                                                                                    // 1600
      body.fake = true;                                                                                                // 1601
    }                                                                                                                  // 1602
                                                                                                                       // 1603
    return body;                                                                                                       // 1604
  }                                                                                                                    // 1605
                                                                                                                       // 1606
  ;                                                                                                                    // 1607
                                                                                                                       // 1608
  // Inject element with style element and some CSS rules                                                              // 1609
  function injectElementWithStyles( rule, callback, nodes, testnames ) {                                               // 1610
    var mod = 'modernizr';                                                                                             // 1611
    var style;                                                                                                         // 1612
    var ret;                                                                                                           // 1613
    var node;                                                                                                          // 1614
    var docOverflow;                                                                                                   // 1615
    var div = createElement('div');                                                                                    // 1616
    var body = getBody();                                                                                              // 1617
                                                                                                                       // 1618
    if ( parseInt(nodes, 10) ) {                                                                                       // 1619
      // In order not to give false positives we create a node for each test                                           // 1620
      // This also allows the method to scale for unspecified uses                                                     // 1621
      while ( nodes-- ) {                                                                                              // 1622
        node = createElement('div');                                                                                   // 1623
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);                                                    // 1624
        div.appendChild(node);                                                                                         // 1625
      }                                                                                                                // 1626
    }                                                                                                                  // 1627
                                                                                                                       // 1628
    // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed                       // 1629
    // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element                      // 1630
    // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.             // 1631
    // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx                                                       // 1632
    // Documents served as xml will throw if using ­ so use xml friendly encoded version. See issue #277               // 1633
    style = ['­','<style id="s', mod, '">', rule, '</style>'].join('');                                                // 1634
    div.id = mod;                                                                                                      // 1635
    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).innerHTML += style;                                                                      // 1638
    body.appendChild(div);                                                                                             // 1639
    if ( body.fake ) {                                                                                                 // 1640
      //avoid crashing IE8, if background image is used                                                                // 1641
      body.style.background = '';                                                                                      // 1642
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible                  // 1643
      body.style.overflow = 'hidden';                                                                                  // 1644
      docOverflow = docElement.style.overflow;                                                                         // 1645
      docElement.style.overflow = 'hidden';                                                                            // 1646
      docElement.appendChild(body);                                                                                    // 1647
    }                                                                                                                  // 1648
                                                                                                                       // 1649
    ret = callback(div, rule);                                                                                         // 1650
    // If this is done after page load we don't want to remove the body so check if body exists                        // 1651
    if ( body.fake ) {                                                                                                 // 1652
      body.parentNode.removeChild(body);                                                                               // 1653
      docElement.style.overflow = docOverflow;                                                                         // 1654
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+                                                   // 1655
      docElement.offsetHeight;                                                                                         // 1656
    } else {                                                                                                           // 1657
      div.parentNode.removeChild(div);                                                                                 // 1658
    }                                                                                                                  // 1659
                                                                                                                       // 1660
    return !!ret;                                                                                                      // 1661
                                                                                                                       // 1662
  }                                                                                                                    // 1663
                                                                                                                       // 1664
  ;                                                                                                                    // 1665
                                                                                                                       // 1666
  var testStyles = ModernizrProto.testStyles = injectElementWithStyles;                                                // 1667
                                                                                                                       // 1668
/*!                                                                                                                    // 1669
{                                                                                                                      // 1670
  "name": "@font-face",                                                                                                // 1671
  "property": "fontface",                                                                                              // 1672
  "authors": ["Diego Perini", "Mat Marquis"],                                                                          // 1673
  "tags": ["css"],                                                                                                     // 1674
  "knownBugs": [                                                                                                       // 1675
    "False Positive: WebOS http://github.com/Modernizr/Modernizr/issues/342",                                          // 1676
    "False Postive: WP7 http://github.com/Modernizr/Modernizr/issues/538"                                              // 1677
  ],                                                                                                                   // 1678
  "notes": [{                                                                                                          // 1679
    "name": "@font-face detection routine by Diego Perini",                                                            // 1680
    "href": "http://javascript.nwbox.com/CSSSupport/"                                                                  // 1681
  },{                                                                                                                  // 1682
    "name": "Filament Group @font-face compatibility research",                                                        // 1683
    "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"      // 1684
  },{                                                                                                                  // 1685
    "name": "Filament Grunticon/@font-face device testing results",                                                    // 1686
    "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"           // 1687
  },{                                                                                                                  // 1688
    "name": "CSS fonts on Android",                                                                                    // 1689
    "href": "http://stackoverflow.com/questions/3200069/css-fonts-on-android"                                          // 1690
  },{                                                                                                                  // 1691
    "name": "@font-face and Android",                                                                                  // 1692
    "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"                                                 // 1693
  }]                                                                                                                   // 1694
}                                                                                                                      // 1695
!*/                                                                                                                    // 1696
                                                                                                                       // 1697
  var blacklist = (function() {                                                                                        // 1698
    var ua = navigator.userAgent;                                                                                      // 1699
    var wkvers = ua.match( /applewebkit\/([0-9]+)/gi ) && parseFloat( RegExp.$1 );                                     // 1700
    var webos = ua.match( /w(eb)?osbrowser/gi );                                                                       // 1701
    var wppre8 = ua.match( /windows phone/gi ) && ua.match( /iemobile\/([0-9])+/gi ) && parseFloat( RegExp.$1 ) >= 9;  // 1702
    var oldandroid = wkvers < 533 && ua.match( /android/gi );                                                          // 1703
    return webos || oldandroid || wppre8;                                                                              // 1704
  }());                                                                                                                // 1705
  if( blacklist ) {                                                                                                    // 1706
    Modernizr.addTest('fontface', false);                                                                              // 1707
  } else {                                                                                                             // 1708
    testStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {                         // 1709
      var style = document.getElementById('smodernizr');                                                               // 1710
      var sheet = style.sheet || style.styleSheet;                                                                     // 1711
      var cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';
      var bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;                                    // 1713
      Modernizr.addTest('fontface', bool);                                                                             // 1714
    });                                                                                                                // 1715
  }                                                                                                                    // 1716
;                                                                                                                      // 1717
/*!                                                                                                                    // 1718
{                                                                                                                      // 1719
  "name": "CSS Generated Content",                                                                                     // 1720
  "property": "generatedcontent",                                                                                      // 1721
  "tags": ["css"],                                                                                                     // 1722
  "warnings": ["Android won't return correct height for anything below 7px #738"]                                      // 1723
}                                                                                                                      // 1724
!*/                                                                                                                    // 1725
                                                                                                                       // 1726
  testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function( node ) { // 1727
    Modernizr.addTest('generatedcontent', node.offsetHeight >= 7);                                                     // 1728
  });                                                                                                                  // 1729
                                                                                                                       // 1730
                                                                                                                       // 1731
  // Change the function's scope.                                                                                      // 1732
  function fnBind(fn, that) {                                                                                          // 1733
    return function() {                                                                                                // 1734
      return fn.apply(that, arguments);                                                                                // 1735
    };                                                                                                                 // 1736
  }                                                                                                                    // 1737
                                                                                                                       // 1738
  ;                                                                                                                    // 1739
                                                                                                                       // 1740
  /**                                                                                                                  // 1741
   * testDOMProps is a generic DOM property test; if a browser supports                                                // 1742
   *   a certain property, it won't return undefined for it.                                                           // 1743
   */                                                                                                                  // 1744
  function testDOMProps( props, obj, elem ) {                                                                          // 1745
    var item;                                                                                                          // 1746
                                                                                                                       // 1747
    for ( var i in props ) {                                                                                           // 1748
      if ( props[i] in obj ) {                                                                                         // 1749
                                                                                                                       // 1750
        // return the property name as a string                                                                        // 1751
        if (elem === false) return props[i];                                                                           // 1752
                                                                                                                       // 1753
        item = obj[props[i]];                                                                                          // 1754
                                                                                                                       // 1755
        // let's bind a function                                                                                       // 1756
        if (is(item, 'function')) {                                                                                    // 1757
          // bind to obj unless overriden                                                                              // 1758
          return fnBind(item, elem || obj);                                                                            // 1759
        }                                                                                                              // 1760
                                                                                                                       // 1761
        // return the unbound function or obj or value                                                                 // 1762
        return item;                                                                                                   // 1763
      }                                                                                                                // 1764
    }                                                                                                                  // 1765
    return false;                                                                                                      // 1766
  }                                                                                                                    // 1767
                                                                                                                       // 1768
  ;                                                                                                                    // 1769
                                                                                                                       // 1770
  /**                                                                                                                  // 1771
   * Create our "modernizr" element that we do most feature tests on.                                                  // 1772
   */                                                                                                                  // 1773
  var modElem = {                                                                                                      // 1774
    elem : createElement('modernizr')                                                                                  // 1775
  };                                                                                                                   // 1776
                                                                                                                       // 1777
  // Clean up this element                                                                                             // 1778
  Modernizr._q.push(function() {                                                                                       // 1779
    delete modElem.elem;                                                                                               // 1780
  });                                                                                                                  // 1781
                                                                                                                       // 1782
                                                                                                                       // 1783
                                                                                                                       // 1784
  var mStyle = {                                                                                                       // 1785
    style : modElem.elem.style                                                                                         // 1786
  };                                                                                                                   // 1787
                                                                                                                       // 1788
  // kill ref for gc, must happen before                                                                               // 1789
  // mod.elem is removed, so we unshift on to                                                                          // 1790
  // the front of the queue.                                                                                           // 1791
  Modernizr._q.unshift(function() {                                                                                    // 1792
    delete mStyle.style;                                                                                               // 1793
  });                                                                                                                  // 1794
                                                                                                                       // 1795
                                                                                                                       // 1796
                                                                                                                       // 1797
  // Helper function for converting camelCase to kebab-case,                                                           // 1798
  // e.g. boxSizing -> box-sizing                                                                                      // 1799
  function domToCSS( name ) {                                                                                          // 1800
    return name.replace(/([A-Z])/g, function(str, m1) {                                                                // 1801
      return '-' + m1.toLowerCase();                                                                                   // 1802
    }).replace(/^ms-/, '-ms-');                                                                                        // 1803
  }                                                                                                                    // 1804
  ;                                                                                                                    // 1805
                                                                                                                       // 1806
  // Function to allow us to use native feature detection functionality if available.                                  // 1807
  // Accepts a list of property names and a single value                                                               // 1808
  // Returns `undefined` if native detection not available                                                             // 1809
  function nativeTestProps ( props, value ) {                                                                          // 1810
    var i = props.length;                                                                                              // 1811
    // Start with the JS API: http://www.w3.org/TR/css3-conditional/#the-css-interface                                 // 1812
    if ('CSS' in window && 'supports' in window.CSS) {                                                                 // 1813
      // Try every prefixed variant of the property                                                                    // 1814
      while (i--) {                                                                                                    // 1815
        if (window.CSS.supports(domToCSS(props[i]), value)) {                                                          // 1816
          return true;                                                                                                 // 1817
        }                                                                                                              // 1818
      }                                                                                                                // 1819
      return false;                                                                                                    // 1820
    }                                                                                                                  // 1821
    // Otherwise fall back to at-rule (for FF 17 and Opera 12.x)                                                       // 1822
    else if ('CSSSupportsRule' in window) {                                                                            // 1823
      // Build a condition string for every prefixed variant                                                           // 1824
      var conditionText = [];                                                                                          // 1825
      while (i--) {                                                                                                    // 1826
        conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');                                              // 1827
      }                                                                                                                // 1828
      conditionText = conditionText.join(' or ');                                                                      // 1829
      return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function( node ) {
        return (window.getComputedStyle ?                                                                              // 1831
                getComputedStyle(node, null) :                                                                         // 1832
                node.currentStyle)['position'] == 'absolute';                                                          // 1833
      });                                                                                                              // 1834
    }                                                                                                                  // 1835
    return undefined;                                                                                                  // 1836
  }                                                                                                                    // 1837
  ;                                                                                                                    // 1838
                                                                                                                       // 1839
  // testProps is a generic CSS / DOM property test.                                                                   // 1840
                                                                                                                       // 1841
  // In testing support for a given CSS property, it's legit to test:                                                  // 1842
  //    `elem.style[styleName] !== undefined`                                                                          // 1843
  // If the property is supported it will return an empty string,                                                      // 1844
  // if unsupported it will return undefined.                                                                          // 1845
                                                                                                                       // 1846
  // We'll take advantage of this quick test and skip setting a style                                                  // 1847
  // on our modernizr element, but instead just testing undefined vs                                                   // 1848
  // empty string.                                                                                                     // 1849
                                                                                                                       // 1850
  // Because the testing of the CSS property names (with "-", as                                                       // 1851
  // opposed to the camelCase DOM properties) is non-portable and                                                      // 1852
  // non-standard but works in WebKit and IE (but not Gecko or Opera),                                                 // 1853
  // we explicitly reject properties with dashes so that authors                                                       // 1854
  // developing in WebKit or IE first don't end up with                                                                // 1855
  // browser-specific content by accident.                                                                             // 1856
                                                                                                                       // 1857
  function testProps( props, prefixed, value, skipValueTest ) {                                                        // 1858
    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;                                            // 1859
                                                                                                                       // 1860
    // Try native detect first                                                                                         // 1861
    if (!is(value, 'undefined')) {                                                                                     // 1862
      var result = nativeTestProps(props, value);                                                                      // 1863
      if(!is(result, 'undefined')) {                                                                                   // 1864
        return result;                                                                                                 // 1865
      }                                                                                                                // 1866
    }                                                                                                                  // 1867
                                                                                                                       // 1868
    // Otherwise do it properly                                                                                        // 1869
    var afterInit, i, prop, before;                                                                                    // 1870
                                                                                                                       // 1871
    // If we don't have a style element, that means                                                                    // 1872
    // we're running async or after the core tests,                                                                    // 1873
    // so we'll need to create our own elements to use                                                                 // 1874
    if ( !mStyle.style ) {                                                                                             // 1875
      afterInit = true;                                                                                                // 1876
      mStyle.modElem = createElement('modernizr');                                                                     // 1877
      mStyle.style = mStyle.modElem.style;                                                                             // 1878
    }                                                                                                                  // 1879
                                                                                                                       // 1880
    // Delete the objects if we                                                                                        // 1881
    // we created them.                                                                                                // 1882
    function cleanElems() {                                                                                            // 1883
      if (afterInit) {                                                                                                 // 1884
        delete mStyle.style;                                                                                           // 1885
        delete mStyle.modElem;                                                                                         // 1886
      }                                                                                                                // 1887
    }                                                                                                                  // 1888
                                                                                                                       // 1889
    for ( i in props ) {                                                                                               // 1890
      prop = props[i];                                                                                                 // 1891
      before = mStyle.style[prop];                                                                                     // 1892
                                                                                                                       // 1893
      if ( !contains(prop, '-') && mStyle.style[prop] !== undefined ) {                                                // 1894
                                                                                                                       // 1895
        // If value to test has been passed in, do a set-and-check test.                                               // 1896
        // 0 (integer) is a valid property value, so check that `value` isn't                                          // 1897
        // undefined, rather than just checking it's truthy.                                                           // 1898
        if (!skipValueTest && !is(value, 'undefined')) {                                                               // 1899
                                                                                                                       // 1900
          // Needs a try catch block because of old IE. This is slow, but will                                         // 1901
          // be avoided in most cases because `skipValueTest` will be used.                                            // 1902
          try {                                                                                                        // 1903
            mStyle.style[prop] = value;                                                                                // 1904
          } catch (e) {}                                                                                               // 1905
                                                                                                                       // 1906
          // If the property value has changed, we assume the value used is                                            // 1907
          // supported. If `value` is empty string, it'll fail here (because                                           // 1908
          // it hasn't changed), which matches how browsers have implemented                                           // 1909
          // CSS.supports()                                                                                            // 1910
          if (mStyle.style[prop] != before) {                                                                          // 1911
            cleanElems();                                                                                              // 1912
            return prefixed == 'pfx' ? prop : true;                                                                    // 1913
          }                                                                                                            // 1914
        }                                                                                                              // 1915
        // Otherwise just return true, or the property name if this is a                                               // 1916
        // `prefixed()` call                                                                                           // 1917
        else {                                                                                                         // 1918
          cleanElems();                                                                                                // 1919
          return prefixed == 'pfx' ? prop : true;                                                                      // 1920
        }                                                                                                              // 1921
      }                                                                                                                // 1922
    }                                                                                                                  // 1923
    cleanElems();                                                                                                      // 1924
    return false;                                                                                                      // 1925
  }                                                                                                                    // 1926
                                                                                                                       // 1927
  ;                                                                                                                    // 1928
                                                                                                                       // 1929
  // Modernizr.testProp() investigates whether a given style property is recognized                                    // 1930
  // Note that the property names must be provided in the camelCase variant.                                           // 1931
  // Modernizr.testProp('pointerEvents')                                                                               // 1932
  // Also accepts optional 2nd arg, of a value to use for native feature detection, e.g.:                              // 1933
  // Modernizr.testProp('pointerEvents', 'none')                                                                       // 1934
  var testProp = ModernizrProto.testProp = function( prop, value, useValue ) {                                         // 1935
    return testProps([prop], undefined, value, useValue);                                                              // 1936
  };                                                                                                                   // 1937
                                                                                                                       // 1938
/*!                                                                                                                    // 1939
{                                                                                                                      // 1940
  "name": "CSS textshadow",                                                                                            // 1941
  "property": "textshadow",                                                                                            // 1942
  "caniuse": "css-textshadow",                                                                                         // 1943
  "tags": ["css"],                                                                                                     // 1944
  "knownBugs": ["FF3.0 will false positive on this test"]                                                              // 1945
}                                                                                                                      // 1946
!*/                                                                                                                    // 1947
                                                                                                                       // 1948
  Modernizr.addTest('textshadow', testProp('textShadow', '1px 1px'));                                                  // 1949
                                                                                                                       // 1950
                                                                                                                       // 1951
  /**                                                                                                                  // 1952
   * testPropsAll tests a list of DOM properties we want to check against.                                             // 1953
   *     We specify literally ALL possible (known and/or likely) properties on                                         // 1954
   *     the element including the non-vendor prefixed one, for forward-                                               // 1955
   *     compatibility.                                                                                                // 1956
   */                                                                                                                  // 1957
  function testPropsAll( prop, prefixed, elem, value, skipValueTest ) {                                                // 1958
                                                                                                                       // 1959
    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),                                                         // 1960
    props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');                                       // 1961
                                                                                                                       // 1962
    // did they call .prefixed('boxSizing') or are we just testing a prop?                                             // 1963
    if(is(prefixed, 'string') || is(prefixed, 'undefined')) {                                                          // 1964
      return testProps(props, prefixed, value, skipValueTest);                                                         // 1965
                                                                                                                       // 1966
      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])                                     // 1967
    } else {                                                                                                           // 1968
      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');                                     // 1969
      return testDOMProps(props, prefixed, elem);                                                                      // 1970
    }                                                                                                                  // 1971
  }                                                                                                                    // 1972
                                                                                                                       // 1973
  // Modernizr.testAllProps() investigates whether a given style property,                                             // 1974
  //     or any of its vendor-prefixed variants, is recognized                                                         // 1975
  // Note that the property names must be provided in the camelCase variant.                                           // 1976
  // Modernizr.testAllProps('boxSizing')                                                                               // 1977
  ModernizrProto.testAllProps = testPropsAll;                                                                          // 1978
                                                                                                                       // 1979
                                                                                                                       // 1980
                                                                                                                       // 1981
  // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input                      // 1982
  // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'                                                                 // 1983
                                                                                                                       // 1984
  // Properties can be passed as DOM-style camelCase or CSS-style kebab-case.                                          // 1985
  // Return values will always be in camelCase; if you want kebab-case, use Modernizr.prefixedCSS().                   // 1986
                                                                                                                       // 1987
  // If you're trying to ascertain which transition end event to bind to, you might do something like...               // 1988
  //                                                                                                                   // 1989
  //     var transEndEventNames = {                                                                                    // 1990
  //         'WebkitTransition' : 'webkitTransitionEnd',// Saf 6, Android Browser                                      // 1991
  //         'MozTransition'    : 'transitionend',      // only for FF < 15                                            // 1992
  //         'transition'       : 'transitionend'       // IE10, Opera, Chrome, FF 15+, Saf 7+                         // 1993
  //     },                                                                                                            // 1994
  //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];                                   // 1995
                                                                                                                       // 1996
  var prefixed = ModernizrProto.prefixed = function( prop, obj, elem ) {                                               // 1997
    // Convert kebab-case to camelCase                                                                                 // 1998
    if (prop.indexOf('-') != -1) {                                                                                     // 1999
      prop = cssToDOM(prop);                                                                                           // 2000
    }                                                                                                                  // 2001
    if (!obj) {                                                                                                        // 2002
      return testPropsAll(prop, 'pfx');                                                                                // 2003
    } else {                                                                                                           // 2004
      // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'   // 2005
      return testPropsAll(prop, obj, elem);                                                                            // 2006
    }                                                                                                                  // 2007
  };                                                                                                                   // 2008
                                                                                                                       // 2009
                                                                                                                       // 2010
/*!                                                                                                                    // 2011
{                                                                                                                      // 2012
  "name": "IndexedDB",                                                                                                 // 2013
  "property": "indexeddb",                                                                                             // 2014
  "caniuse": "indexeddb",                                                                                              // 2015
  "tags": ["storage"],                                                                                                 // 2016
  "polyfills": ["indexeddb"]                                                                                           // 2017
}                                                                                                                      // 2018
!*/                                                                                                                    // 2019
/* DOC                                                                                                                 // 2020
Detects support for the IndexedDB client-side storage API (final spec).                                                // 2021
*/                                                                                                                     // 2022
                                                                                                                       // 2023
  // Vendors had inconsistent prefixing with the experimental Indexed DB:                                              // 2024
  // - Webkit's implementation is accessible through webkitIndexedDB                                                   // 2025
  // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB                                // 2026
  // For speed, we don't test the legacy (and beta-only) indexedDB                                                     // 2027
                                                                                                                       // 2028
  var indexeddb = prefixed('indexedDB', window);                                                                       // 2029
  Modernizr.addTest('indexeddb', !!indexeddb);                                                                         // 2030
                                                                                                                       // 2031
  if (!!indexeddb) {                                                                                                   // 2032
    Modernizr.addTest('indexeddb.deletedatabase', 'deleteDatabase' in indexeddb);                                      // 2033
  }                                                                                                                    // 2034
;                                                                                                                      // 2035
                                                                                                                       // 2036
  /**                                                                                                                  // 2037
   * testAllProps determines whether a given CSS property, in some prefixed                                            // 2038
   * form, is supported by the browser. It can optionally be given a value; in                                         // 2039
   * which case testAllProps will only return true if the browser supports that                                        // 2040
   * value for the named property; this latter case will use native detection                                          // 2041
   * (via window.CSS.supports) if available. A boolean can be passed as a 3rd                                          // 2042
   * parameter to skip the value check when native detection isn't available,                                          // 2043
   * to improve performance when simply testing for support of a property.                                             // 2044
   *                                                                                                                   // 2045
   * @param prop - String naming the property to test                                                                  // 2046
   * @param value - [optional] String of the value to test                                                             // 2047
   * @param skipValueTest - [optional] Whether to skip testing that the value                                          // 2048
   *                        is supported when using non-native detection                                               // 2049
   *                        (default: false)                                                                           // 2050
   */                                                                                                                  // 2051
  function testAllProps (prop, value, skipValueTest) {                                                                 // 2052
    return testPropsAll(prop, undefined, undefined, value, skipValueTest);                                             // 2053
  }                                                                                                                    // 2054
  ModernizrProto.testAllProps = testAllProps;                                                                          // 2055
                                                                                                                       // 2056
/*!                                                                                                                    // 2057
{                                                                                                                      // 2058
  "name": "Border Radius",                                                                                             // 2059
  "property": "borderradius",                                                                                          // 2060
  "caniuse": "border-radius",                                                                                          // 2061
  "polyfills": ["css3pie"],                                                                                            // 2062
  "tags": ["css"],                                                                                                     // 2063
  "notes": [{                                                                                                          // 2064
    "name": "Comprehensive Compat Chart",                                                                              // 2065
    "href": "http://muddledramblings.com/table-of-css3-border-radius-compliance"                                       // 2066
  }]                                                                                                                   // 2067
}                                                                                                                      // 2068
!*/                                                                                                                    // 2069
                                                                                                                       // 2070
  Modernizr.addTest('borderradius', testAllProps('borderRadius', '0px', true));                                        // 2071
                                                                                                                       // 2072
/*!                                                                                                                    // 2073
{                                                                                                                      // 2074
  "name": "Border Image",                                                                                              // 2075
  "property": "borderimage",                                                                                           // 2076
  "caniuse": "border-image",                                                                                           // 2077
  "polyfills": ["css3pie"],                                                                                            // 2078
   "knownBugs": ["Android < 2.0 is true, but has a broken implementation"],                                            // 2079
  "tags": ["css"]                                                                                                      // 2080
}                                                                                                                      // 2081
!*/                                                                                                                    // 2082
                                                                                                                       // 2083
  Modernizr.addTest('borderimage', testAllProps('borderImage', 'url() 1', true));                                      // 2084
                                                                                                                       // 2085
/*!                                                                                                                    // 2086
{                                                                                                                      // 2087
  "name": "Background Size",                                                                                           // 2088
  "property": "backgroundsize",                                                                                        // 2089
  "tags": ["css"],                                                                                                     // 2090
  "knownBugs": ["This will false positive in Opera Mini - http://github.com/Modernizr/Modernizr/issues/396"],          // 2091
  "notes": [{                                                                                                          // 2092
    "name": "Related Issue",                                                                                           // 2093
    "href": "http://github.com/Modernizr/Modernizr/issues/396"                                                         // 2094
  }]                                                                                                                   // 2095
}                                                                                                                      // 2096
!*/                                                                                                                    // 2097
                                                                                                                       // 2098
  Modernizr.addTest('backgroundsize', testAllProps('backgroundSize', '100%', true));                                   // 2099
                                                                                                                       // 2100
/*!                                                                                                                    // 2101
{                                                                                                                      // 2102
  "name": "Box Shadow",                                                                                                // 2103
  "property": "boxshadow",                                                                                             // 2104
  "caniuse": "css-boxshadow",                                                                                          // 2105
  "tags": ["css"],                                                                                                     // 2106
  "knownBugs": [                                                                                                       // 2107
    "WebOS false positives on this test.",                                                                             // 2108
    "The Kindle Silk browser false positives"                                                                          // 2109
  ]                                                                                                                    // 2110
}                                                                                                                      // 2111
!*/                                                                                                                    // 2112
                                                                                                                       // 2113
  Modernizr.addTest('boxshadow', testAllProps('boxShadow', '1px 1px', true));                                          // 2114
                                                                                                                       // 2115
/*!                                                                                                                    // 2116
{                                                                                                                      // 2117
  "name": "CSS Animations",                                                                                            // 2118
  "property": "cssanimations",                                                                                         // 2119
  "caniuse": "css-animation",                                                                                          // 2120
  "polyfills": ["transformie", "csssandpaper"],                                                                        // 2121
  "tags": ["css"],                                                                                                     // 2122
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],                   // 2123
  "notes": [{                                                                                                          // 2124
    "name" : "Article: 'Dispelling the Android CSS animation myths'",                                                  // 2125
    "href": "http://goo.gl/CHVJm"                                                                                      // 2126
  }]                                                                                                                   // 2127
}                                                                                                                      // 2128
!*/                                                                                                                    // 2129
/* DOC                                                                                                                 // 2130
Detects wether or not elements can be animated using CSS                                                               // 2131
*/                                                                                                                     // 2132
                                                                                                                       // 2133
  Modernizr.addTest('cssanimations', testAllProps('animationName', 'a', true));                                        // 2134
                                                                                                                       // 2135
/*!                                                                                                                    // 2136
{                                                                                                                      // 2137
  "name": "CSS Columns",                                                                                               // 2138
  "property": "csscolumns",                                                                                            // 2139
  "caniuse": "multicolumn",                                                                                            // 2140
  "polyfills": ["css3multicolumnjs"],                                                                                  // 2141
  "tags": ["css"]                                                                                                      // 2142
}                                                                                                                      // 2143
!*/                                                                                                                    // 2144
                                                                                                                       // 2145
                                                                                                                       // 2146
  (function() {                                                                                                        // 2147
                                                                                                                       // 2148
    /* jshint -W053 */                                                                                                 // 2149
    Modernizr.addTest('csscolumns', function(){                                                                        // 2150
      var bool = false;                                                                                                // 2151
      var test = testAllProps('columnCount');                                                                          // 2152
      try {                                                                                                            // 2153
        if ( bool = !!test ) {                                                                                         // 2154
          bool = new Boolean(bool);                                                                                    // 2155
        }                                                                                                              // 2156
      } catch(e){}                                                                                                     // 2157
                                                                                                                       // 2158
      return bool;                                                                                                     // 2159
    });                                                                                                                // 2160
                                                                                                                       // 2161
    var props = ['Width', 'Span', 'Fill', 'Gap', 'Rule', 'RuleColor', 'RuleStyle', 'RuleWidth', 'BreakBefore', 'BreakAfter', 'BreakInside'];
    var name, test;                                                                                                    // 2163
                                                                                                                       // 2164
    for (var i = 0; i < props.length; i++) {                                                                           // 2165
      name = props[i].toLowerCase();                                                                                   // 2166
      test = testAllProps('column' + props[i]);                                                                        // 2167
                                                                                                                       // 2168
      // break-before, break-after & break-inside are not "column"-prefixed in spec                                    // 2169
      if (name === 'breakbefore' || name === 'breakafter' || name == 'breakinside') {                                  // 2170
        test = test || testAllProps(props[i]);                                                                         // 2171
      }                                                                                                                // 2172
                                                                                                                       // 2173
      Modernizr.addTest('csscolumns.' + name, test);                                                                   // 2174
    }                                                                                                                  // 2175
                                                                                                                       // 2176
                                                                                                                       // 2177
  })();                                                                                                                // 2178
                                                                                                                       // 2179
                                                                                                                       // 2180
/*!                                                                                                                    // 2181
{                                                                                                                      // 2182
  "name": "CSS Reflections",                                                                                           // 2183
  "caniuse": "css-reflections",                                                                                        // 2184
  "property": "cssreflections",                                                                                        // 2185
  "tags": ["css"]                                                                                                      // 2186
}                                                                                                                      // 2187
!*/                                                                                                                    // 2188
                                                                                                                       // 2189
  Modernizr.addTest('cssreflections', testAllProps('boxReflect', 'above', true));                                      // 2190
                                                                                                                       // 2191
/*!                                                                                                                    // 2192
{                                                                                                                      // 2193
  "name": "CSS Transforms",                                                                                            // 2194
  "property": "csstransforms",                                                                                         // 2195
  "caniuse": "transforms2d",                                                                                           // 2196
  "tags": ["css"]                                                                                                      // 2197
}                                                                                                                      // 2198
!*/                                                                                                                    // 2199
                                                                                                                       // 2200
  Modernizr.addTest('csstransforms', testAllProps('transform', 'scale(1)', true));                                     // 2201
                                                                                                                       // 2202
/*!                                                                                                                    // 2203
{                                                                                                                      // 2204
  "name": "CSS Transforms 3D",                                                                                         // 2205
  "property": "csstransforms3d",                                                                                       // 2206
  "caniuse": "transforms3d",                                                                                           // 2207
  "tags": ["css"],                                                                                                     // 2208
  "warnings": [                                                                                                        // 2209
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]                                                                                                                    // 2211
}                                                                                                                      // 2212
!*/                                                                                                                    // 2213
                                                                                                                       // 2214
  Modernizr.addTest('csstransforms3d', function() {                                                                    // 2215
    var ret = !!testAllProps('perspective', '1px', true);                                                              // 2216
    var usePrefix = Modernizr._config.usePrefixes;                                                                     // 2217
                                                                                                                       // 2218
    // Webkit's 3D transforms are passed off to the browser's own graphics renderer.                                   // 2219
    //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in                                     // 2220
    //   some conditions. As a result, Webkit typically recognizes the syntax but                                      // 2221
    //   will sometimes throw a false positive, thus we must do a more thorough check:                                 // 2222
    if ( ret && (!usePrefix || 'webkitPerspective' in docElement.style )) {                                            // 2223
                                                                                                                       // 2224
      // Webkit allows this media query to succeed only if the feature is enabled.                                     // 2225
      // `@media (transform-3d),(-webkit-transform-3d){ ... }`                                                         // 2226
      // If loaded inside the body tag and the test element inherits any padding, margin or borders it will fail #740  // 2227
      var mq = '@media (transform-3d)';                                                                                // 2228
      if (usePrefix ) mq += ',(-webkit-transform-3d)';                                                                 // 2229
      mq += '{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}';                         // 2230
                                                                                                                       // 2231
      testStyles(mq, function( elem ) {                                                                                // 2232
        ret = elem.offsetLeft === 9 && elem.offsetHeight === 5;                                                        // 2233
      });                                                                                                              // 2234
    }                                                                                                                  // 2235
                                                                                                                       // 2236
    return ret;                                                                                                        // 2237
  });                                                                                                                  // 2238
                                                                                                                       // 2239
/*!                                                                                                                    // 2240
{                                                                                                                      // 2241
  "name": "CSS Transitions",                                                                                           // 2242
  "property": "csstransitions",                                                                                        // 2243
  "caniuse": "css-transitions",                                                                                        // 2244
  "tags": ["css"]                                                                                                      // 2245
}                                                                                                                      // 2246
!*/                                                                                                                    // 2247
                                                                                                                       // 2248
  Modernizr.addTest('csstransitions', testAllProps('transition', 'all', true));                                        // 2249
                                                                                                                       // 2250
/*!                                                                                                                    // 2251
{                                                                                                                      // 2252
  "name": "Flexbox",                                                                                                   // 2253
  "property": "flexbox",                                                                                               // 2254
  "caniuse": "flexbox",                                                                                                // 2255
  "tags": ["css"],                                                                                                     // 2256
  "notes": [{                                                                                                          // 2257
    "name": "The _new_ flexbox",                                                                                       // 2258
    "href": "http://dev.w3.org/csswg/css3-flexbox"                                                                     // 2259
  }],                                                                                                                  // 2260
  "warnings": [                                                                                                        // 2261
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]                                                                                                                    // 2263
}                                                                                                                      // 2264
!*/                                                                                                                    // 2265
/* DOC                                                                                                                 // 2266
Detects support for the Flexible Box Layout model, a.k.a. Flexbox, which allows easy manipulation of layout order and sizing within a container.
*/                                                                                                                     // 2268
                                                                                                                       // 2269
  Modernizr.addTest('flexbox', testAllProps('flexBasis', '1px', true));                                                // 2270
                                                                                                                       // 2271
/*!                                                                                                                    // 2272
{                                                                                                                      // 2273
  "name": "Flexbox (legacy)",                                                                                          // 2274
  "property": "flexboxlegacy",                                                                                         // 2275
  "tags": ["css"],                                                                                                     // 2276
  "polyfills": ["flexie"],                                                                                             // 2277
  "notes": [{                                                                                                          // 2278
    "name": "The _old_ flexbox",                                                                                       // 2279
    "href": "http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/"                                                      // 2280
  }]                                                                                                                   // 2281
}                                                                                                                      // 2282
!*/                                                                                                                    // 2283
                                                                                                                       // 2284
  Modernizr.addTest('flexboxlegacy', testAllProps('boxDirection', 'reverse', true));                                   // 2285
                                                                                                                       // 2286
                                                                                                                       // 2287
  // Run each test                                                                                                     // 2288
  testRunner();                                                                                                        // 2289
                                                                                                                       // 2290
  // Remove the "no-js" class if it exists                                                                             // 2291
  setClasses(classes);                                                                                                 // 2292
                                                                                                                       // 2293
  delete ModernizrProto.addTest;                                                                                       // 2294
  delete ModernizrProto.addAsyncTest;                                                                                  // 2295
                                                                                                                       // 2296
  // Run the things that are supposed to run after the tests                                                           // 2297
  for (var i = 0; i < Modernizr._q.length; i++) {                                                                      // 2298
    Modernizr._q[i]();                                                                                                 // 2299
  }                                                                                                                    // 2300
                                                                                                                       // 2301
  // Leak Modernizr namespace                                                                                          // 2302
  window.Modernizr = Modernizr;                                                                                        // 2303
                                                                                                                       // 2304
                                                                                                                       // 2305
                                                                                                                       // 2306
})(this, document);                                                                                                    // 2307
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['cwaring:modernizr'] = {};

})();
