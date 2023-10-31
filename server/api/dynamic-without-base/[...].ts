import {createRouter,  useBase, defineEventHandler, H3Event} from "h3";

const router = createRouter()
const prefix = '/api/dynamic-without-base';

const config = {
    'foobar': 'foobar',
    'foo/ooo/bar': 'foo/ooo/bar',
}

Object.entries(config).forEach(([key, value]) => {
    router.get(prefix + '/' + key, defineEventHandler((e: H3Event) => {
        return value
    }))
})

router.get(prefix + '/test', defineEventHandler((e: H3Event) => {
    return 'Hello World'
}))

export default router.handler