#!/usr/bin/env node

import { Box, Text } from "classy-ink";

import { render } from "ink";

function App() {
  return (
    <Box class="bg-zinc-950 border border-zinc-700 p-10 rounded-3xl flex-col gap-6">
      <Text class="text-4xl text-white font-bold tracking-tighter">
        Zynx UI
      </Text>
      <Text class="text-emerald-400 text-lg">
        Tailwind classes are working now!
      </Text>

      <Box class="flex gap-4 mt-4">
        <Box class="bg-blue-600 px-8 py-3 rounded-2xl">
          <Text class="text-white font-bold">Primary Button</Text>
        </Box>
        <Box class="bg-zinc-800 border border-zinc-600 px-8 py-3 rounded-2xl">
          <Text class="text-zinc-400">Secondary</Text>
        </Box>
      </Box>
    </Box>
  );
}

render(<App />);
