
var renderResults = function( results, startIndex, perPage ) {
    var e = document.getElementById('search-results');
    for( var i = startIndex; i < ( startIndex + perPage ); i++ ) {
        if ( i < results.length ) {
            var a = document.createElement('article');
            a.classList.add('uol-results-items__item');
            if ( results[i].imageurl != '' ) {
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
            t.appendChild( tl ).appendChild( document.createTextNode( results[i].t ) );
            c.appendChild( t );
            // description
            var d = document.createElement('p');
            d.classList.add('uol-results-items__item__summary');
            var desc = ( results[i].desc == ''? results[i].intro: results[i].desc );
            d.appendChild( document.createTextNode( desc ) );
            c.appendChild( d );
            a.appendChild( c );
            e.appendChild( a );
        }
    }
}


    <p class="uol-results-items__item__summary">Scientists have used a fibre-optic sensor passed deep into a borehole to obtain the most detailed measurements of ice properties ever taken on the Greenland Ice Sheet.</p>
</div>

<div class="uol-results-items__item__image-container">
    <img class="uol-results-items__item__img" src="/placeholders/banner/banner-04.jpg" alt="A super informative description">
</div>

</article>