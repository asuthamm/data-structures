
const hash = (keyStr, size) => {      
  let hashedKey = 0;

  for (let i in keyStr) {
    hashedKey += keyStr.charCodeAt(i);
  }
  return hashedKey % size;
};

class HashTable { 
  buckets=4;
  table = new Array(this.buckets);
  numItems = 0;

  resize = () => {
    console.log('resizing....')
    const newTable = new Array(this.table.length * 2);
    this.table.forEach(item => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hash(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([[ key, value] ]);
          } else {
            newTable[idx] = [ [key, value] ];
          }
        });
      }
    });
    this.table = newTable;
    this.buckets = this.table.length;
  }

  setter = (key,value) => {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      this.resize();
    }

    let idx = hash(key, this.buckets)
    if (!this.table[idx]) {
      this.table[idx] = [ [key, value] ];
    } else {
      let inserted = false;
      for (let i in this.table[idx]) {
        if (this.table[idx][i][0] === key) {
          this.table[idx][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.table[idx].push([key, value])
      }
    } 
  }

  display = () => {
    console.log(this.table);
  }

  getter = (key) => {
    let idx = hash(key, this.buckets);
    
    if (!this.table[idx]) {
      console.log(key, 'not found.');
      return null;
    }
    return this.table[idx].find(x => x[0] === key)[1];
    }
}

