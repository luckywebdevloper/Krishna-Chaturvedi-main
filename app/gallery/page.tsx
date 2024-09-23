'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
// import image1 from "@/public/krishna_1.jpg"
// import image2 from "@/public/krishna_1.jpg"
// import image3 from "@/public/krishna_1.jpg"
// import image4 from "@/public/krishna_1.jpg"
// import image5 from "@/public/krishna_1.jpg"

// Sample data - replace with actual musician images
// const images = [
//   { id: 1, src:image1, alt: 'Musician on stage' },
//   { id: 2, src: image2, alt: 'Album cover' },
//   { id: 3, src: image3, alt: 'Studio session' },
//   { id: 4, src: image4, alt: 'Fan meet and greet'},
//   { id: 5, src: image5, alt: 'Backstage moment' },
//   { id: 6, src: image5, alt: 'Music video shoot' },
// ]

export default function MusicianGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Musician Gallery</h1>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(image)}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
          </motion.div>
        ))}
      </div> */}

      {/* {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={900}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </motion.div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )} */}
    </div>
  )
}