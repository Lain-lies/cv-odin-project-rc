import { useState } from 'react';

function EducationItem({id, title, schoolName, date, educList, setEducList}){
    
    function handleInputChange(e){
        const changedProperty = `${e.target.className}`;
        setEducList(
            educList.map(item => {
                if(item.id === id){
                    const temp = {...item};
                    temp[changedProperty] = e.target.value;
                    return temp;
                }
                return item;
            })
        )
    }
    return(
        <div>
            <input  className = 'tos' type='text' placeholder='Title of Study' value = {title} onChange={handleInputChange}/>
            <input  className = 'schoolName' type='text' placeholder='School Name' value = {schoolName} onChange={handleInputChange}/>
            <input  className = 'schoolDate' type='date' placeholder='Date' value = {date} onChange={handleInputChange}/>
        </div>
    )
}
function EducationSection(){
    const [educList, setEducList] = useState([{id: 0, tos:"", schoolName: "", schoolDate: ""}]);
    const nextId = educList.length;

    function handleAddClick(){
        setEducList([...educList, {id: nextId, tos:"", schoolName: "", schoolDate: ""}])
    }

    return(
        <section>
            <button type='button' onClick={handleAddClick}>Add Educ +</button>
            <ol>
                {educList.map(item => 
                    <li key = {item.id}> 
                        <EducationItem
                            id = {item.id}
                            title = {item.tos}
                            schoolName = {item.schoolName}
                            date = {item.schoolDate}
                            educList = {educList}
                            setEducList = {setEducList}
                        />
                    </li>
                )}
            </ol>
        </section>
    )
}

export {
    EducationSection
}