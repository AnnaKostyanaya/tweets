import React from 'react';
import {Loader, LoaderDot} from './Loader.styled';

const ReactLoader = () => {
    return (
        <Loader>
        <LoaderDot></LoaderDot>
        <LoaderDot></LoaderDot>
        <LoaderDot></LoaderDot>
        </Loader>
    );
};

export default ReactLoader;