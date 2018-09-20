// 信箱正規
const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
export default {
    methods: {
        checkEmail(data) {
            if (reg.test(data)) {
                // 是信箱
                return true
            } else {
                // 是電話
                return false
            }
        }
    }
}
