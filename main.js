document.addEventListener("DOMContentLoaded", function () {
    const pageFlip = new St.PageFlip(document.getElementById("flipbook"), {
        width: 800,
        height: 500,
        size: "stretch",
        showCover: true,
        maxShadowOpacity: 0.5,
        mobileScrollSupport: false
    });

    pageFlip.loadFromImages([
        "./images/compro_0001.jpg",
        "./images/compro_0002.jpg",
        "./images/compro_0003.jpg",
        "./images/compro_0004.jpg",
        "./images/compro_0005.jpg",
        "./images/compro_0006.jpg",
        "./images/compro_0007.jpg",
        "./images/compro_0008.jpg",
        "./images/compro_0009.jpg",
        "./images/compro_0010.jpg",
        "./images/compro_0011.jpg",
        "./images/compro_0012.jpg",
        "./images/compro_0013.jpg",
        "./images/compro_0014.jpg",
        "./images/compro_0015.jpg"
    ]);
});
