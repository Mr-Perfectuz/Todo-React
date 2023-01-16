import React from 'react'
import { Basket, ContainerNav, Title } from './style'
//  Ant design
import { Button, Drawer, theme } from 'antd';
import { useState } from 'react';

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <ContainerNav>
            <Title>Products</Title>
            <Basket onClick={showDrawer}>Cart(0)</Basket>
            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={onClose}
                open={open}
                getContainer={false}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </ContainerNav>
    )
}
