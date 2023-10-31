import {createRouter,  useBase, defineEventHandler, H3Event} from "h3";

const router = createRouter()

router.get('/api/dynamic-without-base/test', defineEventHandler((e: H3Event) => {
    return 'Hello World'
}))

export default router.handler