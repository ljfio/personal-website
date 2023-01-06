/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
    readonly GITHUB_SHA: string;
    readonly CF_PAGES_COMMIT_SHA: string;
    readonly GITHUB_SERVER_URL: string;
    readonly GITHUB_REPOSITORY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}