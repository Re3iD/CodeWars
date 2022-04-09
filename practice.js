const {describe, expect, test} = require('@jest/globals')


const sum = (a,b)=>{
    return a+b
}
describe(
    'Test',()=>
        test('kata:',()=>{
            expect(sum(3,4)).toBe(7)
        })
    
)


function amountOfPages(summary){
    let count = 0;
    let res = 0;
    for(let i=1;i<=summary;i++){
        if(count>=summary) break;
        count+=(''+i).length
        res++
    }
    return res
}
//Kata 6: Consecutive strings

function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) {
      return '';
    }
    
    return strarr.reduce((long, item, i) => {
      const currString = strarr.slice(i, i + k).join('');
      return (currString.length > long.length)
        ? currString
        : long;
    }, '');
  }
  describe(
    'Test',()=>
        test('kata: Consecutive strings',()=>{
            expect(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)).toBe("abigailtheta")
            expect(longestConsec([], 3)).toBe("")
        })
)

//Kata 6: Delete occurrences of an element if it occurs more than n times

function deleteNth(arr,n){
    const elmCount = (mass=[],elm)=>{
     return mass.filter(i=>i==elm).length
   }
   let res = [];
   for(let i=0;i<arr.length;i++){
     res.push(arr[i])
       if(elmCount(res,arr[i])>n){
         res.pop()
       }
     }
     return res
 }

 describe(
    'Test',()=>
        test('kata: Delete occurrences of an element if it occurs more than n times',()=>{
            expect(deleteNth([20,37,20,21], 1)).toBe([20,37,21])
            expect(deleteNth([1,1,3,3,7,2,2,2,2], 3)).toBe([1, 1, 3, 3, 7, 2, 2, 2])
        })
)

//Kata 6: Build a pile of Cubes

function findNb(m,n=0) {
    if(m==0) return n-1;
    if(m>0) {
       let newM = m - n**3;
       return findNb(newM,n+1)
    }else{
      return(-1);
    }
}

describe(
    'Test',()=>
        test('kata: Build a pile of Cubes',()=>{
            expect(findNb(4183059834009)).toBe(2032)
            expect(findNb(24723578342962)).toBe(-1)
        })
)

// Kata 6: How many pages in a book?

function amountOfPages(summary){
    let count = 0;
    let res = 0;
    for(let i=1;i<=summary;i++){
        if(count>=summary) break;
        count+=(''+i).length
        res++
    }
    return res
  }


  describe(
    'Test',()=>
        test('kata: How many pages in a book?',()=>{
            expect(amountOfPages(1095)).toBe(401)
            expect(amountOfPages(660)).toBe(256)
        })
)


//Kata 6: Split Strings

function solution(str){
    if(str.length==0) return [];
        return str.length%2==0?str.match(/[A-Za-z]{2}/g):(str+'_').match(/[A-Za-z]{2}|[A-Za-z,_]{2}/g)
  }

  describe(
    'Test',()=>
        test('kata: Split Strings',()=>{
            expect(solution("abcdef")).toBe(["ab", "cd", "ef"])
            expect(solution("abcdefg")).toBe(["ab", "cd", "ef", "g_"])
        })
)

// Kata 6: Equal Sides Of An Array

function findEvenIndex(arr) {
  let sum = 0,
    leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
    if (leftSum === sum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

describe(
    'Test',()=>
        test('kata: Equal Sides Of An Array',()=>{
            expect(findEvenIndex([1,2,3,4,3,2,1])).toBe(3)
            expect(findEvenIndex([1,100,50,-51,1,1])).toBe(1)
        })
)

// Kata 6: Decode the Morse code

decodeMorse = function(morseCode){
 
    let res= morseCode.split("   ").map(word => word.split(" ").map(character => MORSE_CODE[character]).join(''))
                .join(' ') 
                .trim()
    return res
  }
  // Этот код может работать только на https://www.codewars.com/kata/54b724efac3d5402db00065e/solutions/javascript/me/best_practice

//Kata 6: Take a Ten Minutes Walk

function isValidWalk(walk=[]) {
    if(walk.length!==10){
      return false
    }
    let res = walk.reduce((acc,cur)=>{
        switch(cur){
          case 'n':
            acc.n+=1
            break;
          case 'e':
            acc.e+=1
            break;
          case 's':
            acc.n-=1
            break;
          case 'w':
            acc.e-=1
            break;
          default:
            return acc
        }
        return acc
    },{n:0,e:0})
  
    return (res.n==0&&res.e==0)
  }

  describe(
    'Test',()=>
        test('kata: Take a Ten Minutes Walk',()=>{
            expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toBe(true)
            expect(isValidWalk(['e','w','e','w','n','s','n','s','e','w'])).toBe(true)
        })
)

// Kata 6: Friday the 13ths

function fridayTheThirteenths(start, end=start) {
    let interval = end - start;
    let res = [];
    for(let i=0;i<=interval;i++){
      let date;
      for(let j=0;j<=11;j++){
        date=new Date(start+i,j,13)
        if(date.getDay()==5) res.push(`${j+1}/13/${start+i}`);
      }
    }
    return res.join(' ')
  }

  describe(
    'Test',()=>
        test('kata: Friday the 13ths',()=>{
            expect(fridayTheThirteenths(1999, 2000)).toBe("8/13/1999 10/13/2000")
            expect(fridayTheThirteenths(2000)).toBe("10/13/2000")
        })
)

// Kata 6: Two Sum

function twoSum(numbers, target) {
    let res = [];
    for(let i=0;i<numbers.length;i++){
      for(let j=0;j<numbers.length;j++){
        if(j==i) continue;
        let sum = numbers[i]+numbers[j]
        if(sum==target){
          res = i>j?[j,i]:[i,j]
          return res;
        }
      }
    }
  }

  describe(
    'Test',()=>
        test('kata: Two Sum',()=>{
            expect(twoSum([1,2,3])).toBe(4)
            expect(twoSum([2,2,3])).toBe(4)
        })
)

// Kata 6: Your order, please

function order(words){
    const arr = words.split(' ')
    let res = new Array(arr.length).fill('')
    arr.forEach(i=>{
      let str = i.split('').filter(item=>Number(item)).join('')
      res[parseInt(str)-1] = i
    })
    return res.join(' ')
  }

  describe(
    'Test',()=>
        test('kata: Your order, please',()=>{
            expect(order("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est")
            expect(order("d4o dru7nken sh2all w5ith s8ailor wha1t 3we a6")).toBe("wha1t sh2all 3we d4o w5ith a6 dru7nken s8ailor")
        })
  )

//Kata 6: Duplicate Encoder

function duplicateEncode(word){
    let arr = word.toLowerCase().split('');
   return word.toLowerCase().split('').reduce((acc,cur)=>{
       cur = (arr.filter(i=>i==cur).length<=1)?'(':')';
       acc.push(cur)
       return acc
   },[]).join('');
}

describe(
    'Test',()=>
        test('kata: Duplicate Encoder',()=>{
            expect(duplicateEncode("recede")).toBe("()()()")
            expect(duplicateEncode("Success")).toBe(")())())")
        })
  )

  //Kata 6: Bit Counting

  const countBits = (n)=>{
    return (n).toString(2).split('').filter((i)=>(i != 0)).length;
  };

  describe(
    'Test',()=>
        test('kata: Bit Counting',()=>{
            expect(countBits(10)).toBe(2)
            expect(countBits(77231418)).toBe(14)
        })
  )


  //Kata 6: What's a Perfect Power anyway?

  const isPP = (checking)=>{
    let current = 2,
        power = 2,
        max = Math.floor( checking / 2 );
  
    while (current <= max) {
      power = 2;
      while ( Math.pow( current, power ) <= checking ) {
        if ( checking === Math.pow( current, power ) ) {
          return [ current, power ];
        } else {
          power += 1;
        }
      }
      current += 1;
    }
  
    return null;
  }


  describe(
    'Test',()=>
        test("kata: What's a Perfect Power anyway?",()=>{
            expect(isPP(4)).toBe([2,2])
            expect(isPP(5)).toBe(null)
        })
)

//Kata 5: Common Denominators

function convertFrac(lst){
    const gcd = (a,b)=>b===0?a:gcd(b,a%b)
      const lcm = (a,b)=> a*b/gcd(a,b)
   const denom = lst.reduce((acc,cur)=>{
        return lcm(cur[1],acc)
    },1);
    return lst.map(i=>{
      let mul = denom/i[1]
      mul*=i[0]
      i = [mul,denom]
      return `(${mul},${denom})`
    }).join('')
  }

  describe(
    'Test',()=>
        test("kata: Common Denominators",()=>{
            expect(convertFrac([ [69, 130], [87, 1310], [3, 4] ])).toBe("(18078,34060)(2262,34060)(25545,34060)")
            expect(convertFrac([ [1, 2], [1, 3], [1, 4] ])).toBe("(6,12)(4,12)(3,12)")
        })
)


//Kata 5: Is my friend cheating?

function removeNb (n) {
    let res = Array(n).fill(undefined).map((_, i) => [i + 1, ((1 + n)*n/2 - i - 1) / (i + 2)]).filter(([a, b]) => b === ~~b && b <= n);
    return res
    }

    describe(
        'Test',()=>
            test("kata: CIs my friend cheating?",()=>{
                expect(cremoveNb(1000003)).toBe([[550320,908566],[559756,893250],[893250,559756],[908566,550320]])
                expect(removeNb(1000008)).toBe([[677076,738480],[738480,677076]])
            })
    )

// Kata 5: PaginationHelper

class PaginationHelper{
    constructor(arr,count){
      this.items = arr||[];
      this.count = count||0;
      this.pages = this.pageFill();
    }
    pageCount(){
      return this.pages.length
    }
    itemCount(){
      return this.items.length;
    }
    pageFill(){
      let copy = [...this.items]
      const pageArr = new Array(Math.ceil(this.items.length/this.count)).fill([]).map((i)=>{
        i = copy.slice(0,this.count)
        copy.splice(0,this.count)
        return i;
      })||0;
      return pageArr
    }
    pageItemCount(ind){
      const pageIndex = this.pages[ind]?this.pages[ind].length:undefined;
      return (pageIndex)? pageIndex:-1;
    }
    pageIndex(ind){
      if(ind==0&&this.items.length==0){
        return -1
      }
      if(ind>this.items.length||ind<0){
        return -1
      }else{
        let count=0;
        while(ind>0){
          let minus = this.pages[count].length;
          ind-=minus;
          (ind<0)?count:count++;
        }
        return count
      }
    }
  }

  //Kata 6: Most Frequent Weekdays

  function mostFrequentDays(year){
    let day = (new Date(year, 0, 1)).getDay() - 1,
          MFDays = [day, year % 4 || (year % 400 && year % 100 == 0) ? day : day + 1].map(x => x < 0 ? 6 : x);
      return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].filter((d, i) => MFDays.indexOf(i) >= 0);
  }

  
  describe(
    'Test',()=>
        test("kata: Most Frequent Weekdays",()=>{
            expect(mostFrequentDays(2860)).toBe(['Thursday', 'Friday'])
            expect(mostFrequentDays(1770)).toBe(['Monday'])
        })
)

//Kata 5: Extract the domain name from a URL

function domainName(url){
    let sourceString = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
      let domain = sourceString.split(".")[0];
      return domain;
  }

  describe(
    'Test',()=>
        test("kata: Extract the domain name from a URL",()=>{
            expect(domainName("http://google.com")).toBe("google")
            expect(domainName("www.xakep.ru")).toBe("xakep")
        })
)

//Kata 5: Number of trailing 