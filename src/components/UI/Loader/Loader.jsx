import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <div className="relative w-4 h-4">
        {[...Array(8)].map((_, i) => {
          const angle = i * 45;
          const delay = i * 0.125;
          return (
            <div
              key={i}
              className={styles.blade}
              style={{
                left: '50%',
                bottom: 0,
                transform: `rotate(${angle}deg) translateY(-50%)`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Loader;
