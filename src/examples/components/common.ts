export type TProps = {
  isMemoized: boolean;
  changeProps: boolean;
} & TCompProps;

export type TCompProps = {
  value: number;
};

export type TValue = {
  value: number;
};

export type TObjectValue = {
  value: {
    num: number;
    str: string;
  };
};
