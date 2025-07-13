import React, { useState, useRef, useEffect } from 'react';

// 1. OPTIMIZED IMAGE COMPONENT WITH LAZY LOADING
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  srcSet
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate responsive srcSet if not provided
  const generateSrcSet = (baseSrc: string) => {
    if (srcSet) return srcSet;
    
    const baseUrl = baseSrc.split('?')[0];
    const params = baseSrc.includes('?') ? '&' + baseSrc.split('?')[1] : '';
    
    return [
      `${baseUrl}?w=400${params} 400w`,
      `${baseUrl}?w=800${params} 800w`,
      `${baseUrl}?w=1200${params} 1200w`,
      `${baseUrl}?w=1600${params} 1600w`
    ].join(', ');
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"
          style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
        />
      )}
      
      {/* Actual image */}
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        srcSet={isInView ? generateSrcSet(src) : undefined}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : 'auto'
        }}
      />
    </div>
  );
};

// 2. WEBP/AVIF FORMAT SUPPORT COMPONENT
export const ModernImageFormat: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false
}) => {
  const getModernFormats = (originalSrc: string) => {
    const baseUrl = originalSrc.split('?')[0];
    const extension = baseUrl.split('.').pop();
    const baseName = baseUrl.replace(`.${extension}`, '');
    
    return {
      avif: `${baseName}.avif`,
      webp: `${baseName}.webp`,
      original: originalSrc
    };
  };

  const formats = getModernFormats(src);

  return (
    <picture className={className}>
      {/* AVIF format for modern browsers */}
      <source
        srcSet={`
          ${formats.avif}?w=400 400w,
          ${formats.avif}?w=800 800w,
          ${formats.avif}?w=1200 1200w
        `}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        type="image/avif"
      />
      
      {/* WebP format for supported browsers */}
      <source
        srcSet={`
          ${formats.webp}?w=400 400w,
          ${formats.webp}?w=800 800w,
          ${formats.webp}?w=1200 1200w
        `}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        type="image/webp"
      />
      
      {/* Fallback to original format */}
      <OptimizedImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
    </picture>
  );
};

// 3. HERO IMAGE WITH CRITICAL CSS
export const HeroImage: React.FC<{
  src: string;
  alt: string;
  title?: string;
}> = ({ src, alt, title }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <OptimizedImage
        src={src}
        alt={alt}
        priority={true}
        className="w-full h-full object-cover"
        sizes="100vw"
        srcSet={`
          ${src}?w=768 768w,
          ${src}?w=1024 1024w,
          ${src}?w=1366 1366w,
          ${src}?w=1920 1920w
        `}
      />
      
      {/* SEO-optimized overlay content */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          {title && (
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {title}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

// 4. COURSE CARD WITH OPTIMIZED IMAGES
export const CourseCard: React.FC<{
  title: string;
  image: string;
  description: string;
}> = ({ title, image, description }) => {
  // SEO-optimized alt text generation
  const generateAltText = (title: string) => {
    return `${title} course - Healthcare training program at CliniGlobal Research Institute`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <OptimizedImage
        src={image}
        alt={generateAltText(title)}
        width={400}
        height={250}
        className="w-full h-64 object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// 5. IMAGE SITEMAP GENERATOR (Node.js utility)
export const generateImageSitemap = () => {
  const images = [
    {
      loc: 'https://cliniglobal.com/images/clinical-research-lab.jpg',
      caption: 'Clinical Research Laboratory - Advanced training facility',
      title: 'Clinical Research Training Lab',
      license: 'https://cliniglobal.com/image-license'
    },
    {
      loc: 'https://cliniglobal.com/images/medical-coding-training.jpg',
      caption: 'Medical Coding Training Session - Professional healthcare education',
      title: 'Medical Coding Training Program'
    },
    {
      loc: 'https://cliniglobal.com/images/healthcare-professionals.jpg',
      caption: 'Healthcare Professionals Team - Expert faculty and trainers',
      title: 'CliniGlobal Faculty Team'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${images.map(img => `
  <url>
    <loc>https://cliniglobal.com/</loc>
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:caption>${img.caption}</image:caption>
      <image:title>${img.title}</image:title>
      ${img.license ? `<image:license>${img.license}</image:license>` : ''}
    </image:image>
  </url>`).join('')}
</urlset>`;

  return sitemap;
};