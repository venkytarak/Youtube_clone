import { Stack } from "@mui/material"
import { categories } from "../utils/constants"


const SideBar = ({SelectedCat,SetSelectedCat}) => {
  return (
    <Stack direction={"row"} 
    sx={{overflowY:'auto',height:{sx:'auto',md:'95%'},
    flexDirection:{md:'column'},

    
    
    }}>
{categories.map((item)=>(
    <button className="category-btn"
    onClick={()=>
    {
        SetSelectedCat(item.name)
    }
    }
    style={{background:item.name ===SelectedCat && '#FC1503',color:'white'
    }}
    key={item.name}
    
    
    >
        <span style={{color:item.name===SelectedCat ?'white':'red',marginRight:"15px"}}>{item.icon}</span>
        <span style={{opacity:item.name===SelectedCat ?'1':'0.7'}}>{item.name}</span>
    </button>
))} 

    </Stack>
  )
}

export default SideBar