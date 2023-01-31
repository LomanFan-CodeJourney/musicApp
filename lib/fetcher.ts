export default function fetcher(url: string, data = undefined) {
  return fetch(`${window.location.origin}/api${url}`, {
    method: data ? 'POST' : 'GET',
    credentials: 'include', // send cookie for JWT
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // set data type to undefined, so it doesn't break
  }).then((res) => {
    if (res.status > 399 && res.status < 200) {
      throw new Error();
    }
    return res.json();
  });
}

// window.location.origin - for app deployed (no custom domain), API mounted on the same domain as front-end app, for simplicity, use window.location.origin instead of setting in .env file.
