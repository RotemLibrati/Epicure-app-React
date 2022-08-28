import React, { useState, createContext } from 'react';

export const SetOrder = createContext();

const SetToggleOrderProvider = (props) => {
    const [toggleOrder, setToggleOrder] = useState(false);
    const [createOrder, setCreateOrder] = useState(false);
    const [confirmPayamnt, setConfirmPayment] = useState(false);

    const changeToggleOrder = e => setToggleOrder(e);
    const changeCreateOrder = e => setCreateOrder(e);
    const changeConfirmPayment = e => setConfirmPayment(e);
    return (
        <SetOrder.Provider value={{
            toggleOrder, createOrder, setToggleOrder, changeToggleOrder, changeCreateOrder,
            confirmPayamnt, changeConfirmPayment
        }}>
            {props.children}
        </SetOrder.Provider>
    )
};

export default SetToggleOrderProvider;