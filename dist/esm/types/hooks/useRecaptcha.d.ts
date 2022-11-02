export declare const useRecaptcha: (key: string, apiKey: string, callback: () => void, disable?: boolean) => {
    readonly getToken: () => Promise<string>;
};
