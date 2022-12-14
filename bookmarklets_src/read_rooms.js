function readRoom(roomId) {
  const url = ['https://kcw.kddi.ne.jp/gateway.php',
    '?cmd=read',
    '&_v=', CLIENT_VER,
    '&_av=', 5,
    '&myid=', MYID,
    '&_t=', ACCESS_TOKEN,
    '&room_id=', roomId].join('');
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send(null);
}

const liCollection = document.getElementById('RoomList').getElementsByTagName('li');
Array.prototype.forEach.call(liCollection, (li) => {
  if (!li.classList.contains('_unreadBadge')) {
    readRoom(li.getAttribute('data-rid'));
  }
});
