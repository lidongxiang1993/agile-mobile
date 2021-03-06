import classnames from 'classnames';
import * as React from 'react';
import TouchFeedback from 'rmc-feedback';
import { ButtonPropsType } from './PropsType';
import { Icon } from '../index';

export interface ButtonProps extends ButtonPropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
  inline?: boolean;
  block?: boolean;
  hairline?: boolean;
  icon?: React.ReactNode;
  activeClassName?: string;
  activeStyle?: boolean | React.CSSProperties;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str: any) {
  return typeof str === 'string';
}

// Insert one space between two chinese characters automatically.
function insertSpace(child: any) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(
      child,
      {},
      child.props.children.split('').join(' '),
    );
  }
  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split('').join(' ');
    }
    return <span>{child}</span>;
  }
  return child;
}

class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    prefixCls: 'fam-button',
    size: 'default', // small default large
    inline: false,
    block: false,
    hairline: false,
    disabled: false,
    loading: false,
    activeStyle: {},
  };

  render() {
    const {
      children,
      className,
      prefixCls,
      type,
      size,
      inline,
      block,
      hairline,
      disabled,
      icon,
      loading,
      activeStyle,
      activeClassName,
      onClick,
      ...restProps
    } = this.props;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-primary`]: type === 'primary',
      [`${prefixCls}-warning`]: type === 'warning',
      [`${prefixCls}-success`]: type === 'success',
      [`${prefixCls}-danger`]: type === 'danger',
      [`${prefixCls}-default`]: type === 'default',
      [`${prefixCls}-link`]: type === 'link',
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-large`]: size === 'large',
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-hairline`]: hairline,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-loading`]: loading,
    });

    const kids = React.Children.map(children, insertSpace);

    // use div, button native is buggy @yiminghe
    return (
      <TouchFeedback
        // tslint:disable-next-line:jsx-no-multiline-js
        activeClassName={
          activeClassName || (activeStyle ? `${prefixCls}-active` : undefined)}
        disabled={disabled}
        activeStyle={activeStyle}
      >
        <button
          className={wrapCls}
          {...restProps}
          onClick={disabled || loading ? undefined : onClick}
          aria-disabled={disabled}
        >
          { loading && <Icon type="loading" size="inherit" />} {kids}
        </button>
      </TouchFeedback>
    );
  }
}

export default Button;