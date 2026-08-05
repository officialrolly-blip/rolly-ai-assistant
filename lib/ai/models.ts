// Curated list of free OpenRouter models, ordered by preference for interview-assistant use.
// The manager tries each in order until one works.
export interface OpenRouterModel {
  id: string;
  name: string;
  free: boolean;
}

export const FREE_MODELS: OpenRouterModel[] = [
  { id: 'inclusionai/ling-3.0-flash:free', name: 'Ling 3.0 Flash (free)', free: true },
  { id: 'poolside/laguna-s-2.1:free', name: 'Poolside Laguna S 2.1 (free)', free: true },
  { id: 'google/gemma-4-26b-a4b-it:free', name: 'Google Gemma 4 26B A4B (free)', free: true },
  { id: 'google/gemma-4-31b-it:free', name: 'Google Gemma 4 31B (free)', free: true },
  { id: 'nvidia/nemotron-3-super-120b-a12b:free', name: 'NVIDIA Nemotron 3 Super 120B (free)', free: true },
];

export function resolveModelId(choice: string): string {
  if (choice && choice !== 'auto') return choice;
  return FREE_MODELS[0].id;
}

export function getModelName(id: string): string {
  const found = FREE_MODELS.find((m) => m.id === id);
  return found ? found.name : id;
}
