import { useState, useEffect } from 'react';
import { AddToButton, ButtonTransparent, FavButton } from '../Button/Button';
import { arrowD, iconFilter,  iconchbox} from '../../images/icons';

import { useDispatch} from 'react-redux';
import { AiOutlinePlus } from 'react-icons/ai';
import {
   
    CheckList1,
    CheckList2,
    DropdownMenu,
    FilterWrapper,
    FiltersBtn1,
    FiltersBtn2,
    RadioInput,
    RadioLabel,
} from './NoticesFilters.styled';
import { modal1 } from 'modals/modals';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';
import { useAll } from 'hooks/useAll';
import { setFilterByAgeIdx, setFilterByGender } from 'redux/filter/filterSlice';
import { langEN, langUA } from 'utils/languages';

export default function NoticesFilters({ state }) {

   
    const [lang, setLang] = useState(langUA)
    const [showModal, setShowModal] = useState(false);
    const [modals, setModals] = useState(modal1);
    const [showFilters, setShowFilters] = useState(false);
    const [big1, setBig1] = useState(false);
    const [big2, setBig2] = useState(false);
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const { modalIsOpen,language } = useAll();
    
    
    const dispatch = useDispatch();

    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])
    
    useEffect(() => {
        setShowFilters(false);
    }, [modalIsOpen]);

    const onModalClose = () => {
        setShowModal(false);
    };

    const checkRoute = () => {
        if (!isLoggedIn) {
            setModals(modal1);
            setShowModal(true);
        } else {
            navigate('/add-pet', { state: state });
        }
    };


    return (
        <>
            <FilterWrapper className="NoticesFilters">
                <ButtonTransparent
                    onClick={() =>{
                         setShowFilters(!showFilters)
                         dispatch(setFilterByAgeIdx(null))
                         dispatch(setFilterByGender(''))
                        }}
                    className="FilterBtn"
                >
                   {lang.filter} {iconFilter}
                </ButtonTransparent>
                <FavButton
                    onClick={() => setShowFilters(!showFilters)}
                    className="filround"
                >
                    {' '}
                    {iconFilter}
                </FavButton>

                <AddToButton onClick={checkRoute}>
                    {lang.addPet} <AiOutlinePlus />
                </AddToButton>
                {showFilters && (
                    <DropdownMenu>
                        <h3> {lang.filters} </h3>

                        <div>
                        <FiltersBtn1  bor ={big1}>
                                <span onClick={() => setBig1(!big1)}>
                                    {' '}
                                    {arrowD}  {lang.byage} 
                                </span>
                        </FiltersBtn1>
                        { big1 &&  <CheckList1  visible ={big1}>
                            <RadioLabel htmlFor="a">
                                <div></div>
                                <RadioInput className='radio-input'
                                onClick={()=> dispatch(setFilterByAgeIdx(0))}
                                type="radio" id="a" name="radio"/>
                                {iconchbox}   {lang.oneyear} </RadioLabel>
                            <RadioLabel htmlFor="b">
                                <div></div>
                                <RadioInput className='radio-input'
                                 onClick={()=> dispatch(setFilterByAgeIdx(1))}
                                type="radio" id="b" name="radio"/>
                                {iconchbox}   {lang.twoyears} </RadioLabel>
                            <RadioLabel htmlFor="c">
                                <div className='box'></div>
                                <RadioInput className='radio-input'
                                 onClick={()=> dispatch(setFilterByAgeIdx(2))}
                                type="radio" id="c" name="radio"/>
                                {iconchbox}  {lang.fromtwo} </RadioLabel>
                          
  
                            </CheckList1>}
                            </div>

                        <div>
                            <FiltersBtn2   bor ={big2}>
                                <span onClick={() => setBig2(!big2)}>
                                    {' '}
                                    {arrowD}  {lang.bygender} 
                                </span>
                            </FiltersBtn2>
                            { big2 &&  <CheckList2  visible ={big1}>
                                <RadioLabel htmlFor="d">
                                    <div className='box'></div>
                                    <RadioInput  className='radio-input'
                                    onClick={()=> dispatch(setFilterByGender('female'))}
                                    type="radio" id="d" name="radio"/>
                                     {iconchbox}   {lang.fem} </RadioLabel>
                                <RadioLabel htmlFor="e">
                                    <div className='box'></div>
                                    <RadioInput  className='radio-input'
                                     onClick={()=> dispatch(setFilterByGender('male'))}
                                    type="radio" id="e" name="radio"/>
                                    {iconchbox}   {lang.man} </RadioLabel>
                                
                            
                                </CheckList2>}
                        </div>


                    </DropdownMenu>
                )}
            </FilterWrapper>
            {showModal && (
                <ModalPopup
                    {...modals}
                    onClose={onModalClose}
                    isOpen={showModal}
                />
            )}
        </>
    );
}
