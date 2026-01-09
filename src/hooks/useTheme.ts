"use client";

import { useState, useEffect } from "react";

export const useTheme = () => {
  // Estado inicial já começa como "light"
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // 1. Verifica APENAS se existe uma escolha salva no navegador
    const savedTheme = localStorage.getItem("theme");

    // Se for "light" ou NÃO TIVER NADA (primeira vez), mantém light.
    const isDark = savedTheme === "dark";

    if (isDark) {
      document.documentElement.classList.add("dark");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme("dark");
    } else {
      // Garante que comece limpo (Light Mode)
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []); 

  const toggleTheme = () => {
    if (theme === "light") {
      // Usuário escolheu Dark -> Ativa e Salva
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      // Usuário escolheu Light -> Ativa e Salva
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return { theme, toggleTheme };
};