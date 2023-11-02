export const rootPath = "/";

export const memePath = "/meme";
export const memeShowPath = "/meme/:uuid";
export const buildMemeShowPath = uuid => `/meme/${uuid}`;

export const loginPath = "/login";

export const adminPath = "/admin";
export const adminSettingsPath = "/admin/settings";
export const adminMemesPath = "/admin/memes";
export const adminMemeShowPath = "/admin/meme/:uuid";
export const buildAdminMemeShowPath = uuid => `/admin/meme/${uuid}`;
