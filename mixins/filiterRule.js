export default {
  filters: {
    timeChange(val) {
      if (val) {
        let a1 = val / 60
        let a2 = val % 60
        let a3 = Math.floor(a1) + ':' + (a2 < 10 ? '0' : '') + a2
        return a3
      }
    }
  }
}
