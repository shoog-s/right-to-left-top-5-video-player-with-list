
# Video Player (RTL) with list

html/css/js piece of code for section of YOUTUBE  video player and top 5 video list with the ability to play the next and the previous video by the arrow button or just by clicking on the video.

## Usage

make section contain the piece of code.
customize the height and width in the css file.
change the video URL and img for your target video:

```html

<div class="item">
               <div class="vid-item" onclick="setCurVid(2);document.getElementById('vid_frame_player').src=
               'http://youtube.com/embed/RTHI_uGyfTM

>put your url after the src= and befor the quastion mark?

               ?rel=0&amp;showinfo=0&amp;autohide=1'">
                  <div class="thumb">
                     <div class="orderNum">
                        2
                     </div>
                     <img src="http://img.
                     youtube.com/vi/RTHI_uGyfTM
                     

> and put the same url here to make vedio static thumb image

                     /0.jpg">
                  </div>
               </div>
            </div>

```
## build by 

 - html/css/js 
 - jQuery 
 - fontawsome
 - youtube api
##Author
Shoog-s

the code based on artical!! unfortunately I lose the resource link!! 