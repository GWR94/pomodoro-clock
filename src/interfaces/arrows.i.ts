export interface ArrowsProps {
  onHandleArrowClick: (work: boolean, add: boolean) => void;
  work?: boolean;
  workTime?: number;
  breakTime?: number;
}
