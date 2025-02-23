const input = document.querySelector('#number')
const convert = document.querySelector('#convert-btn')
const output = document.querySelector('#output')

const numerals = [
    ['M',1000],
    ['CM',900],
    ['D',500],
    ['CD',400],
    ['C',100],
    ['XC',90],
    ['L',50],
    ['XL',40],
    ['X',10],
    ['IX',9],
    ['V',5],
    ['IV',4],
    ['I',1],
]

input.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        convert.click()
    }
})

convert.addEventListener('click',(e)=>{
    let value = input.value
    if(!value){
        output.innerText = `Please enter a valid number`
    }
    else if(value<=0){
        output.innerText = `Please enter a number greater than or equal to 1`
    }
    else if(value>3999){
        output.innerText = `Please enter a number less than or equal to 3999`
    }
    else{
        let result = ''
        for(const [roman, num] of numerals){
            while(num<=value){
                result += roman
                value -= num
            }
        }
        output.innerText = result
    }
})