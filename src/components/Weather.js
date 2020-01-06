import React from 'react';

const Weather = (props) =>{
    return (  
        <div className='info'>
            {
                props.temperature && 
                <p className='info_value'>temperature :
                    <span className='info_value'>{props.temperature}</span>
                </p> 
            }
            {
                props.city && 
                <p className='info_value'>city :
                    <span className='info_value'>{props.city}</span>
                </p> 
            }
            {
                props.country && 
                <p className='info_value'>country :
                     <span className='info_value'>{props.country}</span>
                </p> 
            }
            {
                props.humidity &&
                 <p className='info_value'>humidity :
                     <span className='info_value'>{props.humidity}</span>
                 </p> 
            }
            {
                props.description && 
                <p className='info_value'>description :
                    <span className='info_value'>{props.description}</span>
                </p> 
            }
            {
                props.error &&
                 <p className='info_value'>error :
                    {props.error}
                </p> 
            }
        </div>
    );
  }
 
export default Weather;
