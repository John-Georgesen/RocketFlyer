
var timer : float = 0.0;

var spawning : boolean = false;

var prefab : Rigidbody2D;

var spawn1 : Transform;
var spawn2 : Transform;



function Update () { 


 //check if spawning at the moment, if not add to timer


 if(!spawning){


  timer += Time.deltaTime;


 } 


 //when timer reaches 2 seconds, call Spawn function


 if(timer >= 5){


  Spawn();


 }


}


 


function Spawn(){


 //set spawning to true, to stop timer counting in the Update function


 spawning = true;


 //reset the timer to 0 so process can start over


 timer = 0;


 


 //select a random number, inside a maths function absolute command to ensure it is a whole number


 var randomPick : int = Mathf.Abs(Random.Range(1,3));


 


 //create a location 'Transform' type variable to store one of 3 possible locations declared at top of script


 var location : Transform;


 


 //check what randomPick is, and select one of the 3 locations, based on that number


 if(randomPick == 1){


  location = spawn1; 


  }
 else if(randomPick == 2){


  location = spawn2; 


  


 }


 

 


 //create the object at point of the location variable


 var thingToMake : Rigidbody2D = Instantiate(prefab, location.position, location.rotation);


  thingToMake.AddForce(Vector3(0,0,100));


 


 //halt script for 1 second before returning to the start of the process


 yield WaitForSeconds(1);


 //set spawning back to false so timer may start again


 spawning = false;


}
