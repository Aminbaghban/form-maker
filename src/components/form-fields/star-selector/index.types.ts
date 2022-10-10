export interface StartRatingProps {
  onClick?: (value: number) => void;
  initialValue?: number;
  ratingValue?: number;
  iconsCount?: number;
  size?: number;
  readonly?: boolean;
  fillColor?: string;
  fillColorArray?: string[];
  emptyColor?: string;
  fullIcon?: React.ReactElement | null;
  emptyIcon?: React.ReactElement | null;
  customIcons?: {
    icon: React.ReactElement;
  }[];
  rtl?: boolean;
  allowHalfIcon?: boolean;
  allowHover?: boolean;
  transition?: boolean;
  className?: string;
  style?: React.CSSProperties;
  fullClassName?: string;
  emptyClassName?: string;
  fullStyle?: React.CSSProperties;
  emptyStyle?: React.CSSProperties;
  showTooltip?: boolean;
  tooltipDefaultText?: string;
  tooltipArray?: string[];
  tooltipClassName?: string;
  tooltipStyle?: React.CSSProperties;
}
