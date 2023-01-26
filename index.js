/*
    - setup nimble && srt
    - login to connect to nimble server

    - create input srt from wmspanel [mpegts in] (you can create multible sources each has its own port) 
    - create output srt from wmspanel [UDP streaming] (create output for each input, each output has its own port different from input port) 
    
    - download ffmpeg tool
    - excute that code for testing but replace the srt input source
        [ffmpeg -f lavfi -re -i smptebars=duration=60:size=1280x720:rate=30 -f lavfi -re -i 
        sine=frequency=1000:duration=60:sample_rate=44100 -pix_fmt yuv420p -c:v libx264 -b:v 1000k -g 30 
        -keyint_min 120 -profile:v baseline -preset veryfast -f mpegts "srt://SRT_INPUT_SOURCE"]
*/

const { exec } = require("child_process");

// this for testing srt with ffmpeg
// exec(
//   `ffmpeg -f lavfi -re -i smptebars=duration=60:size=1280x720:rate=30 -f lavfi -re -i sine=frequency=1000:duration=60:sample_rate=44100 -pix_fmt yuv420p -c:v libx264 -b:v 1000k -g 30 -keyint_min 120 -profile:v baseline -preset veryfast -f mpegts "srt://192.168.1.6:44401?&pbkeylen=16&passphrase=password123"`
// );

// this for testing rencoding mp4 to srt url with ffmpeg
exec(
  `ffmpeg -re -i F:/learning/stream-ffmpeg-node/data/SampleVideo_1280x720_30mb.mp4 -c:v libx264 -b:v 4000k -maxrate 4000k -bufsize 8000k -g 50 -f mpegts "srt://192.168.1.6:44401?&pbkeylen=16&passphrase=password123"`
);
