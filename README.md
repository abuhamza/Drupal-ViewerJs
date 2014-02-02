Drupal-ViewerJs
===============

Drupal module that allow the display of file/image fields with Viewerjs.org

INSTALLATION
------------
1. Copy viewerjs folder into your drupal module's folder (usually sites/all/modules)
2. Download ViewerJs (or clone the master branch) here: https://github.com/Strae/Viewer.js
3. Place it into your library folder, usually sites/all/libraries, and rename it viewerjs
  (lowercase it)
4. Just check that file libraries/viewerjs/Viewer.js  exists.
5. Install the module in Drupal (admin > modules or via drush)

CONFIGURATION
-------------
1. To enable it, in the "Manage Display" of your content-type, just choose
  "ViewerJS Default" as format for the file/image fields you apply Viewerjs.
2. When you choose "ViewerJS Default" as formatter, you can change all the settings.

CUSTOMIZATION
-------------
1. Widget: copy the css file modules/viewerjs/css/viewerjs.css in your theme css folder. Alternatively, copy the content of the viewerjs.css in your theme css files and edit it.
2. ViewerJS: If you want to change the ViewerJs theme,  follow this steps:
    1. Edit index.html into your libraries/viewerjs folder, adding your custom css file.
    2. Use libraries/viewerjs/viewer.css file as reference.
  If you need a different DOM structure than index.html, just create your own (in the same folder!), then remember to specify the new filename in the settings of the field format (see CONFIGURATION)
3. File Thumbnails: when the file type is not an image, the module will use images from its 'images' folder (file.png is generic for all types, but the module look for EXT.png first). You can edit and add all the thumbnail you want, just rename it [EXT].png (eg. for .csv files, the thumbnail name is csv.png). Please note that the current thumbnails have been took from openclipart.org and are available under GLP license.
