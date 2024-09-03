/**
 * @type {import('gatsby').GatsbyConfig}
 */
import remarkGfm from "remark-gfm"
import remarkExternalLinks from "remark-external-links"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

module.exports = {
  siteMetadata: {
    title: 'My First Gatsby Site',
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // 图片transfer 添加到 graphql
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
        mdxOptions: {
          remarkPlugins: [
            // Add GitHub Flavored Markdown (GFM) support
            remarkGfm,
            // To pass options, use a 2-element array with the
            // configuration in an object in the second element
            [remarkExternalLinks, { target: false }],
          ],
          rehypePlugins: [
            // Generate heading ids for rehype-autolink-headings
            rehypeSlug,
            // To pass options, use a 2-element array with the
            // configuration in an object in the second element
            [rehypeAutolinkHeadings, { behavior: `wrap` }],
          ],
        },
      },
    },
  ],
}
