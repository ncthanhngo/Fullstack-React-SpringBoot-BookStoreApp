export async function myRequest(endpoint: string) {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  }
  