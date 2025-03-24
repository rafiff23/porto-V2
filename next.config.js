/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        pathname: "**",
      }
    ],
    domains: [
      "cdn-icons-png.flaticon.com",
      "img.icons8.com",
      "icon.icepanel.io",
      "seaborn.pydata.org",
      "tidyverse.tidyverse.org",
      "ggplot2.tidyverse.org",
      "avatars.githubusercontent.com",
      "rstudio.github.io",
      "mlr3.mlr-org.com",
      "scipy.org",
      "upload.wikimedia.org",
      "ik.imagekit.io"
    ],
  },
}


module.exports = nextConfig;


module.exports = nextConfig
