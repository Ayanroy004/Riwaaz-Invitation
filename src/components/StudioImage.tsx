import React, { useState } from 'react';
import { BrandCrest } from './OrnamentMotif';

interface StudioImageProps {
  src: string;
  alt: string;
  fallbackLabel?: string;
  className?: string;
  imgClassName?: string;
  loading?: 'eager' | 'lazy';
}

export const StudioImage: React.FC<StudioImageProps> = ({
  src,
  alt,
  fallbackLabel = 'Riwaaz Invitation',
  className = '',
  imgClassName = '',
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F5EE] via-[#EFE9DC] to-[#E4D2A0]/40 text-[#124E46] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <BrandCrest className="w-10 h-10 mb-3 opacity-80" />
        <p className="font-serif text-lg font-medium tracking-wide text-[#0B332E]">
          {fallbackLabel}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#EFEAE0] ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
};
