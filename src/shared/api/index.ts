export const getTempSongs = async () => {
  const res = await fetch('http://213.234.25.62:10050/api/v1/audio/all');
  try {
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(`error ${err}`);
  }
};
