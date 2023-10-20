import React, {useEffect, useState} from 'react';
import { AiOutlineLike } from "@react-icons/all-files/ai/AiOutlineLike";

const Api = ({searchTerm,setSearchTerm}) => {

  const [apiData, setApiData] = useState([]);
  useEffect(()=>{
    fetch('https://api.unsplash.com/photos?client_id=vvB6QWwGMAf0-0JBd3hm5ezi8mueXWACatIiv4VWjk4&per_page=50').then((response)=>{
      return response.json()
    }).then((response)=>{
      setApiData(response)
      console.log(response)
    },[])
  })

  return (
    <div className='ApiMainContainer'>
      <div className='ApiSubContainer'>
        {
          apiData.filter((val)=>{
            if(searchTerm === ""){
              return val
            }else if(val.user.username.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          }).map((val)=>{
            return(
              <div className='main-image-div'>
              <div><img className='gallery-image' src = {val.urls.full}/></div>
              <div className='profile-div'>
                <img src = {val.user.profile_image.small} id='profile'/>
                <div className='name-div'>
                  <h4>{val.user.first_name}</h4>
                  <p>@{val.user.instagram_username}</p>
                </div>
                <p id='likes'>{val.likes}</p>
              </div>  
            </div>
            )
          })
        }
        {
          apiData.map((val)=>{
            return (
            <div className='main-image-div'>
              <div><img className='gallery-image' src = {val.urls.full}/></div>
              <div className='profile-div'>
                <img src = {val.user.profile_image.small} id='profile'/>
                <div className='name-div'>
                  <h4>{val.user.first_name}</h4>
                  <p>@{val.user.instagram_username}</p>
                </div>
                <p id='likes'>{val.likes}</p>
                {/* <AiOutlineLike/> */}
              </div>  
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Api;