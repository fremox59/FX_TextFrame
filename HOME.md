FX TextFrame is a feature rich tool for After Effects that helps you create, customize and animate auto-resizing text "Frames" quickly and easily, with the help of a compact, well designed UI Panel, and a dedicated Pseudo-effect.

![YOUTUBE](ONgXo-8UYIA)

<img src="https://github.com/fremox59/FX_TextFrame/blob/master/infog/img/FX_TextFrame_Wording.gif"><img src="https://github.com/fremox59/FX_TextFrame/blob/master/infog/img/FX_TextFrame_Saber.gif"> 

# How does it work?

First choose if you want to create a Single Line setup or a MultiLine setup, by clicking the corresponding tab button at the top of the UI.

## Single Line mode

By selecting the Single Line tab, you'll create only one single text layer once the button ***Create single FX TextFrame line*** will be clicked.
Depending of the first Toggle Icon Option called ***Toggle Mask/Shape mode*** (1), you'll end up with just this single text layer with a mask onto it (if the yellow ***Mask mode*** icon with a M is the one selected), or with a text layer PLUS a shape layer parented to it if the blue ***Shape mode*** icon with a star is the selected one).
Note that the preset applied for the Frame is automatically animated and starts opening itself (also revealing the text inside) at the current frame ; so this is normal if you can't immediatly see anything ; just preview the animation from there to see the magic happen :) 

![singleLineModeUI](https://github.com/fremox59/FX_TextFrame/blob/master/infog/img/FX_TextFrame_UIinfo_singleLine-cropped.jpg)

Once you have chosen the mode you want for your TextFrame setup, you can either choose to customize the other options numbered 2 to 6 in the following list, right now, or you can decide to use them afterwhile once you'll have created your TextFrame setup, it's up to you!

Here are, from left to right in the UI, the options you can tweak through an icon button or dropdown menu:

1. ***Toggle Mask/Shape mode*** (this is the only option in the UI that won't be able to change a selected FX TextFrame setup afterwhile so... mind your choice!
2. ***Corners style*** with or without Fill/Stroke
3. ***Animation direction***
4. ***Auto/Manual Frame X and Y size***
5. ***Text over Frame compositing***
6. ***Fill and Stroke colors***

Clicking the ***Create single FX TextFrame line*** will then create a new FX TextFrame line, based on the options you've set up with these icons.

Please note that - instead of creating a new perfectly centered editable text layer from scratch - you can also select an existing one in the active composition, and click on the ***Create single FX TextFrame line*** button in order to apply the FX TextFrame onto it.

## Multiple Line mode

<img src="https://github.com/fremox59/FX_TextFrame/blob/master/infog/img/FX_TextFrame_Multi.gif">

The 6 buttons/dropdown lists' icons explained in the previous section remain and behave identically in this Multi Line mode.
But with Multi Line selected, all the lines created after having set up the Multi Line FX TextFrame rig (with the corresponding button (1)), will be parented to a new ***CTRL FX TextFrame*** Null layer, with a dedicated effect called ***FX Multiline TextFrame*** applied to it, where you can adjust various paragraph aspects : Lines Alignement, Lines Spacing... and the Lines Animation : Time Offset, Direction...

![multiLineModeUI](https://github.com/fremox59/FX_TextFrame/blob/master/infog/img/FX_TextFrame_UIinfo_multiLine-cropped.jpg)

1. ***Setup multiline FX TextFrame*** button, once clicked, will prompt you to type the text you want for each line, in a pop-up window that allows you to create (or remove) as much lines as needed. Once validated, you'll end up with the corresponding text layers, all parented to one CTRL Null layer, with useful options to adapt the lines alignement, spacing, sequence animation...
2. You can add a new line...
3. ...or remove the last line, from the selected multiline rig (by selecting its CTRL Null layer before clicking these 2 buttons)
4. Clicking this arrow, with a FX TextFrame Multiline CTRL Null selected, will select automatically its children layers that have the FX TextFrame onto them, making the baking process faster
5. ***Bake path on selected FX TextFrame*** any FX TextFrame layer's path expression to regular keyframes in order to optimize performances (see below). 

## Baking and unbaking Path expressions

FX TextFrame relies on path expressions, which could slow down your machine, especaially the Multi Line setups (but with big amounts of Single Lines setups too). This is why you have the ability, with the button called ***Bake path on selected FX TextFrame***, available for both Single and Multi line modes, to bake the path property's expression for any selected FX TextFrame layer (the ones that do have a "FX TextFrame" effect). Once this button has been clicked, you end up with some easy to use and fast to compute regular path keyframes.

And the very nice thing with this ***Bake path on selected FX TextFrame*** feature is that it remains non-destructive ! Indeed, if you select the same FX TextFrame layer again (that has been baked) and if you re-click on the same button, the keyframes will be removed and you'll retrieve the full expression that makes the path auto-resizing itself, with all the corners options, transform properties and animations still driven by the FX TextFrame effect ! Perfect if you need to change a text that already has an FX TextFrame that had been baked with the tool :)
