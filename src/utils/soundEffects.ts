// Simple sound effect player with user consent
class SoundEffectPlayer {
  private enabled: boolean = false;
  private consent: boolean | null = null;

  async requestConsent(): Promise<boolean> {
    if (this.consent !== null) {
      return this.consent;
    }

    // Simple prompt for consent
    const userConsent = window.confirm(
      "Would you like to enable sound effects for a more immersive experience?"
    );
    
    this.consent = userConsent;
    this.enabled = userConsent;
    return userConsent;
  }

  async play(soundType: 'page-flip' | 'lightbox-open') {
    if (!this.enabled) return;

    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      if (soundType === 'page-flip') {
        // Soft page flip sound
        oscillator.frequency.value = 440;
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
      } else if (soundType === 'lightbox-open') {
        // Gentle chime sound
        oscillator.frequency.value = 523.25;
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
      }
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
    this.consent = enabled;
  }

  isEnabled(): boolean {
    return this.enabled;
  }
}

export const soundPlayer = new SoundEffectPlayer();
