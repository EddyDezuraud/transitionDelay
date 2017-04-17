//AJOUTE UN DELAY TRANSITION A CHAQUE ELEMENT
function transitionDelay(elements, tps, base){
	var things = base;
	for(var j=0; j<elements.length; j++){
		things += tps;
		elements[j].style.transitionDelay = things+"s";		
	}
}
