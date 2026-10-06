import { useEffect, useMemo, useRef, useState } from "react";

import { useCarImages } from "../../../../../hooks/cars/useCarImages";
import { useUploadCarImage } from "../../../../../hooks/cars/useUploadCarImage";
import { useDeleteCarImage } from "../../../../../hooks/cars/useDeleteCarImage";
import { useSetCarImagePrimary } from "../../../../../hooks/cars/useSetCarImagePrimary";
import { useUpdateCarImagePosition } from "../../../../../hooks/cars/useUpdateCarImagePosition";

export type PendingCarImage = {
  id: string;
  file: File;
  previewUrl: string;
  isPrimary: boolean;
};

type Props = {
  carId?: string;
  onPendingImagesChange?: (images: PendingCarImage[]) => void;
};

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path
      d="M14.5 6L8.5 12L14.5 18"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path
      d="M9.5 6L15.5 12L9.5 18"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StarIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    className="h-4 w-4"
  >
    <path
      d="M12 3.8L14.55 9L20.3 9.84L16.15 13.9L17.13 19.63L12 16.92L6.87 19.63L7.85 13.9L3.7 9.84L9.45 9L12 3.8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path
      d="M5 7H19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    <path
      d="M9 7V5.5C9 4.67 9.67 4 10.5 4H13.5C14.33 4 15 4.67 15 5.5V7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    <path
      d="M7 7L7.7 18.2C7.76 19.22 8.61 20 9.63 20H14.37C15.39 20 16.24 19.22 16.3 18.2L17 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M10.5 10.5V16.5M13.5 10.5V16.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const UploadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
    <path
      d="M12 16V4M12 4L7.5 8.5M12 4L16.5 8.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M5 13V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AdminCarImages = ({ carId, onPendingImagesChange }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [pendingImages, setPendingImages] = useState<PendingCarImage[]>([]);

  const carImagesQuery = useCarImages(carId);

  const uploadMutation = useUploadCarImage();
  const deleteMutation = useDeleteCarImage();
  const primaryMutation = useSetCarImagePrimary();
  const positionMutation = useUpdateCarImagePosition();

  const images = carImagesQuery.data?.images ?? [];

  const sortedImages = useMemo(
    () => [...images].sort((a, b) => a.position - b.position),
    [images],
  );

  useEffect(() => {
    onPendingImagesChange?.(pendingImages);
  }, [pendingImages, onPendingImagesChange]);

  useEffect(() => {
    setPendingImages([]);
  }, [carId]);

  const handleSelectFiles = () => {
    fileInputRef.current?.click();
  };

  const handleFilesChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = Array.from(event.target.files ?? []);

    if (!files.length) {
      return;
    }

    event.target.value = "";

    if (carId) {
      try {
        for (const file of files) {
          await uploadMutation.mutateAsync({
            carId,
            file,
          });
        }

        await carImagesQuery.refetch();
      } catch (error) {
        console.error(error);
      }

      return;
    }

    setPendingImages((current) => {
      const newImages = files.map((file, index) => ({
        id: `${file.name}-${file.lastModified}-${Date.now()}-${index}`,
        file,
        previewUrl: URL.createObjectURL(file),
        isPrimary: current.length === 0 && index === 0,
      }));

      return [...current, ...newImages];
    });
  };

  const handleRemovePending = (pendingId: string) => {
    setPendingImages((current) => {
      const imageToRemove = current.find((image) => image.id === pendingId);

      if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.previewUrl);
      }

      const next = current.filter((image) => image.id !== pendingId);

      if (imageToRemove?.isPrimary && next.length > 0) {
        return next.map((image, index) => ({
          ...image,
          isPrimary: index === 0,
        }));
      }

      return next;
    });
  };

  const handleSetPendingPrimary = (pendingId: string) => {
    setPendingImages((current) => {
      const selectedImage = current.find((image) => image.id === pendingId);

      if (!selectedImage) {
        return current;
      }

      const remainingImages = current
        .filter((image) => image.id !== pendingId)
        .map((image) => ({
          ...image,
          isPrimary: false,
        }));

      return [
        {
          ...selectedImage,
          isPrimary: true,
        },
        ...remainingImages,
      ];
    });
  };

  const handleMovePending = (
    pendingId: string,
    direction: "left" | "right",
  ) => {
    setPendingImages((current) => {
      const index = current.findIndex((image) => image.id === pendingId);

      if (index === -1) {
        return current;
      }

      const newIndex = direction === "left" ? index - 1 : index + 1;

      if (newIndex < 0 || newIndex >= current.length) {
        return current;
      }

      const next = [...current];

      const [moved] = next.splice(index, 1);

      next.splice(newIndex, 0, moved);

      return next;
    });
  };

  const handleSetPrimary = async (imageId: string) => {
    if (!carId || primaryMutation.isPending || positionMutation.isPending) {
      return;
    }

    try {
      await primaryMutation.mutateAsync({
        carId,
        imageId,
      });

      await positionMutation.mutateAsync({
        carId,
        imageId,
        position: 0,
      });

      await carImagesQuery.refetch();
    } catch (error) {
      console.error(error);
      await carImagesQuery.refetch();
    }
  };

  const handleDelete = async (imageId: string) => {
    if (!carId) {
      return;
    }

    const confirmed = window.confirm("Czy na pewno chcesz usunąć to zdjęcie?");

    if (!confirmed) {
      return;
    }

    try {
      await deleteMutation.mutateAsync({
        carId,
        imageId,
      });

      await carImagesQuery.refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleMove = async (
    imageId: string,
    currentIndex: number,
    direction: "left" | "right",
  ) => {
    const targetIndex =
      direction === "left" ? currentIndex - 1 : currentIndex + 1;

    if (targetIndex < 1 || targetIndex >= sortedImages.length) {
      return;
    }

    if (!carId || positionMutation.isPending) {
      return;
    }

    try {
      await positionMutation.mutateAsync({
        carId,
        imageId,
        position: targetIndex,
      });

      await carImagesQuery.refetch();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    return () => {
      pendingImages.forEach((image) => {
        URL.revokeObjectURL(image.previewUrl);
      });
    };
  }, []);

  return (
    <section className="overflow-hidden md:col-span-2 rounded-[10px] border border-white/8 bg-[#4C9FE5]/2">
      {/* HEADER */}
      <div className="border-b border-white/7 px-5 py-5 sm:px-7 sm:py-6">
        <h3 className="text-[16px] font-medium text-[#E8E9E7] sm:text-[17px]">
          Zdjęcia
        </h3>

        <p className="mt-1.5 max-w-xl text-[11px] leading-relaxed text-[#E8E9E7]/30 sm:text-[12px]">
          Dodaj zdjęcia samochodu, ustaw zdjęcie główne oraz kolejność
          prezentacji.
        </p>
      </div>

      <div className="p-4 sm:p-6 lg:p-7">
        {/* FILE INPUT */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFilesChange}
          className="hidden"
        />

        {/* UPLOAD */}
        <button
          type="button"
          onClick={handleSelectFiles}
          disabled={uploadMutation.isPending}
          className="
            flex
            min-h-36
            w-full
            cursor-pointer
            flex-col
            items-center
            justify-center
            rounded-[10px]
            border
            border-dashed
            border-white/10
            bg-[ext-[#E8E9E7]/2
            px-5
            transition-all
            duration-300
            hover:border-[#4C9FE5]/40
            hover:bg-[ext-[#E8E9E7]/[0.035]
            disabled:cursor-not-allowed
            disabled:opacity-40
            sm:min-h-40
          "
        >
          <div className="mb-3 text-[#4C9FE5]">
            <UploadIcon />
          </div>

          <span className="text-[13px] font-medium text-[#E8E9E7]/70 sm:text-[14px]">
            {uploadMutation.isPending
              ? "Przesyłanie zdjęć..."
              : "Wybierz zdjęcia"}
          </span>

          <span className="mt-1.5 text-center text-[10px] text-[#E8E9E7]/25 sm:text-[11px]">
            Możesz wybrać kilka plików jednocześnie
          </span>
        </button>

        {/* ========================= */}
        {/* NOWE AUTO */}
        {/* ========================= */}

        {!carId && pendingImages.length > 0 && (
          <div className="mt-8">
            <div className="mb-5">
              <p className="text-[14px] font-medium text-[#E8E9E7]/75">
                Zdjęcia samochodu
              </p>

              <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
                {pendingImages.length}{" "}
                {pendingImages.length === 1 ? "zdjęcie" : "zdjęć"}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 2xl:grid-cols-4">
              {pendingImages.map((image, index) => (
                <div
                  key={image.id}
                  className="
                        overflow-hidden
                        rounded-[10px]
                        border
                        border-white/10
                        bg-[#050505]
                      "
                >
                  {/* IMAGE */}
                  <div className="relative">
                    <img
                      src={image.previewUrl}
                      alt={image.file.name}
                      className="
                            aspect-16/10
                            w-full
                            object-cover
                          "
                    />

                    {image.isPrimary && (
                      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-[10px] border border-[#4C9FE5]/30 bg-[#4C9FE5]/2/90 px-3 py-2 text-[10px] font-medium text-[#4C9FE5] backdrop-blur-md">
                        <StarIcon filled />
                        Zdjęcie główne
                      </div>
                    )}

                    <div className="absolute right-3 top-3 flex h-8 min-w-8 items-center justify-center rounded-[10px] bg-black/70 px-2.5 text-[11px] font-medium text-[#E8E9E7]/65 backdrop-blur-md">
                      {index + 1}
                    </div>
                  </div>

                  {/* CONTROLS */}
                  <div className="space-y-2.5 border-t border-white/7 p-3.5">
                    {/* PRIMARY */}
                    <button
                      type="button"
                      disabled={image.isPrimary}
                      onClick={() => handleSetPendingPrimary(image.id)}
                      className="
                            flex
                            h-11
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-[9px]
                            border
                            border-white/8
                            px-4
                            text-[11px]
                            font-medium
                            text-[#E8E9E7]/50
                            transition-all
                            hover:border-[#4C9FE5]/30
                            hover:bg-[#4C9FE5]/2
                            hover:text-[#4C9FE5]
                            disabled:cursor-default
                            disabled:border-[#4C9FE5]/20
                            disabled:bg-[#4C9FE5]/2
                            disabled:text-[#4C9FE5]
                            cursor-pointer
                          "
                    >
                      <StarIcon filled={image.isPrimary} />

                      {image.isPrimary ? "Zdjęcie główne" : "Ustaw jako główne"}
                    </button>

                    {/* POSITION + DELETE */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        disabled={index === 0 || index === 1 || image.isPrimary}
                        onClick={() => handleMovePending(image.id, "left")}
                        className="
                              flex
                              h-11
                              items-center
                              justify-center
                              gap-2
                              rounded-[9px]
                              border
                              border-white/8
                              text-[11px]
                              font-medium
                              text-[#E8E9E7]/45
                              transition-all
                              hover:border-white/20
                              hover:bg-[ext-[#E8E9E7]/3
                              hover:text-[#E8E9E7]
                              disabled:cursor-default
                              disabled:opacity-20
                              cursor-pointer
                            "
                      >
                        <ChevronLeftIcon />
                        <span className="hidden sm:inline">W lewo</span>
                      </button>

                      <button
                        type="button"
                        disabled={
                          index === pendingImages.length - 1 ||
                          index === 0 ||
                          image.isPrimary
                        }
                        onClick={() => handleMovePending(image.id, "right")}
                        className="
                              flex
                              h-11
                              items-center
                              justify-center
                              gap-2
                              rounded-[9px]
                              border
                              border-white/8
                              text-[11px]
                              font-medium
                              text-[#E8E9E7]/45
                              transition-all
                              hover:border-white/20
                              hover:bg-[ext-[#E8E9E7]/3
                              hover:text-[#E8E9E7]
                              disabled:cursor-default
                              disabled:opacity-20
                              cursor-pointer
                            "
                      >
                        <span className="hidden sm:inline">W prawo</span>
                        <ChevronRightIcon />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleRemovePending(image.id)}
                        className="
                              flex
                              h-11
                              items-center
                              justify-center
                              gap-2
                              rounded-[9px]
                              border
                              border-red-400/10
                              text-[11px]
                              font-medium
                              text-red-300/50
                              transition-all
                              hover:border-red-400/25
                              hover:bg-red-400/5
                              hover:text-red-300
                              cursor-pointer
                            "
                      >
                        <TrashIcon />
                        <span className="hidden sm:inline">Usuń</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================= */}
        {/* EDYCJA AUTA */}
        {/* ========================= */}

        {carId && sortedImages.length > 0 && (
          <div className="mt-8">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[14px] font-medium text-[#E8E9E7]/75">
                  Zdjęcia samochodu
                </p>

                <p className="mt-1 text-[11px] text-[#E8E9E7]/25">
                  {sortedImages.length}{" "}
                  {sortedImages.length === 1 ? "zdjęcie" : "zdjęć"}
                </p>
              </div>

              {positionMutation.isPending && (
                <span className="text-[10px] text-[#4C9FE5]/70 sm:text-[11px]">
                  Aktualizowanie kolejności...
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 2xl:grid-cols-4">
              {sortedImages.map((image, index) => (
                <div
                  key={image.id}
                  className="
                        overflow-hidden
                        rounded-[10px]
                        border
                        border-white/10
                        bg-[#050505]
                      "
                >
                  {/* IMAGE */}
                  <div className="relative">
                    <img
                      src={image.url}
                      alt={image.fileName}
                      className="
    aspect-16/10
    w-full
    object-cover
  "
                    />

                    {image.isPrimary && (
                      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-[10px] border border-[#4C9FE5]/30 bg-[#4C9FE5]/2/90 px-3 py-2 text-[10px] font-medium text-[#4C9FE5] backdrop-blur-md">
                        <StarIcon filled />
                        Zdjęcie główne
                      </div>
                    )}

                    <div className="absolute right-3 top-3 flex h-8 min-w-8 items-center justify-center rounded-[10px] bg-black/70 px-2.5 text-[11px] font-medium text-[#E8E9E7]/65 backdrop-blur-md">
                      {index + 1}
                    </div>
                  </div>

                  {/* CONTROLS */}
                  <div className="space-y-2.5 border-t border-white/7 p-3.5">
                    {/* PRIMARY */}
                    <button
                      type="button"
                      disabled={image.isPrimary || primaryMutation.isPending}
                      onClick={() => handleSetPrimary(image.id)}
                      className="
                            flex
                            h-11
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-[9px]
                            border
                            border-white/8
                            px-4
                            text-[11px]
                            font-medium
                            text-[#E8E9E7]/50
                            transition-all
                            hover:border-[#4C9FE5]/30
                            hover:bg-[#4C9FE5]/2
                            hover:text-[#4C9FE5]
                            disabled:cursor-default
                            disabled:border-[#4C9FE5]/20
                            disabled:bg-[#4C9FE5]/2
                            cursor-pointer
                            disabled:text-[#4C9FE5]
                          "
                    >
                      <StarIcon filled={image.isPrimary} />

                      {image.isPrimary ? "Zdjęcie główne" : "Ustaw jako główne"}
                    </button>

                    {/* POSITION + DELETE */}
                    <div className="grid grid-cols-2 gap-2">
                      {/* LEFT */}
                      <button
                        type="button"
                        disabled={
                          index === 0 ||
                          index === 1 ||
                          image.isPrimary ||
                          positionMutation.isPending
                        }
                        onClick={() => handleMove(image.id, index, "left")}
                        className="
                              flex
                              h-11
                              items-center
                              justify-center
                              gap-2
                              rounded-[9px]
                              border
                              border-white/8
                              text-[11px]
                              font-medium
                              text-[#E8E9E7]/45
                              transition-all
                              hover:border-white/20
                              hover:bg-[ext-[#E8E9E7]/3
                              hover:text-[#E8E9E7]
                              disabled:cursor-default
                              disabled:opacity-20
                              cursor-pointer
                            "
                        aria-label="Przesuń zdjęcie w lewo"
                      >
                        <ChevronLeftIcon />

                        <span className="hidden sm:inline">W lewo</span>
                      </button>

                      {/* RIGHT */}
                      <button
                        type="button"
                        disabled={
                          index === sortedImages.length - 1 ||
                          index === 0 ||
                          image.isPrimary ||
                          positionMutation.isPending
                        }
                        onClick={() => handleMove(image.id, index, "right")}
                        className="
                              flex
                              h-11
                              items-center
                              justify-center
                              gap-2
                              rounded-[9px]
                              border
                              border-white/8
                              text-[11px]
                              font-medium
                              text-[#E8E9E7]/45
                              transition-all
                              hover:border-white/20
                              hover:bg-[ext-[#E8E9E7]/3
                              hover:text-[#E8E9E7]
                              disabled:cursor-default
                              disabled:opacity-20
                              cursor-pointer
                            "
                        aria-label="Przesuń zdjęcie w prawo"
                      >
                        <span className="hidden sm:inline">W prawo</span>

                        <ChevronRightIcon />
                      </button>

                      {/* DELETE */}
                      <button
                        type="button"
                        disabled={deleteMutation.isPending}
                        onClick={() => handleDelete(image.id)}
                        className="
                              flex
                              h-11
                              items-center
                              justify-center
                              gap-2
                              rounded-[9px]
                              border
                              border-red-400/10
                              text-[11px]
                              font-medium
                              text-red-300/50
                              transition-all
                              hover:border-red-400/25
                              hover:bg-red-400/5
                              hover:text-red-300
                              disabled:opacity-30
                              cursor-pointer
                            "
                        aria-label="Usuń zdjęcie"
                      >
                        <TrashIcon />

                        <span className="hidden sm:inline">Usuń</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EMPTY */}
        {!carImagesQuery.isPending && carId && sortedImages.length === 0 && (
          <div className="mt-6 rounded-[10px] border border-white/7 bg-[ext-[#E8E9E7]/1.5 px-5 py-10 text-center">
            <p className="text-[12px] text-[#E8E9E7]/35">
              Samochód nie ma jeszcze żadnych zdjęć.
            </p>
          </div>
        )}

        {/* LOADING */}
        {carImagesQuery.isPending && carId && (
          <p className="mt-5 text-[11px] text-[#E8E9E7]/25">
            Pobieranie zdjęć...
          </p>
        )}

        {/* ERROR */}
        {carImagesQuery.isError && carId && (
          <p className="mt-5 text-[11px] text-red-300/70">
            Nie udało się pobrać zdjęć.
          </p>
        )}
      </div>
    </section>
  );
};
