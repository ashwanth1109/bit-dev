import React from 'react';
import { UseCaseCard } from '@teambit/community.ui.use-case.use-case-card';
import { UseCases } from '@teambit/community.entity.use-cases';
import styles from './use-case-card-grid.module.scss';

export type UseCaseCardGridProps = {
  /**
   * An object of use cases with title and text and icon props
   */
  useCases: UseCases[];
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A section showing all the available use cases<br/>
 */
export function UseCaseCardGrid({ useCases, ...rest }: UseCaseCardGridProps) {
  return (
    <div className={styles.useCaseCardGrid} {...rest}>
      {useCases.map((useCase) => (
        <UseCaseCard
          key={useCase.title}
          title={useCase.title}
          text={useCase.text}
          image={useCase.image}
          alt={useCase.alt}
          href={useCase.href}
        />
      ))}
    </div>
  );
}