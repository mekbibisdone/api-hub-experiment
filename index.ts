import restCountries from "./api/restCountries";

(async () => {
  const result = await restCountries.getByCode(170);
  console.log(result);
})();
