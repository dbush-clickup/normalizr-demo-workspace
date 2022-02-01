import { createFeatureSelector } from '@ngrx/store';
import { SharedState } from './shared-state';

export const sharedSelector = createFeatureSelector<SharedState>('shared');
