export default function fetcher(url: string, data = undefined) {
  return fetch(`${window.location.origin}/api${url}`, {
    method: data ? 'POST' : 'GET',
    credentials: 'include', // send cookie for JWT
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // in case not working, set data type to undefined
  });
}

// window.location.origin - for app deployed (no custom domain), API mounted on the same domain as front-end app, for simplicity, use window.location.origin instead of setting in .env file.
