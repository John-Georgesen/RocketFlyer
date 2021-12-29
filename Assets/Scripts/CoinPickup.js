#pragma strict

var coinEffect : Transform;


function OnTriggerEnter2D (info : Collider2D)
{
	if (info.tag == "Player")
	{
		GameMaster.currentScore += 1;
		
	}
}