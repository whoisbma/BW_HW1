#pragma strict

var moveTime = 100;
var moveDir = 1;
	
function Start () {

}

function Update () {
	if (moveTime > 0) {
		if (moveDir > 0) {
			transform.Translate(Vector3.up * Time.deltaTime/5, Space.World);
			transform.Translate(Vector3.forward * Time.deltaTime/4, Space.World);
		}
		else {
			transform.Translate(Vector3.down * Time.deltaTime/5, Space.World);
			transform.Translate(Vector3.back * Time.deltaTime/4, Space.World);
		}
	}
	else {
		moveDir = -moveDir;
		moveTime = 100;
	}
	moveTime--;
}