import type { AppConfig } from "./type";

const readFromEnv = (key: string): string => {
    return import.meta.env[key];
};

const config: AppConfig = {
    service: {
        aboutServerAddress: readFromEnv("VITE_ABOUT_SERVER_ADDRESS")
    }
};

export const getAppConfig = (): AppConfig => config;
