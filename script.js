const videoElement =  document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream , pass to video element then play..

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
            console.log('media');
        }
    }
    catch(error){
        console.log('errors');
        // Catch Error Here
    }
} 

selectMediaStream();