let allButtons = document.querySelectorAll('input[type="button"]')
let allBtnsToArr = [...allButtons]
let calcInput = document.querySelector('.calcInput')

calcInput.readOnly=true

allBtnsToArr.map(btns=>{
    btns.addEventListener('click',(clk)=>{
        let btnVal=clk.target.defaultValue

        if(btnVal==='C'){
            calcInput.value=''
        }else if(btnVal!=='='){
            if(calcInput.value===undefined) calcInput.value=btnVal
            else calcInput.value+=btnVal
        }else{
            try{ 
                calcInput.value=eval(calcInput.value)
            }catch(err){
                if(err){
                calcInput.value=err.name
                setTimeout(()=>calcInput.value='', '3000')
                }
            }
        }
    })
})