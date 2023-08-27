type Comment = {
  type: 'BlockComment' | 'LineComment';
  raw: string;
  value: string;
  range: [number, number];
};

declare function extractComments(str: string): Comment[];

export = extractComments;
