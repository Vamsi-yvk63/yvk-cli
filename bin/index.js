#!/usr/bin/env node

import { Command } from "commander";
import { execSync } from "child_process";


import { AddComponent } from "../dist/add-component.js";



import fs from "fs";
import path from "path";

const cwd = process.cwd();

const program = new Command();

program
  .name("yvk")
  .description("A cli for the adding UI components")
  .version("0.1.0");

program
  .command("add <component>")
  .description("add a pre-built component to your project")
  .option("-o, --output <path>", "output path for the component")
  .action(async (component, options) => {
    console.log(`\n Adding component: ${component}\n`);
    try {
      await AddComponent(component);
      console.log(`\n Component "${component}" added successfully!`);
      console.log(` Location: components/ui/${component}.tsx\n`);
    } catch (error) {
      console.error(" Error adding component:", error.message);
      process.exit(1);
    }
  });


program.parse();