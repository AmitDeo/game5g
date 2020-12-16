export const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties
	};
};

export const addClassElement = (element, name) => {
  const arr	= element.className.split(" ");
  if (arr.indexOf(name) === -1) {
    element.className += " " + name;
  }
}

function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}

export const minsecFormat = (seconds) => {
	var mins = Math.floor(seconds/60);
	var seconds = seconds - mins*60;

	return mins + ' : ' + str_pad_left(seconds,'0',2);
}


export const minsecTextFormat = (seconds) => {
	var mins = Math.floor(seconds/60);
	var seconds = seconds - mins*60;
	var minsText = mins > 0 
				  ? mins > 1 ? mins + ' minutes ' : mins + ' minute '
				  : '';

	return minsText + seconds + ' seconds';
}
