import {desiginwidth} from "./config";
export default function orientationChange () {
	var devicePixelRatio = window.devicePixelRatio;
	let contentHeight=0;
	switch (window.orientation) {
		case -90:
		case 90:
			// document.getElementById("rotateTips").style.display="none";
		break
		case 0:
		case 180:
			// document.getElementById("rotateTips").style.display="block";
		break
	}
}
