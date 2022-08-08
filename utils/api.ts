import axios from "axios";
export async function makeApiCall<T = any>(url: string): Promise<T> {
  try {
    const data = await axios({
      method: "get",
      url,
    });
    return data.data;
  } catch (error) {
    return error;
  }
}
