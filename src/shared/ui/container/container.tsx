import React, {FC, memo} from 'react';

interface props {
  children: JSX.Element;
}

const Container: FC<props> = ({children}) => {
  return <div className="container">{children}</div>;
};

export default memo(Container);
