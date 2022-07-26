let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"http://48ers.info/file/parts/I0000988/1797b8960249296e678f68655b965703.jpg",
"http://48ers.info/file/parts/I0000988/969de8ee7715e85f194b4d79f5301eaf.jpg",
"http://48ers.info/file/parts/I0000988/a35953dab3250c2c703d40aba3be11d4.jpg",
"http://48ers.info/file/parts/I0000988/90bdcc4f8e0eb9ef883f267788334e3d.jpg",
"http://48ers.info/file/parts/I0000988/9c61483776139e4ce5691a85e6807678.jpg",
"http://48ers.info/file/parts/I0000988/4129761267aa6a26d6a16620a246c17a.jpg",
"http://48ers.info/file/parts/I0000988/f5e164d4af3177d2b8fb07ff99681c7c.jpg",
"http://48ers.info/file/parts/I0000988/020671343b72cf3b4703efc223259f91.jpg",
"http://48ers.info/file/parts/I0000988/964ab995eddd84eaa13f7740d9a4bc26.jpg",
"http://48ers.info/file/parts/I0000988/1ea5b09a00dea82cbc38a58674cb881a.jpg",
"http://48ers.info/file/parts/I0000988/f1eef515732a9dfb45acc99642b3662f.jpg",
"http://48ers.info/file/parts/I0000989/843a13f8961caeddddd614c9dc92f195.jpg",
"http://48ers.info/file/parts/I0000989/ec40e9f9a3165d2d1fad624d1654486b.jpg",
"http://48ers.info/file/parts/I0000989/262b1ee3dbcd3535f00a99f4dffe7cde.jpg",
"http://48ers.info/file/parts/I0000989/8066a07a1efaf65cc739b4a7db9b524c.jpg",
"http://48ers.info/file/parts/I0000989/164841da8269b1851079063c50ef0871.jpg",
"http://48ers.info/file/parts/I0000989/7ae389ba8740c2d889e7c2e3dacbc27f.jpg",
"http://48ers.info/file/parts/I0000989/6fb7e1cc616fa5ed23590ba8721d5eb9.jpg",
"http://48ers.info/file/parts/I0000989/90fe64ae7463c9428bec1cf5eabe6f6e.jpg",
"http://48ers.info/file/parts/I0000989/428b088eb2a6d2c94fc22efab2fd7e8b.jpg",
"http://48ers.info/file/parts/I0000989/26520fbed2ecbc6d072b80f4c2d6e4a7.jpg",
"http://48ers.info/file/parts/I0000989/4815d1fd389ddc40db8a9f9dc712f634.jpg",
"http://48ers.info/file/parts/I0000989/a398dc5c76bfa8daee622c626fe01d5d.jpg"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}

