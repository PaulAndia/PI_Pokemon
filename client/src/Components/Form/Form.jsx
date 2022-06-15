import React from 'react';
import { useState } from "react";
import styles from './Form.module.css'

export function Form() {

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
    name: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\-., ]{5,50}$/,
    image:  /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/,
    }

    //error alerts
    const alerts = {
    name: "Insert a name between 5 and 50 characters",
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
        if(!regExp.image.test(value.image) ){
            errors.image = alerts.image;
        }
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
    }


    return (
        <div>
            <form>
                <label htmlFor = "name" >Name: </label>
                    <input 
                        id="name"
                        type="text"
                        name="name"
                        value={console.log(formInput.name)}
                        onChange={handleInputChange}
                        placeholder="Pokemon name"
                        autoComplete='off'
                        required
                    />
                     {errors.name ? <span className={styles.errors}>{errors.name}</span>: null}
                    <br/>

                    <label htmlFor = "image" >Image: </label>
                    <input 
                        id="image"
                        type="text"
                        name="image"
                        value={console.log(formInput.image)}
                        onChange={handleInputChange}
                        placeholder="Ex: https://example.com/photo.jpg"
                        autoComplete='off'
                        required
                    />
                     {errors.image ? <span className={styles.errors}>{errors.image}</span>: null}
                    <br/>


                    <label htmlFor = "life" >Life: </label>
                    <input 
                        id="life"
                        type="range"
                        name="life"
                        min={0}
                        max={100}
                        value={formInput.life}
                        onChange={handleInputChange}/>
                    <span>{formInput.life}</span>
                    <br/>
                    
                    <label htmlFor = "attack" >Attack: </label>
                    <input 
                        id="attack"
                        type="range"
                        name="attack"
                        min={0}
                        max={100}
                        value={formInput.attack}
                        onChange={handleInputChange}/>
                    <span>{formInput.attack}</span>
                    <br/>
                    
                    <label htmlFor = "defense" >Defense: </label>
                    <input 
                        id="defense"
                        type="range"
                        name="defense"
                        min={0}
                        max={100}
                        value={formInput.defense}
                        onChange={handleInputChange}/>
                    <span>{formInput.defense}</span>
                    <br/>

                    <label htmlFor = "speed" >Speed: </label>
                    <input 
                        id="speed"
                        type="range"
                        name="speed"
                        min={0}
                        max={100}
                        value={formInput.speed}
                        onChange={handleInputChange}/>
                    <span>{formInput.speed}</span>
                    <br/>    
                        

                    <label htmlFor = "weight" >Weight: </label>
                    <input 
                        id="weight" 
                        type="number" 
                        name="weight"
                        value={formInput.weight}
                        onChange={handleInputChange}
                        min={1}
                        max={2500}
                        required
                    /><span>Lbs.</span>
                     {errors.weight ? <span className={styles.errors}>{errors.weight}</span>: null}
                    <br/>


                    <label htmlFor = "height" >Height: </label>
                    <input 
                        id="height" 
                        type="number" 
                        name="height"
                        value={formInput.height}
                        onChange={handleInputChange}
                        min={1}
                        max={2500}
                        required
                    /> <span>dm.</span>
                     {errors.height ? <span className={styles.errors}>{errors.height}</span>: null}
                    <br/>
                        

                    <button type="submit" name="submit" 
                        disabled = {Object.entries(errors).length === 0 ? false: true}>Create   
                    </button>
            </form>
        </div>
    )
}