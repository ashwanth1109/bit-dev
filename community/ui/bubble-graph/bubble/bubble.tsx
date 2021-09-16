import React from 'react';
import { Image } from '@teambit/base-react.content.image';
import styles from './bubble.module.scss';

export type BubbleProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string,

  /**
   * icon to show off.
   */
  icon: string,

  /**
   * 
   */
  color: string
} & React.HTMLAttributes<HTMLDivElement>;

export function Bubble({ text, icon, color = '#EDEDED' }: BubbleProps) {
  return (
    <div className={styles.bubble}>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1937 1.83337C8.09096 4.06476 3.9981 8.17609 1.79077 13.2917" stroke={color} stroke-width="2" stroke-linecap="round"/>
      </svg>
      <Image src={icon} />
    </div>
  );
}
