import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      colorFormat: "HEX#",
    };
  },
  mutations: {
    setColorFormat(state, format) {
      const formats = ["HEX#", "HEX", "RGB", "RGBA", "HSL", "HSLA"];
      state.colorFormat = formats[format];
    },
  },
});
