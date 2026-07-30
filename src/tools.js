export const registry = {
  script: {
    cost: 0.15,
    execute: async ({ brief }) => ({ text: `Script for: ${brief}` })
  },
  assets: {
    cost: 0.2,
    execute: async () => ({ clips: 3, music: true })
  },
  edit: {
    cost: 0.3,
    execute: async () => ({ timeline: 'assembled' })
  },
  export: {
    cost: 0.05,
    execute: async () => ({ file: 'out/final.mp4' })
  }
};
