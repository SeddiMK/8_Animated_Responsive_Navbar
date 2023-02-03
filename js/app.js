(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const themeMap = {
        dark: "light",
        light: "solar",
        solar: "dark"
    };
    let tmp;
    const theme = localStorage.getItem("theme") || (tmp = Object.keys(themeMap)[0], 
    localStorage.setItem("theme", tmp), tmp);
    const bodyClass = document.body.classList;
    bodyClass.add(theme);
    function toggleTheme() {
        const current = localStorage.getItem("theme");
        const next = themeMap[current];
        bodyClass.replace(current, next);
        localStorage.setItem("theme", next);
    }
    document.getElementById("themeButton").onclick = toggleTheme;
    window["FLS"] = true;
    isWebp();
})();