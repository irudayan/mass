import React from "react";
import { useForm } from "react-hook-form";

import saveData from "./some_other_file";

export default function Form() {
 const { register, handleSubmit } = useForm();

 return (
   <form onSubmit={handleSubmit(data => saveData(data))}>
     <h1>New Order</h1>
     <label>Name</label>
     <input name="name" ref={register} />
     <label>Address</label>
     <input name="address" ref={register} />
     <label>Date</label>
     <input name="date" ref={register} />
     <label>Order Number</label>
     <input name="order" ref={register} />
     <input type="submit" />
   </form>
 );
}