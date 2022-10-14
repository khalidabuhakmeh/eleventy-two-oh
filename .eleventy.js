module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("css" );

    eleventyConfig.addShortcode("possum_link", function(slug) {
        return `/possums/${slug}/`
    });

    eleventyConfig.addFilter("next", function(possums, possum) {
        const index = possums.map(e => e.slug).indexOf(possum.slug);
        return index < possums.length
            ? possums[index + 1]
            : null;
    });

    eleventyConfig.addFilter("previous", function(possums, possum) {
        const index = possums.map(e => e.slug).indexOf(possum.slug);
        return index > 0
            ? possums[index - 1]
            : null;
    });

};