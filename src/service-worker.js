import { timestamp, files, shell, routes } from '@sapper/service-worker';
import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies'

const cmsBaseURL = process.env.NODE_ENV === 'development' ? 'localhost:1337' : 'samcms.herokuapp.com'

precacheAndRoute(files)
routes.forEach((route) => registerRoute(
  new RegExp(route.pattern),
  new CacheFirst({ cacheName: 'app' })
))

registerRoute(
  new RegExp (`http://${cmsBaseURL}/entrainements`),
  new StaleWhileRevalidate()
)
