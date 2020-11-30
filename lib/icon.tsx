import React from 'react';
import './importIcons';
import './icon.scss';
import classnames from './helpers/classnames';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { className, name, ...restProps } = props;
  return (
    <svg className={classnames('luo-icon', name)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
