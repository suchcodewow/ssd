/**
 * @type {import('next').NextConfig}
 */

// const { remarkCodeHike } = require("@code-hike/mdx");
// const { withContentlayer } = require("next-contentlayer");
// import { remarkCodeHike } from "@code-hike/mdx"
import { withContentlayer } from "next-contentlayer";
import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  options: {
    // remarkPlugins: [[remarkCodeHike, { theme: "github-from-css", showCopyButton: true }]],
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  // as of sept 2023, rust compiler below kills Code Hike
  // experimental: {
  //   mdxRs: true,
  // },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
};

// const withMDX = require('@next/mdx')()
// module.exports = nextConfig
// module.exports = withMDX({
//     pageExtensions: [
//       "ts", "tsx", "js",
//       "jsx", "md", "mdx"
//     ],
//   })

// module.exports = withContentlayer(withMDX(nextConfig));
export default withContentlayer({});
