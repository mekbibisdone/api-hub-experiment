export async function responseToJson(response: Response) {
  const result = await response.json();
  return { ...result, status: response.status };
}
