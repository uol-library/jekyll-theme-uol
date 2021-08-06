window.addEventListener('load', (event) => {
	// add a listener on the search form?

	// Process any searches if we are on the search page
	var resultsContainer = document.getElementById('search-results');
	if ( resultsContainer ) {
		// Check for query
		var searchParams = new URLSearchParams(window.location.search);
		var terms = false;
		if (searchParams.has('search-query')) {
			terms = searchParams.get('search-query').split(' ').map(name => name.toLowerCase());
		} else {
			resultsContainer.innerHTML = '<p>Sorry, no search terms were specified - please try again.</p>';
			return;
		}
		uol_show_loader(resultsContainer);
		new Promise((resolve,reject) => {
			if ( storageAvailable('localStorage') && localStorage.getItem('searchIndex') ) {
				console.log("getting data from localstorage");
				resolve(JSON.parse(localStorage.getItem('searchIndex')));
				localStorage.removeItem('searchIndex');
			} else {
				console.log("getting data from API");
				var searchIndexURL = window.location.protocol+'//'+window.location.host+'/search.json';
				console.log(searchIndexURL);
				fetch(searchIndexURL)
					.then(response => {
						if (!response.ok) {
							reject("Failed to retrieve search index");
						} else {
							return response.json();
						}
					})
					.then(jsonResponse => {
						if ( storageAvailable('localStorage') ) {
							localStorage.setItem('searchIndex', JSON.stringify(jsonResponse));
						}
						resolve(jsonResponse);
					 });
			}
		}).then(data => {
			var results = [];
			for ( var d = 0; d < data.length; d++ ) {
				var hit = false;
				for ( var t = 0; t < terms.length; t++ ) {
					
					if ( data[d].t.toLowerCase().indexOf(terms[t]) != -1 || data[d].kw.toLowerCase().indexOf(terms[t]) != -1 || data[d].intro.toLowerCase().indexOf(terms[t]) != -1 || data[d].desc.toLowerCase().indexOf(terms[t]) != -1 ) {
						hit = true;
					}
				}
				if (hit) {
					results.push(data[d]);
				}
			}
			renderResults( results );
		}).catch(error => {
			uol_hide_loader();
			resultsContainer.innerHTML = '<p>Sorry, there was an error processing your search.</p><pre>'+error+'</pre>';
		});

	}
});
var renderResults = function( results ) {
	uol_hide_loader();
	var searchParams = new URLSearchParams(window.location.search);
	var resultsContainer = document.getElementById('search-results');
	if ( ! results.length ) {
		resultsContainer.innerHTML = "<p>Sorry, no results found for <em>"+searchParams.get('search-query')+"</em></p>";
		return;
	}
	var numResults = results.length;
	// Check for paging
	var page = 1;
	var perPage = 3;
	if (searchParams.has('page')) {
		page = parseInt(searchParams.get('page'));
	}
	// normalise
	if (((page-1)*perPage)>numResults) {
		page = Math.ceil(numResults/perPage);
	}
	if (page < 1) {
		page = 1;
	}
	var startIndex = (page - 1)*perPage;
	var totalPages = Math.ceil(numResults/perPage);
	// show results count
	var rn = document.createElement('div');
	rn.classList.add('uol-results-count');
	rn.innerHTML = '<h2 class="uol-results-count__title">'+numResults+' results for <strong>'+searchParams.get('search-query')+'</strong></h2>';
	resultsContainer.appendChild(rn);
	// make a container for the results
	var rc = document.createElement('div');
	rc.classList.add('uol-results-items');
	for( var i = startIndex; i < ( startIndex + perPage ); i++ ) {
		if ( i < results.length ) {
			var a = document.createElement('article');
			a.classList.add('uol-results-items__item');
			if ( results[i].alt != '' ) {
				a.classList.add('uol-results-items__item--has-image');
			}
			// container
			var c = document.createElement('div');
			c.classList.add('uol-results-items__item__text-container');
			// title
			var t = document.createElement('h2');
			t.classList.add('uol-results-items__item__title');
			var tl = document.createElement('a');
			tl.setAttribute('href', results[i].url);
			tl.classList.add('uol-results-items__item__link');
			c.appendChild( t ).appendChild( tl ).appendChild( document.createTextNode( results[i].t ) );
			// description
			var d = document.createElement('p');
			d.classList.add('uol-results-items__item__summary');
			var desc = ( results[i].desc == ''? results[i].intro: results[i].desc );
			a.appendChild( c ).appendChild( d ).appendChild( document.createTextNode( desc ) );
			if ( results[i].alt != '' ) {
				var imc = document.createElement( 'div' );
				imc.classList.add( 'uol-results-items__item__image-container' );
				var im = document.createElement( 'img' );
				im.classList.add( 'uol-results-items__item__img' );
				im.setAttribute( 'src', results[i].img );
				im.setAttribute( 'alt', results[i].alt );
				imc.appendChild( im );
				a.appendChild( imc );
			}
			rc.appendChild( a );
		}
	}
	resultsContainer.appendChild(rc);
	if ( numResults > perPage ) {
		console.log("Creating pagination");
		// Create pagination
		var n = document.createElement( 'nav' );
		n.classList.add( 'uol-pagination' );
		n.setAttribute( 'aria-label', 'pagination' );
		var pl = document.createElement( 'ol' );
		pl.classList.add( 'uol-pagination__list' );
		var links = {};
		// First page and previous page links
		links.first = document.createElement( 'li' );
		links.first.classList.add( 'uol-pagination__item' );
		links.prev = document.createElement( 'li' );
		links.prev.classList.add( 'uol-pagination__item' );
		links.next = document.createElement( 'li' );
		links.next.classList.add( 'uol-pagination__item' );
		links.last = document.createElement( 'li' );
		links.last.classList.add( 'uol-pagination__item' );
		// Create disables and action buttons to clone
		var disabledButton = document.createElement( 'button' );
		disabledButton.setAttribute( 'type', 'button' );
		disabledButton.setAttribute( 'disabled', true );
		disabledButton.classList.add( 'uol-button','uol-button--primary','uol-icon','uol-icon--icon-only');
		var actionButton = document.createElement( 'a' );
		actionButton.classList.add( 'uol-button','uol-button--primary','uol-icon','uol-icon--icon-only');
		// First, Previous, Next and Last buttons
		var firstButton, prevButton, nextButton, lastButton;
		// First page, no previous or first
		if ( page == 1 ) {
			firstButton = disabledButton.cloneNode();
			prevButton  = disabledButton.cloneNode();
		} else {
			firstButton = actionButton.cloneNode();
			prevButton  = actionButton.cloneNode();
		}
		// last page, not next or last
		if ( ( page * perPage ) >= numResults ) {
			nextButton = disabledButton.cloneNode();
			lastButton  = disabledButton.cloneNode();
		} else {
			nextButton = actionButton.cloneNode();
			lastButton  = actionButton.cloneNode();
		}
		// Finish off the buttons
		firstButton.classList.add('uol-icon--mdiPageFirst');
		firstButton.appendChild( document.createTextNode( 'First page' ) );
		prevButton.classList.add('uol-icon--mdiArrowLeft');
		prevButton.appendChild( document.createTextNode( 'Previous page' ) );
		nextButton.classList.add('uol-icon--mdiArrowRight');
		nextButton.appendChild( document.createTextNode( 'Next page' ) );
		lastButton.classList.add('uol-icon--mdiPageLast');
		lastButton.appendChild( document.createTextNode( 'Last page' ) );
		// Now add links
		if ( startIndex > 0 ) {
			searchParams.set('page', 1 );
			firstButton.setAttribute('href', window.location.href.split('?')[0]+'?'+searchParams.toString());
			searchParams.set('page', ( page - 1 ) );
			prevButton.setAttribute('href', window.location.href.split('?')[0]+'?'+searchParams.toString());
		}
		if ( ( page * perPage ) < numResults ) {
			searchParams.set('page', ( page + 1 ) );
			nextButton.setAttribute('href', window.location.href.split('?')[0]+'?'+searchParams.toString());
			searchParams.set('page', totalPages );
			lastButton.setAttribute('href', window.location.href.split('?')[0]+'?'+searchParams.toString());
		}
		// append the buttons to the li elements
		links.first.appendChild(firstButton);
		links.prev.appendChild(prevButton);
		links.next.appendChild(nextButton);
		links.last.appendChild(lastButton);
		// append first and previous
		pl.appendChild(links.first);
		pl.appendChild(links.prev);
		// append numbered pages
		for ( var pageNo = 1; pageNo <= totalPages; pageNo++ ) {
			if ( totalPages > 5 ) {
				// only show 5 numbered pages
				var leftmost = ( (page - 2) < 1 )? 1: (page - 2 );
				var rightmost = leftmost + 4;
				if ( rightmost > totalPages ) {
					rightmost = totalPages;
					leftmost = rightmost - 4;
				}
				if ( pageNo <= leftmost || pageNo >= rightmost ) {
					continue;
				}
			}
			var pnli = document.createElement('li');
			pnli.classList.add("uol-pagination__item", "uol-pagination__item--numeric");
			if ( pageNo == page ) {
				pnli.classList.add("uol-pagination__item--current");
			}
			var pna = document.createElement('a');
			pna.classList.add("uol-button","uol-button--secondary","uol-icon","uol-icon--icon-only","uol-pagination__link");
			searchParams.set('page', pageNo );
			pna.setAttribute('href', window.location.href.split('?')[0]+'?'+searchParams.toString());
			pna.setAttribute('data-number', pageNo);
			if ( pageNo == page ) {
				pna.setAttribute('aria-current', 'page');
			}
			pna.innerHTML = '<span class="uol-icon__label"><span class="hide-accessible">Page </span>'+pageNo+'</span>';
			pnli.appendChild(pna);
			pl.appendChild(pnli);
		}
		// append next and last
		pl.appendChild(links.next);
		pl.appendChild(links.last);
		// append to document
		n.appendChild( pl );
		// pagination status
		var ps = document.createElement('span');
		ps.classList.add('uol-pagination__status');
		ps.appendChild( document.createTextNode('Page '+page+' of '+totalPages));
		n.appendChild(ps);
		resultsContainer.appendChild( n );
	}
}