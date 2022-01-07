import styled from 'styled-components';
import teslaS from '../../assets/teslaS.png';
import teslaY from '../../assets/teslaY.png';
import tesla3 from '../../assets/tesla3.png';
import teslaX from '../../assets/teslaX.png';



export const Container = styled.div`
    .colored:nth-child(1) {
        background-image: url(${teslaS});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .colored:nth-child(2) {
        background-image: url(${teslaY});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .colored:nth-child(3) {
        background-image: url(${tesla3});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .colored:nth-child(4) {
        background-image: url(${teslaX});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`;
