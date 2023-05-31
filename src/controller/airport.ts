export const getPreviewAirportClient = async () => {
  const airport = await fetch("/api/airport")
    .then(res => res.json())
    .then(data => data)
    .catch(error => {
      console.log(error);
    });

  return airport;
};
