import { join, resolve } from "path";

export const assetFolder = resolve(__dirname, "../assets");
export const directory = resolve(__dirname, "../repo/sdk");
export const tmpDirectory = resolve(__dirname, "../tmp");
export const configPath = join(tmpDirectory, "config.yml");
export const schemaPath = join(tmpDirectory, "swagger.json");
export const templatePath = join(assetFolder, "templates");
export const generatorCliPath =
  process.env["DOCKER"] === "true"
    ? "/usr/bin/swagger"
    : process.platform === "win32"
    ? resolve(__dirname, "../../../vendor", "./swagger_windows_amd64.exe")
    : resolve(__dirname, "../../../vendor", "./swagger_linux_amd64");
