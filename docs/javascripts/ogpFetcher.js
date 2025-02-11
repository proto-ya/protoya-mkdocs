async function fetchOGP(url, targetElementId) {
    const apiUrl = `https://www.proto-ya.com/ogp-server/?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'success') {
        document.getElementById(targetElementId).innerHTML = `
            <div class="ogp-card">
                <a href="${url}" target="_blank">
                    <div class="ogp-content">
                        <h3 class="ogp-title">${data.data.title}</h3>
                        <p class="ogp-description">${data.data.description}</p>
                        <span class="ogp-url">${new URL(url).hostname}</span>
                    </div>
                    <img src="${data.data.image.url}" alt="OGP Image" class="ogp-image">
                </a>
            </div>
        `;
    }
}
export { fetchOGP };