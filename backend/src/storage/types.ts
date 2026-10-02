export type StoredFile = {
  storageKey: string;
  fileName: string;
  mimeType: string;
  size: number;
};

export interface Storage {
  save(
    buffer: Buffer,
    fileName: string,
    mimeType: string,
    folder: string,
  ): Promise<StoredFile>;

  delete(storageKey: string): Promise<void>;

  getUrl(storageKey: string): string;
}
