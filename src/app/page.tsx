import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div><figure className="bg-red-400 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="/first.pic.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “I am Mazhar Iqbal from Rahim Yar Khan. I am a teacher by profession and I like teaching profession.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div>
        mazhar iqbal
      </div>
      <div>
      Professional Teacher.
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
