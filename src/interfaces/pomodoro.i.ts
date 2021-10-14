export interface PomodoroState {
  workTime: number;
  breakTime: number;
  timerSeconds: number;
  workTimerOn: boolean;
  time: string;
  isPaused: boolean;
  isPlaying: boolean;
}
