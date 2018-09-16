
JQuery Yalil is probably the smallest (and the simplest) lazy image loading plugin for jquery, ever!
When compressed, the filesize is only 1.07 KB. It supports all modern browsers including IE7+. 

To use the plugin simply include jquery and the plugin file like following:
```
<script src="//code.jquery.com/jquery.min.js"></script>
<script src="jquery.yalil.js"></script>
```

Then call it on document ready  like following:
```
$(document).ready(function(){
    $('body').yalil();
});
```

`$(body)` can be changed to the container for which the images must be lazy loaded. 

JQuery Yalil takes four options, which are following:
```
$(document).ready(function(){
    $('body').yalil({
          loadingImage : "InternetSlowdown_Day.gif",
           selector : 'img',
           success : function($element){
           },
           error : function($element){
           }
    });
});
```

`loadingImage` is the preloader image that is to be shown for each image. By default, it is set to `Parabolic_dish_motion_circle.gif` which can be downloaded with the plugin. 

`selector` is the child selector that is to be found inside the container. By default it is set as `img` which will lazy load all images inside the container. This can be changed to any jQuery selector for lazy loading specific images.

`success` is the callback which is fired with every successful image load. This function takes a single parameter $element, which is the element that just loaded successfully.

`error` is the callback which is fired with every failed image load. This function takes a single parameter $element, which is the element that could not be loaded. 

JQuery Yalil also fires event `imagesLoaded` after all images are loaded.
```
$(document).on('imagesLoaded', function(){
    console.log("All images have been loaded!");
});
```

Do you have a comment/suggestion on this plugin? Feel free to email me at thcdesigning at gmail dot com.