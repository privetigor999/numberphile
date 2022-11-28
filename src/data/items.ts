interface Items {
  id: number;
  type: string;
  title: string;
}

export const items: Items[] = [
  {
    id: 1,
    type: "trivia",
    title: "Trivia",
  },
  {
    id: 2,
    type: "math",
    title: "Math",
  },
  {
    id: 3,
    type: "year",
    title: "Year",
  },
  {
    id: 4,
    type: "date",
    title: "Date",
  },
];
