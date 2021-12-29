#pragma strict

var speed : float;
var jumpHeight : float;

private var isFalling = false;

function Update ()
{
	GetComponent.<Rigidbody2D>().velocity.x = speed;
	
	
	if (Input.GetButton("Fire1"))
	{
		GetComponent.<Rigidbody2D>().velocity.y = jumpHeight;
	}
}

