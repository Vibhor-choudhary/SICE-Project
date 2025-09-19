import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Spline: any;
  }
}

interface SplineOrbProps {
  className?: string;
}

const SplineOrb: React.FC<SplineOrbProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('Initializing...');

  const showStatus = (message: string, type: 'info' | 'success' | 'error' = 'info') => {
    if (statusRef.current) {
      statusRef.current.innerHTML = `<div class="${type}">${message}</div>`;
    }
  };

  useEffect(() => {
    const loadSplineScene = async () => {
      try {
        showStatus('Initializing Spline runtime...', 'info');
        
        // Create Spline instance
        const spline = new window.Spline();
        
        showStatus('Loading orb.spline file...', 'info');
        
        // Load the scene
        await spline.load('/Reactive Orb.spline');
        
        showStatus('Creating Spline application...', 'info');
        
        // Create the app
        const app = await spline.createApp();
        
        showStatus('Rendering Spline scene...', 'info');
        
        // Remove loading indicator
        if (loadingRef.current) {
          loadingRef.current.style.display = 'none';
        }
        
        // Append the Spline app to container
        if (containerRef.current) {
          containerRef.current.appendChild(app);
        }
        
        showStatus('✅ Spline scene loaded successfully! You can now interact with the orb.', 'success');
        
        console.log('Spline scene loaded successfully!');
        
      } catch (error) {
        console.error('Error loading Spline scene:', error);
        if (loadingRef.current) {
          loadingRef.current.style.display = 'none';
        }
        showStatus(`❌ Error loading Spline scene: ${error instanceof Error ? error.message : 'Unknown error'}`, 'error');
      }
    };

    // Load Spline runtime script if not already loaded
    if (!window.Spline) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@splinetool/runtime@1.10.39/build/spline-runtime.min.js';
      script.onload = loadSplineScene;
      script.onerror = () => showStatus('Failed to load Spline runtime', 'error');
      document.head.appendChild(script);
    } else {
      loadSplineScene();
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className={`${className}`}>
      <style jsx>{`
        .spline-container {
          width: 100%;
          height: 500px;
          background: rgba(0,0,0,0.2);
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          margin-bottom: 2rem;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .loading {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .spinner {
          width: 48px;
          height: 48px;
          border: 4px solid rgba(255,255,255,0.3);
          border-top: 4px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .error {
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.5);
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
        }

        .success {
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.5);
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
        }

        .info {
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.5);
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
        }
      `}</style>
      
      <div className="spline-container" ref={containerRef}>
        <div className="loading" ref={loadingRef}>
          <div className="spinner"></div>
          <p>Loading Spline scene...</p>
        </div>
      </div>

      <div ref={statusRef}></div>
    </div>
  );
};

export default SplineOrb; 