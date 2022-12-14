const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite")

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(EleventyVitePlugin);

    eleventyConfig.addPlugin(pluginWebc, {
        components: "_includes/webc/*.webc"
    });
    eleventyConfig.addPlugin(EleventyRenderPlugin);

    eleventyConfig.addPassthroughCopy({ "public" : "/" });

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