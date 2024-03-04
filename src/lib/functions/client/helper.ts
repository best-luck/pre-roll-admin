'use client';

export function getRetailerId (): string {
  return window?.location?.pathname.split('/')[3];
}