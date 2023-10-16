const API_URL = "https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05";
const API_URL_DETAIL =
  "https://mocki.io/v1/1a1fb542-22d1-4919-914a-750114879775?code=";

export async function getPhones() {
  try {
    const res = await fetch(API_URL).then((res) => res.json());
    if (res) {
      const horizontalProducts = res.result.horizontalProducts;
      const products = res.result.products;
      return { horizontalProducts, products };
    }
  } catch (error) {
    console.error("Error: ", error);
  }
}

export async function getPhone(code: number) {
  try {
    const res = await fetch(API_URL_DETAIL + code).then((res) => res.json());
    console.log(res);
    if (res) {
      const products = res.result;
      return { products };
    }
  } catch (error) {
    console.error("Error: ", error);
  }
}
