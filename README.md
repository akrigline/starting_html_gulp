Intro
=====
This is a customized starting file for an HTML web project. It's some frankenstein's monster of npm, bower, compass, and gulp. I'm still learning how these things all play together so it's probably messy.

Installation
------------
After duplicating the folder, run:
``npm install``

And you should be good to go on gulp assuming you have gulp installed globally as well:
``npm install -g gulp``

Note that this needs compass to work:
``gem install compass``

Variables
---------
``sassDir`` : Directory of your Sass Files.
``cssDir`` : Directory of your CSS Files.
``htmlDir`` : Where your HTML pages live.
``imgDir`` : Where your images live.
``fontsDir`` : Where your fonts folder is.
``bowerDir`` : Directory of your bower_components (including /bower_components).
``jsDir`` : Where your javascript files live
``buildDir`` : Where you want the final built files to be output.


Gulp Tasks
==========
Bower
-----
```
gulp bower
```
Runs bower based on the bower.json.

```
gulp bowerfiles
```
Grabs all ``.js`` javascript files from bower and puts them into your ``jsDir``

CSS & SCSS
----------
```
gulp css
```
Runs Compass' SASS compiler based on the config file ``config.rb``, and spits out css files into the ``./`` root.

```
gulp uncssstyle
```
First runs ``gulp css``, then pushes the output into Uncss. Uncss looks where your ``htmlDir`` is to find the HTML files, and determines what CSS styles it needs to keep. It then overrites the original ``cssDir`` file.

JS
--
```
gulp js
```
First runs ``bowerfiles``, then gathers all of the js files and runs jsHint. There is an ingnore file in the root of the project folder ``.jshintignore``. It's currently set to ignore everything in the ``vendor`` folder under ``js``.

Building
--------
```
gulp buildjs
```
```
gulp buildcss
```
```
gulp buildhtml
```
```
gulp buildimg
```
```
gulp buildfonts
```
These all run any tasks related to what they're building, then gathers those files together in the ``buildDir`` folder.

```
gulp build
```
Runs all of the ``build**`` tasks.


Default
-------
```
gulp default
```
Runs Bower and readies all of the CSS.

Watch
-------
```
gulp watch
```
Watches the Sass directory for any changed files, then runs the ``uncssstyle`` function.


Preloaded
=========
* Bootstrap
* Modernizr
* jQuery