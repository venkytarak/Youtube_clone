import { useState,useEffect } from "react"
import { Box,Stack,Typography } from "@mui/material"
import {SideBar,Videos} from "./"

import {fetchFromApi} from '../utils/fetchFromApi'




const Feed = () => {
  const [SelectedCat,SetSelectedCat]=useState('New')
  const [videos,setvideos] =useState([]);

useEffect(()=>
{
  fetchFromApi(`search?part=snippet&q=${SelectedCat}`).then((data)=>setvideos(data.items))
  
},[SelectedCat])



  return (
   <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
<Box sx={{height:{sx:'auto',md:'92vh',}, 
borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}
}} >
<SideBar SelectedCat={SelectedCat} SetSelectedCat={SetSelectedCat}/>

<Typography className="copyright" varient='body2' sx={{mt:1.5,color:'#fff'}}>
  copy right @2024 venky
</Typography>
</Box> 

<Box p={2} sx={{overflowY:'auto',height:'92vh',flex:2}}>
  <Typography varient='h4' fontWeight={'bold'} mb={2}
  sx={{color:'white'}}
  
  > {SelectedCat}     <span style={{color:'#fc1503'}}>videos</span>
  </Typography>
  <Videos videos={videos}/>
</Box>
   </Stack>
  )
}

export default Feed