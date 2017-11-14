var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import { Actions, ClosedCaption, Expand, Play, Pause, Volume, VolumeLow } from 'grommet-icons';
import { Box } from '../Box';
import { Button } from '../Button';
import { Menu } from '../Menu';
import { Meter } from '../Meter';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { withTheme } from '../hocs';
import { throttle } from '../../utils';

import StyledVideo, { StyledVideoContainer, StyledVideoControls, StyledVideoScrubber } from './StyledVideo';

import doc from './doc';

// Split the volume control into 6 segments. Empirically determined.
var VOLUME_STEP = 0.166667;

var formatTime = function formatTime(time) {
  var minutes = Math.round(time / 60);
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  var seconds = Math.round(time) % 60;
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return minutes + ':' + seconds;
};

var Video = function (_Component) {
  _inherits(Video, _Component);

  function Video() {
    var _temp, _this, _ret;

    _classCallCheck(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      mouseActive: false
    }, _this.hasPlayed = false, _this.injectUpdateVideoEvents = function () {
      var videoEvents = ['onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting'];

      return videoEvents.reduce(function (previousValue, currentValue) {
        var nextValue = _extends({}, previousValue);
        nextValue[currentValue] = function () {
          if (currentValue in _this.props && typeof _this.props[currentValue] === 'function') {
            _this.props[currentValue]();
          }
          _this.update();
        };

        return nextValue;
      }, {});
    }, _this.update = function () {
      var video = findDOMNode(_this.videoRef);
      // Set flag for Video first play
      if (!_this.hasPlayed && !video.paused && !video.loading || video.currentTime) {
        _this.hasPlayed = true;
      }

      var interacting = _this.state.interacting;
      if (video.ended) {
        interacting = false;
      }

      _this.setState({
        duration: video.duration,
        currentTime: video.currentTime,
        buffered: video.buffered,
        paused: video.paused,
        muted: video.muted,
        volume: video.volume,
        ended: video.ended,
        readyState: video.readyState,
        interacting: interacting,
        // computed values
        hasPlayed: _this.hasPlayed,
        playing: !video.paused && !video.loading,
        percentageBuffered: video.buffered.length && video.buffered.end(video.buffered.length - 1) / video.duration * 100,
        percentagePlayed: video.currentTime / video.duration * 100,
        loading: video.readyState < video.HAVE_ENOUGH_DATA
      });
    }, _this.play = function () {
      findDOMNode(_this.videoRef).play();
    }, _this.pause = function () {
      findDOMNode(_this.videoRef).pause();
    }, _this.scrub = function (event) {
      var duration = _this.state.duration;

      if (_this.scrubberRef) {
        var scrubberRect = findDOMNode(_this.scrubberRef).getBoundingClientRect();
        var percent = (event.clientX - scrubberRect.left) / scrubberRect.width;
        _this.setState({ scrubTime: duration * percent });
      }
    }, _this.seek = function (event) {
      var duration = _this.state.duration;

      if (_this.scrubberRef) {
        var scrubberRect = findDOMNode(_this.scrubberRef).getBoundingClientRect();
        var percent = (event.clientX - scrubberRect.left) / scrubberRect.width;
        findDOMNode(_this.videoRef).currentTime = duration * percent;
      }
    }, _this.unmute = function () {
      findDOMNode(_this.videoRef).muted = false;
    }, _this.mute = function () {
      findDOMNode(_this.videoRef).muted = true;
    }, _this.louder = function () {
      findDOMNode(_this.videoRef).volume += VOLUME_STEP;
    }, _this.quieter = function () {
      findDOMNode(_this.videoRef).volume -= VOLUME_STEP;
    }, _this.fullscreen = function () {
      var video = findDOMNode(_this.videoRef);
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else {
        console.warn('Your browser doesn\'t support fullscreen.');
      }
    }, _this.interactionStart = function () {
      _this.setState({ interacting: true });
      clearTimeout(_this.interactionTimer);
      _this.interactionTimer = setTimeout(_this.interactionStop, 3000);
    }, _this.interactionStop = function () {
      var focus = _this.state.focus;

      if (!focus && !_this.unmounted) {
        _this.setState({ interacting: false });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Video.prototype.componentWillMount = function componentWillMount() {
    this.update = throttle(this.update, 100, this);
    this.mediaEventProps = this.injectUpdateVideoEvents();
  };

  Video.prototype.componentDidMount = function componentDidMount() {
    var mute = this.props.mute;

    var video = findDOMNode(this.videoRef);

    if (mute) {
      this.mute();
    }

    // hide all captioning to start with
    var textTracks = video.textTracks;
    for (var i = 0; i < textTracks.length; i += 1) {
      textTracks[i].mode = 'hidden';
    }
  };

  Video.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.autoPlay && !this.props.autoPlay) {
      // Caller wants the video to play now.
      this.play();
    }
    // Dynamically modifying a source element and its attribute when
    // the element is already inserted in a video or audio element will
    // have no effect.
    // From HTML Specs:
    // https://html.spec.whatwg.org/multipage/embedded-content.html
    //   #the-source-element
    // Using forceUpdate to force redraw of video when receiving new <source>
    this.forceUpdate();
  };

  Video.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;
  };

  Video.prototype.showCaptions = function showCaptions(index) {
    var textTracks = findDOMNode(this.videoRef).textTracks;
    for (var i = 0; i < textTracks.length; i += 1) {
      textTracks[i].mode = i === index ? 'showing' : 'hidden';
    }
    // Using forceUpdate to force redraw of controls when changing captions
    this.forceUpdate();
  };

  Video.prototype.renderControls = function renderControls() {
    var _this2 = this;

    var controls = this.props.controls;
    var _state = this.state,
        currentTime = _state.currentTime,
        duration = _state.duration,
        interacting = _state.interacting,
        percentagePlayed = _state.percentagePlayed,
        playing = _state.playing,
        scrubTime = _state.scrubTime,
        volume = _state.volume;

    var over = controls === 'over';
    var background = over ? { color: 'dark-2', opacity: 'weak' } : undefined;
    var iconColor = over ? 'light-1' : undefined;

    var formattedTime = formatTime(scrubTime || currentTime || duration);

    var captionControls = [];
    if (this.videoRef) {
      var textTracks = findDOMNode(this.videoRef).textTracks;
      if (textTracks.length > 0) {
        if (textTracks.length === 1) {
          var active = textTracks[0].mode === 'showing';
          captionControls.push({
            icon: React.createElement(ClosedCaption, { color: iconColor }),
            active: active,
            onClick: function onClick() {
              return _this2.showCaptions(active ? -1 : 0);
            }
          });
        } else {
          var _loop = function _loop(i) {
            var track = textTracks[i];
            var active = track.mode === 'showing';
            captionControls.push({
              label: track.label,
              active: active,
              onClick: function onClick() {
                return _this2.showCaptions(active ? -1 : i);
              }
            });
          };

          for (var i = 0; i < textTracks.length; i += 1) {
            _loop(i);
          }
        }
      }
    }

    return React.createElement(
      StyledVideoControls,
      {
        over: over,
        active: !this.hasPlayed || controls === 'below' || over && interacting
      },
      React.createElement(
        Box,
        {
          direction: 'row',
          align: 'center',
          justify: 'between',
          background: background
        },
        React.createElement(Button, {
          icon: playing ? React.createElement(Pause, { color: iconColor }) : React.createElement(Play, { color: iconColor }),
          hoverIndicator: 'background',
          onClick: playing ? this.pause : this.play
        }),
        React.createElement(
          Box,
          { direction: 'row', align: 'center', flex: 'grow' },
          React.createElement(
            Box,
            { flex: true },
            React.createElement(
              Stack,
              null,
              React.createElement(Meter, {
                'aria-label': 'Video progress',
                background: over ? 'dark-3' : undefined,
                size: 'full',
                thickness: 'small',
                values: [{ value: percentagePlayed || 0 }]
              }),
              React.createElement(StyledVideoScrubber, {
                ref: function ref(_ref) {
                  _this2.scrubberRef = _ref;
                },
                tabIndex: 0,
                role: 'button',
                value: scrubTime ? Math.round(scrubTime / duration * 100) : undefined,
                onMouseMove: this.scrub,
                onMouseLeave: function onMouseLeave() {
                  return _this2.setState({ scrubTime: undefined });
                },
                onClick: this.seek,
                theme: this.props.theme
              })
            )
          ),
          React.createElement(
            Box,
            { pad: { horizontal: 'small' } },
            React.createElement(
              Text,
              { margin: 'none' },
              formattedTime
            )
          )
        ),
        React.createElement(Menu, {
          icon: React.createElement(Actions, { color: iconColor }),
          dropAlign: { bottom: 'top', right: 'right' },
          background: background || { color: 'light-2', opacity: 'weak' },
          items: [{
            icon: React.createElement(Volume, { color: iconColor }),
            onClick: volume <= 1 - VOLUME_STEP ? this.louder : undefined,
            close: false
          }, {
            icon: React.createElement(VolumeLow, { color: iconColor }),
            onClick: volume >= VOLUME_STEP ? this.quieter : undefined,
            close: false
          }].concat(captionControls, [{
            icon: React.createElement(Expand, { color: iconColor }),
            onClick: this.fullscreen
          }])
        })
      )
    );
  };

  Video.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        autoPlay = _props.autoPlay,
        children = _props.children,
        controls = _props.controls,
        loop = _props.loop,
        rest = _objectWithoutProperties(_props, ['autoPlay', 'children', 'controls', 'loop']);

    var controlsElement = controls ? this.renderControls() : undefined;

    var mouseEventListeners = void 0;
    if (controls === 'over') {
      mouseEventListeners = {
        onMouseEnter: this.interactionStart,
        onMouseMove: this.interactionStart,
        onTouchStart: this.interactionStart
      };
    }

    var style = void 0;
    if (rest.fit === 'contain' && controls === 'over' && this.videoRef) {
      // constrain the size to fit the aspect ratio so the controls overlap correctly
      var video = findDOMNode(this.videoRef);
      if (video.videoHeight) {
        var rect = video.getBoundingClientRect();
        var ratio = rect.width / rect.height;
        var videoRatio = video.videoWidth / video.videoHeight;
        style = {};
        if (videoRatio > ratio) {
          style.height = rect.width / videoRatio;
        } else {
          style.width = rect.height * videoRatio;
        }
      }
    }

    return React.createElement(
      StyledVideoContainer,
      _extends({}, mouseEventListeners, { style: style }),
      React.createElement(
        StyledVideo,
        _extends({
          ref: function ref(_ref2) {
            _this3.videoRef = _ref2;
          }
        }, rest, this.mediaEventProps, {
          autoPlay: autoPlay || false,
          loop: loop || false
        }),
        children
      ),
      controlsElement
    );
  };

  return Video;
}(Component);

Video.contextTypes = {
  grommet: PropTypes.object,
  theme: PropTypes.object,
  router: PropTypes.any
};
Video.defaultProps = {
  controls: 'over'
};


if (process.env.NODE_ENV !== 'production') {
  doc(Video);
}

export default compose(withTheme)(Video);