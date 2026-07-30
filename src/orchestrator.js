import { registry } from './tools.js';
import { CostTracker } from './cost.js';

export class Orchestrator {
  constructor({ budgetUsd = 5 } = {}) {
    this.budget = budgetUsd;
    this.cost = new CostTracker();
    this.log = [];
  }

  async produce(brief) {
    this.log.push({ step: 'plan', brief });
    const plan = ['script', 'assets', 'edit', 'export'];

    for (const step of plan) {
      if (this.cost.total() >= this.budget) {
        this.log.push({ step: 'budget-cap', total: this.cost.total() });
        break;
      }
      const tool = registry[step];
      const out = await tool.execute({ brief });
      this.cost.add(tool.cost || 0.1, step);
      this.log.push({ step, out });
    }

    return {
      brief,
      decision_log: this.log,
      cost: this.cost.summary(),
      export: { format: 'mp4', platforms: ['tiktok', 'reels', 'shorts'] }
    };
  }
}
