import Image from "next/image";
import { useState } from "react";
import Photo from "@/../public/img.jpg";

const themes = [
  "black",
  "orange",
  "purple",
  "green",
  "blue",
  "red",
  "pink",
  "skyblue",
  "gold",
];

export default function Home() {
  const [theme, setTheme] = useState<string>(themes[0]);

  return (
    <main
      className={`flex flex-col gap-16 min-h-screen p-24 bg-bgPrimary theme-${theme}`}
    >
      <div className="flex flex-col">
        <h3 className="font-semibold mb-2">Select theme:</h3>
        <div className="flex gap-4">
          {themes.map((t) => (
            <button
              key={t}
              className="w-10 h-10 rounded-full border border-gray-300"
              style={{ backgroundColor: t }}
              onClick={() => setTheme(t)}
              title={t}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-start-1 col-span-6 relative aspect-video rounded-md overflow-hidden">
          <Image src={Photo} alt="Image" fill style={{ objectFit: "cover" }} />
          <div className="absolute inset-0 bg-transparent hover:bg-primary opacity-50" />
        </div>
        <div className="col-span-6 flex flex-col items-start gap-4">
          <h1 className="text-primary font-bold text-4xl">
            Woodside Creek Paradise
          </h1>
          <p className="flex-1 text-secondary text-lg">
            Your own piece of paradise awaits you. Nestled among oak trees, this
            home is tucked away on nearly half an acre overlooking a seasonal
            creek at the end of a quiet cul-de-sac with access to trails. This
            move-in ready sunny home features abundant natural light and forest
            views from every room. Highlights include hardwood floors, an
            updated kitchen with stainless steel appliances, dedicated
            off-street parking, and sunny spaces for flower/vegetable gardens.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary hover:bg-secondary text-tBase font-medium px-6 py-2 rounded-md">
              Buy now
            </button>
            <button className="bg-bgPrimary border-secondary border-2 hover:border-primary font-medium px-6 py-2 rounded-md">
              Explore
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
