'use client';

export function getRetailerId (): string {
  if (typeof window !== "undefined") {
    return window.location.pathname.split('/')[2];
  }
  return "";
}