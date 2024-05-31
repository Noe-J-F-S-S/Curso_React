import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App (){

    const formatUserName = (userName) =>`@${userName}`
    
    return(
        <section className='App'>
            
            <TwitterFollowCard  
            formatUserName={formatUserName} 
            isFollowing={false} 
            userName="midudev" 
            name="Noe Sierra Sotelo "
            /> 

            <TwitterFollowCard  
            formatUserName={formatUserName} 
            userName="midudev" 
            name="Noe Sierra Sotelo "
            /> 
            
            <TwitterFollowCard  
            formatUserName={formatUserName} 
            isFollowing userName="xnoex27" 
            name="Noe Sierra Sotelo "
            /> 
            
            <TwitterFollowCard  
            formatUserName={formatUserName} 
            userName="midudev" 
            name="Noe Sierra Sotelo "
            /> 
        
        </section>
       
    )
    
}