window.addEventListener('hashchange', onRouteChanged);
onRouteChanged();

async function onRouteChanged () {
    switch (window.location.hash) {
        case '#page2':
            document.querySelector('#router-view').innerHTML =
                await fetch('./page2.html').then(r => r.text());
            break;
        case '#page1':
        default:
            await import('./page1.js');
            document.querySelector('#router-view').innerHTML =
                await fetch('./page1.html').then(r => r.text());
    }
}
