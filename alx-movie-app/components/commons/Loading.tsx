import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface LoadingProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Loading: React.FC<LoadingProps> = ({
  className = '',
  size = 'medium',
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <FontAwesomeIcon
        icon={faSpinner}
        className={`animate-spin ${sizeClasses[size]}`}
      />
    </div>
  );
};

export default Loading;
