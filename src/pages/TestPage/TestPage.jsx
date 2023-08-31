import { AddToButton, Button, ButtonTransparent, ContactButton, LogButton, OutButton, RadioButton } from "../../components/Button/Button";
import { iconFilter, iconPawprint } from "../../images/icons";
import { modal1, modal2, modal3, modal4, modal5 } from "../../modals/modals";
import { HomeTitle,  TestWrapp } from "../pages.styled/Pages.styled"
import { useState } from "react";

import { MdOutlineLogout} from "react-icons/md";
import { AiOutlinePlus} from "react-icons/ai";
import { ModalPopup } from "../../components/ModalPopup/ModalPopup";



export const TestPage =()=> {

    const [showModal, setShowModal] = useState(false);
    const [modals, setModals] = useState(modal1)



    const onModalOpen = () => {
      setShowModal(true);
   
    };
  
    const onModalClose = () => {
        setShowModal(false);
      
    };


    

    return(
        <TestWrapp >
     

            <HomeTitle> Test Page</HomeTitle>

            <Button onClick={() => {
  setModals(modal1);
  onModalOpen(); 
  }}>   
  Learn more </Button>

    <ButtonTransparent onClick={() => {
  setModals(modal2);
  onModalOpen(); 
  }}>Learn more {iconFilter} </ButtonTransparent>

    <LogButton onClick={() => {
  setModals(modal3);
  onModalOpen(); 
  }}>Log IN {iconPawprint}</LogButton>

<OutButton onClick={() => {
  setModals(modal4);
  onModalOpen(); 
  }}>  Logout<MdOutlineLogout/></OutButton>

<ContactButton onClick={() => {
  setModals(modal5);
  onModalOpen(); 
  }}>Contact</ContactButton>


  <AddToButton >Add Pet <AiOutlinePlus/></AddToButton>



  <RadioButton>your pet</RadioButton>
  <RadioButton>sell</RadioButton>
  <RadioButton>lost/found</RadioButton>
  <RadioButton>in good hands</RadioButton>

  {showModal && (
        <ModalPopup {...modals} onClose ={onModalClose} isOpen={showModal}/> //  onClose ={onModalClose}   {...modal1} 
    )}
      

                 {/* {!showWorkHours && (
                            <>
                             <p>{item?.workDays ? item.workDays[0].isOpen  :  "closed"}</p>
                                <span>{item?.workDays ?  item?.workDays[0].from : "---"}</span>
                                <span>{item.workDays ? item.workDays[0].to : '---'}</span>
                            </>         )} */}

                        {/* {!showWorkHours && (
                            <>
                                {item.workDays ? (
                                    <>
                                        <p>{item.workDays[0].isOpen ? "open" : "closed"}</p>
                                        <span>{item.workDays[0].from || "---"}</span>
                                        <span>{item.workDays[0].to || '---'}</span>
                                    </>
                                ) : (
                                <p>Hours not available</p>
                                )}
                            </>
                        )} */}


                        

                        {/* {!showWorkHours && (
                            
                        <Calendar className='Calendar'>
                        {openDaysCount.map((day, index) => (
                          <div key={index}>
                            {day.isOpen && (
                              <>
                                <p>{days[index]}</p>
                                <span>{day.from || "---"}</span>
                                <span>{day.to || '---'}</span>
                              </>
                            )}
                          </div>
                        ))}
                      </Calendar>
                            )} */}
         
         {/* <>
                                         <div>
                                             <p>MN</p>
                                             <span>{"a1"}</span>
                                         
                                         </div>
                                         <div>
                                             <p>TU</p>
                                             <span>{"a1"}</span>
                                         
                                         </div>
                                         <div>
                                             <p>{"mn"}</p>
                                             <span>{"a1"}</span>
                                         
                                         </div>
                                         <div>
                                             <p>{"mn"}</p>
                                             <span>{"a1"}</span>
                                         
                                         </div>
                                         <div>
                                             <p>{"mn"}</p>
                                             <span>{"a1"}</span>
                                         
                                         </div>
                                         <div>
                                             <p>{"mn"}</p>
                                             <span>{"a1"}</span>
                                         
                                         </div>
                                         <div>
                                             <p>{"mn"}</p>
                                             <span>{"a1"}</span>
                                         
                                         </div>
                                     </> */}
            
        </TestWrapp>
    )
}
