/**
 * Shared surface materials. Inject once per page with <HardwareStyles /> (see components/rack-panel.tsx)
 * or copy into your global CSS. Every gradient reads the light vars from useLight().
 */
export const materialsCss = `
.hw-panel{--light-x:-.34;--light-y:-.94;--light-angle:250deg;
  background:
    repeating-linear-gradient(90deg,rgba(255,255,255,.035) 0 1px,transparent 1px 3px),
    linear-gradient(calc(var(--light-angle) + 90deg),#d9dbde,#a9adb3 55%,#8f949a);
  border-radius:14px;padding:20px;color:#1d1f22;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.7),inset 0 -1px 0 rgba(0,0,0,.25),0 10px 30px rgba(0,0,0,.35)}
.hw-panel--black{background:
    repeating-linear-gradient(90deg,rgba(255,255,255,.025) 0 1px,transparent 1px 3px),
    linear-gradient(calc(var(--light-angle) + 90deg),#2b2d31,#17181b);color:#e7e7e2}
.hw-screw{width:10px;height:10px;border-radius:50%;
  background:radial-gradient(circle at calc(50% - var(--light-x)*30%) calc(50% - var(--light-y)*30%),#f3f3f3,#8a8d92 60%,#55585c);
  box-shadow:0 1px 1px rgba(0,0,0,.4);position:relative}
.hw-screw::after{content:"";position:absolute;inset:4px 1px;background:#4a4c50;border-radius:1px;transform:rotate(35deg)}
.hw-metal{background:conic-gradient(from var(--light-angle),#f4f4f4,#9a9ea4,#e2e3e5,#80848a,#f4f4f4)}
.hw-label{font:600 10px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.12em;text-transform:uppercase;opacity:.75}
.hw-focus:focus-visible{outline:2px solid #ff7a1a;outline-offset:4px}
`;
