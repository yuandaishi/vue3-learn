import loading from "./loading.vue"

const loadingUi = {
    install(Vue: any) {
        // 注册组件
        console.log(loading);
        Vue.component(loading.__name, loading)
    }
}
export default loadingUi;