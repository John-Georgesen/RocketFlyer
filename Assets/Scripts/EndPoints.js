﻿
#pragma strict

static var currentScore : float = 0;

var offsetY : float = 40;
var sizeX : float = 100;
var sizeY : float = 40;
var myStyle : GUIStyle;

function Start () {
	currentScore = 0;
}

function OnGUI () {
	GUI.Box (new Rect (Screen.width/2-sizeX/2, offsetY, sizeX, sizeY), "Score: " + GameMaster.currentScore, myStyle);
}