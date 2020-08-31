#include './colorPicker.js'

/*
 
FX TextFrame - Version 1.2
Copyright (c) 2019 Matthieu Fremeaux (aka FREMOX)
More informations on aescripts.com and motion-cafe.com

*/


//encapsulate the script in a function to avoid global variables

function FX_TextFrame_Main(thisObj) {


    //================

    var version = '1.2';
    var scriptName = "FX TextFrame";

    //================
    try {
        var myComp = app.project.activeItem;
        var compLayers = myComp.selectedLayers;
    } catch (err) {
    }

    var myScriptPath = (new File($.fileName)).parent.fsName;
    var myAssetsPath = myScriptPath + "/FX_TextFrame_assets/";

    if (!checkForFile(Folder(myAssetsPath))) return;


    // ================ ADD FUNCTIONS HERE =============


    function checkForFile(file) {
        if (!file.exists) {
            var type = (file instanceof File) ? "file: " : "folder: ";
            alert("Could not find the necessary " + type + file.displayName + "\nPlease reinstall as instructed.");
            return false;
        } else {
            return true;
        }
    }

    function detect() {
        var touches = "";
        var keyState = ScriptUI.environment.keyboardState;
        if (keyState.shiftKey) touches += "shift";
        if (keyState.altKey) touches += "alt";
        if (keyState.ctrlKey) touches += "ctrl";
        return touches;
    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function injectInfosMask(myLayer, myTextSource, chosenColor) {
        myLayer.property("Text").property("Source Text").setValue(myTextSource);
        myLayer.effect("FX TextFrame")("Frame Fill Color").setValue(chosenColor);
    }

    function injectInfosShape(myLayer, myTextSource, chosenColor) {
        myLayer.parent.property("Text").property("Source Text").setValue(myTextSource);
        myLayer.effect("FX TextFrame")("Frame Fill Color").setValue(chosenColor);
    }

    function injectInfosRig(myLayer, myTextSource) {
        try {
            myLayer.property("Text").property("Source Text").setValue(myTextSource);
        } catch (e) {
            myLayer.parent.property("Text").property("Source Text").setValue(myTextSource);
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function changeCorner(cornerType) {
        var myComp = app.project.activeItem;
        var compLayers = myComp.selectedLayers;

        var myListSelection = cornerType.index + 1;
        var selectedCorner = (cornerType.index + 6) % 5;

        for (var l = 0; l < compLayers.length; l++) {
            try {

                if (myListSelection == 5 || myListSelection == 10 || myListSelection == 15) {
                    compLayers[l].effect("FX TextFrame")("Corners Shape").setValue(5);
                } else {
                    compLayers[l].effect("FX TextFrame")("Corners Shape").setValue(selectedCorner);
                }
                if (myListSelection <= 5) {
                    compLayers[l].effect("FX TextFrame")("Frame Fill Opacity").setValue(0);
                    compLayers[l].effect("FX TextFrame")("Frame Stroke Opacity").setValue(100);
                } else if (myListSelection > 5 && myListSelection <= 10) {
                    compLayers[l].effect("FX TextFrame")("Frame Fill Opacity").setValue(100);
                    compLayers[l].effect("FX TextFrame")("Frame Stroke Opacity").setValue(100);
                } else {
                    compLayers[l].effect("FX TextFrame")("Frame Fill Opacity").setValue(100);
                    compLayers[l].effect("FX TextFrame")("Frame Stroke Opacity").setValue(0);
                }
            } catch (err) {}
        }
    }

    function changeFillColor(fillColor) {
        var myComp = app.project.activeItem;
        var compLayers = myComp.selectedLayers;
        var myLayer = compLayers[0];

        for (var l = 0; l < compLayers.length; l++) {
            try {
                compLayers[l].effect("FX TextFrame")("Frame Fill Color").setValue(fillColor);
            } catch (err) {}
        }
    }

    function changeAnim(selectedAnim) {
        var myComp = app.project.activeItem;
        var compLayers = myComp.selectedLayers;
        var myLayer = compLayers[0];

        for (var l = 0; l < compLayers.length; l++) {
            try {
                if (selectedAnim == 0) {
                    compLayers[l].effect("FX TextFrame")("Use Opening Animation").setValue(0);
                    compLayers[l].effect("FX TextFrame")("Animation from Center").setValue(0);
                    compLayers[l].effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    compLayers[l].effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 2) {
                    compLayers[l].effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    compLayers[l].effect("FX TextFrame")("Animation from Center").setValue(1);
                    compLayers[l].effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    compLayers[l].effect("FX TextFrame")("Change Animation Axis").setValue(0);
                    try {
                        compLayers[l].parent.property("FX Multiline TextFrame").property("Multi Opening Direction").setValue(2);
                    } catch (err) {
                        try {
                            compLayers[l].parent.parent.property("FX Multiline TextFrame").property("Multi Opening Direction").setValue(2);
                            } catch (err) {}
                    }
                } else if (selectedAnim == 1) {
                    compLayers[l].effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    compLayers[l].effect("FX TextFrame")("Animation from Center").setValue(0);
                    compLayers[l].effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    compLayers[l].effect("FX TextFrame")("Change Animation Axis").setValue(0);
                    try {
                        compLayers[l].parent.property("FX Multiline TextFrame").property("Multi Opening Direction").setValue(1);
                    } catch (err) {
                        try {
                            compLayers[l].parent.parent.property("FX Multiline TextFrame").property("Multi Opening Direction").setValue(1);
                            } catch (err) {}
                    }
                } else if (selectedAnim == 3){
                    compLayers[l].effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    compLayers[l].effect("FX TextFrame")("Animation from Center").setValue(0);
                    compLayers[l].effect("FX TextFrame")("Flip Opening Direction").setValue(1);
                    compLayers[l].effect("FX TextFrame")("Change Animation Axis").setValue(0);
                    try {
                        compLayers[l].parent.property("FX Multiline TextFrame").property("Multi Opening Direction").setValue(3);
                    } catch (err) {
                        try {
                            compLayers[l].parent.parent.property("FX Multiline TextFrame").property("Multi Opening Direction").setValue(3);
                            } catch (err) {}
                    }
                } else if (selectedAnim == 5) {
                    compLayers[l].effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    compLayers[l].effect("FX TextFrame")("Animation from Center").setValue(1);
                    compLayers[l].effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    compLayers[l].effect("FX TextFrame")("Change Animation Axis").setValue(1);
                    try {
                        compLayers[l].parent.property("FX Multiline TextFrame").property("Multi Opening Direction").setValue(5);
                    } catch (err) {
                        try {
                            compLayers[l].parent.parent.property("FX Multiline TextFrame").property("Multi Opening Direction").setValue(5);
                            } catch (err) {}
                    }
                } else if (selectedAnim == 4) {
                    compLayers[l].effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    compLayers[l].effect("FX TextFrame")("Animation from Center").setValue(0);
                    compLayers[l].effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    compLayers[l].effect("FX TextFrame")("Change Animation Axis").setValue(1);
                    try {
                        compLayers[l].parent.property("FX Multiline TextFrame").property("Multi Opening Direction").setValue(4);
                    } catch (err) {
                        try {
                            compLayers[l].parent.parent.property("FX Multiline TextFrame").property("Multi Opening Direction").setValue(4);
                            } catch (err) {}
                    }
                } else {
                    compLayers[l].effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    compLayers[l].effect("FX TextFrame")("Animation from Center").setValue(0);
                    compLayers[l].effect("FX TextFrame")("Flip Opening Direction").setValue(1);
                    compLayers[l].effect("FX TextFrame")("Change Animation Axis").setValue(1);
                    try {
                        compLayers[l].parent.property("FX Multiline TextFrame").property("Multi Opening Direction").setValue(6);
                    } catch (err) {
                        try {
                            compLayers[l].parent.parent.property("FX Multiline TextFrame").property("Multi Opening Direction").setValue(6);
                            } catch (err) {}
                    }
                }
            } catch (err) {}
        }
    }

    function changeFixDim(selectedFixedDim){
        var myComp = app.project.activeItem;
        var compLayers = myComp.selectedLayers;
        var myLayer = compLayers[0];

        for (var k = 0; k < compLayers.length; k++) {
            var numLine = k+1 ;
            try {
            if(selectedFixedDim == 0){
                compLayers[k].effect("FX TextFrame")("Frame Size X Based On Text").setValue(1);
                compLayers[k].effect("FX TextFrame")("Frame Size Y Based On Text").setValue(1);
            }else if(selectedFixedDim == 1){
                var myManualX = parseFloat(prompt("Please enter the desired Frame Size X (in pixels) for the line n° " + numLine + " :","500"));
                compLayers[k].effect("FX TextFrame")("Frame Size X Based On Text").setValue(0);
                compLayers[k].effect("FX TextFrame")("Frame Size Y Based On Text").setValue(1);
                compLayers[k].effect("FX TextFrame")("Frame Size X").setValue(myManualX);
                compLayers[k].effect("FX TextFrame")("Frame Margin X").setValue(0);
            }else if(selectedFixedDim == 2){
                var myManualY = parseFloat(prompt("Please enter the desired Frame Size Y (in pixels) for the line n° " + numLine + " :","250"));
                compLayers[k].effect("FX TextFrame")("Frame Size X Based On Text").setValue(1);
                compLayers[k].effect("FX TextFrame")("Frame Size Y Based On Text").setValue(0);
                compLayers[k].effect("FX TextFrame")("Frame Margin Y").setValue(0);
                compLayers[k].effect("FX TextFrame")("Frame Size Y").setValue(myManualY);
                try {
                    compLayers[k].parent.effect("FX Multiline TextFrame")("Multiline Frame Size Y").setValue(myManualY);
                    } catch (err) {
                        try {
                        compLayers[k].parent.parent.effect("FX Multiline TextFrame")("Multiline Frame Size Y").setValue(myManualY);
                            } catch (err) {}
                    }
            }else{
                var myManualDims = (prompt("Please enter the desired Frame Size X and Size Y, separated by a comma, for the line n° " + numLine + " :","500,250"));
                var myManualX = parseFloat(myManualDims.split(",")[0]);
                var myManualY = parseFloat(myManualDims.split(",")[1]);
                compLayers[k].effect("FX TextFrame")("Frame Size X Based On Text").setValue(0);
                compLayers[k].effect("FX TextFrame")("Frame Size Y Based On Text").setValue(0);
                compLayers[k].effect("FX TextFrame")("Frame Size X").setValue(myManualX);
                compLayers[k].effect("FX TextFrame")("Frame Size Y").setValue(myManualY);
                compLayers[k].effect("FX TextFrame")("Frame Margin X").setValue(0);
                compLayers[k].effect("FX TextFrame")("Frame Margin Y").setValue(0);
                try {
                    compLayers[k].parent.effect("FX Multiline TextFrame")("Multiline Frame Size Y").setValue(myManualY);
                    } catch (err) {
                        try {
                            compLayers[k].parent.parent.effect("FX Multiline TextFrame")("Multiline Frame Size Y").setValue(myManualY);
                            } catch (err) {}
                    }
                }
            }catch (err) {}
        }
    }

    function changeCompositing(selectedComposit){
        var myComp = app.project.activeItem;
        var compLayers = myComp.selectedLayers;
        var myLayer = compLayers[0];

        for (var m = 0; m < compLayers.length; m++) {
            try {
            if(selectedComposit == 0){
                if(compLayers[m] instanceof TextLayer){
                    compLayers[m].transform.opacity.expression = ['//FX Text Frame, created by Matthieu Fremeaux (aka FREMOX)','Math.ceil(effect("FX TextFrame")("Animation Keyframes")/100)*value'].join('\n');
                    compLayers[m].effect("FX Text Composite")("CC Composite-0003").setValue(1);
                    compLayers[m].effect("FX Text Composite")("CC Composite-0002").setValue(3);
                }else{
                    compLayers[m].parent.property("Effets").property("FX setFrameAsMatte").enabled = true ;
                    compLayers[m].moveAfter(compLayers[m].parent);
                }
            }else if(selectedComposit == 1){
                if(compLayers[m] instanceof TextLayer){
                    compLayers[m].transform.opacity.expression = "";
                    compLayers[m].effect("FX Text Composite")("CC Composite-0003").setValue(0);
                    compLayers[m].effect("FX Text Composite")("CC Composite-0002").setValue(3);
                }else{
                    compLayers[m].parent.property("Effets").property("FX setFrameAsMatte").enabled = false ;
                    compLayers[m].moveAfter(compLayers[m].parent);
                }
            }else if(selectedComposit == 2){
                if(compLayers[m] instanceof TextLayer){
                    compLayers[m].transform.opacity.expression = "";
                    compLayers[m].effect("FX Text Composite")("CC Composite-0003").setValue(0);
                    compLayers[m].effect("FX Text Composite")("CC Composite-0002").setValue(2);
                }else{
                    compLayers[m].parent.property("Effets").property("FX setFrameAsMatte").enabled = false ;
                    compLayers[m].moveBefore(compLayers[m].parent);
                }
            }else{
                if(compLayers[m] instanceof TextLayer){
                    compLayers[m].transform.opacity.expression = ['//FX Text Frame, created by Matthieu Fremeaux (aka FREMOX)','Math.ceil(effect("FX TextFrame")("Animation Keyframes")/100)*value'].join('\n');
                    compLayers[m].effect("FX Text Composite")("CC Composite-0003").setValue(1);
                    compLayers[m].effect("FX Text Composite")("CC Composite-0002").setValue(2);
                }else{
                    compLayers[m].parent.property("Effets").property("FX setFrameAsMatte").enabled = true ;
                    compLayers[m].moveBefore(compLayers[m].parent);
                }
            }
            }catch (err) {}
        }
    }

    function changeStrokeColor(strokeColor) {
        var myComp = app.project.activeItem;
        var compLayers = myComp.selectedLayers;
        var myLayer = compLayers[0];

        for (var l = 0; l < compLayers.length; l++) {
            try {
                compLayers[l].effect("FX TextFrame")("Frame Stroke Color").setValue(strokeColor);
            } catch (err) {}
        }

    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function singleTextFrameMask(cornerType, fillColor, strokeColor, selectedAnim, selectedFixedDim, selectedComposit) {

        var myComp = app.project.activeItem;
        var compLayers = myComp.selectedLayers;
        var touches = detect();

        var myListSelection = cornerType.index + 1;
        var selectedCorner = (cornerType.index + 6) % 5;
        var myList3Selection = selectedFixedDim.index;



        var presetPath = myAssetsPath + "/presets/FX_TextFrame_Mask3.ffx";
        var myPreset = File(presetPath);

        if (compLayers.length == 0) {

            var myTxtMaskLayer = myComp.layers.addText("FX TextFrame : Edit me !");
            myTxtMaskLayer.label = 11;
            myTxtMaskLayer.name = "FX TextFrame (Mask)";

            myTxtMaskLayer.applyPreset(myPreset);

            myTxtMaskLayer.effect("FX TextFrame")("Frame Fill Color").setValue(fillColor);
            myTxtMaskLayer.effect("FX TextFrame")("Frame Stroke Color").setValue(strokeColor);
            if (myListSelection == 5 || myListSelection == 10 || myListSelection == 15) {
                myTxtMaskLayer.effect("FX TextFrame")("Corners Shape").setValue(5);
            } else {
                myTxtMaskLayer.effect("FX TextFrame")("Corners Shape").setValue(selectedCorner);
            }
            if (myListSelection <= 5) {
                myTxtMaskLayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(100);
            } else if (myListSelection > 5 && myListSelection <= 10) {
                myTxtMaskLayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(100);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(100);
            } else {
                myTxtMaskLayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(100);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(0);
            }

                if (selectedAnim == 0) {
                    myTxtMaskLayer.effect("FX TextFrame")("Use Opening Animation").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 2) {
                    myTxtMaskLayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Animation from Center").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 1) {
                    myTxtMaskLayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 3){
                    myTxtMaskLayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Flip Opening Direction").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 5) {
                    myTxtMaskLayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Animation from Center").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Change Animation Axis").setValue(1);
                } else if (selectedAnim == 4) {
                    myTxtMaskLayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Change Animation Axis").setValue(1);
                } else {
                    myTxtMaskLayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Flip Opening Direction").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Change Animation Axis").setValue(1);
                }


            var txtProp = myTxtMaskLayer.text.sourceText ;
            var txtDoc = txtProp.value;
            /*if(selectedAnim == 1){
            txtDoc.justification = ParagraphJustification.LEFT_JUSTIFY;
            }else if(selectedAnim == 3){
            txtDoc.justification = ParagraphJustification.RIGHT_JUSTIFY;
            }else {*/
            txtDoc.justification = ParagraphJustification.CENTER_JUSTIFY;
            //}
            myTxtMaskLayer.text.sourceText.setValue(txtDoc);

            if(selectedFixedDim == 0){
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(1);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(1);
            }else if(selectedFixedDim == 1){
                var myManualX = parseFloat(prompt("Please enter the desired Frame Size X (in pixels) :","500"));
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(1);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X").setValue(myManualX);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Margin X").setValue(0);
            }else if(selectedFixedDim == 2){
                var myManualY = parseFloat(prompt("Please enter the desired Frame Size Y (in pixels) :","250"));
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(1);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y").setValue(myManualY);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Margin Y").setValue(0);
            }else{
                var myManualDims = (prompt("Please enter the desired Frame Size X and Size Y, separated by a comma :","500,250"));
                var myManualX = parseFloat(myManualDims.split(",")[0]);
                var myManualY = parseFloat(myManualDims.split(",")[1]);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X").setValue(myManualX);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y").setValue(myManualY);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Margin X").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Margin Y").setValue(0);
            }

            if(selectedComposit == 0){
                myTxtMaskLayer.transform.opacity.expression = ['//FX Text Frame, created by Matthieu Fremeaux (aka FREMOX)','Math.ceil(effect("FX TextFrame")("Animation Keyframes")/100)*value'].join('\n');
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0003").setValue(1);
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0002").setValue(3);
            }else if(selectedComposit == 1){
                myTxtMaskLayer.transform.opacity.expression = "";
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0003").setValue(0);
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0002").setValue(3);
            }else if(selectedComposit == 2){
                myTxtMaskLayer.transform.opacity.expression = "";
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0003").setValue(0);
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0002").setValue(2);
            }else{
                myTxtMaskLayer.transform.opacity.expression = ['//FX Text Frame, created by Matthieu Fremeaux (aka FREMOX)','Math.ceil(effect("FX TextFrame")("Animation Keyframes")/100)*value'].join('\n');
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0003").setValue(1);
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0002").setValue(2);
            }
            
            app.executeCommand(2004);
            myTxtMaskLayer.selected = false ;
            app.executeCommand(2004);


        } else if (compLayers.length == 1 && compLayers[0] instanceof TextLayer && compLayers[0].effect.property("FX TextFrame") === null) {

            var myTxtMaskLayer = compLayers[0];
            var textProp = myTxtMaskLayer.property("Source Text");
            var textDocument = textProp.value;
            myTxtMaskLayer.label = 11;

            myTxtMaskLayer.applyPreset(myPreset);

            myTxtMaskLayer.effect("FX TextFrame")("Frame Fill Color").setValue(fillColor);
            myTxtMaskLayer.effect("FX TextFrame")("Frame Stroke Color").setValue(strokeColor);

                        if (myListSelection == 5 || myListSelection == 10 || myListSelection == 15) {
                myTxtMaskLayer.effect("FX TextFrame")("Corners Shape").setValue(5);
            } else {
                myTxtMaskLayer.effect("FX TextFrame")("Corners Shape").setValue(selectedCorner);
            }
            if (myListSelection <= 5) {
                myTxtMaskLayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(100);
            } else if (myListSelection > 5 && myListSelection <= 10) {
                myTxtMaskLayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(100);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(100);
            } else {
                myTxtMaskLayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(100);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(0);
            }

                if (selectedAnim == 0) {
                    myTxtMaskLayer.effect("FX TextFrame")("Use Opening Animation").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 2) {
                    myTxtMaskLayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Animation from Center").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 1) {
                    myTxtMaskLayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 3){
                    myTxtMaskLayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Flip Opening Direction").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 5) {
                    myTxtMaskLayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Animation from Center").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Change Animation Axis").setValue(1);
                } else if (selectedAnim == 4) {
                    myTxtMaskLayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Change Animation Axis").setValue(1);
                } else {
                    myTxtMaskLayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myTxtMaskLayer.effect("FX TextFrame")("Flip Opening Direction").setValue(1);
                    myTxtMaskLayer.effect("FX TextFrame")("Change Animation Axis").setValue(1);
                }

            textProp.setValue(textDocument);
            myTxtMaskLayer.transform.opacity.expression = ['//FX Text Frame, created by Matthieu Fremeaux (aka FREMOX)','Math.ceil(effect("FX TextFrame")("Animation Keyframes")/100)*value'].join('\n');

            if(selectedFixedDim == 0){
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(1);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(1);
            }else if(selectedFixedDim == 1){
                var myManualX = parseFloat(prompt("Please enter the desired Frame Size X (in pixels) :","500"));
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(1);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X").setValue(myManualX);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Margin X").setValue(0);
            }else if(selectedFixedDim == 2){
                var myManualY = parseFloat(prompt("Please enter the desired Frame Size Y (in pixels) :","250"));
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(1);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y").setValue(myManualY);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Margin Y").setValue(0);
            }else{
                var myManualDims = (prompt("Please enter the desired Frame Size X and Size Y, separated by a comma :","500,250"));
                var myManualX = parseFloat(myManualDims.split(",")[0]);
                var myManualY = parseFloat(myManualDims.split(",")[1]);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X").setValue(myManualX);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y").setValue(myManualY);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Margin X").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Margin Y").setValue(0);
            }

            if(selectedComposit == 0){
                myTxtMaskLayer.transform.opacity.expression = ['//FX Text Frame, created by Matthieu Fremeaux (aka FREMOX)','Math.ceil(effect("FX TextFrame")("Animation Keyframes")/100)*value'].join('\n');
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0003").setValue(1);
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0002").setValue(3);
            }else if(selectedComposit == 1){
                myTxtMaskLayer.transform.opacity.expression = "";
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0003").setValue(0);
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0002").setValue(3);
            }else if(selectedComposit == 2){
                myTxtMaskLayer.transform.opacity.expression = "";
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0003").setValue(0);
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0002").setValue(2);
            }else{
                myTxtMaskLayer.transform.opacity.expression = ['//FX Text Frame, created by Matthieu Fremeaux (aka FREMOX)','Math.ceil(effect("FX TextFrame")("Animation Keyframes")/100)*value'].join('\n');
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0003").setValue(1);
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0002").setValue(2);
            }

            app.executeCommand(2004);
            myTxtMaskLayer.selected = false ;
            app.executeCommand(2004);

        } else {
            alert("Please select exactly 1 or 0 Text Layer that hasn't been created by FX Textframe before clicking this button !");
        }

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function singleTextFrameShape(cornerType, fillColor, strokeColor, selectedAnim, selectedFixedDim, selectedComposit) {
        var myComp = app.project.activeItem;
        var compLayers = myComp.selectedLayers;
        var touches = detect();

        var myListSelection = cornerType.index + 1;
        var selectedCorner = (cornerType.index + 6) % 5;

        var presetPath = myAssetsPath + "/presets/FX_TextFrame_Shape3.ffx";
        var myPreset = File(presetPath);

        if (compLayers.length == 0) {

            var myNewFXlayer = myComp.layers.addShape();
            myNewFXlayer.label = 8;
            myNewFXlayer.name = "FX TextFrame (Shape)";

            myNewFXlayer.applyPreset(myPreset);

            myNewFXlayer.effect("FX TextFrame")("Frame Fill Color").setValue(fillColor);
            myNewFXlayer.effect("FX TextFrame")("Frame Stroke Color").setValue(strokeColor);
            if (myListSelection == 5 || myListSelection == 10 || myListSelection == 15) {
                myNewFXlayer.effect("FX TextFrame")("Corners Shape").setValue(5);
            } else {
                myNewFXlayer.effect("FX TextFrame")("Corners Shape").setValue(selectedCorner);
            }
            if (myListSelection <= 5) {
                myNewFXlayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(100);
            } else if (myListSelection > 5 && myListSelection <= 10) {
                myNewFXlayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(100);
                myNewFXlayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(100);
            } else {
                myNewFXlayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(100);
                myNewFXlayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(0);
            }

                if (selectedAnim == 0) {
                    myNewFXlayer.effect("FX TextFrame")("Use Opening Animation").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 2) {
                    myNewFXlayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Animation from Center").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 1) {
                    myNewFXlayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 3){
                    myNewFXlayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Flip Opening Direction").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 5) {
                    myNewFXlayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Animation from Center").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Change Animation Axis").setValue(1);
                } else if (selectedAnim == 4) {
                    myNewFXlayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Change Animation Axis").setValue(1);
                } else {
                    myNewFXlayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Flip Opening Direction").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Change Animation Axis").setValue(1);
                }

            var myTxtMaskLayer = myComp.layers.addText("FX TextFrame : Edit me !");
            myTxtMaskLayer.name = "FX TextFrame : Edit me !";

            myNewFXlayer.parent = myTxtMaskLayer;

            var cacheAuto = myTxtMaskLayer.Effects.addProperty("ADBE Set Matte3");
            cacheAuto.name = "FX setFrameAsMatte";
            myTxtMaskLayer.property("ADBE Effect Parade").property("ADBE Set Matte3").property("ADBE Set Matte3-0001").setValue(myNewFXlayer.index);
            if (myListSelection <= 5) {
                myTxtMaskLayer.property("ADBE Effect Parade").property("ADBE Set Matte3").enabled = false;
            } else {
                myTxtMaskLayer.property("ADBE Effect Parade").property("ADBE Set Matte3").enabled = true;
            }

            var txtProp = myTxtMaskLayer.text.sourceText ;
            var txtDoc = txtProp.value;
            /*if(selectedAnim == 1){
            txtDoc.justification = ParagraphJustification.LEFT_JUSTIFY;
            }else if(selectedAnim == 3){
            txtDoc.justification = ParagraphJustification.RIGHT_JUSTIFY;
            }else {*/
            txtDoc.justification = ParagraphJustification.CENTER_JUSTIFY;
            //}
            myTxtMaskLayer.text.sourceText.setValue(txtDoc);

            myNewFXlayer.transform.opacity.expression = ['//FX Text Frame, created by Matthieu Fremeaux (aka FREMOX)','Math.ceil(effect("FX TextFrame")("Animation Keyframes")/100)*value'].join('\n');

            if(selectedFixedDim == 0){
                myNewFXlayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(1);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(1);
            }else if(selectedFixedDim == 1){
                var myManualX = parseFloat(prompt("Please enter the desired Frame Size X (in pixels) :","500"));
                myNewFXlayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(1);
                myNewFXlayer.effect("FX TextFrame")("Frame Size X").setValue(myManualX);
                myNewFXlayer.effect("FX TextFrame")("Frame Margin X").setValue(0);
            }else if(selectedFixedDim == 2){
                var myManualY = parseFloat(prompt("Please enter the desired Frame Size Y (in pixels) :","250"));
                myNewFXlayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(1);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y").setValue(myManualY);
                myNewFXlayer.effect("FX TextFrame")("Frame Margin Y").setValue(0);
            }else{
                var myManualDims = (prompt("Please enter the desired Frame Size X and Size Y, separated by a comma :","500,250"));
                var myManualX = parseFloat(myManualDims.split(",")[0]);
                var myManualY = parseFloat(myManualDims.split(",")[1]);
                myNewFXlayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Size X").setValue(myManualX);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y").setValue(myManualY);
                myNewFXlayer.effect("FX TextFrame")("Frame Margin X").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Margin Y").setValue(0);
            }

            if(selectedComposit == 0){
                myNewFXlayer.parent.property("Effets").property("FX setFrameAsMatte").enabled = true ;
                myNewFXlayer.moveAfter(myNewFXlayer.parent);
            }else if(selectedComposit == 1){
                myNewFXlayer.parent.property("Effets").property("FX setFrameAsMatte").enabled = false ;
                myNewFXlayer.moveAfter(myNewFXlayer.parent);
            }else if(selectedComposit == 2){
                myNewFXlayer.parent.property("Effets").property("FX setFrameAsMatte").enabled = false ;
                myNewFXlayer.moveBefore(myNewFXlayer.parent);
            }else{
                myNewFXlayer.parent.property("Effets").property("FX setFrameAsMatte").enabled = true ;
                myNewFXlayer.moveBefore(myNewFXlayer.parent);
            }

            app.executeCommand(2004);
            myTxtMaskLayer.selected = false ;
            myNewFXlayer.selected = false ;
            app.executeCommand(2004);

        } else if (compLayers.length == 1 && compLayers[0] instanceof TextLayer && compLayers[0].effect.property("FX TextFrame") === null && compLayers[0].effect.property("FX setFrameAsMatte") === null) {

            var myTxtLayer = compLayers[0];
            var textProp = myTxtLayer.property("Source Text");
            var textDocument = textProp.value;

            var myNewFXlayer = myComp.layers.addShape();
            myNewFXlayer.label = 8;
            myNewFXlayer.name = "FX TextFrame (Shape)";

            myNewFXlayer.moveAfter(myTxtLayer);

            myNewFXlayer.applyPreset(myPreset);
            myNewFXlayer.effect("FX TextFrame")("Frame Fill Color").setValue(fillColor);
            myNewFXlayer.effect("FX TextFrame")("Frame Stroke Color").setValue(strokeColor);
            if (myListSelection == 5 || myListSelection == 10 || myListSelection == 15) {
                myNewFXlayer.effect("FX TextFrame")("Corners Shape").setValue(5);
            } else {
                myNewFXlayer.effect("FX TextFrame")("Corners Shape").setValue(selectedCorner);
            }
            if (myListSelection <= 5) {
                myNewFXlayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(100);
            } else if (myListSelection > 5 && myListSelection <= 10) {
                myNewFXlayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(100);
                myNewFXlayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(100);
            } else {
                myNewFXlayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(100);
                myNewFXlayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(0);
            }

                if (selectedAnim == 0) {
                    myNewFXlayer.effect("FX TextFrame")("Use Opening Animation").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 2) {
                    myNewFXlayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Animation from Center").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 1) {
                    myNewFXlayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 3){
                    myNewFXlayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Flip Opening Direction").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                } else if (selectedAnim == 5) {
                    myNewFXlayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Animation from Center").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Change Animation Axis").setValue(1);
                } else if (selectedAnim == 4) {
                    myNewFXlayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Change Animation Axis").setValue(1);
                } else {
                    myNewFXlayer.effect("FX TextFrame")("Use Opening Animation").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                    myNewFXlayer.effect("FX TextFrame")("Flip Opening Direction").setValue(1);
                    myNewFXlayer.effect("FX TextFrame")("Change Animation Axis").setValue(1);
                }

            myNewFXlayer.parent = myTxtLayer;

            var cacheAuto = myTxtLayer.Effects.addProperty("ADBE Set Matte3");
            cacheAuto.name = "FX setFrameAsMatte"
            myTxtLayer.property("ADBE Effect Parade").property("ADBE Set Matte3").property("ADBE Set Matte3-0001").setValue(myNewFXlayer.index);
            myNewFXlayer.property("ADBE Transform Group").property("ADBE Position").setValue([0, 0]);

            textProp.setValue(textDocument);
            myNewFXlayer.transform.opacity.expression = ['//FX Text Frame, created by Matthieu Fremeaux (aka FREMOX)','Math.ceil(effect("FX TextFrame")("Animation Keyframes")/100)*value'].join('\n');

            if(selectedFixedDim == 0){
                myNewFXlayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(1);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(1);
            }else if(selectedFixedDim == 1){
                var myManualX = parseFloat(prompt("Please enter the desired Frame Size X (in pixels) :","500"));
                myNewFXlayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(1);
                myNewFXlayer.effect("FX TextFrame")("Frame Size X").setValue(myManualX);
                myNewFXlayer.effect("FX TextFrame")("Frame Margin X").setValue(0);
            }else if(selectedFixedDim == 2){
                var myManualY = parseFloat(prompt("Please enter the desired Frame Size Y (in pixels) :","250"));
                myNewFXlayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(1);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y").setValue(myManualY);
                myNewFXlayer.effect("FX TextFrame")("Frame Margin Y").setValue(0);
            }else{
                var myManualDims = (prompt("Please enter the desired Frame Size X and Size Y, separated by a comma :","500,250"));
                var myManualX = parseFloat(myManualDims.split(",")[0]);
                var myManualY = parseFloat(myManualDims.split(",")[1]);
                myNewFXlayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Size X").setValue(myManualX);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y").setValue(myManualY);
                myNewFXlayer.effect("FX TextFrame")("Frame Margin X").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Margin Y").setValue(0);
            }

            if(selectedComposit == 0){
                myNewFXlayer.parent.property("Effets").property("FX setFrameAsMatte").enabled = true ;
                myNewFXlayer.moveAfter(myNewFXlayer.parent);
            }else if(selectedComposit == 1){
                myNewFXlayer.parent.property("Effets").property("FX setFrameAsMatte").enabled = false ;
                myNewFXlayer.moveAfter(myNewFXlayer.parent);
            }else if(selectedComposit == 2){
                myNewFXlayer.parent.property("Effets").property("FX setFrameAsMatte").enabled = false ;
                myNewFXlayer.moveBefore(myNewFXlayer.parent);
            }else{
                myNewFXlayer.parent.property("Effets").property("FX setFrameAsMatte").enabled = true ;
                myNewFXlayer.moveBefore(myNewFXlayer.parent);
            }

            app.executeCommand(2004);
            myTxtMaskLayer.selected = false ;
            myNewFXlayer.selected = false ;
            app.executeCommand(2004);
        } else {
            alert("Please select exactly 1 or 0 Text Layer that hasn't been created by FX Textframe before clicking this button !");
        }

    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////// 

    function lower3rdRig(cornerType, fillColor, strokeColor, selectedAnim, selectedFixedDim, selectedComposit) {

        var win = new Window("dialog");
        var maingroup = win.add("panel {orientation: 'column'}");
        add_row(maingroup);
        var create_btn = win.add("button", undefined, "Create multiline FX TextFrame setup");

        create_btn.onClick = function () {

            var myComp = app.project.activeItem;
            var compLayers = myComp.selectedLayers;
            var touches = detect();

            var presetPath2 = myAssetsPath + "/presets/FX_MultiLine_TextFrame2.ffx";
            var myPreset2 = File(presetPath2);

            var myListSelection = cornerType.index + 1;
            var selectedCorner = (cornerType.index + 6) % 5;

            var myRigCTRLLayer = myComp.layers.addNull();
            myRigCTRLLayer.name = "CTRL FX TextFrame";
            myRigCTRLLayer.applyPreset(myPreset2);
            myRigCTRLLayer.effect("FX Multiline TextFrame")("Force Multi Opening Direction").setValue(1);

            if (toggleMode.value == true) {

                var presetPath = myAssetsPath + "/presets/FX_multiTextFrame_Mask3.ffx";
                var myPreset = File(presetPath);


                for (var n = 0; n < maingroup.children.length; n++) {

                    var myTxtMaskLayer = myComp.layers.addText("Edit me !");
                    myTxtMaskLayer.name = "FX TextFrame - Line " + (n + 1).toString();
                    myTxtMaskLayer.label = 11;

                    myRigCTRLLayer.moveToBeginning();

                    var layerFX = myRigCTRLLayer.Effects.addProperty("ADBE Layer Control");
                    layerFX.name = "FX TextFrame - Line " + (n + 1).toString();
                    myRigCTRLLayer.effect("FX TextFrame - Line " + (n + 1).toString()).moveTo(1);
                    myRigCTRLLayer.effect("FX TextFrame - Line " + (n + 1).toString())(1).setValue(myTxtMaskLayer.index);

                    myTxtMaskLayer.parent = myRigCTRLLayer;

                    myTxtMaskLayer.applyPreset(myPreset);

                    myTxtMaskLayer.effect("FX TextFrame")("Frame Fill Color").setValue(fillColor);
                    myTxtMaskLayer.effect("FX TextFrame")("Frame Stroke Color").setValue(strokeColor);
                    if (myListSelection == 5 || myListSelection == 10 || myListSelection == 15) {
                        myTxtMaskLayer.effect("FX TextFrame")("Corners Shape").setValue(5);
                    } else {
                        myTxtMaskLayer.effect("FX TextFrame")("Corners Shape").setValue(selectedCorner);
                    }
                    if (myListSelection <= 5) {
                        myTxtMaskLayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(0);
                        myTxtMaskLayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(100);
                    } else if (myListSelection > 5 && myListSelection <= 10) {
                        myTxtMaskLayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(100);
                        myTxtMaskLayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(100);
                    } else {
                        myTxtMaskLayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(100);
                        myTxtMaskLayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(0);
                    }

                    myTxtMaskLayer.effect("FX TextFrame - Line ID")(1).setValue(n + 1);

                    if (selectedAnim == 0) {
                        myTxtMaskLayer.effect("FX TextFrame")("Use Opening Animation").setValue(0);
                        myTxtMaskLayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                        myTxtMaskLayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                        myTxtMaskLayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                    } else if (selectedAnim == 2) {
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Text Lines Alignement").setValue(2);
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Multi Opening Direction").setValue(2);
                    } else if (selectedAnim == 1) {
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Text Lines Alignement").setValue(1);
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Multi Opening Direction").setValue(1);
                    } else if (selectedAnim == 3){
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Text Lines Alignement").setValue(3);
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Multi Opening Direction").setValue(3);
                    } else if (selectedAnim == 5) {
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Text Lines Alignement").setValue(2);
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Multi Opening Direction").setValue(5);
                    } else if (selectedAnim == 4) {
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Text Lines Alignement").setValue(2);
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Multi Opening Direction").setValue(4);
                    } else {
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Text Lines Alignement").setValue(2);
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Multi Opening Direction").setValue(6);
                    }

                    var myTextSource = maingroup.children[n].edit.text;
                    injectInfosRig(myTxtMaskLayer, myTextSource);
                    myTxtMaskLayer.transform.opacity.expression = ['//FX Text Frame, created by Matthieu Fremeaux (aka FREMOX)','Math.ceil(effect("FX TextFrame")("Animation Keyframes")/100)*value'].join('\n');

                    var txtProp = myTxtMaskLayer.text.sourceText ;
                    var txtDoc = txtProp.value;
                    txtDoc.justification = ParagraphJustification.CENTER_JUSTIFY;
                    myTxtMaskLayer.text.sourceText.setValue(txtDoc);

                    
            if(selectedFixedDim == 0){
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(1);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(1);
            }else if(selectedFixedDim == 1){
                var myManualX = parseFloat(prompt("Please enter the desired Frame Size X (in pixels) :","500"));
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(1);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X").setValue(myManualX);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Margin X").setValue(0);
            }else if(selectedFixedDim == 2){
                var myManualY = parseFloat(prompt("Please enter the desired Frame Size Y (in pixels) :","250"));
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(1);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Margin Y").setValue(0);
                myRigCTRLLayer.effect("FX Multiline TextFrame")("Multiline Frame Size Y").setValue(myManualY);

            }else{
                var myManualDims = (prompt("Please enter the desired Frame Size X and Size Y, separated by a comma :","500,250"));
                var myManualX = parseFloat(myManualDims.split(",")[0]);
                var myManualY = parseFloat(myManualDims.split(",")[1]);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Size X").setValue(myManualX);
                myRigCTRLLayer.effect("FX Multiline TextFrame")("Multiline Frame Size Y").setValue(myManualY);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Margin X").setValue(0);
                myTxtMaskLayer.effect("FX TextFrame")("Frame Margin Y").setValue(0);
            }

            if(selectedComposit == 0){
                myTxtMaskLayer.transform.opacity.expression = ['//FX Text Frame, created by Matthieu Fremeaux (aka FREMOX)','Math.ceil(effect("FX TextFrame")("Animation Keyframes")/100)*value'].join('\n');
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0003").setValue(1);
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0002").setValue(3);
            }else if(selectedComposit == 1){
                myTxtMaskLayer.transform.opacity.expression = "";
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0003").setValue(0);
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0002").setValue(3);
            }else if(selectedComposit == 2){
                myTxtMaskLayer.transform.opacity.expression = "";
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0003").setValue(0);
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0002").setValue(2);
            }else{
                myTxtMaskLayer.transform.opacity.expression = ['//FX Text Frame, created by Matthieu Fremeaux (aka FREMOX)','Math.ceil(effect("FX TextFrame")("Animation Keyframes")/100)*value'].join('\n');
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0003").setValue(1);
                myTxtMaskLayer.effect("FX Text Composite")("CC Composite-0002").setValue(2);
            }

                    app.executeCommand(2004);
                    myTxtMaskLayer.selected = false ;
                    myTxtMaskLayer.selected = false ;
                }

            } else {


                var presetPath3 = myAssetsPath + "/presets/FX_multiTextFrame_ShapeShape3.ffx";
                var myPreset3 = File(presetPath3);
                var presetPath4 = myAssetsPath + "/presets/FX_multiTextFrame_ShapeText.ffx";
                var myPreset4 = File(presetPath4);

                for (var n = 0; n < maingroup.children.length; n++) {

                    var myNewFXlayer = myComp.layers.addShape();
                    myNewFXlayer.label = 8;
                    myNewFXlayer.name = "FX TextFrame - Bloc " + (n + 1).toString();

                    myNewFXlayer.applyPreset(myPreset3);

                    var myTxtMaskLayer = myComp.layers.addText("Edit me !");
                    myTxtMaskLayer.name = "FX TextFrame - Line " + (n + 1).toString();

                    myNewFXlayer.parent = myTxtMaskLayer;

                    var cacheAuto = myTxtMaskLayer.Effects.addProperty("ADBE Set Matte3");
                    cacheAuto.name = "FX setFrameAsMatte";
                    myTxtMaskLayer.property("ADBE Effect Parade").property("ADBE Set Matte3").property("ADBE Set Matte3-0001").setValue(myNewFXlayer.index);
                    if (myListSelection <= 5) {
                        myTxtMaskLayer.property("ADBE Effect Parade").property("ADBE Set Matte3").enabled = false;
                    } else {
                        myTxtMaskLayer.property("ADBE Effect Parade").property("ADBE Set Matte3").enabled = true;
                    }


                    myRigCTRLLayer.moveToBeginning();
                    myTxtMaskLayer.applyPreset(myPreset4);

                    var layerFX = myRigCTRLLayer.Effects.addProperty("ADBE Layer Control");
                    layerFX.name = "FX TextFrame - Line " + (n + 1).toString();
                    myRigCTRLLayer.effect("FX TextFrame - Line " + (n + 1).toString()).moveTo(1);
                    myRigCTRLLayer.effect("FX TextFrame - Line " + (n + 1).toString())(1).setValue(myNewFXlayer.index);

                    myTxtMaskLayer.parent = myRigCTRLLayer;


                    myNewFXlayer.effect("FX TextFrame")("Frame Fill Color").setValue(fillColor);
                    myNewFXlayer.effect("FX TextFrame")("Frame Stroke Color").setValue(strokeColor);
                    if (myListSelection == 5 || myListSelection == 10 || myListSelection == 15) {
                        myNewFXlayer.effect("FX TextFrame")("Corners Shape").setValue(5);
                    } else {
                        myNewFXlayer.effect("FX TextFrame")("Corners Shape").setValue(selectedCorner);
                    }
                    if (myListSelection <= 5) {
                        myNewFXlayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(0);
                        myNewFXlayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(100);
                    } else if (myListSelection > 5 && myListSelection <= 10) {
                        myNewFXlayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(100);
                        myNewFXlayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(100);
                    } else {
                        myNewFXlayer.effect("FX TextFrame")("Frame Fill Opacity").setValue(100);
                        myNewFXlayer.effect("FX TextFrame")("Frame Stroke Opacity").setValue(0);
                    }

                    myNewFXlayer.effect("FX TextFrame - Line ID")(1).setValue(n + 1)

                    if (selectedAnim == 0) {
                        myNewFXlayer.effect("FX TextFrame")("Use Opening Animation").setValue(0);
                        myNewFXlayer.effect("FX TextFrame")("Animation from Center").setValue(0);
                        myNewFXlayer.effect("FX TextFrame")("Flip Opening Direction").setValue(0);
                        myNewFXlayer.effect("FX TextFrame")("Change Animation Axis").setValue(0);
                    } else if (selectedAnim == 2) {
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Text Lines Alignement").setValue(2);
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Multi Opening Direction").setValue(2);
                    } else if (selectedAnim == 1) {
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Text Lines Alignement").setValue(1);
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Multi Opening Direction").setValue(1);
                    } else if (selectedAnim == 3){
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Text Lines Alignement").setValue(3);
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Multi Opening Direction").setValue(3);
                    } else if (selectedAnim == 5) {
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Text Lines Alignement").setValue(2);
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Multi Opening Direction").setValue(5);
                    } else if (selectedAnim == 4) {
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Text Lines Alignement").setValue(2);
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Multi Opening Direction").setValue(4);
                    } else {
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Text Lines Alignement").setValue(2);
                        myRigCTRLLayer.effect("FX Multiline TextFrame")("Multi Opening Direction").setValue(6);
                    }

                    var myTextSource = maingroup.children[n].edit.text;
                    injectInfosRig(myNewFXlayer, myTextSource);
                    myNewFXlayer.transform.opacity.expression = ['//FX Text Frame, created by Matthieu Fremeaux (aka FREMOX)','Math.ceil(effect("FX TextFrame")("Animation Keyframes")/100)*value'].join('\n');

                    var txtProp = myTxtMaskLayer.text.sourceText ;
                    var txtDoc = txtProp.value;
                    txtDoc.justification = ParagraphJustification.CENTER_JUSTIFY;
                    myTxtMaskLayer.text.sourceText.setValue(txtDoc);

            if(selectedFixedDim == 0){
                myNewFXlayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(1);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(1);
            }else if(selectedFixedDim == 1){
                var myManualX = parseFloat(prompt("Please enter the desired Frame Size X (in pixels) :","500"));
                myNewFXlayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(1);
                myNewFXlayer.effect("FX TextFrame")("Frame Size X").setValue(myManualX);
                myNewFXlayer.effect("FX TextFrame")("Frame Margin X").setValue(0);
            }else if(selectedFixedDim == 2){
                var myManualY = parseFloat(prompt("Please enter the desired Frame Size Y (in pixels) :","250"));
                myNewFXlayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(1);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Margin Y").setValue(0);
                myRigCTRLLayer.effect("FX Multiline TextFrame")("Multiline Frame Size Y").setValue(myManualY);

            }else{
                var myManualDims = (prompt("Please enter the desired Frame Size X and Size Y, separated by a comma :","500,250"));
                var myManualX = parseFloat(myManualDims.split(",")[0]);
                var myManualY = parseFloat(myManualDims.split(",")[1]);
                myNewFXlayer.effect("FX TextFrame")("Frame Size X Based On Text").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Size Y Based On Text").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Size X").setValue(myManualX);
                myRigCTRLLayer.effect("FX Multiline TextFrame")("Multiline Frame Size Y").setValue(myManualY);
                myNewFXlayer.effect("FX TextFrame")("Frame Margin X").setValue(0);
                myNewFXlayer.effect("FX TextFrame")("Frame Margin Y").setValue(0);
            }

            if(selectedComposit == 0){
                myNewFXlayer.parent.property("Effets").property("FX setFrameAsMatte").enabled = true ;
                myNewFXlayer.moveAfter(myNewFXlayer.parent);
            }else if(selectedComposit == 1){
                myNewFXlayer.parent.property("Effets").property("FX setFrameAsMatte").enabled = false ;
                myNewFXlayer.moveAfter(myNewFXlayer.parent);
            }else if(selectedComposit == 2){
                myNewFXlayer.parent.property("Effets").property("FX setFrameAsMatte").enabled = false ;
                myNewFXlayer.moveBefore(myNewFXlayer.parent);
            }else{
                myNewFXlayer.parent.property("Effets").property("FX setFrameAsMatte").enabled = true ;
                myNewFXlayer.moveBefore(myNewFXlayer.parent);
            }

                    app.executeCommand(2004);
                    myTxtMaskLayer.selected = false ;
                    myNewFXlayer.selected = false ;
                    myRigCTRLLayer.selected = false ;
                }

            }
            win.close();
        }

        //////////////////////////////////////

        win.show();

        function add_row(maingroup) {
            var group = maingroup.add("group");
            group.edit = group.add("edittext", ["", "", 200, 20], "Edit this text n°" + maingroup.children.length);
            group.plus = group.add("button", undefined, "+");
            group.plus.onClick = add_btn;
            group.minus = group.add("button", undefined, "-");
            group.minus.onClick = minus_btn;
            group.index = maingroup.children.length - 1;
            win.layout.layout(true);
        }

        function add_btn() {
            add_row(maingroup);
        }

        function minus_btn() {
            if (maingroup.children.length <= 1) {
                alert("You can't remove a single line !\nThis tool as been designed to create a multiline text setup, so please keep at least one line or add some other lines with the + button.")
            } else {
                maingroup.remove(this.parent);
                win.layout.layout(true);
            }
        }
    }

    function magicSelect(){
        var myComp = app.project.activeItem;
        var compLayers = myComp.selectedLayers;
        var myLayer = compLayers[0];
        if(compLayers.length == 1 && compLayers[0].effect.property("FX Multiline TextFrame") !== null){
            var iD = myLayer.effect("FX Multiline TextFrame").propertyIndex;
            for(var m = iD-1 ; m >=1 ; m--){
                var childId = myLayer.effect(m)("ADBE Layer Control-0001").value ;
                myComp.layer(childId).selected = true ;
            }
                compLayers[0].selected = false ;
                myLayer.selected = false ;
            }else{
                alert("Please select one CTRL FX TextFrame l layer before clicking this button !")
            }
    }

    function bakePath() {

        var myComp = app.project.activeItem;
        var compLayers = myComp.selectedLayers;

        for (var m = 0; m <= compLayers.length; m++) {

            if (compLayers[m].effect.property("FX TextFrame") === null) {
                alert("The layer " + compLayers[m].name + " is not a valid FX TextFrame layer with a path so it can't be baked !");
                continue
            }
            var prop1;
            var prop2;
            var prop3Val;
            var initDur = compLayers[m].outPoint ;
            var numK ;
            var lastKtime;

            if (compLayers[m].effect("FX TextFrame")("Animation Keyframes").numKeys != 0) {
                prop1 = compLayers[m].effect("FX TextFrame")("Animation Keyframes");
                numK = prop1.numKeys;
                lastKtime = prop1.keyTime(numK);
                prop3Val = 0;

            } else {
                try {
                    prop1 = compLayers[m].parent.effect("FX Multiline TextFrame")("Animation Keyframes (1rst Line)");
                } catch (e) {
                    prop1 = compLayers[m].parent.parent.effect("FX Multiline TextFrame")("Animation Keyframes (1rst Line)");
                }
                numK = prop1.numKeys;
                lastKtime = prop1.keyTime(numK);


                try {
                    prop3Val = compLayers[m].parent.effect("FX Multiline TextFrame")("Animation Offset (other Lines)").value;
                } catch (e) {
                    prop3Val = compLayers[m].parent.parent.effect("FX Multiline TextFrame")("Animation Offset (other Lines)").value;
                }
            }
            try {
                if(compLayers[m].parent !== null && compLayers[m].parent.effect.property("FX Multiline TextFrame") !== null){
                        compLayers[m].parent.effect("FX Multiline TextFrame")("Animation Offset (other Lines)").setValue(0);
                }
                if(compLayers[m].parent.parent !== null && compLayers[m].parent.parent.effect.property("FX Multiline TextFrame") !== null){

                        compLayers[m].parent.parent.effect("FX Multiline TextFrame")("Animation Offset (other Lines)").setValue(0);
                }
            }catch (e) {
            }

            try {
                prop2 = compLayers[m].property("ADBE Mask Parade").property("FX TextFrame Mask").property("ADBE Mask Shape");
                
            } catch (e) {
                prop2 = compLayers[m].property("ADBE Root Vectors Group").property("FX TextFrame").property("ADBE Vectors Group").property("FX Frame path").property("ADBE Vector Shape");
            }

            if (prop2.expression.substr(0, 15) != "//FX Text Frame") {
                alert("The path property of the layer " + compLayers[m].name + " can't be un-baked because you applied an other expression to it !");
                continue
            }

            if (prop2.numKeys == 0 && prop2.expressionEnabled) {

                compLayers[m].outPoint = lastKtime+myComp.frameDuration ;

                prop2.selected = true;
                app.executeCommand(2639);

                if (prop2 instanceof Property) {
                    var totalFrames, dur, F, K, fDur, F, keyFrames;
                    dur = myComp.duration;
                    fDur = myComp.frameDuration;
                    totalFrames = dur / fDur;
                    keyFrames = new Array();

                    for (K = 1; K <= prop1.numKeys; K++) {
                        keyFrames.push(prop1.keyTime(K));
                    }
                    for (F = prop2.numKeys; F > 0; F--) {
                        T = F * fDur;
                        if (keyFrames.indexOf(prop2.keyTime(F)) != -1) {
                            continue;
                        } else {
                            prop2.removeKey(F);
                        }
                    }

                    for (L = prop1.numKeys; L > 0; L--) {
                        if (prop1.keyInInterpolationType(L) == KeyframeInterpolationType.BEZIER && prop1.keyOutInterpolationType(L) == KeyframeInterpolationType.BEZIER) {
                            prop2.setTemporalEaseAtKey(L, prop1.keyInTemporalEase(L), prop1.keyOutTemporalEase(L));
                        } else if (prop1.keyInInterpolationType(L) == KeyframeInterpolationType.HOLD && prop1.keyOutInterpolationType(L) == KeyframeInterpolationType.HOLD) {
                            prop2.setInterpolationTypeAtKey(L, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
                        } else if (prop1.keyInInterpolationType(L) != KeyframeInterpolationType.HOLD && prop1.keyOutInterpolationType(L) == KeyframeInterpolationType.HOLD) {
                            prop2.setInterpolationTypeAtKey(L, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.HOLD);
                        } else if (prop1.keyInInterpolationType(L) == KeyframeInterpolationType.HOLD && prop1.keyOutInterpolationType(L) == KeyframeInterpolationType.BEZIER) {
                            prop2.setInterpolationTypeAtKey(L, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.BEZIER);
                        } else {
                            prop2.setInterpolationTypeAtKey(L, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
                        }
                    }
                }

                compLayers[m].outPoint = initDur ;

                if(compLayers[m].parent !== null && compLayers[m].parent.effect.property("FX Multiline TextFrame") !== null){
                        compLayers[m].parent.effect("FX Multiline TextFrame")("Animation Offset (other Lines)").setValue(prop3Val);
                        compLayers[m].startTime += compLayers[m].startTime + prop3Val * m;
                        compLayers[m].inPoint = compLayers[m].parent.inPoint;
                }
                if(compLayers[m].parent.parent !== null && compLayers[m].parent.parent.effect.property("FX Multiline TextFrame") !== null){
                        compLayers[m].parent.parent.effect("FX Multiline TextFrame")("Animation Offset (other Lines)").setValue(prop3Val);
                        compLayers[m].startTime += compLayers[m].startTime + prop3Val * m;
                        compLayers[m].inPoint = compLayers[m].parent.parent.inPoint;
                }

            } else {
                while (prop2.numKeys > 0) {
                    prop2.removeKey(1);
                }
                prop2.expressionEnabled = true;
                try {
                    compLayers[m].startTime = compLayers[m].parent.startTime;
                    compLayers[m].inPoint = compLayers[m].parent.inPoint;
                } catch (e) {
                    compLayers[m].startTime = compLayers[m].parent.parent.startTime;
                    compLayers[m].inPoint = compLayers[m].parent.parent.inPoint;
                }
                try {
                    compLayers[m].parent.effect("FX Multiline TextFrame")("Animation Offset (other Lines)").setValue(prop3Val);
                }catch (e){
                    compLayers[m].parent.parent.effect("FX Multiline TextFrame")("Animation Offset (other Lines)").setValue(prop3Val);
                }
            }
        }
    }

    function addNewLine() {

        var myComp = app.project.activeItem;
        var compLayers = myComp.selectedLayers;
        var myCTRLLayer = compLayers[0];

        if (compLayers.length == 1 && myCTRLLayer.nullLayer && myCTRLLayer.effect.property("FX Multiline TextFrame") !== null) {

            var N = myCTRLLayer.effect.property("FX Multiline TextFrame").propertyIndex;
            var I = myCTRLLayer.effect(1)(1).value;

            if (myComp.layer(I) instanceof TextLayer) {

                myComp.layer(I).selected = true;

                var L = myComp.layer(I).duplicate();

                var layerFX = myCTRLLayer.Effects.addProperty("ADBE Layer Control");
                layerFX.name = "FX TextFrame - Line " + (N).toString();
                myCTRLLayer.effect("FX TextFrame - Line " + (N).toString()).moveTo(1);
                myCTRLLayer.effect("FX TextFrame - Line " + (N).toString())(1).setValue(L.index);

                L.effect("FX TextFrame - Line ID")(1).setValue(N);
                L.text.sourceText.setValue(prompt("Type the source text for this new line here", "Replace this text !"));

                app.executeCommand(2004); //deselect All

            } else {

                myComp.layer(I).selected = true;
                var L = myComp.layer(I).duplicate();
                app.executeCommand(2004); //deselect All  


                var P = myComp.layer(I).parent;
                P.parent.selected = true;
                var L2 = P.duplicate();
                app.executeCommand(2004); //deselect All    

                L.selected = true;
                L2.selected = true;

                L.parent = L2;
                L.moveAfter(L2);
                L2.property("ADBE Effect Parade").property("ADBE Set Matte3").property("ADBE Set Matte3-0001").setValue(L.index)

                var layerFX = myCTRLLayer.Effects.addProperty("ADBE Layer Control");
                layerFX.name = "FX TextFrame - Line " + (N).toString();
                myCTRLLayer.effect("FX TextFrame - Line " + (N).toString()).moveTo(1);
                myCTRLLayer.effect("FX TextFrame - Line " + (N).toString())(1).setValue(L.index);

                L.effect("FX TextFrame - Line ID")(1).setValue(N);
                L2.text.sourceText.setValue(prompt("Type the source text for this new line here", "Replace this text !"));

                app.executeCommand(2004); //deselect All  

            }

        } else {
            alert("In order to add a new line, you have to select a valid CTRL FX TextFrame null layer !");
        }
    }

    function removeSeLine() {

        var myComp = app.project.activeItem;
        var compLayers = myComp.selectedLayers;
        var myCTRLLayer = compLayers[0];

        if (compLayers.length == 1 && myCTRLLayer.nullLayer && myCTRLLayer.effect.property("FX Multiline TextFrame") !== null) {

            var I = myCTRLLayer.effect(1)(1).value;

            if (myComp.layer(I) instanceof TextLayer) {

                if (myCTRLLayer.effect(1).name != "FX TextFrame - Line 1") {
                    myComp.layer(I).remove();
                    myCTRLLayer.effect(1).remove();
                } else {
                    alert("You can't use the remove tool with a FX Multiline TextFrame rig that contains only 1 single line !")
                }

                //app.executeCommand(2004); //deselect All

            } else {

                if (myCTRLLayer.effect(1).name != "FX TextFrame - Line 1") {
                    var P = myComp.layer(I).parent;
                    myComp.layer(I).remove();
                    P.remove();

                    myCTRLLayer.effect(1).remove();

                } else {
                    alert("You can't use the remove tool with a FX Multiline TextFrame rig that contains only 1 single line !")
                }

                //app.executeCommand(2004); //deselect All  

            }

        } else {
            alert("In order to remove an existing line, you have to select a valid CTRL FX TextFrame null layer !");
        }


    }

    function infos(singleTab) {

        // FXINFOS
        // =======
        var FXinfos = new Window("dialog"); 
            FXinfos.text = "FX TextFrame - version " + version; 
            FXinfos.preferredSize.width = 800; 
            FXinfos.preferredSize.height = 600; 
            FXinfos.orientation = "column"; 
            FXinfos.alignChildren = ["center","top"]; 
            FXinfos.spacing = 20; 
            //FXinfos.margins = 24; 

        var statictext1 = FXinfos.add("group"); 
            statictext1.orientation = "column"; 
            statictext1.alignChildren = ["fill","top"]; 
            statictext1.spacing = 0; 

            FXinfos.add("statictext", undefined,
             "Created by Matthieu Fremeaux (aka Fremox) © 2020. For any support or feedback, please contact me at : matthieu.fremox@gmail.com",
            {name: "statictext1", justify: "center"}); 

        var statictext2 = FXinfos.add("group"); 
            statictext2.orientation = "column"; 
            statictext2.spacing = 0; 
            statictext2.alignment = ["fill","top"]; 

            statictext2.add("edittext", [0, 0, 640, 100], "FX TextFrame is a feature rich tool that helps you create, customize and animate auto-resizing text blocks (called \u0022Frames\u0022) quickly and easily, with the help of a compact, well designed UI Panel, and a dedicated Pseudo-effect.\nThis is also the only tool that allows you to create such auto-resizing rectangles for Multi Line setups (paragraphs, lists...) !\nTo do so, just click on the \u0022Multi Line\u0022 tab at the top of the UI Panel (differences between both tabs are explained below).\nPlease keep in mind that, depending of your needs, choosing between Single and Multi Line should be the very first thing you consider, because you won't be able to change the Lines behavior afterwhile !", {name: "statictext2", multiline: true, scrolling: false}); 

        // TPANEL1
        // =======
        var tpanel1 = FXinfos.add("tabbedpanel", undefined, undefined, {name: "tpanel1"}); 
            tpanel1.alignChildren = "fill"; 
            tpanel1.margins = 0; 

        // SINGLELINEGRP
        // =============
        var SingleLineGrp = tpanel1.add("tab", undefined, undefined, {name: "SingleLineGrp"}); 
            SingleLineGrp.text = "Single Line"; 
            SingleLineGrp.orientation = "column"; 
            SingleLineGrp.alignChildren = ["fill","top"]; 
            SingleLineGrp.spacing = 24; 
            SingleLineGrp.margins = 16; 

        var SingleSubGrp1 = SingleLineGrp.add("group"); 
            SingleSubGrp1.orientation = "column"; 
            SingleSubGrp1.alignChildren = ["center","top"]; 
            SingleSubGrp1.spacing = 0; 

            SingleSubGrp1.add("statictext", undefined, "By selecting the Single Line tab, you'll create only one single text layer once the button \u0022Create single FX TextFrame line\u0022 will be clicked.", {multiline: false}); 
            SingleSubGrp1.add("statictext", undefined, "Depending of the first Toggle Icon Option called \u0022Toggle Mask/Shape mode\u0022 (1), you'll end up with just this single text layer ", {multiline: false}); 
            SingleSubGrp1.add("statictext", undefined, "with a mask onto it (if the yellow \u0022Mask mode\u0022 icon with a M is the one selected), or with a text layer PLUS a shape layer parented to it ", {multiline: false}); 
            SingleSubGrp1.add("statictext", undefined, "(if the blue \u0022Shape mode\u0022 icon with a star is the selected one).", {multiline: false});             


        var image1 = SingleLineGrp.add("image", undefined, File(myAssetsPath + "/icons/info_images/UI_info_1.png"), {name: "image1"}); 

        var SingleSubGrp2 = SingleLineGrp.add("group"); 
            SingleSubGrp2.orientation = "column"; 
            SingleSubGrp2.alignChildren = ["center","top"]; 
            SingleSubGrp2.spacing = 0; 

            SingleSubGrp2.add("statictext", undefined, "Clicking the \u0022Create single FX TextFrame line\u0022 will create a new FX TextFrame line, based on the options you've set up with these icons.", {multiline: false}); 
            
            SingleSubGrp2.add("statictext", undefined, "", {multiline: false}); 

            SingleSubGrp2.add("statictext", undefined, "Please note that - instead of creating a new perfectly centered editable text layer - you can also select an existing one in the active composition,", {multiline: false}); 
            SingleSubGrp2.add("statictext", undefined, "and click on the \u0022Create single TextFrame line\u0022 button in order to apply the FX TextFrame onto it.", {multiline: false}); 

            SingleSubGrp2.add("statictext", undefined, "", {multiline: false}); 

            SingleSubGrp2.add("statictext", undefined, "Please refer to the next \u0022Multi Line\u0022 tab in order to understand the \u0022Bake path on selected FX TextFrame\u0022 last button.", {multiline: false}); 


        // MULTILINEGRP
        // ============
        var MultiLineGrp = tpanel1.add("tab", undefined, undefined, {name: "MultiLineGrp"}); 
            MultiLineGrp.text = "Multi Line"; 
            MultiLineGrp.orientation = "column"; 
            MultiLineGrp.alignChildren = ["fill","top"]; 
            MultiLineGrp.spacing = 24; 
            MultiLineGrp.margins = 16; 

        var MultiSubGrp1 = MultiLineGrp.add("group"); 
            MultiSubGrp1.orientation = "column"; 
            MultiSubGrp1.alignChildren = ["center","top"]; 
            MultiSubGrp1.spacing = 0; 

            MultiSubGrp1.add("statictext", undefined, "The 6 buttons/dropdown lists' icons explained in the \u0022Single Line\u0022 tab, remain and behave identically in the Multi Line tab.", {multiline: false}); 
            MultiSubGrp1.add("statictext", undefined, "But with Multi Line selected, all the lines created after having set up the Multi Line FX TextFrame rig with the corresponding button (1),", {multiline: false}); 
            MultiSubGrp1.add("statictext", undefined, "will be parented to a new \u0022CTRL FX TextFrame\u0022 Null layer, with a dedicated effect called \u0022FX Multiline TextFrame\u0022 onto it,", {multiline: false}); 
            MultiSubGrp1.add("statictext", undefined, "where you can adjust various paragraph aspects : Lines Alignement, Lines Spacing... and the Lines Animation : Time Offset, Direction...", {multiline: false});


        var image2 = MultiLineGrp.add("image", undefined, File(myAssetsPath + "/icons/info_images/UI_info_2.png"), {name: "image1"});

        var MultiSubGrp2 = MultiLineGrp.add("group"); 
            MultiSubGrp2.orientation = "column"; 
            MultiSubGrp2.alignChildren = ["center","top"]; 
            MultiSubGrp2.spacing = 0; 

            MultiSubGrp2.add("statictext", undefined, "FX TextFrame relies on path expressions, which could slow down your machine, especially in Multi Line setups (but with a lot of Single Lines too)", {multiline: false}); 
            MultiSubGrp2.add("statictext", undefined, "This is why you have the ability, with the button n°5 (and the same named one in the Single Line tab as well), to bake the path property expression", {multiline: false}); 
            MultiSubGrp2.add("statictext", undefined, "for any selected FX TextFrame layer. Once this button is clicked, you end up with some easy to use and fast to compute regular path keyframes.", {multiline: false}); 
            MultiSubGrp2.add("statictext", undefined, "", {multiline: false}); 
            MultiSubGrp2.add("statictext", undefined, "And the nice thing with this \u0022Bake path [...]\u0022 tool, is that it remains non-destructive ! Indeed, if you select the same FX TextFrame layer again", {multiline: false});
            MultiSubGrp2.add("statictext", undefined, "and if you re-click on this same \u0022Bake path [...]\u0022 button, the keyframes will be removed and you'll retrieve the full expression that makes the path", {multiline: false});
            MultiSubGrp2.add("statictext", undefined, "auto-resizing itself, with all the corners options, transform properties and animations still driven by the FX TextFrame's effect !", {multiline: false});
        // =======

        if(singleTab) {
            tpanel1.selection = SingleLineGrp;
        }else{
            tpanel1.selection = MultiLineGrp;
        }

        var linkButtonsGroup = FXinfos.add("group"); 
            linkButtonsGroup.orientation = "row"; 
            linkButtonsGroup.spacing = 12; 
            linkButtonsGroup.alignment = ["center","top"]; 

        var button1 = linkButtonsGroup.add ("button", undefined, "See the multi-part video overview/tutorial here");
        var button2 = linkButtonsGroup.add ("button", undefined, "Discover other products from Fremox on aescripts");
        var button3 = linkButtonsGroup.add ("button", undefined, "Close");

        var myURL1 = "https://vimeo.com/400316080" ;
        var myURL2 = "https://aescripts.com/authors/f-l/fremox/" ;

        function isMac()
        {
            return $.os.toLowerCase().indexOf( "mac" ) >= 0;
        }

        function openURL( url )
        {
            if ( isMac() ) system.callSystem('open "' + url + '"');
            else system.callSystem('explorer "' + url + '"');
        }

        button1.onClick = function () {
            openURL(myURL1);
        };

        button2.onClick = function () {
            openURL(myURL2);
        };

        button3.onClick = function () {
            FXinfos.close();
        };

    FXinfos.show();

    }


    //==================================================

    // _______ UI SETUP _______                     

    // if the script is a Panel, (launched from the 'Window' menu), use it,
    // else (launched via 'File/Scripts/Run script...') create a new window
    // store it in the variable mainPalette
    var mainPalette = thisObj instanceof Panel ? thisObj : new Window('palette', scriptName, undefined, {
        resizeable: true
    });

    //stop if there's no window
    if (mainPalette === null) return;

    // set margins and alignment
    mainPalette.alignChildren = ['fill', 'top'];
    mainPalette.orientation = 'column';
    mainPalette.margins = 4;
    mainPalette.spacing = 4;

    //__________________________


    // ============ ADD UI CONTENT HERE =================


    var menu = mainPalette.add('group');
    menu.orientation = 'row';
    menu.alignChildren = ["fill", "fill"];
    var content = menu.add('group');

    mySwitchToSingle = content.add("button", undefined, "Single Line");
    mySwitchToSingle.enabled = false;
    mySwitchToSingle.preferredSize = [100, 30];

    mySwitchToMultiple = content.add("button", undefined, "Multi Line");
    mySwitchToMultiple.preferredSize = [100, 30];


    var stickyInfo = menu.add('group');
    stickyInfo.alignChildren = ["right", "top"];
    stickyInfo.preferredSize = [30, 30];

    var myInfobutton = stickyInfo.add("iconbutton", undefined, File(myAssetsPath + "/icons/UI_icons/" + "INFO.png"), {
        style: "toolbutton"
    });

    content.margins = 2;
    content.spacing = 4;
    stickyInfo.margins = 2;
    stickyInfo.spacing = 6;
    content.alignChildren = ['fill', 'top'];
    stickyInfo.alignChildren = ['center', 'top'];

    var iconsGroup = mainPalette.add('group');
    iconsGroup.alignChildren = ['center', 'center'];
    iconsGroup.orientation = 'row';
    iconsGroup.margins = 8;
    iconsGroup.spacing = 8;
    iconsGroup.preferredSize = [80, 34];

    //////////////////////////////////////////////////// 

    var toggleMode = iconsGroup.add("iconbutton", undefined, File(myAssetsPath + "/icons/UI_icons/toggle_Mask_mode.png"), {
        style: "toolbutton",
        toggle: false
    });
    toggleMode.preferredSize = [34, 34];

    toggleMode.image = File(myAssetsPath + "/icons/UI_icons/toggle_Mask_mode.png");
    toggleMode.helpTip = "Toggle Mask/Shape mode";
    mainPalette.layout.layout(true);
    toggleMode.value = true;


    var sourceFolder = Folder(myAssetsPath + "/icons/corner_styles/");
    if (sourceFolder != null) {
        var myCornerPresetsList = sourceFolder.getFiles(function (f) {
            return f instanceof File;
        });
    }

    myCornerPresetsList.sort();

    var myIconsList = new Array();
    if (myCornerPresetsList !== null) {
        for (var l = 0; l <= myCornerPresetsList.length - 1; l++)
            myIconsList[myIconsList.length] = myCornerPresetsList[l].toString().split("corner_styles/")[1];
    }

    var myList = iconsGroup.add("dropdownlist");
    myList.preferredSize = [34, 34];
    for (var i = 0; i < myIconsList.length; i++) {
        myList.add("item", myIconsList[i].substr(10, myIconsList[i].length).split(".p")[0].split("_").join(" (") + ")");




        try {
            myList.items[i].image = File(myAssetsPath + "/icons/corner_styles/" + myIconsList[i]);
        } catch (err) {}

    }
    
    myList.helpTip = "Corners style (with or without Fill & Stroke)";

    myList.selection = 10;

    myList.onChange = function () {
        app.beginUndoGroup("Change corners and fill/stroke opacities");
        changeCorner(myList.selection);
        app.endUndoGroup();
    }

    var buttonsGroup = mainPalette.add('group');
    buttonsGroup.spacing = 4;
    buttonsGroup.alignChildren = ['fill', 'fill'];
    buttonsGroup.orientation = 'stack';
    buttonsGroup.preferredSize = [80, 30];

    var singleButtonsGroup = buttonsGroup.add('group');
    singleButtonsGroup.spacing = 4;
    singleButtonsGroup.alignChildren = ['fill', 'fill'];
    singleButtonsGroup.orientation = 'row';

    var btnSingleCreate = singleButtonsGroup.add("button", undefined, "Create single FX TextFrame line");

    var multipleButtonsGroup = buttonsGroup.add('group');
    multipleButtonsGroup.spacing = 4;
    multipleButtonsGroup.alignChildren = ['fill', 'fill'];
    multipleButtonsGroup.orientation = 'row';
    multipleButtonsGroup.visible = false;

    var btnMultipleCreate = multipleButtonsGroup.add("button", undefined, "Setup multiline FX TextFrame");
    btnMultipleCreate.preferredSize = [200, 30];
    var btnMultipleAdd = multipleButtonsGroup.add("button", undefined, "+");
    btnMultipleAdd.preferredSize = [30, 30];
    btnMultipleAdd.helpTip = "Add a new line to selected multiline FX TextFrame rig"
    var btnMultipleRemove = multipleButtonsGroup.add("button", undefined, "-");
    btnMultipleRemove.preferredSize = [30, 30];
    btnMultipleRemove.helpTip = "Remove the latest FX TextFrame line from its rig";

    var bakingGroup = mainPalette.add('group');
    bakingGroup.alignChildren = ['fill', 'fill'];
    bakingGroup.orientation = 'stack';

    var bakingSubGroup1 = bakingGroup.add('group');
    bakingSubGroup1.spacing = 4;
    bakingSubGroup1.alignChildren = ['fill', 'fill'];

    var btnBakePath = bakingSubGroup1.add("button", undefined, "Bake path on selected FX TextFrame");
    btnBakePath.helpTip = "Bake the path expression property of\nthe selected layer(s) into keyframes\n(reversible if you re-apply it after)";

    var bakingSubGroup2 = bakingGroup.add('group');
    bakingSubGroup2.spacing = 4;
    bakingSubGroup2.alignChildren = ['fill', 'fill'];
    bakingSubGroup2.orientation = 'row'
    bakingSubGroup2.visible = false;

    var btnMagicSelect = bakingSubGroup2.add("button", undefined, "ↆ");
    btnMagicSelect.helpTip = "Pick the children FX TextFrame layers\nof a selected Rig's CTRL l"
    btnMagicSelect.preferredSize = [30, 30];
    var btnBakePath2 = bakingSubGroup2.add("button", undefined, "Bake path on selected FX TextFrame");
    btnBakePath2.helpTip = "Bake the path expression property of\nthe selected layer(s) into keyframes\n(reversible if you re-apply it after)";
    btnBakePath2.preferredSize = [220, 30];

    var invisibleGroup = mainPalette.add('group');
    invisibleGroup.alignChildren = ['fill', 'fill'];
    invisibleGroup.orientation = 'row';
    invisibleGroup.preferredSize = [80, 0];
    var textColorLabel1 = invisibleGroup.add('statictext', [0, 0, 40, 0], '2d8ceb');
    var textColorLabel2 = invisibleGroup.add('statictext', [0, 0, 40, 0], 'ffb33c');



    /////////////////////////////////////////////////////////////////


    var myList2 = iconsGroup.add("dropdownlist");
    myList2.preferredSize = [34, 34];
    myList2.helpTip = "Animation Direction";

    myList2.add("item", "Do Not Use Animation");
    myList2.items[0].image = File(myAssetsPath + "/icons/UI_icons/noAnim.png");

    myList2.add("item", "Animate From Left To Right");
    myList2.items[1].image = File(myAssetsPath + "/icons/UI_icons/animDirection-Left.png");

    myList2.add("item", "Animate Outwards Horizontally");
    myList2.items[2].image = File(myAssetsPath + "/icons/UI_icons/animDirection-Middle.png");

    myList2.add("item", "Animate From Right To Left");
    myList2.items[3].image = File(myAssetsPath + "/icons/UI_icons/animDirection-Right.png");

    myList2.add("item", "Animate From Top To Bottom");
    myList2.items[4].image = File(myAssetsPath + "/icons/UI_icons/animDirection-Top.png");

    myList2.add("item", "Animate Outwards Vertically");
    myList2.items[5].image = File(myAssetsPath + "/icons/UI_icons/animDirection-MiddleV.png");

    myList2.add("item", "Animate From Bottom To Top");
    myList2.items[6].image = File(myAssetsPath + "/icons/UI_icons/animDirection-Bottom.png");


    myList2.selection = 1;

    myList2.onChange = function () {
        app.beginUndoGroup("Change corners and fill/stroke opacities");
        changeAnim(myList2.selection);
        app.endUndoGroup();
    }

/////////////////////////////////////////////////////////////////////////////////////////////

    var myList3 = iconsGroup.add("dropdownlist");
    myList3.preferredSize = [34, 34];
    myList3.helpTip = "Auto/Manual Frame's X and Y sizes";

    myList3.add("item", "Auto X and Y sizes based on text");
    myList3.items[0].image = File(myAssetsPath + "/icons/UI_icons/noFixedDim.png");

    myList3.add("item", "Manual X size but Auto Y size");
    myList3.items[1].image = File(myAssetsPath + "/icons/UI_icons/fixedDimX.png");

    myList3.add("item", "Auto X size but manual Y size");
    myList3.items[2].image = File(myAssetsPath + "/icons/UI_icons/fixedDimY.png");

    myList3.add("item", "Manual X and Y sizes (not text based)");
    myList3.items[3].image = File(myAssetsPath + "/icons/UI_icons/fixedDimXandY.png");



    myList3.selection = 0;

    myList3.onChange = function () {
        app.beginUndoGroup("Change corners and fill/stroke opacities");
        changeFixDim(myList3.selection);
        app.endUndoGroup();
    }

/////////////////////////////////////////////////////////////////////////////////////////////

    var myList4 = iconsGroup.add("dropdownlist");
    myList4.preferredSize = [34, 34];
    myList4.helpTip = "Text Compositing over the Frame";

    myList4.add("item", "Text in front of the Frame (clipped)");
    myList4.items[0].image = File(myAssetsPath + "/icons/UI_icons/composit-frontClipped.png");

    myList4.add("item", "Text in front of the Frame (not clipped)");
    myList4.items[1].image = File(myAssetsPath + "/icons/UI_icons/composit-frontNotClipped.png");

    myList4.add("item", "Frame in front of the Text (not clipped)");
    myList4.items[2].image = File(myAssetsPath + "/icons/UI_icons/composit-backNotClipped.png");

    myList4.add("item", "Frame in front of the Text (clipped)");
    myList4.items[3].image = File(myAssetsPath + "/icons/UI_icons/composit-backClipped.png");



    myList4.selection = 0;

    myList4.onChange = function () {
        app.beginUndoGroup("Change Text Compositing over Frame");
        changeCompositing(myList4.selection);
        app.endUndoGroup();
    }

///////////////////////////////////////////////////////////////////////////////////////////////

    function colorpicker(result_color) {
        var hexToRGB = function (hex) {
            var r = hex >> 16;
            var g = hex >> 8 & 0xFF;
            var b = hex & 0xFF;
            return [r, g, b];
        };

        var color_decimal = $.colorPicker();
        if (color_decimal < 0) return null;
        var color_hexadecimal = color_decimal.toString(16);
        var color_rgb = hexToRGB(parseInt(color_hexadecimal, 16));
        var result_color = [color_rgb[0] / 255, color_rgb[1] / 255, color_rgb[2] / 255];
        return result_color;
    }

    function customDraw() {
        with(this) {
            graphics.drawOSControl();
            graphics.rectPath(0, 0, size[0], size[1]);
            graphics.fillPath(fillBrush);
        }
    }

    function customDraw2() {
        with(this) {
            graphics.drawOSControl();
            graphics.rectPath(0, 0, size[0], size[1]);
            graphics.strokePath(strokePath);
        }
    }

    var colorsGroup = iconsGroup.add('group');
    colorsGroup.alignChildren = ['fill', 'fill'];
    colorsGroup.orientation = 'column';
    colorsGroup.spacing = 4 ;
    colorsGroup.preferredSize = [26, 24];

    var colorbutton1 = colorsGroup.add('iconbutton', undefined, undefined, {
        name: 'coloroption1',
        style: 'toolbutton'
    });
    colorbutton1.helpTip = "Frame's Fill color"
    colorbutton1.size = [20, 14];
    colorbutton1.fillBrush = colorbutton1.graphics.newBrush(colorbutton1.graphics.BrushType.SOLID_COLOR, [45 / 255, 140 / 255, 235 / 255, 1]);
    colorbutton1.text = "";
    colorbutton1.onDraw = customDraw;

    var colorbutton2 = colorsGroup.add('iconbutton', undefined, File(myAssetsPath + "/icons/UI_icons/defaultStrokeColor_Icon.png"), {
        name: 'coloroption2',
        style: 'toolbutton'
    });
    colorbutton2.helpTip = "Frame's Stroke color"
    colorbutton2.size = [20, 14];
    colorbutton2.text = "";
    colorbutton2.strokePath = colorbutton2.graphics.newPen(colorbutton2.graphics.PenType.SOLID_COLOR, [1, 179 / 255, 60 / 255, 1], 6);
    colorbutton2.onDraw = customDraw2;

    var rgbToHex = function (rgb) {
        var hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };

    var fullColorHex = function (r, g, b) {
        var red = rgbToHex(r);
        var green = rgbToHex(g);
        var blue = rgbToHex(b);
        return red + green + blue;
    };

    function hexToColor(theHex) {
        theHex = parseInt(theHex, 16);
        var r = theHex >> 16;
        var g = (theHex & 0x00ff00) >> 8;
        var b = theHex & 0xff;
        return [r / 255, g / 255, b / 255];
    }

    // ******************* COLOR BUTTONS (START) ******************///

    function onButtonClick1() {
        var newcolor1 = colorPicker();
        if (newcolor1 === null) return;
        this.fillBrush = this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR, newcolor1);
        this.notify("onDraw");
        textColorLabel1.text = fullColorHex(newcolor1[0] * 255, newcolor1[1] * 255, newcolor1[2] * 255);
        changeFillColor(hexToColor(textColorLabel1.text));
    }


    function onButtonClick2() {
        var newcolor2 = colorPicker();
        if (newcolor2 === null) return;
        this.strokePath = this.graphics.newPen(this.graphics.PenType.SOLID_COLOR, newcolor2, 6);
        this.notify("onDraw");
        textColorLabel2.text = fullColorHex(newcolor2[0] * 255, newcolor2[1] * 255, newcolor2[2] * 255);
        changeStrokeColor(hexToColor(textColorLabel2.text));
    }


    colorbutton1.onClick = onButtonClick1;
    colorbutton2.onClick = onButtonClick2;

    colorbutton2.strokePath = textColorLabel2.graphics.newPen(textColorLabel2.graphics.PenType.SOLID_COLOR, hexToColor(textColorLabel2.text), 6);
    colorbutton2.notify("onDraw");



    // ******************* COLOR BUTTONS  (END) ******************///

    /////////////////////////////////////////////////////////////////

    // ==============================================
    //
    //                 Info Btn
    //
    // ==============================================  


    myInfobutton.helpTip = "Show informations";



    // ==============================================
    //
    //                  Action Btn
    //
    // ==============================================      


    toggleMode.onClick = function () {
        if (toggleMode.value == true) {
            toggleMode.image = File(myAssetsPath + "/icons/UI_icons/toggle_Shape_mode.png");
            toggleMode.value = false;
        } else {
            toggleMode.image = File(myAssetsPath + "/icons/UI_icons/toggle_Mask_mode.png");
            toggleMode.value = true;
        }
        toggleMode.enabled = false;
        toggleMode.enabled = true;
        myList.enabled = false;
        myList.enabled = true;
        myList2.enabled = false;
        myList2.enabled = true;
        myList3.enabled = false;
        myList3.enabled = true;
        myList4.enabled = false;
        myList4.enabled = true;
    }

    btnSingleCreate.onClick = function () {
        app.beginUndoGroup("Create single FX TextFrame line");
        if (toggleMode.value == true) {
            singleTextFrameMask(myList.selection, hexToColor(textColorLabel1.text), hexToColor(textColorLabel2.text), myList2.selection, myList3.selection, myList4.selection);
        } else {
            singleTextFrameShape(myList.selection, hexToColor(textColorLabel1.text), hexToColor(textColorLabel2.text), myList2.selection, myList3.selection, myList4.selection);
        }
        app.endUndoGroup();
    };

    btnMultipleCreate.onClick = function () {
        app.beginUndoGroup("Create multiline FX TextFrame setup");
        lower3rdRig(myList.selection, hexToColor(textColorLabel1.text), hexToColor(textColorLabel2.text), myList2.selection, myList3.selection, myList4.selection);
        app.endUndoGroup();
    };

    btnMultipleAdd.onClick = function () {
        app.beginUndoGroup("Add a new line to selected multiline FX TextFrame rig");
        addNewLine();
        app.endUndoGroup();
    };

    btnMultipleRemove.onClick = function () {
        app.beginUndoGroup("Remove the latest FX TextFrame line from its rig");
        removeSeLine();
        app.endUndoGroup();
    };

    btnBakePath.onClick = function () {
        /*if(compLayers.length > 2 || myComp.duration > 5){
            if(confirm("Due to the amount of selected layers and/or the composition duration, baking the path expressions could be pretty long to process (up to a few minutes). Do you still want to continue ? If you click YES, please be patient : let the script work while you wait (time for a break :) and don't escape or shut down AfterEffects !")){
            app.beginUndoGroup("Bake path expression on selected FX TextFrame layer(s)");
            bakePath();
            app.endUndoGroup();}
        }else{*/
            app.beginUndoGroup("Bake path expression on selected FX TextFrame layer(s)");
            bakePath();
            app.endUndoGroup();  
        //}
    };

    btnBakePath2.onClick = function () {
        app.beginUndoGroup("Bake path expression on selected FX TextFrame layer(s)");
        bakePath();
        app.endUndoGroup();
    };

    btnMagicSelect.onClick = function(){
        app.beginUndoGroup("Pick children paths of the selected FX TextFrame's rig");
        magicSelect();
        app.endUndoGroup();  
    }

    var tabTest = true ;

    myInfobutton.onClick = function () {
        infos(tabTest);
    };

    mySwitchToSingle.onClick = function () {
        tabTest = true ;
        singleButtonsGroup.visible = true;
        multipleButtonsGroup.visible = false;
        bakingSubGroup1.visible = true ;
        bakingSubGroup2.visible = false ;
        mySwitchToSingle.enabled = false;
        mySwitchToMultiple.enabled = true;
        myInfobutton.enabled = false;
        myInfobutton.enabled = true;
        toggleMode.enabled = false;
        toggleMode.enabled = true;
        myList.enabled = false;
        myList.enabled = true;
        myList2.enabled = false;
        myList2.enabled = true;
        myList3.enabled = false;
        myList3.enabled = true;
        myList4.enabled = false;
        myList4.enabled = true;
    }
    mySwitchToMultiple.onClick = function () {
        tabTest = false ;
        multipleButtonsGroup.visible = true;
        singleButtonsGroup.visible = false;
        bakingSubGroup2.visible = true ;
        bakingSubGroup1.visible = false ;
        mySwitchToSingle.enabled = true;
        mySwitchToMultiple.enabled = false;
        myInfobutton.enabled = false;
        myInfobutton.enabled = true;
        toggleMode.enabled = false;
        toggleMode.enabled = true;
        myList.enabled = false;
        myList.enabled = true;
        myList2.enabled = false;
        myList2.enabled = true;
        myList3.enabled = false;
        myList3.enabled = true;
        myList4.enabled = false;
        myList4.enabled = true;
    }



    // ==================================================

    //__________ SHOW UI ___________
    {
        // Set layout, and resize it on resize of the Panel/Window
        mainPalette.layout.layout(true);
        mainPalette.layout.resize();
        mainPalette.onResizing = mainPalette.onResize = function () {
            //iconsGroup.orientation = mainPalette.size.width > mainPalette.size.height ? 'row' : 'column';
            //buttonsGroup.orientation = mainPalette.size.width > mainPalette.size.height ? 'row' : 'column';
            //content.orientation = mainPalette.size.width > mainPalette.size.height ? 'row' : 'column';
            mainPalette.layout.resize();
        };
        //if the script is not a Panel (launched from 'File/Scripts/Run script...') we need to show it
        if (!(mainPalette instanceof Panel)) mainPalette.show();
    }
    //______________________________

}

FX_TextFrame_Main(this);
