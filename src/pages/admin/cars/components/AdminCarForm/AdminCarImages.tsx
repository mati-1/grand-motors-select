import { FormInput } from "../../../../../components/form/FormInput";

type Props = {
  image: string;
  images: string[];
  onImageChange: (value: string) => void;
  onImagesChange: (value: string[]) => void;
};

export const AdminCarImages = ({
  image,
  images,
  onImageChange,
  onImagesChange,
}: Props) => {
  const addImage = () => {
    onImagesChange([...images, ""]);
  };

  const updateImage = (index: number, value: string) => {
    onImagesChange(
      images.map((image, imageIndex) => (imageIndex === index ? value : image)),
    );
  };

  const removeImage = (index: number) => {
    onImagesChange(images.filter((_, imageIndex) => imageIndex !== index));
  };

  return (
    <section className="rounded-[10px] border border-white/8 bg-[#090909]">
      <div className="border-b border-white/7 px-5 py-4">
        <h3 className="text-[14px] font-medium text-white">Zdjęcia</h3>

        <p className="mt-1 text-[10px] text-white/30">
          Dodaj zdjęcie główne oraz pozostałe zdjęcia samochodu.
        </p>
      </div>

      <div className="space-y-5 p-5">
        <FormInput
          id="main-image"
          label="Zdjęcie główne"
          value={image}
          onChange={(event) => onImageChange(event.target.value)}
          placeholder="/cars/bmw-g30/main.jpg"
        />

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-white/40">Pozostałe zdjęcia</span>

            <button
              type="button"
              onClick={addImage}
              className="cursor-pointer text-[10px] text-[#d2b878] transition-colors hover:text-[#e0c98b]"
            >
              Dodaj zdjęcie
            </button>
          </div>

          {images.map((item, index) => (
            <div key={index} className="flex gap-2">
              <div className="flex-1">
                <FormInput
                  id={`image-${index}`}
                  label={`Zdjęcie ${index + 1}`}
                  value={item}
                  onChange={(event) => updateImage(index, event.target.value)}
                  placeholder="/cars/bmw-g30/2.jpg"
                />
              </div>

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="mt-[21px] h-11 w-11 shrink-0 cursor-pointer rounded-[8px] border border-white/10 text-[10px] text-white/30 transition-all hover:border-red-400/20 hover:text-red-300"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
