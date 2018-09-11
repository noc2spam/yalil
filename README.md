
Ya-Li'l is probably the smallest (and the simplest) lazy image loading plugin for jquery, ever!

To use the plugin, simply include jquery and the plugin file like following:
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

Ya-Li'l takes two options, which are following:
```
$(document).ready(function(){
    $('body').yalil({
          loadingImage : "InternetSlowdown_Day.gif",
           selector : 'img'
    });
});
```

`loadingImage` is the preloader image that is to be shown for each image. By default, it is set to `InternetSlowdown_Day.gif` which can be downloaded with the plugin. `selector` is the child selector that is to be found inside the container. By default it is set as `img` which will lazy load all images inside the container. This can be changed to any jQuery selector for lazy loading specific images.


Ya-Li'l will fire event `imagesLoaded` so that you can use callback.
```
$(document).on('imagesLoaded', function(){
    console.log("All images have been loaded!");
});
```

Do you have a comment/request on this plugin? Feel free to email me at sugato at tech5 dot net