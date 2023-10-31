import {createRouter,  useBase, defineEventHandler, H3Event} from "h3";

const router = createRouter()

router.get('/test', defineEventHandler((e) => {
    return 'Hello World'
}))

export default useBase('/api/dynamic', router.handler)