import { configureStore } from "@reduxjs/toolkit";
import trainer from './slices/trainer.slice'



export default configureStore({
    reducer: {
        trainer
    }
})

const darkModeToggle = document.getElementById('.bdark');
const body = document.body;

darkModeToggle,addEventListener('click', e => {
    body.classList.toggle('dark');
});
