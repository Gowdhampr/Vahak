import React, { useState } from 'react'
import Card from '../../components/Core/Card'

// Components
import LabelComponent from "../../components/Core/Label"
import VehicleDetailsCard from "../../components/Core/VehicleDetailsCard"
import CurrencyField from '../../components/Core/CurrencyInputField';
import Form from '../../components/Core/Form';
import InputField from '../../components/Core/InputTextField';
import { ButtonFilled } from '../../components/Core/ButtonFilled';

function Home() {
    const vehicleDetails = {
        ownerDetails: {
            firstName: "Rohan",
            lastName: "Sharma",
            city: "Bengaluru",
            state: "Karnataka"
        },
        vehicleModel: "Honda City",
        postedAt: "1 Nov, 9.30 AM",
        data1: "Specification 01",
        data2: "Specification 02",
        data3: "Specification 03"
    }

    const [priceAmount, setPriceAmount] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');

    const handlePriceChange = (e) => {
        setPriceAmount(e.target.value);
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const allowToBid = (phoneNumber.length && name.length) <= 0 ? true : false;
    return (
        <div>
            <LabelComponent className="text-center">Old Car Available</LabelComponent>
            {/* Vehicle details card */}
            <VehicleDetailsCard showShadow={true} data={vehicleDetails} />
            {/* Biding card */}
            <Card>
                <LabelComponent className="text-center">Place Your BID</LabelComponent>
                {/* Currency field */}
                <CurrencyField handlePriceChange={e => handlePriceChange(e)} />
                {/* Price negotiate buttons */}
                <div className="priceButtonContainer">
                    <input 
                        type="radio" 
                        id="fixedPrice" 
                        name="priceButton" 
                        value="Fixed Price" 
                        disabled={!priceAmount ? true : false} 
                    />
                    <label className="btnLabel" for="fixedPrice">Fixed Price</label>

                    <input 
                        type="radio" 
                        id="negotiation" 
                        name="priceButton" 
                        value="Rate Negotiation"
                        disabled={!priceAmount ? true : false}
                    />
                    <label className="btnLabel" for="negotiation">Rate Negotiation</label>
                </div>
                {/* Form */}
                <Form>
                    <InputField name="phone" type="text" label="Enter your mobile number*"
                        required
                        pattern="^\d{10}$"
                        onChange={e => handlePhoneNumber(e)}
                    />
                    <InputField 
                        name="name" 
                        label="Enter your name*"
                        required
                        onChange={e => handleName(e)}
                    />
                    <InputField 
                        name="name"
                        label="Enter Remarks (optional)" 
                    />
                </Form>
            </Card>
            <ButtonFilled label="Bid Now" disabled={allowToBid} />
        </div>
    )
}

export default Home;
