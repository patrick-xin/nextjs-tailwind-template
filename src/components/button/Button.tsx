import clsxm from 'clsx';
import { forwardRef } from 'react';
import { ImSpinner2 } from 'react-icons/im';

enum ButtonVariant {
  'primary',
  'secondary',
  'outline',
  'ghost',
  'light',
  'dark',
}

enum ButtonSize {
  'small',
  'medium',
  'large',
}

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
  size?: keyof typeof ButtonSize;
} & React.ComponentPropsWithRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      size = 'medium',
      isDarkBg = false,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'inline-flex items-center rounded font-semibold',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'shadow-sm',
          'transition-colors duration-75',
          [
            size === 'small' && ['px-2 py-1 text-xs'],
            size === 'medium' && ['px-4 py-2'],
            size === 'large' && ['px-6 py-4'],
          ],
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-primary text-white',
              'hover:bg-primary/90 hover:text-white',
              'active:bg-primary',
              'disabled:bg-primary/50 disabled:hover:bg-primary/50 disabled:border-none',
            ],
            variant === 'secondary' && [
              'bg-secondary text-white',
              'hover:bg-secondary/90 hover:text-white',
              'active:bg-secondary',
              'disabled:bg-secondary/50 disabled:hover:bg-secondary/50 disabled:border-none',
            ],
            variant === 'outline' && [
              'text-primary',
              'border border-primary',
              'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
              isDarkBg &&
                'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
            ],
            variant === 'ghost' && [
              'text-primary',
              'shadow-none',
              'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
              isDarkBg &&
                'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
            ],
            variant === 'light' && [
              'bg-white text-dark ',
              'border border-gray-300',
              'hover:bg-gray-100 hover:text-dark',
              'active:bg-white/80 disabled:bg-gray-200',
            ],
            variant === 'dark' && [
              'bg-gray-900 text-white',
              'border border-gray-600',
              'hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['primary', 'dark'].includes(variant),
                'text-black': ['light'].includes(variant),
                'text-primary-500': ['outline', 'ghost'].includes(variant),
              }
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {children}
      </button>
    );
  }
);
