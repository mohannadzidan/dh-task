export function getCssProperty(property: string, v: any) {
  if (!v) return "";
  return `${property}: ${v};`;
}

export function unitize(v: string | number | undefined) {
  if (!v) return undefined;
  return typeof v === "string" ? v : v * 8 + "px";
}

export function getUnitizedProperty(
  property: string,
  v: string | number | undefined
) {
  if (!v) return undefined;
  return getCssProperty(property, unitize(v));
}
