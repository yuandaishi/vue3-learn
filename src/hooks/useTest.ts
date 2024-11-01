import { ref } from 'vue'

let useNum = (a: Number) => {
    let num = ref(a);
    return num
}

export default useNum;