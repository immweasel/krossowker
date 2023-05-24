import React, {useState, useEffect} from "react";
import styles from './CategoriesItem.module.scss'

import FilterIcon from '../../assets/icons/filter.svg'
import axios from "axios";
import {findAllByDisplayValue} from "@testing-library/react";
import CheckboxItem from "./CheckboxItem";

function CategoriesList() {
    const [data, setData] = useState([])
    const [checkboxes, setCheckboxes] = useState({});

// Функция для обновления состояния Checkbox по id
    const handleCheckboxChange = (id) => {
        setCheckboxes((prevState) => ({
            ...prevState,
            [id]: !prevState[id] // Инвертируем текущее состояние Checkbox
        }));
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const resp = await axios.get('http://localhost:3001/categories')
                setData(resp.data)
            } catch (e) {
                console.log('Error: ', e)
            }
        };
        fetchCategories()
    }, [])

    const handleCheckedItem = (id) => {
        setData((prevData) =>
            prevData.map((item) => {
                if (item.id === id) {
                    return {...item, checked: !item.checked};
                }
                return item;
            })
        );
    };

    return (
        <div className={styles.categoriesItem}>
            <div className={styles.categoriesItem_header}>
                <div className={styles.categoriesItem_cont}>
                    <img src={FilterIcon} alt="filter-icon"/>
                    <h1 className={styles.categoriesItem_title}>Фильтр</h1>
                </div>

                <button>
                    Свернуть
                </button>
            </div>
            {data.map(item => (
                <CheckboxItem
                    key={item.id}
                    label={item.name}
                    checked={checkboxes[item.id]}
                    onChange={() => handleCheckboxChange(item.id)}
                />
            ))}
        </div>
    )
}

export default CategoriesList;