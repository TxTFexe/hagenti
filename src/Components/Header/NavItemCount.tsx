import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function NavItemCount() {
    const { totalCount, items } = useSelector((state: RootState) => state.cart);
    const isMounted = React.useRef(false)

    React.useEffect(() => {
        if (isMounted.current){
            const json = JSON.stringify(items);
            localStorage.setItem('cart', json)
        }
        isMounted.current = true 
      }, [items])

    return(
        <div className={totalCount > 0 ? 'nav-item-count':'nav-item-count hide'}>
            {totalCount}
        </div>
)}
