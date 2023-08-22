// See https://youtrack.jetbrains.com/issue/WEB-60908/Typescript-service-doesnt-recognise-Vue-files-in-Typescript-5#focus=Comments-27-7432830.0-0

declare module '*.vue';

// declare module '*.vue' {
//     import { defineComponent } from 'vue'
//     constcomponent: ReturnType<typeof defineComponent>
//     export default component
// }
