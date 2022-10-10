import { StarIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react';
import React, { useMemo, useReducer, useCallback, Fragment } from 'react';
import { StartRatingProps } from './index.types';

/**
 * check for touch devices
 *
 * @returns `boolean`
 */
const isTouchDevice = () =>
  'ontouchstart' in window || navigator.maxTouchPoints > 0;

function calculateCurrentPosition(
  totalIcons: number,
  positionX: number,
  width: number
) {
  const singleHalfValue = 100 / totalIcons;
  const iconWidth = width / totalIcons;
  let currentValue = 100;

  for (let i = 0; i < totalIcons; i += 1) {
    // if position less then quarter icon
    if (positionX <= iconWidth * i + iconWidth / 4) {
      // if there is no value return 0
      if (i === 0 && positionX < iconWidth / 2) currentValue = 0;
      else currentValue = singleHalfValue * i;
      break;
    }
  }

  return currentValue;
}

type State = {
  defaultValue: number | null;
  hoverValue: number | null;
};

type Action =
  | { type: 'PointerMove'; payload: number | null }
  | { type: 'PointerLeave' }
  | { type: 'MouseClick'; payload: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'PointerMove':
      return {
        ...state,
        hoverValue: action.payload,
      };

    case 'PointerLeave':
      return {
        defaultValue: state.defaultValue,
        hoverValue: null,
      };

    case 'MouseClick':
      return {
        ...state,
        defaultValue: action.payload,
      };

    default:
      return state;
  }
}

export function StartRating({
  onClick,
  initialValue = 0,
  ratingValue = 0,
  iconsCount = 5,
  size = 20,
  readonly = false,
  fillColor = '#ffbc0b',
  fillColorArray = [],
  emptyColor = '#cccccc',
  fullIcon = null,
  emptyIcon = null,
  customIcons = [],
  rtl = false,
  allowHalfIcon = false,
  allowHover = true,
  transition = false,
  className = 'react-simple-star-rating',
  style,
  fullClassName = 'filled-icons',
  emptyClassName = 'empty-icons',
  fullStyle,
  emptyStyle,
  showTooltip = false,
  tooltipDefaultText = 'امتیاز',
  tooltipArray = [],
  tooltipClassName = 'react-simple-star-rating-tooltip',
  tooltipStyle,
}: StartRatingProps) {
  const [{ defaultValue, hoverValue }, dispatch] = useReducer(reducer, {
    defaultValue: ratingValue,
    hoverValue: null,
  });

  // re-render when ratingValue changes
  React.useEffect(
    () => dispatch({ type: 'MouseClick', payload: ratingValue }),
    [ratingValue]
  );

  /**
   * use pointer event rather than mouse event
   *
   * @param event
   * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent
   * @returns `void`
   */
  const onPointerMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    const { clientX, currentTarget } = event;
    // get main span element position and width
    const { left, right, width } =
      currentTarget.children[0].getBoundingClientRect();

    // set for RTL
    const positionX = rtl ? right - clientX : clientX - left;

    // Get current pointer position while moves over the icons
    const currentValue = calculateCurrentPosition(totalIcons, positionX, width);

    // set the value to state
    if (currentValue > 0 && hoverValue !== currentValue) {
      dispatch({ type: 'PointerMove', payload: currentValue });
    }
  };

  /**
   * handle onEnter
   * @param event
   * @returns `void`
   */
  const onPointerEnter = (event: React.PointerEvent<HTMLSpanElement>) => {
    // enable only on touch devices
    if (!isTouchDevice()) return;

    // call to get the value
    onPointerMove(event);
  };

  /**
   * handle onClick
   * @returns `void`
   */
  const onRate = () => {
    if (hoverValue) {
      dispatch({ type: 'MouseClick', payload: hoverValue });
      // update value on click
      if (onClick) onClick(hoverValue / 20);
    }
  };

  /**
   * handle onLeave
   * @returns `void`
   */
  const onPointerLeave = () => {
    if (isTouchDevice()) onRate();

    dispatch({ type: 'PointerLeave' });
  };

  // if there is a local rating value, convert it to precentage
  const localRating = useMemo(
    () => Math.round((initialValue / iconsCount) * 100),
    [initialValue, iconsCount]
  );

  /**
   * convert rating value to percentage value
   * @returns `hover value` | `rating value` | `local rating`
   */
  const valuePercentage = useMemo(
    () =>
      (allowHover && hoverValue && hoverValue) ||
      (defaultValue && defaultValue) ||
      localRating,
    [allowHover, hoverValue, defaultValue, localRating]
  );

  // handle total icons
  const totalIcons = useMemo(
    () => (allowHalfIcon ? iconsCount * 2 : iconsCount),
    [allowHalfIcon, iconsCount]
  );

  // convert value to index
  const valueIndex = useCallback(
    (value: number) => {
      let index = 1;
      if (value) {
        if (allowHalfIcon) index = value / totalIcons;
        else index = value / 2 / 10;
      }

      return Math.round(index - 1);
    },
    [allowHalfIcon, totalIcons]
  );

  // convert value to render value
  const renderValue = useCallback(
    (value: number) => (allowHalfIcon ? value / 2 / 10 : valueIndex(value) + 1),
    [allowHalfIcon, valueIndex]
  );

  // handle tooltip values
  const handleTooltip = (value: number) =>
    tooltipArray.length > 0
      ? tooltipArray[valueIndex(value)]
      : renderValue(value) || 0;

  return (
    <Tooltip
      isDisabled={!showTooltip}
      label={
        (hoverValue && handleTooltip(hoverValue)) ||
        (defaultValue && handleTooltip(defaultValue)) ||
        (localRating && handleTooltip(localRating)) ||
        tooltipDefaultText
      }
    >
      <span
        style={{
          display: 'inline-block',
          direction: `${rtl ? 'rtl' : 'ltr'}`,
          touchAction: 'none',
          position: 'relative',
        }}
      >
        <span
          className={className}
          style={{
            position: 'relative',
            display: 'inline-block',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            cursor: readonly ? '' : 'pointer',
            verticalAlign: 'middle',
            userSelect: 'none',
            ...style,
          }}
          onPointerMove={readonly ? undefined : onPointerMove}
          onPointerEnter={readonly ? undefined : onPointerEnter}
          onPointerLeave={readonly ? undefined : onPointerLeave}
          onClick={readonly ? undefined : onRate}
          aria-hidden='true'
        >
          <span
            className={emptyClassName}
            style={{
              display: 'inline-block',
              color: emptyColor,
              ...emptyStyle,
            }}
          >
            {[...Array(iconsCount)].map((_, index) => (
              <Fragment key={index}>
                {customIcons[index]?.icon || emptyIcon || (
                  <StarIcon
                    key={index}
                    boxSize={size ?? { base: 5, md: 8, lg: 10 }}
                    style={{ display: 'inline-block' }}
                  />
                )}
              </Fragment>
            ))}
          </span>

          <span
            className={fullClassName}
            style={{
              position: 'absolute',
              top: 0,
              [rtl ? 'right' : 'left']: 0,
              color:
                (allowHover &&
                  hoverValue &&
                  fillColorArray[valueIndex(hoverValue)]) ||
                (defaultValue && fillColorArray[valueIndex(defaultValue)]) ||
                fillColor,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              transition: transition ? 'width .2s ease, color .2s ease' : '',
              width: `${valuePercentage}%`,
              ...fullStyle,
            }}
            // title={`${
            //   (((hoverValue && renderValue(hoverValue)) ||
            //     renderValue(localRating)) *
            //     100) /
            //   5
            // }%`}
          >
            {[...Array(iconsCount)].map((_, index) => (
              <Fragment key={index}>
                {customIcons[index]?.icon || fullIcon || (
                  <StarIcon
                    boxSize={size ?? { base: 5, md: 8, lg: 10 }}
                    display='initial'
                    style={{ display: 'inline-block' }}
                  />
                )}
              </Fragment>
            ))}
          </span>
        </span>

        {/* {showTooltip && hoverValue && (
        <span
          className={tooltipClassName}
          style={{
            display: 'inline-block',
            position: 'absolute',
            left: `50%`,
            top: '-2rem',
            padding: '3px 10px',
            backgroundColor: '#333',
            fontSize: '0.8rem',
            color: '#fff',
            [rtl ? 'marginRight' : 'marginLeft']: 20,
            verticalAlign: 'middle',
            borderRadius: 5,
            ...tooltipStyle,
          }}
        >
          {(hoverValue && handleTooltip(hoverValue)) ||
            (defaultValue && handleTooltip(defaultValue)) ||
            (localRating && handleTooltip(localRating)) ||
            tooltipDefaultText}
        </span>
      )} */}
      </span>
    </Tooltip>
  );
}
