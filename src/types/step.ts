export interface StepComponentProps {
  onNext?: () => void;
  onBack?: () => void;
}

export interface StepItem {
  Component: React.ComponentType<StepComponentProps>;
}
