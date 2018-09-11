/*!
 * jQuery Yalil 1.0.1
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
        var queue = [];
        var interval = null;
        var processImageQueue = function(){
            var qlength = queue.length;
            if(qlength == 0){
                clearInterval(interval);
                $.event.trigger("imagesLoaded");
                
                return;
            }
            if(!queue[0].started){
                 queue[0].started = true;
                 var $img = $(queue[0].el);
                 $img.attr('src', $img.data('original-src'));
                 $img.removeAttr('data-original-src');
                 $img.load(function(){
                      queue.shift();
                 });
                 $img.error(function(){
                     queue.shift();
                 });
            } 
        };
        var processLoadingImages = function($el) {
            
            $el.each(function(key,value) {
                 queue.push({
                     id:key,
                     el:value,
                     started:false
                 });
            });
            
            interval = setInterval(processImageQueue,100);
        }
        var $el = $this.find(settings.selector);
        $el.each(function(){
            $(this).attr('data-original-src', $(this).attr('src'));
            $(this).attr('src', settings.loadingImage);
        });
        $(window).load(function(){
            var $el = $this.find(settings.selector);
            $el.show();
            processLoadingImages($el);
        });
        return this; 
    };
 
}( jQuery ));