"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

// Sample image data (replace with your own images)
const images = [
  { id: 1, src: "/krishna_1.jpg", alt: "Gallery Image 1" },
  { id: 2, src: "/krishna_2.jpg", alt: "Gallery Image 2" },
  { id: 3, src: "/krishna_1.jpg", alt: "Gallery Image 3" },
  { id: 4, src: "/krishna_1.jpg", alt: "Gallery Image 4" },
  { id: 5, src: "/krishna_1.jpg", alt: "Gallery Image 5" },
  { id: 6, src: "/krishna_1.jpg", alt: "Gallery Image 6" },
]

export default function AnimatedGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Animated Gallery</h1>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={900}
                height={600}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}