import fs from 'fs'
import path from 'path'
import { fetchRegistryFile, fetchRegistryIndex } from './registry.js';


export async function AddComponent(componentName: string, overwrite = false) {

    const index  = await fetchRegistryIndex();
    const component = Array.isArray(index) ? index.find((c: any) => c.name == componentName) : index[componentName] 

    if (!component) {
        throw new Error(`component ${componentName} not found in registry`);
    }

    for (const file of component.files) {
        const content = await fetchRegistryFile(file.path);
        // Normalize the target path to be relative (remove absolute paths)
        const relativePath = path.isAbsolute(file.target) ? path.basename(file.target) : file.target;
        const targetPath = path.join(process.cwd(), relativePath, path.basename(file.path))
        fs.mkdirSync(path.dirname(targetPath), { recursive: true });
        if (fs.existsSync(targetPath) && !overwrite) {
            console.warn(`Skipping ${targetPath} (exists, use overwrite: true)`);
            continue;
        }
        fs.writeFileSync(targetPath, content, 'utf-8')

    }
    console.log(`\n ${componentName} installed successfully`)
}