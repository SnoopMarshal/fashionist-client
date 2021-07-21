import React, { useState, useEffect } from 'react'
import ItemCard from './components/item-card'
import axios from './../../../../axios';
export default function Shop() {
    const [item, setItem] = useState([]);
    const [categories, setCategories] = useState([]);

    const getAllItems = async () => {
        try {
            const result = await axios.get('api/item');
            setItem(result.data)
        } catch (error) {
            console.error(error);
        }
    }

    const getAllCategories = async () => {
        try {
            const result = await axios.get('api/category');
            setCategories(result.data);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getAllCategories()
        getAllItems()
    }, [])
    return (
        <div className="container mx-auto flex w-full lt-mt-body">
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 p-4">
                {
                    item.map(p => (
                        <ItemCard key={p._id} item={p} />
                    ))
                }
            </div>
        </div>
    )
}
