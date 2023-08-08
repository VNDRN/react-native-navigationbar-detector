import * as React from 'react';

import { ReactNativeNavigationbarDetectorViewProps } from './ReactNativeNavigationbarDetector.types';

export default function ReactNativeNavigationbarDetectorView(props: ReactNativeNavigationbarDetectorViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
