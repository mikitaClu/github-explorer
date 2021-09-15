import React from 'react';
import Loader from 'react-loader-spinner';


type Props = {
  width?: number;
  height?: number;
}

export default function Spinner({ width, height}: Props): React.ReactElement {
  return <Loader type="Puff" color="#00BFFF" height={height ?? 35} width={width ?? 35} />
}
