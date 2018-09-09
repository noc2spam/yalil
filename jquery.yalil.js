/*!
 * jQuery Yalil 1.0.0 pre
 * https://github.com/noc2spam/yalil
 * 
 * Author : Sugata Sengupta
 * licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
 
(function ( $ ) {
    
    $.fn.yalil = function( options ) {
        var settings = $.extend({
            loadingImage : "InternetSlowdown_Day.gif",
            selector : 'img'
        }, options );
        var $this = this;
        var processLoadingImages = function($el) {
            var promises = [];

            $el.each(function() {
                 var def = new $.Deferred();
                 var $img = $(this);
                 $img.attr('src', $img.data('original-src'));
                 $img.removeAttr('data-original-src');
                 $img.load(function(){
                     def.resolve();
                 });
                 
                 promises.push(def);
            });

            return $.when.apply(undefined, promises).promise();
        }
        $(document).ready(function(){
            var $el = $this.find(settings.selector);
            $el.each(function(){
                $(this).attr('data-original-src', $(this).attr('src'));
                $(this).attr('src', settings.loadingImage);
            });
        });
        $(window).load(function(){
            var $el = $this.find(settings.selector);
            processLoadingImages($el);
        });
        return this; 
    };
 
}( jQuery ));