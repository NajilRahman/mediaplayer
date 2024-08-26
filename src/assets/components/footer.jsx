import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <footer className="bg-body-tertiary text-center text-lg-start fixed-end">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Media Player</h5>
              <br />
              <p>A media player is a versatile software application designed to play various multimedia formats, including audio, video, and multimedia playlists. It provides users with the ability to stream content, organize media libraries, and adjust playback settings to suit individual preferences. Many media players support a wide range of file types and codecs, ensuring compatibility with diverse media sources. Advanced features often include equalizers, playback speed controls, and subtitle support. Users can also create and manage playlists, enhancing their media consumption experience. Modern media players may offer integration with online streaming services and cloud storage. Overall, a media player is essential for enjoying digital media across different devices and platforms.</p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Pages</h5>
              <br />
              <ul className="list-unstyled mb-0 ">
                <li>
                  <a href="/home" className="text-body">Home</a>
                </li>
                <li>
                  <a href="/" className="text-body">Landing</a>
                </li>
                <li>
                  <a href='/history' className="text-body">History</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Contact Us</h5>

              <ul className="list-unstyled">
                <br />
                <li>mediaplayer@gmail.com</li>
              <br />
                <li>+91 9048649412</li>
                <br />
                <li><textarea name="" id="" className='form-control' placeholder='Send Message to Us'></textarea></li>
                <li><button className='btn btn-success bg-dark text-light rounded-0 w-100'>Send</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2020 Copyright:
          <a className="text-body" href="/">MediaPlayer.com</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
