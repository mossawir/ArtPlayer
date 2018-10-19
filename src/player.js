import { clamp } from './utils';
import config from './config';

export default class Player {
  constructor(art) {
    this.art = art;
    this.init();
    this.eventBind();
  }

  init() {
    const { option } = this.art;
    const { $video } = this.art.refs;
    $video.controls = false;
    $video.poster = option.poster;
    $video.volume = clamp(option.volume, 0, 1);
    $video.autoplay = option.autoplay;
    $video.preload = option.preload;
    $video.src = option.url;
  }

  eventBind() {
    const { events: { proxy }, refs: { $video } } = this.art;

    config.video.events.forEach(eventName => {
      proxy($video, eventName, event => {
        this.art.emit(`video:${event.type}`, event);
      });
    });

    this.art.on('video:loadstart', () => {
      this.art.loading.show();
    });

    this.art.on('video:loadeddata', () => {
      this.art.loading.hide();
    });

    this.art.on('video:seeking', () => {
      this.art.loading.show();
    });

    this.art.on('video:canplay', () => {
      this.art.controls.show();
      this.art.mask.show();
      this.art.loading.hide();
      if (this.art.option.autoplay) {
        const promise = this.play();
        if (promise !== undefined) {
          promise.then().catch(err => {
            console.warn(err);
          });
        }
      }
    });

    this.art.on('video:playing', () => {
      this.art.isPlaying = true;
      this.art.controls.hide();
      this.art.mask.hide();
    });

    this.art.on('video:pause', () => {
      this.art.isPlaying = false;
      this.art.controls.show();
      this.art.mask.show();
    });

    this.art.on('video:ended', () => {
      this.art.isPlaying = false;
      this.art.controls.show();
      this.art.mask.show();
    });

    this.art.on('video:error', () => {
      this.art.isPlaying = false;
    });
  }

  play() {
    const { $video } = this.art.refs;
    const promise = $video.play();
    this.art.emit('play', $video);
    return promise;
  }

  pause() {
    const { $video } = this.art.refs;
    $video.pause();
    this.art.emit('pause', $video);
  }

  toggle() {
    if (this.art.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  seek(time) {
    const { $video } = this.art.refs;
    let newTime = Math.max(time, 0);
    if ($video.duration) {
      newTime = Math.min(newTime, $video.duration);
    }

    $video.currentTime = newTime;
    this.art.emit('seek', newTime);
  }

  volume(percentage) {
    const { $video } = this.art.refs;
    if (percentage) {
      $video.volume = clamp(percentage, 0, 1);
    }
    this.art.emit('volume', $video.volume);
  }

  switchVolumeIcon() {
    //
  }

  switchVideo() {
    //
  }

  switchQuality() {
    //
  }

  resize() {
    //
  }

  speed(rate) {
    const { $video } = this.art.refs;
    $video.playbackRate = rate;
    this.art.emit('speed', rate);
  }
}