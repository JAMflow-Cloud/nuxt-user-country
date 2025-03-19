<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: User Country Module
- Package name: nuxt-user-country
- Description: A Nuxt module to fetch and display user country information
-->

# User Country Detect

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt module to fetch and display user country information.
## Features

<!-- Highlight some of the features your module provide here -->
- 🌍 &nbsp;Fetch user country information from JAMflow free API.
- 🌐 &nbsp;Display user country ISO and Full Name.
- 🗺️ &nbsp;Supports 250 countries, autonomous regions, ...
- ⚡ &nbsp;Extremely fast detection and response time.

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-user-country
```

That's it! You can now use the User Country Module in your Nuxt app ✨

## Usage

### `useUserCountry` Composable

The `useUserCountry` composable fetches the user's country information based on their IP address.

#### Example

```vue
<template>
  <div>
    <p>{{ status }}</p>
    <p v-if="status === 'success'">Your country is: {{ data.name }}</p>
    <p v-if="status === 'error'">Error: {{ data }}</p>
    <button @click="refresh">Refresh</button>
  </div>
</template>

<script setup>
const { data, refresh, status } = await useUserCountry();
</script>
```

#### API

- `data`: The country information object containing `name` and `iso`.
- `refresh`: Function to refresh the country information.
- `status`: The status of the fetch request (`'idle'`, `'loading'`, `'success'`, `'error'`).

## Why Use This Module?

When compared to other free alternatives, this module stands out because:
 - **Focuses on performance:** With an average global latency of just 25ms, it's one of the fastest options available.
 - **Effective localization suggestions:** It works well to suggest changing the user's country or language/currency based on their location, making it ideal for enhancing the user experience.
 - **No browser location sharing required:** Unlike some other solutions, it doesn't require the user to share their precise browser location, ensuring better privacy while still delivering accurate information.

<!-- - [✨ &nbsp;Release Notes](/CHANGELOG.md) -->
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/user-country-module?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->


## Free API service
The module bases its detection on a network of 119 PoP, with an average global latency of 25ms. The API is offered by JAMflow.cloud and is free to use, without any guarantee currently. We will limit IP or website that will spam or abuse the service.

### Commercial use
You are allowed to use the service for any commercial use, but you are not allowed to resell it without an agreement with us beforehand.

### API Rate Limit

We limit requests to 3 requests per second per IP address. If you need a higher rate limit, please contact us.

### 


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
