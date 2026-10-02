import { mkdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

import type { Storage, StoredFile } from "./types.js";

const STORAGE_ROOT = path.resolve(process.cwd(), "storage");

export class LocalStorage implements Storage {
  async save(
    buffer: Buffer,
    fileName: string,
    mimeType: string,
    folder: string,
  ): Promise<StoredFile> {
    const extension = path.extname(fileName);

    const generatedName = `${crypto.randomUUID()}${extension}`;

    const directory = path.join(STORAGE_ROOT, folder);

    await mkdir(directory, {
      recursive: true,
    });

    const storageKey = `${folder}/${generatedName}`;

    const filePath = path.join(STORAGE_ROOT, storageKey);

    await writeFile(filePath, buffer);

    return {
      storageKey,
      fileName,
      mimeType,
      size: buffer.length,
    };
  }

  async delete(storageKey: string): Promise<void> {
    const filePath = path.join(STORAGE_ROOT, storageKey);

    try {
      await unlink(filePath);
    } catch {}
  }

  getUrl(storageKey: string) {
    return `${process.env.API_URL}/uploads/${storageKey}`;
  }
}
