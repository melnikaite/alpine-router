window.page1Route = () => {
    return {
        items: [],
        getItems: function () {
            const loader = this.$store.app.getLoader();
            this.items = loader.load();
        },
    };
};
