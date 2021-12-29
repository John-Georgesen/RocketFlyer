#pragma strict

var gameMaster : GameMaster;
var coinEffect : Transform;

function OnTriggerEnter2D (other : Collider2D) 
{
		
		if(other.tag == "Player")
	{
		
		Instantiate(coinEffect, transform.position, transform.rotation);
		yield WaitForSeconds (1);
		Switch();
	}
	
}

function Switch()
{
	Application.LoadLevel("EndLevel");
}

	
