import React, { useState } from 'react';
import styled from 'styled-components';

// Assets
import Group from "../../../assets/svg/Group.svg";
import Truck from "../../../assets/svg/truck.svg";
import Payment from "../../../assets/svg/payment.svg";
import UserAvatar from "../../../assets/ProfileTop.png";

// Component - Custom hooks
import useWindowDimensions from "../CustomHooks";

const Title = styled.div`
    background-color: #202942;
    border-radius: 6px 6px 0 0;
    height: 82px;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const SubTitle = styled.div`
    opacity: 0.5;
    font-size: 13px;
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
`;
const CardFooter = styled.div`
`;

const Card = ({data, showShadow}) => {
    const [toggleDetails, setToggleDetials] = useState(false);

    const toggle = () => setToggleDetials(!toggleDetails);

    const { height,  width } = useWindowDimensions();

    const cardWidth = (width/100) * 90;
    const cardMargin = (height/100) * 5;

    const showDetails = !toggleDetails ? 'd-none' : '';

    return (
        <div className={`card ${showShadow ? "shadow" : ""}`} 
        style={{width: cardWidth, marginTop: cardMargin, marginBottom: cardMargin}}>
            <Title className="card-title">
                {data.vehicleModel}
                <SubTitle>Posted at {data.postedAt}</SubTitle>
            </Title>
            <CardBody className="cardBody">
                <p>
                    <div className="iconWrapper"><img alt="" src={Group} /></div>
                    <span>{data.data1}</span>
                </p>
                <p>
                    <div className="iconWrapper"><img alt="" src={Truck} /></div>
                    <span>{data.data2}</span>
                </p>
                <p>
                    <div className="iconWrapper"><img alt="" src={Payment} /></div>
                    <span>{data.data3}</span>
                </p>
            </CardBody>
            <CardFooter className={`footer ${toggleDetails ? 'toggled' : ''}`}>
                <div>
                    <p className="text-center toggleBtn" onClick={toggle}>More Details <i class={`fa fa-chevron-${toggleDetails ? 'down' : 'up'}`}></i></p>
                </div>
                <div className="footerContent">
                    <img className={`userAvatar ${showDetails}`} alt="" src={UserAvatar} />
                    <div className={`userDetails ${showDetails}`}>
                        <p>{data.ownerDetails.firstName} {data.ownerDetails.lastName}</p>
                        <p>{data.ownerDetails.city}, {data.ownerDetails.state}</p>
                    </div>
                </div>
            </CardFooter>
        </div>
    )
}

export default Card