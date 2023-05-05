import React, { forwardRef, useState } from 'react';
import { PasswordCheckerProps } from './index.types';

export const PasswordChecker = forwardRef<any, PasswordCheckerProps>(
  ({ ...ctx }, ref) => {
    const [status, setStatus] = useState<
      Record<keyof PasswordCheckerProps, boolean | Array<boolean>>
    >({ max: false, min: false, regex: [] });
    React.useEffect(() => {
      let node: any;
      const listen = (): void => {
        let min = false;
        let max = false;
        let regex: boolean[] = [];
        if (!!ctx.min) {
          min = node?.value.length! >= ctx.min.value;
        }
        if (!!ctx.max) {
          max = node?.value.length! <= ctx.max.value;
        }
        if (!!ctx.regex?.length) {
          ctx.regex.forEach((q, index) => {
            regex[index] = !!node?.value.match(q.value);
          });
        }
        setStatus({ min, max, regex });
      };
      if (typeof ref !== 'function' && !!ref) {
        node = ref.current;
        if (node) {
          node.addEventListener('keyup', listen);
        }
      }
      return () => {
        node?.removeEventListener('keyup', listen);
      };
    }, [ref]);
    return (
      <div
        style={{
          fontSize: '0.875rem',
          width: '100%',
          minHeight: '6rem',
          background: 'white',
          display: 'inline-block',
          border: '1px solid #e9e9e9',
          borderRadius: '5px',
          padding: '0.7rem',
          marginTop: '1rem',
        }}
      >
        <ul style={{ listStyle: 'none', lineHeight: '1.8rem' }}>
          {!!ctx.min && (
            <li style={{ color: !!status['min'] ? '#2ab15a' : '#ad2525' }}>
              {status['min'] ? '✅' : '❌'} {ctx.min.message}
            </li>
          )}
          {!!ctx.max && (
            <li style={{ color: !!status['max'] ? '#2ab15a' : '#ad2525' }}>
              {status['max'] ? '✅' : '❌'} {ctx.max.message}
            </li>
          )}
          {ctx.regex?.map((q, index) => (
            <li
              style={{
                color: !!(status['regex'] as Array<boolean>)[index]
                  ? '#2ab15a'
                  : '#ad2525',
              }}
            >
              {!!(status['regex'] as Array<boolean>)[index] ? '✅' : '❌'}
              {q.message}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
