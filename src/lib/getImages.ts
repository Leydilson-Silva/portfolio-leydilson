import fs from "fs";
import path from "path";

export function getProjectImages(folderName: string): string[] {
  try {
    // 1. Define o caminho: projeto/public/projects/NOME_DA_PASTA
    const directoryPath = path.join(process.cwd(), "public", "projects", folderName);

    // 2. Tenta ler a pasta
    const files = fs.readdirSync(directoryPath);

    // 3. Filtra só o que é imagem (png, jpg, jpeg, webp) e cria o caminho final
    const images = files
      .filter((file) => /\.(png|jpe?g|webp)$/i.test(file)) // Aceita essas extensões
      .map((file) => `/projects/${folderName}/${file}`); // Cria o link: /projects/ecommerce/1.png

    return images;
  } catch (error) {
    // Se a pasta não existir ou estiver vazia, retorna array vazio
    console.error(`Erro ao ler imagens da pasta ${folderName}:`, error);
    return [];
  }
}