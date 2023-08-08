import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeNavigationbarDetectorViewProps } from './ReactNativeNavigationbarDetector.types';

const NativeView: React.ComponentType<ReactNativeNavigationbarDetectorViewProps> =
  requireNativeViewManager('ReactNativeNavigationbarDetector');

export default function ReactNativeNavigationbarDetectorView(props: ReactNativeNavigationbarDetectorViewProps) {
  return <NativeView {...props} />;
}
