import { defineNuxtModule, createResolver, addImportsDir } from '@nuxt/kit'
import { defu } from 'defu'

export interface ModuleOptions {
  endpoint: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'User Country',
    configKey: 'userCountry',
  },
  defaults: {
    endpoint: 'https://where-am-i.jamflow.app/',
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)
    _nuxt.options.runtimeConfig.public.userCountry = defu(
      _nuxt.options.runtimeConfig.public.userCountry,
      {
        endpoint: _options.endpoint,
      },
    )

    addImportsDir(resolver.resolve('./runtime/composables'))
  },
})
