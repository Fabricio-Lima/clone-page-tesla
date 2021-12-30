import React from 'react';
import { Container } from './styles';


const ModelWrapper: React.FC = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    );
}

export default ModelWrapper;
