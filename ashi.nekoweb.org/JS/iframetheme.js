function changeIframeSrc(element) {
    var theme = element.getAttribute('data-theme');
    var iframe = document.getElementById('fmembed');

    if (theme === 'light') {
        iframe.src = 'https://lastfm-embed.vercel.app/api/stats?user=hazyashi&lang=en&theme=solarizedLight&borderSize=0&borderRadius=0&showTitle=true&numberFormat=commas';
    } else if (theme === 'dark') {
        iframe.src = 'https://lastfm-embed.vercel.app/api/stats?user=hazyashi&lang=en&theme=catppuccinMocha&borderSize=0&borderRadius=0&showTitle=true&numberFormat=commas';
    }
}
