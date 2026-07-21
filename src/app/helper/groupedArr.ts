import { FEATURED_PROJECTS, STACKS } from "../constant";

type ProjectType = (typeof FEATURED_PROJECTS)[number];
export function groupedProjects(): [string, Omit<ProjectType, "type">[]][] {
  const map = new Map<string, Omit<ProjectType, "type">[]>();

  FEATURED_PROJECTS.forEach((p) => {
    const type = p.type.toString();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type: _, ...proj } = p;
    if (map.has(type)) {
      map.set(type, [...map.get(type)!, proj]);
    } else {
      map.set(type, [proj]);
    }
  });
  return [...map];
}

type StackType = (typeof STACKS)[number];
export function groupedStacks(): [string, Omit<StackType, "type">[]][] {
  const map = new Map<string, Omit<StackType, "type">[]>();

  STACKS.forEach((p) => {
    const type = p.type.toString();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type: _, ...proj } = p;
    if (map.has(type)) {
      map.set(type, [...map.get(type)!, proj]);
    } else {
      map.set(type, [proj]);
    }
  });
  return [...map];
}
