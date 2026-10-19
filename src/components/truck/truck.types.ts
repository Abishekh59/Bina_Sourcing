export type BinaTruckVariant = "standard" | "detailed"

export type BinaTruckProps = {
  compact?: boolean
  animated?: boolean
  progress?: number
  showShadow?: boolean
  showBranding?: boolean
  showHeadlights?: boolean
  reducedMotion?: boolean
  variant?: BinaTruckVariant
}
