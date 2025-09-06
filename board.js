
(function(){
  function fenToBoard(fen){
    const [piecePlacement] = fen.split(' ');
    const rows = piecePlacement.split('/');
    const board = [];
    for (let r=0;r<8;r++){
      const row = [];
      for (const ch of rows[r]){
        if (/\d/.test(ch)){ for (let i=0;i<parseInt(ch);i++) row.push(''); }
        else row.push(ch);
      }
      board.push(row);
    }
    return board;
  }
  function pieceToChar(p){
    const map = {K:'♔',Q:'♕',R:'♖',B:'♗',N:'♘',P:'♙',k:'♚',q:'♛',r:'♜',b:'♝',n:'♞',p:'♟'};
    return map[p]||'';
  }
  function renderBoard(el, fen){
    const b = fenToBoard(fen);
    el.innerHTML = '';
    for (let r=0;r<8;r++){
      for (let c=0;c<8;c++){
        const idx = r*8 + c;
        const div = document.createElement('div');
        div.className = 'sq ' + ((r+c)%2===0 ? 'light':'dark');
        div.textContent = pieceToChar(b[r][c]);
        el.appendChild(div);
      }
    }
  }
  window.CCBoard = { renderBoard };
})();
