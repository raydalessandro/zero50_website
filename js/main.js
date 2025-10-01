// ============================================
// STATE MANAGEMENT
// ============================================
const state = {
    isMuted: false,
    isPlaying: false,
    activeTrackId: null,
    currentTime: 0,
    glitchActive: false,
    scanlinePosition: 0
};

// Track data with durations in seconds
const tracksData = {
    1: { duration: 201, title: "MONDO VECCHIO" },
    2: { duration: 178, title: "ANIME PERDUTE" },
    3: { duration: 225, title: "INCUBO/SOGNO" }
};

// ============================================
// NOISE CANVAS
// ============================================
function initNoiseCanvas() {
    const canvas = document.getElementById('noiseCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    function drawNoise() {
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            const noise = Math.random() * 15;
            data[i] = noise;
            data[i + 1] = noise;
            data[i + 2] = noise;
            data[i + 3] = 8;
        }
        
        ctx.putImageData(imageData, 0, 0);
        requestAnimationFrame(drawNoise);
    }
    
    drawNoise();
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ============================================
// GLITCH EFFECT
// ============================================
function initGlitchEffect() {
    const glitchOverlay = document.getElementById('glitchOverlay');
    const mask = document.getElementById('mask');
    const heroTitle = document.getElementById('heroTitle');
    
    setInterval(() => {
        if (Math.random() > 0.95) {
            state.glitchActive = true;
            
            if (glitchOverlay) glitchOverlay.classList.add('active');
            if (mask) mask.classList.add('glitch');
            if (heroTitle) heroTitle.classList.add('blur');
            
            setTimeout(() => {
                state.glitchActive = false;
                if (glitchOverlay) glitchOverlay.classList.remove('active');
                if (mask) mask.classList.remove('glitch');
                if (heroTitle) heroTitle.classList.remove('blur');
            }, 100);
        }
    }, 2000);
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!mobileMenuBtn || !mobileMenu) return;
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// ============================================
// VOLUME CONTROL
// ============================================
function initVolumeControl() {
    const volumeBtn = document.getElementById('volumeBtn');
    if (!volumeBtn) return;
    
    volumeBtn.addEventListener('click', () => {
        state.isMuted = !state.isMuted;
        
        const volumeOn = volumeBtn.querySelector('.volume-on');
        const volumeOff = volumeBtn.querySelector('.volume-off');
        
        if (state.isMuted) {
            volumeOn.style.display = 'none';
            volumeOff.style.display = 'block';
        } else {
            volumeOn.style.display = 'block';
            volumeOff.style.display = 'none';
        }
    });
}

// ============================================
// TRACK INTERACTION
// ============================================
function initTracks() {
    const trackItems = document.querySelectorAll('.track-item');
    
    trackItems.forEach(item => {
        const trackId = parseInt(item.dataset.trackId);
        const trackHeader = item.querySelector('.track-header');
        const trackPlayBtn = item.querySelector('.track-play-btn');
        const playerPlayBtn = item.querySelector('.player-play-btn');
        
        // Track header click - expand/collapse
        trackHeader.addEventListener('click', (e) => {
            // Don't trigger if clicking the play button
            if (e.target.closest('.track-play-btn')) return;
            
            handleTrackClick(trackId, item);
        });
        
        // Track play button click
        if (trackPlayBtn) {
            trackPlayBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                handleTrackClick(trackId, item);
            });
        }
        
        // Player play button click
        if (playerPlayBtn) {
            playerPlayBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                handlePlayPause(trackId, item);
            });
        }
        
        // Initialize waveform
        initWaveform(item);
    });
}

function handleTrackClick(trackId, item) {
    const wasActive = item.classList.contains('active');
    
    // Close all tracks
    document.querySelectorAll('.track-item').forEach(t => {
        t.classList.remove('active');
    });
    
    if (!wasActive) {
        // Open clicked track
        item.classList.add('active');
        state.activeTrackId = trackId;
        
        // Trigger glitch effect
        triggerGlitch();
    } else {
        state.activeTrackId = null;
    }
}

function handlePlayPause(trackId, item) {
    if (state.activeTrackId === trackId) {
        // Toggle play/pause for active track
        state.isPlaying = !state.isPlaying;
        updatePlayButtons(item, state.isPlaying);
        
        if (state.isPlaying) {
            startPlaybackSimulation(trackId, item);
        } else {
            stopPlaybackSimulation();
        }
    }
}

function updatePlayButtons(item, isPlaying) {
    const buttons = item.querySelectorAll('.track-play-btn, .player-play-btn');
    
    buttons.forEach(btn => {
        const playIcon = btn.querySelector('.play-icon');
        const pauseIcon = btn.querySelector('.pause-icon');
        
        if (isPlaying) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    });
}

// ============================================
// PLAYBACK SIMULATION
// ============================================
let playbackInterval = null;

function startPlaybackSimulation(trackId, item) {
    stopPlaybackSimulation();
    
    const trackData = tracksData[trackId];
    if (!trackData) return;
    
    const progressFill = item.querySelector('.progress-fill');
    const currentTimeEl = item.querySelector('.current-time');
    const waveformBars = item.querySelectorAll('.waveform-bar');
    
    playbackInterval = setInterval(() => {
        state.currentTime++;
        
        if (state.currentTime >= trackData.duration) {
            state.currentTime = 0;
            state.isPlaying = false;
            updatePlayButtons(item, false);
            stopPlaybackSimulation();
            return;
        }
        
        // Update progress bar
        const progress = (state.currentTime / trackData.duration) * 100;
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }
        
        // Update time display
        if (currentTimeEl) {
            currentTimeEl.textContent = formatTime(state.currentTime);
        }
        
        // Animate waveform bars
        waveformBars.forEach((bar, index) => {
            if (index < (state.currentTime / trackData.duration) * 60) {
                bar.style.opacity = '1';
                bar.classList.add('playing');
            } else {
                bar.style.opacity = '0.3';
                bar.classList.remove('playing');
            }
        });
    }, 1000);
}

function stopPlaybackSimulation() {
    if (playbackInterval) {
        clearInterval(playbackInterval);
        playbackInterval = null;
    }
}

// ============================================
// WAVEFORM GENERATION
// ============================================
function initWaveform(item) {
    const waveform = item.querySelector('.waveform');
    if (!waveform) return;
    
    // Generate 60 bars
    for (let i = 0; i < 60; i++) {
        const bar = document.createElement('div');
        bar.className = 'waveform-bar';
        const height = Math.random() * 100;
        bar.style.height = `${height}%`;
        bar.style.opacity = '0.3';
        bar.style.animationDelay = `${i * 0.02}s`;
        waveform.appendChild(bar);
    }
}

// ============================================
// UTILITIES
// ============================================
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function triggerGlitch() {
    const glitchOverlay = document.getElementById('glitchOverlay');
    const mask = document.getElementById('mask');
    
    if (glitchOverlay) glitchOverlay.classList.add('active');
    if (mask) mask.classList.add('glitch');
    
    setTimeout(() => {
        if (glitchOverlay) glitchOverlay.classList.remove('active');
        if (mask) mask.classList.remove('glitch');
    }, 150);
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// HERO CTA BUTTONS
// ============================================
function initHeroCTA() {
    const primaryBtn = document.querySelector('.hero-cta .btn-primary');
    const secondaryBtn = document.querySelector('.hero-cta .btn-secondary');
    
    if (primaryBtn) {
        primaryBtn.addEventListener('click', () => {
            const tracksSection = document.getElementById('tracks');
            if (tracksSection) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = tracksSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    if (secondaryBtn) {
        secondaryBtn.addEventListener('click', () => {
            const tracksSection = document.getElementById('tracks');
            if (tracksSection) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = tracksSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Open first track after scrolling
                setTimeout(() => {
                    const firstTrack = document.querySelector('.track-item[data-track-id="1"]');
                    if (firstTrack && !firstTrack.classList.contains('active')) {
                        handleTrackClick(1, firstTrack);
                    }
                }, 800);
            }
        });
    }
}

// ============================================
// PROGRESS BAR INTERACTION
// ============================================
function initProgressBarInteraction() {
    document.querySelectorAll('.progress-bar').forEach(progressBar => {
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = clickX / rect.width;
            
            const trackItem = progressBar.closest('.track-item');
            const trackId = parseInt(trackItem.dataset.trackId);
            const trackData = tracksData[trackId];
            
            if (trackData) {
                state.currentTime = Math.floor(percentage * trackData.duration);
                
                const progressFill = progressBar.querySelector('.progress-fill');
                const currentTimeEl = trackItem.querySelector('.current-time');
                
                if (progressFill) {
                    progressFill.style.width = `${percentage * 100}%`;
                }
                
                if (currentTimeEl) {
                    currentTimeEl.textContent = formatTime(state.currentTime);
                }
            }
        });
    });
}

// ============================================
// PLAYER VOLUME BUTTONS
// ============================================
function initPlayerVolumeButtons() {
    document.querySelectorAll('.player-volume-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            state.isMuted = !state.isMuted;
            
            // Update main volume button
            const mainVolumeBtn = document.getElementById('volumeBtn');
            if (mainVolumeBtn) {
                const volumeOn = mainVolumeBtn.querySelector('.volume-on');
                const volumeOff = mainVolumeBtn.querySelector('.volume-off');
                
                if (state.isMuted) {
                    volumeOn.style.display = 'none';
                    volumeOff.style.display = 'block';
                } else {
                    volumeOn.style.display = 'block';
                    volumeOff.style.display = 'none';
                }
            }
        });
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initNoiseCanvas();
    initGlitchEffect();
    initMobileMenu();
    initVolumeControl();
    initTracks();
    initSmoothScroll();
    initHeroCTA();
    initProgressBarInteraction();
    initPlayerVolumeButtons();
    
    console.log('UCT // ZERO50 - System loaded');
    console.log('Dal rumore alla risonanza. Sempre.');
});
