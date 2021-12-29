#pragma strict

import UnityEngine.UI;

var scoreText : Text;


function Start () 
{
	scoreText.text = "Score: " + GameMaster.currentScore;
}

