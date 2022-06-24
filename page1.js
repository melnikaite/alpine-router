window.page1Route = () => {
    return {
        items: [],
        getItems: async function () {
            const loader = this.$store.app.getLoader();
            this.items = await loader.load();
        },
    };
};
