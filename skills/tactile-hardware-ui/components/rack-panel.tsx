import * as React from "react";
import { cn } from "../lib/cn";
import { materialsCss } from "../lib/materials";
import { useLight, type LightOptions } from "../hooks/use-light";

/** Injects the shared material CSS once. Render it anywhere above your controls. */
export function HardwareStyles() {
  return <style>{materialsCss}</style>;
}

export interface RackPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  finish?: "aluminium" | "black";
  title?: string;
  screws?: boolean;
  light?: LightOptions;
}

/** A brushed-metal faceplate with corner screws. Provides the light direction to everything inside. */
export function RackPanel({ finish = "aluminium", title, screws = true, light, className, style, children, ...rest }: RackPanelProps) {
  const lightVars = useLight(light);
  return (
    <div className={cn("hw-panel", finish === "black" && "hw-panel--black", className)} style={{ position: "relative", ...lightVars, ...style }} {...rest}>
      <HardwareStyles />
      {screws &&
        ([{ left: 8, top: 8 }, { right: 8, top: 8 }, { left: 8, bottom: 8 }, { right: 8, bottom: 8 }] as const).map((pos, i) => (
          <span key={i} aria-hidden className="hw-screw" style={{ position: "absolute", ...pos }} />
        ))}
      {title && <div className="hw-label" style={{ marginBottom: 16, textAlign: "center", width: "100%" }}>{title}</div>}
      {children}
    </div>
  );
}
