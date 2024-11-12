export const get_videos = async (video_URL) => {
  try {
    const response = await fetch(video_URL);
    if (!response.ok) {
      // console.log(response);
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    return { data: data.items || [], errors: null };
  } catch (e) {
    return { data: null || [], errors: e.message };
  }
};
