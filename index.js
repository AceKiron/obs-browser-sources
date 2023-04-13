const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
document.querySelector("span#main-span").innerText = params.t ? params.t : "No t query parmater provided";