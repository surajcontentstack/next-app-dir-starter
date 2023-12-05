import { Config, Region, LivePreview, Stack } from "contentstack";

const {
    CONTENTSTACK_API_KEY,
    CONTENTSTACK_DELIVERY_TOKEN,
    CONTENTSTACK_ENVIRONMENT,
    CONTENTSTACK_BRANCH,
    CONTENTSTACK_REGION,
    CONTENTSTACK_MANAGEMENT_TOKEN,
    CONTENTSTACK_API_HOST,
    CONTENTSTACK_LIVE_PREVIEW,
} = process.env;

// basic env validation
export const isBasicConfigValid = () => {
    const requiredVariables = [
        "CONTENTSTACK_API_KEY",
        "CONTENTSTACK_DELIVERY_TOKEN",
        "CONTENTSTACK_ENVIRONMENT",
    ];
    const missingVariables = requiredVariables.filter(
        (variable) => !process.env[variable]
    );
    if (missingVariables.length > 0) {
        throw new Error(
            `Missing required environment variables: ${missingVariables.join(
                ", "
            )}`
        );
    }
};
// Live preview config validation
export const isLpConfigValid = () => {
    const requiredVariables = [
        "CONTENTSTACK_LIVE_PREVIEW",
        "CONTENTSTACK_MANAGEMENT_TOKEN",
        "CONTENTSTACK_API_HOST",
        "CONTENTSTACK_APP_HOST",
    ];
    const missingVariables = requiredVariables.filter(
        (variable) => !process.env[variable]
    );
    if (missingVariables.length > 0) {
        throw new Error(
            `Missing required environment variables for live preview: ${missingVariables.join(
                ", "
            )}`
        );
    }
};
// set region
const setRegion = (): Region => {
    let region = "US" as keyof typeof Region;
    if (!!CONTENTSTACK_REGION && CONTENTSTACK_REGION !== "us") {
        region = CONTENTSTACK_REGION.toLocaleUpperCase().replace(
            "-",
            "_"
        ) as keyof typeof Region;
    }
    return Region[region];
};
// set LivePreview config
const setLivePreviewConfig = (): LivePreview => {
    isLpConfigValid();
    return {
        management_token: CONTENTSTACK_MANAGEMENT_TOKEN as string,
        enable: CONTENTSTACK_LIVE_PREVIEW === "true",
        host: CONTENTSTACK_API_HOST as string,
    } as LivePreview;
};
// contentstack sdk initialization
export const initializeContentStackSdk = (): Stack => {
    isBasicConfigValid();
    const stackConfig: Config = {
        api_key: CONTENTSTACK_API_KEY as string,
        delivery_token: CONTENTSTACK_DELIVERY_TOKEN as string,
        environment: CONTENTSTACK_ENVIRONMENT as string,
        region: setRegion(),
        branch: CONTENTSTACK_BRANCH || "main",
    };
    if (CONTENTSTACK_LIVE_PREVIEW === "true") {
        stackConfig.live_preview = setLivePreviewConfig();
    }
    return Stack(stackConfig);
};
// api host url
export const customHostUrl = (baseUrl = ""): string => {
    return baseUrl.replace("api", "cdn");
};
// generate prod api urls
export const generateUrlBasedOnRegion = (): string[] => {
    return Object.keys(Region).map((region) => {
        if (region === "US") {
            return `cdn.contentstack.io`;
        }
        return `${region}-cdn.contentstack.com`;
    });
};
// prod url validation for custom host
export const isValidCustomHostUrl = (url = ""): boolean => {
    return url ? !generateUrlBasedOnRegion().includes(url) : false;
};
