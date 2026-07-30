export class CostTracker {
  constructor() { this.entries = []; }
  add(amount, label) { this.entries.push({ amount, label }); }
  total() { return this.entries.reduce((s, e) => s + e.amount, 0); }
  summary() { return { total: this.total().toFixed(3), entries: this.entries }; }
}
