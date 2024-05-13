interface Config {
    port: number;
    appEnvironment: string;
    appVersion: string;
    baseUrl: string;
    defaultTimezone: string;
}

const config: Config = {
    port: import.meta.env.VITE_APP_DEV_PORT || 5173,
    appEnvironment: import.meta.env.VITE_APP_ENVIRONMENT || "Development",
    appVersion: import.meta.env.VITE_APP_VERSION || "v0.0.1",
    baseUrl: import.meta.env.VITE_APP_API_BASE_URL || null,
    defaultTimezone: import.meta.env.VITE_APP_TIMEZONE || "Asia/Karachi",

};
export default config;
