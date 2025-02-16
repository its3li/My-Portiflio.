import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function FallbackAnimation() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-background" />
      
      {/* Animated Circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
      />
      
      {/* Additional Decorative Elements */}
      <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-[1] dark:bg-grid-small-black/[0.2]" />
    </div>
  );
}

export default function Scene() {
  const [isWebGLSupported, setIsWebGLSupported] = useState<boolean | null>(null);

  useEffect(() => {
    // Check for WebGL support
    const checkWebGLSupport = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || 
                  canvas.getContext('experimental-webgl');
        
        // Additional checks for WebGL capabilities
        if (gl) {
          const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
          if (debugInfo) {
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            // Check if renderer is software-based or has known issues
            if (renderer.includes('SwiftShader') || 
                renderer.includes('Software') || 
                renderer.includes('Intel(R) HD Graphics 3000')) {
              return false;
            }
          }
          return true;
        }
        return false;
      } catch (e) {
        console.warn('WebGL support check failed:', e);
        return false;
      }
    };

    setIsWebGLSupported(checkWebGLSupport());
  }, []);

  // Show fallback animation when WebGL is not supported
  if (!isWebGLSupported) {
    return <FallbackAnimation />;
  }

  // Don't render anything while checking WebGL support
  if (isWebGLSupported === null) {
    return null;
  }

  return <FallbackAnimation />;
}