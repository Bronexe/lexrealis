declare global {
  interface Window {
    jotformEmbedHandler: (selector: string, baseUrl: string) => void;
  }
}

export {};

