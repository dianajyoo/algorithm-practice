const intToRoman = (num) => {
  const hash = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1        
   };
   let result = '';
   
   const romanize = (num) => {
      for(const roman in hash) {
        let int = hash[roman];
        let leftover = num - int;
          
        if(leftover >= 0) {
          num = leftover;
          result += roman;

          if(num !== 0) {
            return romanize(num);
          } else {
            return result;
          }
        }
      }
   }
       
   return romanize(num);
};