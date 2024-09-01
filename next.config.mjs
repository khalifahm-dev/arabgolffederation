
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {};

export default withNextIntl(nextConfig);

// module.exports = {
//   images: {
//     loader: "custom",
//     formats: ["image/avif", "image/webp"],
//   }
// };

