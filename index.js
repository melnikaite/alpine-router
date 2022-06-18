document.addEventListener('alpine:init', () => {
    Alpine.store('app', {
        getLoader: function () {
            return { load: () => ([1, 2, 3]) };
        },
    });
});
