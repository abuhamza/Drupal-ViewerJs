Drupal-ViewerJs
===============

Drupal module that allow the display of file/image fields with Viewerjs.org

INSTALLATION
------------
1. Rename the module folder to viewerjs 
2. Download ViewerJs (or clone the ready branch) here: https://github.com/Strae/Viewer.js
3. If cloning from gitub, please mind to checkout the 'ready' branch!
4. Place it into your library folder, usually sites/all/libraries, and rename it viewerjs
  (lowercase it)
5. Just check that file libraries/viewerjs/Viewer.js  exists.
6. Check that all the required modules are installed and enabled: libraries ( http://drupal.org/project/libraries ), file and image (from drupal 7 core).
7. Install the module in Drupal (admin > modules, section Media, or via `drush en viewerjs`)

CONFIGURATION
-------------
1. To enable it, in the "Manage Display" of your content-type, just choose
  "ViewerJS Default" as format for the file/image fields you want to apply Viewerjs.
2. When you choose "ViewerJS Default" as formatter, you can change all the settings.

CUSTOMIZATION
-------------
1. Widget: copy the css file modules/viewerjs/css/viewerjs.css in your theme css folder. Alternatively, copy the content of the viewerjs.css in your theme css files and edit it.
2. ViewerJS: If you want to change the ViewerJs theme,  follow this steps:
    1. Edit index.html into your libraries/viewerjs folder, adding your custom css file.
    2. Use libraries/viewerjs/viewer.css file as reference.
  If you need a different DOM structure than index.html, just create your own (in the same folder!), then remember to specify the new filename in the settings of the field format (see CONFIGURATION)
