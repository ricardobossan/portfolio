<!--Preview Markdown with the `Ctrl+Shift+P` shortcut and writing `markdown, then selectino options-->

#USING IMAGEMAGICK

###-CROP AND -RESIZE
######Crops image file to the desired aspect ratio, them resizes it to the desired resolution, using width or height as reference (maybe other units too)


Say a `img-1.jpg` image file's resolution is `4062x2708` pixels. The box in the website where this image is suposed to fit has `1920x800` pixels. This is what you got to do:

#### I - Divide the desired image's width for its height (or vice-versa) in pixels.

In this case, desired resolution is `1920x800`. 

_width/height = 2.4_

#### II - Then, divide the original image's (`img-1.jpg`) horizontal (width) or vertical (height) bigger value in pixels for value found in the previous item (`2.4`) (or multiply the smaller value for that value).

For example: `img-1.jpg` width is 4062. Divide this number by 2.4. Result is 1692,5 ~= 1693

This means that you can get the aspect ratio of 1920x800, using the biggest value in resolution and calculating its correspondent value in that aspect ratio, wich gives resolution `4062x1693`.

So `4062x1693`aspect ratio = `1920x800`aspect ratio

#### III - Then its time to use the `-crop`command:


``convert img-1.jpg -crop 4062x1693+0+200 +repage img-1_4062x1693.jpg``

`4062x1693` is the desired resolution for the new cropped file.

The `+0`is the number of width pixels, from left to right, from wich the `-crop` command will start to cont the desired number of pixel of the resolution's width. In this case, the desired width's resolution is the same as the original image file's width, `4062` pixels.

The `+200`is the point in pixels, from top to bottom, in wich the image file will start to be cut. This value was put there because it was interesting to recover especifically the middle area of the images height. The way to calculate that is to divide the origina file's height (`2708px`), divide it by the new height of the image (`1693px`) and distribut the result (`1050px`) by the top and bottom parts of the new images height, wich means that the crop would begin by value `507,5~=508px`.
So, the command would be like this: ``convert img-1.jpg -crop 4062x1693+0+508 +repage image-1_4062x1693.jpg``

#### IV - Next, just use the `-resize`command on the resulting image, to resize it to the desirable resolution, by specifying it width or height.

The command would look like this:

``convert img-1_4062x1693.jpg -resize 1920x800 img-1_1920x800.jpg``

That process of `-crop` then `-resize` will adjust the image file to the desired aspect ration and size.