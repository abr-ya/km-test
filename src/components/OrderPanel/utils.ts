interface ImoveInArray {
  array: any[];
  from: number;
  to: number;
}

export const moveInArray = ({ array, from, to }: ImoveInArray): any[] => {
  const newData = [...array];
  const item = newData.splice(from, 1)[0];
  newData.splice(to, 0, item);

  return newData;
};
