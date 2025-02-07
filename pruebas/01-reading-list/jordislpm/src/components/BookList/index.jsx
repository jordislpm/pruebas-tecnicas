import React from 'react'
import { useEffect, useState, useContext} from 'react'
import styles from "./bookList.module.css"
import { Book } from '../Book'
import { BooksAvailable } from '../../context/contextBooks'
import { FiltersContext } from '../../context/contextFilters'
import useFilter from '../../Hooks/useFilter'

const BookList = () => {

const [store, dispatch] = useContext(BooksAvailable)
const [filtersBooks, setFiltersBooks]= useState([])

const {listBooks, listRead} = store;
const modifiers = {
    addRead : "moveToRead", 
}

const {books}=useFilter()


return (

    <section className={styles.section}>
        <h1 className={styles.title}>Lista de libros disponibles</h1>
        <ul className={styles.booklist}>
        {books && books.map((element)=>{
            return(
                <Book
                book={element} 
                key={element.id}
                id={element.id}
                title={element.title}
                cover={element.cover}
                modifiers={modifiers}
                add={true}/>
            )
       })}
        </ul>
    
    </section>
  )
}

export default BookList