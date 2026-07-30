#!/usr/bin/env node
import { Orchestrator } from './orchestrator.js';

const briefIdx = process.argv.indexOf('--brief');
const brief = briefIdx >= 0 ? process.argv[briefIdx + 1] : 'demo video';

const orch = new Orchestrator({ budgetUsd: 2.0 });
console.log('montage-lite ready');
const result = await orch.produce(brief);
console.log(JSON.stringify(result, null, 2));
