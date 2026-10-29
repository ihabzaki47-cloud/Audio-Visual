// Class AudioPlayer (Encapsulation)
class AudioPlayer {
  constructor(audioSrc, title, artist) {
    this.audio = new Audio(audioSrc);
    this.title = title;
    this.artist = artist;
    this.isPlaying = false;
  }
  play() {
    this.audio.play();
    this.isPlaying = true;
  }
  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }
  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying = false;
  }
}

// Class CanvasVisualizer untuk Pemrograman Grafis
class CanvasVisualizer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.animationId = null;
  }
  drawAnimatedBars() {
    const render = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      const barWidth = 12;
      const numBars = 16;
      for (let i = 0; i < numBars; i++) {
        const barHeight = Math.random() * (this.canvas.height - 20) + 10;
        this.ctx.fillStyle = `hsl(${i * 20}, 80%, 50%)`;
        this.ctx.fillRect(i * (barWidth + 6) + 10, this.canvas.height - barHeight, barWidth, 
barHeight);
      }
      this.animationId = requestAnimationFrame(render);
    };
    render();
  }
  stopAnimation() {
    cancelAnimationFrame(this.animationId);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

// Instansiasi Objek
const player = new AudioPlayer('music_sample.mp3', 'Instrumen Tunas Media', 'Siswa RPL XI');
const visualizer = new CanvasVisualizer('visualizerCanvas');
// Event Binding
document.getElementById('playBtn').addEventListener('click', () => {
  player.play();
  visualizer.drawAnimatedBars();
  document.getElementById('trackTitle').innerText = player.title;
  document.getElementById('trackArtist').innerText = player.artist;
});
document.getElementById('pauseBtn').addEventListener('click', () => {
  player.pause();
  visualizer.stopAnimation();
});
document.getElementById('stopBtn').addEventListener('click', () => {
  player.stop();
  visualizer.stopAnimation();
});