/** @type {import('next').NextConfig} */
const nextConfig = {
  theme: {
    extend: {
      backgroundImage: {
        testmoinal: "url('/Group.png')",
      },
    },
  },
};

module.exports = nextConfig;

// module.exports = {
//     theme: {
//       extend: {
//         backgroundImage: {
//           'hero-pattern': "url('/img/hero-pattern.svg')",
//           'footer-texture': "url('/img/footer-texture.png')",
//         }
//       }
//     }
//   }
