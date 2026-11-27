import * as React from "react";
import { cn } from "../lib/cn";

export interface RockerSwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
  /** Text printed on the two halves. */
  onText?: string;
  offText?: string;
  /** Glowing indicator when on. */
  led?: boolean;
  className?: string;
}

/** A physical rocker switch with a pivot, printed I/O marks and an optional LED. role="switch". */
export function RockerSwitch({ checked, onCheckedChange, label, onText = "I", offText = "O", led = true, className }: RockerSwitchProps) {
  return (
    <div className={cn(className)} style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onCheckedChange(!checked)}
        className="hw-focus"
        style={{ position: "relative", width: 44, height: 72, borderRadius: 8, background: "#111", padding: 4, border: 0, cursor: "pointer", boxShadow: "inset 0 2px 4px rgba(0,0,0,.9), 0 1px 0 rgba(255,255,255,.3)", perspective: 200 }}
      >
        <span
          aria-hidden
          style={{
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%", borderRadius: 5, padding: "8px 0", font: "700 11px ui-monospace,monospace", color: "rgba(255,255,255,.8)",
            background: checked ? "linear-gradient(#3a3c40,#232427 48%,#1a1b1d 52%,#2e3034)" : "linear-gradient(#2e3034,#1a1b1d 48%,#232427 52%,#3a3c40)",
            transform: `rotateX(${checked ? 14 : -14}deg)`,
            transition: "transform 120ms cubic-bezier(.3,1.6,.5,1), background 120ms",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,.15)",
          }}
        >
          <span>{onText}</span>
          <span>{offText}</span>
        </span>
      </button>
      {led && (
        <span
          aria-hidden
          style={{
            width: 8, height: 8, borderRadius: "50%", background: checked ? "#ff3b30" : "#4a1210", boxShadow: checked ? "0 0 8px #ff3b30" : "inset 0 1px 1px rgba(0,0,0,.6)" }}
        />
      )}
      <span className="hw-label">{label}</span>
    </div>
  );
}
