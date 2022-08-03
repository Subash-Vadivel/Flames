import './resources/css/Love.css';
import Lovei from './resources/images/Love.jpg';
import Aff from './resources/images/affection.jpg';
import En from './resources/images/Enemy.jpg';
import Fri from './resources/images/friends.jpg';
import Mir from './resources/images/Marriage.jpg';
import Sis from './resources/images/bros.jpg';
import Dif from './resources/images/def.jpg';
import lo from './resources/images/logo.webp';
import { useState } from 'react';
var notes="Try Your Luck";
var sam=<img src={Dif} height="200px" alt='Marriage'/>;
function res(n1,n2)
{
    if((n1.length===0 )|| (n2.length===0))
    {
        notes="Try Your Luck";
        sam=<img src={Dif} height="200px" alt='Marriage'/>;
        return;

    }
    var r1 = n1.toLowerCase();
    var r2 = n2.toLowerCase();
    r1 = r1.replace(/\s+/g, '');
    r2 = r2.replace(/\s+/g, '');
    
    var count = 0;
    var len1 = r1.length;
    for (var i = 0; i < len1; i++)
    {
      for (var j = 0; j <r2.length; j++)
      {
        if (r1[i] === r2[j])
        {
          count = count + 1;
         r2= r2.replace(r2[j], "");
          break;
          
          }
        }
      }
    var total = r2.length + len1 - count;
    
    var f = "flames";
    var c = 0;
    var a = 1, k = 0;
    if (total === 0) {
        notes="Friend";
        sam=<img src={Fri} height="200px" alt='Marriage'/>;
        return;
      
    }
    else {
      while(true)
      {
        for (i = 0; i < 6; i++)
        {
          if (f[i] === "$")
          {
            
            continue;
          }
          c = c + 1;
          
          if (c % total === 0)
          {
            
          
            a = f[i];
            k = k + 1;
            f = f.replace(f[i], "$");
            
          
          }
        
        
        }
        if (k === 6)
        {
          
          break;
          }
      
        
      }
      if (a === 'm')
      {
        notes="Marriage";
        sam=<img src={Mir} height="200px" alt='Marriage'/>;
        return;
              }
      else if (a === "f")
      {
        notes="Friends";
        sam=<img src={Fri} height="200px" alt='Friends'/>;
        return;
        
      }
      else if (a === 's')
      {
        notes="Marriage";
        sam=<img src={Sis} height="200px" alt='Marriage'/>;
        return;
      }
      else if (a === "l")
      {
        notes="Love";
        sam=<img src={Lovei} height="200px" alt='Love'/>;
        return;
        
      }
      else if (a === 'a')
      {
        notes="Affection";
        sam=<img src={Aff} height="200px" alt='Affection'/>;
        return;
        
      }
      else if (a === "e")
      {
        notes="Enenmy";
        sam=<img src={En} height="200px" alt='Enenmy'/>;
        return;
        
        }
}
}


function Love()
{
    const[n1,onN1]=useState("");
    const[n2,onN2]=useState("");
    
     return(<>
     <div className='cen'>
        <img src={lo} height="200px" alt='Loading'/>

        </div>
     <div className='container'>
     <form className='forms' onSubmit={res(n1,n2)}>
        <label for="name1">Your Name : </label>
        <input type="name" value={n1} name="person1" onChange={(event)=>{onN1(event.target.value)}} id="name1"></input><br></br>
        <label for="name2">Crush Name : </label>
        <input type="name" value={n2} name="person2" onChange={(event)=>{onN2(event.target.value)}} id="name2"></input><br></br>
     </form>
     </div>
     <div className='container2'>
        <div className='wrapper'>
          {sam}
          </div>
          <div className='wrapper-note'>
             {notes}
          </div>
     </div>
     </>);
}
export default Love;