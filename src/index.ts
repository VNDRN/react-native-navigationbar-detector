import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativeNavigationbarDetector.web.ts
// and on native platforms to ReactNativeNavigationbarDetector.ts
import ReactNativeNavigationbarDetectorModule from './ReactNativeNavigationbarDetectorModule';
import ReactNativeNavigationbarDetectorView from './ReactNativeNavigationbarDetectorView';
import { ChangeEventPayload, ReactNativeNavigationbarDetectorViewProps } from './ReactNativeNavigationbarDetector.types';

// Get the native constant value.
export const PI = ReactNativeNavigationbarDetectorModule.PI;

export function hello(): string {
  return ReactNativeNavigationbarDetectorModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeNavigationbarDetectorModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativeNavigationbarDetectorModule ?? NativeModulesProxy.ReactNativeNavigationbarDetector);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativeNavigationbarDetectorView, ReactNativeNavigationbarDetectorViewProps, ChangeEventPayload };
