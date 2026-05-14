export const onRequest: PagesFunction = async (context) => {
  return new Response("This site is temporarily offline for maintenance.", {
    status: 503,
    headers: { "Content-Type": "text/plain" }
  });
};
