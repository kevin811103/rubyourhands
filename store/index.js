export const actions = {
  async getWeatherData({ commit }) {
    this.$axios.setHeader(
      "Authorization",
      "CWB-2AA7F022-E3DD-4F45-AE38-904164490ECB"
    );

    const data = await this.$axios.$get("api/v1/rest/datastore/F-C0032-001");
    console.log("data: ", data);
    let res = data.records.location;
    return { status: 200, res };
  }
};
