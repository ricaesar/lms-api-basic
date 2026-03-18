export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://be-lms.kemkes.go.id/v1/ext/fasynakes/course?page=1&pageSize=10",
      {
        headers: {
          "x-api-key": "94373781-698a-4161-8635-8d68736f3a5b",
        },
      }
    );

    const text = await response.text(); // 👈 bukan json dulu

    res.status(200).send(text);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
