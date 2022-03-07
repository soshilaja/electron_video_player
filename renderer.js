const btn = document.getElementById('btn')
const filePathElement = document.getElementById('filePath')
const videoElement = document.getElementById('player')
const videoSource = document.createElement('source');

btn.addEventListener('click', async () => {
  const filePath = await window.electronAPI.openFile()
  filePathElement.innerText = filePath
  videoSource.setAttribute('src', filePath);
  videoElement.appendChild(videoSource);
  videoElement.load();
  
})