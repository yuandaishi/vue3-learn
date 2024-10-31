import { ref } from 'vue'

let useTest = <Number>(a) => {
    let num = ref<Number>(a);
    return {
        num
    }
}

export default useTest;