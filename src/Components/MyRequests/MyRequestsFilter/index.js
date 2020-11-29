import React from 'react'
import './myRequestsFilter.css'
import {Input,Button} from 'antd'
import {useSelector, useDispatch} from 'react-redux'


function MyRequestsFilter() {
    const { experienceFilter, wilayaFilter } = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    return (
        <div className='sidebar-filter'>
            <div className='filters-inputs'>
            <Input className='filter-inputs' placeholder='Entrez un mot clé'
            />
            <Input className='filter-inputs' placeholder='Entrez une wilaya' value={wilayaFilter}/>
            <Input className='filter-inputs' placeholder="Nombre d'année d'experience" value={experienceFilter} onChange={(e)=>dispatch({
                type: 'SET_STATE',
                payload: {experienceFilter: e.target.value}
            })}/>
            <Input className='filter-inputs' placeholder='Age'/>
            <Button style={{backgroundColor: '#00796b', marginTop:'25px', color: '#fff', fontWeight: 'bold',borderRadius: '6px', height:'7vh'}}> Revoir touts les annonces</Button>
            </div>
          
        </div>
    )
}

export default MyRequestsFilter
