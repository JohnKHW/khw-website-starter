"use client";

interface ImageLoaderProps {
  src: string;
  width?: number;
  quality?: number;
}
export default function ImageLoader({ src }: ImageLoaderProps) {
  return `${src}`;
}
