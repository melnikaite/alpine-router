window.addEventListener('hashchange', onRouteChanged);
onRouteChanged();

async function onRouteChanged () {
    const routerView = document.querySelector('#router-view');
    await loadRoute(routerView);
    window.Alpine?.initTree(routerView);
}

async function loadRoute (routerView) {
    switch (window.location.hash) {
        case '#page2':
            routerView.innerHTML = await fetch('./page2.html').
                then(r => r.text());
            break;
        case '#page1':
        default:
            await import('./page1.js');
            routerView.innerHTML = await fetch('./page1.html').
                then(r => r.text());
            break;
    }
}
