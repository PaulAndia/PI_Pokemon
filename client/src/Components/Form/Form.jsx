import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, postPokemon } from '../../Redux/Actions';
import { Modal } from '../Modal/Modal';
import { NavBar } from '../NavBar/NavBar';
import styles from './Form.module.css'

export function Form() {
    const dispatch = useDispatch();
    const typesPoke = useSelector(state => state.types); 

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch]);

    const [disable, setDisable] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [formInput, setFormInput] = useState({
        name: "",
       image: "",
       life: 0,
       attack: 0,
       defense: 0,
       speed: 0,
       height: 0,
       weight: 0,
       types: []
    });

    const [errors, setErrors] = useState({}); // -- setErrors({})

    //regular expressions
    const regExp = {
    name: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\-., ]{5,30}$/,
    image:  /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/,
    }

    //error alerts
    const alerts = {
    name: "Name between 5 and 30 characters",
    image: "Insert an URL ",
    weight: "Weight between 1-2500 (pounds)",
    height: "Height between 1-250 (decimetres)"
    }

    // validation
    function validate (value){ // value is the object with inputs ---> {}
    let errors = {};
        if(!regExp.name.test(value.name)){ // --> if value does not meet this condition... then
            errors.name = alerts.name;
        }
        // if(!regExp.image.test(value.image) ){
        //     errors.image = alerts.image;
        // }
        if(value.weight > 2500 || value.weight < 1 || !value.weight){
            errors.weight = alerts.weight;
        }
        if(value.height > 250 || value.height < 1 || !value.height){
            errors.height = alerts.height;
        }
    return errors; // --> errors is an object whose value will be assigned to the state errors 
    }

    function handleInputChange (e) {
        e.preventDefault();
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
        setErrors(
            validate ({
            ...formInput,
            [e.target.name]: e.target.value
         })
        )
        setDisable(false)
    }

    function handleSelect (e){
        setFormInput({
            ...formInput,
            types: [...formInput.types, e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postPokemon(formInput))
        setFormInput({
            name: "",
           image: "",
           life: 0,
           attack: 0,
           defense: 0,
           speed: 0,
           height: 0,
           weight: 0,
           types: []
        })
        setDisable(true)
    }

    function deleteSelectedType(value){
        setFormInput({
            ...formInput,
            types: [...formInput.types.filter(e => {return e !== value})]
        })
    }

    return (
        <>
        <NavBar/>
        <div className={styles.container}>
            <h2>CREATE YOUR POKEMON</h2>
                <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputCont}>
                    <label htmlFor = "name" >Name: </label>
                        <input 
                            className={styles.input}
                            id="name"
                            type="text"
                            name="name"
                            value={formInput.name}
                            onChange={handleInputChange}
                            placeholder="Pokemon name"
                            autoComplete='off'
                            // required
                        />
                        
                        <br/>
                </div>
                <div>
                    {errors.name ? <span className={styles.errors}>{errors.name}</span>: null}
                </div>
                
                
                <div className={styles.inputCont}>
                    <label htmlFor = "image" >Image: </label>
                    <input 
                        className={styles.input}
                        id="image"
                        type="text"
                        name="image"
                        value={formInput.image}
                        onChange={handleInputChange}
                        placeholder="Ex: https://example.com/photo.jpg"
                        autoComplete='off'
                        // required
                    />
                    <br/>
                </div>
                <div>
                     {errors.image ? <span className={styles.errors}>{errors.image}</span>: null}
                </div>

            <div className={styles.ranges}>
                <div className={styles.rangeCont}>
                    <label htmlFor = "life" >Life: </label>
                    <input 
                        className={styles.range}
                        id="life"
                        type="range"
                        name="life"
                        min={0}
                        max={100}
                        value={formInput.life}
                        onChange={handleInputChange}/>
                    <span>{formInput.life}</span>
                    <br/>
                </div>

                <div className={styles.rangeCont}> 
                <label htmlFor = "attack" >Attack: </label>
                    <input 
                        className={styles.range}
                        id="attack"
                        type="range"
                        name="attack"
                        min={0}
                        max={100}
                        value={formInput.attack}
                        onChange={handleInputChange}/>
                    <span>{formInput.attack}</span>
                    <br/>
                </div>

                <div className={styles.rangeCont}>
                    <label htmlFor = "defense" >Defense: </label>
                    <input 
                        className={styles.range}
                        id="defense"
                        type="range"
                        name="defense"
                        min={0}
                        max={100}
                        value={formInput.defense}
                        onChange={handleInputChange}/>
                    <span>{formInput.defense}</span>
                    <br/>
                </div>

                <div className={styles.rangeCont}>
                    <label htmlFor = "speed" >Speed: </label>
                    <input 
                        className={styles.range}
                        id="speed"
                        type="range"
                        name="speed"
                        min={0}
                        max={100}
                        value={formInput.speed}
                        onChange={handleInputChange}/>
                    <span>{formInput.speed}</span>
                    <br/>    
                </div>
                </div>


                <div className={styles.inputCont}>
                    <label htmlFor = "weight" >Weight: </label>
                    <input 
                        className={styles.input}
                        id="weight" 
                        type="number" 
                        name="weight"
                        value={formInput.weight}
                        onChange={handleInputChange}
                        min={1}
                        max={2500}
                        required
                    /><span>Lbs.</span>
                    <br/>
                </div>
                <div>
                    {errors.weight ? <span className={styles.errors}>{errors.weight}</span>: null}
                </div>

                <div className={styles.inputCont}>
                    <label htmlFor = "height" >Height: </label>
                    <input 
                        className={styles.input}
                        id="height" 
                        type="number" 
                        name="height"
                        value={formInput.height}
                        onChange={handleInputChange}
                        min={1}
                        max={2500}
                        required
                    /> <span>dm.</span>
                    <br/>
                </div>
                <div>
                     {errors.height ? <span className={styles.errors}>{errors.height}</span>: null}
                </div>
                    
                <div className={styles.inputCont}>
                        <label htmlFor = "types" >Select types: </label>
                        <select name= "types" id="types" onChange={handleSelect} className={styles.selectTypes}>
                            {typesPoke.map(e => 
                                (<option value={e.name}>{e.name}</option>)
                                )}
                        </select>
                        
                        <br/>
                </div>
                <div className={styles.selected}>
                            {formInput.types.map((t) => (
                                <div className={styles.containerType}>
                                    <span className={styles.close} onClick={() => deleteSelectedType(t)}>X</span>
                                    {t}
                                </div>
                            ))}
                </div>

                    <button type="submit" name="submit" className={styles.btn} onClick={() => setOpenModal(true)}
                        disabled = {disable === false && Object.entries(errors).length === 0 ? false: true}>CREATE POKEMON   
                    </button>
            </form>
                    <Modal openModal = {openModal} onClose = {() => setOpenModal(false)}/>
            </div>
        </div>
        </>
    )
}