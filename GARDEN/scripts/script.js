window.addEventListener('DOMContentLoaded', ()=>{
  const sideBars = document.querySelectorAll('.side-bar');  

  const mainCell = document.getElementById('main-cell');
  const mainInfo = document.getElementById('main-info');

  const storageCell = document.getElementById('storage-cell');
  const storageInfo = document.getElementById('storage-info');

  mainCell.addEventListener('click', ()=> {
    mainInfo.classList.toggle('active');
  });

  storageCell.addEventListener('click', ()=> {
    storageInfo.classList.toggle('active');
  });

  for (let bar of sideBars) {
  bar.addEventListener('click', () => {
    bar.classList.remove('active');
  })
  }



})