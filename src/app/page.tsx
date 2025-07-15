"use client";

import type { NextPage } from "next";
import { useState, useMemo } from "react";
import Head from "next/head";
import Header from "@/component/Header";
import iconsData from "@/data/iconsData.json";
import Icon from "@/component/Icon";
import Divider from "@/component/Divider";
import Footer from "@/component/Footer";
import PageWrapper from "@/component/PageWrapper";
import IconInfo from "@/component/IconInfo";

const HomePage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [iconInfo, setIconInfo] = useState<{
    svg: string | null;
    name: string | null;
  }>({
    svg: null,
    name: null,
  });

  // Extract unique categories from iconsData
  const categories = useMemo(() => {
    const catSet = new Set<string>();
    for (const icon of iconsData) {
      catSet.add(icon.category);
    }
    return Array.from(catSet);
  }, []);

  // Filter icons by search term upfront (to avoid repeating for each category)
  const filteredIcons = useMemo(() => {
    return iconsData.filter((icon) =>
      icon.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <PageWrapper>
      <>
        <Head>
          <title>Aura Icons</title>
          <meta
            name="description"
            content="Open source icons. Lovingly hand-crafted."
          />
        </Head>

        <main className="pt-6">
          <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {categories.map((category) => {
            const categoryIcons = filteredIcons.filter(
              (icon) => icon.category === category,
            );
            if (categoryIcons.length === 0) return null;

            return (
              <section key={category} className="mb-12">
                <Divider category={category} />
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 my-12">
                  {categoryIcons.map((icon) => (
                    <div
                      key={icon.name}
                      onClick={() =>
                        setIconInfo({ name: icon.name, svg: icon.svg })
                      }
                      onKeyDown={() =>
                        setIconInfo({ name: icon.name, svg: icon.svg })
                      }
                      className="flex cursor-pointer flex-col items-center text-center text-gray-700 px-4 py-6 rounded-xl hover:shadow-md hover:bg-zinc-50 transition-all duration-200 ease-in-out hover:scale-[1.02]"
                    >
                      <Icon svg={icon.svg} title={icon.name} />
                      <span className="mt-2 text-xs">{icon.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
          <IconInfo iconInfo={iconInfo} setIconInfo={setIconInfo} />
          <Footer />
        </main>
      </>
    </PageWrapper>
  );
};

export default HomePage;
