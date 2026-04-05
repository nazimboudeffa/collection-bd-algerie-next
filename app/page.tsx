import Image from "next/image";
import { covers } from "./data/covers";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <section className="relative overflow-hidden rounded-4xl border border-(--border) bg-(--surface) px-6 py-8 shadow-[0_30px_80px_rgba(91,59,43,0.12)] sm:px-8 lg:px-12 lg:py-12">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--accent) to-transparent opacity-60" />
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="space-y-5">
            <p className="text-(--accent) text-sm font-medium uppercase tracking-[0.3em]">
              Collection numerique absolument à avoir
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
              Couvertures de bandes dessinées algériennes
            </h1>
            <p className="text-(--muted) max-w-2xl text-base leading-8 sm:text-lg">
              Cette page rassemble les couvertures présentes dans le dossier public/covers et les affiche sous forme de catalogue avec image, titre, description, année et auteur.
            </p>
          </div>

          <div className="grid gap-4 rounded-3xl border border-(--border) bg-white/70 p-5 backdrop-blur">
            <div>
              <p className="text-(--muted) text-sm uppercase tracking-[0.2em]">
                Nombre de couvertures
              </p>
              <p className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-foreground">
                {covers.length}
              </p>
            </div>
            <p className="text-(--muted) text-sm leading-7">
              Les donnees de chaque couverture sont centralisees dans une liste dediee pour pouvoir etre completees manuellement album par album.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {covers.map((cover) => (
            <li key={cover.slug} className="list-none">
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-(--border) bg-(--surface) shadow-[0_24px_60px_rgba(91,59,43,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_70px_rgba(91,59,43,0.16)]">
                <div className="relative aspect-3/4 overflow-hidden bg-[#d9c8b2]">
                  <Image
                    src={cover.imageSrc}
                    alt={`Couverture de ${cover.title}`}
                    fill
                    quality={100}
                    unoptimized={cover.imageSrc.endsWith(".svg")}
                    priority={false}
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className={`transition duration-500 group-hover:scale-[1.015] ${
                      cover.imageSrc.endsWith(".svg")
                        ? "object-contain p-6"
                        : "object-cover object-[center_38%]"
                    }`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[rgba(16,12,10,0.82)] to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    {cover.year}
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                  <div className="space-y-2">
                    <p className="text-(--accent) text-xs font-medium uppercase tracking-[0.24em]">
                      Bande dessinee
                    </p>
                    <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
                      {cover.title}
                    </h2>
                    <p className="text-(--muted) text-sm leading-7">
                      {cover.description}
                    </p>
                  </div>

                  <dl className="mt-auto grid gap-3 rounded-[1.25rem] bg-white/75 p-4 text-sm backdrop-blur-sm">
                    <div className="flex items-start justify-between gap-4 border-b border-(--border) pb-3">
                      <dt className="text-(--muted) font-medium">Auteur</dt>
                      <dd className="text-right font-semibold text-foreground">
                        {cover.author}
                      </dd>
                    </div>
                    <div className="flex items-start justify-between gap-4 border-b border-(--border) pb-3">
                      <dt className="text-(--muted) font-medium">Annee</dt>
                      <dd className="text-right font-semibold text-foreground">
                        {cover.year}
                      </dd>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <dt className="text-(--muted) font-medium">Image</dt>
                      <dd className="text-right font-semibold text-foreground">
                        {cover.imageSrc.replace("/covers/", "")}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
