/** @type {import('next').NextConfig} */

const {
    remarkCodeHike,
  } = require("@code-hike/mdx")

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [
            [remarkCodeHike, { theme: "nord" }]
        ],
    }
})

const nextConfig = {
    experimental: {
      mdxRs: true,
    },
    pageExtensions: [
      "ts", "tsx", "js", 
      "jsx", "md", "mdx"
    ]
  }
  
// const withMDX = require('@next/mdx')()
// module.exports = nextConfig
// module.exports = withMDX({
//     pageExtensions: [
//       "ts", "tsx", "js", 
//       "jsx", "md", "mdx"
//     ],
//   })

module.exports = withMDX(nextConfig)