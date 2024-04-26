/// <reference types="astrojs/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly GITHUB_SHA: string?;
    readonly CF_PAGES_COMMIT_SHA: string?;
    readonly GITHUB_SERVER_URL: string?;
    readonly GITHUB_REPOSITORY: string?;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}