// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ["@nuxtjs/google-fonts", {
      display: "swap",
      families: {
        "Exo 2": [400, 500, 600, 700],
        "Noto Color Emoji": true
      },
      prefetch: true,
      preconnect: true,
      preload: true
    }],
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt"
  ],
  shadcn: {
    /**
      * Prefix for all the imported component
      */
    prefix: "",
    /**
      * Directory that the component lives in.
      * @default "./components/ui"
      */
    componentDir: "./components/ui"
  }
})
