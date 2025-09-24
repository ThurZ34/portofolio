import React, { useState, useEffect } from 'react';
import './Hero.css';
import faturGif from '../assets/fatur.gif'; // Impor GIF Anda

// --- Konfigurasi Efek Mengetik ---
const wordsToCycle = ["Game", "Music", "Coding", "Movies", "Refa"];
const staticText = "Hello, I'm Thur. I Love ";
const typingSpeed = 200;    // Kecepatan mengetik (ms per karakter)
const deletingSpeed = 100;  // Kecepatan menghapus (ms per karakter)
const pauseDuration = 1500; // Durasi jeda di akhir kata (ms)

function Hero() {
  const [wordIndex, setWordIndex] = useState(0); // Indeks kata saat ini
  const [text, setText] = useState(''); // Teks dinamis yang ditampilkan
  const [isDeleting, setIsDeleting] = useState(false); // Status: sedang menghapus?

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = wordsToCycle[wordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      // Logika transisi status
      if (!isDeleting && updatedText === currentWord) {
        // Selesai mengetik -> jeda -> mulai menghapus
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && updatedText === '') {
        // Selesai menghapus -> pindah ke kata berikutnya
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % wordsToCycle.length);
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    // Cleanup timeout saat komponen dibongkar
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="hero-container">
      {/* Tampilkan GIF Anda sebagai avatar */}
      <img src={faturGif} alt="Fatur typing on a computer" className="pixel-avatar-img" />
      <div className="hero-text-container">
        <h1 className="hero-text">
          {staticText}
          <span className="dynamic-text">{text}</span>
          <span className="cursor">_</span>
        </h1>
      </div>
    </div>
  );
}

export default Hero;