/**
 * Checks to see if localStorage is available
 * 
 * @param {string} type (localStorage or sessionStorage)
 * @returns {boolean}
 */
function storageAvailable(type) {
	var storage;
	try {
		storage = window[type];
		var x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return e instanceof DOMException && (
			// everything except Firefox
			e.code === 22 ||
			// Firefox
			e.code === 1014 ||
			// test name field too, because code might not be present
			// everything except Firefox
			e.name === 'QuotaExceededError' ||
			// Firefox
			e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
			// acknowledge QuotaExceededError only if there's something already stored
			(storage && storage.length !== 0);
	}
}
/**
 * Sets a value in localStorage but adds expiry date
 * 
 * @param {string} key localStorage key
 * @param {string} value to set
 * @param {int} ttl Time to live (in hours)
 */
function setWithExpiry(key, value, ttl) {
	const now = new Date()
	const item = {
		value: value,
		expiry: now.getTime() + (ttl*60*60*1000),
	}
	localStorage.setItem(key, JSON.stringify(item))
}
/**
 * Gets a value in localStorage but checks expiry date
 * first. If expired, localStorage key is removed and
 * null returned.
 * 
 * @param {string} key localStorage key
 */
function getWithExpiry(key) {
	const itemStr = localStorage.getItem(key)
	if (!itemStr) {
		return null;
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	if (now.getTime() > item.expiry) {
		localStorage.removeItem(key)
		return null
	}
	return item.value;
}
function uol_show_loader( parent ) {
	var c = document.createElement( 'div' );
	c.setAttribute( 'id', 'uol_loader' );
	var loadStr = "loading"
	for ( var i = 1; i <= loadStr.length; i++ ) {
		var circle = document.createElement( 'span' );
		circle.classList.add( 'circle' );
		circle.classList.add( 'circle-'+i );
		circle.appendChild( document.createTextNode(loadStr[(i-1)]) );
		c.appendChild(circle);
	}
	parent.appendChild( c );
}
function uol_hide_loader() {
	var el = document.getElementById( 'uol_loader' );
	if ( el ) el.remove();
}