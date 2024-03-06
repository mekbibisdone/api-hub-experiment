import { responseToJson } from "../utils";
const url = "https://restcountries.com/v3.1/";

async function getAll() {
  const response = await fetch(`${url}/all`);
  const responseJson = await responseToJson(response);
  return responseJson;
}

async function getByName(name: string) {
  const response = await fetch(`${url}/name/${name}`);
  const responseJson = await responseToJson(response);
  return responseJson;
}

async function getByCode (code:string | number) {
  const response = await fetch(`${url}/alpha/${code}`)
  const responseJson = await responseToJson(response);
  return responseJson;
}
export default { getAll, getByName,getByCode };
