import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { calcTotalCount } from "../../utils/calcTotalCount";
import { findItemInCart } from "../../utils/findItemInCart";

export type FavoriteItem = {
    id: string,
    pic: string,
    type: string,
    name: string,
    price: number,
    count: number
}

interface FavoriteSliceState {
    totalCount: number;
    items: FavoriteItem[];
}

const { items, totalCount } = getCartFromLS();

const initialState: FavoriteSliceState = {
    totalCount,
    items,
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavoriteItem(state, action: PayloadAction<FavoriteItem>) {
            const findItem = findItemInCart(state.items, action.payload.id)

            if (findItem) {
                return
            } else{
                state.items.push({
                    ...action.payload, 
                    count: 1,
                });
            }
            state.totalCount = calcTotalCount(state.items)
        },
        removeFavoriteItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(obj => obj.id !== action.payload);
            state.totalCount = calcTotalCount(state.items)
        }
    }
});

export const { addFavoriteItem, removeFavoriteItem } = favoriteSlice.actions;

export default favoriteSlice.reducer;