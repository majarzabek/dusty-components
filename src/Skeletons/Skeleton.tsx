import styles from './Skeleton.module.scss';
import cn from 'classnames';

type SkeletonProps = { className?: string; loaded?: boolean; children?: React.ReactNode };

export function SkeletonDiv({ className, loaded, children }: SkeletonProps) {
  return <div className={cn(className, styles.skeleton, loaded && styles.loaded)}>{children}</div>;
} 