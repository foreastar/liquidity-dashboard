const btn = document.getElementById("refresh-btn");

btn.addEventListener("click", () => {
    const tga = (500 + Math.random() * 1500).toFixed(0);
    const rrp = (200 + Math.random() * 2000).toFixed(0);
    const reserves = (900 + Math.random() * 3000).toFixed(0);

    document.getElementById("tga-value").textContent = `$${tga}B`;
    document.getElementById("rrp-value").textContent = `$${rrp}B`;
    document.getElementById("reserves-value").textContent = `$${reserves}B`;
});
