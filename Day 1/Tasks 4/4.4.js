function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
      let str = i.toString();
      
      if (i % 7 === 0 && str.includes('7')) {
        console.log("BOOM-BOOM");
      } else if (i % 7 === 0) {
        console.log("BOOM");
      } else {
        console.log(i);
      }
    }
  }
  
  printNumbers(18);
  