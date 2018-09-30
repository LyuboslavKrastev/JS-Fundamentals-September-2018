function findTreasure(input){
  let Tuvalu = {x1: 1, x2: 3, y1: 1, y2: 3};
  let Tonga = {x1: 0, x2: 2, y1: 6, y2: 8};
  let Tokelau = {x1: 8, x2: 9, y1: 0, y2: 1};
  let Samoa = {x1: 5, x2: 7, y1: 3, y2: 6};
  let Cook = {x1: 4, x2: 9, y1: 7, y2: 8};


  let isInIsland = function(x, y, x1, x2, y1, y2){
        if(x >= x1 && x <= x2){
            if(y >= y1 && y<=y2){
                return true;
            }
        }
        return false;
  }

  for(let i = 0; i < input.length; i+=2){
      let x = input[i];
      let y = input[i + 1];

      if(isInIsland(x, y, Samoa.x1, Samoa.x2, Samoa.y1, Samoa.y2)){
          console.log('Samoa');
      }
      else if(isInIsland(x, y, Cook.x1, Cook.x2, Cook.y1, Cook.y2)){
          console.log('Cook')
      }
      else if(isInIsland(x, y, Tonga.x1, Tonga.x2, Tonga.y1, Tonga.y2)){
          console.log('Tonga');
      }
      else if(isInIsland(x, y, Tuvalu.x1, Tuvalu.x2, Tuvalu.y1, Tuvalu.y2)){
        console.log('Tuvalu');
      }
      else if(isInIsland(x, y, Tokelau.x1, Tokelau.x2, Tokelau.y1, Tokelau.y2)){
        console.log('Tokelau');
      }
      else{
          console.log('On the bottom of the ocean');
      }
  }
}

findTreasure([4, 2, 1.5, 6.5, 1, 3]);
findTreasure([6, 4]);