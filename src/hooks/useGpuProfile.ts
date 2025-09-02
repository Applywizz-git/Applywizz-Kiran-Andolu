import { useState, useEffect } from 'react';

export interface GpuProfile {
  tier: 'high' | 'medium' | 'low';
  supportsWebGL2: boolean;
  maxTextureSize: number;
  enableHeavyEffects: boolean;
}

export const useGpuProfile = (): GpuProfile => {
  const [profile, setProfile] = useState<GpuProfile>({
    tier: 'medium',
    supportsWebGL2: false,
    maxTextureSize: 0,
    enableHeavyEffects: true
  });

  useEffect(() => {
    const detectGpuCapabilities = () => {
      try {
        // Create a canvas to test WebGL capabilities
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
        
        if (!gl) {
          return {
            tier: 'low' as const,
            supportsWebGL2: false,
            maxTextureSize: 0,
            enableHeavyEffects: false
          };
        }

        const supportsWebGL2 = !!(canvas.getContext('webgl2'));
        const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
        
        // Basic GPU tier detection based on available extensions and capabilities
        const extensions = gl.getSupportedExtensions() || [];
        const hasFloatTextures = extensions.includes('OES_texture_float') || extensions.includes('EXT_color_buffer_float');
        const hasInstancing = extensions.includes('ANGLE_instanced_arrays') || supportsWebGL2;
        
        let tier: 'high' | 'medium' | 'low' = 'low';
        let enableHeavyEffects = false;

        if (supportsWebGL2 && hasFloatTextures && hasInstancing && maxTextureSize >= 4096) {
          tier = 'high';
          enableHeavyEffects = true;
        } else if (hasFloatTextures && maxTextureSize >= 2048) {
          tier = 'medium';
          enableHeavyEffects = true;
        } else {
          tier = 'low';
          enableHeavyEffects = false;
        }

        // Check for low-power device indicators
        const isLowPower = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isLowPower) {
          tier = tier === 'high' ? 'medium' : 'low';
          enableHeavyEffects = enableHeavyEffects && tier !== 'low';
        }

        return {
          tier,
          supportsWebGL2,
          maxTextureSize,
          enableHeavyEffects
        };
      } catch (error) {
        console.warn('GPU detection failed, falling back to low-tier profile:', error);
        return {
          tier: 'low' as const,
          supportsWebGL2: false,
          maxTextureSize: 0,
          enableHeavyEffects: false
        };
      }
    };

    setProfile(detectGpuCapabilities());
  }, []);

  return profile;
};