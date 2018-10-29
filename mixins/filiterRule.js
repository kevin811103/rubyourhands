export default {
  filters: {
    timeChange(val) {
      if (val) {
        let a1 = val / 60;
        let a2 = val % 60;
        let a3 = Math.floor(a1) + ":" + (a2 < 10 ? "0" : "") + a2;
        return a3;
      }
    },
    classChang(val) {
      switch (val) {
        // m:早班,v:休假,bn:大夜班,sn:小夜班
        case "m":
          return "早班";
          break;
        case "v":
          return "休假";
          break;
        case "bn":
          return "大夜班";
          break;
        case "sn":
          return "小夜班";
          break;
        case "space":
          return "";
          break;

        default:
          return "請選擇";
          break;
      }
    }
  }
};
