/*
* Inner Zoom Plugin for the Nivo Slider
*
* http://www.soslignes-ecrivain-public.fr/Inner-zoom-plugin-Nivo-Slider.html
*
* Also visit
* http://www.soslignes-ecrivain-public.fr/English-Blog.html
*
* v1.2 - 01-2015
* 
* Use and abuse!
*/

var speedInOut=300,			// Zoomed image show/hide speed
	responseSpeed=0.05,		// Smooth effect level 
	zoomFactor=0.75,		// Mousewheel Zoom factor (default: 75%)
	zoomText1='Zoom',		// Info text 1
	zoomText1Display=true,	// false: Info text 1 is removed 
	zoomLeftText2='x',		// Before ratio info text
	zoomText2Display=true,	// false: Info text 2 is removed
	StartPlugIn,
	IZcontainer, IZavailable, IZcontainerPosX=0, IZcontainerPosY=0, currIZimgWidth,IZImgWidth, IZcaption, timerIZ,
	slider, widthSlider, widthSliderD2, heightSlider, heightSliderD2,
	moveOK, pointerX, pointerY, posImgX, posImgY,
	currImage, currImgWidth, currImgHeight, currImgRatio, 
	mousewheelZoom, ratioM1, deltaX;

function NivoInnerZoom() {

	IZavailable=true;

	if (!StartPlugIn) {

		slider=$('.nivoSlider')
		.append('<div class="IZcontainer"/><div class="nivo-zoom-caption"/>')
		.css({
			cursor:'pointer'}
		);
		widthSlider=slider.width();
		widthSliderD2=widthSlider/2;
		heightSlider=slider.height();
		heightSliderD2=heightSlider/2;

		IZcontainer=$('.IZcontainer').css({
			zIndex:19,
			position:'absolute',
			width:0,
			height:0,
			top:IZcontainerPosY+heightSliderD2,
			left:IZcontainerPosX+widthSliderD2,
			opacity:0,
			overflow:'hidden'
		})
		.append('<div class="Zoominfo2"/><div class="Zoominfo">'+zoomText1+'</div>');

		IZcaption=$('.nivo-zoom-caption').hide();

		slider
		.on('click', function() {
			var slideLink=slider.data('nivo:vars').currentImage.parent('a');
			
			if (slideLink.length) {
				document.location=slideLink.attr('href');
				return;
			}

			if (IZavailable) {
				IZimageAdjust();}
				else {
					IZhide();
				}
		})
		.on('mouseenter', function() {
			if (pointerX<widthSlider-20 && pointerX>20 && pointerY<heightSlider-20 && pointerY>20) return;
			IZimageAdjust();
		})
		.on('mouseleave', function() {
			IZhide();
			IZavailable=true;
		});

		$(document).mousemove(function(e) {
			var sOffset=slider.offset(); 
			pointerX=e.pageX-sOffset.left;
			pointerY=e.pageY-sOffset.top;
		});
		$(window).resize(function() {
			widthSlider=slider.width();
			widthSliderD2=widthSlider/2;
			heightSlider=slider.height();
			heightSliderD2=heightSlider/2;
		});

		mouseWheelIZ();
		StartPlugIn=true;
	}

	if (!IZavailable) return;
	IZcontainer.css({
		opacity:0,
		top:IZcontainerPosY+heightSliderD2,
		left:IZcontainerPosX+widthSliderD2
	});

}

function IZimageAdjust()  {

	if (!IZavailable) return;

	clearTimeout(timerIZ);

	IZshow();
	mousewheelZoom=false;
	
	currIZImgWidth=IZImgWidth=IZcontainer.find('img').width();

	ratioInfo();
	posImgX=-(ratioM1*pointerX)-widthSliderD2;
	posImgY=-(ratioM1*pointerY)-heightSliderD2;

	timerIZ=setInterval(function() {
			if (!moveOK) return;
			IZavailable=false;

			if (mousewheelZoom) {

				deltaX=currIZImgWidth-IZcontainer.find('img').width();
				IZImgWidth+=(responseSpeed*(currIZImgWidth-IZcontainer.find('img').width()));

				if (Math.abs(IZImgWidth-currIZImgWidth)<1) {
					IZImgWidth=currIZImgWidth;
					mousewheelZoom=false;
				}
				
				IZcontainer.find('img').css({
					width:IZImgWidth,
					height:IZImgWidth/currImgRatio
				});
				ratioInfo();
			}
			if (pointerY<0) {pointerY=0;}
			var currPosImgX=-(ratioM1*pointerX)-widthSliderD2,
				currPosImgY=-(ratioM1*pointerY)-heightSliderD2;
						
			posImgX+=responseSpeed*(currPosImgX-posImgX);
			posImgY+=responseSpeed*(currPosImgY-posImgY);

			IZcontainer.find('img').css({
				top:posImgY+heightSliderD2,
				left:posImgX+widthSliderD2
			});
	},8);
}

function IZshow()  {

	moveOK=false;

	currImage=slider.find('.nivo-main-image');
	var i=new Image();
	i.src=currImage.attr('src');
	currImgWidth=i.width;
	currImgHeight=i.height;
	ratioM1=(currImgWidth/widthSlider)-1;

	currImgRatio=currImgWidth/currImgHeight;

	if (pointerX<0) {pointerX=0;}
	if (pointerX>widthSlider) {pointerX=widthSlider;}

	if (pointerY<0) {pointerY=0;}
	if (pointerY>widthSlider) {pointerY=heightSlider;}

	posImgX=-(pointerX/widthSlider)*(currImgWidth-widthSlider);
	posImgY=-(pointerY/heightSlider)*(currImgHeight-heightSlider);

	IZcontainer
	.find('img').remove().end()
	.append('<img src='+currImage.attr('src')+'>')
	.find('img').css({
		display:'block',
		position:'absolute',
		opacity:1,
		top:posImgY- heightSliderD2,
		left:posImgX- widthSliderD2,
		width:currImgWidth,
		height:currImgHeight
	}).end()
	.find('.Zoominfo, .Zoominfo2').stop(1,1)
	.delay(speedInOut)
	.fadeIn(speedInOut);

	IZcontainer.stop(1,1).animate({
		opacity:1,
		top:IZcontainerPosY,
		left:IZcontainerPosX,
		width:widthSlider,
		height:heightSlider
	},speedInOut)
	.find('img').animate({
		top:posImgY,
		left:posImgX
	},speedInOut, function() {moveOK=true;});

	var IZcaptionContent=slider.data('nivo:vars').currentImage.attr('alt');
			
	if (IZcaptionContent) {
		IZcaption
		.html(IZcaptionContent)
		.delay(speedInOut).fadeIn(speedInOut);
	}

	if (!zoomText1Display) {IZcontainer.find('.Zoominfo').remove();}
	if (!zoomText2Display) {IZcontainer.find('.Zoominfo2').remove();}

	if (ratioM1<0) {IZcontainer.find('img').hide();}
}

function IZhide()  {

	IZavailable=false;

	clearTimeout(timerIZ);
		IZcontainer.find('.Zoominfo, .Zoominfo2').hide();
		IZcontainer.animate({
			opacity:0,
			top:IZcontainerPosY+IZcontainer.height()/2,
			left:IZcontainerPosX+IZcontainer.width()/2,
			width:0,
			height:0
		},speedInOut)
		.find('img').animate({
			top:posImgY,
			left:posImgX
		},speedInOut, function() {
			$(this).remove();
			IZavailable=true;
		});
		IZcaption.hide();

		//Fix for a known Nivo Slider bug (empty boxes out of the slider's div) 
		setTimeout(function () {
			slider.find('.nivo-box').each(function() {
				var a=parseInt($(this).css('top'),10)+$(this).height();
				if (a>heightSlider) {
					$(this).css('height',$(this).height()-heightSlider);
				}
			});
		},5);
}

function ratioInfo() {

	zoomInfo2=IZcontainer.find('.Zoominfo2').removeClass('Zoomwarning Zoomdefault');

	if (currIZImgWidth>=currImgWidth) {
		currIZImgWidth=currImgWidth;
	}

	ratioM1=(currIZImgWidth/widthSlider)-1;
	var	realRatio=Math.pow(ratioM1+1,2).toFixed(1);

	if (currIZImgWidth<widthSlider) {
		currIZImgWidth=widthSlider;
		if (!mousewheelZoom) {zoomInfo2.addClass('Zoomdefault');}
	}

	if (currIZImgWidth==widthSlider && Math.abs(deltaX)<20) {
		IZcontainer.find('img').fadeOut(300);
		zoomInfo2
		.addClass('Zoomwarning');
	}

	zoomInfo2.html(zoomLeftText2+realRatio);
}

function mouseWheelIZ() {

	slider
	.on('DOMMouseScroll',function(e) {
		if (e.originalEvent.detail<0) {zoomIn();} else {zoomOut();}
		mousewheelZoom=true;
		return false;
	}).on('mousewheel',function(e) {
		if (e.originalEvent.wheelDelta>=0) {zoomIn();} else {zoomOut();}
		mousewheelZoom=true;
		return false;
	});
}


function zoomIn () {
	if (IZavailable || currIZImgWidth>=currImgWidth) return;

	currIZImgWidth=IZcontainer.find('img').width()*(1/zoomFactor);
	IZcontainer.find('img').show();
}

function zoomOut () {
	if (IZavailable || ratioM1<=0) return;

	currIZImgWidth=IZcontainer.find('img').width()*zoomFactor;
}