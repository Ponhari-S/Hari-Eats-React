import { useState } from "react";

const Section=({title, description, isVisible, setIsVisible})=>{
    return(
        <div className="border border-[#ddd] p-5 m-5"> 
            <h1 className="text-2xl font-bold">{title}</h1>
            {
                isVisible ? <button className="py-2.5 px-5 border-none bg-[#267919] text-white rounded-sm cursor-pointer hover:bg-[#1b5613]" onClick={()=>setIsVisible(false)}>Hide</button> : <button className="py-2.5 px-5 border-none bg-[#267919] text-white rounded-sm cursor-pointer hover:bg-[#1b5613]" onClick={()=>setIsVisible(true)}>Show</button>
            }
            {isVisible && <p className="mt-5">{description}</p>}
        </div>
    )
}

const Instamart =()=>{

    const [visibleSection, setVisibleSection] = useState("about");
    const setIsVisible=(section)=>{
        setVisibleSection(section);
    }

    const isVisible=(section)=>{
        return visibleSection === section;
    }

    const sections=[
        {
            id:"about",
            title:"About Instamart",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque."
        },
        {
            id:"team",
            title:"Team Instamart",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque."
        },
        {
            id:"careers",
            title:"Careers",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque."
        }
    ]

    return(
        <div>
            <Section title={"About Instamart"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque."} isVisible={true} setIsVisible={()=>{}} />
            <Section title={"Team Instamart"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque."} isVisible={false} setIsVisible={()=>{}} />
            <Section title={"Careers"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque."} isVisible={false} setIsVisible={()=>{}} />    
        </div>
    )
}

export default Instamart;