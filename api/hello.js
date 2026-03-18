export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://be-lms.kemkes.go.id/v1/ext/fasynakes/course?page=1&pageSize=10",
      {
        headers: {
          "x-api-key": "ISI_API_KEY_KAMU",
        },
      }
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
    });
  }
}
