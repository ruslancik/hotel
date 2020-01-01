import styled from 'styled-components';
import defaultHero from '../images/room-2.jpeg';

const StyledHero = styled.header `

    min-height: 60vh;
    background: url(${props => props.img ? props.img : defaultHero}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
s
`;

export default StyledHero;