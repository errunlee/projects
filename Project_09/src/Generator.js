import React, { useEffect, useState } from 'react'

function Generator({ list, error }) {
    const [copiedIndex,setCopiedIndex]=useState(null)
    console.log('test')
    const copyToClip = (hexValue,index) => {
        navigator.clipboard.writeText(hexValue);
        setCopiedIndex(index)
    }
    useEffect(()=>{
        const interval=setTimeout(()=>{
            setCopiedIndex(null)
        },4000)
        return(()=>{clearTimeout(interval)})
    },[copiedIndex])
    return (
        <>
            {!error && list.map((item, index) => {
                const { rgb, weight, hex } = item;
                const rgbValue = rgb.join(',')
                const color = `rgb(${rgbValue})`
                const show=copiedIndex===index
                return <div onClick={() => { copyToClip(hex,index) }} key={index} className={`color-box p-3 font-weight-bold ${index > 9 ? 'text-light' : ''}`} style={{ backgroundColor: color }}>
                    <p>{weight}%</p>
                    <p>#{hex}</p>
                    {show && <p className={`text-center`}>Copied To Clipboard</p>}
                </div>
            })}
        </>
    )
}

export default Generator
