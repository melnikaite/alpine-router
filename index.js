document.addEventListener('alpine:init', () => {
    Alpine.deferMutations();
    Alpine.store('app', {
        getLoader: function () {
            return {
                load: () => {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve([1, 2, 3]);
                        }, 100);
                    });
                },
            };
        },
    });
});
