"use client"

import type { NextPage } from 'next'
import { useState, useMemo } from 'react'
import Head from 'next/head'
import Header from '@/component/Header'
import iconsData from '@/data/iconsData.json'
import Icon from '@/components/Icon'
import Divider from '@/component/Divider'

const HomePage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  // Extract unique categories from iconsData
  const categories = useMemo(() => {
    const catSet = new Set<string>()
    for (const icon of iconsData) {
      catSet.add(icon.category)
    }
    return Array.from(catSet)
  }, [])

  // Filter icons by search term upfront (to avoid repeating for each category)
  const filteredIcons = useMemo(() => {
    return iconsData.filter(icon =>
      icon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <>
      <Head>
        <title>Aura Icons</title>
        <meta name="description" content="Open source icons. Lovingly hand-crafted." />
      </Head>

      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Open source icons.<br />Lovingly hand-crafted.
          </h1>
          <p className="text-gray-600 mb-8">
            Premium designed icons for use in web, iOS, Android, and desktop apps.
            Completely open source, MIT licensed.
          </p>

          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search icons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>

        {categories.map(category => {
          const categoryIcons = filteredIcons.filter(icon => icon.category === category)
          if (categoryIcons.length === 0) return null

          return (
            <section key={category} className="mb-12">
              <Divider />
              <h2 className="text-xl font-semibold text-gray-800 mb-4 capitalize">
                {category} Icons
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-8">
                {categoryIcons.map(icon => (
                  <div key={icon.name} className="flex flex-col items-center text-center text-gray-700 shadow-md p-4 rounded-md">
                    <Icon
                      svg={icon.svg}
                      className="w-8 h-8 text-gray-800"
                    />
                    <span className="mt-2 text-sm">{icon.name}</span>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </main>
    </>
  )
}

export default HomePage
