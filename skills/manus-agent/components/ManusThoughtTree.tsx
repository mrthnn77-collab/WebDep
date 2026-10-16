import React, { useState } from 'react';

export interface ThoughtStep {
  id: string;
  type: 'plan' | 'tool' | 'observe' | 'reflect';
  title: string;
  status: 'pending' | 'running' | 'completed' | 'error';
  content?: string;
  durationMs?: number;
}

interface ManusThoughtTreeProps {
  steps: ThoughtStep[];
  isExecuting?: boolean;
}

export function ManusThoughtTree({ steps, isExecuting = false }: ManusThoughtTreeProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#0a0b0d] border border-[#1f2127] rounded-xl overflow-hidden font-mono text-xs text-zinc-300 shadow-2xl">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#121318] border-b border-[#1f2127]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-zinc-200 uppercase tracking-wider">MANUS AUTONOMOUS ENGINE</span>
        </div>
        <div className="flex items-center gap-3 text-zinc-500 text-[11px]">
          <span>{steps.length} STEPS</span>
          <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
            {isExecuting ? 'EXECUTING' : 'IDLE'}
          </span>
        </div>
      </div>

      {/* Steps List */}
      <div className="p-3 space-y-2">
        {steps.map((step, index) => {
          const isExpanded = expandedId === step.id;
          return (
            <div
              key={step.id}
              className="border border-[#1a1c22] rounded-lg bg-[#0e0f13] hover:border-zinc-700 transition-colors"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : step.id)}
                className="w-full flex items-center justify-between p-3 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-zinc-600">0{index + 1}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${
                    step.type === 'plan' ? 'bg-blue-950 text-blue-400 border border-blue-800' :
                    step.type === 'tool' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                    step.type === 'observe' ? 'bg-purple-950 text-purple-400 border border-purple-800' :
                    'bg-emerald-950 text-emerald-400 border border-emerald-800'
                  }`}>
                    {step.type}
                  </span>
                  <span className="text-zinc-200 font-medium">{step.title}</span>
                </div>

                <div className="flex items-center gap-3 text-zinc-500">
                  {step.durationMs && <span>{step.durationMs}ms</span>}
                  <span className={
                    step.status === 'completed' ? 'text-emerald-400' :
                    step.status === 'running' ? 'text-amber-400 animate-spin' :
                    step.status === 'error' ? 'text-rose-400' : 'text-zinc-600'
                  }>
                    {step.status === 'completed' ? '✓' :
                     step.status === 'running' ? '◐' :
                     step.status === 'error' ? '✕' : '○'}
                  </span>
                </div>
              </button>

              {isExpanded && step.content && (
                <div className="p-3 pt-0 text-zinc-400 border-t border-[#1a1c22] mt-1 bg-black/30 whitespace-pre-wrap leading-relaxed">
                  {step.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
