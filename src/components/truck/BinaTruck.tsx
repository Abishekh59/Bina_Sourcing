import type { ReactNode } from "react"
import type { BinaTruckProps } from "./truck.types"

type SvgPartProps = {
  children: ReactNode
}

function TruckWheel({
  cx,
  cy,
  rear = false,
}: {
  cx: number
  cy: number
  rear?: boolean
}) {
  return (
    <g className={`bina-truck-wheel ${rear ? "bina-truck-wheel--rear" : ""}`}>
      <circle cx={cx} cy={cy} r="103" fill="#07141f" stroke="#243541" strokeWidth="8" />
      <circle cx={cx} cy={cy} r="82" fill="url(#truckTire)" stroke="#0d1d28" strokeWidth="5" />
      <circle cx={cx} cy={cy} r="55" fill="url(#truckRim)" stroke="#7d909b" strokeWidth="5" />
      <circle cx={cx} cy={cy} r="35" fill="#314754" stroke="#d3dde0" strokeWidth="4" />
      <circle cx={cx} cy={cy} r="17" fill="#101d26" />
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const radians = (angle * Math.PI) / 180
        return (
          <circle
            key={angle}
            cx={cx + Math.cos(radians) * 43}
            cy={cy + Math.sin(radians) * 43}
            r="4"
            fill="#12232e"
          />
        )
      })}
      <path
        d={`M ${cx - 62} ${cy - 46} A 78 78 0 0 1 ${cx + 45} ${cy - 64}`}
        fill="none"
        stroke="#eef4f4"
        strokeOpacity=".6"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
  )
}

function TruckCargoBox({ showBranding = true }: { showBranding?: boolean }) {
  return (
    <g className="bina-truck-cargo">
      <path
        d="M76 112 Q76 96 92 96 H1050 Q1066 96 1066 112 V408 H76Z"
        fill="url(#truckCargo)"
        stroke="#afbdc2"
        strokeWidth="7"
      />
      <path d="M83 111 H1059" stroke="#fff" strokeOpacity=".9" strokeWidth="8" />
      <path d="M83 400 H1059" stroke="#879ba3" strokeWidth="10" />
      <path d="M83 385 H1059" stroke="#f26735" strokeWidth="7" />
      <path d="M91 111 V397 M1052 111 V397" stroke="#a9b8bd" strokeWidth="6" />
      <path d="M603 106 V393" stroke="#d0dadd" strokeWidth="3" />
      <path d="M89 126 H1052 V383 H89Z" fill="none" stroke="#fff" strokeOpacity=".38" strokeWidth="2" />
      <path
        d="M730 385 L1038 110 H1060 V385Z"
        fill="#082b43"
        fillOpacity=".96"
      />
      <path
        d="M677 385 L1038 188 L1060 177 V219 L747 385Z"
        fill="#f26735"
      />
      <path d="M701 385 L1038 175" stroke="#fff" strokeWidth="10" strokeOpacity=".95" />
      {showBranding && (
        <g className="bina-truck-branding">
          <image
            href="/bina-sourcing-logo.png"
            x="155"
            y="145"
            width="390"
            height="166"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
      )}
      <g fill="#ffbd4c">
        <rect x="102" y="92" width="20" height="13" rx="4" />
        <rect x="1022" y="92" width="20" height="13" rx="4" />
        <rect x="132" y="388" width="18" height="10" rx="3" />
        <rect x="1005" y="388" width="18" height="10" rx="3" />
      </g>
    </g>
  )
}

function TruckChassis() {
  return (
    <g className="bina-truck-chassis">
      <path d="M90 408 H1324 V454 H90Z" fill="#101c24" />
      <path d="M160 424 H1172 V448 H160Z" fill="#344750" />
      <path d="M625 445 H1110 V470 H625Z" fill="#98a8ad" stroke="#d8e0df" strokeWidth="4" />
      <path d="M650 476 H1094 V494 H650Z" fill="#263943" />
      <path d="M1000 414 H1210 V449 H1000Z" fill="#142832" />
      <path d="M1066 421 H1190 V443 H1066Z" fill="#c2cdd0" />
      <path d="M100 448 H222 V465 H100Z" fill="#1d2f39" />
      <path d="M92 465 H228" stroke="#f26735" strokeWidth="5" />
    </g>
  )
}

function TruckCabin({ showHeadlights = true }: { showHeadlights?: boolean }) {
  return (
    <g
      className="bina-truck-cabin"
      transform="translate(1066 416) scale(.9) translate(-1066 -416)"
    >
      <path
        d="M1080 108 Q1093 88 1120 78 L1310 78 Q1396 82 1452 128 L1510 178 Q1540 205 1547 246 L1553 322 V416 H1066 V155Z"
        fill="url(#truckCab)"
        stroke="#a8b8bd"
        strokeWidth="7"
      />
      <path d="M1080 302 H1519 V414 H1067Z" fill="#082b43" />
      <path d="M1074 333 H1519 V359 H1074Z" fill="#124464" />
      <path d="M1090 376 H1512" stroke="#f26735" strokeWidth="8" />
      <path d="M1090 366 H1512" stroke="#ffe074" strokeWidth="4" />
      <path d="M1128 112 Q1140 96 1165 92 H1302 Q1358 96 1406 126 L1455 176 H1125Z" fill="url(#truckGlass)" stroke="#76909a" strokeWidth="6" />
      <path d="M1273 96 V177" stroke="#8aa1a9" strokeWidth="5" />
      <path d="M1140 112 Q1172 100 1212 99 L1185 172 H1134Z" fill="#d8e9ec" fillOpacity=".12" />
      <path d="M1452 178 L1490 194 V270 H1452Z" fill="#1a3442" stroke="#708991" strokeWidth="5" />
      <path d="M1460 183 Q1495 168 1514 185 L1514 202 L1460 208Z" fill="#152a36" />
      <path d="M1517 226 H1543 V246 H1517Z" fill="#f5ad3d" />
      <path d="M1497 326 H1549 V378 H1497Z" fill="#172b35" stroke="#6d838d" strokeWidth="4" />
      <path d="M1504 337 H1543 M1504 348 H1543 M1504 359 H1543" stroke="#9eb0b5" strokeWidth="4" />
      <path d="M1494 393 H1552 V426 H1482Z" fill="#697b82" stroke="#d2dcdb" strokeWidth="4" />
      <path d="M1414 298 H1460 V306 H1414Z" fill="#152832" />
      <path d="M1399 294 H1419 V304 H1399Z" fill="#101e27" />
      <path d="M1450 300 V325" stroke="#162a34" strokeWidth="7" />
      <path d="M1520 265 H1552 V285 H1520Z" fill="#f26735" />
      {showHeadlights && (
        <>
          <path d="M1515 302 H1546 V330 H1515Z" fill="#fff4c6" stroke="#fff" strokeWidth="3" />
          <path d="M1521 309 H1547" stroke="#ffd77c" strokeWidth="4" />
        </>
      )}
      <path d="M1070 406 H1546" stroke="#101d25" strokeWidth="13" />
    </g>
  )
}

function TruckShadow() {
  return <ellipse className="bina-truck-shadow" cx="800" cy="526" rx="710" ry="26" fill="#000" fillOpacity=".28" />
}

function BinaTruckSvg({
  showBranding,
  showHeadlights,
  showShadow,
  variant,
}: Pick<BinaTruckProps, "showBranding" | "showHeadlights" | "showShadow" | "variant">) {
  return (
    <svg
      className={`bina-truck-svg bina-truck-svg--${variant ?? "standard"}`}
      viewBox="0 0 1600 600"
      role="img"
      aria-label="BINA Sourcing delivery truck"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="truckCargo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset=".55" stopColor="#f5f8f8" />
          <stop offset="1" stopColor="#dce6e9" />
        </linearGradient>
        <linearGradient id="truckCab" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset=".65" stopColor="#edf3f3" />
          <stop offset="1" stopColor="#c3d0d3" />
        </linearGradient>
        <linearGradient id="truckGlass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#17384b" />
          <stop offset=".5" stopColor="#527887" />
          <stop offset="1" stopColor="#102b3b" />
        </linearGradient>
        <radialGradient id="truckTire" cx=".35" cy=".3">
          <stop offset="0" stopColor="#344550" />
          <stop offset=".6" stopColor="#182731" />
          <stop offset="1" stopColor="#0b151d" />
        </radialGradient>
        <radialGradient id="truckRim" cx=".3" cy=".25">
          <stop offset="0" stopColor="#f1f5f4" />
          <stop offset=".55" stopColor="#bac8cb" />
          <stop offset="1" stopColor="#71858f" />
        </radialGradient>
      </defs>
      {showShadow && <TruckShadow />}
      <TruckChassis />
      <TruckCargoBox showBranding={showBranding} />
      <TruckCabin showHeadlights={showHeadlights} />
      <TruckWheel cx={350} cy={468} rear />
      <TruckWheel cx={850} cy={468} rear />
      <TruckWheel cx={1370} cy={468} />
    </svg>
  )
}

export default function BinaTruck({
  compact = false,
  animated = false,
  showBranding = true,
  showHeadlights = true,
  showShadow = true,
  reducedMotion = false,
  variant = "detailed",
}: BinaTruckProps) {
  return (
    <div
      className={`bina-truck ${compact ? "bina-truck--compact" : ""} ${animated ? "bina-truck--animated" : ""} ${reducedMotion ? "bina-truck--reduced-motion" : ""}`}
    >
      <BinaTruckSvg
        showBranding={showBranding}
        showHeadlights={showHeadlights}
        showShadow={showShadow}
        variant={variant}
      />
    </div>
  )
}
