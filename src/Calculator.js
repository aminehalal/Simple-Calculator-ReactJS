import React, { useState } from 'react'
import './calculator.css' 


export default function Calculator() {
    const [calculeIsDone , setCalculeIsDone] = useState(false);
    const [curectOperation , setCurrentOperation] = useState('');
    const [lastOperation , setLastOpenration] = useState('');

    const insertValue = (value) => {
        if(calculeIsDone){
            setCurrentOperation('' + value);
            setCalculeIsDone(false)
        }
        else{
            if( value===0 && curectOperation.charAt(curectOperation.length -1 ) === '0' && curectOperation.charAt(0) === '0'){
            }
            else{
                setCurrentOperation(curectOperation + value);
            }
        }
    }

    const calculate = () => {
        if (curectOperation.charAt(curectOperation.length -1 ) !== ' ' ){
            setLastOpenration(curectOperation)
            var result = eval(curectOperation)
            setCurrentOperation(result) ;
            setCurrentOperation(''+result);
            setCalculeIsDone(true);
        }
        else {
            console.log('No')
        }
    }

    const makeAllOperationVide = () => {
        setCurrentOperation('');
    }

    const deleteLastValue = () => {
        if(curectOperation.charAt(curectOperation.length -1 ) === ' '){
            setCurrentOperation(curectOperation.substring(0 , curectOperation.length -3))
        }
        else {
            setCurrentOperation(curectOperation.substring(0 , curectOperation.length -1))   
        }
    }

    const insertOperateur = (operateur) => {
        if(curectOperation.charAt(curectOperation.length - 1 ) === ' ' || curectOperation.charAt(curectOperation.length - 1 ) === '' ){
            console.log('No')
        }
        else{
            setCurrentOperation(curectOperation + ' ' + operateur + ' ')
            setCalculeIsDone(false);
        }
    }

  return (

<div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-400 to-blue-400">
        <div className="border-2 border-black flex flex-col rounded-xl overflow-hidden">
            <div className="bg-slate-700 flex flex-col justify-evenly p-3 w-72 items-end">
                <div className="text-slate-200 text-sm p-1">{lastOperation}</div>
                <div id='currentOperationDiv' className="text-white text-lg p-1 w-64 break-words">{curectOperation}</div>
            </div>
            <div className="grid grid-cols-4 font-bold bg-white">
                <button className="col-span-2 h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={() => {makeAllOperationVide()}}>AC</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={()=> deleteLastValue()}>DEL</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={()=> insertOperateur('/')}>/</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={() => insertValue(1)}>1</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={() => insertValue(2)}>2</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={() => insertValue(3)}>3</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={()=> insertOperateur('*')}>*</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={() => insertValue(4)}>4</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={() => insertValue(5)}>5</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={() => insertValue(6)}>6</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={()=> insertOperateur('-')}>-</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={() => insertValue(7)}>7</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={() => insertValue(8)}>8</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={() => insertValue(9)}>9</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={()=> insertOperateur('+')}>+</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={() => insertValue('.')}>.</button>
                <button className="h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={() => insertValue(0)}>0</button>
                <button className="col-span-2 h-16 bg-slate-50 border-white border-2 hover:bg-slate-300 duration-700" onClick={()=> calculate()}>=</button>
            </div>
        </div>
    </div>
      )
}
