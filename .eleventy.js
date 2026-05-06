module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");
  eleventyConfig.addPassthroughCopy("src/admin/index.html");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.setTemplateFormats(["njk", "html", "md"]);
  return {
    dir: { input: "src", output: "_site/src" }
  };
};