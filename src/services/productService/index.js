import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.ziyuno.com/api/package/packages/en",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

const getProduct = async () => {
  try {
    const result = await instance.get();
    if (result.status === 200) {
      return result;
    } else {
      return "Error";
    }
  } catch (error) {
    return error;
  }
};
export default getProduct;
