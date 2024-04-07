const baseURL = 'https://plus.dutchie.com/plus/2021-07/graphql';
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJBUEktQ0xJRU5UIiwiZXhwIjozMzI1Mzk0NDk2MSwiaWF0IjoxNjk3MDM2MTYxLCJpc3MiOiJodHRwczovL2R1dGNoaWUuY29tIiwianRpIjoiNmQ4Nzk5YjEtNDRmZi00MDA2LTg5MDItNmYyZmZiOGMwMmQyIiwiZW50ZXJwcmlzZV9pZCI6ImFkMTRhYmYwLWI1ZWYtNDBkMy1hZGI2LWQ2NGE0MzM0NWFjMCIsInV1aWQiOiIzZDBkZmYyNS1mYjVlLTRlYmMtYjkxZC0yMzZjNzRmZGRlYjgifQ.4zmIFFlB0IOc07lCMO7cDKPFbMUtczCXl9nP-K0tXmY'
}

export const callDutchie = (query: string, params: any) => {
  const url = `${baseURL}?query=${encodeURIComponent(query)}`;

  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query,
      variables: params
    })
  };

  return fetch(url, options)
    .then(response => response.json())
};