const analyticsLayerEvents = {
    onPageLoad: () => {
        if (window) {
            window.analyticsLayer = {};
        }
    },
    // Keep Track Of Current Values, can be used by any event
}

export default analyticsLayerEvents;
