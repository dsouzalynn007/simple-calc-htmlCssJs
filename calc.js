let allButtons = document.querySelectorAll('input[type="button"]')
let allBtnsToArr = [...allButtons]
let calcInput = document.querySelector('.calcInput')
let Zero = calcInput.defaultValue

calcInput.readOnly=true

allBtnsToArr.map(btns=>{
    btns.addEventListener('click',(clk)=>{
        let btnVal=clk.target.defaultValue
        console.log(calcInput.value)
        calcInput.value === '1' ? calcInput.style.letterSpacing='5px' : ''

        if(btnVal==='C'){
            calcInput.value=Zero
        }else if(btnVal!=='='){
            if(calcInput.value===Zero) calcInput.value=btnVal
            else calcInput.value+=btnVal
        }else{
            try{ 
                calcInput.value=eval(calcInput.value)
            }catch(err){
                if(err){
                calcInput.value=err.name
                setTimeout(()=>calcInput.value=Zero, '3000')
                }
            }
        }
    })
})