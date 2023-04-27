import React from 'react'
import Bar from './Charts/Bar'
import Forks from './Charts/Forks'
import Pie from './Charts/Pie'
import Stats from './Charts/Stats'
import { useContext } from 'react'
import { GithubContext } from '../context/Contexthead'
import { getDefaultNormalizer } from '@testing-library/react'
function Repos() {
  const {repos}=useContext(GithubContext)
  if(!repos) return;
  let languages=repos.reduce((total,item)=>{
    const {language,stargazers_count}=item;
    if(!language) return total;
    if(!total[language]){
      total[language]={label:language,value:1,star:stargazers_count}
    }
    else{
      total[language]={...total[language],value:total[language].value+1,star:total[language].star+1}
    }
    return total;
  },{})
  const mostUsed=Object.values(languages)
  const mostStars=Object.values(languages).map((item)=>{
    return {...item,value:item.star}
  })
  
  const stars=repos.reduce((total,item)=>{
    const {stargazers_count,name}=item
    total[name]={label:name,value:stargazers_count}
    return total
  },{})
  
  const mostPopular=Object.values(stars).sort((a,b)=>{
      return b.value-a.value;
  }).slice(0,5)
  
  const fork=repos.reduce((total,item)=>{
    const {forks_count,name}=item
    total[name]={label:name,value:forks_count}
    // console.log(item)
    return total
  },{})

  const mostForked=Object.values(fork).sort((a,b)=>{
      return b.value-a.value;
  }).slice(0,5)
  
  return (
    <div className='container w-100 stats-wrapper'>
      <Pie data={mostUsed}/>
      <Bar data={mostPopular}/>
      <Stats data={mostStars}/>
      <Forks data={mostForked}/>
    </div>
  )
}

export default Repos
 