/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly COMMIT_SHA: string;
    readonly GITHUB_SERVER_URL: string;
    readonly GITHUB_REPOSITORY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}