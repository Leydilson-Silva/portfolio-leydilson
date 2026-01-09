"use client";

import { useState, useEffect } from "react";

export const useTheme = () => {
  // Estado inicial assume "light" para evitar erro de hidratação
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // 1. Pega a preferência salva ou do sistema
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Verifica se deve ser escuro
    const isDark = savedTheme === "dark" || (!savedTheme && systemDark);

    // 2. Aplica a classe no HTML imediatamente (evita piscar branco)
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // 3. Só atualiza o estado do React SE for necessário
    // Como iniciamos com "light", só chamamos setTheme se for "dark"
    if (isDark) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme("dark");
    }
  }, []); // Array vazio = roda apenas uma vez ao montar

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return { theme, toggleTheme };
};